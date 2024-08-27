// probelma que resolve: permite apenas uma instancia da classe em todo código
// configs
// conexão com banco de dados

class DatabaseConnection {
  constructor() {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = this
      this.connection = this.createConnection()
    }
    return DatabaseConnection.instance
  }

  createConnection() {
    //simular conexao com bd
    console.log('Conectado ao banco com sucesso!')
    return { 
      connected: true, 
      connectionId: Math.random().toString(36).substr(2, 9)
    }
  }

  getConnection() {
    return  this.connection
  }
}

module.exports = new DatabaseConnection()