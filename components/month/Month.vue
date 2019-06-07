<template>
  <div>
    <pre>{{ moment }} </pre>
    <h1>{{ moment.format("MMMM") }} {{ moment.format("YYYY") }}</h1>
    <div class="calendar">
      <!-- Calendar header loop -->
      <div class="days-of-week">
        <div class="day-block" v-for="(label, index) in dayLabels" :key="index">{{ label }}</div>
      </div>

      <!-- Days loop -->
      <div class="days-of-month">
        <!-- Insert correct offset for first week. -->
        <div class="day-block" v-for="blank in firstDayOfMonth" :key="blank+'-blank'"></div>

        <day
          v-for="(day, index) in computedDays"
          :key="index"
          :date="day.dateObject"
          :events="getEventsForDay(day.dateObject)"
        />
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";
import { props, computed, methods, watch, data, created } from "../mixin";

export default {
  created,
  name: "month",
  data,
  props,
  computed,
  methods,
  watch
};
</script>
