require ( 'colors' );

const mostrarMenu = () => {
    return new Promise( resolve => {
        console.clear();
        console.log('=========================='.cyan);
        console.log('  Seleccione una opcion  '.green);
        console.log('==========================\n'.cyan);

        console.log(`${'1.'.cyan} Crear tareas`);
        console.log(`${'2.'.cyan} Listar tareas`);
        console.log(`${'3.'.cyan} Listar tareas completadas`);
        console.log(`${'4.'.cyan} Listar tareas pendientes`);
        console.log(`${'5.'.cyan} Completar tarea(s)`);
        console.log(`${'6.'.cyan} Borrar tarea`);
        console.log(`${'0.'.cyan} Salir\n`);
        
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLine.question('Seleccione una opcion: ', (resp) => {
            readLine.close();
            resolve(resp);
        });
    } ) 

}

const pausa = () => {
    return new Promise( resolve =>  {
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readLine.question(`\nPresione ${'ENTER'.cyan} para  continuar\n`, (resp) => {
            readLine.close();
            resolve(resp);
        })
    });


}

module.exports = {
    mostrarMenu,
    pausa
}