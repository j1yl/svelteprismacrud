<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ posts } = data);
</script>

<div class="max-w-6xl mx-auto justify-center h-max px-2">
	<form action="?/createPost" method="POST" class="flex flex-col gap-2">
		<h2 class="text-2xl font-bold">Create A New Post</h2>
		<label for="title" class="font-semibold">Title</label>
		<input
			type="text"
			id="title"
			name="title"
			class="focus:outline-2 bg-slate-100 rounded-xl p-2 outline-black"
		/>
		<label for="content" class="font-semibold">Content</label>
		<textarea
			id="content"
			name="content"
			rows={5}
			class="focus:outline-2 bg-slate-100 rounded-xl p-2 outline-black"
		/>
		<button type="submit" class="w-max p-2 bg-green-300 text-black rounded-xl">Add Article</button>
	</form>
</div>
<div class="max-w-6xl mx-auto justify-center h-max mt-16 px-2">
	<div class="flex flex-col gap-2">
		<h2 class="text-2xl font-bold">Posts:</h2>
		{#each posts as post}
			<div class="flex flex-col gap-2 p-6 bg-slate-100">
				<h3 class="font-bold">{post.title}</h3>
				<p>{post.content}</p>
				<div class="flex gap-2">
					<a href="/{post.id}" class="bg-blue-300 p-2 rounded-xl w-max">Edit</a>
					<form action="?/deletePost&id={post.id}" method="POST">
						<button type="submit" class="bg-red-300 p-2 rounded-xl">Delete</button>
					</form>
				</div>
			</div>
		{/each}
	</div>
</div>
