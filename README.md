# SleeStack 2
 
Web framework stack using Sveltekit, Supabase with Skeleton UI

https://github.com/ekendra-nz/sleestack2

Uses Typescript: https://www.totaltypescript.com/

## Happy days!

- Login to supabase.com
- Click on 'new project' and fill in the following information:

Name: ________

Database Password : ______________
 
- Copy the anon public key and the project url into a  ***.env.local***   file in root folder
```
PUBLIC_SUPABASE_URL=
PUBLIC_SUPABASE_ANON_KEY=
```

- Go to “Table Editor” and create a new table called profiles where the column id is a foreign key on ***auth.users***
 
(This is needed because the auth schema is not publicly available if we want to access user information. Therefore we create the data we want inside the profiles table.)

- Go to “SQL Editor” and run the following query. The query creates a trigger that automatically generates a profiles entry when a new user is created:

```
drop function if exists handle_new_user cascade;

create function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, email)
  values (new.id, new.email);
  return new;
end;
$$;

-- trigger the function every time a user is created
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
```