export default function renderProjects(projects, section, onSelect) {
  section.replaceChildren();
    projects.forEach((project) => {
    const div = document.createElement("div");
    div.classList.add("project-item");
    div.textContent = project.name;
    div.addEventListener("click", () => {
      onSelect(project);
      section.querySelectorAll(".project-item").forEach((item) => {
        item.classList.remove("selected");
      });
      div.classList.add("selected");
})
section.appendChild(div);
  });
}