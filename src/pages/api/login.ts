import {type NextApiRequest, type NextApiResponse } from "next";
import { sign } from 'jsonwebtoken' ;
const login = (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method == "POST") {
        const { password } = req.body;
        if (password === process.env.PASSWORD as string) {
            const token = sign({ password }, process.env.SECRET_KEY as string, { expiresIn: "7d" });
            return res.setHeader("Content-Type", "application/json").status(200).end(JSON.stringify({ message: "Login success" , success : true , token }));
        }
        else {
            return res.setHeader("Content-Type", "application/json").status(401).end(JSON.stringify({ message: "Login failed" }));
        }
    }               
}

export default login;