// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const secret = "secretkey";

  const dummyUser = {
    username: "antalmate",
    firstName: "Mate",
    lastName: "Antal",
    fullName: "Antal Mate",
    password: "12312356",
    email: "antal.mate@debugentity.hu",
  };

  // Ha a hitelesítési adatok érvényesek, létrehozzuk a JWT-t
  const token = jwt.sign(dummyUser, secret, { expiresIn: "7d" });

  // Visszaadjuk a JWT-t a kliensnek
  return res.json({ token });
}
