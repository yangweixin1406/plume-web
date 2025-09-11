<template>
  <div class="date-info">
    <span>{{ currentTime }}</span>
    <span style="margin: 0 20px;">{{ currentWeekDay }}</span>
    <span>{{ currentDate }}</span>
  </div>
</template>

<script>
import { dateTimeMixin } from "@/mixins/dateTimeMixin";
export default {
  mixins: [dateTimeMixin]
}
</script>

<style lang="scss">
.date-info {
  display: flex;
  align-items: center;
  font-size: 27px;
  color: rgba(#fff, .6);
  margin-right: 30px;
}
</style>