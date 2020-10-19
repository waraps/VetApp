import { ImageSourcePropType } from 'react-native';
import { Medicine } from '../medicine/MedicineType';

export type ButtonOptionProps = {
  title: string;
  description: string;
  medicineType: string;
  onPress: (params: Array<Medicine>) => void;
  imagePath: ImageSourcePropType;
};
