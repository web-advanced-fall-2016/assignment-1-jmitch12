let left = document.getElementById('leftNav');
let right = document.getElementById('rightNav');

left.addEventListener("click" , function(){
	moveSlideLeft();
	setMarginWidth();
});
right.addEventListener("click" , function(){
	moveSlideRight();
	setMarginWidth();
});


let slidePosition=0;
  
function setMarginWidth(){
let slideHolderMargin=-100*slidePosition;
console.log("click");
document.getElementsByClassName('slide-holder')[0].style.marginLeft= slideHolderMargin + '%';

}

//setting as absolute then changing the left value! 

function moveSlideRight() {
  if(slidePosition==2) {
    slidePosition=0}
  else {
    slidePosition++;
  }
}

 function moveSlideLeft() {
  if(slidePosition==0) {
    slidePosition=2}
    else {
      slidePosition=slidePosition-1;
  }

  }
    



