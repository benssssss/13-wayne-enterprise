document.addEventListener("DOMContentLoaded", function () {
    const carouselItems = document.querySelectorAll('.carouselItem');
    let currentIndex = 0;
  
    function showSlide(index) {
      carouselItems.forEach(item => {
        item.style.display = 'none';
      });
      carouselItems[index].style.display = 'block';
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % carouselItems.length;
      showSlide(currentIndex);
    }
  
    function previousSlide() {
      currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
      showSlide(currentIndex);
    }
  
    // Show the first slide initially
    showSlide(currentIndex);
  
    // Set up event listeners for next and previous buttons
    document.getElementById('nextBtn').addEventListener('click', nextSlide);
    document.getElementById('prevBtn').addEventListener('click', previousSlide);
  });