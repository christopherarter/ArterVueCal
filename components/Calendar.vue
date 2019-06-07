<template>
  <div>
    <div v-if="view == 'month'">
      <month :events="events" :month="month" :blackoutDates="blackoutDates"/>
    </div>
  </div>
</template>
<script>
import { props, methods } from "./mixin";
export default {
  data() {
    return {};
  },
  props,
  name: "calendar"
};
</script>