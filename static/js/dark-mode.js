document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("dark-mode-toggle");
    const themeStyle = document.getElementById("theme-style");

    // Check for saved mode in localStorage
    const savedTheme = localStorage.getItem("theme") || "light";
    themeStyle.href = `/static/css/${savedTheme}.css`;
    toggleButton.textContent = savedTheme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode";

    // Toggle the mode
    toggleButton.addEventListener("click", () => {
        const currentTheme = themeStyle.href.includes("light.css") ? "light" : "dark";
        const newTheme = currentTheme === "light" ? "dark" : "light";

        themeStyle.href = `/static/css/${newTheme}.css`;
        toggleButton.textContent = newTheme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode";

        // Save the preference in localStorage
        localStorage.setItem("theme", newTheme);
    });
});
