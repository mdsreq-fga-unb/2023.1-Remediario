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

const RemedioDropdown = ({ datas, remedio }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const objetoRemedio = remedio;

  const handleDropdownToggle = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const screenWidth = Dimensions.get("window").width;
  const boxWidth = screenWidth - 20;

  const contarDiasRepetidos = () => {
    const contagemDias = {};

    // Itera sobre o array de datas e conta a repetição dos dias
    datas.forEach((uso) => {
      const datas2 = new Date(uso);
      let dia = datas2.getDate();

      // Verifica se o dia já existe no objeto de contagem
      if (contagemDias[dia]) {
        // Se existir, incrementa a contagem
        contagemDias[dia]++;
      } else {
        // Caso contrário, inicializa a contagem com 1
        contagemDias[dia] = 1;
      }
    });

    return contagemDias;
  };

  const renderOptions = () => {
    const contagemDias = contarDiasRepetidos();
    const diasRenderizados = {};

    return (
      datas &&
      datas.map((uso, index) => {
        console.log(uso)
        const datas2 = new Date(uso);
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

        let quantidadeDiaria;
        switch (objetoRemedio.unidadeFrequencia) {
          case "meses":
            quantidadeDiaria = 1
            break;
          case "dias":
            quantidadeDiaria = 1
            break;
          case "horas":
            quantidadeDiaria =  24 / objetoRemedio.frequencia
            break;
          case "minutos":
            quantidadeDiaria = 1440 / objetoRemedio.frequencia 
            break;
        }
        quantidadeDiaria = Math.trunc(quantidadeDiaria)
        const vezesRepetido = contagemDias[day] || 0;

        if (!diasRenderizados[day]) {
          diasRenderizados[day] = true;
  
          let used = false;
          if (vezesRepetido >= quantidadeDiaria) {
            used = true;
          }
  
          if (used) {
            return (
              <View key={index} style={styles.usedBox}>
                <Text style={styles.dateHour}>{day + "/" + month}</Text>
                <View style={styles.dateContainer}>
                <Text style={styles.dateDay}>{vezesRepetido + "/" + quantidadeDiaria}</Text>
                  <Icon name="check" style={styles.optionIcon} />
                </View>
              </View>
            );
          } else {
            return (
              <View key={index} style={styles.notUsedBox}>
                <Text style={styles.dateHour}>{day + "/" + month}</Text>
                <View style={styles.dateContainer}>
                  <Text style={styles.dateDay}>{vezesRepetido + "/" + quantidadeDiaria}</Text>
                  <Icon name="times" style={styles.optionIcon} />
                </View>
              </View>
            );
          }
        } else {
          return null; // Não renderizar dias repetidos adicionais
        }
      })
    );
  };

  return (
    <View style={[styles.container, { width: boxWidth }]}>
      <TouchableOpacity onPress={handleDropdownToggle} style={styles.header}>
        <Text style={styles.nomeRemedio}>{objetoRemedio.nomeRemedio}</Text>
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
