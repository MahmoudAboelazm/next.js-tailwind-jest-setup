const useLocalStorage = (theme?: string) => {
  if (theme) {
    localStorage.setItem("theme", JSON.stringify(theme));
    return theme;
  }

  const jsonValue = localStorage.getItem("theme");
  if (jsonValue) return JSON.parse(jsonValue);

  return "";
};

export const getTheme = () => {
  const theme = useLocalStorage();
  if (
    theme === "dark" ||
    (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    return "dark";
  }
  return "light";
};

export const toggleTheme = (theme: string) => {
  if (theme === "dark") {
    document.documentElement.classList.remove("dark");
    return useLocalStorage("light");
  }
  document.documentElement.classList.add("dark");
  return useLocalStorage("dark");
};
