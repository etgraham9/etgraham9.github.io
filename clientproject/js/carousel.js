document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".carousel-image");
    let currentIndex = 0;
  
    function showNextImage() {
      images[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].classList.add("active");
    }
  
    // Initialize carousel
    if (images.length > 0) {
      images[currentIndex].classList.add("active");
      setInterval(showNextImage, 3000); // Change every 3 seconds
    }
  });
  