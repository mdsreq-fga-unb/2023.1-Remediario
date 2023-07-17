function adiarAlarme(prop, minutos) {
  if (!minutos) {
    minutos = 5;
  }

  const dataAtual = new Date();
  const dataDaquiCincoMinutos = new Date(dataAtual.getTime() + minutos * 60000);
  prop.ultimoAlarme = dataDaquiCincoMinutos;

  return prop;
}

module.exports = { adiarAlarme };
