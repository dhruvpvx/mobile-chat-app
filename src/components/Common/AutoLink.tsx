import {Linking, StyleSheet, Text, TextProps, TextStyle} from 'react-native';
import React from 'react';

type Props = {
  children?: string;
  linkStyle?: TextStyle;
} & TextProps;

const AutoLink = (props: Props) => {
  const allWords = props?.children?.split(' ');
  const regex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
  const allWordsWithLinks = allWords?.map((word: string) => {
    if (regex.test(word.toLowerCase())) {
      return (
        <Text
          key={word}
          onPress={() => Linking.openURL(word.toLowerCase())}
          style={[styles.linkStyle, props.linkStyle]}>
          {word.toLowerCase() + ' '}
        </Text>
      );
    }
    return word + ' ';
  });
  return <Text {...props}>{allWordsWithLinks}</Text>;
};

export default AutoLink;

const styles = StyleSheet.create({
  linkStyle: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
