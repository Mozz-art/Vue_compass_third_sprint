<template>
<div id="Columns">
    <div class="BoxLogin">
        <div id="inputUser">
            <input type="User" placeholder="Usuário" id="User" v-model="input.User">
            <div id="inputUserSize">
            <img draggable="false" src="@/assets/user-Icon.png" alt="IconeUser">
            </div>
        </div>
        <div id="inputPassword">
            <input type="password" placeholder="Senha" id="Password" v-model="input.Password">
            <div id="inputPasswordSize">
            <img draggable="false" src="@/assets/password-Icon.png" alt="IconeSenha">
            </div>
        </div>
    </div>
    <div id="ErrorPosition">
        <div id="Erro">
        <p>{{ text }}</p>
        </div>
    </div>
    <div id="Continue">
    <button @click="login()" id="btnContinue">Continuar</button>
    </div>
</div>
</template>

<script>

export default {
    name: "InputBox",
    data(){
        return{
            input:{
                User: "",
                Password: "",    
            }  
        }
    },
    methods: {
        login(){
            if(this.input.User == "admin" && this.input.Password == "admin"){
                this.$store.commit("setAuthentication", true);
                localStorage.setItem("User", this.input.User)
                localStorage.setItem("Password", this.input.User)
                this.$router.replace({name: "Home"})
                

            } else{
                document.querySelector("#Erro").style.display = "block";
                document.querySelector("#User").style.border = "1px solid #E9B425"
                document.querySelector("#Password").style.border = "1px solid #E9B425"
            }
        },
        redirect(){

            setTimeout(this.Loged(),5000)
        },
        Loged(){
            this.$store.state.users.forEach((event)=>{
                if(localStorage.this.input.User === event.user){
                    this.$router.push({ name: "Home" });
                } else{
                    return false
                }
            })

        }
    },
    props: {
        text:{
            type: String,
            default: 'Ops, usuário ou senha inválidos, Tente novamente!'
    },
}
}

</script>

<style lang="scss" scoped>

@import './index.scss';

</style>