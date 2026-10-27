<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Método no permitido']);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true) ?? [];
$nombre = trim($data['nombre'] ?? '');

// Honeypot: bots fill this hidden field, humans don't
if (!empty($data['website'])) {
    echo json_encode(['ok' => true]);
    exit;
}

// Strip tags and line breaks to prevent header injection
$clean = fn($v) => trim(str_replace(["\r", "\n"], ' ', strip_tags((string)($v ?? ''))));

$nombre   = $clean($data['nombre'] ?? '');
$email    = $clean($data['email'] ?? '');
$telefono = $clean($data['telefono'] ?? '');
$producto = $clean($data['producto'] ?? '');
$mensaje  = trim(strip_tags((string)($data['mensaje'] ?? '')));

if ($nombre === '' || !preg_match('/^\d{10}$/', $telefono) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Revisa los campos obligatorios']);
    exit;
}

$to   = 'contacto@aureninfraestructura.com.mx'; // your hosting mailbox
$from = 'contacto@aureninfraestructura.com.mx';     // must be an address on your domain

$subject = "Cotización de producto: $producto";
$body = "Nueva solicitud de cotización\n\n"
      . "Producto: $producto\n"
      . "Nombre: $nombre\n"
      . "Email: $email\n"
      . "Teléfono: $telefono\n\n"
      . "Mensaje:\n" . ($mensaje !== '' ? $mensaje : '(sin mensaje)') . "\n";

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