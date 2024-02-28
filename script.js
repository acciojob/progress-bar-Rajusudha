//your JS code here. If required.
 const circles = document.querySelectorAll('.circle');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    let currentIndex = 0;

    function updateProgress(direction) {
      currentIndex += direction;
      updateButtons();

      circles.forEach((circle, index) => {
        circle.classList.toggle('active', index < currentIndex);
      });
    }

    function updateButtons() {
      prevButton.disabled = currentIndex === 0;
      nextButton.disabled = currentIndex === circles.length;
    }
