const scrollBanner = document.getElementById('scrollBanner');

scrollBanner.addEventListener('touchstart', handleTouchStart, false);
scrollBanner.addEventListener('touchmove', handleTouchMove, false);

let startX = null;
let scrollLeft = null;

function handleTouchStart(event) {
  startX = event.touches[0].pageX;
  scrollLeft = scrollBanner.scrollLeft;
}

function handleTouchMove(event) {
  if (startX === null) {
    return;
  }

  const touchX = event.touches[0].pageX;
  const walk = (touchX - startX) * 2; // Adjust the sensitivity by multiplying with a factor

  scrollBanner.scrollLeft = scrollLeft - walk;
}

function goToWebsite(websiteURL) {
      window.location.href = websiteURL;
      //alert("Oops! Terjadi kesalahan. 4000");
    }