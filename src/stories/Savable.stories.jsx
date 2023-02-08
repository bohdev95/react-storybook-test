import Savables from "../Component/Savables/SavablesContentBody"
export default {
  title: 'Example/Savables',
  component: Savables,
  argTypes: {
  },
};

const Template = (args) => <Savables {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};