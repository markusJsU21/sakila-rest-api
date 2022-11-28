import express from 'express';
import { getActorById, getActors, insertActor, updateActor, deleteActor } from '../db/actor';
import { param, body, validationResult } from 'express-validator';

const router = express.Router();

export type Actor = {
    actor_id?: number,
    first_name: string,
    last_name: string,
    last_update?: Date
}

router.get('/', async (req, res) => {
    const actors: Actor[][] = await getActors();
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

        const actor = await getActorById(req.params?.actorId)
        if (!actor) {
            res.status(404).send();
        } else {
            res.json(actor);
        }
    })

router.post(
    '/',
    body('first_name').isString(),
    body('last_name').isString(),
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const actor = req.body;
        const createdActor = await insertActor(actor);

        if (!createdActor) {
            res.status(500).send();
        } else {
            res.json(createdActor);
        }
    }
)

router.put(
    '/:actorId',
    param('actorId').isInt(),
    body('first_name').isString(),
    body('last_name').isString(),
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const actor = req.body;
        const updatedActor = await updateActor(req.params?.actorId, actor);

        if (!updatedActor) {
            res.status(500).send();
        } else {
            res.json(updatedActor);
        }
    }
)

router.delete(
    '/:actorId',
    param('actorId').isInt(),
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const actor = getActorById(req.params?.actorId);

        if (!actor) {
            res.status(404).send();
        } else {
            deleteActor(req.params?.actorId);
            res.status(202).send();
        }
    }
)


export default router;