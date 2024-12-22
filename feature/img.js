function showImage(src) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
  
    modal.style.display = "flex"; // Affiche la modal
    modalImage.src = src; // Définit la source de l'image agrandie
  }
  
  function hideImage() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none"; // Cache la modal
  }
  