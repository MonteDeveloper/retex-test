import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface WindowSizeContextType {
  isMobile: boolean;
  width: number;
}

const WindowSizeContext = createContext<WindowSizeContextType | undefined>(undefined);

export const WindowSizeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const smBreakPoint = 640;

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = width < smBreakPoint;

  return (
    <WindowSizeContext.Provider value={{ isMobile, width }}>
      {children}
    </WindowSizeContext.Provider>
  );
};

export const useWindowSize = (): WindowSizeContextType => {
  const context = useContext(WindowSizeContext);
  if (!context) {
    throw new Error("useWindowSize must be used within a WindowSizeProvider");
  }
  return context;
};
