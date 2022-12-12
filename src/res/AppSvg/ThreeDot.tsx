import * as RNSVG from 'react-native-svg';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

const ThreeDot = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <RNSVG.Svg width="70%" height="100%" viewBox="0 0 24 28">
        <RNSVG.Path
          fill="black"
          d="M12,7A2,2 0 0,0 10,9A2,2 0 0,0 12,11A2,2 0 0,0 14,9A2,2 0 0,0 12,7M12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17A2,2 0 0,0 14,15A2,2 0 0,0 12,13M12,19A2,2 0 0,0 10,21A2,2 0 0,0 12,23A2,2 0 0,0 14,21A2,2 0 0,0 12,19Z"
        />
      </RNSVG.Svg>
    </TouchableOpacity>
  );
};

export default ThreeDot;

const styles = StyleSheet.create({
  container: {
    width: '15%',
    height: '100%',
  },
});
