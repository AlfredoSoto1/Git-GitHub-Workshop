/*
 * TrailQuest is intentionally written with browser JavaScript only.
 * Read the code from top to bottom, change one small thing, and refresh the page.
 */

const STORAGE_KEY = "trailquest-state";

// TASK 1 (solo): Change the subtitle and refresh index.html to see your edit.
const APP_CONFIG = {
  subtitle: "A tiny adventure for turning small changes into a map of progress.",
  totalStarterMissions: 3,
};

const STARTER_MISSIONS = [
  {
    id: "scout-the-repo",
    icon: "⌘",
    label: "START HERE",
    title: "Scout the repository",
    detail: "Run the app, read the README, and check the Git status.",
    points: 10,
  },
  {
    id: "make-a-commit",
    icon: "✎",
    label: "SOLO MISSION",
    title: "Leave a clear footprint",
    detail: "Make one small code change and commit it with a useful message.",
    points: 20,
  },
  {
    id: "take-a-branch",
    icon: "⑂",
    label: "BRANCH OUT",
    title: "Take the trail less traveled",
    detail: "Create a branch, add a new mission, and compare your work.",
    points: 30,
  },
  // TASK 2 (solo): Add another mission object here. Give it a unique id.
  // A new mission should have: id, icon, label, title, detail, and points.
];

// TASK 4 (team): Both partners should edit this exact line differently on
// separate branches. Merging the branches will create a useful conflict.
const TEAM_QUOTE = "A good teammate leaves the trail easier to follow.";

const BADGES = [
  { id: "scout", icon: "◒", title: "First Light", detail: "Complete one mission." },
  { id: "trailblazer", icon: "✦", title: "Trailblazer", detail: "Complete two missions." },
  { id: "pathfinder", icon: "♢", title: "Pathfinder", detail: "Complete the starter route." },
  // TASK 3 (advanced): Add a fourth badge and unlock it with your own rule.
];

const defaultState = {
  playerName: "Explorer",
  completedMissionIds: [],
  customMissions: [],
  theme: "light",
  teammateJoined: false,
};

let state = loadState();

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved ? { ...defaultState, ...saved } : { ...defaultState };
  } catch (error) {
    return { ...defaultState };
  }
}

function saveState(message = "Saved locally") {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  const saveStatus = document.querySelector("#save-status");
  saveStatus.textContent = message;
  window.clearTimeout(saveState.timeoutId);
  saveState.timeoutId = window.setTimeout(() => {
    saveStatus.textContent = "Ready to explore";
  }, 1800);
}

function allMissions() {
  return [...STARTER_MISSIONS, ...state.customMissions];
}

function completedMissions() {
  return allMissions().filter((mission) => state.completedMissionIds.includes(mission.id));
}

function escapeHtml(value) {
  const div = document.createElement("div");
  div.textContent = value;
  return div.innerHTML;
}

function renderMissions() {
  const missionList = document.querySelector("#mission-list");
  missionList.innerHTML = allMissions()
    .map((mission, index) => {
      const completed = state.completedMissionIds.includes(mission.id);
      return `
        <article class="mission-card ${completed ? "is-complete" : ""}">
          <div class="mission-number">${String(index + 1).padStart(2, "0")}</div>
          <div class="mission-icon" aria-hidden="true">${escapeHtml(mission.icon)}</div>
          <div class="mission-content">
            <div class="mission-meta">
              <span>${escapeHtml(mission.label)}</span>
              <span>${mission.points} XP</span>
            </div>
            <h3>${escapeHtml(mission.title)}</h3>
            <p>${escapeHtml(mission.detail)}</p>
          </div>
          <button
            class="complete-button"
            type="button"
            data-mission-id="${escapeHtml(mission.id)}"
            aria-pressed="${completed}"
          >
            ${completed ? "Cleared" : "Complete"}
          </button>
        </article>
      `;
    })
    .join("");
}

function renderStats() {
  const missions = allMissions();
  const completed = completedMissions();
  const percent = missions.length ? Math.round((completed.length / missions.length) * 100) : 0;
  const xp = completed.reduce((total, mission) => total + mission.points, 0);

  document.querySelector("#progress-value").textContent = `${percent}%`;
  document.querySelector("#progress-fill").style.width = `${percent}%`;
  document.querySelector("#missions-value").textContent = `${completed.length} / ${missions.length}`;
  document.querySelector("#xp-value").textContent = xp;
  document.querySelector("#progress-note").textContent =
    percent === 100
      ? "The route is complete. Nice work."
      : `${missions.length - completed.length} mission${missions.length - completed.length === 1 ? "" : "s"} left on the map.`;
}

function renderProfile() {
  const name = state.playerName || "Explorer";
  document.querySelector("#profile-name").textContent = name;
  document.querySelector("#player-name").value = name;
  document.querySelector("#avatar").textContent = name.charAt(0).toUpperCase();

  const completedCount = completedMissions().length;
  const unlockedBadges = Math.min(completedCount, BADGES.length);
  document.querySelector("#badge-count").textContent = `${unlockedBadges} / ${BADGES.length}`;
  document.querySelector("#badge-list").innerHTML = BADGES.map((badge, index) => {
    const unlocked = completedCount > index;
    return `
      <div class="badge ${unlocked ? "is-unlocked" : ""}" title="${escapeHtml(badge.detail)}">
        <span class="badge-icon" aria-hidden="true">${escapeHtml(badge.icon)}</span>
        <span>${escapeHtml(badge.title)}</span>
      </div>
    `;
  }).join("");
}

function renderTeamSignal() {
  document.querySelector("#team-quote").textContent = `“${TEAM_QUOTE}”`;
  const status = document.querySelector("#team-status");
  const action = document.querySelector("#team-action");
  status.innerHTML = state.teammateJoined
    ? '<span class="signal-icon" aria-hidden="true">◎</span><span>Team run active</span>'
    : '<span class="signal-icon" aria-hidden="true">◎</span><span>Solo run</span>';
  action.textContent = state.teammateJoined ? "Leave team run" : "Invite a teammate";
}

function render() {
  document.body.dataset.theme = state.theme;
  document.querySelector("#hero-subtitle").textContent = APP_CONFIG.subtitle;
  document.querySelector("#theme-toggle").setAttribute(
    "aria-label",
    state.theme === "light" ? "Switch to dark theme" : "Switch to light theme",
  );
  renderMissions();
  renderStats();
  renderProfile();
  renderTeamSignal();
}

document.querySelector("#mission-list").addEventListener("click", (event) => {
  const button = event.target.closest("[data-mission-id]");
  if (!button) return;

  const missionId = button.dataset.missionId;
  const isCompleted = state.completedMissionIds.includes(missionId);
  state.completedMissionIds = isCompleted
    ? state.completedMissionIds.filter((id) => id !== missionId)
    : [...state.completedMissionIds, missionId];
  saveState(isCompleted ? "Mission reopened" : "Mission cleared");
  render();
});

document.querySelector("#name-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector("#player-name");
  const name = input.value.trim();
  if (!name) return;
  state.playerName = name;
  saveState("Explorer card updated");
  render();
});

document.querySelector("#mission-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const titleInput = document.querySelector("#mission-title");
  const detailInput = document.querySelector("#mission-detail");
  const title = titleInput.value.trim();
  const detail = detailInput.value.trim();
  if (!title || !detail) return;

  state.customMissions.push({
    id: `custom-${Date.now()}`,
    icon: "＋",
    label: "CUSTOM ROUTE",
    title,
    detail,
    points: 15,
  });
  saveState("New mission added");
  event.target.reset();
  render();
});

document.querySelector("#theme-toggle").addEventListener("click", () => {
  state.theme = state.theme === "light" ? "dark" : "light";
  saveState(`${state.theme === "dark" ? "Dark" : "Light"} theme selected`);
  render();
});

document.querySelector("#team-action").addEventListener("click", () => {
  state.teammateJoined = !state.teammateJoined;
  saveState(state.teammateJoined ? "Team run started" : "Back to solo mode");
  render();
});

document.querySelector("#reset-progress").addEventListener("click", () => {
  if (!window.confirm("Reset completed missions and custom missions?")) return;
  state.completedMissionIds = [];
  state.customMissions = [];
  saveState("Route reset");
  render();
});

document.querySelector("#start-quest").addEventListener("click", () => {
  document.querySelector("#missions-title").scrollIntoView({ behavior: "smooth", block: "center" });
  document.querySelector("#mission-list .complete-button")?.focus({ preventScroll: true });
});

render();

