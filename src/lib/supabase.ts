import { createClient } from '@supabase/supabase-js';
import { writable } from 'svelte/store';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';

export const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);

export const currentUser = writable((await supabase.auth.getUser()).data.user);

supabase.auth.onAuthStateChange(async (event) => {
	console.log('Supabase auth event is called: ' + event);

	if (event === 'SIGNED_IN') {
		currentUser.set((await supabase.auth.getUser()).data.user);
	} else if (event === 'SIGNED_OUT') {
		currentUser.set(null);
		return;
	} else if (event === 'PASSWORD_RECOVERY') {
		//
	}
});
