<template>
<div>   
    <h1>{{ text }}</h1>
</div>
</template>

<script>

export default {
    name: 'TextContent',
    props: {
        text:{
            type: String,
            default: 'TextContent'
        },
    },
};
</script>

<style lang="scss" scoped>
@import "@/containers/centralContainer/home/container-right/index.scss";
</style>
