import {MessageType} from '@local-types';
import {useAppSelector} from '@store';
import React from 'react';
import LeftBar from './LeftBar';
import RightBar from './RightBar';

const MessageBar = (props: MessageType) => {
  const userData = useAppSelector(state => state.user);
  const left = userData.id !== props.sent_by;
  if (left) {
    return <LeftBar {...props} />;
  }
  return <RightBar {...props} />;
};

export default MessageBar;
