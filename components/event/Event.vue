<template>
  <button
    @mouseover="hover()"
    @mouseleave="mouseLeave()"
    v-bind:class="{ 
            'event-active': event.hover,
            'event-beginning': isBeginning,
            'event-ending': isEnd }"
    class="event"
    @click="eventClicked"
  >
    <slot name="event-item">
      <div v-if="isBeginning">
        <strong>{{ event.name }}</strong>
      </div>
      <event-node-list :nodes="computedNodes"/>
    </slot>
  </button>
</template>
<script>
import moment from "moment";
export default {
  data() {
    return {
      moment: moment
    };
  },
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  computed: {
    date() {
      return this.$parent.date;
    },

    isBeginning() {
      return this.date.isSame(this.event.start_date, "day");
    },

    isEnd() {
      return this.date.isSame(this.event.end_date, "day");
    },

    computedNodes() {
      return this.event.nodes.filter(node =>
        this.date.isSame(node.date, "day")
      );
    }
  },

  methods: {
    eventClicked() {
      this.$emit("calendar-event-clicked", this.event);
    },

    hover() {
      this.event.hover = true;
    },

    mouseLeave() {
      this.event.hover = false;
    },

    isHovering() {
      return this.event.hover;
    }
  },
  name: "event"
};
</script>
