'use strict';
const mongoose = require('mongoose');
const { countConnect } = require('../helpers/check.connect');
const { db: { host, name, port } } = require('../configs/config.mongodb');
const connectString = `mongodb://${host}:${port}/${name}`;

class Database {
    constructor() {
        this.connect();
    }

    connect(type = 'mongodb') {
        if (1 === 1) {
            mongoose.set('debug', true);
            mongoose.set('debug', { color: true });
        }

        try {
            mongoose.connect(connectString, { maxPoolSize: 100 });
            countConnect();
            console.log('Connected to MongoDB successfully!');
        } catch (error) {
            console.log('Error connecting to MongoDB:', error);
            process.exit(1);
        }
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
}

const instanceMongodb = Database.getInstance();
module.exports = instanceMongodb;