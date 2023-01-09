import { type NextApiRequest, type NextApiResponse, type NextApiHandler } from "next";

import process from "process";
import { verify } from 'jsonwebtoken'
const SECRET_KEY = process.env.SECRET_KEY
const validatetoken: NextApiHandler = (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method == "POST") {
        const { token } : { token : string} = req.body;
        const realToken : string =token.split("=")[1] as string
        
        verify(realToken,SECRET_KEY as string, (err : any) => {
            if(err){
                return res.setHeader("Content-Type", "application/json").status(401).end(JSON.stringify({ message: "Token  not valid" , isvalid : false }));
            }
            else
            {
                return res.setHeader("Content-Type", "application/json").status(200).end(JSON.stringify({ message: "Token  valid" , isvalid : true }))
            }
        })
    }
}

export default validatetoken;