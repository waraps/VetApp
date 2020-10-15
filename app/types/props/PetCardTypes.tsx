import { GestureResponderEvent, ImageSourcePropType } from 'react-native';

export type PetCardProps = {
  title: string;
  navigateTo: (event: GestureResponderEvent) => void;
  imagePath: ImageSourcePropType;
};
