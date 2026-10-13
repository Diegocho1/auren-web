export async function enviarCotizacion(payload) {
  const res = await fetch('/api/enviar-cotizacion.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.ok) throw new Error(data.error || 'No se pudo enviar');
}