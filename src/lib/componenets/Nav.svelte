<script lang="ts">
	import { PUBLIC_SITE_NAME } from '$env/static/public';
	import { AppBar, getToastStore, popup, ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	import type { PopupSettings, ToastSettings } from '@skeletonlabs/skeleton';
	import { currentUser, supabase } from '$lib/supabase';
	import Auth from './Auth.svelte';
	const toastStore = getToastStore();

	const popupAuth: PopupSettings = {
		// Represents the type of event that opens/closed the popup
		event: 'click',
		// Matches the data-popup value on your popup element
		target: 'popupAuth',
		// Defines which side of your trigger the popup will appear
		placement: 'bottom'
	};

	const popupUserMenu: PopupSettings = {
		event: 'click',
		target: 'popupUserMenu',
		placement: 'bottom',
		closeQuery: '#stuckOpen'
	};

	async function handleSignOut() {
		const { error } = await supabase.auth.signOut();
		if (error) {
			console.log('error', error);
		} else {
			const t: ToastSettings = {
				message: 'Signed out.',
				timeout: 2500,
				background: 'variant-filled-success'
			};
			toastStore.trigger(t);
		}
		// window.location.href = '/';
	}
</script>

<AppBar>
	<svelte:fragment slot="lead"
		><a href="/"> <strong class="text-xl uppercase">{PUBLIC_SITE_NAME}</strong></a>
	</svelte:fragment>

	<svelte:fragment slot="trail">
		<a href="/about">
			<button class="btn btn-sm variant-ghost-surface">About</button>
		</a>
		{#if !$currentUser}
			<button class="btn btn-sm variant-ghost-surface" use:popup={popupAuth}> Sign In/Up </button>
			<div data-popup="popupAuth"><Auth /></div>
		{:else}
			<!-- ---------- User Menu ---------- -->
			<button
				class="btn btn-sm variant-ghost-primary [&>*]:pointer-events-none"
				use:popup={popupUserMenu}>Account</button
			>

			<!-- this pops up -->
			<div class="space-y-10 text-center flex flex-col items-center mr-16">
				<div
					class="card mr-auto shadow-xl variant-glass-primary border border-primary-500"
					data-popup="popupUserMenu"
				>
					<div class="btn-group-vertical w-full">
						<div class="bg-surface-800 p-2">{$currentUser.email}</div>

						<a href="/" class="btn">Account settings</a>
						<a href="/" class="btn">Survey Results</a>
						<a href="/" class="btn" on:click={handleSignOut}>Sign out</a>
					</div>
				</div>
			</div>
			<!-- ---------- end of User Menu ---------- -->
		{/if}
	</svelte:fragment>
</AppBar>
