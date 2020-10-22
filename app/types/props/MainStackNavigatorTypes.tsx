import { Medicine, MedicineJSON } from '../medicine/MedicineType';

type MedicationListParams = {
  medicineList: Array<Medicine>;
  screenName: string;
};

export type RootStackParamList = {
  Home: MedicineJSON;
  MedicationList: MedicationListParams;
};
