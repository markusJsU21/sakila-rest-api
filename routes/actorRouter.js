import express from 'express';
import { getActorById, getActors, insertActor } from '../db/actor.js';
import { param, body, validationResult } from 'express-validator';

const router = express.Router();

router.get('/', async (req, res) => {
    const actors = await getActors();
    res.json(actors);
})

router.get(
    '/:actorId',
    param('actorId').isInt(),
    async (req, res) => {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const actor = await getActorById(req.params.actorId)
        if (!actor) {
            res.status(404).send();
        } else {
            res.json(actor);
        }
    })

router.post(
    '/actor',
    body('firstname').isString(),
    body('lastname').isString(),
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const actor = req.body;
        const createdActor = await insertActor(actor);
        
        
        if (!actor) {
            res.status(404).send();
        } else {
            res.json(actor);
        }
    }
)

export default router;