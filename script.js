
document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();
  const data = {
    nombre: document.getElementById("nombre").value,
    correo: document.getElementById("correo").value,
    telefono: document.getElementById("telefono").value,
    zona: document.getElementById("zona").value,
    credito: document.getElementById("credito").value,
    edad: document.getElementById("edad").value,
  };

  fetch("https://script.google.com/macros/s/AKfycbwWDK1LHUWW2AodwEd6LKnYBeH5zXpE7wZQZyMBoPcfMVvPsmlypvGLg5qtw-A1ZyB5/exec", {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(() => {
    alert("✅ Datos enviados con éxito. Un asesor certificado te contactará.");
  });

  gtag('event', 'conversion', { 'send_to': 'AW-977116457/6g0RCI3irIEbEKm69tED' });
});
