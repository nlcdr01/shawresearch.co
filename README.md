# shawresearch.co

Static personal site for Angus Shaw, PMP (Shaw Research). Plain HTML and CSS, no build step. Served by **GitHub Pages**; the domain stays registered at **GoDaddy**, which keeps DNS only. Decided 2026-11-25 (supersedes the 11/24 choice of GoDaddy Websites + Marketing).

**The repo is the deployment.** A push to `main` is live within a minute or two. Nothing is pasted anywhere by hand.

## Files

| Path | What |
|---|---|
| `index.html` | About: hero + Fig. 1, what I do, track record, results, AI at work, writing, contact |
| `cv.html` | Public CV summary (no address or phone) |
| `work.html` | The six launch skills (#1–5, #9 from `projects/ai-portfolio/transferable-skills.md`) |
| `work/el-nino-ready.html` | Skill #1 write-up |
| `writing.html`, `writing/pmp-ai.html` | Essay index and essay 1 |
| `static/site.css`, `static/site.js`, `static/favicon.svg` | Shared style, email assembly, icon |
| `CNAME`, `.nojekyll`, `404.html` | GitHub Pages plumbing |

Adding a write-up: copy `work/el-nino-ready.html`, change the content, and link it from `work.html` (and the home-page card if it is featured).

Preview locally: `py -3 -m http.server 8000` in this folder, then open http://localhost:8000.

## Deploy (one-time)

This folder is its own git repo, separate from the Executive Assistant repo (whose contents are private).

1. GitHub: create a **public** repo `nlcdr01/shawresearch.co` (Angus's personal account, the same one that hosts the Executive Assistant repo), push this folder to `main`.
2. Repo → Settings → Pages: Source = *Deploy from a branch*, `main`, `/ (root)`. Custom domain = `shawresearch.co`.
3. GoDaddy → My Products → shawresearch.co → DNS:
   - **Forwarding: turn off** (the domain currently lands on GoDaddy's `/lander` parked page).
   - Delete existing `A @` records (currently 3.33.130.190 and 15.197.148.33).
   - Add `A @` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
   - Add/replace `CNAME www` → `nlcdr01.github.io`.
   - **Do not touch MX or TXT.** Mail runs through Proofpoint (`mx1/mx2-us1.ppe-hosted.com`).
4. When the Pages screen shows the DNS check passed, tick **Enforce HTTPS**.
5. Verify: `curl -sI https://shawresearch.co/` shows `Server: GitHub.com`, and mail to the domain still arrives.

## Before launch

- Juniper story in the essay: confirm it is clear of confidentiality terms.
- Contact address on the site is angus@shawresearch.co (assembled by script, not in the HTML).
- Headshot: drop a square photo at `static/headshot.jpg` and swap the `AS` monogram in `index.html` for `<img src="static/headshot.jpg" ...>`.
- Screenshots for each write-up.
