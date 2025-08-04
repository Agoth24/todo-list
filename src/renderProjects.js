export default function renderProjects(projects, section, onSelect) {
  // Accept selectedProject as the 4th argument
  const selectedProject = arguments[3];
  section.replaceChildren();
  projects.forEach((project) => {
    const div = document.createElement("div");
    div.classList.add("project-item");

    if (selectedProject && selectedProject.id === project.id) {
      div.classList.add("selected");
    }

    const nameSpan = document.createElement("span");
    nameSpan.textContent = project.name;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✕";
    deleteBtn.classList.add("delete-project-btn");
    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent triggering select
      if (window.handleProjectDelete) {
        window.handleProjectDelete(project);
      }
    });

    div.appendChild(nameSpan);
    div.appendChild(deleteBtn);

    div.addEventListener("click", () => {
      const alreadySelected = div.classList.contains("selected");
      section.querySelectorAll(".project-item").forEach((item) => {
        item.classList.remove("selected");
      });
      if (alreadySelected) {
        onSelect(null); // Deselect project
      } else {
        div.classList.add("selected");
        onSelect(project);
      }
    });
    section.appendChild(div);
  });
}