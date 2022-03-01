import router from "./../router/index.js"
export default function Timeout() {

    let timer = 601;
  
    let timerInterval = setInterval(function() {
      if(timer == "0") {
        router.push({ name: "Login"})
        timer = 601;
        clearInterval(timerInterval)
  
      } else {
        timer--;
        document.querySelector("#timer").innerHTML = timer;
      }
    }, 1000);
  }