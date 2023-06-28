import { Text } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles';
import React, { useState } from 'react';

export default function EditMedicine() {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const hours = Array.from({ length: 23 }, (_, index) => index + 0);
    const minutes = ['00', '15', '30', '45'];

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <KeyboardAwareScrollView>
            <View style={styles.pageContainer}>
                <View style={styles.container}>
                    <View style={styles.container2}>
                        <Text style={styles.label}>Nome do Remédio</Text>
                        <TextInput
                            style={[styles.input, styles.textInput]}
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
                                keyboardType="numeric"
                                textColor="white"
                            />

                            <View style={styles.dropdown2}>
                                <Picker
                                    style={styles.dropdownPicker}                                   
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
                                >
                                    <Picker.Item label="meses" value="meses" />
                                    <Picker.Item label="dias" value="dias" />
                                    <Picker.Item label="horas" value="horas" />
                                    <Picker.Item label="minutos" value="minutos" />
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
                                keyboardType="numeric"
                                textColor="white"
                            />

                            <View style={styles.dropdown2}>
                                <Picker
                                    style={styles.dropdownPicker}
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
                            placeholder="Digite suas observações..."
                            placeholderTextColor="white"
                            textColor="white"
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
                                >
                                    {hours.map((hour) =>
                                        minutes.map((minute) => {
                                            const formattedHour = hour === 0 ? '00' : hour < 10 ? `0${hour}` : hour;
                                            const formattedMinute = minute;

                                            return (
                                                <Picker.Item
                                                    key={`${formattedHour}:${formattedMinute}`}
                                                    label={`${formattedHour}:${formattedMinute}`}
                                                    value={`${formattedHour}:${formattedMinute}`}
                                                />
                                            );
                                        })
                                    )}
                                </Picker>
                                <Icon name={isDropdownOpen ? 'angle-up' : 'angle-down'} style={styles.icon} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </KeyboardAwareScrollView>
    );
}
