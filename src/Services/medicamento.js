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
    const hora = parseInt(prop.ultimoAlarme.substr(0, 2));
    const minutos = parseInt(prop.ultimoAlarme.substr(3, 2));
    let day = new Date();

    if(hora < day.getHours() || (hora == day.getHours && minutos < day.getMinutes)){
        day.setDate(day.getDate() + 1);        
    }
    day.setHours(hora, minutos);
    prop.ultimoAlarme = day;
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
    let result = {
        data: []
    }
    try {
        storage = await AsyncStorage.getItem('@Remediario:Medicamentos')
    } catch (e) {
        return e;
    }
    if (storage == null) return null;
    storage = JSON.parse(storage);
    storage.data.map(remedio => {
        let today = new Date(remedio.ultimoAlarme);
        let tommorow = new Date();
        tommorow.setDate(tommorow.getDate() + 1);   
        while (today.getDate() < tommorow.getDate()){
            let index = result.data.findIndex(nome => nome.nomeRemedio == remedio.nomeRemedio)
            if (index == -1) {
                result.data.push( {...remedio, qtd: 0});
                result.data[0].qtd ++;
            } else result.data[index].qtd ++;           
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
                    throw new Error("Tipo de frequencia mal definido em: " + remedio.nomeRemedio);
            }
        }
    })
    return result;
}

export { SalvarMedicamento, ListarMedicamento, DeletarMedicamento, RemoverMedicamento, medicamentosDia };