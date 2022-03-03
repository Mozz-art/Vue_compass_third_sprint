<template>
    <div id="weather" >
        <span id="city">Error</span>
        <div id="weatherBox">
        <span id="temperature">Reload</span>
        <img id="icon" src=" ">
        </div>
    </div>
</template>

<script>
import weatherAPI from "@/api/Clima.js"

export default {
    name: "Weather",
}
weatherAPI() 

</script>

<style lang="scss" scoped>

@import "./index.scss";

</style>