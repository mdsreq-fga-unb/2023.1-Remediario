import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "./styles";

const RemedioDropdown = ({ datas, nomeRemedio }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const screenWidth = Dimensions.get("window").width;
  const boxWidth = screenWidth - 20;

  const renderOptions = () => {
    return (
      datas && datas.map((uso, index) => {
        const datas2 = new Date(uso);
        let hour = datas2.getHours();
        let minutes = datas2.getMinutes();
        let day = datas2.getDate();
        let month = datas2.getMonth() + 1;

        if (minutes < 10) {
          minutes = "0" + minutes;
        }
        if (day < 10) {
          day = "0" + day;
        }
        if (month < 10) {
          month = "0" + month;
        }

        return (
          <View key={index} style={styles.optionBox}>
            <Text style={styles.dateHour}>{hour + ":" + minutes}</Text>
            <View style={styles.dateContainer}>
              <Text style={styles.dateDay}>{day + "/" + month}</Text>
              <Icon name="check" style={styles.optionIcon} />
            </View>
          </View>
        );
      })
    );
  };

  return (
    <View style={[styles.container, { width: boxWidth }]}>
      <TouchableOpacity onPress={handleDropdownToggle} style={styles.header}>
        <Text style={styles.nomeRemedio}>{nomeRemedio}</Text>
        <Icon
          name={dropdownVisible ? "angle-up" : "angle-down"}
          style={styles.arrow}
        />
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
