import bcrypt from 'bcrypt'

export const createHashPassword = async (password) => 
await bcrypt.hash(password, 8 );

export const checkPassword = (user, password) =>
bcrypt.compare(password, user.password)