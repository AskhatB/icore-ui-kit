<template>
  <component
    :is="name"
    :color="color"
    :width="width"
    :height="height"
  ></component>
</template>

<script>
import Tick from "./Tick";
import MoneyBag from "./MoneyBag";
import Blocks from "./Blocks";

export default {
  components: {
    Tick,
    MoneyBag,
    Blocks
  },
  props: {
    name: { type: String, default: "" },
    color: { type: String, default: "#ffffff" },
    width: { type: String, default: "16px" },
    height: { type: String, default: "16px" }
  }
};
</script>
