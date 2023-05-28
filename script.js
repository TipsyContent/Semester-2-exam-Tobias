
//Header kode for at vise hvilken side du aktivt er på Henter infomation fra Window.location.href som er url linkket og matcher-
//det url du er på lige nu så Url artboogie = Vist side Artboogie. Vil give aktiv effect på Nav baren

document.querySelectorAll('.nav-link').forEach (link => {
    if(link.href === window.location.href){
        link.setAttribute('aria-current', 'page');
    }
});

//Nav Bar aktiv slut
//Slider

// animation på landing page //

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });
  
  const hiddenElements = document.querySelectorAll('.underherosection, .reverseunderherosection');
  hiddenElements.forEach((el) => observer.observe(el));

  
//Instafeed
var userFeed = new Instafeed({
  get: 'user',
  target: 'instafeed-container',
  resolution: 'low_resolution',
  accessToken: 'Acess key',
  template: '<a href="{{image}}" onclick="openLightbox(event)"><img src="{{image}}" alt="Instagram Picture"></a>'
  
});

userFeed.run();

function openLightbox(event) {
  event.preventDefault();
  var imageUrl = event.currentTarget.getAttribute('href');
  var modal = document.getElementById('lightbox-modal');
  var modalImg = document.getElementById('lightbox-image');
  modal.style.display = 'block';
  modalImg.src = imageUrl;
}

var closeBtn = document.getElementsByClassName('close')[0];
closeBtn.onclick = function() {
  var modal = document.getElementById('lightbox-modal');
  modal.style.display = 'none';
};

window.onclick = function(event) {
  var modal = document.getElementById('lightbox-modal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

//instafeed