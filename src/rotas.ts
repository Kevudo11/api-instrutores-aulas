import { Router } from 'express'
import { atualizar, cadastrar, detalhar, listar } from './controladores/instrutores'


const rotas = Router()

//Listar todos os instrutores
rotas.get('/instrutores', listar)

// detalhar as informações de um instrutor 
rotas.get('/instrutores/:id', detalhar)

// cadastra um instrutor
rotas.post('/instrutores', cadastrar)

//editar um instrutor
rotas.put('/instrutores/:id', atualizar)

//exluir um instrutor

//cadastrar uma aula para um instrutor
//excluir uma aula para um instrutor

export default rotas 