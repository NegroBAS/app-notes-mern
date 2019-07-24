const helper = require('../helpers/token.helper');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const pool = require('../database');

class UserController {

    static async signup(req, res) {
        const { fullname, username, email, password } = req.body;
        const usernames = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
        const emails = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
        if (usernames.length > 0) {
            res.status(400).json({ message: 'This username is already in use', status: 400 });
            return;
        }
        if (emails.length > 0) {
            res.status(400).json({ message: 'This email is already in use', status: 400 });
            return;
        }

        /* Encrypt Password */
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const new_user = {
            fullname,
            username,
            email,
            password: hash
        }
        await pool.query('INSERT INTO users SET ?', new_user);
        res.status(201).json({ message: 'New user is created', status: 201 });
    }

    static async signin(req, res) {
        const { email, password } = req.body;
        const rows_email = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
        if (rows_email.length > 0) {
            const user = rows_email[0];
            const valid_password = await bcrypt.compare(password, user.password)
            if (valid_password) {
                const token = await jwt.sign({ email: user.email, id: user.id }, process.env.SECRET_JWT, { expiresIn: '1h' });
                res.status(200).json({ token: token, status: 200 });
            } else {
                res.status(400).json({ message: 'Incorrect password', status: 400 });
            }
        } else {
            res.status(400).json({ message: 'Incorrect email', status: 400 });
        }
    }

    static async delete(req, res) {
        const isValidToken = helper.token(req);
        switch (isValidToken) {
            case true:
                const userID = req.params.id;
                await pool.query('DELETE FROM users WHERE id = ?', [userID]);
                res.status(200).json({ message: 'User deleted' });
                break;
            case false:
                res.status(400).json({ message: 'Invalid Token' });
                break;
            case null:
                res.status(400).json({ message: 'Token is required' });
                break;
        }
    }

    static async get(req, res) {

        const isValidToken = helper.token(req);
        switch (isValidToken) {
            case true:
                const userID = req.params.id;
                const user = await pool.query('SELECT fullname, username, email FROM users WHERE id = ?', [userID]);
                res.status(200).json(user);
                break;
            case false:
                res.status(400).json({ message: 'Invalid Token' });
                break;
            case null:
                res.status(400).json({ message: 'Token is required' });
                break;
        }

    }

    static async getAll(req, res) {
        const admin = req.headers['admin'];
        if (admin === process.env.ADMIN_PASSWORD) {
            const users = await pool.query('SELECT * FROM users');
            res.status(200).json(users);
        } else {
            res.status(401).json({ message: 'Invalid route' });
        }
    }
}

module.exports = UserController;