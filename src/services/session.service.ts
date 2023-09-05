import "express-async-errors";
import { compareSync } from "bcryptjs";
import { User } from "../entities/user.entity";
import { userRepository } from "../repositories";
import { sign } from "jsonwebtoken";
import { AppError } from "../error/AppError";

const session = async (userPayload: User) => {
    
    const user = await userRepository.findOne({
        where: {
            email: userPayload.email
        }
    })

    if(!user) {
        throw new AppError("Email ou senha incorreto", 401)
    }

    const valitedPassword = compareSync(userPayload.password, user.password)

    if(!valitedPassword) {
        throw new AppError("Email ou senha incorreto", 401)
    }

    const tokenUser: string = sign({ email: user.email }, "chavedeseguranca"!, { subject: user.id.toString(), expiresIn: "24hr" })

    return {token: tokenUser, user: user }
}

export default { session }