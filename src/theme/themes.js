const baseTheme = {
  fonts: {
    body: "Arial, sans-serif", // Choose a versatile font family
    heading: "Georgia, serif", // Choose a distinct font family for headings
  },
  fontSizes: {
    small: "0.875rem", // Small font size
    medium: "1rem", // Medium font size (default)
    large: "1.25rem", // Large font size
    xLarge: "1.5rem", // Extra-large font size
  },
  lineHeights: {
    small: "1.2", // Line height for small font size
    medium: "1.4", // Line height for medium font size
    large: "1.6", // Line height for large font size
    xLarge: "1.8", // Line height for extra-large font size
  },
  spacing: {
    small: "0.5rem", // Small spacing
    medium: "1rem", // Medium spacing
    large: "2rem", // Large spacing
  },
};

const lightTheme = {
  ...baseTheme,
  colors: {
    // Background colors
    background: "#f9f9f9",
    backgroundAccent: "#ffffff",

    // Text colors
    text: "#333333",
    textLight: "#666666",

    // Primary color (orange)
    primary: "#f57c00",
    primaryLight: "#ffab40",
    primaryDark: "#e65100",

    // Secondary color (teal)
    secondary: "#009688",
    secondaryLight: "#80cbc4",
    secondaryDark: "#00796b",

    // Border color
    border: "#333333",

    // Other colors (optional)
    accent: "#ff5722",
    success: "#4caf50",
    warning: "#ff9800",
    error: "#f44336",
  },
};

export { lightTheme, baseTheme };
