const { AsyncStorage } = require("@react-native-async-storage/async-storage");

async function adiarAlarme() {
  let storage;
  try {
    storage = AsyncStorage.getItem("@Remediario:Medicamentos");
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

  return storage;
}

module.exports = { adiarAlarme };
