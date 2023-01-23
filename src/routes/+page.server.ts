import type { Actions, PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	return {
		posts: await prisma.post.findMany()
	};
};

export const actions: Actions = {
	createPost: async ({ request }) => {
		const { title, content } = Object.fromEntries(await request.formData()) as {
			title: string;
			content: string;
		};

		if (!title || !content) {
			return fail(500, { message: 'Missing one or more required fields.' });
		}

		try {
			await prisma.post.create({
				data: {
					title,
					content
				}
			});
		} catch (err) {
			console.error(err);
			return fail(500, { message: 'Could not create the post.' });
		}

		return {
			status: 201
		};
	},
	deletePost: async ({ url }) => {
		const id = url.searchParams.get('id');
		if (!id) {
			return fail(400, { message: 'Invalid request.' });
		}
		try {
			await prisma.post.delete({
				where: {
					id: Number(id)
				}
			});
		} catch (err) {
			console.error(err);
			return fail(500, { message: 'Could not delete the post.' });
		}
		return {
			status: 200
		};
	}
};
