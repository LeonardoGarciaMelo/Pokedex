import { useState, useEffect } from 'react';
import { ActivityIndicator, View, FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as S from './Styles'

const List = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1015');
        const data = await response.json();
        setPokemonList(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPokemonData();
  }, []);

  const renderPokemonItem = ({ item }) => {
    const pokemonId = item.url.split('/')[6]; 
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`; 
    return (
      <S.PokemonContainer onPress={() => navigation.navigate('Details', { pokemonUrl: item.url })} >
        <S.PokemonImageContainer >
          <S.PokemonImage source={{ uri: imageUrl }} />
        </S.PokemonImageContainer>
        <S.PokemonName>{item.name}</S.PokemonName>
      </S.PokemonContainer>
    );
  };

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={pokemonList}
          keyExtractor={(item) => item.name}
          renderItem={renderPokemonItem}
        />
      )}
    </View>
  );
};

export default List;
