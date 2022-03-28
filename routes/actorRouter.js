import express from 'express';
import { getActorById, getActors } from '../db/actor.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const actors = await getActors();
    res.json(actors);
})

router.get('/:actorId', async (req, res) => {
    if (!req.params.actorId) {
        throw '404';
    }

    try {
        const actorId = parseInt(req.params.actorId);
        console.log(actorId);
    } catch {
        throw '500';
    }

    const actor = await getActorById(req.params.actorId)
    if (!actor) {
        throw '404';
    } else {
        res.json(actor);
    }
})

export default router;