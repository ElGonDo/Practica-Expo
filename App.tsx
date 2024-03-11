import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeView from './src/Views/HomeView';
import RegisterView from './src/Views/RegisterView';

const Stack = createStackNavigator();

export interface RootStackParamList {
  HomeView: undefined;
  RegisterView: undefined;
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeView" component={HomeView} />
        <Stack.Screen
          name="RegisterView"
          component={RegisterView}
          options={{
            headerShown: true,
            title: 'Registro',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
