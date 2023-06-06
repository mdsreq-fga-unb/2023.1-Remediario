import { AsyncStorage } from '@react-native-async-storage/async-storage';

// export type MedicamentoProps = {

// }
class Medicamentos{
    SalvarMedicamento = async(MedicamentoProps) => {
        try {
            await AsyncStorage.setItem(
            '@Remediario:remedio',
            'Dipironga',
            );
        } catch (e) {
            console.log(e);
        }
    } 
}

module.exports = { Medicamentos }