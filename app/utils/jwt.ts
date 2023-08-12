import jwt, { JwtPayload } from "jsonwebtoken";

interface Options {
  expiresIn?: string | number;
}

const DEFAULT_OPTIONS: Options = {
  expiresIn: 60 * 60 * 1000 || "1h",
};

export function fetchJWT(
  jwtPayload: JwtPayload,
  options: Options = DEFAULT_OPTIONS
) {
  const secret = process.env.JWT_SECRET;
  const token = jwt.sign(jwtPayload, secret!, options);
  return token;
}

export function verifyJWT(token: string) {
  try {
    const secret = process.env.JWT_SECRET;
    const decoded = jwt.verify(token, secret!);
    return decoded as JwtPayload;
  } catch (error) {
    console.log(error);
    return null;
  }
}
