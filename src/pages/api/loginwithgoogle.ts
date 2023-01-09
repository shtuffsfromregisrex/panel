import { type NextApiRequest, type NextApiResponse } from "next";
import { sign } from "jsonwebtoken";

const loginWithGoogle = (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method == "POST") {
        const { uid } = req.body;
        if (uid == "Tty9br7k7zY3SOaJbxCdIhKA8Ai2") {
            const token = sign({ uid }, process.env.SECRET_KEY as string, { expiresIn: 60 });
            return res.setHeader("Content-Type", "application/json").status(200).end(JSON.stringify({ message: "Login success" , success : true , token }));
        }
        else {
            return res.setHeader("Content-Type", "application/json").status(401).end(JSON.stringify({ message: "Login failed" , success : false }));
        }

    }
}

export default loginWithGoogle;