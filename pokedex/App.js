import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import List from './components/List/List';
import PokemonDetails from './components/Details/Detail';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Pokedex">
        <Stack.Screen 
          name="Pokedex" 
          component={List} 
          options={{ title: 'Pokedex' }} 
        />
        <Stack.Screen 
          name="Details" 
          component={PokemonDetails} 
          options={{ title: 'Detalhes do Pokémon' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

