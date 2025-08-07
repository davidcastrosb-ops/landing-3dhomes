
document.getElementById('formulario').addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  fetch('https://script.google.com/macros/s/AKfycbyZKYPx1jkydjx_KSGPBHqAlnqxKJzvRhh4D3cvGZ5LWrxtn50ZqdMvGrT1rYzASWmQ5w/exec', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      alert('✅ ¡Datos enviados con éxito! Nos pondremos en contacto muy pronto.');
      this.reset();
    } else {
      throw new Error('Error al enviar los datos');
    }
  })
  .catch(error => {
    alert('❌ Error al enviar los datos');
    console.error(error);
  });
});
