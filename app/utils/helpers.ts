import { MedicineJSON, Medicine } from '../types/medicine/MedicineType';

const mapMedicines = (
  petType: string,
  medicineList: Array<MedicineJSON>,
): Array<Medicine> => {
  let mapMedicineList: Array<Medicine> = [];
  switch (petType) {
    case 'canino':
      mapMedicineList = medicineList
        .map((medicine) => {
          return {
            name: medicine.name,
            pet: medicine.dog,
            concentration: medicine.concentration,
            isSelected: medicine.isSelected,
          };
        })
        .filter((medicine) => {
          if (medicine.pet !== null) {
            return {
              name: medicine.name,
              pet: medicine.pet,
              concentration: medicine.concentration,
              isSelected: medicine.isSelected,
            };
          }
          return null;
        });
      break;
    case 'felino':
      mapMedicineList = medicineList
        .map((medicine) => {
          return {
            name: medicine.name,
            pet: medicine.cat,
            concentration: medicine.concentration,
            isSelected: medicine.isSelected,
          };
        })
        .filter((medicine) => {
          if (medicine.pet !== null) {
            return {
              name: medicine.name,
              pet: medicine.pet,
              concentration: medicine.concentration,
              isSelected: medicine.isSelected,
            };
          }
          return null;
        });
      break;
    default:
      mapMedicineList = [];
      break;
  }
  return mapMedicineList;
};

export default mapMedicines;
