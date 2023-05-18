import { getAllUsersDB, getUserByIdDB, createUserDB, deleteUserDB, updateUserDB } from "../repository/user.repository"

async function getAllUsers() {
    return await getAllUsersDB()
}

async function getUserById(_id) {
    return await getUserByIdDB(_id)
}

async function createUser(obj) {
    return await createUserDB(obj)
}

async function deleteUser(_id) {
    return await deleteUserDB(_id)
}

async function updateUser(_id, obj) {
    return await updateUserDB(_id, obj)
}

export { getAllUsers, createUser, getUserById, deleteUser, updateUser }