import ShowThemesDropdown from "./components/ShowThemesDropdown";
import ThemeButton from "./components/ThemeButton";
import { Theme, useTheme } from "./contexts/ThemeContext";

export default function ThemeSelection() {
  const { themesList, showThemes } = useTheme();

  return (
    <div className="bg-[#F4F4F4] py-8 flex flex-col gap-6 px-4 sm:flex-row sm:justify-between">
      <ShowThemesDropdown />

      <div className={`flex gap-2 flex-wrap ${showThemes ? '' : 'hidden'}`}>
        {themesList.map((theme: Theme) => (
          <ThemeButton key={theme.id} theme={theme} />
        ))}
      </div>
    </div>
  );
}
