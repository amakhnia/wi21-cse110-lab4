var intervalID = window.setInterval(myFunction, 1000);
function myFunction(){
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
}
