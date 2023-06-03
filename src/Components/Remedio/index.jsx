import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles';

const RemedioDropdown = ({ nomeRemedio }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const handleDropdownToggle = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const screenWidth = Dimensions.get('window').width;
  const boxWidth = screenWidth - 20; // Subtrai 20 para criar um espaço de margem horizontal

  const renderOptions = () => {
    const options = [];
    for (let i = 1; i <= 8; i++) {
      options.push(
        <View key={i} style={styles.optionBox}>
          <Text style={styles.optionText}>{i < 10 ? `0${i}` : i}/06</Text>
          <Icon name={i % 2 === 0 ? 'check' : 'close'} style={styles.optionIcon} />
        </View>
      );
    }
    return options;
  };

  return (
    <View style={[styles.container, { width: boxWidth }]}>
      <TouchableOpacity onPress={handleDropdownToggle} style={styles.header}>
        <Text style={styles.nomeRemedio}>{nomeRemedio}</Text>
        <Icon name={dropdownVisible ? 'angle-up' : 'angle-down'} style={styles.arrow} />
      </TouchableOpacity>
      {dropdownVisible && (
        <View style={styles.dropdown}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {renderOptions()}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default RemedioDropdown;