import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Calculator from './Lab1_b2/Calculator';

const Stack = createNativeStackNavigator();

export default function Layout() {
  return (
    <Stack.Navigator>
      <Stack.Screen
  name="Calculator"
  component={Calculator}
  options={{
    title: 'Calculator',
    headerStyle: { backgroundColor: '#4DABF7' },
    headerTintColor: '#fff',
    headerTitleAlign: 'center',
    headerTitleStyle: { fontWeight: 'bold' },
  }}
/>
      
    </Stack.Navigator>
  );
}