var num = 36;
function next1(){
  var one = document.querySelector('.slider');
  num += 36;
  if(num > 0){
    one.style.transform = `perspective(1000px) rotateX(-16deg) rotateY(${num}deg)`
  }
  console.log("hle1")
}
function next2(){
  var two = document.querySelector('.slider');
  num -= 36;
  if(num > 0){
    two.style.transform = `perspective(1000px) rotateX(-16deg) rotateY(-${num}deg)`
  }
}