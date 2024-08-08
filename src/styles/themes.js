const baseTheme = {
  fonts: {
    body: "Arial, sans-serif", // Choose a versatile font family
    heading: "Georgia, serif", // Choose a distinct font family for headings
  },
  fontSizes: {
    small: "0.875rem", // Small font size
    medium: "1rem", // Medium font size (default)
    large: "1.25rem", // Large font size
    xLarge: "2rem", // Extra-large font size
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
  padding: {
    small: "0.5rem 1rem", // 0.5rem top and bottom, 1rem left and right

    large: "1rem 2rem", // 1rem top and bottom, 2rem left and right
  },
  screenSizes: {
    sm: "480px",
    md: "768px",
    lg: "1024px",
    xl: "1200px",
  },
};

const lightTheme = {
  ...baseTheme,
  colors: {
    primary: "#f0f0f0", 
    secondary: "#333333",
    accent: "142, 202, 230", 
    text: "#333333", 
    textAlt: "#f0f0f0", 
    error: "#f28b82", 
    alert: "#ffad47", 
    success: "#a0d99b", 
    background: "#333333", // delete
    border: "#333333",// delete
  },
};

export { lightTheme, baseTheme };
