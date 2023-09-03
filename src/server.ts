import { app } from "./app";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
.then(() => {
    console.log("Database connect")
    app.listen(3000, () => console.log("Server runing"))
})
.catch((err) => console.log(`${err}`))
