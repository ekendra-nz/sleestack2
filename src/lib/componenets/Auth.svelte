<script lang="ts">
	import { getToastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';

	const toastStore = getToastStore();

	let email: string = 'ekendra.teach@gmail.com';
	let password: string = 'password';
	let loading: boolean = false;

	function signInUser() {
		console.log('Signing user in.');
		loading = true;
		const t: ToastSettings = {
			message: 'Signed in.',
			timeout: 1500,
			background: 'variant-filled-success'
		};
		toastStore.trigger(t);
	}

	function registerUser() {
		loading = true;

		console.log('Registering User');
		const t: ToastSettings = {
			message: "We've sent an email to ______. <br /> Please confirm your address to continue.",
			autohide: false,
			background: 'variant-filled-success'
		};
		toastStore.trigger(t);
	}
</script>

<div class="space-y-10 text-center flex flex-col items-center mr-16">
	<div class="card p-4 mr-auto w-72 shadow-xl variant-glass-primary border border-primary-500">
		<div>
			<form>
				<div>
					<label for="email-address" class="sr-only">Email address</label>

					<input
						id="email-address"
						name="email"
						type="email"
						autocomplete="email"
						required
						class="relative block w-full appearance-none rounded-none rounded-t-md border border-primary-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-tertiary-500 focus:outline-none focus:ring-tertiary-500 sm:text-sm"
						placeholder="Email address"
						bind:value={email}
					/>
				</div>

				<div>
					<label for="password" class="sr-only">Password</label>
					<input
						id="password"
						name="password"
						type="password"
						autocomplete="current-password"
						required
						class="relative block w-full appearance-none rounded-none rounded-b-md border border-tertiary-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-tertiary-500 focus:outline-none focus:ring-tertiary-500 sm:text-sm"
						placeholder="Password"
						bind:value={password}
					/>
				</div>
				<div class="flex flex-col items-end">
					<a href="/auth/forgot" class="text-xs text-tertiary-400 hover:text-secondary-300"
						>Forgot your password?</a
					>
				</div>
				<div class="mt-5 flex w-full items-center mx-5">
					<div class="flex">
						<button class="btn btn-sm variant-ghost-tertiary" on:click={registerUser}
							>Register</button
						>
					</div>
					<div class="flex mx-2">or</div>
					<div class="flex mr-2">
						<button class="btn btn-sm variant-filled-tertiary" on:click={signInUser}>Sign In</button
						>
					</div>
					<div class="flex mr-2">
						{#if !loading}
							<!-- Heroicon name: mini/lock-closed -->
							<svg
								class="h-5 w-5 text-tertiary-500 group-hover:text-indigo-400"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
									clip-rule="evenodd"
								/>
							</svg>
						{:else}
							<!-- Heroicon name: arrow-path -->
							<svg
								class="h-5 w-5 text-tertiary-500 group-hover:text-indigo-400 animate-spin"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
								/>
							</svg>
						{/if}
					</div>
				</div>
			</form>
		</div>
	</div>
</div>
