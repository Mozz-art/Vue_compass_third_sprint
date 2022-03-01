export default function LoginJs() {

    
const inputUser = document.querySelector("#User")
const inputPassword = document.querySelector("#Password")
let Confirmation = false
const Erro = document.querySelector("#Erro")
const BtnContinue = document.querySelector("#btnContinue")

BtnContinue.addEventListener("click", () => {
      
    if (inputUser.value === "admin" && inputPassword.value === "admin") {
        Confirmation = true

    } else {
        Erro.style.display="none"
        inputUser.style.border = "1px solid #E9B425"
        inputPassword.style.border = "1px solid #E9B425"
    }
  })
}

