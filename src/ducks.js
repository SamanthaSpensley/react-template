class Duck {
  constructor(name) {
    this.name = name;
  }
  quack() {
    return `"quack quack, I am ${this.name}"`;
  }
}

module.exports = Duck;
