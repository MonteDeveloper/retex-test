import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { useWindowSize } from "../../../WindowsSizeContext";

export interface Theme {
  id: number;
  text: string;
  isActive: boolean;
}

interface ThemeContextType {
  themesList: Theme[];
  showThemes: boolean;
  toggleShowThemes: () => void;
  changeTheme: (id: number) => void;
}

const initialThemes: Theme[] = [
  { id: 1, text: "Ambiente", isActive: true },
  { id: 2, text: "Economia", isActive: false },
  { id: 3, text: "Mondo", isActive: false },
  { id: 4, text: "Non Profit", isActive: false },
  { id: 5, text: "Politica", isActive: false },
  { id: 6, text: "Società", isActive: false },
  { id: 7, text: "Welfare", isActive: false },
];

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [showThemes, setShowThemes] = useState(true);
  const [themesList, setThemesList] = useState<Theme[]>(initialThemes);
  const { isMobile } = useWindowSize();

  useEffect(() => {
    if (!isMobile) {
      setShowThemes(true);
    }
  }, [isMobile]);

  const changeTheme = (id: number) => {
    setThemesList((prevThemes) =>
      prevThemes.map((theme) =>
        theme.id === id
          ? { ...theme, isActive: true }
          : { ...theme, isActive: false }
      )
    );
  };

  const toggleShowThemes = () => {
    if (isMobile) {
      setShowThemes((prev) => !prev);
    }
  };

  return (
    <ThemeContext.Provider
      value={{ themesList, showThemes, toggleShowThemes, changeTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
