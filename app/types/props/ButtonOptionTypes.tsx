import { GestureResponderEvent, ImageSourcePropType } from 'react-native';

export type ButtonOptionProps = {
  title: string;
  description: string;
  medicineType: string;
  onpress: (event: GestureResponderEvent) => void;
  imagePath: ImageSourcePropType;
};
