import { Request, Response } from 'express';
const Users = require('../users.json');

export default {
        //listar
        async listar(request: Request, response: Response) {
            const usuario = Users;
            if(usuario){
                return response.status(200).json(usuario);
            }
            return response.status(400).json({ message: 'nenhum usuário foi encontrado!' });
        },

        async buscarId(request : Request, response : Response){
            const {id} = request.params;
            const usuario = Users.filter(userAtual=>{
                if(userAtual.id == id){
                    return userAtual;
                }
            })
            if(usuario){
                return response.status(200).json(usuario);
            }
            return response.status(400).json({ message: 'usuario nao encontrado, confira o "iD" inserido' });
        },

        async buscarIdade(request : Request, response : Response){
            const {idade} = request.body;
            const usuario = Users.filter(userAtual=>{
                if(userAtual.idade == idade){
                    return userAtual;
                }
            })
            if(usuario){
                return response.status(200).json(usuario);
            }
            return response.status(400).json({message : 'usuario não encontrado, confira a idade inserida!'})
        },

        async buscarSexo(request : Request, response : Response){
            const {sexo} = request.body;
            const usuario = Users.filter(userAtual=>{
                if(userAtual.sexo == sexo){
                    return userAtual;
                }
            })
            if(usuario){
                return response.status(200).json(usuario);
            }
            return response.status(400).json({message: 'usuario não encontrado, confira o sexo inserido!'})
        },        
}