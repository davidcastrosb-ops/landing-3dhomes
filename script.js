document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formulario");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const datos = new FormData(form);
    const url = "https://script.google.com/macros/s/AKfycbwu_FZgR3nuCxFB92YKhspk-yWo5RfKvBLlsMHOi7JMXejTC-cXJH0L6XddScadq7LQ/exec";

    fetch(url, {
      method: "POST",
      body: datos,
    })
    .then(res => res.ok ? res.text() : Promise.reject(res.status))
    .then(() => {
      alert("✅ Datos enviados con éxito");

      // Meta (Facebook) Event
      if (typeof fbq !== "undefined") {
        fbq('track', 'Lead');
      }

      // Google Ads Event - reemplaza con tus datos reales
      if (typeof gtag !== "undefined") {
        gtag('event', 'conversion', {
          'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL'
        });
      }

      form.reset();
    })
    .catch(err => {
      alert("❌ Error al enviar los datos");
      console.error("Error al enviar:", err);
    });
  });
});
