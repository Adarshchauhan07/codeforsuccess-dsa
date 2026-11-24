create table if not exists public.dsa_workspaces (
  user_id uuid primary key references auth.users(id) on delete cascade,
  payload jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);
alter table public.dsa_workspaces enable row level security;
create policy "users_read_own_workspace" on public.dsa_workspaces for select using (auth.uid() = user_id);
create policy "users_insert_own_workspace" on public.dsa_workspaces for insert with check (auth.uid() = user_id);
create policy "users_update_own_workspace" on public.dsa_workspaces for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
