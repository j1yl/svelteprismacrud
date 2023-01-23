<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	$: ({ post } = data);
</script>

<div class="max-w-6xl mx-auto justify-center h-max px-2">
	<form action="?/updatePost" method="POST" class="flex flex-col gap-2">
		<h2 class="text-2xl font-bold">Editing {post.title}</h2>
		<label for="title" class="font-semibold">Title</label>
		<input
			type="text"
			id="title"
			name="title"
			class="focus:outline-2 bg-slate-100 rounded-xl p-2 outline-black"
			value={post.title}
		/>
		<label for="content" class="font-semibold">Content</label>
		<textarea
			id="content"
			name="content"
			rows={5}
			class="focus:outline-2 bg-slate-100 rounded-xl p-2 outline-black"
			value={post.content}
		/>
		<button type="submit" class="w-max p-2 bg-green-300 text-black rounded-xl">Edit Article</button>
	</form>
</div>
