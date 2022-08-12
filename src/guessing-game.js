class GuessingGame {
    constructor() {
        this.min = null
        this.max = null
        this.root = null
    }

    setRange(min, max) {
        this.min = min
        this.max = max
    }

    guess() {
        this.root = Math.ceil((this.max - this.min) / 2 + this.min);
        return this.root
    }

    lower() {
        this.max = this.root
    }

    greater() {
        this.min = this.root
    }
}

module.exports = GuessingGame;
