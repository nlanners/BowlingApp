import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useRef, useState } from 'react';
import { BowlingKeyboard } from '../BowlingKeyboard';

export const Throw = () => {
  const [score, setScore] = useState<string | null>(null);
  const textInputRef = useRef(null);
  return (
    <>
      <TextInput
        ref={textInputRef}
        style={styles.input}
        keyboardType='numeric'
        value={score?.toString()}
      />
      <BowlingKeyboard
        textInputRef={textInputRef}
        onKeyPress={(v) => setScore(v)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'black',
    width: 50,
    height: 50,
  },
});
