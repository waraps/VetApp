import { ImageSourcePropType } from 'react-native';
import { Medicine } from '../medicine/MedicineType';

export type ButtonOptionProps = {
  title: string;
  description: string;
  medicineType: string;
  onPress: (medicationList: Array<Medicine>, screenTitle: string) => void;
  imagePath: ImageSourcePropType;
};
