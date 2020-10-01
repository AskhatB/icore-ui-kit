<template>
  <div id="app">
    <UiInput v-model="inputValue" />
  </div>
</template>

<script>
import UiInput from "../src/components/Input";

export default {
  name: "App",
  components: { UiInput },
  data() {
    return {
      inputValue: "",
      data: [{ name: "test", title: "test" }]
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
