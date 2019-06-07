<template>
  <div
    @click="$emit('calendar-day-click', { date, events, day, blackout })"
    v-bind:class="{ 
            'day-block day day-blackout': blackout,
            'day-block day': !blackout,
             }"
  >
    <p class="day-label">{{ day }}</p>

    <!-- Events for day -->
    <div v-if="events.length > 0 && !blackout">
      <event v-for="(event, index) in events" :key="index" :event="event"/>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {};
  },
  props: {
    date: {
      required: true
    },
    events: {
      type: Array,
      required: false
    }
  },
  computed: {
    dateContext() {
      return moment(date);
    },
    day() {
      return this.date.date();
    },
    blackout() {
      return (
        this.$parent.blackoutDates.find(blackoutDate =>
          this.date.isSame(blackoutDate, "day")
        ) != null
      );
    }
  },
  name: "day"
};
</script>
