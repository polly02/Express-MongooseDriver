import express, { Request, Response } from 'express'
const route = express.Router()
import { getAllUsers, getUserById, createUser, deleteUser, updateUser } from '../service/user.service'

route.get('/', async function (req: Request, res: Response) {
    try {
        res.status(200).send(await getAllUsers())
    } catch (error: any) {
        res.status(404).send(error.message)
    }
})

route.get('/:_id', async function (req: Request, res: Response) {
    try {
        const { _id } = req.params
        res.status(200).send(await getUserById(_id))
    } catch (error: any) {
        res.status(404).send(error.message)
    }
})

route.post('/', async function (req: Request, res: Response) {
    try {
        const obj = req.body
        res.status(200).send(await createUser(obj))
    } catch (error: any) {
        res.status(404).send(error.message)
    }
})

route.delete('/:_id', async function (req: Request, res: Response) {
    try {
        const { _id } = req.params
        res.status(200).send(await deleteUser(_id))
    } catch (error: any) {
        res.status(404).send(error.message)
    }
})

route.put('/:_id', async function (req: Request, res: Response) {
    try {
        const { _id } = req.params
        const obj = req.body
        res.status(200).send(await updateUser(_id, obj))
    } catch (error: any) {
        res.status(404).send(error.message)
    }
})

export default route