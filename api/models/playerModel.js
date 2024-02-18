import mongoose from "mongoose";
//mongoose-unique-validator améliore les messages d'erreur lors de l'enregistrement de données uniques
import uniqueValidator from 'mongoose-unique-validator'

const playerSchema = mongoose.Schema({
    pseudo: { type: String, required: true, unique: true, minLength: 3, maxLength: 10 },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isVerify: { type: Boolean, required: true, default: false },
    emailToken: { type: String },
}, { timeStamps: true });
playerSchema.plugin(uniqueValidator);

export default mongoose.model("player", playerSchema);