import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { Throw } from '@/components/frames/Throw';
import { BowlingKeyboard } from '@/components/BowlingKeyboard';
import { Frame } from '@/components/frames/Frame';

const windowWidth = Dimensions.get('window').width;

export default function NewGameScreen() {
  const [frameScores, setFrameScores] = useState([
    { firstThrow: '', secondThrow: '', total: '' },
    { firstThrow: '', secondThrow: '', total: '' },
    { firstThrow: '', secondThrow: '', total: '' },
    { firstThrow: '', secondThrow: '', total: '' },
    { firstThrow: '', secondThrow: '', total: '' },
    { firstThrow: '', secondThrow: '', total: '' },
    { firstThrow: '', secondThrow: '', total: '' },
    { firstThrow: '', secondThrow: '', total: '' },
    { firstThrow: '', secondThrow: '', total: '' },
    { firstThrow: '', secondThrow: '', total: '' },
  ]);

  return (
    <View style={styles.container}>
      <Text>NewGameScreen</Text>
      <View style={styles.framesContainer}>
        <View style={styles.frameNumbers}>
          {frameScores.map((_, index) => (
            <View style={styles.frameNumber}>
              <Text key={index}>{index + 1}</Text>
            </View>
          ))}
        </View>
        <View style={styles.frames}>
          {frameScores.map((frame, index) => (
            <Frame
              firstThrow={frame.firstThrow}
              secondThrow={frame.secondThrow}
              total={frame.total}
              key={index}
            />
          ))}
        </View>
      </View>

      <BowlingKeyboard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    gap: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  framesContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 0,
  },
  frameNumbers: {
    display: 'flex',
    flexDirection: 'row',
    gap: 0,
  },
  frameNumber: {
    width: windowWidth / 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderTopWidth: 2,
    borderColor: 'black',
  },
  frames: {
    display: 'flex',
    flexDirection: 'row',
  },
});
