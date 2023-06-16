import AsyncStorage from '@react-native-async-storage/async-storage';

var SalvarMedicamento = async (object) => {
    let storage;  
    try {
        storage = await AsyncStorage.getItem('@Remediario:Medicamentos');
    } catch (e) {
        console.log(e);
    }
    if (storage == null){
        storage = {
            data: []
        }; 
        console.log("oi");
    } else{
        storage = JSON.parse(storage);
    }        
    storage.data.push(object)
    console.log(storage);
    object = JSON.stringify(storage);   
    try {
        await AsyncStorage.setItem(
        "@Remediario:Medicamentos",
        object,
        );        
    } catch (e) {
        console.log(e);
        return "Erro ao salvar medicamento";
    };
    return object;  
}; 

var ListarMedicamento = async () => {
    var storage;
    try {
        storage = await AsyncStorage.getItem('@Remediario:Medicamentos');
    } catch (e) {
        console.log(e);
        return e;
    }
    return storage;
}

var DeletarMedicamento = async() => {
    try {
        await AsyncStorage.removeItem('@Remediario:Medicamentos');
        console.log("Medicamentos removidos");
    } catch (e) {
        console.log(e);
        return false;
    }
    return true;
}

export { SalvarMedicamento, ListarMedicamento, DeletarMedicamento };