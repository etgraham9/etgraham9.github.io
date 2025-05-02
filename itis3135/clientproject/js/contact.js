document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const responseDiv = document.getElementById('formResponse');
  
    if (!email.match(/^\S+@\S+\.\S+$/)) {
      responseDiv.textContent = "Please enter a valid email address.";
      return;
    }
    if (!message) {
      responseDiv.textContent = "Message cannot be empty.";
      return;
    }
  
    fetch('https://webpages.charlotte.edu/egraha24/itis3135/clientproject/contact.html', { // Replace with your endpoint
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message })
    })
      .then(res => res.ok ? res.json() : Promise.reject("Submission failed"))
      .then(data => {
        responseDiv.textContent = "Thank you for reaching out!";
        document.getElementById('contactForm').reset();
      })
      .catch(err => {
        responseDiv.textContent = err;
      });
  });
  