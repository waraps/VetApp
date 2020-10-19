import { Medicine, MedicineJSON } from '../medicine/MedicineType';

export type RootStackParamList = {
  Home: MedicineJSON;
  MedicationList: Array<Medicine>;
};
