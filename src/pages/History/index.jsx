import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import RemedioDropdown from "../../Components/Remedio";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ListarMedicamento, ListarMedicamentosRemovidos } from "../../Services/medicamento";
import { styles } from "./styles";
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';
import { useIsFocused } from "@react-navigation/native";

export default function History() {
  const isFocused = useIsFocused();
  const [list, setlist] = useState(null);
  const [listRemovidos, setlistRemovidos] = useState(null);

  useEffect(() => {
    if (isFocused) {
      recarregar();
    }
  }, [isFocused]);

  async function recarregar() {
      let data;
      try {
      data = await ListarMedicamento();
      } catch (e) {
      console.log(e);
      }
      setlist(data);

      let dataRemovidos;
      try {
      dataRemovidos = await ListarMedicamentosRemovidos();
      } catch (e) {
      console.log(e);
      }
      setlistRemovidos(dataRemovidos);
  }

    const baixarRelatorio = async () => {
        const htmlContent = `
            <html>
            <body>
                <h1>Relatório do uso de cada remédios</h1>   

                <h2>Uso de remédios ativos</h2>
                <hr/>
                ${list?.data?.map((remedio) => {
                    const usosHtml = remedio.uso.map((uso) => {
                        const datas2 = new Date(uso);
                        let minutes = datas2.getMinutes();
                        let day = datas2.getDate();
                        let month = datas2.getMonth() + 1;
                        let year = datas2.getFullYear();
                        let hour = datas2.getHours();
                        if (minutes < 10) {
                            minutes = "0" + minutes;
                        }
                        if (day < 10) {
                            day = "0" + day;
                        }
                        if (month < 10) {
                            month = "0" + month;
                        }
                        return `<p>Data: ${day}/${month}/${year} | Horário: ${hour}:${minutes} minutos</p>`;
                    });
                    return `<h3>${remedio.nomeRemedio}</h3>${usosHtml.join("") ?? ""}`;
                }).join("") ?? ""}
                
                <h2>Uso de remédios removidos</h2>
                <hr/>
                ${listRemovidos?.data?.map((remedio) => {
                    if (Array.isArray(remedio.uso)) {
                      const usosHtml = remedio.uso.map((uso) => {
                        const datas2 = new Date(uso);
                        let minutes = datas2.getMinutes();
                        let day = datas2.getDate();
                        let month = datas2.getMonth() + 1;
                        let year = datas2.getFullYear();
                        let hour = datas2.getHours();
                        if (minutes < 10) {
                          minutes = "0" + minutes;
                        }
                        if (day < 10) {
                          day = "0" + day;
                        }
                        if (month < 10) {
                          month = "0" + month;
                        }
                        return `<p>Data: ${day}/${month}/${year} | Horário: ${hour}:${minutes} minutos</p>`;
                      });
                      return `<h3>${remedio.nomeRemedio}</h3>${usosHtml.join("") ?? ""}`;
                    }else{
                        return `<h3>Esse remédio não possui usos registrados</h3>`;
                    }
                  }).join("") ?? ""}
                </body>
            </html>
        `;

        const file = await printToFileAsync({
            html: htmlContent,
            base64: false,
        });
        await shareAsync(file.uri);
    }

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.remedioContainer}>
          <Text style={styles.titleLarge}>Remédios ativos</Text>
          {list?.data?.map((remedio, index) => (
            <RemedioDropdown datas={remedio.uso} remedio={remedio} key={index} />
          ))}
          <Text style={styles.titleLarge}>Remédios removidos</Text>
          {listRemovidos?.data?.map((remedio, index) => (
            <RemedioDropdown datas={remedio.uso} remedio={remedio} key={index} />
          ))}
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={baixarRelatorio}>
            <Icon name="file-download" color={"white"} style={styles.icon} />
            <Text style={styles.text}>Baixar relatório</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
