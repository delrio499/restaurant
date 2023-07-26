// JavaScript
const galleryItems = document.querySelectorAll('.gallery img');

galleryItems.forEach((item) => {
  item.addEventListener('click', () => {
    displayImage(item.src, item.alt);
  });
});

function displayImage(src, alt) {
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');

  const img = new Image();
  img.src = src;
  img.alt = alt;

  overlay.appendChild(img);

  overlay.addEventListener('click', () => {
    overlay.remove();
  });

  document.body.appendChild(overlay);
} 