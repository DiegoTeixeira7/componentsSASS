function handleChangeImage(src, id="imagePrincipal") {
  const image = document.getElementById(id)
  image.src = src;
}

var translateCurrent = 0;

function handleScrollImages(position) {
  const images = document.querySelectorAll('.scroll')

  if(position === 'up' || position === 'right') {
    translateCurrent -= 50
  } else if(position === 'down' || position === 'left') {
    translateCurrent += 50
  }

  if(translateCurrent < -150) {
    translateCurrent = -150
  } else if(translateCurrent > 150) {
    translateCurrent = 150
  }

  images.forEach(function(img) {
    if(position === 'up' || position === 'down') {
      img.style.transform = 'translate(0,' + translateCurrent + 'px)';
    } else if(position === 'right' || position === 'left') {
      img.style.transform = 'translate(' + translateCurrent + 'px,0)';
    }
  });
}

let indexImageCarrossel = 0

function handleMoveCarrossel(position) {
  const imagesSrc = ['assets/1.webp', 'assets/2.webp', 'assets/3.webp']

  if(position === 'right') {
    indexImageCarrossel = indexImageCarrossel === (imagesSrc.length - 1) ? 0 : indexImageCarrossel + 1
  } else {
    indexImageCarrossel = indexImageCarrossel === 0 ? imagesSrc.length - 1 : indexImageCarrossel - 1
  }

  const animatedImage = document.getElementById("image-carrossel");
  animatedImage.style.opacity = 0;
  // animatedImage.style.transform = "translateX(-100%)"

  setTimeout(function() {
    handleChangeImage(imagesSrc[indexImageCarrossel], 'image-carrossel')
    animatedImage.style.opacity = 1;
    // animatedImage.style.transform = "translateX(0)"
  }, 500);
}