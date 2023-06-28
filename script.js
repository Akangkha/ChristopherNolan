const track = document.getElementById("image-track");
window.onmousedown = (e) => {
  track.dataset.mouseDownAt = e.clientX;
};

const img = track.getElementsByClassName("image");
console.log(img);

window.onmousemove = (e) => {
  if (track.dataset.mouseDownAt == "0") return;

  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
    maxDelta = window.innerWidth / 2;

  const percentage = (mouseDelta / maxDelta) * -100;
  const nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
  track.dataset.percentage = nextPercentage;
  // track.style.transform = `translate(${percentage}%,  0%)`;
  track.animate({
    transform:`translate(${nextPercentage}%,  0%)`
  },
  {duration:1200,fill:"forwards"});
  for (const image of track.getElementsByClassName("image")) {
    // image.style.objectPosition = `${nextPercentage + 100}% 50%`;
    //  image.style.filter = `brightness(50%)`;
    // console.log(nextPercentage + 100);
    image.animate({
      objectPosition : `${nextPercentage + 100}% 50%`
    },
    {duration:1200,fill:"forwards"});
  }
};

window.onmouseup = () => {
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.percentage;
};
