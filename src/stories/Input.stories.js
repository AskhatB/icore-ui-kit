import UIInput from "../components/Input";

export default {
  title: "Example/Input",
  component: UIInput,
  argTypes: {
    bgColor: { control: "color" },
    fontColor: { control: "color" },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] }
    },
    bgStyle: {
      control: { type: "select", options: ["flat", "gradient", "transparent"] }
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { UIInput },
  template:
    '<UIInput @onChange="onChange" v-bind="$props">Привет мир!</UIInput>'
});

export const Large = Template.bind({});
Large.args = {
  size: "large"
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium"
};

export const Small = Template.bind({});
Small.args = {
  size: "small"
};
