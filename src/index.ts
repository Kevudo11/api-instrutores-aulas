import 'dotenv/config'
import express from 'express'
import { teste } from './controladores/controladores'

const app = express()

app.get('/', teste)

app.listen(process.env.PORT)