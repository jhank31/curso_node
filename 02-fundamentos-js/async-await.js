const empleados = [
    {
        id : 1,
        nombre : 'Jhanca'
    },
    {
        id : 2,
        nombre : 'juanes'
    },
    {
        id : 3, 
        nombre : 'Jenny'
    }
]

const salarios = [
    {
        id : 1,
        salario : 1000
    },
    {
        id : 2,
        salario : 2000
    }
]

const id = 4;

const getEmpleado = ( id ) => {

    return new Promise( ( resolve, reject ) => {
        const empleado = empleados.find( empleado =>  empleado.id === id )?.nombre;

        ( empleado )  
        ? resolve( empleado ) 
        : reject( `No existe empleado con el id ${id}` );
    });
}

const getSalario = ( id ) => {

    return new Promise ( ( resolve, reject ) => {
        const salario = salarios.find( salario => salario.id === id)?.salario;

        ( salario ) 
            ? resolve( salario )
            : reject( `El usuario con el id ${id} no tiene salario` );
    });
}

const getInfousuario = async ( id ) => {
    try {
        const empleado = await getEmpleado( id );
        const salario = await getSalario( id );
        return `El salario del empleado ${empleado} es ${salario}`;

    } catch ( err ) {
        throw err;
    }
}

getInfousuario( id )
    .then ( msg => console.log( msg ))
    .catch ( err => console.log( err ) )