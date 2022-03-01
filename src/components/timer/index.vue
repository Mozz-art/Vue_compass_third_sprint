<template>
  <div>
    <div class="grid-item" id="seconds"></div>
  </div>
</template>

<script>
import timeout from "@/constants/timeout.js"

export default {
    name: "Timeout",
}
timeout()
</script>

<style lang="scss" scoped>

@import "./index.scss";

</style>