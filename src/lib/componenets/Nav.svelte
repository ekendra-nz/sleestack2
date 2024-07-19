<script lang="ts">
	import { PUBLIC_SITE_NAME } from '$env/static/public';
	import { AppBar, popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';

	import Auth from './Auth.svelte';

	const popupAuth: PopupSettings = {
		// Represents the type of event that opens/closed the popup
		event: 'click',
		// Matches the data-popup value on your popup element
		target: 'popupAuth',
		// Defines which side of your trigger the popup will appear
		placement: 'bottom'
	};
</script>

<!-- App Bar -->
<AppBar>
	<svelte:fragment slot="lead"
		><a href="/"> <strong class="text-xl uppercase">{PUBLIC_SITE_NAME}</strong></a>
	</svelte:fragment>
	<svelte:fragment></svelte:fragment>

	<svelte:fragment slot="trail">
		<a href="/auth">auth</a>
		<a href="/about">
			<button class="btn btn-sm variant-ghost-surface">About</button>
		</a><button class="btn btn-sm variant-ghost-surface" use:popup={popupAuth}>
			Sign In / Register
		</button>
		<div data-popup="popupAuth"><Auth /></div>
	</svelte:fragment>
</AppBar>
