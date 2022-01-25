import jwt from 'jsonwebtoken';
import { StatusCodes } from 'http-status-codes';

const tokenKey = process.env.TOKEN_KEY;

export const verifyToken = (req, res, next) => {
	if (req?.headers?.authorization && req?.headers?.authorization?.split(' ')?.[0] === 'Bearer') {
		const token = req?.headers?.authorization?.split(' ')?.[1];
		
		try {
			req.user = jwt.verify(token, tokenKey);
			return next();
		} catch(error) {
			res.status(StatusCodes.BAD_REQUEST);
			return res.json({ message: 'Invalid Access Token' });
		}
		
	}

	res.status(StatusCodes.BAD_REQUEST)
	return res.json({ message: 'Access Token is Required' });
}
