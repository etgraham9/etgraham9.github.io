document.addEventListener("DOMContentLoaded", () => {
  const galleryItems = document.querySelectorAll(".gallery-item img");
  const modal = document.getElementById("lightbox-modal");
  const modalImage = document.getElementById("lightbox-image");
  const modalDescription = document.getElementById("lightbox-description");
  const closeModal = document.getElementById("close-modal");

  galleryItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      const imgSrc = e.target.src;
      const description = e.target.getAttribute("data-description");

      modalImage.src = imgSrc;
      modalDescription.textContent = description;

      modal.style.display = "block";
      document.body.style.overflow = "hidden"; // Disable scrolling
    });
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Enable scrolling
  });

  // Close modal when clicking outside the content
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
});