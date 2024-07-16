import { useState, useEffect } from 'react';
import { Text, ActivityIndicator, Share} from 'react-native';
import * as S from './Styles/Styles'

const PokemonDetails = ({ route }) => {
  const { pokemonUrl } = route.params;
  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await fetch(pokemonUrl);
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.error('Error fetching details:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPokemonDetails();
  }, [pokemonUrl]);

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `Confira este Pokémon: ${pokemon.name}! \n\nTipo: ${pokemon.types.map((type) => type.type.name).join(', ')}\n\n${pokemonUrl}`,
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  if (!pokemon) {
    return <Text>Error loading Pokemon details.</Text>;
  }

  const pokemonType = pokemon.types && pokemon.types[0] && pokemon.types[0].type.name;

  const pokemonHeight = (pokemon.height * 0.1).toFixed(1) + ' m';

  const pokemonWeight = (pokemon.weight * 0.1).toFixed(1) + ' kg';

  return (
    <S.Container >
      <S.Header type={pokemonType}>
        <S.BadgeContainer>
          {pokemon.types.map((type) => (
            <S.Badge key={type.type.name} type={type.type.name}>
              <S.BadgeText>{type.type.name}</S.BadgeText>
            </S.Badge>
          ))}
        </S.BadgeContainer>

        <S.PokemonImage source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png` }} />
        <S.PokemonName>#{pokemon.id} - {pokemon.name}</S.PokemonName>
      </S.Header>
      <S.InfoContainer>
        <S.InfoItem>
          <S.InfoValue>{pokemonHeight}</S.InfoValue>
          <S.InfoLabel>HEIGHT</S.InfoLabel>
        </S.InfoItem>
        <S.InfoItem>
          <S.InfoValue>{pokemonWeight}</S.InfoValue>
          <S.InfoLabel>WEIGHT</S.InfoLabel>
        </S.InfoItem>
      </S.InfoContainer>

      <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 10, marginBottom: 10 }}>Base Stats:</Text>
      {pokemon.stats.map(stat => (
        <S.Bar key={stat.stat.name} statName={stat.stat.name} statValue={stat.base_stat} />
       
      ))}

      <S.ShareButton onPress={onShare}>
        <S.ShareButtonText>Compartilhar</S.ShareButtonText>
      </S.ShareButton>
    </S.Container>
  );
};

export default PokemonDetails;