<template>
<div>
    <h2>{{ text }}</h2>
</div>
</template>

<script>

export default {
    name: 'SubTitle',
    props: {
        text:{
            type: String,
            default: 'SubTitle'
        },
    },
};
</script>

<style lang="scss" scoped>

@import "@/containers/centralContainer/home/container-right/index.scss";


</style>

