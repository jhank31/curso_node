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

const id = 3;

const getEmpleado = ( id, callback ) => {

    const empleado = empleados.find( empleado =>  empleado.id === id )?.nombre;
    
    if( empleado ) {
        callback( null, empleado ) ;
    } else {
        callback(`El empleado con id ${id} no existe`) ;
    }

}

getSalarioById = ( id, callback ) => {

    const salario = salarios.find(sal => sal.id === id)?.salario;

    if ( salario ) {
        callback( null, salario );
    } else {
        callback(`El empleado con el id ${id} no tiene salario asignado`);
    }
}


getEmpleado(id, ( err, empleado ) => {
    if( err ) {
        
        return console.log(err)
    }

    getSalarioById( id, ( err, salario ) => {
        if ( err ) {
            return console.log(err);
        }
    
        console.log( `El empleado ${empleado} tiene un salario de ${salario}` );
    
    } )

});







