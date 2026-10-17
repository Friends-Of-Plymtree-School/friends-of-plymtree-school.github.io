# Friends of Plymtree School (FOPS) website

A simple website made of plain files: no WordPress, no database, nothing to update or patch,
no cookies and no tracking. It is designed to be hosted for free on GitHub Pages at
**https://friendsofplymtreeschool.org.uk**.

## The quick bits you'll change: `site-config.js`

Open **`site-config.js`** in any text editor (Notepad, TextEdit, or straight on GitHub by
clicking the pencil icon). Every page reads these settings, so you only change them once:

| What | Setting |
|---|---|
| Email address shown on every page | `email` (now `friendsofplymtreeschool@gmail.com`; change it when you have e.g. `hello@friendsofplymtreeschool.org.uk`) |
| Facebook page (`""` hides all Facebook links) | `facebook` |
| 100 Club application form (every "Join the 100 Club" button; `""` hides the buttons) | `hundredClubJoinUrl` |
| 100 Club year shown on the page | `hundredClubSeason`, e.g. `"2027 – 2028"` |
| 100 Club share price | `hundredClubPrice`, e.g. `"£15"` |
| Yellow message at the top of the 100 Club page (`""` hides it) | `hundredClubNote` |

Keep the quote marks and commas as they are.

## Changing other words

Each page is its own file. Open it, find the sentence and type over it. Leave the bits in
`< >` angle brackets alone.

- `index.html`: Home
- `about.html`: About us (aims, what we've funded, our committee, charity information)
- `100-club.html`: 100 Club. **Each year, update the draw dates** ("from 16 October 2026 to
  August Bank Holiday Monday 2027" appears twice) and the "September 2026 to 2027" wording.
- `get-involved.html`: meetings, helping, and events (points people to Facebook)
- `contact.html`: email, Facebook, postal address
- `privacy.html`: privacy notice
- `404.html`: "page not found" page

Other files:
- `site-config.js`: **the settings (edit this)**
- `site.js`: fills the pages in from the settings (no need to edit)
- `styles.css`: colours and layout (blue and green from the school badge)
- `images/`: the school badge (taken from the FOPS 100 Club poster) and small icons
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

These are things the website draft couldn't confirm. Please check them or ask the committee:

- [ ] **Logo**: the site uses the school's "150 years" badge, as on the 100 Club poster and the
      FOPS Facebook picture. Check the school is happy for FOPS to use it, or swap in a FOPS logo
      (replace `images/logo.png`, a square PNG).
- [ ] **100 Club draws**: the site says draws are monthly from 16 October 2026, with the final
      draw on August Bank Holiday Monday 2027 (from the draft certificate), and "48 cash draws a
      year" with prizes of £5 – £100 (from the poster). Check these fit together. The draw day
      ("second Friday" on the draft certificate) is deliberately left off until it's confirmed.
- [ ] **100 Club deadline**: the poster's closing date (Friday 9 October 2026) has passed. The yellow
      note invites late enquiries. Change or remove `hundredClubNote` in `site-config.js` as appropriate.
- [ ] Is the Google Form (`https://forms.gle/nXdc4SEWbpe8y1zT9`) still the right link and still open?
- [ ] Are paper application forms still in the village shop?
- [ ] Is there an age limit (e.g. 16+) or other 100 Club rule that should be on the page? Is
      `SL0047` the right licence number to show?
- [ ] **Privacy page**: check it matches what you actually do with 100 Club details and emails,
      and who can see them.
- [ ] **What we've funded**: the list comes from the old school page. Add recent things if you like.
- [ ] Are committee meetings still at the start of every half term, with the AGM in September?
- [ ] Committee names are deliberately left off (the old school page had out-of-date and
      conflicting lists). Add them to `about.html` if you want them shown.
- [ ] Once live, ask the school to update or link its FOPS page, and add the website to the
      Charity Commission register.
