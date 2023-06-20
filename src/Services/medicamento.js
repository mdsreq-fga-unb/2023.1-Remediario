import AsyncStorage from "@react-native-async-storage/async-storage";
import { entregaDados } from "./notification";

var SalvarMedicamento = async (prop) => {
  //Pega oque já está salvo no armazenamento interno.
  let storage;
  try {
    storage = await AsyncStorage.getItem("@Remediario:Medicamentos");
  } catch (e) {
    console.log(e);
  }
  //Verifica se existe algo no armazenamento interno.
  if (storage == null) {
    //Se não existir, cria um objeto com um campo data Vetor.
    storage = {
      data: [],
    };
  } else {
    //Se existir transforma o storage em JSON.
    storage = JSON.parse(storage);
  }
  //Verifica se já existe um valor com o mesmo nome. Se existir lança um erro.
  let nomeRemedio = storage.data.find(
    (nome) => nome.nomeRemedio == prop.nomeRemedio
  );
  if (nomeRemedio) {
    throw new Error(
      "Já existe um remédio com esse nome: " + nomeRemedio.nomeRemedio
    );
  }
  //foo
  const hora = parseInt(prop.ultimoAlarme.substr(0, 2));
  const minutos = parseInt(prop.ultimoAlarme.substr(3, 2));
  let day = new Date();

  if (
    hora < day.getHours() ||
    (hora == day.getHours && minutos < day.getMinutes)
  ) {
    day.setDate(day.getDate() + 1);
  }
  day.setHours(hora, minutos);
  prop.ultimoAlarme = day;
  //Pega o objeto e salva ele no data.
  storage.data.push(prop);
  let prop2 = JSON.stringify(storage);
  //Salva o novo storage no armazenamento local.
  try {
    await AsyncStorage.setItem("@Remediario:Medicamentos", prop2);
  } catch (e) {
    console.log(e);
    return e;
  }
  await entregaDados(prop);
  return prop;
};

var ListarMedicamento = async () => {
  var storage;
  try {
    storage = await AsyncStorage.getItem("@Remediario:Medicamentos");
  } catch (e) {
    console.log(e);
    return e;
  }
  storage = JSON.parse(storage);
  return storage;
};

var getMedicamento = async (nomeRemedio) => {
  var storage;
  try {
    storage = await medicamentosDia();
  } catch (e) {
    throw new Error("Falha falha ao pegar medicamentos do dia");
  }
  const result = storage.data.find((nome) => nomeRemedio == nome.nomeRemedio);
  return result;
};

var usoMedicamento = async (nomeRemedio) => {
  const remedio = await RemoverMedicamento(nomeRemedio);
  const storage = await ListarMedicamento();
  const diaAtual = new Date();

  remedio.uso.push(diaAtual);

  remedio.estoque -= remedio.dosagem;

  const proxAlarme = new Date(remedio.ultimoAlarme);

  switch (remedio.unidadeFrequencia) {
    case "meses":
      proxAlarme.setMonth(proxAlarme.getMonth() + remedio.frequencia);
      break;
    case "dias":
      proxAlarme.setDate(proxAlarme.getDate() + remedio.frequencia);
      break;
    case "horas":
      proxAlarme.setHours(proxAlarme.getHours() + remedio.frequencia);
      break;
    case "minutos":
      proxAlarme.setMinutes(proxAlarme.getMinutes() + remedio.frequencia);
      break;
    default:
      throw new Error(
        "Tipo de frequencia mal definido em: " + remedio.nomeRemedio
      );
  }
  remedio.ultimoAlarme = proxAlarme;

  storage.data.push(remedio);
  storage = JSON.stringify(storage);

  try {
    await AsyncStorage.setItem("@Remediario:Medicamentos", storage);
  } catch (e) {
    console.log(e);
    return e;
  }
};

var DeletarMedicamento = async () => {
  try {
    await AsyncStorage.removeItem("@Remediario:Medicamentos");
  } catch (e) {
    console.log(e);
    return false;
  }
  return true;
};

var RemoverMedicamento = async (nomeRemedio) => {
  //Pega oque já está salvo no armazenamento interno.
  let storage;
  try {
    storage = await AsyncStorage.getItem("@Remediario:Medicamentos");
  } catch (e) {
    console.log(e);
  }
  //Verifica se existe algo no armazenamento interno.
  if (storage == null) throw new Error("Lista de medicamentos vazia");
  else storage = JSON.parse(storage);
  //Verifica a posição do objeto
  let index = storage.data.findIndex(
    (remedio) => remedio.nomeRemedio == nomeRemedio
  );
  //Destaca o objeto presente naquela posição
  let value;
  if (index != -1) {
    value = storage.data.splice(index, 1);
  } else throw new Error("Valor não encontrado");
  //Retorna o storage atualizado para o armazenamento local.
  try {
    await AsyncStorage.setItem(
      "@Remediario:Medicamentos",
      JSON.stringify(storage)
    );
  } catch (e) {
    console.log(e);
    return e;
  }
  return value;
};

var medicamentosDia = async () => {
  let storage;
  //define a quantidade do dia como um array vazio.
  let result = {
    data: [],
  };
  //pega o storage do armazenamento.
  try {
    storage = await AsyncStorage.getItem("@Remediario:Medicamentos");
  } catch (e) {
    return e;
  }
  //se for null retorna um array vazio.
  if (storage == null) return { data: [] };
  storage = JSON.parse(storage);
  //faz um map do remédio e verifica se:
  storage.data.map((remedio) => {
    let today = new Date(remedio.ultimoAlarme);
    let tommorow = new Date();
    tommorow.setDate(tommorow.getDate() + 1);
    //se o valor do dia de hoje.
    while (today.getDate() < tommorow.getDate()) {
      let index = result.data.findIndex(
        (nome) => nome.nomeRemedio == remedio.nomeRemedio
      );
      if (index == -1) {
        result.data.push({ ...remedio, qtd: 1 });
      } else result.data[index].qtd++;
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
          throw new Error(
            "Tipo de frequencia mal definido em: " + remedio.nomeRemedio
          );
      }
    }
  });
  return result;
};

export {
  SalvarMedicamento,
  ListarMedicamento,
  DeletarMedicamento,
  RemoverMedicamento,
  medicamentosDia,
  getMedicamento,
  usoMedicamento,
};
