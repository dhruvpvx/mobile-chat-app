import React from 'react';
import {ChatCell, Container} from '@components';
import HomeHeader from './HomeHeader';

type Props = {};

const HomeScene = (_props: Props) => {
  return (
    <Container>
      <HomeHeader />
      <ChatCell />
    </Container>
  );
};

export default HomeScene;
