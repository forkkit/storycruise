import React from 'react';

import Input from './Input';

const storyConfig = {
  name: 'Input',
  path: 'input',
};

export default storyConfig;

export function KnobStory(args) {
  return (
    <Input type="text" name="username" {...args} />
  );
}

KnobStory.args = {
  className: 'extra-class',
  placeholder: 'Gimme your password',
};


export function SecondStory() {
  return (
    <Input type="number" name="phoneNumber" />
  );
}
