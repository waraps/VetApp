type dose = {
  minimumDose: number;
  maximumDose: number;
};

type concentration = {
  mg?: number;
  ml?: number;
  oral?: number;
};

export type MedicineJSON = {
  name: string;
  dog: dose | null;
  cat: dose | null;
  concentration: concentration;
  isSelected: boolean;
};

export type Medicine = {
  name: string;
  pet: dose | null;
  concentration: concentration;
  isSelected: boolean;
};
