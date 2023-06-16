import AsyncStorage from '@react-native-async-storage/async-storage';

var SalvarMedicamento = async (valor) => {
    let storage;
    try {
        storage = await AsyncStorage.getItem('Remediario:Medicamentos');        
    } catch (e) {
        console.log(e);
    } 
    if (storage == undefined){
        storage = {
            data: Array
        }
    } else {
        storage = JSON.parse(storage);
    }
    storage.data.push(valor);
    storage = JSON.stringify(storage);
    try {
        await AsyncStorage.setItem(
        '@Remediario:Medicamentos',
        storage,
        );        
    } catch (e) {
        console.log(e);
        return e;
    };
    return valor;
    
}; 

var ListarMedicamento = async (chave) => {
    var valor;
    try {
        valor = await AsyncStorage.getItem('@Remediario:Medicamentos');
    } catch (e) {
        console.log(e);
        return e;
    }
    return valor;
}

export { SalvarMedicamento, ListarMedicamento };