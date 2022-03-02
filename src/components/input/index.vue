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
                this.$router.replace({name: "Home"})
            } else{
                document.querySelector("#Erro").style.display = "block";
                document.querySelector("#User").style.border = "1px solid #E9B425"
                document.querySelector("#Password").style.border = "1px solid #E9B425"
            }
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