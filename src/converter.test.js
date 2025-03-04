import convertToRoman from "./converter.js";


describe("Converter", () => {
    it("Debe retornar I", () => {
      const resultado = convertToRoman(1);
      expect(resultado).toBe("I");
    });

    it("Debe retornar VII", () => {
        const resultado = convertToRoman(7);
        expect(resultado).toBe("VII");
      });

    it("Debe retornar III", () => {
        const resultado = convertToRoman(3);
        expect(resultado).toBe("III");
      });
    
    it("Debe retornar X", () => {
        const resultado = convertToRoman(10);
        expect(resultado).toBe("X");
      });
      
    it("Debe retornar XVII", () => {
        const resultado = convertToRoman(17);
        expect(resultado).toBe("XVII");
      });

    it("Debe retornar LXIV", () => {
        const resultado = convertToRoman(64);
        expect(resultado).toBe("LXIV");
      });
    
    it("Debe retornar XCII", () => {
        const resultado = convertToRoman(92);
        expect(resultado).toBe("XCII");
      });
    it("Debe retornar CXX", () => {
        const resultado = convertToRoman(120);
        expect(resultado).toBe("CXX");
      });

    it("Debe retornar CXLV", () => {
        const resultado = convertToRoman(145);
        expect(resultado).toBe("CXLV");
      });
    
    it("Debe retornar CCCXCIX", () => {
        const resultado = convertToRoman(399);
        expect(resultado).toBe("CCCXCIX");
      });
    it("Debe retornar CDXCVIII", () => {
        const resultado = convertToRoman(498);
        expect(resultado).toBe("CDXCVIII");
      });

    it("Debe retornar D", () => {
        const resultado = convertToRoman(500);
        expect(resultado).toBe("D");
      });
    
    it("Debe retornar CCXCI", () => {
        const resultado = convertToRoman(291);
        expect(resultado).toBe("CCXCI");
      });
});
  
  