import { FlatList, StyleSheet, Text, View } from 'react-native';

import { Ticker } from '../utils/Ticker';
import { CurrencyMask } from '../utils/CurrencyMask';
import { Profitability } from '../utils/Profitability';

import { FontAwesome } from '@expo/vector-icons';

import { Content, Status } from './styles';
import {
  Data,
  DataAside,
  Info,
  Name,
  InfoAside
} from '../../styles/card.styles';

interface FundProps {
  name: string;
  type: string;
  minimumValue: number;
  rating: number;
  profitability: number;
  status: number;
}


export function FundCard({
  name,
  type,
  minimumValue,
  rating,
  profitability,
  status,
}: FundProps) {
  return (

    <Content>
      <Info>
        <InfoAside>
          <Name>
            {name}
          </Name>
          <Ticker ticker={type} />
        </InfoAside>
        <InfoAside>
          {status === 0 && <Text></Text>}
          {status === 1 && <Status>Novo</Status>}
        </InfoAside>
      </Info>

      <Data>
        <DataAside>
          <Text>Classificação:</Text>
          <Text>Valor mínimo:</Text>
          <Text>Rentabilidade:</Text>
        </DataAside>
        <DataAside>
          <Text>
            {Array.from({ length: rating }).map((_, index) => (
              <FontAwesome name="star" size={16} color="#F8C22E" key={index} />
            ))}
            {Array.from({ length: 5 - rating }).map((_, index) => (
              <FontAwesome name="star-o" size={16} color="#F8C22E" key={index} />
            ))}

          </Text>
          <View><CurrencyMask value={minimumValue} /></View>
          <View><Profitability value={profitability} /></View>
        </DataAside>
      </Data>
    </Content>

  );
}





