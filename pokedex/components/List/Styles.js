import styled from 'styled-components/native';

export const PokemonContainer = styled.TouchableOpacity`
  background-color: white;
  padding: 16px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
  flex-direction: row;
  align-items: center;
`;
export const PokemonImageContainer = styled.View`
  background-color: white;
  padding: 20px;
  border-radius: 10px; 
  align-items: center;
`;

export const PokemonImage = styled.Image`
  width: 100px;
  height: 100px;
  margin-top: 16px;
`;
export const PokemonName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
`;