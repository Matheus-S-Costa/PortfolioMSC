$('.navbar a').on('click', function (e) {
    if (this.hash !== '') {
      e.preventDefault();
 
      const hash = this.hash;
 
      $('html, body')
        .animate({
          scrollTop: $(hash).offset().top
        },800);
    }
  });

  var modal = document.querySelector(".modal");
  var trigger = document.querySelector(".trigger");
  var closeButton = document.querySelector(".close-button");
  
  function toggleModal() {
      modal.classList.toggle("show-modal");
  }
  
  function windowOnClick(event) {
      if (event.target === modal) {
          toggleModal();
      }
  }
  
  trigger.addEventListener("click", toggleModal);
  closeButton.addEventListener("click", toggleModal);
  window.addEventListener("click", windowOnClick);