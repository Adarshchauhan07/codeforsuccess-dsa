-- Run only if your existing dsa_workspaces table does not already exist.
create table if not exists public.dsa_workspaces(user_id uuid primary key references auth.users(id) on delete cascade,payload jsonb not null default '{}'::jsonb,updated_at timestamptz not null default now());
alter table public.dsa_workspaces enable row level security;
create policy "own workspace select" on public.dsa_workspaces for select using(auth.uid()=user_id);
create policy "own workspace insert" on public.dsa_workspaces for insert with check(auth.uid()=user_id);
create policy "own workspace update" on public.dsa_workspaces for update using(auth.uid()=user_id) with check(auth.uid()=user_id);
