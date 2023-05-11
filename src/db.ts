import mongoose from "mongoose";
import { UserSchema, TaskSchema } from "./schemas";

mongoose.connect('mongodb://localhost:27017');

const Collections = {
    User: mongoose.model('User', UserSchema),
    Task: mongoose.model('Task', TaskSchema)
}
const ObjectId = mongoose.Types.ObjectId;

export { Collections, ObjectId }