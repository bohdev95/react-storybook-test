import DragableContentBody from "../Component/Draggables/DragableContentBody";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from '../Store';
import { useAddonState } from '@storybook/api';
const search = "";
const setChecked = () => {
  console.log("changin from storie");
};
const checked=[]

export default {
  title: "Example/Dragabble",
  component: DragableContentBody,
  decorators: [
    (Story) => (
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Story />
      </PersistGate>
    </Provider>
    ),
  ],
};

const Template = (args) => <DragableContentBody {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  checked,
  setChecked,
  search,
};
