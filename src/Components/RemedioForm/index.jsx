import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { TextInput, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

// Funções
import { SalvarMedicamento } from '../../Services/medicamento';

// Componentes
import BotaoSalvar from '../Salvar/index';

// Estilos
import { styles } from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function AddRemedio({remedio, navigation, execute }) {
    // Variáveis
    const [NomeRemedio, setRemedio] = useState(remedio?.nomeRemedio || '');
    const [quantidade, setQuantidade] = useState(remedio?.dosagem?.toString() || '');
    const [quantidade2, setQuantidade2] = useState(remedio?.estoque?.toString() || '');
    const [unidade, setUnidade] = useState(remedio?.unidadeEstoque || 'comprimidos');
    const [intervalo, setIntervalo] = useState(remedio?.frequencia || '1');
    const [unidadeIntervalo, setUnidadeIntervalo] = useState(remedio?.unidadeFrequencia || 'horas');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [observacoes, setObservacoes] = useState(remedio?.obs ||'');
    const [Horario, setHorario] = useState(remedio?.ultimoAlarme ||'');
    const hours = Array.from({ length: 24 }, (_, index) => index + 0);
    const minutes = ['00', '15', '30', '45'];
    const [error, setError] = useState('');

    useEffect(() => {
        if (remedio?.ultimoAlarme) {
          const hora = new Date(remedio.ultimoAlarme);
          const horas = hora.getHours();
          const minutos = hora.getMinutes();
          if (horas !== null && minutos !== null) {
            const horasFormatadas = horas < 10 ? `0${horas}` : horas;
            const minutosFormatados = minutos < 10 ? '0' + minutos : minutos;
            setHorario(`${horasFormatadas}:${minutosFormatados}`)
          }
        }
      }, [remedio?.ultimoAlarme]);
      
      const formattedHours = hours.map((hour) => {
        const formattedHour = hour < 10 ? `0${hour}` : hour;
        return formattedHour;
      });
      
      const formattedMinutes = minutes.map((minute) => {
        return minute;
      });
      

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Funções
    const handleQuantidadeChange = (text) => {
        // Verificar se o valor inserido é numérico
        if (/^\d*$/.test(text)) {
            setQuantidade(text);
        }
    };

    // Funções
    const handleQuantidade2Change = (text) => {
        // Verificar se o valor inserido é numérico
        if (/^\d*$/.test(text)) {
            setQuantidade2(text);
        }
    };

    // Funções
    const save = async () => {
        if (!NomeRemedio || !quantidade || !quantidade2) {
            let errorMessage = 'Preencha os seguintes campos obrigatórios:';
            if (!NomeRemedio) {
                errorMessage += ' Nome do Remédio,';
            }
            if (!quantidade) {
                errorMessage += ' Dosagem,';
            }
            if (!quantidade2) {
                errorMessage += ' Quantidade Total,';
            }
            errorMessage = errorMessage.slice(0, -1); // Remove a última vírgula

            setError(errorMessage);
            return;
        }
        if (quantidade < 1) {
            setError('A dosagem deve ser maior que 0.');
            return;
        }
        if (quantidade2 < 1) {
            setError('A quantidade total deve ser maior que 0.');
            return;
        }

        let uso = [];
        if (remedio) uso = remedio.uso;

        const remedioOBJ = {
            nomeRemedio: NomeRemedio,
            dosagem: quantidade,
            estoque: quantidade2,
            unidadeEstoque: unidade,
            frequencia: intervalo,
            unidadeFrequencia: unidadeIntervalo,
            obs: observacoes,
            ultimoAlarme: Horario,
            uso: uso,
        };

        try {
            await execute(remedioOBJ, remedio?.nomeRemedio);
            setTimeout(() => {
                navigation.navigate('Remédios do dia');
            }, 1000);
        } catch (e) {
            console.log(e);
        }
    };

    //Código da tela 
    return (
        <KeyboardAwareScrollView>
            <View style={styles.pageContainer}>
                <View style={styles.container}>
                    <View style={styles.container2}>
                        <Text style={styles.label}>Nome do Remédio</Text>
                        <TextInput
                            style={[styles.input, styles.textInput]}
                            value={NomeRemedio}
                            onChangeText={setRemedio}
                            placeholder="Digite o nome do remédio"
                            placeholderTextColor="white"
                            textColor="white"
                            theme={{
                                roundness: 0,
                            }}
                        />
                    </View>

                    <View style={styles.container2}>
                        <Text style={styles.label}>Dosagem</Text>
                        <View style={styles.ContainerDropdown}>
                            <TextInput
                                style={styles.textInput2}
                                value={quantidade}
                                onChangeText={handleQuantidadeChange}
                                keyboardType="numeric"
                                textColor="white"
                            />

                            <View style={styles.dropdown2}>
                                <Picker
                                    style={styles.dropdownPicker}
                                    selectedValue={unidade}
                                    onValueChange={(itemValue) => setUnidade(itemValue)}
                                >
                                    <Picker.Item label="comprimidos" value="comprimidos" />
                                    <Picker.Item label="g" value="g" />
                                    <Picker.Item label="ml" value="ml" />
                                    <Picker.Item label="mg" value="mg" />
                                </Picker>
                                <Icon name={isDropdownOpen ? 'angle-up' : 'angle-down'} style={styles.icon} />
                            </View>

                            <Text style={styles.secondarylabel}>por dosagem</Text>
                        </View>

                        <View style={styles.ContainerDropdown}>
                            <Text style={styles.secondarylabel}>A cada</Text>
                            <View style={styles.dropdown}>
                                <Picker
                                    style={styles.dropdownPicker}
                                    selectedValue={intervalo}
                                    onValueChange={(itemValue) => setIntervalo(itemValue)}
                                >
                                    {Array.from({ length: 60 }, (_, index) => (
                                        <Picker.Item key={index} label={`${index + 1}`} value={index + 1} />
                                    ))}
                                </Picker>
                                <Icon name={isDropdownOpen ? 'angle-up' : 'angle-down'} style={styles.icon} />
                            </View>
                            <View style={styles.dropdown2}>
                                <Picker
                                    style={styles.dropdownPicker}
                                    selectedValue={unidadeIntervalo}
                                    onValueChange={(itemValue) => setUnidadeIntervalo(itemValue)}
                                >
                                    <Picker.Item label="meses" value="meses" />
                                    <Picker.Item label="dias" value="dias" />
                                    <Picker.Item label="horas" value="horas" />
                                </Picker>
                                <Icon name={isDropdownOpen ? 'angle-up' : 'angle-down'} style={styles.icon} />
                            </View>
                        </View>
                    </View>

                    <View style={styles.container2}>
                        <Text style={styles.label}>Quantidade Total</Text>
                        <View style={styles.ContainerDropdown}>
                            <TextInput
                                style={styles.textInput2}
                                value={quantidade2}
                                onChangeText={handleQuantidade2Change}
                                keyboardType="numeric"
                                textColor="white"
                            />

                            <View style={styles.dropdown2}>
                                <Picker
                                    style={styles.dropdownPicker}
                                    selectedValue={unidade}
                                    onValueChange={(itemValue) => setUnidade(itemValue)}
                                >
                                    <Picker.Item label="comprimidos" value="comprimidos" />
                                    <Picker.Item label="g" value="g" />
                                    <Picker.Item label="ml" value="ml" />
                                    <Picker.Item label="mg" value="mg" />
                                </Picker>
                                <Icon name={isDropdownOpen ? 'angle-up' : 'angle-down'} style={styles.icon} />
                            </View>

                            <Text style={styles.secondarylabel}>no total</Text>
                        </View>
                    </View>

                    <View style={styles.container2}>
                        <Text style={styles.label}>Observações</Text>
                        <TextInput
                            style={styles.input}
                            value={observacoes}
                            onChangeText={setObservacoes}
                            placeholder="Digite suas observações..."
                            placeholderTextColor="white"
                            textColor="white"
                            shadowColor="transparent"
                            theme={{
                                roundness: 0,
                            }}
                        />
                    </View>

                    <View style={styles.container2}>
                    <Text style={styles.label}>Início do Alarme</Text>
                    <View style={styles.ContainerDropdown}>
                        <View style={styles.dropdown}>
                        <Picker
                            style={styles.dropdownPicker}
                            selectedValue={Horario}
                            onValueChange={(itemValue) => setHorario(itemValue)}
                        >
                            {formattedHours.map((hour) =>
                                formattedMinutes.map((minute) => {
                                    const formattedHorario = `${hour}:${minute}`;
                                    return (
                                        <Picker.Item
                                            key={formattedHorario}
                                            label={formattedHorario}
                                            value={formattedHorario}
                                          />
                                    );
                                })
                            )}
                        </Picker>
                        <Icon name={isDropdownOpen ? 'angle-up' : 'angle-down'} style={styles.icon} />
                        </View>
                    </View>
                    </View>

                    {error ? <Text style={styles.errorText}>{error}</Text> : null}
                    <BotaoSalvar onPress={save} />
                    {/* <Button onPress={Save} title='Salvar'/> */}
                </View>
            </View>
        </KeyboardAwareScrollView>
    );
}