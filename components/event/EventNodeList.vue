<template>
  <div>
    <button
      v-if="nodeListPreviewString"
      :title="nodeListString"
      class="event-node-list"
      @click="$emit('calendar-event-node-clicked', nodes)"
    >{{ nodeListPreviewString }}</button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    nodes: {
      type: Array,
      required: true
    }
  },
  computed: {
    nodeListPreviewString() {
      if (this.nodes.length > 0) {
        if (this.nodes.length > 1) {
          return this.nodes[0].title + " (+" + (this.nodes.length - 1) + ")";
        } else {
          return this.nodes[0].title;
        }
      }
    },

    nodeListString() {
      let string = "";
      this.nodes.forEach(node => {
        string = string + node.title + ", ";
      });

      return string;
    }
  },
  name: "event-node-list"
};
</script>
<style>
.event-node-list {
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  border: 0px solid;
  color: #fff;
  cursor: pointer;
  padding: 5px 10px;
}

.event-node-list:hover {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>