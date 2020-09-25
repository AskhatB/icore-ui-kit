<template>
  <button
    type="button"
    :class="classes"
    :style="style"
    :disabled="disabled"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script>
import "./button.css";

export default {
  name: "my-button",
  props: {
    width: {
      type: String
    },
    size: {
      type: String,
      default: "medium",
      validator: value => {
        return ["small", "medium", "large"].indexOf(value) !== -1;
      }
    },
    bgStyle: {
      type: String,
      default: "flat",
      validator: value => {
        return ["flat", "gradient", "transparent"].indexOf(value) !== -1;
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    classes() {
      return {
        btn: true,
        [`btn-${this.bgStyle}`]: true
      };
    },
    style() {
      return {
        width: this.width,
        boxShadow: "0px 2.85306px 10.699px rgba(0, 0, 0, 0.05)",
        borderRadius: "4px"
      };
    }
  },

  methods: {
    onClick() {
      this.$emit("onClick");
    }
  }
};
</script>
