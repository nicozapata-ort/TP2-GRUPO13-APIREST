function crearDaoUsuarioCache() {

    const usuarios = [
        {
            id: 1,
            nombre: 'lee',
            usuarioEmail: 'lee@gmail.com'
        }
    ]

    return {
        getByUsuarioId: async (id) => {
            return await usuarios.find(e => e.id === Number(id))
        },

    }
}

export { crearDaoUsuarioCache }