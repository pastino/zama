import jwt from "jsonwebtoken";

export const generateToken = (id: number) =>
  jwt.sign({ id }, process.env.SECRET as string);
