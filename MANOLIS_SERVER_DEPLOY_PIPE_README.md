# ManolisWoodWorkshop — Server Hosting / Deploy Pipeline Handoff

This document describes the current hosting setup for the **ManolisWoodWorkshop** Next.js prototype on **nyx-server**, plus the safe deploy/update workflow.

---

## Current Hosting Summary

The website is hosted on:

```text
https://manolis.nyx-server.net
```

Traffic path:

```text
Browser
  → Cloudflare DNS / proxy
  → FritzBox port forwarding 80/443
  → nyx-server nginx
  → local Next.js app on 127.0.0.1:3000
```

The Next.js app is run persistently by a `systemd` service:

```text
manolis-website.service
```

The app does **not** need an open SSH terminal or manual `npm run start` session to stay online.

---

## Server Identity

```text
Server name: nyx-server
Server user: andtwo
Server Tailscale IP: 100.94.46.110
Server LAN IP: 192.168.178.20
Domain: nyx-server.net
Website subdomain: manolis.nyx-server.net
```

SSH from laptop:

```bash
ssh andtwo@100.94.46.110
```

---

## Repo / App Paths

Repo is cloned on the server at:

```bash
/mnt/ssd/manolis-woodworkshop
```

Actual Next.js app root:

```bash
/mnt/ssd/manolis-woodworkshop/03_prototype
```

The repo was cloned via SSH deploy key from:

```bash
git@github.com:andTw0/ManolisWoodWorkshop.git
```

The SSH deploy key is stored under the server user:

```bash
/home/andtwo/.ssh/id_ed25519
/home/andtwo/.ssh/id_ed25519.pub
```

The deploy key should remain **read-only** on GitHub. The server only needs to pull, not push.

---

## Node / npm Setup

Node was installed via **nvm**, not via Ubuntu `apt npm`.

Current Node/npm paths:

```bash
/home/andtwo/.nvm/versions/node/v24.16.0/bin/node
/home/andtwo/.nvm/versions/node/v24.16.0/bin/npm
```

If a new SSH session does not know `node` or `npm`, load nvm manually:

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
nvm use --lts
```

Verify:

```bash
node -v
npm -v
```

---

## Important Production Lesson

`npm run dev` is **not** enough to prove the site is host-ready.

The prototype originally worked in dev mode, but failed on the server during production build:

```bash
npm run build
```

Original build error:

```text
File: src/components/Navigation.tsx
Problem: observer.observe(section) received Element | null
IntersectionObserver.observe() requires Element
```

Minimal fix applied locally:

```ts
sections.forEach((section) => {
  if (section) observer.observe(section);
});
```

Going forward:

```text
npm run dev   = visual preview only
npm run build = real production validation
npm run start = local production runtime check
```

---

## Required Local Preflight Before Push

Before pushing a version intended for hosting, test locally on the laptop/work machine inside:

```bash
03_prototype
```

Run:

```bash
npm install
npm run build
```

Optional stronger check:

```bash
npm run start
```

Only push if `npm run build` passes.

Recommended OpenCode instruction:

```text
Check if this Next.js prototype is production-ready for hosting.
Only work on the local repo. Do not SSH into nyx-server, do not touch /mnt/ssd paths, and do not handle deployment.
Focus on 03_prototype.
Run or request npm install and npm run build.
Treat npm run dev as visual preview only.
Inspect git changes and tell me if it is safe to commit/push for later manual deployment.
Do not modify files unless explicitly approved.
```

---

## Server Deploy / Update Flow

After local build passes and changes are pushed to GitHub, deploy manually on `nyx-server`:

```bash
ssh andtwo@100.94.46.110

cd /mnt/ssd/manolis-woodworkshop
git status
git pull

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
nvm use --lts

cd /mnt/ssd/manolis-woodworkshop/03_prototype
npm ci
rm -rf .next
npm run build

sudo systemctl restart manolis-website
```

Then verify:

```bash
sudo systemctl status manolis-website --no-pager
curl -I http://127.0.0.1:3000
curl -I https://manolis.nyx-server.net
```

Expected signs of success:

```text
HTTP/1.1 200 OK
X-Powered-By: Next.js
```

Public HTTPS may show:

```text
HTTP/2 200
server: cloudflare
x-powered-by: Next.js
```

---

## Sharp / Production Image Handling

Next.js warned that `sharp` is recommended for production image optimization.

`sharp` was installed on the server for testing.

Clean long-term approach:

1. Install `sharp` locally in the repo.
2. Run build locally.
3. Commit `package.json` and `package-lock.json` changes.
4. Push to GitHub.
5. Pull on server.
6. Use `npm ci` on server.

Local command:

```bash
cd 03_prototype
npm install sharp
npm run build
```

Then commit/push the resulting package changes.

Server deploy after that should use:

```bash
npm ci
```

not `npm install sharp` manually every time.

---

## Nginx Setup

Existing nginx sites on server include:

```text
dashboard.nyx-server.net
node.nyx-server.net
manolis.nyx-server.net
```

Manolis nginx config:

```bash
/etc/nginx/sites-available/manolis.nyx-server.net
/etc/nginx/sites-enabled/manolis.nyx-server.net
```

Core proxy behavior:

```nginx
server {
    listen 80;
    server_name manolis.nyx-server.net;

    location / {
        proxy_pass http://127.0.0.1:3000;

        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

Certbot has added HTTPS configuration for:

```text
manolis.nyx-server.net
```

Certificate paths:

```bash
/etc/letsencrypt/live/manolis.nyx-server.net/fullchain.pem
/etc/letsencrypt/live/manolis.nyx-server.net/privkey.pem
```

Certbot scheduled automatic renewal.

Useful nginx commands:

```bash
sudo nginx -t
sudo systemctl reload nginx
sudo systemctl status nginx --no-pager
```

Local nginx host-routing test:

```bash
curl -I -H "Host: manolis.nyx-server.net" http://127.0.0.1
```

Expected:

```text
HTTP/1.1 200 OK
X-Powered-By: Next.js
```

---

## systemd Persistent App Service

Service file:

```bash
/etc/systemd/system/manolis-website.service
```

Current service content:

```ini
[Unit]
Description=Manolis WoodWorkshop Next.js Website
After=network.target

[Service]
Type=simple
User=andtwo
WorkingDirectory=/mnt/ssd/manolis-woodworkshop/03_prototype

Environment=NODE_ENV=production
Environment=PORT=3000
Environment=HOSTNAME=127.0.0.1
Environment=PATH=/home/andtwo/.nvm/versions/node/v24.16.0/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin

ExecStart=/home/andtwo/.nvm/versions/node/v24.16.0/bin/npm run start -- --hostname 127.0.0.1 --port 3000

Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
```

Service commands:

```bash
sudo systemctl daemon-reload
sudo systemctl enable manolis-website
sudo systemctl start manolis-website
sudo systemctl restart manolis-website
sudo systemctl stop manolis-website
sudo systemctl status manolis-website --no-pager
```

Live logs:

```bash
journalctl -u manolis-website -f
```

Recent logs:

```bash
journalctl -u manolis-website -n 100 --no-pager
```

---

## Common Problems / Fixes

### Site opens only while SSH terminal is open

Cause:

```text
App was started manually with npm run start.
```

Fix:

```bash
sudo systemctl start manolis-website
sudo systemctl enable manolis-website
```

---

### Browser shows Pterodactyl instead of Manolis site

Cause:

```text
nginx HTTPS server block for manolis was missing or wrong, so HTTPS fell through to another site config.
```

Fix used:

```bash
sudo certbot --nginx -d manolis.nyx-server.net
sudo nginx -t
sudo systemctl reload nginx
```

Confirm routing:

```bash
curl -I -H "Host: manolis.nyx-server.net" http://127.0.0.1
curl -k -I -H "Host: manolis.nyx-server.net" https://127.0.0.1
```

---

### Next.js error: Failed to find Server Action

Example:

```text
Failed to find Server Action "ee6a77f7".
This request might be from an older or newer deployment.
```

Likely cause:

```text
Browser / Cloudflare / Next.js client bundle cache is from an older build while the server is running a newer build.
```

Clean rebuild:

```bash
cd /mnt/ssd/manolis-woodworkshop/03_prototype
rm -rf .next
npm run build
sudo systemctl restart manolis-website
```

Then hard-refresh browser:

```text
Ctrl + F5
```

If still weird, purge Cloudflare cache for the subdomain.

---

### npm audit warnings

`npm ci` / `npm install` may report:

```text
5 vulnerabilities (1 moderate, 4 high)
```

Do **not** blindly run:

```bash
npm audit fix --force
```

That can introduce breaking dependency upgrades.

Recommended follow-up:

```text
Ask OpenCode to inspect npm audit results and separate production runtime risks from dev tooling warnings.
```

---

## Current Working Verification

The following checks have worked:

```bash
curl -I http://127.0.0.1:3000
curl -I https://manolis.nyx-server.net
```

Expected output includes:

```text
HTTP 200
X-Powered-By: Next.js
```

Public domain works:

```text
https://manolis.nyx-server.net
```

---

## Mental Model

Local laptop / OpenCode:

```text
Develop
Preview with npm run dev
Validate with npm run build
Commit/push
```

nyx-server:

```text
Pull from GitHub
npm ci
rm -rf .next
npm run build
restart systemd service
nginx serves domain
```

Do not use the server as the development machine. It is the host/deploy target.
