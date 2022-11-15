
const deadpool = {
    nombre   : 'Wade',
    apellido : 'Winstone',
    poder    : 'Regeneracion',
    getNombre () {
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}

//desestructuracion de un objeto


    //console.log(deadpool.getNombre());

    // const nombre   =  deadpool.nombre; 
    // const apellido =  deadpool.apellido;
    // const poder    =  deadpool.poder;

    function imprimeHeroe ( { nombre, apellido, poder }  ) {
        console.log(nombre, apellido, poder);
    }

    //imprimeHeroe(deadpool);

//desestructuracion de un arreglo

    const heroes = ['Deadpool', 'Superman', 'Batman'];

    // const h1 = heroes[0];
    // const h2 = heroes[1];
    // const h3 = heroes[2];

    const [ h1, h2, h3 ] = heroes; //asi se desestructuran todos
    const [ , , heroe3 ] = heroes; //asi se desestructura solo los de posiciones especificas

    console.log(heroe3);

