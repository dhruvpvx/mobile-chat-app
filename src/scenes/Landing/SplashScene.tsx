import {Animated, StyleSheet} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {Container} from '@components';
import {AppFonts} from '@res';

const SplashScene = () => {
  const textScale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(textScale, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [textScale]);

  return (
    <Container center>
      <Animated.Text style={[styles.title, {transform: [{scale: textScale}]}]}>
        Mobile Chat
      </Animated.Text>
    </Container>
  );
};

export default SplashScene;

const styles = StyleSheet.create({
  title: {
    ...AppFonts.extraBold(44, 'LIGHT_GREEEN'),
  },
});
