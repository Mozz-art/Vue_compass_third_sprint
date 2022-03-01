export default function ClockConstant(){

    let date = new Date();
    let hour = date.getHours();
    let minute =date.getMinutes();
    let day = new Array ("Domingo", "Segunda", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sabado");
    let month = new Array ("Janeiro", "Fevereiro", "Março", "Abril", "maio", "Junho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");

    if (hour<10){
        hour= "0"+ hour;}

    if (minute<10){
        minute= "0"+ minute;} 

    let hours= hour + ":" + minute;
    document.querySelector("#clock").value = hours;

    var fullDate = (day[date.getDay()]) + " , " + date.getDate() + " de " + month[date.getMonth()] + " de " + date.getFullYear();
    document.querySelector("#Date").innerHTML = fullDate;
}
