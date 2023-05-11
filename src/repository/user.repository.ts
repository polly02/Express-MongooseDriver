import { Collections, ObjectId } from "../db";

async function getAllUsersDB() {
    return await Collections.User.find({})
}

async function getUserByIdDB(_id) {
    return await Collections.User.find({_id: new ObjectId(_id)})
}

async function createUserDB(obj) {
    await Collections.User.collection.insertOne(obj)
    return 'succes'
}

async function deleteUserDB(_id) {
    return await Collections.User.deleteOne({_id: new ObjectId(_id)})
}

async function updateUserDB(_id, obj) {
    await Collections.User.updateOne({_id: new ObjectId(_id)}, obj)
    return 'succes'
}

export {getAllUsersDB, getUserByIdDB, createUserDB, deleteUserDB, updateUserDB}