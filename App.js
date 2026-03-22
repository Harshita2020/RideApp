import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import RideListScreen from './src/screens/RideListScreen';
import ConfirmationScreen from './src/screens/ConfirmationScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Rides" component={RideListScreen} />
        <Stack.Screen name="Confirm" component={ConfirmationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}