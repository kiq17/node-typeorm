import { AppDataSource } from "../config/data-source";


class Connection {
    constructor() {
        AppDataSource.initialize()
            .then(() => console.log("Banco conectado"))
            .catch(e => console.log(e));
    }
}

export default new Connection();