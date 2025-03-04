import convertToRoman from "./converter.js";


describe("Converter", () => {
    
    it("Debe retornar I", () => {
      const resultado = convertToRoman(1);
      expect(resultado).toBe("I");
    });
    
});
  
  