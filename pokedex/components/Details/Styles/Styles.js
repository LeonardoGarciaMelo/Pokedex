import styled from 'styled-components/native';
import {typeColors, typeColors_2} from './Colors/Colors'
import {StatusBar} from './StatusBar/StatusBar'

export const Container = styled.ScrollView`
  flex: 1; 
  background-color: white;
`;

export const Header = styled.View`
  background-color:  ${({ type }) => typeColors[type] || '#FFF'};
  padding: 20px;
  align-items: center;
`;
export const PokemonImage = styled.Image`
  width: 200px; 
  height: 200px; 
  align-self: center; 
  margin-bottom: 20px;
`;

export const PokemonName = styled.Text`
  font-size: 20px; 
  font-weight: bold; 
  text-align: center; 
  margin-bottom: 10px;
`;

export const BadgeContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 20px;
`;

export const Badge = styled.TouchableOpacity`
  background-color: ${({ type }) => typeColors_2[type] || '#999'};
  padding: 10px 20px;
  border-radius: 20px;
`;

export const BadgeText = styled.Text`
  color: white;
  font-weight: bold;
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 20px;
  margin-bottom: 20px;
`;

export const InfoItem = styled.View`
  align-items: center;
`;

export const InfoValue = styled.Text`
  font-size: 20px; 
  font-weight: bold;
`;

export const InfoLabel = styled.Text`
  font-size: 12px; 
  color: #666;
`;

export const ShareButton = styled.TouchableOpacity`
  background-color: #2ecc71;
  padding: 12px 24px;
  border-radius: 8px;
  align-self: center; 
  margin-top: 20px;
`;

export const ShareButtonText = styled.Text`
  color: white;
  font-weight: bold;
  text-align: center;
`;
export const Bar = StatusBar