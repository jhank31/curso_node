require('colors'); 

const { inquirerMenu, pausa } = require('./helpers/inquirer');



const main = async () => {
    console.clear();

    let opt = '';
    do {
       opt = await inquirerMenu();
    //    console.log({opt});

       await pausa();


    } while ( opt !== '0');


}

main();