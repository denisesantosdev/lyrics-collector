import { css } from "styled-components";

const variables = css`
    :root {
        --primary-clr: ${({ theme }) => theme.colors.primary};
        --secondary-clr: ${({ theme }) => theme.colors.secondary};
        --accent-clr: ${({ theme }) => theme.colors.accent};

        --error-clr: ${({ theme }) => theme.colors.error};
        --success-clr: ${({ theme }) => theme.colors.success};
        --alert-clr: ${({ theme }) => theme.colors.alert};

        --text-clr: ${({ theme }) => theme.colors.text};
        --text-alt-clr: ${({ theme }) => theme.colors.textAlt};

        --font-heading: ${({ theme }) => theme.fonts.heading};
        --font-body: ${({ theme }) => theme.fonts.body};

        --fs-sm: ${({ theme }) => theme.fontSizes.small};
        --fs-md: ${({ theme }) => theme.fontSizes.medium};
        --fs-lg: ${({ theme }) => theme.fontSizes.large};
        --fs-xl: ${({ theme }) => theme.fontSizes.xLarge};

        --screen-sm: ${({ theme }) => theme.screenSizes.sm};
        --screen-md: ${({ theme }) => theme.screenSizes.md};
        --screen-lg: ${({ theme }) => theme.screenSizes.lg};
        --screen-xl: ${({ theme }) => theme.screenSizes.xl};
    }
`;

export default variables
