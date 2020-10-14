import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './MainStackNavigatorTypes';

type MedicationListScreenRouteProp = RouteProp<
  RootStackParamList,
  'MedicationList'
>;

type MedicationListScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'MedicationList'
>;

export type MedicationListScreenProps = {
  route: MedicationListScreenRouteProp;
  navigation: MedicationListScreenNavigationProp;
};
