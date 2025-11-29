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
