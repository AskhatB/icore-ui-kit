import UIPopover from "../components/Popover";
import UIButton from "../components/Button";

export default {
  title: "Example/Popover",
  component: UIPopover,
  argTypes: {
    variant: {
      control: { type: "select", options: ["default", "triangle"] }
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { UIPopover, UIButton },
  template: `<UIPopover v-bind="$props">
      <template #activator="{ action }">
        <UIButton @onClick="action" icon="blocks">Dropdown</UIButton>
      </template>
      <div>efwkpofkwepokfpow kefwoek</div>
    </UIPopover>`
});

export const WithDefaultButton = Template.bind({});
WithDefaultButton.args = {};
