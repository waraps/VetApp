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

const calculateOneDose = (medicine: any, weight: number): any => {
  const { minimumDose, maximumDose } = medicine.pet;
  const { ml, mg, oral } = medicine.concentration;
  let total = 0;
  ml ? total = ((minimumDose + maximumDose) / 2) * weight * (ml / mg) : total = ((minimumDose + maximumDose) / 2) * weight * (oral / mg);

  return total;
};

const calculateDoses = (
  weight: number,
  medicineList: Array<MedicineJSON>,
): Array<Medicine> => {
  let medicineListDoses: Array<any> = [];
  medicineListDoses = medicineList.map((medicine) => {
    return {
      name: medicine.name,
      dose: calculateOneDose(medicine, weight),
    };
  });
  return medicineListDoses;
};

export { mapMedicines, calculateDoses };
