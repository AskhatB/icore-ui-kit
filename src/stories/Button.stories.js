import MyButton from "../components/Button";

export default {
  title: "Example/Button",
  component: MyButton,
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
  components: { MyButton },
  template:
    '<my-button @onClick="onClick" v-bind="$props">Привет мир!</my-button>'
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
