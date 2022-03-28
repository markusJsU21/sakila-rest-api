import { query } from './db.js';

export const getActors = async () => {
    const response = await query('SELECT * FROM actor LIMIT 100');
    return response.rows;
}

export const getActorById = async (actorId) => {
    const response = await query('SELECT * FROM actor WHERE actor_id = $1', [ actorId ]);
    return response.rows.length ? response.rows[0] : null;
}