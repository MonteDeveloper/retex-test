import { useTheme } from "../contexts/ThemeContext";

export default function ShowThemesDropdown() {
  const { toggleShowThemes, showThemes } = useTheme();

  return (
    <button
      className="flex gap-3 items-center text-start text-[28px]"
      onClick={toggleShowThemes}
    >
      <span className="font-bold">Tutti i temi</span>
      <i
        className={`fa-solid fa-angle-down text-xl transition-transform duration-300 sm:hidden ${
          showThemes ? "" : "transform rotate-180 translate-y-[-2px]"
        }`}
      ></i>
    </button>
  );
}
