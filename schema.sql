-- Run in Supabase SQL Editor. GitHub OAuth is configured in Supabase Auth.
create table if not exists public.tracker_weeks (
  user_id uuid not null references auth.users(id) on delete cascade,
  week_number integer not null check (week_number between 1 and 52),
  status text not null default 'todo' check (status in ('todo','doing','done')),
  hours numeric(7,1) not null default 0 check (hours >= 0 and hours <= 1000),
  evidence text not null default '' check (char_length(evidence) <= 2000),
  notes text not null default '' check (char_length(notes) <= 4000),
  gate boolean not null default false,
  updated_at timestamptz not null default now(),
  primary key (user_id, week_number)
);
create table if not exists public.tracker_settings (
  user_id uuid primary key references auth.users(id) on delete cascade,
  target_hours integer not null default 17 check (target_hours between 1 and 80),
  updated_at timestamptz not null default now()
);
create or replace function public.tracker_set_updated_at()
returns trigger language plpgsql set search_path = '' as $$
begin
  new.updated_at = now();
  return new;
end;
$$;
drop trigger if exists tracker_weeks_updated_at on public.tracker_weeks;
create trigger tracker_weeks_updated_at before update on public.tracker_weeks
for each row execute function public.tracker_set_updated_at();
drop trigger if exists tracker_settings_updated_at on public.tracker_settings;
create trigger tracker_settings_updated_at before update on public.tracker_settings
for each row execute function public.tracker_set_updated_at();
alter table public.tracker_weeks enable row level security;
alter table public.tracker_settings enable row level security;
revoke all on public.tracker_weeks from anon;
revoke all on public.tracker_settings from anon;
grant select, insert, update, delete on public.tracker_weeks to authenticated;
grant select, insert, update, delete on public.tracker_settings to authenticated;
drop policy if exists "Own weeks select" on public.tracker_weeks;
drop policy if exists "Own weeks insert" on public.tracker_weeks;
drop policy if exists "Own weeks update" on public.tracker_weeks;
drop policy if exists "Own weeks delete" on public.tracker_weeks;
create policy "Own weeks select" on public.tracker_weeks for select to authenticated using ((select auth.uid()) = user_id);
create policy "Own weeks insert" on public.tracker_weeks for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "Own weeks update" on public.tracker_weeks for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "Own weeks delete" on public.tracker_weeks for delete to authenticated using ((select auth.uid()) = user_id);
drop policy if exists "Own settings select" on public.tracker_settings;
drop policy if exists "Own settings insert" on public.tracker_settings;
drop policy if exists "Own settings update" on public.tracker_settings;
drop policy if exists "Own settings delete" on public.tracker_settings;
create policy "Own settings select" on public.tracker_settings for select to authenticated using ((select auth.uid()) = user_id);
create policy "Own settings insert" on public.tracker_settings for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "Own settings update" on public.tracker_settings for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "Own settings delete" on public.tracker_settings for delete to authenticated using ((select auth.uid()) = user_id);
