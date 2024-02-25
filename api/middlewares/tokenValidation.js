import jwt from 'jsonwebtoken'

//-------------------------------
//Middleware d'authentification pour la verifcation du token envoyé par le frontend
export const tokenValidation = (req, res) => {
    try {
        const token = req.headers.authorization.split('Bearer')[1].trim();
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        return decodedToken;

    } catch {
        res.status(401).json({
            error: new Error('Invalid request!')
        });
    }
};