import 'dotenv/config'
import express from 'express'
import { teste } from './controladores/controladores'
import rotas from './rotas'
import { json } from 'express'

const app = express()

app.use (express.json())

app.use(rotas)

app.listen(process.env.PORT)