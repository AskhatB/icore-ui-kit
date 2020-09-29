import MyButton from "../components/Button";

export default {
  title: "Example/Button",
  component: MyButton,
  argTypes: {
    color: { control: "color" },
    fontColor: { control: "color" },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] }
    },
    bgStyle: {
      control: { type: "select", options: ["flat", "gradient", "transparent"] }
    },
    iconAlign: {
      control: { type: "select", options: ["left", "right"] }
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

export const LargeOnlyIcon = Template.bind({});
LargeOnlyIcon.args = {
  iconButton: true,
  size: "large",
  icon: "blocks"
};

export const MediumOnlyIcon = Template.bind({});
MediumOnlyIcon.args = {
  iconButton: true,
  size: "medium",
  icon: "blocks"
};

export const SmallOnlyIcon = Template.bind({});
SmallOnlyIcon.args = {
  iconButton: true,
  size: "small",
  icon: "blocks"
};
