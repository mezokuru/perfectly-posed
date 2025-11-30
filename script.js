// Gentle parallax mouse movement for botanicals
(function(){
  const leaves = document.querySelectorAll('.botanical');
  let bounds = document.body.getBoundingClientRect();
  
  window.addEventListener('mousemove', (e)=>{
    const x = (e.clientX / bounds.width - 0.5) * 2; // -1 .. 1
    const y = (e.clientY / bounds.height - 0.5) * 2;
    leaves.forEach((el, idx)=>{
      const depth = (idx+1) * 6;
      el.style.transform = `translate3d(${x * depth}px, ${y * depth * -1}px, 0)`;
    })
  });
  
  window.addEventListener('resize', ()=> bounds = document.body.getBoundingClientRect());

  // Lightweight gallery lazy-loading
  document.querySelectorAll('.gallery img, .card img').forEach(img=>{
    img.loading = 'lazy';
  });
})();


// Gallery filtering
if(document.querySelector('.gallery-filters')){
  const filterBtns = document.querySelectorAll('.filter-btn');
  const photos = document.querySelectorAll('.gallery-page .photo');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      
      // Update active state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Filter photos
      photos.forEach(photo => {
        if(filter === 'all' || photo.dataset.category === filter){
          photo.classList.remove('hidden');
        } else {
          photo.classList.add('hidden');
        }
      });
    });
  });
}

// Lightbox functionality
function initLightbox(){
  // Check if gallery exists on this page
  if(!document.querySelector('.gallery')) return;
  
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `
    <div class="lightbox-content">
      <button class="lightbox-close" aria-label="Close">&times;</button>
      <button class="lightbox-prev" aria-label="Previous">&lsaquo;</button>
      <button class="lightbox-next" aria-label="Next">&rsaquo;</button>
      <img src="" alt="">
      <div class="lightbox-caption"></div>
    </div>
  `;
  document.body.appendChild(lightbox);
  
  const lightboxImg = lightbox.querySelector('img');
  const lightboxCaption = lightbox.querySelector('.lightbox-caption');
  const closeBtn = lightbox.querySelector('.lightbox-close');
  const prevBtn = lightbox.querySelector('.lightbox-prev');
  const nextBtn = lightbox.querySelector('.lightbox-next');
  
  let currentIndex = 0;
  let galleryImages = [];
  
  function openLightbox(index){
    currentIndex = index;
    updateLightboxImage();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  
  function closeLightbox(){
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
  
  function updateLightboxImage(){
    const img = galleryImages[currentIndex];
    const imgElement = img.querySelector('img');
    lightboxImg.src = imgElement.src;
    lightboxImg.alt = imgElement.alt;
    lightboxCaption.textContent = imgElement.alt;
  }
  
  function showNext(){
    currentIndex = (currentIndex + 1) % galleryImages.length;
    updateLightboxImage();
  }
  
  function showPrev(){
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    updateLightboxImage();
  }
  
  // Event listeners
  closeBtn.addEventListener('click', closeLightbox);
  nextBtn.addEventListener('click', showNext);
  prevBtn.addEventListener('click', showPrev);
  
  lightbox.addEventListener('click', (e) => {
    if(e.target === lightbox) closeLightbox();
  });
  
  document.addEventListener('keydown', (e) => {
    if(!lightbox.classList.contains('active')) return;
    if(e.key === 'Escape') closeLightbox();
    if(e.key === 'ArrowRight') showNext();
    if(e.key === 'ArrowLeft') showPrev();
  });
  
  // Attach to gallery images
  const photos = document.querySelectorAll('.gallery .photo');
  photos.forEach((photo) => {
    photo.addEventListener('click', (e) => {
      e.preventDefault();
      // Get all visible photos
      galleryImages = Array.from(document.querySelectorAll('.gallery .photo:not(.hidden)'));
      const visibleIndex = galleryImages.indexOf(photo);
      if(visibleIndex !== -1) openLightbox(visibleIndex);
    });
  });
}

// Page loading animation and initialization
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  initLightbox();
});
