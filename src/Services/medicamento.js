import AsyncStorage from '@react-native-async-storage/async-storage';

var SalvarMedicamento = async (object) => {
    //Pega oque já está salvo no armazenamento interno.
    let storage;  
    try {
        storage = await AsyncStorage.getItem('@Remediario:Medicamentos');
    } catch (e) {
        console.log(e);
    }
    //Verifica se existe algo no armazenamento interno.
    if (storage == null){
        //Se não existir, cria um objeto com um campo data Vetor.
        storage = {
            data: []
        };
    } else{
        //Se existir transforma o storage em JSON.
        storage = JSON.parse(storage);
    }
    //Verifica se já existe um valor com o mesmo nome.
    if (storage.data.find(nome => nome.nomeRemedio == object.nomeRemedio)) {
        throw new Error('Já existe um valor com esse nome');
        return null;
    }
    //Pega o objeto e salva ele no data.        
    storage.data.push(object)
    console.log(storage);
    object = JSON.stringify(storage);   
    //Salva o novo storage no armazenamento local.
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