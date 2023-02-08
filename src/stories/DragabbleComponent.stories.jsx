import DragableComponent from "../Pages/DragableComponent";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from '../Store';
const search = null;
const setSearch = () => {
  console.log("changin from storie");
};
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/DragabbleComponent",
  component: DragableComponent,
  // More on argTypes: httprimaryps://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
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

const Template = (args) => <DragableComponent {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
