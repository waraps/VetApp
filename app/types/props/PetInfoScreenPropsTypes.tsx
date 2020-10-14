import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './MainStackNavigatorTypes';

type PetInfoScreenRouteProp = RouteProp<RootStackParamList, 'PetInfo'>;

type PetInfoScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'PetInfo'
>;

export type PetInfoScreenProps = {
  route: PetInfoScreenRouteProp;
  navigation: PetInfoScreenNavigationProp;
};
