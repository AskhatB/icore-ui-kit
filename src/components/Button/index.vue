<template>
  <button
    type="button"
    :class="classes"
    :style="style"
    :disabled="disabled"
    @click="onClick"
  >
    <icon
      :name="icon"
      :width="iconSize"
      :height="iconSize"
      :color="style.color"
    />
    <div v-if="!iconButton" :style="contentStyle">
      <slot />
    </div>
  </button>
</template>

<script>
import Icon from "../../icons";

export default {
  components: { Icon },
  name: "my-button",
  props: {
    width: { type: String },
    height: { type: String },
    fontSize: { type: String },
    color: { type: String },
    disabled: { type: Boolean, default: false },
    outlined: { type: Boolean, default: false },
    round: { type: String, default: "4px" },
    circle: { type: Boolean, default: false },
    fontColor: { type: String, default: "#ffffff" },
    icon: { type: String },
    iconButton: { type: Boolean, default: false },
    iconAlign: {
      type: String,
      default: "left",
      validator: value => ["right", "left"].indexOf(value) !== -1
    },
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
      const bgStyle = this.outlined ? "transparent" : this.bgStyle;
      return {
        btn: true,
        "btn-circle": this.circle,
        "btn-icon-right": this.iconAlign === "right",
        "btn-icon-only": this.iconButton,
        [`btn-${bgStyle}`]: true,
        [`btn-${this.size}`]: !this.width,
        [`btn-icon-only-${this.size}`]: this.iconButton
      };
    },

    contentStyle() {
      return {
        [`margin-${this.iconAlign}`]: this.icon ? "8px" : null
      };
    },

    iconSize() {
      const sizes = { large: "20px", medium: "16px", small: "12px" };
      const sizesIconOnly = { large: "24px", medium: "20px", small: "12px" };
      return this.iconButton ? sizesIconOnly[this.size] : sizes[this.size];
    },

    style() {
      const disabledColor = this.disabled ? "#E5E5E5" : this.color;
      return {
        width: this.width,
        height: this.height,
        minWidth: !this.iconButton ? "100px" : null,
        background: !this.outlined ? disabledColor : "transparent !important",
        color: this.outlined ? disabledColor : this.fontColor,
        fontSize: this.fontSize,
        boxShadow: this.outlined
          ? `0 0 0 2px ${disabledColor} !important`
          : "0px 2.85306px 10.699px rgba(0, 0, 0, 0.05)",
        borderRadius: this.circle ? "50%" : this.round
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
