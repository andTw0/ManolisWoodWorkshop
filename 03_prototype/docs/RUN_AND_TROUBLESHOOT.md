# Run And Troubleshoot

This file is the plain-English run guide for the prototype.

Use it if you need to:

- run the prototype locally
- restart it after closing the terminal
- troubleshoot basic WSL, Node, npm, or browser issues
- hand the project to another person without explaining everything live

## Project path

WSL path:

```txt
/mnt/c/git/repos/ManolisWoodWorkshop/03_prototype
```

## What this project is

- Next.js prototype website
- one-page scroll-story layout
- runs locally in WSL
- meant for testing and iteration, not final production deployment yet

## First-time setup in WSL

These are the setup steps if Node.js is not already available.

### 1. Update Ubuntu package lists

```bash
sudo apt update
```

This refreshes the WSL package index before installing anything.

### 2. Make sure `curl` exists

```bash
sudo apt install -y curl
```

This installs the download tool used by the `nvm` installer.

### 3. Install `nvm`

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

`nvm` is the Node Version Manager. It installs and switches Node.js versions cleanly in your WSL user account.

### 4. Load `nvm`

```bash
source ~/.bashrc
```

This makes the `nvm` command available in the current shell.

### 5. Install Node.js 20

```bash
nvm install 20
```

This installs Node.js and npm. For this project, Node 20 is a safe choice.

### 6. Verify Node and npm

```bash
node -v
npm -v
```

You should see version numbers, not `command not found`.

### 7. Install project dependencies

```bash
cd "/mnt/c/git/repos/ManolisWoodWorkshop/03_prototype"
npm install
```

This downloads the packages listed in `package.json` into `node_modules`.

## Daily startup

Open WSL and run:

```bash
cd "/mnt/c/git/repos/ManolisWoodWorkshop/03_prototype"
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" && npm run dev
```

This does three things:

1. goes to the prototype folder
2. loads your Node environment from `nvm`
3. starts the local Next.js development server

## What success looks like

The terminal should show something similar to:

```txt
Local: http://localhost:3000
Ready in ...
```

Then open this in your browser:

```txt
http://localhost:3000
```

## Important rule

Keep that terminal window open while the website is running.

If you close the terminal, the local server stops, and the browser will stop working.

## How to stop the server

In the terminal that is running the site, press:

```txt
Ctrl+C
```

## How to restart after closing the terminal

If you accidentally close the terminal:

```bash
cd "/mnt/c/git/repos/ManolisWoodWorkshop/03_prototype"
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" && npm run dev
```

Then refresh the browser at `http://localhost:3000`.

## Common problems

### Browser says `ERR_CONNECTION_REFUSED`

Usual cause:

- the dev server is not running

Fix:

```bash
cd "/mnt/c/git/repos/ManolisWoodWorkshop/03_prototype"
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" && npm run dev
```

### `node: command not found`

Usual cause:

- Node.js is not installed yet
- or `nvm` was not loaded in this shell

Fix:

```bash
source ~/.bashrc
nvm install 20
```

If Node was already installed, open a fresh WSL terminal and run the daily startup command again.

### `npm: command not found`

Usual cause:

- same as above, because npm is installed together with Node

Fix:

```bash
source ~/.bashrc
nvm install 20
```

### `npm install` fails

Usual causes:

- Node was not loaded properly
- network issue while downloading packages
- command run from the wrong folder

Checklist:

```bash
pwd
node -v
npm -v
```

Expected folder:

```txt
/mnt/c/git/repos/ManolisWoodWorkshop/03_prototype
```

Then try again:

```bash
npm install
```

### Port `3000` is already in use

Usual cause:

- another local dev server is already using that port

Try first:

- check whether you already have this prototype running in another terminal
- stop the other process if it is the same project

If needed, you can inspect listening ports in WSL with:

```bash
ss -ltnp
```

### The browser does not reflect changes

Try, in this order:

1. save the file again and wait a moment
2. refresh the browser
3. hard refresh the browser
4. stop the dev server with `Ctrl+C`
5. start it again with `npm run dev`

### I closed the running terminal by accident

That simply stops the server. Nothing is corrupted.

Start it again:

```bash
cd "/mnt/c/git/repos/ManolisWoodWorkshop/03_prototype"
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" && npm run dev
```

## Useful commands

```bash
npm install
npm run dev
npm run build
npm run start
npm run lint
```

What they do:

- `npm install` - installs project dependencies
- `npm run dev` - starts the local development server
- `npm run build` - checks whether the app builds successfully
- `npm run start` - runs the production build locally
- `npm run lint` - runs lint checks

## Commands to avoid casually during this phase

- `npm audit fix --force`
- random major dependency upgrades
- framework migrations
- large refactors unrelated to the prototype review

## Where to go next

- Need the main project entry doc: `../README.md`
- Need technical structure notes: `IMPLEMENTATION_NOTES.md`
- Need text and asset replacement guidance: `DESIGNER_HANDOFF.md`
- Need the frozen prototype reference docs:
  - `01-home.md`
  - `02-about.md`
  - `03-workshop.md`
  - `04-gallery.md`
  - `05-contact.md`
  - `website_architecture.md`
