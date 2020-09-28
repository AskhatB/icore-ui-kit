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
export default {
  name: "my-button",
  props: {
    width: { type: String },
    height: { type: String },
    fontSize: { type: String },
    bgColor: { type: String },
    disabled: { type: Boolean, default: false },
    round: { type: String, default: "4px" },
    circle: { type: Boolean, default: false },
    fontColor: { type: String, default: "#ffffff" },
    size: {
      type: String,
      default: "medium",
      validator: value => ["small", "medium", "large"].indexOf(value) !== -1
    },
    bgStyle: {
      type: String,
      default: "flat",
      validator: value =>
        ["flat", "gradient", "transparent"].indexOf(value) !== -1
    }
  },

  computed: {
    classes() {
      return {
        btn: true,
        "btn-circle": this.circle,
        [`btn-${this.bgStyle}`]: true,
        [`btn-${this.size}`]: !this.width
      };
    },
    style() {
      return {
        width: this.width,
        height: this.height,
        boxShadow: "0px 2.85306px 10.699px rgba(0, 0, 0, 0.05)",
        borderRadius: this.circle ? "50%" : this.round,
        backgroundColor: this.bgColor,
        color: this.fontColor,
        fontSize: this.fontSize
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

<style src="./button.css" scoped></style>
