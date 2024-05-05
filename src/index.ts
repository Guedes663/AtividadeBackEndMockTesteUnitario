interface Character {
    nome: string,
    vida: number,
    defesa: number,
    forca: number
}

interface validateCharacterInterface {
    validateCharacter: ( personagem: Character ) => boolean;
}

export const validateCharacter = ( personagem: Character ): boolean => {
    if( personagem.nome == null || personagem.nome == "" ) {
        return false;
    }
    
    if( personagem.defesa == null || personagem.defesa <= 0 ) {
        return false;
    }

    if( personagem.vida == null || personagem.vida <= 0 ) {
        return false;
    }
    
    if( personagem.forca == null || personagem.forca <= 0 ) {
        return false;
    }

    return true;
}

export const performAttack = ( attacker: Character, defender: Character ) => {
    if( validateCharacter(attacker) == false || validateCharacter(defender) == false ) {
        return "Invalid Character";
    }

    if( defender.defesa > attacker.forca ){
        return null;
    } 
    else {
        defender.vida = defender.vida - (attacker.forca - defender.defesa);
    }
}

export const performAttack2 = (  attacker: Character, defender: Character, validator: validateCharacterInterface ) => {
    if( validator.validateCharacter(attacker) == false || validator.validateCharacter(defender) == false ) {
        return "Invalid Character";
    }

    if( defender.defesa > attacker.forca ){
        return null;
    } 
    else {
        defender.vida = defender.vida - (attacker.forca - defender.defesa);
    }
}