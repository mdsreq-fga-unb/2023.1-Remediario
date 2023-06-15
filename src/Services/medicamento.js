import AsyncStorage from '@react-native-async-storage/async-storage';

var SalvarMedicamento = async (chave, valor) => {    
    try {
        await AsyncStorage.setItem(
        '@Remediario:' + chave,
        valor,
        );        
    } catch (e) {
        console.log(e);
        return e;
    };
    console.log("oi");
    return [chave, valor];
    
}; 

var ListarMedicamento = async (chave) => {
    var valor;
    try {
        valor = await AsyncStorage.getItem('@Remediario:' + chave);
        console.log(valor + "oi");
    } catch (e) {
        console.log(e);
        return e;
    }
    return valor;
}

export { SalvarMedicamento, ListarMedicamento };


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