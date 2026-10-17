# Friends of Plymtree School (FOPS) website

A simple one-page website made of plain files: no WordPress, no database, nothing to update or
patch, no cookies and no tracking. It's designed to be hosted for free on GitHub Pages at
**https://friendsofplymtreeschool.org.uk**.

## The quick bits you'll change: `site-config.js`

Open **`site-config.js`** in any text editor (Notepad, TextEdit, or straight on GitHub by
clicking the pencil icon). The site reads these settings, so you only change them once:

| What | Setting |
|---|---|
| Email address shown on the site | `email` (now `friendsofplymtreeschool@gmail.com`; change it when you have e.g. `hello@friendsofplymtreeschool.org.uk`) |
| Facebook page (`""` hides all Facebook links) | `facebook` |

Keep the quote marks and commas as they are.

## Changing other words

Everything is on one page, **`index.html`**, in this order: welcome, What we do (our aims),
What FOPS has paid for, About us (who we are, our committee, charity information), Get involved
(meetings, AGM, Facebook for events), Contact, and Privacy. Open the file, find the sentence and
type over it. Leave the bits in `< >` angle brackets alone.

Other files:
- `site-config.js`: **the settings (edit this)**
- `site.js`: fills the page in from the settings and runs the mobile menu (no need to edit)
- `styles.css`: colours and layout (blue and green from the school badge)
- `images/`: the school badge and small icons
- `404.html`: "page not found" page
- `CNAME`: tells GitHub Pages the web address (`friendsofplymtreeschool.org.uk`). Leave it in.
- `.nojekyll`: tells GitHub Pages to serve the files as they are. Leave it in.

There are deliberately **no downloads** (minutes, constitution and so on) yet. Those will be remade.
To add one later, put the PDF in a `docs/` folder and link to it like
`<a href="docs/agm-minutes-2026.pdf">AGM minutes 2026</a>`.

## Preview on your computer

Double-click `index.html`. It opens in your browser just as it will look online.
(Only the 404 page looks unstyled when opened this way. That's normal.)

## Putting it online (GitHub Pages, free)

1. Create a free GitHub account (ideally a shared FOPS one, so it doesn't belong to one person).
2. Create a new **public** repository, e.g. `fops-website`.
3. Upload all the files in this folder (on GitHub: *Add file → Upload files*, drag them in,
   including `CNAME` and `.nojekyll`; on a Mac, press Cmd+Shift+. to show hidden files). Or push with git.
4. Go to **Settings → Pages → Build and deployment → Deploy from a branch → `main` / (root)** and save.
5. Under **Custom domain**, enter `friendsofplymtreeschool.org.uk` and save. Tick **Enforce HTTPS**
   once it becomes available (can take up to a day).
6. In Cloudflare (where the domain is registered), go to **DNS → Records** and add GitHub's
   records (set them to **DNS only**, the grey cloud):
   - four `A` records for `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - a `CNAME` record for `www` pointing to `<your-github-username>.github.io`
   Check these against GitHub's current guide: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
7. **Don't delete any MX or TXT records** that Google Workspace needs for email later.
   They sit happily alongside these.

After that, any change you save on GitHub goes live by itself within a minute or two.

## To check before going live

- [ ] **Privacy section**: check it matches what you actually do with emails and who can see them.
- [ ] **What FOPS has paid for**: the list comes from the old school page. Add recent things if you like.
- [ ] Are committee meetings still at the start of every half term, with the AGM in September?
- [ ] Committee names are deliberately left off (the old school page had out-of-date and
      conflicting lists). Add them to the "Our committee" part of `index.html` if you want them shown.
- [ ] Once live, ask the school to update or link its FOPS page, and add the website to the
      Charity Commission register.
