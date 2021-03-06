const { Schema, model } = require('mongoose')

const UserSchema = Schema({
    nombre: { type: String, required: [true, 'El nombre es obligatorio'] },
    email: { type: String, required: [true, 'El correo es obligatorio'], unique: true },
    password: { type: String, required: [true, 'La contraseña es obligatoria'] },
    img: { type: String },
    rol: { type: String, required: true, enum: ['ADMIN_ROLE', 'USER_ROL'] },
    state: { type: Boolean, default: true },
    google: { type: Boolean, default: false }
})

UserSchema.methods.toJson = function () {
    const { __v, password, ...user } = this.toObject();

    return user;
}

module.exports = model('User', UserSchema);