interface ICharacter {
  name: string;
  level: number;
  introduce(phrase: string): void;
  levelUp(): void;
}

interface ISpellCaster {
  castSpell(): void;
}

class Wizard implements ICharacter, ISpellCaster {
  constructor(public name: string, public level: number) {
    if (this.level < 1) {
      throw new Error('Level too low');
    }
  }

  introduce(phrase: string): void {
    console.log(phrase + ', ' + this.name);
  }

  castSpell(): void {
    console.log('Casting a spell, behold my power!');
  }

  levelUp(): void {
    this.level++;
    console.log(`Level up! New level is ${this.level}`);
  }
}

// Тестування класу
const wizard = new Wizard('Merlin', 15);

wizard.introduce('I am the mighty wizard'); // I am the mighty wizard, Merlin
wizard.castSpell(); // Casting a spell, behold my power!
wizard.levelUp();  // Level up! The New level is 16

export {};
