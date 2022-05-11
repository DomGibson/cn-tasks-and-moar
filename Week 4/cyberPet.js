class Cat {
    constructor(name) {
        this._name = name;
        this._thirst = 100;
        this._hunger = 100;
        this._purr = false;
        this._health = 100;
    }
    food(_hunger) {
        this._hunger = this._hunger + 10;
        if (this._hunger > 100) {
            console.log(`${_name} Is Full!`);
        } else if (this._hunger > 125) {
            this._health - 25
        }
    }
    water(_thirst) {
        this._thirst = this._thirst + 10;
        if (this._thirst > 100) {
            console.log(`${_name} Is Full!`);
        } else if (this._thirst > 125) {
            this._health - 25
        }
    }
    purr(_name) {
        console.log(`${_name} Is Happy!`);
        this._purr = true;
        if (this._purr = true) {
            setTimeout(() => {
                console.log(`${_name} ...`);
            }, 1000);
        }
    }
}

const Pikachu = new Cat("Pikachu");

console.log(Pikachu);
Pikachu.purr(Pikachu._name);
console.log(Pikachu);
