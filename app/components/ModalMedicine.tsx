import React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Colors from '../utils/Colors';

const ModalMedicine: React.FC<any> = ({
  visible,
  hide,
  opc,
  medicine,
  setMedicine,
}) => {
  const SolutionOral = () => (
    <View style={styles.centeredView}>
      <Modal animationType="fade" transparent visible={visible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              ¿Que presentacion desea suministrar?
            </Text>

            <View style={styles.options}>
              <TouchableHighlight
                activeOpacity={0.6}
                underlayColor={Colors.light}
                style={styles.openButton}
                onPress={setModalVisible}>
                <Text style={styles.textStyle}>Oral</Text>
              </TouchableHighlight>
              <TouchableHighlight
                activeOpacity={0.6}
                underlayColor={Colors.light}
                style={styles.openButton}
                onPress={setModalVisible}>
                <Text style={styles.textStyle}>Solucion</Text>
              </TouchableHighlight>
            </View>
            <TouchableHighlight style={styles.closeModal} onPress={closeModal}>
              <Text style={styles.textStyleClose}>x</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
  const Oral = () => (
    <View style={styles.centeredView}>
      <Modal animationType="fade" transparent visible={visible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Ingrese los gramos de la presentacion de la pastilla
            </Text>
            <TextInput
              style={styles.oralInput}
              placeholder="grs"
              keyboardType="decimal-pad"
              maxLength={4}
              placeholderTextColor={Colors.primary}
            />
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor={Colors.light}
              style={styles.openButton}
              onPress={setModalVisible}>
              <Text style={styles.textStyle}>Ingresar</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.closeModal} onPress={closeModal}>
              <Icon name="close" style={styles.iconStyle} />
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
  const setModalVisible = () => {
    hide(!visible);
  };
  const closeModal = () => {
    hide(!visible);
    // eslint-disable-next-line no-param-reassign
    medicine.isSelected = !medicine.isSelected;
    setMedicine(medicine);
  };
  switch (opc) {
    case 1:
      return <SolutionOral />;

    case 2:
      return <Oral />;
  }
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: Colors.light,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: Colors.darkness,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    minHeight: 180,
  },
  openButton: {
    borderWidth: 1,
    borderColor: Colors.primaryLight,
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    width: 120,
    backgroundColor: Colors.lighter,
  },
  textStyle: {
    color: Colors.primary,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.darkness,
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  oralInput: {
    width: 120,
    paddingHorizontal: 20,
    backgroundColor: Colors.lighter,
    marginBottom: 10,
    borderRadius: 10,
    textAlign: 'right',
    color: Colors.primaryLight,
  },
  closeModal: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: Colors.secondary,
    position: 'absolute',
    top: -8,
    right: -8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyleClose: {
    color: Colors.lighter,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  iconStyle: {
    color: Colors.lighter,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ModalMedicine;
