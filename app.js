/*
 * This is a small, dependency-free portfolio.
 * Students can read the data first, then follow the task comments below.
 */

// SOLO WARM-UP: Change the tagline or about text and refresh the browser.
const TEAM_INFO = {
  name: "OUR DEVELOPMENT TEAM",
  tagline: "Building cool things together",
  about:
    "We are learning Git and GitHub by building, sharing, and improving small projects together. This page is our first shared space on the web.",
};

// PARTNER A TASK: Replace only the values in this object with Partner A's details.
const PARTNER_A = {
  name: "Partner A",
  major: "Your major",
  favoriteTech: "HTML",
  initials: "A",
};

// PARTNER B TASK: Replace only the values in this object with Partner B's details.
const PARTNER_B = {
  name: "Partner B",
  major: "Your major",
  favoriteTech: "JavaScript",
  initials: "B",
};

// PARTNER A TASK: Add one skill that Partner A wants the team to practice.
// PARTNER B TASK: Add a different skill that Partner B wants the team to practice.
const SKILLS = ["Your skills"];

// PARTNER A & B TASK: Add project ideas that the team might want to build together.
const PROJECT_IDEAS = [
  { icon: "?", title: "Choose our next idea", detail: "Replace this placeholder together." },
];

function escapeHtml(value) {
  const element = document.createElement("div");
  element.textContent = value;
  return element.innerHTML;
}

function renderTeamInfo() {
  document.querySelector("#team-name").textContent = TEAM_INFO.name;
  document.querySelector("#team-tagline").textContent = TEAM_INFO.tagline;
  document.querySelector("#about-copy").textContent = TEAM_INFO.about;
}

function renderPartner(partner, selector, accentLabel) {
  document.querySelector(selector).innerHTML = `
    <div class="partner-card-topline">
      <span class="partner-role">Contributor</span>
      <span class="partner-label">${accentLabel}</span>
    </div>
    <div class="portrait" aria-hidden="true">${escapeHtml(partner.initials)}</div>
    <h3>${escapeHtml(partner.name)}</h3>
    <dl class="partner-details">
      <div>
        <dt>MAJOR</dt>
        <dd>${escapeHtml(partner.major)}</dd>
      </div>
      <div>
        <dt>FAVORITE TECH</dt>
        <dd>${escapeHtml(partner.favoriteTech)}</dd>
      </div>
    </dl>
  `;
}

function renderPartners() {
  renderPartner(PARTNER_A, "#partner-a-card", "PARTNER A");
  renderPartner(PARTNER_B, "#partner-b-card", "PARTNER B");
}

function renderSkills() {
  document.querySelector("#skill-list").innerHTML = SKILLS.map(
    (skill) => `
      <li>
        <span>${escapeHtml(skill)}</span>
      </li>
    `,
  ).join("");
}

function renderProjectIdeas() {
  const ideas = document.querySelector("#idea-list");
  ideas.innerHTML = PROJECT_IDEAS.map(
    (idea) => `
      <article class="idea-card">
        <span class="idea-icon" aria-hidden="true">${escapeHtml(idea.icon)}</span>
        <div>
          <h3>${escapeHtml(idea.title)}</h3>
          <p>${escapeHtml(idea.detail)}</p>
        </div>
        <span class="idea-arrow" aria-hidden="true">↗</span>
      </article>
    `,
  ).join("");
  document.querySelector("#idea-count").textContent = "A FEW POSSIBILITIES";
}

renderTeamInfo();
renderPartners();
renderSkills();
renderProjectIdeas();
