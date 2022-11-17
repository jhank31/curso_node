const colors = require( 'colors' );
const argv = require('yargs')
                .options('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .options('l', {
                    alias: 'limite',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .options('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Muestra hasta que numero se va a multiplicar la base'
                })
                .check( ( argv ) => {
                    if( isNaN( argv.b ) ) {
                        throw colors.red('La base debe ser un numero');
                    }
                    return true;
                } )
                .argv;

module.exports = argv