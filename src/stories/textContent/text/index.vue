<template>
<div>
    <p>{{ text }}</p>
</div>
</template>

<script>

export default {
    name: 'Text',
    props: {
        text:{
            type: String,
            default: 'Text'
        },
    },
};
</script>

<style lang="scss" scoped>
@import "@/containers/centralContainer/home/container-right/index.scss";
</style>

