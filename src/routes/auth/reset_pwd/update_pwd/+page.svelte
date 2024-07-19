<script lang="ts">
	import { currentUser, supabase } from '$lib/supabase';
	let passwordR: string = ''; // empty this on production

	//
	// Reset user password
	const resetUserPassword= async () => {
        await supabase.auth.updateUser({ password: passwordR })
	};
</script>
 

<div class="container mx-auto flex justify-center items-center mt-10">
	<div class="space-y-10 text-center flex flex-col items-center mr-16">
		<div>
			<p>Forgot that password? Or maybe you just want to change it.</p>
			<p class="mt-5">
				We suggest using a password manager like <a href="https://bitwarden.com/" target="_blank"
					>Bitwarden</a
				> to keep track of them.
			</p>
		</div>
		<div class="flex">
			<div class="card p-4 mr-auto w-72 shadow-xl variant-glass-primary border border-primary-500">
				<div>
					<form>
						<div>
							<label for="emailF-address" class="sr-only">Email address</label>
							<input
								id="passwordR"
								name="passwordR"
								type="password" 
								required
								class="relative w-full rounded border border-primary-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-tertiary-500 focus:outline-none focus:ring-tertiary-500 sm:text-sm"
								placeholder="New password"
								bind:value={passwordR}
							/>
						</div>
						<div class="flex-1 mt-5 w-full items-center">
							<div>
								<button class="btn btn-sm variant-ghost-tertiary" on:click={resetUserPassword}
									>Reset Password</button
								>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
		<p>We'll send you an email just to make sure it's you.</p>
	</div>
</div>
