function handleChangeImage(src) {
  const image = document.getElementById("imagePrincipal")
  image.src = src;
}

var translateYCurrent = 0;

function handleScrollImages(position) {
  const images = document.querySelectorAll('.scroll')
  console.log(images)

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