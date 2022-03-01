<template>
    <section id="conteinerRightHome">
        <div id="weatherClock">
            <clockID />
            <Weather />
        </div>
        <div id="txtIntro">
            <div id="txtIntroduc">
            <SubTitle :text="'Our mission is'" />
            <TextP :text="'Nossa missão é'" />
            <TextContent :text="'to transform the world'" />
            <TextP :text="'transformar o mundo'" />
            <TextContent :text="'building digital experiences'" />
            <TextP :text="'construindo experiências digitais'" />
            <TextContent :text="'that enable our client’s growth'" />
            <TextP :text="'que permitam o crescimento dos nossos clientes'" />
            </div>
        </div>    
    </section>
</template>

<script>

import clockID from "@/components/clock/index.vue"
import Weather from "@/components/weather/index.vue"
import TextContent from "@/components/textContent/title/index.vue"
import TextP from "@/components/textContent/text/index.vue"
import SubTitle from "@/components/textContent/sub-title/index.vue"

export default {
    name: "ContainerRightHome",
    components: {
        clockID,
        Weather,
        TextContent,
        TextP,
        SubTitle,
    }
}

</script>

<style lang="scss" scoped>

@import './index.scss';

</style>