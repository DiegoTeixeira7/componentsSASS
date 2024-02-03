function handleChangeImage(src, id="imagePrincipal") {
  const image = document.getElementById(id)
  image.src = src;
}

var translateYCurrent = 0;

function handleScrollImages(position) {
  const images = document.querySelectorAll('.scroll')

  if(position === 'up') {
    translateYCurrent -= 50
  } else {
    translateYCurrent += 50
  }

  if(translateYCurrent < -150) {
    translateYCurrent = -150
  } else if(translateYCurrent > 150) {
    translateYCurrent = 150
  }

  images.forEach(function(img) {
    img.style.transform = 'translateY(' + translateYCurrent + 'px)';
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