import AsyncStorage from "@react-native-async-storage/async-storage";
import { entregaDados, schedulePushNotification } from "./notification";

var SalvarMedicamento = async (prop) => {
  let storage;

  try {
    storage = await AsyncStorage.getItem("@Remediario:Medicamentos");
  } catch (e) {
    console.log(e);
  }

  if (storage == null) {
    storage = {
      data: [],
    };
  } else {
    storage = JSON.parse(storage);
  }

  let nomeRemedio = storage.data.find(
    (nome) => nome.nomeRemedio === prop.nomeRemedio
  );

  if (nomeRemedio) {
    throw new Error(
      "Já existe um remédio com esse nome: " + nomeRemedio.nomeRemedio
    );
  }

  let hora, minutos;

  if (typeof prop.ultimoAlarme === "string") {
    hora = parseInt(prop.ultimoAlarme.substr(0, 2));
    minutos = parseInt(prop.ultimoAlarme.substr(3, 2));
  } else {
    const date = new Date(prop.ultimoAlarme);
    hora = date.getHours();
    minutos = date.getMinutes();
  }

  let today = new Date();

  if (
    hora < today.getHours() ||
    (hora === today.getHours() && minutos < today.getMinutes())
  ) {
    today.setDate(today.getDate() + 1);
  }

  today.setHours(hora, minutos);
  prop.ultimoAlarme = today;

  storage.data.push(prop);
  let prop2 = JSON.stringify(storage);

  try {
    await AsyncStorage.setItem("@Remediario:Medicamentos", prop2);
  } catch (e) {
    console.log(e);
    return e;
  }

  await entregaDados(prop, "Está na hora de tomar o remédio!");
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

var ListarMedicamentosRemovidos = async () => {
  var storage;

  try {
    storage = await AsyncStorage.getItem("@Remediario:MedicamentosRemovidos");
  } catch (e) {
    console.log(e);
    return e;
  }
  storage = JSON.parse(storage);

  return storage;
};

var getMedicamento = async (nomeRemedio) => {
  let storage;

  try {
    storage = await medicamentosDia();
  } catch (e) {
    throw new Error("Falha ao pegar medicamentos do dia");
  }

  let result = storage.data.find((nome) => nomeRemedio === nome.nomeRemedio);
  if (!result) {
    storage = await ListarMedicamento();
    result = storage.data.find((nome) => nomeRemedio === nome.nomeRemedio);
    result = { ...result, qtd: 0 };
  }
  if (!result.nomeRemedio) {
    return null;
  }
  return result;
};

var usoMedicamento = async (nomeRemedio) => {
  let remedio = await RenovarMedicamento(nomeRemedio);
  remedio = remedio[0];
  let storage = await ListarMedicamento();
  let diaAtual = new Date();

  if (!remedio.uso) {
    remedio.uso = [];
  }
  remedio.uso.push(diaAtual);
  remedio.estoque -= remedio.dosagem;

  let proxDia = new Date(diaAtual);
  const frequencia = parseInt(remedio.frequencia);

  switch (remedio.unidadeFrequencia) {
    case "meses":
      proxDia.setMonth(parseInt(diaAtual.getMonth()) + frequencia);
      break;
    case "dias":
      proxDia.setDate(diaAtual.getDate() + frequencia);
      break;
    case "horas":
      proxDia.setHours(diaAtual.getHours() + frequencia);
      break;
    case "minutos":
      proxDia.setMinutes(diaAtual.getMinutes() + frequencia);
      break;
    default:
      throw new Error(
        "Tipo de frequência mal definido em: " + remedio.nomeRemedio
      );
  }
  if (remedio.estoque < 0) remedio.estoque = 0;
  if (remedio.estoque / remedio.dosagem <= 3) {
    schedulePushNotification(
      remedio,
      2,
      `Existem apenas ${remedio.estoque} ${remedio.unidadeEstoque} restantes!`
    );
  }
  remedio.ultimoAlarme = proxDia;
  storage.data.push(remedio);
  storage = JSON.stringify(storage);

  try {
    await AsyncStorage.setItem("@Remediario:Medicamentos", storage);
  } catch (e) {
    console.log(e);
    return e;
  }
  entregaDados(remedio, "Está na hora de tomar o remédio!");
  return remedio;
};

var DeletarMedicamento = async () => {
  try {
    await AsyncStorage.removeItem("@Remediario:Medicamentos");
    await AsyncStorage.removeItem("@Remediario:MedicamentosRemovidos");
  } catch (e) {
    console.log(e);
    return false;
  }

  return true;
};

var SalvarMedicamentoRemovido = async (prop) => {
  //Cria array de Medicamentos removidos
  let storageRemovidos;
  try {
    storageRemovidos = await AsyncStorage.getItem(
      "@Remediario:MedicamentosRemovidos"
    );
  } catch (e) {
    console.log(e);
  }

  if (storageRemovidos == null) {
    storageRemovidos = {
      data: [],
    };
  } else {
    storageRemovidos = JSON.parse(storageRemovidos);
  }
  storageRemovidos.data.push(prop);
  let prop2 = JSON.stringify(storageRemovidos);

  //Pega o remedio para adicionar em Medicamentos removidos
  try {
    await AsyncStorage.setItem("@Remediario:MedicamentosRemovidos", prop2);
  } catch (e) {
    console.log(e);
    return e;
  }
};

var RenovarMedicamento = async (nomeRemedio) => {
  let storage;

  try {
    storage = await AsyncStorage.getItem("@Remediario:Medicamentos");
  } catch (e) {
    console.log(e);
  }

  if (storage == null) {
    throw new Error("Lista de medicamentos vazia");
  } else {
    storage = JSON.parse(storage);
  }

  let index = storage.data.findIndex(
    (remedio) => remedio.nomeRemedio === nomeRemedio
  );

  if (index !== -1) {
    let value = storage.data.splice(index, 1);

    try {
      await AsyncStorage.setItem(
        "@Remediario:Medicamentos",
        JSON.stringify(storage)
      );

      return value;
    } catch (e) {
      console.log(e);
      return e;
    }
  } else {
    throw new Error("Valor não encontrado");
  }
};

var RemoverMedicamento = async (nomeRemedio) => {
  //Recebe o medicamento
  let storage;

  try {
    storage = await AsyncStorage.getItem("@Remediario:Medicamentos");
  } catch (e) {
    console.log(e);
  }

  if (storage == null) {
    throw new Error("Lista de medicamentos vazia");
  } else {
    storage = JSON.parse(storage);
    remedio = await getMedicamento(nomeRemedio);
    SalvarMedicamentoRemovido(remedio);
  }

  let index = storage.data.findIndex(
    (remedio) => remedio.nomeRemedio === nomeRemedio
  );

  if (index !== -1) {
    let value = storage.data.splice(index, 1);

    try {
      await AsyncStorage.setItem(
        "@Remediario:Medicamentos",
        JSON.stringify(storage)
      );

      return value;
    } catch (e) {
      console.log(e);
      return e;
    }
  } else {
    throw new Error("Valor não encontrado");
  }
};

var medicamentosDia = async () => {
  let storage;
  let result = {
    data: [],
  };

  try {
    storage = await AsyncStorage.getItem("@Remediario:Medicamentos");
  } catch (e) {
    return e;
  }

  if (storage == null) {
    return { data: [] };
  }

  storage = JSON.parse(storage);

  storage.data.map((remedio) => {
    let today = new Date(remedio.ultimoAlarme);
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    while (today.getDate() < tomorrow.getDate()) {
      let index = result.data.findIndex(
        (nome) => nome.nomeRemedio === remedio.nomeRemedio
      );

      if (index === -1) {
        result.data.push({ ...remedio, qtd: 1 });
      } else {
        result.data[index].qtd++;
      }

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
            "Tipo de frequência mal definido em: " + remedio.nomeRemedio
          );
      }
    }
  });

  return result;
};

var EditarMedicamento = async (prop, nomeRemedio) => {
  let storage;

  try {
    storage = await AsyncStorage.getItem("@Remediario:Medicamentos");
  } catch (e) {
    console.log(e);
  }

  if (storage == null) {
    throw new Error("Lista de medicamentos vazia");
  } else {
    storage = JSON.parse(storage);
  }

  //Redefine horário
  let hora, minutos;

  if (typeof prop.ultimoAlarme === "string") {
    hora = parseInt(prop.ultimoAlarme.substr(0, 2));
    minutos = parseInt(prop.ultimoAlarme.substr(3, 2));
  } else {
    const date = new Date(prop.ultimoAlarme);
    hora = date.getHours();
    minutos = date.getMinutes();
  }

  let today = new Date();

  if (
    hora < today.getHours() ||
    (hora === today.getHours() && minutos < today.getMinutes())
  ) {
    today.setDate(today.getDate() + 1);
  }

  today.setHours(hora, minutos);
  prop.ultimoAlarme = today;

  //Fim redefinição de horário.

  let index = storage.data.findIndex(
    (remedio) => remedio.nomeRemedio === nomeRemedio
  );

  if (index !== -1) {
    storage.data[index] = prop;

    try {
      await AsyncStorage.setItem(
        "@Remediario:Medicamentos",
        JSON.stringify(storage)
      );

      return;
    } catch (e) {
      console.log(e);
      return e;
    }
  } else {
    throw new Error("Valor não encontrado");
  }
};

var adiarAlarme = async (prop, nomeRemedio, minutos) => {
  let storage;

  try {
    storage = await AsyncStorage.getItem("@Remediario:Medicamentos");
  } catch (e) {
    console.log(e);
  }

  if (storage == null) {
    throw new Error("Lista de medicamentos vazia");
  } else {
    storage = JSON.parse(storage);
  }

  const dataAtual = new Date();
  const dataDaquiCincoMinutos = new Date(dataAtual.getTime() + minutos * 60000);
  prop.ultimoAlarme = dataDaquiCincoMinutos;

  let index = storage.data.findIndex(
    (remedio) => remedio.nomeRemedio === nomeRemedio
  );
  entregaDados(prop, "Está na hora de tomar o remédio!");

  if (index !== -1) {
    storage.data[index] = prop;

    try {
      await AsyncStorage.setItem(
        "@Remediario:Medicamentos",
        JSON.stringify(storage)
      );

      return;
    } catch (e) {
      console.log(e);
      return e;
    }
  } else {
    throw new Error("Valor não encontrado");
  }
};

export {
  SalvarMedicamento,
  ListarMedicamento,
  ListarMedicamentosRemovidos,
  DeletarMedicamento,
  RemoverMedicamento,
  medicamentosDia,
  getMedicamento,
  usoMedicamento,
  EditarMedicamento,
  adiarAlarme,
};
