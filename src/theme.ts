import { createTheme } from "@mui/material"

const typographyProps = {
    fontFamily: ["Inter", "sans-serif"].join(","),
    fontWeightBold: 400,
    fontWeightLight: 400,
    fontWeightMedium: 400,
    fontWeightRegular: 400,
}

const buttonOverrides = {
    root: {
        height: "56px",
    },
}

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#0D5E47",
        },
        text: {
            primary: "#020D0A",
        },
        secondary: {
            main: "#6DB723",
        },
        background: {
            default: "#F6FEFC",
            paper: "#0D5E47",
        },
    },
    typography: {
        allVariants: {
            color: "#020D0A",
        },
        ...typographyProps,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                ...buttonOverrides,
            },
        },
    },
})

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#0D5E47",
            dark: "#0F2F26",
        },
        text: {
            primary: "#F6FEFC",
            secondary: "#6DB723",
        },
        secondary: {
            main: "#6DB723",
        },
        background: {
            default: "#021",
            paper: "#0F2F26",
        },
    },
    typography: {
        allVariants: {
            color: "#F6FEFC",
        },
        ...typographyProps,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                contained: {
                    boxShadow: "none",
                },
                ...buttonOverrides,
            },
        },
    },
})
