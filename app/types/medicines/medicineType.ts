type dog = {
  minimumDose: number;
  maximumDose: number;
};

type cat = {
  minimumDose: number;
  maximumDose: number;
};

type concentration = {
  mg: number;
  ml: number;
};

export type MedicineJSON = {
  name: string;
  dog: dog;
  cat: cat;
  concentration: concentration;
};

export type Medicine = {
  name: string;
  pet: dog | cat;
  concentration: concentration;
};
