const { sum } = require('../Services/foo');

it('sums two numbers', () => {
    expect(sum(1,2)).toBe(3);
})

// import Medicamentos from '../Services/medicamento.js';
// const { Medicamentos } = require('../Services/medicamento.js')

// it('Salva medicamentos', () => {    
//     expect(Medicamentos.SalvarMedicamento(2)).toBe(0);
// })