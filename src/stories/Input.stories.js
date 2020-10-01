import UIInput from "../components/Input";

export default {
  title: "Example/Input",
  component: UIInput,
  argTypes: {
    iconAlign: {
      control: { type: "select", options: ["left", "right"] }
    },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] }
    },
    type: {
      control: {
        type: "select",
        options: ["text", "number", "password", "tel", "email", "url", "search"]
      }
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { UIInput },
  template:
    '<UIInput @onChange="onChange" v-bind="$props" placeholder="Назначить аудит" />'
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
