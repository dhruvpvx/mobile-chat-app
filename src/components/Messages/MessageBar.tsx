import {MessageType} from '@local-types';
import React from 'react';
import LeftBar from './LeftBar';
import RightBar from './RightBar';

const MessageBar = (props: MessageType) => {
  if (props.left) {
    return <LeftBar {...props} />;
  }
  return <RightBar {...props} />;
};

export default MessageBar;
