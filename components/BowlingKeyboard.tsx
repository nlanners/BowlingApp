import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export const BowlingKeyboard = () => {
  const keyRows = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['0', 'X', '/'],
  ];

  return (
    <View style={styles.container}>
      {keyRows.map((row, index) => (
        <View key={index} style={styles.row}>
          {row.map((key) => (
            <TouchableHighlight
              style={styles.keyWrapper}
              onPress={() => console.log(key)}
              key={key}>
              <View style={styles.key}>
                <Text style={styles.keyText}>{key}</Text>
              </View>
            </TouchableHighlight>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  },
  keyWrapper: {
    borderRadius: 25,
  },
  key: {
    width: 75,
    height: 75,
    borderRadius: 25,
    backgroundColor: 'lightgray',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyText: {
    fontSize: 24,
  },
});
