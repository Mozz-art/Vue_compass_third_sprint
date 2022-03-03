<template >
    <div id="Clock">
    <input type="text" placeholder="time" id="clock" disabled>
    <p id="Date"></p>
    </div>
</template>

<script>
import ClockConstant from "@/constants/dayWeek.js"

export default {
    name: "clockID",
}
setInterval(()=>{

  ClockConstant()
  
}, 1000);
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>