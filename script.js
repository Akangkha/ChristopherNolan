const track = document.getElementById("image-track");
window.onmousedown = (e) => {
  track.dataset.mouseDownAt = e.clientX;
};



window.onmousemove = (e) => {
  if (track.dataset.mouseDownAt == "0") return;

  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
    maxDelta = window.innerWidth / 2;

  const percentage = (mouseDelta / maxDelta) * -100;
  const nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
  track.dataset.percentage = nextPercentage;
  Math.min(nextPercentage, 0);
  Math.max(nextPercentage, -100);
  track.animate(
    {
      transform: `translate(${nextPercentage}%,  0%)`,
    },
    { duration: 2200, fill: "forwards" }
  );
  for (const image of track.getElementsByClassName("image")) {
    image.animate(
      {
        objectPosition: `${nextPercentage + 100}% 50%`,
      },
      { duration: 1200, fill: "forwards" }
    );
  }
};

window.onmouseup = () => {
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.percentage;
};


let path=document.querySelector('path');
let pathLength=path.getTotalLength('path');
console.log('pathlength:'+pathLength); 
path.style.strokeDasharray = pathLength+" ";
path.style.strokeDashoffset=pathLength;
window.addEventListener('scroll',()=>
{
   var scrollPercentage=(document.documentElement.scrollTop)/(document.documentElement.clientHeight);
   console.log(scrollPercentage); 
   
  var drawLength = pathLength * (scrollPercentage);
  path.style.strokeDashoffset=pathLength- (drawLength-600);
})














// track.style.transform = `translate(${percentage}%,  0%)`;

// image.style.objectPosition = `${nextPercentage + 100}% 50%`;
//  image.style.filter = `brightness(50%)`;
// console.log(nextPercentage + 100);
