import ControlButtons from "../Component/ControlButtons"

const  setChecked = () => {console.log("changin from storie");}
export default {
  title: 'Example/ControlButton',
  component: ControlButtons,
  argTypes: {
  },
};

const Template = (args) => <ControlButtons {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    setChecked
};