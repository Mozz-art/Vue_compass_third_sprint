<template>
    <footer>
        <div id="Footer">
            <div id="gridConteiner">
                <div class="grid-item" id="firstItem">Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.</div>
                <div class="grid-item" id="bar"></div>
                <div class="grid-item" id="refresh">Aplication refresh in</div>
                <div class="grid-itemTimer"><h1 id="timer"></h1><h2>seconds</h2></div>
                <div class="grid-item" id="seconds"><Timeout /></div>
                <div class="grid-item" id="navegation">Continuar Navegando</div>
                <router-link to="/" class="grid-item" id="btnLogout">Logout</router-link>
            </div>
        </div>
    </footer>
</template>

<script>

import Timeout from "@/components/timer/index.vue"

export default {
    name: "Footer",
    components: {
        Timeout
    }
  
}

</script>

<style lang="scss" scoped>

@import './index.scss';
@import '@/assets/MediaQuery.scss';
</style>