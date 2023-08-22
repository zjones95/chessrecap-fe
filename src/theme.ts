import { createTheme } from "@mui/material"

const typographyProps = {
    fontFamily: ["Inter", "sans-serif"].join(","),
    fontWeightBold: 400,
    fontWeightLight: 400,
    fontWeightMedium: 400,
    fontWeightRegular: 400,
}

const buttonOverrides = {
    contained: {
        boxShadow: "none",
        "&:hover": {
            boxShadow: "none",
        },
    },
    root: {
        height: "56px",
        borderRadius: "8px",
        textTransform: "none",
        fontSize: "1rem",
    },
}

const commonColors = {
    white: "#F6FEFC",
}

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#0D5E47",
        },
        secondary: {
            main: "#6DB723",
        },
        info: {
            main: "#B7A823",
        },
        error: {
            main: "#B73E23",
        },
        text: {
            primary: "#020D0A",
        },

        background: {
            default: "#F6FEFC",
            paper: "#0D5E47",
        },
        ...commonColors,
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
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: "8px",
                },
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
        secondary: {
            main: "#6DB723",
        },
        info: {
            main: "#B7A823",
        },
        error: {
            main: "#B73E23",
        },
        text: {
            primary: "#F6FEFC",
            secondary: "#6DB723",
        },
        background: {
            default: "#021",
            paper: "#0F2F26",
        },
        ...commonColors,
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
                ...buttonOverrides,
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: "8px",
                },
            },
        },
    },
})
