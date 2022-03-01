<template>
<body onselectstart="return false">
    <div id="app">
    <router-view/>
  </div>
</body>
</template>

<script>


export default {
  name: 'App'
}

</script>

<style lang="scss">

@import './App.scss';
@import './assets/reset.scss';

</style>
