const pool = require('../database');
const helper = require('../helpers/token.helper');

class NoteController {

    static async create(req, res) {
        const isValidToken = helper.token(req);
        if (isValidToken) {
            const note = {
                user_id: isValidToken.id,
                title: req.body.title,
                description: req.body.description
            };
            await pool.query('INSERT INTO notes SET ?', [note]);
            res.status(201).json({ message: 'New note created', status: 201 });
        } else {
            if (isValidToken == null) {
                res.status(400).json({ message: 'Token is required', status: 400 });
            } else {
                res.status(401).json({ message: 'Invalid Token', status: 401 });
            }
        }
    }

    static async getAll(req, res) {

        const isValidToken = helper.token(req);
        if (isValidToken) {
            const notes = await pool.query('SELECT * FROM notes WHERE user_id = ?', [isValidToken.id]);
            res.status(200).json(notes);
        } else {
            if (isValidToken == null) {
                res.status(400).json({ message: 'Token is required', status: 400 });
            } else {
                res.status(401).json({ message: 'Invalid Token', status: 401 });
            }
        }
    }

    static async getOne(req, res) {
        const isValidToken = helper.token(req);
        if (isValidToken) {
            const noteID = req.params.id;
            const note = await pool.query('SELECT * FROM notes WHERE id = ? AND user_id = ?', [noteID, isValidToken.id]);
            res.status(200).json(note);
        } else {
            if (isValidToken == null) {
                res.status(400).json({ message: 'Token is required', status: 400 });
            } else {
                res.status(401).json({ message: 'Invalid Token', status: 401 });
            }
        }
    }

    static async delete(req, res) {
        const isValidToken = helper.token(req);
        if (isValidToken) {
            const noteID = req.params.id;
            await pool.query('DELETE FROM notes WHERE id = ? AND user_id = ?', [noteID, isValidToken.id]);
            res.status(200).json({ message: 'Note deleted', status:200 });
        } else {
            if (isValidToken == null) {
                res.status(400).json({ message: 'Token is required', status: 400 });
            } else {
                res.status(401).json({ message: 'Invalid Token', status: 401 });
            }
        }
    }

    static async update(req, res) {
        const isValidToken = helper.token(req);
        if (isValidToken) {
            const noteID = req.params.id;
            const note = {
                title: req.body.title,
                description: req.body.description
            };
            await pool.query('UPDATE notes SET ? WHERE id = ?', [note, noteID]);
            res.status(200).json({ message: 'Note Updated', status: 200 });
        } else {
            if (isValidToken == null) {
                res.status(400).json({ message: 'Token is required', status: 400 });
            } else {
                res.status(401).json({ message: 'Invalid Token', status: 401 });
            }
        }
    }
}

module.exports = NoteController;