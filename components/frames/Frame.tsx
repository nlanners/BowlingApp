import { Throw } from './Throw';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  firstThrow: string;
  secondThrow: string;
  total: string;
};

export const Frame = ({ firstThrow, secondThrow, total }: Props) => {
  return (
    <View style={styles.frame}>
      <View style={styles.throws}>
        <Throw score={firstThrow} />
        <Throw score={secondThrow} />
      </View>
      <View style={styles.total}>
        <Text>{total}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frame: {
    display: 'flex',
    flexDirection: 'column',
  },
  throws: {
    display: 'flex',
    flexDirection: 'row',
  },
  total: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderWidth: 1,
    borderBottomWidth: 2,
    borderColor: 'black',
  },
});
