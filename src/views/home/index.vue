<template>
  <main>
    <section id="HOME">
    <div id="conteinerHome">
    <ContainerLeftHome/>
    <ContainerRightHome/>
    </div>
    <Footer/>
    </section>
  </main>
</template>

<script>

import ContainerLeftHome from '@/containers/centralContainer/home/container-left/index.vue';

import ContainerRightHome from '@/containers/centralContainer/home/container-right/index.vue';

import Footer from '@/containers/footer/index.vue';

export default {
  name: 'Home',
  components: {
    ContainerLeftHome,
    ContainerRightHome,
    Footer
  },
};

</script>

<style lang="scss" scoped>

@import './index.scss';
@import '@/assets/MediaQuery.scss';

</style>