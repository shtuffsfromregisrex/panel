import {type NextApiRequest, type NextApiResponse } from "next";

const login = (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method == "POST") {
        const { password } = req.body;
        if (password == "mianderson") {
            return res.setHeader("Content-Type", "application/json").status(200).end(JSON.stringify({ message: "Login success" }));
        }
        else {
            return res.setHeader("Content-Type", "application/json").status(401).end(JSON.stringify({ message: "Login failed" }));
        }

    }

}

export default login;