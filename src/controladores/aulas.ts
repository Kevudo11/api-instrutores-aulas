import { Request, Response, request} from 'express'
import bancodedados from '../bancodedados'

export function cadastrarAula(req: Request, res: Response) { 
    const { id } = req.params
    const { nome } = req.body

    const instrutor = bancodedados.instrutores.find((item) => {
        return item.id === Number(id)
    })

    if (!instrutor) {
        return res.status(404).json({
            mensagem: 'Instrutor(a) não encontrado(a)'
        })
    }

    const novaAula = {
        id: bancodedados.proximoIdentificadorAula++,
        nome
    }

    if (instrutor.aulas) {
        instrutor.aulas.push(novaAula)
        return res.status(201).json(novaAula)
    }

    instrutor.aulas = [novaAula]
}