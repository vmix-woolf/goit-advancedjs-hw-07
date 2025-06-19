class Key {
    private readonly signature: number;

    constructor() {
        this.signature = Math.random();
    }

    getSignature(): number {
        return this.signature;
    }
}

class Person {
    constructor(private key: Key) {}

    getKey(): Key {
        return this.key;
    }
}

abstract class House {
    protected door: boolean = false;
    protected tenants: Person[] = [];

    constructor(protected key: Key) {}

    comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person);
            console.log('Person has entered the house');
        } else {
            console.log('Door is closed, cannot enter');
        }
    }

    abstract openDoor(key: Key): void;
}

class MyHouse extends House {
    openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
            console.log('Door is opened successfully');
        } else {
            console.log('Wrong key and unfortunately door remains closed');
        }
    }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);

export {};
