import "reflect-metadata";
/*
import {createConnection} from "typeorm";
import {User} from "./entity/User";

createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
*/

// 5. typeORM으로 mysql 테이블 만들어보기
import {Entity, PrimaryGeneratedColumn, Column, createConnection, Connection} from "typeorm";
@Entity()
class Example {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    text: string;
}


const connection: Promise<Connection> = createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "test",
    entities: [Example],
    synchronize: true,
});

connection.then((conn) => {
    const repository = conn.getRepository(Example);
    const example = new Example();
    example.text = "Hello World";
    repository.save(example).then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.error(err);
    });

    repository.find().then((result) => {
        console.log(result);
    }).catch((err) => {
        console.error(err);
    });
});