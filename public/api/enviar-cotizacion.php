<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Método no permitido']);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true) ?? [];

// Honeypot: bots fill this hidden field, humans don't
if (!empty($data['website'])) {
    echo json_encode(['ok' => true]);
    exit;
}

// Strip tags and line breaks to prevent header injection
$clean = fn($v) => trim(str_replace(["\r", "\n"], ' ', strip_tags((string)($v ?? ''))));

$nombre      = $clean($data['nombre'] ?? '');
$empresa     = $clean($data['empresa'] ?? '');
$email       = $clean($data['email'] ?? '');
$servicio    = $clean($data['servicio'] ?? '');
$descripcion = trim(strip_tags((string)($data['descripcion'] ?? '')));

// Teléfono is optional here: accept "+52 618 123 4567" style input, normalize to 10 digits
$telefono = preg_replace('/\D/', '', (string)($data['telefono'] ?? ''));
if (strlen($telefono) === 12 && strpos($telefono, '52') === 0) {
    $telefono = substr($telefono, 2);
}

if (
    $nombre === '' || $servicio === '' || $descripcion === '' ||
    !filter_var($email, FILTER_VALIDATE_EMAIL) ||
    ($telefono !== '' && !preg_match('/^\d{10}$/', $telefono))
) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Revisa los campos obligatorios']);
    exit;
}

$to   = 'contacto@aureninfraestructura.com.mx';
$from = 'contacto@aureninfraestructura.com.mx'; // must be an address on your domain

$subject = "Solicitud de cotización de servicio: $servicio";
$body = "Nueva solicitud de cotización de servicio\n\n"
      . "Servicio: $servicio\n"
      . "Nombre: $nombre\n"
      . "Empresa: " . ($empresa !== '' ? $empresa : '(no indicada)') . "\n"
      . "Email: $email\n"
      . "Teléfono: " . ($telefono !== '' ? $telefono : '(no indicado)') . "\n\n"
      . "Descripción del proyecto:\n$descripcion\n";

$headers = [
    "From: Auren Web <$from>",
    "Reply-To: $nombre <$email>",
    'Content-Type: text/plain; charset=UTF-8',
];

$sent = mail($to, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, implode("\r\n", $headers));

if (!$sent) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'No se pudo enviar el correo']);
    exit;
}
echo json_encode(['ok' => true]);