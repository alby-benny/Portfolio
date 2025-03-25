async function loadData() {
    try {
        const response = await fetch("data.json");
        if (!response.ok) {
            throw new Error(`Failed to fetch data.json: ${response.statusText}`);
        }
        const data = await response.json();

        loadSkills(data.skills);
        loadProjects(data.projects);
        loadEducations(data.educations);
        loadAchievements(data.achievements);
        loadContacts(data.contacts);
    } catch (error) {
        console.error("Error loading data:", error);
    }
}

function loadSkills(skills) {
    const skillsList = document.getElementById("skills-list");
    skillsList.className = "main-content-skill-content-skills-list";
    skills.forEach(skill => {
        const listItem = document.createElement("li");
        listItem.className = "main-content-skill-content-skills-list-item";

        const iconDiv = document.createElement("div");
        const iconImg = document.createElement("img");
        iconImg.src = skill.icon;
        iconImg.alt = skill.alt;
        iconDiv.appendChild(iconImg);

        const skillName = document.createElement("p");
        skillName.textContent = skill.name;

        listItem.appendChild(iconDiv);
        listItem.appendChild(skillName);
        skillsList.appendChild(listItem);
    });
}

function loadProjects(projects) {
    const projectsList = document.getElementById("projects-list");
    projectsList.className = "main-content-project-content-projects-list";
    projects.forEach(project => {
        const listItem = document.createElement("li");
        listItem.className = "main-content-project-content-projects-list-item";

        const title = document.createElement("h3");
        title.className = "main-content-project-content-project-title";
        title.innerHTML = `<img src="images/icons/projects.png"> ${project.title}`;

        const description = document.createElement("p");
        description.className = "main-content-project-content-project-description";
        description.textContent = project.description;

        const technologiesDiv = document.createElement("div");
        technologiesDiv.className = "main-content-project-content-project-technologies";
        project.technologies.forEach(tech => {
            const techSpan = document.createElement("span");
            techSpan.className = "main-content-project-content-project-technologies-item";
            techSpan.innerHTML = `<img src="${tech.icon}" alt="${tech.name}">`;
            technologiesDiv.appendChild(techSpan);
        });

        listItem.appendChild(title);
        listItem.appendChild(description);
        listItem.appendChild(technologiesDiv);
        projectsList.appendChild(listItem);
    });
}

function loadEducations(educations) {
    const educationsList = document.getElementById("educations-list");
    educationsList.className = "main-content-edu-content-educations-list";
    educationsList.innerHTML = ""; // Clear any existing content to avoid duplicates
    educations.forEach(education => {
        const listItem = document.createElement("li");
        listItem.className = "main-content-edu-content-educations-list-item";

        const iconImg = document.createElement("img");
        iconImg.src = "images/icons/book.png";
        iconImg.alt = "Education Icon";
        listItem.appendChild(iconImg);

        const title = document.createElement("div");
        title.className = "main-content-edu-content-list-item-title";
        title.textContent = education.title;

        const subtitle = document.createElement("div");
        subtitle.className = "main-content-edu-content-list-item-subtitle";
        subtitle.textContent = education.subtitle;

        const duration = document.createElement("div");
        duration.className = "main-content-edu-content-list-item-duration";
        duration.textContent = `Year: ${education.year}`;

        const grade = document.createElement("div");
        grade.className = "main-content-edu-content-list-item-grade";
        grade.textContent = education.gradeType === "CGPA" 
            ? `CGPA: ${education.grade}` 
            : `Percentage: ${education.grade}%`;
        const contdiv=document.createElement("div");
        contdiv.className="main-content-edu-content-list-item-cont";
        contdiv.appendChild(title);
        contdiv.appendChild(subtitle);
        contdiv.appendChild(duration);
        contdiv.appendChild(grade);
        listItem.appendChild(contdiv);
        educationsList.appendChild(listItem);
    });
}

function loadAchievements(achievements) {
    const achievementsList = document.getElementById("achievements-list");
    achievementsList.className = "main-content-aec-content-achievements-list";
    achievementsList.innerHTML = ""; // Clear any existing content to avoid duplicates
    achievements.forEach(achievement => {
        const listItem = document.createElement("li");
        listItem.className = "main-content-aec-content-achievements-list-item";

        const title = document.createElement("div");
        title.className = "main-content-aec-content-list-item-title";
        title.textContent = achievement.title;

        const text = document.createElement("div");
        text.className = "main-content-aec-content-list-item-text";
        text.textContent = achievement.text;

        const area = document.createElement("div");
        area.className = "main-content-aec-content-list-item-area";
        area.textContent = achievement.area;

        listItem.appendChild(title);
        listItem.appendChild(text);
        listItem.appendChild(area);
        achievementsList.appendChild(listItem);
    });
}

function loadContacts(contacts) {
    const contactList = document.getElementById("contact-list");
    contactList.innerHTML = ""; // Clear any existing content to avoid duplicates
    contacts.forEach(contact => {
        const listItem = document.createElement("li");
        listItem.className = "main-content-home-contact-list-item";

        const link = document.createElement("a");
        link.href = contact.url;
        link.className = "main-content-home-contact-list-item-link";

        const iconDiv = document.createElement("div");
        const iconImg = document.createElement("img");
        iconImg.src = contact.icon;
        iconImg.alt = contact.alt;
        iconImg.className = "main-content-home-contact-list-item-image";
        iconDiv.appendChild(iconImg);

        link.appendChild(iconDiv);
        listItem.appendChild(link);
        contactList.appendChild(listItem);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    loadData();
});
