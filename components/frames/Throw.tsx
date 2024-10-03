import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const windowWidth = Dimensions.get('window').width;

type Props = { score: string };

export const Throw = ({ score }: Props) => {
  return (
    <View style={styles.input}>
      <Text>{score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    width: windowWidth / 20,
    height: windowWidth / 20,
  },
});
