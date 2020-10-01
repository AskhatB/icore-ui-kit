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
      :width="iconParams.size"
      :height="iconParams.size"
      :color="iconParams.color"
    />
    <div v-if="!iconButton" :style="contentStyle">
      <slot />
    </div>
  </button>
</template>

<script>
import Icon from "../../icons";
import { generalColors } from "../../variables";

export default {
  name: "my-button",
  components: { Icon },
  props: {
    disabled: { type: Boolean, default: false },
    outlined: { type: Boolean, default: false },
    round: { type: String, default: "4px" },
    circle: { type: Boolean, default: false },
    icon: { type: String },
    iconButton: { type: Boolean, default: false },
    fluid: { type: Boolean, default: false },
    variant: {
      type: String,
      default: "primary",
      validator: value =>
        ["primary", "secondary", "success", "orange", "danger"].indexOf(
          value
        ) !== -1
    },
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
      return {
        btn: true,
        "btn-circle": this.circle,
        "btn-icon-right": this.iconAlign === "right",
        "btn-icon-only": this.iconButton,
        "btn-outlined-disabled": this.outlined && this.disabled,
        "btn-disabled": !this.outlined && this.disabled,
        [`btn-${this.variant}`]: !this.outlined,
        [`btn-${this.size}`]: true,
        [`btn-${this.variant}-outlined`]: this.outlined,
        [`btn-${this.bgStyle}`]: !this.outlined,
        [`btn-icon-only-${this.size}`]: this.iconButton
      };
    },

    contentStyle() {
      return {
        [`margin-${this.iconAlign}`]: this.icon ? "8px" : null
      };
    },

    iconParams() {
      const sizes = { large: "20px", medium: "16px", small: "12px" };
      const sizesIconOnly = { large: "24px", medium: "20px", small: "12px" };
      const params = {
        color: this.outlined ? generalColors[this.variant] : "#ffffff",
        size: this.iconButton ? sizesIconOnly[this.size] : sizes[this.size]
      };

      if (this.outlined) {
        if (this.disabled) {
          params.color = "#E6E6E6";
        } else {
          params.color = generalColors[this.variant];
        }
      } else {
        params.color = "#ffffff";
      }

      return params;
    },

    style() {
      return {
        width: this.fluid ? "100%" : null,
        minWidth: !this.iconButton ? "100px" : null,
        boxShadow: !this.outlined
          ? "0px 2.85306px 10.699px rgba(0, 0, 0, 0.05)"
          : null,
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

<style src="./style.css" scoped></style>
