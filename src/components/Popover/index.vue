<template>
  <div
    class="popover-wrapper"
    v-click-outside="onClickOutside"
    @mouseenter="onHover"
    @mouseleave="onHover"
  >
    <slot name="activator" :action="action"></slot>
    <div v-if="show" :class="classes">
      <slot />
    </div>
  </div>
</template>

<script>
import clickOutside from "../../directives/clickOutside";

export default {
  directives: { clickOutside },

  props: {
    openOnHover: { type: Boolean, default: false },
    variant: {
      type: String,
      default: "default",
      validator: value => ["default", "triangle"].indexOf(value) !== -1
    }
  },

  data() {
    return {
      show: false
    };
  },

  computed: {
    classes() {
      return {
        popover: true,
        "popover-border-radius": this.variant === "triangle",
        "popover-triangle": this.variant === "triangle"
      };
    }
  },

  methods: {
    onClickOutside() {
      this.show = false;
    },
    action() {
      this.show = !this.show;
    },
    onHover() {
      if (this.openOnHover) {
        this.action();
      }
    }
  }
};
</script>

<style src="./style.css" scoped></style>
