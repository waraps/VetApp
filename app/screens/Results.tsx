import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Colors from '../utils/Colors';

// Utils
import { calculateDoses } from '../utils/helpers';

const Results: React.FC<any> = ({ route }) => {
  const medicationList = route.params.medicineList;
  const [medicines, setMedicines] = useState([]);
  const [weight, setWeight] = useState(0.0);
  const calculate = () => {
    if (weight <= 0 || weight > 60) {
      alert('Ingrese un peso valido');
    } else {
      setMedicines(calculateDoses(weight, medicationList));
    }
  };
  useEffect(() => {}, [medicines]);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.hintText}>
          Ingrese peso de la mascota y luego presione sobre el boton "Calcular
          dosis", para calcular o recalcular las dosis
        </Text>
        <View style={styles.input}>
          <TextInput
            placeholder="0.0"
            style={styles.inputWeight}
            keyboardType="decimal-pad"
            maxLength={4}
            placeholderTextColor={Colors.primary}
            onChangeText={(text) => setWeight(text)}
            value={weight}
          />
          <Text style={styles.unitText}>Kg</Text>
        </View>
      </View>
      {medicines.length === 0 ? (
        <View style={styles.medicineContainer}>
          {medicationList.map((medicine) => {
            return (
              <View style={styles.medicineDoseContainer}>
                <View style={styles.medicineDose}>
                  <Text style={[styles.text, styles.medicineName]}>
                    Medicamento:
                  </Text>
                  <Text style={[styles.text, { textTransform: 'capitalize' }]}>
                    {medicine.name}
                  </Text>
                </View>
                <View style={styles.medicineDose}>
                  <Text style={[styles.text, styles.medicineName]}>
                    Dosis calculada:
                  </Text>
                  <Text style={styles.text}>0.0 ml</Text>
                </View>
              </View>
            );
          })}
        </View>
      ) : (
        <View style={styles.medicineContainer}>
          {medicines.map((medicine) => {
            return (
              <View style={styles.medicineDoseContainer}>
                <View style={styles.medicineDose}>
                  <Text style={[styles.text, styles.medicineName]}>
                    Medicamento:
                  </Text>
                  <Text style={[styles.text, { textTransform: 'capitalize' }]}>
                    {medicine.name}
                  </Text>
                </View>
                <View style={styles.medicineDose}>
                  <Text style={[styles.text, styles.medicineName]}>
                    Dosis calculada:
                  </Text>
                  <Text style={styles.text}>
                    {medicine.dose >= 1
                      ? `${medicine.dose.toFixed(1)} ml`
                      : `${medicine.dose.toFixed(2)} ml`}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      )}
      <TouchableOpacity style={styles.buttonCalculate} onPress={calculate}>
        <Text style={styles.textButton}>Calcular dosis</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  hintText: {
    color: Colors.primary,
    textAlign: 'justify',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  inputContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primaryTranslucent,
    paddingVertical: 10,
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: 95,
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: Colors.lighter,
    color: Colors.primaryLight,
  },
  inputWeight: {
    color: Colors.primaryLight,
    textAlign: 'right',
  },
  unitText: {
    color: Colors.primary,
    fontWeight: 'bold',
  },
  medicineContainer: {
    width: '100%',
    marginTop: 15,
    alignItems: 'center',
  },
  medicineDoseContainer: {
    width: '95%',
    margin: 5,
    padding: 10,
    borderRadius: 15,
    backgroundColor: Colors.lighter,
    shadowColor: Colors.light,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  medicineDose: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    textAlign: 'left',
    fontSize: 15,
    color: Colors.dark,
  },
  medicineName: {
    marginRight: 2,
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonCalculate: {
    marginTop: 15,
    borderColor: Colors.primary,
    width: 150,
    padding: 16,
    borderRadius: 15,
    borderWidth: 1,
  },
  textButton: {
    textAlign: 'center',
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Results;
