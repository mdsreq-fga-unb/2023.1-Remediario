// import Medicamentos from '../Services/medicamento.js';
const { Medicamentos } = require('../Services/medicamento.js')

it('Salva medicamentos', () => {    
    expect(Medicamentos.SalvarMedicamento(2)).toBe(0);
})