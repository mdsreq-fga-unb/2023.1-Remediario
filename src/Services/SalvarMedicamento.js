async function SalvarMedicamento(prop) {
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
  return prop2;
}

module.exports = { SalvarMedicamento };
