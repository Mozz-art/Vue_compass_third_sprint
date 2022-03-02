<template>
    <section id="LOGIN">
        <div id="conteinerPage">
            <ContainerLeftLogin/>
            <ContainerRightLogin/>
        </div>
    </section>
</template>

<script>

import ContainerLeftLogin from "@/containers/centralContainer/login/container-left/index.vue"
import ContainerRightLogin from "@/containers/centralContainer/login/container-right/index.vue"


export default {
    name: "Login",
    components: {
        ContainerLeftLogin,
        ContainerRightLogin,
    }
}

</script>

<style lang="scss" scoped>

@import './index.scss';
@import '@/assets/MediaQuery.scss';
</style>