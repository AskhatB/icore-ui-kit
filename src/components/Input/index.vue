<template>
  <label
    :class="classes"
    :style="fieldStyle"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
  >
    <div v-if="icon" class="field-icon" :style="iconWrapperStyle">
      <icon :name="icon" :color="iconColor" width="16px" height="16px" />
    </div>
    <input
      :v-model="value"
      :type="type"
      :disabled="disabled"
      :placeholder="placeholder"
      :style="inputStyle"
      @input="onChange"
      @focus="onFocus"
      @blur="onBlur"
    />
    <div class="field-label">{{ label }}</div>
    <div class="field-clear" @click.stop="clear">
      <icon name="clear-circle" width="12px" height="12px" />
    </div>
  </label>
</template>

<script>
import Icon from "../../icons";
import { generalColors } from "../../variables";

export default {
  name: "ui-input",
  components: { Icon },
  props: {
    value: { type: [String, Object, Array, Number], default: null },
    placeholder: { type: String, default: "" },
    disabled: { type: Boolean, default: false },
    error: { type: Boolean, default: false },
    warning: { type: Boolean, default: false },
    round: { type: String, default: "4px" },
    label: { type: String, default: "" },
    icon: { type: String, default: null },
    iconFilled: { type: Boolean, default: false },
    iconAlign: {
      type: String,
      default: "left",
      validator: value => ["left", "right"].indexOf(value) !== -1
    },
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

  data() {
    return {
      hovered: false,
      focused: false
    };
  },

  computed: {
    classes() {
      return {
        field: true,
        "field-disabled": this.disabled,
        "field-icon-right": this.iconAlign === "right",
        "field-icon-filled": this.iconFilled,
        [`field-${this.size}`]: true
      };
    },

    fieldStyle() {
      return {
        background: this.disabled ? generalColors.gray[100] : "#ffffff",
        borderRadius: this.round,
        boxShadow: `0 0 0 ${this.focused ? "1.5px" : "1px"} ${this.colorState}`
      };
    },

    bgStyle() {
      return {
        borderRadius: this.round
      };
    },

    iconWrapperStyle() {
      return {
        background: this.iconFilled ? this.colorState : null,
        borderRadius:
          this.iconAlign === "left"
            ? `${this.round} 0 0 ${this.round}`
            : `0 ${this.round} ${this.round} 0`
      };
    },

    iconColor() {
      return this.iconFilled ? "#ffffff" : this.colorState;
    },

    colorState() {
      if (this.disabled) {
        return generalColors.gray[200];
      }
      if (this.error) {
        return generalColors.danger;
      }
      if (this.warning) {
        return generalColors.orange;
      }
      if (this.focused) {
        return generalColors.blue[300];
      }
      if (this.hovered) {
        return generalColors.blue[200];
      }
      return generalColors.blue[100];
    },

    inputStyle() {
      return {
        background: this.disabled ? generalColors.gray[100] : "#ffffff",
        marginLeft: this.icon && !this.iconFilled ? "0" : "10px"
      };
    }
  },

  methods: {
    onChange(event) {
      this.$emit("onChange", event);
    },

    onFocus() {
      this.hovered = false;
      this.focused = true;
    },

    onBlur() {
      this.focused = false;
      console.log("we", this.value);
    },

    clear() {
      this.value = "";
    }
  }
};
</script>

<style src="./style.css" scoped></style>
