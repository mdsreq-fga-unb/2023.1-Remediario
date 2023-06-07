import AsyncStorage from '@react-native-async-storage/async-storage';

var SalvarMedicamento = async (chave, valor) => {    
    try {
        await AsyncStorage.setItem(
        '@Remediario:' + chave,
        valor,
        );
        return [chave, valor];
    } catch (e) {
        return e;
    };
    
}; 

export { SalvarMedicamento };


// const { AsyncStorage } = require('@react-native-community/async-storage');
// export type MedicamentoProps = {

// }
// class Medicamentos{
//     SalvarMedicamento = async(MedicamentoProps) => {
//         const Pack = JASON.stringfy(MedicamentoProps);
//         try {
//             await AsyncStorage.setItem(
//             '@Remediario:remedio',
//             'Pack',
//             );
//             return Pack;
//         } catch (e) {
//             console.log(e);
//         }
//     } 
// }