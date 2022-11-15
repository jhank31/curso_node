 

const getUsuarioById = ( id, callback ) => {
    const usuario = {
        id,
        nombre : 'Jhanca'
    }

    setTimeout( () => callback(usuario), 1500);
}

getUsuarioById(12314, ( usuario ) => console.log(usuario));   