import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
} from 'react-native';

interface CustomDropdownProps {
  label: string;
  options: Array<{ label: string; value: string }>;
  selectedValue: string;
  onSelect: (value: string) => void;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  label,
  options,
  selectedValue,
  onSelect,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setIsModalVisible(!isModalVisible)}>
        <Text style={styles.selectedValue}>
          {selectedValue ? selectedValue : 'Select an option'}
        </Text>
      </TouchableOpacity>
      {isModalVisible && (
        <Modal transparent={true} animationType="fade" visible={isModalVisible}>
          <View style={styles.modal}>
            <FlatList
              data={options}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => {
                    onSelect(item.value);
                    setIsModalVisible(false);
                  }}>
                  <Text style={styles.optionText}>{item.label}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.value}
            />
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    marginBottom: 5,
  },
  dropdown: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  selectedValue: {
    color: '#333',
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: 5,
    position: 'absolute',
    top: 60,
    left: 16,
    right: 16,
    zIndex: 1,
    padding: 10,
    maxHeight: 150,
  },
  option: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  optionText: {
    color: '#333',
  },
});

export default CustomDropdown;
