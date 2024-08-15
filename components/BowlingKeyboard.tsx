import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import { Keyboard } from 'react-native-ui-lib';

type Props = {
  onKeyPress: (value: string) => void;
  textInputRef: React.RefObject<any>;
};

const KeyboardAccessoryView = Keyboard.KeyboardAccessoryView;

export const BowlingKeyboard = ({ onKeyPress, textInputRef }: Props) => {
  const keys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'X', '/'];

  const renderKeyboardAccessoryViewContent = () => {
    return (
      <View style={styles.container}>
        {keys.map((s, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => onKeyPress(s)}
            style={styles.button}>
            <Text>{s}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <KeyboardAccessoryView
      renderContent={renderKeyboardAccessoryViewContent}
      scrollBehavior={KeyboardAccessoryView.scrollBehaviors.FIXED_OFFSET}
      kbInputRef={textInputRef}
      kbComponent='BowlingKeyboard'
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#EDEDED',
    paddingVertical: 5,
    marginBottom: '30%',
    justifyContent: 'center',
  },
  button: {
    width: '10%',
    height: 50,
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#F7F7F7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleButton: {
    width: '10%',
    height: 50,
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#F7F7F7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputAccessoryView: {
    backgroundColor: '#2A2A2A',
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 0.8,
    borderColor: '#c4c4c4',
  },
  inputAccessoryButton: {
    backgroundColor: 'gray',
    height: 35,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 5,
  },
});
