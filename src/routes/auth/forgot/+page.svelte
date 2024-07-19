<script lang="ts">
	function sendPwdForgotEmail() {}
</script>

<div class="container mx-auto flex justify-center items-center mt-10">
	<div class="space-y-10 text-center flex flex-col items-center mr-16">
		<div>
			<p>Forgot that password? It happens to the best of us.</p>
			<p>We'll send you an email just to make sure it's you.</p>
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
								id="emailF-address"
								name="email"
								type="email"
								autocomplete="email"
								required
								class="relative w-full rounded border border-primary-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-tertiary-500 focus:outline-none focus:ring-tertiary-500 sm:text-sm"
								placeholder="Email address"
							/>
						</div>
						<div class="flex-1 mt-5 w-full items-center">
							<div>
								<button class="btn btn-sm variant-ghost-tertiary" on:click={sendPwdForgotEmail}
									>Send Email</button
								>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
