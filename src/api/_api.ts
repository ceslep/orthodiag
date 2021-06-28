import type { Request } from '@sveltejs/kit';
import { urlProcessImages } from 'src/Stores';


export async function api(request, resource: string, data?: {}) {
	// user must have a cookie set
	

	const res = await fetch(`${urlProcessImages}/${resource}`, {
		method: request.method,
		headers: {
			'content-type': 'application/json'
		},
		body: data && JSON.stringify(data),
		mode:"cors",
	});

	

	return {
		status: res.status,
		body: await res.json()
	};
}
