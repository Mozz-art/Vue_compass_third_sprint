<template>
    <section id="conteinerLeft">
        <div id="mainColumn" >
            <img draggable="false" id="LogoMidiaQuery" src="@/assets/white-Compass-Login.png" alt="Small logo MidiaQuery">
            <div class="section1">
                <h1>Olá,</h1>
                <p>Para continuar navegando de forma segura, efetue o login na rede.</p>
            </div>
            <div id="Login">
                <div id="LoginEdit">
                    <p>Login</p>
                    <InputBox />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import InputBox from '@/components/input/index.vue';
export default {
    name: "Login",
     components:{
        InputBox,
    }
    
}

</script>

<style lang="scss" scoped>

@import './index.scss';
@import '@/assets/MediaQuery.scss';

</style>