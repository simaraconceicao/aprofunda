// Dentro do meu código eu quero ter a possibilidade de criar novas pessoas usuárias, a partir de uma forma/classe
class User {
  constructor(name, age, role) {
    this.name = name,
    this.age = age,
    this.role = role
  }

  codar() {
    return `${this.name} sabe codar`
  }

  treinar() {
    return `${this.name} sabe treinar`
  }

  cantar() {
    return `${this.name} sabe cantar`    
  }

  viajar(){
    return `${this.name} sabe viajar`
  }
}


//criar pessoas

const pessoa1 = new User('Jaque', 28, 'desenvolvedora')
console.log(pessoa1)
const pessoa2 = new User('Fabiana', 20, 'desenvolvedora')
console.log(pessoa2.codar())
const pessoa3 = new User('Simara', 20, 'desenvolvedora')
console.log(pessoa3.codar())