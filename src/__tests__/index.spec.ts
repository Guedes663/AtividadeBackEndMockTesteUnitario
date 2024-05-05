import { validateCharacter } from "..";

const mockValidateCharacterSuccess = jest.fn(() => true);
const mockValidateCharacterFailure = jest.fn(() => false);

describe("Testando a função validateCharacter", () => {
    test("Verifica o comportamento da função com um personagem com o nome vazio", () => {
        const resultValidateCharacter = validateCharacter({ nome: "", vida: 1500, defesa: 100, forca: 200 });

        expect(resultValidateCharacter).toBe(false);
    });

    test("Verificando o comportamento da função com um personagem com a vida igual a zero", () => {
        const resultValidateCharacter = validateCharacter({ nome: "PaulinhoMatadorDePorco", vida: 0, defesa: 100, forca: 200 });

        expect(resultValidateCharacter).toBe(false);
    });

    test("Verificando o comportamento da função com um personagem com a força igual a zero", () => {
        const resultValidateCharacter = validateCharacter({ nome: "Frajola", vida: 1500, defesa: 100, forca: 0 });

        expect(resultValidateCharacter).toBe(false);
    });

    test("Verificando o comportamento da função com um personagem com a defesa igual a zero", () => {
        const resultValidateCharacter = validateCharacter({ nome: "Jubileu", vida: 1500, defesa: 0, forca: 200 });

        expect(resultValidateCharacter).toBe(false);
    });

    test("Verificando o comportamento da função com um personagem com a vida com um valor negativo", () => {
        const resultValidateCharacter = validateCharacter({ nome: "MongoBongo", vida: -1500, defesa: 100, forca: 200 });

        expect(resultValidateCharacter).toBe(false);
    });

    test("Verificando o comportamento da função com um personagem com as informações validas", () => {
        const resultValidateCharacter = validateCharacter({ nome: "Mendonça", vida: 1500, defesa: 100, forca: 200 });

        expect(resultValidateCharacter).toBe(true);
    });
});