<script lang="ts">
	import { PUBLIC_SITE_NAME } from '$env/static/public';
	import Icon from '$lib/componenets/Icon.svelte';
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<h2 class="h2">Welcome to the {PUBLIC_SITE_NAME}.</h2>
		<!-- Animated Logo -->
		<figure>
			<section class="img-bg" />
			<Icon />
		</figure>
		<!-- / -->
		<div class="flex justify-center space-x-2">
			Built off of Sveltekit, Supabase and Skeleton UI.
		</div>
		<div class="space-y-2">
			<p>Try editing the following:</p>
			<p><code class="code">/src/routes/+layout.svelte</code></p>
			<p><code class="code">/src/routes/+page.svelte</code></p>
		</div>
	</div>
</div>
