import React, { createContext, useContext, useState, useEffect } from 'react';

const themes = ['theme1', 'theme2', 'theme3'] as const;
type ThemeType = typeof themes[number];

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'theme1',
  setTheme: () => {}
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<ThemeType>('theme1');

  useEffect(() => {
    const saved = localStorage.getItem('theme') as ThemeType;
    if (saved && themes.includes(saved)) setThemeState(saved);
  }, []);

  const setTheme = (newTheme: ThemeType) => {
    localStorage.setItem('theme', newTheme);
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`${theme} transition-all duration-500`}>{children}</div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
