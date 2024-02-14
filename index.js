document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById('roses-container');
  const numberOfRoses = 10;

  for (let i = 0; i < numberOfRoses; i++) {
    const rose = document.createElement('div');
    rose.classList.add('rose');
    rose.style.left = `${Math.random() * window.innerWidth}px`;
    rose.style.top = `${Math.random() * window.innerHeight}px`;
    rose.style.animation = `rotate ${Math.random() * 5 + 2}s linear infinite`;
    container.appendChild(rose);
  }

  container.addEventListener('touchstart', function(event) {
    const rose = event.target;
    if (rose.classList.contains('rose')) {
      rose.style.animationPlayState = 'paused';
      showPopup();
      setTimeout(() => {
        rose.style.animationPlayState = 'running';
      }, 10000); // 10 segundos
    }
  });

  function showPopup() {
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.textContent = '¡Feliz San Valentín!';
    document.body.appendChild(popup);
    setTimeout(() => {
      document.body.removeChild(popup);
    }, 15000); // 15 segundos
  }
});
