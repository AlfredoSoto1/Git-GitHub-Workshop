# Our Development Team

A simple one-page portfolio built with HTML, CSS, and JavaScript for the Git workshop.

## Open the page

Open `index.html` in a browser. Students can also use VSCode Live Server.

## Editing tasks

### 1. Solo warm-up

Open `app.js` and edit `TEAM_INFO`:

- Change the `tagline` to a sentence about your team.
- Change the `about` text to describe what you are learning.

Refresh the page and confirm that the header and About Us section changed.

### 2. Partner A profile

Partner A edits the `PARTNER_A` object in `app.js`:

- Replace `name` with a real name.
- Replace `major` with a major or area of study.
- Replace `favoriteTech` with a favorite technology.
- Change `initials` to the correct initials.

Then change the `.partner-a` background color in `styles.css`. Partner A's left card should show their information and have their chosen color.

### 3. Partner B profile

Partner B edits the `PARTNER_B` object in `app.js`:

- Replace `name` with a real name.
- Replace `major` with a major or area of study.
- Replace `favoriteTech` with a favorite technology.
- Change `initials` to the correct initials.

Then change the `.partner-b` background color in `styles.css`. Partner B's right card should show their information and have their chosen color.

Each partner should make these edits on a separate branch, check the page in the browser, commit, and push. Merge both profile branches into `main`. They should merge cleanly because the partners edit different objects and different CSS rules.

### 4. Add a team skill

After the profile merge, each partner adds one new skill to the `SKILLS` array in `app.js`. Use different skills so the final page has a larger shared toolbox.

### 5. Resolve the project conflict

Both partners start from the same updated `main` commit and create separate branches before either branch is merged.

In `PROJECT_IDEAS` in `app.js`, both partners replace the object titled `Choose our next idea` with a different project idea. For example:

- Partner A adds a browser game.
- Partner B adds a study planner.

Each partner commits and pushes their branch. Merge Partner A's branch into `main`. Partner B pulls `main` and runs `git merge main`. Git should mark the shared project block as a conflict.

Delete the conflict markers, keep one idea or combine both ideas, refresh the page, and commit the resolved version.
