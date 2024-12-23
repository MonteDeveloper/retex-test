import { Theme, useTheme } from "../contexts/ThemeContext";

interface ThemeButtonProps {
    theme: Theme;
}

export default function ThemeButton({ theme }: ThemeButtonProps) {
  const { changeTheme } = useTheme();

  const activeButtonClasses = theme.isActive ? '!bg-[#E63036] !text-white' : '';

  return (
    <button
      className={`bg-white py-1 px-4 text-center border rounded-md border-black shadow-[-2px_2px_0px_0px_rgba(0,0,0,1)] ${activeButtonClasses}`}
      onClick={() => changeTheme(theme.id)}
    >
      <span className="text-[10px] uppercase font-medium">{theme.text}</span>
    </button>
  );
}
