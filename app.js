const App = require("./src/server");

async function run(){
    const app = new App();
    await app.initializeApp();
}


run();
