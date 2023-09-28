'use strict';

const mongoose = require("mongoose");
const os = require('os');
const process = require('process');
const _SECOND = 5000;

// count connect
const countConnect = () => {
    const numConnection = mongoose.connections.length;
    console.log(`Number of connections::${numConnection}`);
};

// check overload
const checkOverLoad = () => {
    setInterval(() => {
        const numConnection = mongoose.connections.length;
        const numCores = os.cpus().length; // có bao nhiêu core
        const memoryUsage = process.memoryUsage().rss; // sử dụng bao nhiêu memmory

        console.log(`Active connection: ${numConnection}`);
        console.log(`Memmory usage: ${memoryUsage / 1024 / 1024} MB`);

        const maxConnections = numCores * 5; // 5 kết nối
        if (numConnection > maxConnections) {
            console.log(`Connection overload detected`);
            // notify.send(...)
        }
    }, _SECOND); // Monitor every 5 seconds
};

module.exports = { countConnect, checkOverLoad };