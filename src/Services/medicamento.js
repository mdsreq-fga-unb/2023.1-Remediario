import AsyncStorage from '@react-native-async-storage/async-storage';

var SalvarMedicamento = async (prop) => {
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
    //Verifica se já existe um valor com o mesmo nome. Se existir lança um erro.
    let nomeRemedio = storage.data.find(nome => nome.nomeRemedio == prop.nomeRemedio)
    if (nomeRemedio) {
        throw new Error('Já existe um remédio com esse nome: ' + nomeRemedio.nomeRemedio);
    }
    //foo
    
    //Pega o objeto e salva ele no data.        
    storage.data.push(prop)
    prop = JSON.stringify(storage);   
    //Salva o novo storage no armazenamento local.
    try {
        await AsyncStorage.setItem(
            '@Remediario:Medicamentos',
            prop
        );        
    } catch (e) {
        console.log(e);
        return e;
    };
    return prop;  
}; 

var ListarMedicamento = async () => {
    var storage;
    try {
        storage = await AsyncStorage.getItem('@Remediario:Medicamentos');
    } catch (e) {
        console.log(e);
        return e;
    }
    storage = JSON.parse(storage);
    return storage;
}

var DeletarMedicamento = async() => {
    try {
        await AsyncStorage.removeItem('@Remediario:Medicamentos');        
    } catch (e) {
        console.log(e);
        return false;
    }
    return true;
}

var RemoverMedicamento = async (prop) => {
    //Pega oque já está salvo no armazenamento interno.
    let storage;  
    try {
        storage = await AsyncStorage.getItem('@Remediario:Medicamentos');
    } catch (e) {
        console.log(e);
    }
    //Verifica se existe algo no armazenamento interno.
    if (storage == null) throw new Error('Lista de medicamentos vazia');
    else storage = JSON.parse(storage);
    //Verifica a posição do objeto
    let index = storage.data.findIndex(remedio => remedio.nomeRemedio == prop.nomeRemedio);
    //Destaca o objeto presente naquela posição
    let value
    if (index != -1){
        value = storage.data.splice(index, 1);
    } else throw new Error('Valor não encontrado');
    //Retorna o storage atualizado para o armazenamento local.
    try {
        await AsyncStorage.setItem(
            '@Remediario:Medicamentos',
            JSON.stringify(storage)
        );
    } catch (e) {
        console.log(e);
        return e;
    }
    return value;
}

var medicamentosDia = async() => {
    
    let storage;
    try {
        storage = await AsyncStorage.getItem('@Remediario:Medicamentos')
    } catch (e) {
        return e;
    }
    if (storage == null) return {data: []};
    storage = JSON.parse(storage);
    storage.data.map(remedio => {
        let today = new Date(remedio.ultimoAlarme);
        console.log(today);
        let tommorow = new Date;
        tommorow.setDate(today.getDate() + 1);   
        while (today.getDate() < tommorow.getDate()){
            console.log("oi");
            switch (remedio.unidadeFrequencia) {
                case "meses":
                    today.setMonth(today.getMonth() + remedio.frequencia);
                    break;
                case "dias":
                    today.setDate(today.getDate() + remedio.frequencia);
                    break;
                case "horas":
                    today.setHours(today.getHours() + remedio.frequencia);
                    break;
                case "minutos":
                    today.setMinutes(today.getMinutes() + remedio.frequencia);
                    break;
                default:
                    break;
            }
        }
    })
    return "cu";
}

export { SalvarMedicamento, ListarMedicamento, DeletarMedicamento, RemoverMedicamento, medicamentosDia };