import userModel from '../models/userModel.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import crypto from 'crypto'
import validator from 'validator';
import sendVerifyEmail from '../utils/sendVerifyEmail.js';


export const register = async (req, res) => {
    const { pseudo, email, password, confirmPassword } = req.body
    try {
        let user = await userModel.findOne({ email, pseudo });
        if (user) return res.status(400).json('user already exists');
        user = new userModel({
            pseudo,
            email,
            password: await bcrypt.hash(password, 10),
            emailToken: crypto.randomBytes(64).toString("hex"),
        });
        if (!pseudo || !email || !password) return res.status(400).json({ message: "all fields are required..." });
        if (password !== confirmPassword) return res.status(400).json({ message: "password and confirm password does not match" });
        if (!validator.isEmail(email)) return res.status(400).json({ message: "Must be a valid email..." });
        if (!validator.isStrongPassword(password)) return res.status(400).json({ message: "Must be a strong password..." });
        const body = await user.save();
        sendVerifyEmail(user);
        return res.status(200).json({ body });
    }
    catch (error) { res.status(500).json({ error }) }
};


export const login = async (req, res) => {
    const { email, password } = req.body;
    console.log(email)
    await userModel.findOne({ email })
        .then(user => {
            console.log(user)
            if (!user) {
                return res.status(401).json('user not found !');
            }
            bcrypt.compare(password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json('Wrong password !');
                    }
                    res.status(200).json({
                        userId: user._id,
                        pseudo: user.pseudo,
                        email: user.email,
                        token: jwt.sign(
                            { userId: user._id },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};
export const updateUser = async (req, res) => {
    try {
        const { email, password, confirmPassword } = req.body;

        const user = await userModel.findOneAndUpdate({ email }, {
            password: await bcrypt.hash(password, 10)
        }, { new: true })
        if (!user) return res.status(400).json('Not in our database')
        if (!email || !confirmPassword || !password) return res.status(400).json({ message: "all fields are required..." });
        if (password !== confirmPassword) return res.status(400).json({ message: "password and confirm password does not match" });
        return res.status(200).json({ user })
    } catch (error) {
        res.status(500).json({ error })
    }
};

export const verifyEmail = async (req, res) => {
    const { emailToken } = req.body;
    try {
        if (!emailToken) return res.status(404).json({ message: 'EmailToken not found...' });
        const user = await userModel.findOne({ emailToken });
        if (user) {
            user.emailToken = null;
            user.isVerify = true;
            await user.save();
            res.status(200).json({
                userId: user._id,
                pseudo: user.pseudo,
                email: user.email,
                isVerify: user.isVerify,
            });
        }
        else res.status(404).json({ message: "Email validation error, invalid token!" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error })
    }
}