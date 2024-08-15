import { Link } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12,
      }}>
      <Text>Welcome to the Bowling app</Text>
      <Link href='/game' asChild>
        <Button title='Start a new game' />
      </Link>
    </View>
  );
}
