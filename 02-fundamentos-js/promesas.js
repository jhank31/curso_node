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

const id = 5;

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

// getEmpleado ( id ) 
//     .then( empleado => console.log( empleado ))
//     .catch( err => console.log( err ));

// getSalario ( id ) 
//     .then( salario => console.log( salario ))
//     .catch( err => console.log( err ));

let nombre;



getEmpleado ( id )
    .then ( empleado =>  {
        nombre = empleado;
        return getSalario( id )
    })
    .then ( salario =>  console.log( `El empleado ${nombre} tiene un salario de ${salario}`))
    .catch( err => console.log( err ))
    
