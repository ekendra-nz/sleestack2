<script lang="ts">
	import '../app.postcss';
	import Nav from '$lib/componenets/Nav.svelte';

	// Toasts
	import { AppShell, initializeStores, Toast, getToastStore } from '@skeletonlabs/skeleton';
	initializeStores();
	const toastStore = getToastStore();

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<!-- Toasts -->
<!-- use position="b" for bottom "t" for top -->
<Toast position="t" />
<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<Nav />
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
