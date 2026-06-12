# Git Terminal Control Cheat Sheet

This file is a plain-English Git workflow guide for this repository.

Use it when you want:

- one terminal showing constant repo status
- one terminal for Git actions like diff, commit, restore, or revert
- a safe fallback plan if you mess something up

## Repo root

WSL path:

```txt
/mnt/c/git/repos/ManolisWoodWorkshop
```

## Recommended two-terminal setup

## Terminal 1: live status/log monitor

Use this terminal as your always-on overview window.

Run:

```bash
watch -n 2 'git -C "/mnt/c/git/repos/ManolisWoodWorkshop" status --short; printf "\n---\n\n"; git -C "/mnt/c/git/repos/ManolisWoodWorkshop" log --oneline -5'
```

What it does:

- refreshes every 2 seconds
- shows current changed files
- shows the latest 5 commits

To stop it:

```txt
Ctrl+C
```

### Optional monitor alternatives

Only watch changed files:

```bash
watch -n 2 'git -C "/mnt/c/git/repos/ManolisWoodWorkshop" status --short'
```

Only watch recent commit history:

```bash
watch -n 2 'git -C "/mnt/c/git/repos/ManolisWoodWorkshop" log --oneline -5'
```

Only watch a compact diff summary:

```bash
watch -n 2 'git -C "/mnt/c/git/repos/ManolisWoodWorkshop" diff --stat'
```

## Terminal 2: action terminal

Use this one for actual Git work:

- `git status`
- `git diff`
- `git add`
- `git commit`
- `git restore`
- `git revert`

Start from repo root if possible:

```bash
cd "/mnt/c/git/repos/ManolisWoodWorkshop"
```

## Daily safety workflow

Before editing a batch of files:

```bash
git status
git log --oneline -5
```

Before a commit:

```bash
git status
git diff
```

If the current state is stable and worth keeping, make a checkpoint commit before experimenting.

## Create a checkpoint commit

Use this when the site is in a known-good state and you want a rollback point.

```bash
git status
git add .
git commit -m "Checkpoint before asset changes"
```

You can change the message to match what you are about to try.

## Most useful commands

Check current state:

```bash
git status
```

Show uncommitted code/content changes:

```bash
git diff
```

Show recent history:

```bash
git log --oneline -10
```

## If you messed up uncommitted changes

### Undo one file

```bash
git restore "path/to/file"
```

Example:

```bash
git restore "03_prototype/src/sections/HomeSection.tsx"
```

### Undo all tracked uncommitted changes

```bash
git restore .
```

What it does:

- resets tracked files back to the last commit
- does not remove untracked new files

### Remove untracked files and folders

```bash
git clean -fd
```

What it does:

- deletes untracked files
- deletes untracked folders

Warning:

- this is destructive
- use it only if you are sure those files are disposable

## If the last local commit was bad and not pushed yet

### Undo the last commit but keep all changes staged

```bash
git reset --soft HEAD~1
```

### Undo the last commit and keep all changes unstaged

```bash
git reset --mixed HEAD~1
```

This is often the most useful reset for local cleanup.

### Fully throw away the last commit and its file changes

```bash
git reset --hard HEAD~1
```

Warning:

- this is destructive
- only use it if you truly want to throw the work away

## If you already pushed a bad commit

Use `git revert`, not history rewriting.

First inspect recent commits:

```bash
git log --oneline -10
```

Then revert the bad one:

```bash
git revert <commit-hash>
```

Example:

```bash
git revert a1b2c3d
```

What it does:

- creates a new commit that undoes the old one
- keeps history safe and understandable

## If you want to inspect an older commit

Temporarily check out an old commit:

```bash
git checkout <commit-hash>
```

Return to `main`:

```bash
git checkout main
```

Use this when you only want to look around, compare, or copy something.

## Recommended project-specific rule

For this repository, the safest rhythm is:

1. Get to a stable state
2. Commit it
3. Experiment in small batches
4. Revert or restore quickly if needed

Good small batches for this project:

- hero asset changes
- about/workshop asset changes
- gallery asset changes
- layout tweaks
- copy tweaks

## Practical examples

### I changed one file and want to undo it

```bash
git restore "03_prototype/src/content/siteContent.ts"
```

### I changed a bunch of tracked files and want to reset them

```bash
git restore .
```

### I created junk files and want them gone too

```bash
git restore .
git clean -fd
```

### I made a bad local commit and want the changes back for editing

```bash
git reset --mixed HEAD~1
```

### I already pushed a bad commit and want the safe undo path

```bash
git log --oneline -10
git revert <commit-hash>
```

## Commands to be careful with

Safe most of the time:

- `git status`
- `git diff`
- `git log --oneline -10`
- `git restore "file"`
- `git restore .`
- `git revert <hash>`

Use with care:

- `git clean -fd`
- `git reset --hard HEAD~1`
- `git checkout <commit-hash>` if you do not understand detached HEAD state

## Best simple rule

If the current state is good, commit it before experimenting.

That is the easiest way to make rollback boring and safe.
