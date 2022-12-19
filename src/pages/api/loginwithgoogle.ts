import {type NextApiRequest, type NextApiResponse } from "next";

const loginWithGoogle = (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method == "POST") {
        const { uid } = req.body;
        if (uid == "Tty9br7k7zY3SOaJbxCdIhKA8Ai2") {
            return res.setHeader("Content-Type", "application/json").status(200).end(JSON.stringify({ message: "Login success" }));
        }
        else {
            return res.setHeader("Content-Type", "application/json").status(401).end(JSON.stringify({ message: "Login failed" }));
        }

    }
}

export default loginWithGoogle;