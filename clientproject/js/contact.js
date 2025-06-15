document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const responseDiv = document.getElementById("formResponse");
    const previewSection = document.getElementById("previewSection");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Get values
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
  
      // Simple client-side validation (beyond required attribute)
      if (!name || !email || !message) {
        responseDiv.textContent = "Please fill out all fields.";
        responseDiv.style.color = "red";
        return;
      }
  
      // Simulate AJAX success
      responseDiv.textContent = "Your message has been sent!";
      responseDiv.style.color = "green";
  
      // Display preview
      document.getElementById("previewName").textContent = name;
      document.getElementById("previewEmail").textContent = email;
      document.getElementById("previewMessage").textContent = message;
      previewSection.style.display = "block";
  
      // Optionally clear form
      form.reset();
    });
  });
  