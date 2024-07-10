import { Router } from 'express'
import { detalhar, listar } from './controladores/instrutores'


const rotas = Router()

//Listar todos os instrutores
rotas.get('/instrutores', listar)

// detalhar as informações de um instrutor 

rotas.get('/instrutores/:id', detalhar)
// cadastra instrutos
//editar um instrutor
//exluir um instrutor

//cadastrar uma aula para um instrutor
//excluir uma aula para um instrutor

export default rotas 