"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Users = require('../users.json');
exports.default = {
    //listar
    async listar(request, response) {
        const usuario = Users;
        if (usuario) {
            return response.status(200).json(usuario);
        }
        return response.status(400).json({ message: 'nenhum usuário foi encontrado!' });
    },
    async buscarId(request, response) {
        const { id } = request.params;
        const usuario = Users.find((usuario) => usuario.id === parseInt(id));
        /*{
            if(userAtual.id == id){
                return userAtual;
            }
        })
        if(usuario){
            return response.status(200).json(usuario);
        }
        return response.status(400).json({ message: 'usuario nao encontrado, confira o "iD" inserido' });
        */
    },
    async buscarIdade(request, response) {
        const { idade } = request.body;
        const usuario = Users.filter(userAtual => {
            if (userAtual.idade == idade) {
                return userAtual;
            }
        });
        if (usuario) {
            return response.status(200).json(usuario);
        }
        return response.status(400).json({ message: 'usuario não encontrado, confira a idade inserida!' });
    },
    async buscarSexo(request, response) {
        const { sexo } = request.body;
        const usuario = Users.filter(userAtual => {
            if (userAtual.sexo == sexo) {
                return userAtual;
            }
        });
        if (usuario) {
            return response.status(200).json(usuario);
        }
        return response.status(400).json({ message: 'usuario não encontrado, confira o sexo inserido!' });
    },
};
