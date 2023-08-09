import bcrypt from 'bcrypt'

export const createHashPassword = async (password) => {
    const encodedPassword = await bcrypt.hash(password, 8 )
    console.log(encodedPassword);
    return encodedPassword
}