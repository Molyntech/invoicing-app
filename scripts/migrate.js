const path = require('path');
const Umzug = require('umzug');

let umzug = new Umzug({
    logging: function () {
        console.log.apply(null, arguments);
    },
    migrations: {
        path: "./database/migrations",
        patterns: /\.js$/
    },
    upName: "up",
    downName: "down"
});

function logUmzugEvent(eventName) {
    return function (name, migration) {
        console.log(`${name} ${eventName}`);
    };
}

umzug.on("migrating", logUmzugEvent("migrating"));
umzug.on("migrating", logUmzugEvent("migrated"));
umzug.on("reverting", logUmzugEvent("reverting"));
umzug.on("reverted", logUmzugEvent("reverted"));

//this would run migrations
umzug.up().then(console.log("all migrations done"));