const { adiarAlarme } = require("./adiarAlarme");

const objectTeste1 = {
  nomeRemedio: "dipirona",
  dosagem: 3,
  estoque: 6,
  unidadeEstoque: "g",
  frequencia: 1,
  unidadeFrequencia: "horas",
  obs: "observacoes teste 1",
  ultimoAlarme: "02:32",
  uso: [],
};

it("Testa se recebeu os dados", async () => {
  const result = await adiarAlarme(objectTeste1);
  expect(result).toEqual(objectTeste1);
});

it("Programar o alarme daqui 5 minutos", async () => {
  const result = await adiarAlarme(objectTeste1);
  alarmeResultado = result.ultimoAlarme;

  const dataAtual = new Date();
  const dataDaquiCincoMinutos = new Date(dataAtual.getTime() + 5 * 60000);
  expect(alarmeResultado).toEqual(dataDaquiCincoMinutos);
});

it("Programar o alarme daqui X minutos", async () => {
  //Numero aleatorios de 5 a 60 minutos
  const minutos = Math.floor(Math.random() * (60 - 5 + 1) + 5);
  const dataAtual = new Date();
  const dataDaquiXMinutos = new Date(dataAtual.getTime() + minutos * 60000);

  const result = await adiarAlarme(objectTeste1, minutos);
  alarmeResultado = result.ultimoAlarme;
  expect(alarmeResultado).toEqual(dataDaquiXMinutos);
});
