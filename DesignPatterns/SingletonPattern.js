/*
Singleton is a design pattern in which only one instance of a class can exist. If no
instance of the singleton class exists then a new instance is created and returned, but if
an  instance already exists then reference to existing pattern is returned.


A perfect real-life example would be that of mongoose (the famous Node.js ODM library for MongoDB). It utilizes the singleton pattern.
*/


class Database {
    constructor(data) {
        if (Database.exists) {
            return Database.instance;
        }

        this.__data = data;
        Database.instance = this;
        Database.exists = true;
        return true;
    }


    getData() {
        return this.__data;
    }

    setData(data) {
        return this.__data = data;
    }
}

//usage

const mongo = new Database('mongo')
console.log(mongo.getData()); // mongo

const mysql = new Database("mysql");
console.log(mysql.getData()) // mongo