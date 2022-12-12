import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ChatCell, Container} from '@components';

type Props = {};

const HomeScene = (_props: Props) => {
  return (
    <Container>
      <ChatCell />
    </Container>
  );
};

export default HomeScene;

const styles = StyleSheet.create({});
