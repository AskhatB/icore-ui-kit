<template>
  <label class="field" :class="classes" :style="fieldStyle">
    <input
      v-model="inputValue"
      :type="type"
      :disabled="disabled"
      :placeholder="placeholder"
      @input="onChange"
    />
    <div class="field-bg" :style="bgStyle"></div>
  </label>
</template>

<script>
export default {
  name: "ui-input",
  props: {
    value: {},
    width: { type: String },
    height: { type: String },
    fontColor: { type: String },
    bgColor: { type: String },
    placeholder: { type: String, default: "" },
    fontSize: { type: String, default: "14px" },
    disabled: { type: Boolean, default: false },
    round: { type: String, default: "4px" },
    size: {
      type: String,
      default: "medium",
      validator: value => ["small", "medium", "large"].indexOf(value) !== -1
    },
    type: {
      type: String,
      default: "text",
      validator: value =>
        ["text", "number", "password", "tel", "email", "url", "search"].indexOf(
          value
        ) !== -1
    }
  },

  computed: {
    inputValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("onChange", val);
      }
    },
    classes() {
      return {
        field: true,
        [`field-${this.size}`]: true
      };
    },
    fieldStyle() {
      return {
        width: this.width,
        height: this.height,
        boxShadow: "0px 2.85306px 10.699px rgba(0, 0, 0, 0.05)",
        backgroundColor: this.bgColor
      };
    },
    bgStyle() {
      return {
        borderRadius: this.round,
        border: `1px solid #7ACCFF`
      };
    },
    inputStyle() {
      return {
        color: this.fontColor,
        fontSize: this.fontSize
      };
    }
  },

  methods: {
    onChange(event) {
      this.$emit("onChange", event);
    }
  }
};
</script>

<style src="./input.css" scoped></style>
