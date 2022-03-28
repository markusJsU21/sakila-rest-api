import { query } from './db.js';

export const getActors = async () => {
    const response = await query('SELECT * FROM actor LIMIT 100');
    return response.rows;
}

export const getActorById = async (actorId) => {
    const response = await query('SELECT * FROM actor WHERE actor_id = $1', [ actorId ]);
    return response.rows.length ? response.rows[0] : null;
}

export const insertActor = async (actor) => {
    const createdActor = await query('INSERT INTO actor(first_name, last_name, last_updated) VALUES($1, $2, current_timestamp) RETURNING *', [ actor.firstname, actor.lastname ]);
    console.log(createdActor);
    return createdActor;
}