import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Throw } from '@/components/frames/Throw';
import { BowlingKeyboard } from '@/components/BowlingKeyboard';

export default function NewGameScreen() {
  return (
    <View style={styles.container}>
      <Text>NewGameScreen</Text>
      <Throw />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
