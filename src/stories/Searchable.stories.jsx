import Searchable from '../Component/Searchable/Searchable';
import React ,{useState} from 'react';

const search = null
const  setSearch = () => {console.log("changin from storie");}
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Searchable',
  component: Searchable,
  // More on argTypes: httprimaryps://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
};

const Template = (args) => <Searchable {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    search,setSearch
};