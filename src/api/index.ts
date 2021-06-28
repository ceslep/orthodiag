import { api } from './_api';
import type { RequestHandler } from '@sveltejs/kit';


// GET 
export const get: RequestHandler = async (request) => {
	// request.locals.userid comes from src/hooks.js
	const response = await api(request, `pacientes.php`);

	if (response.status === 404) {
		// user hasn't created a todo list.
		// start with an empty array
		return { body: [] };
	}

	return response;
};

// POST 
export const post: RequestHandler= async (request) => {
	const response = await api(request, `todos/${request.locals.userid}`, {
		
	
	});

	return response;
};
