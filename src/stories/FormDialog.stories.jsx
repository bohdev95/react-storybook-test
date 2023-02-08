import FormDialog from "../Component/FormDialog/FormDialog"

const callback = (text) => {
  console.log(text,"from stories");
}

const  setChecked = () => {console.log("changin from storie");}
export default {
  title: 'Example/FormDialog',
  component: FormDialog,
  argTypes: {
  },
};

const Template = (args) => <FormDialog {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  callback
};