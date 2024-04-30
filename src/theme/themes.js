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
    primary: "#f0f0f0", // Light gray for background
    secondary: "#ffffff",
    text: "#333333", // Dark gray for text
    error: "#f28b82", // Pastel red for error state
    warning: "#ffad47", // Pastel orange for warning state
    success: "#a0d99b", // Pastel green for success state
    //accent: "#8ecae6", // Soft pastel blue for accent color
    accent: "#333333",
    border: "#333333",
  },
};

export { lightTheme, baseTheme };
