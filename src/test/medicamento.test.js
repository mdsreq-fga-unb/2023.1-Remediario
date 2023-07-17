import AsyncStorage from "@react-native-async-storage/async-storage";
const { SalvarMedicamento } = require("../Services/medicamento");

describe("Medicamentos Storage", () => {
  it("Deve chamar a função AsyncStorage", async () => {
    const mock = jest.spyOn(AsyncStorage, "setItem");
    mock.mockImplementation(() => Promise.resolve());

    const result = await SalvarMedicamento("testKey", "testValue");

    expect(result).toStrictEqual(["testKey", "testValue"]);
    expect(AsyncStorage.setItem).toHaveBeenCalledWith(
      "@Remediario:testKey",
      "testValue"
    );
  });
});
