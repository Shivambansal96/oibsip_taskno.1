const dark = document.getElementsByClassName('dark');

// dark.addEventListener
dark.addEventListener("change", () => {
    // Toggle website theme
    document.body.classList.toggle("dark");
  });