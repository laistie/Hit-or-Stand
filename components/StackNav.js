import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Home'

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default MyStack; 