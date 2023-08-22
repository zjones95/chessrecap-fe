import { Icon, IconButton, Stack, Switch } from "@mui/material"
import Logo from "./Logo"
import { IconMoonFilled, IconShare, IconSunFilled } from "@tabler/icons-react"
import { useColorModeProvider } from "../hooks/useColorModeProvider"

const ColorModeSwitch = ({
    colorMode,
    toggleColorMode,
}: {
    colorMode: "light" | "dark"
    toggleColorMode: () => void
}) => {
    return (
        <Stack direction="row" spacing={1} alignItems="center">
            <Icon sx={{ color: "primary.main" }}>
                <IconMoonFilled />
            </Icon>
            <Switch
                checked={colorMode === "light"}
                onChange={toggleColorMode}
            />
            <Icon sx={{ color: "primary.main" }}>
                <IconSunFilled />
            </Icon>
        </Stack>
    )
}

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorModeProvider()

    return (
        <Stack
            maxWidth={1300}
            width="100%"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            p={2}
        >
            <Logo />
            <Stack direction="row" spacing={4}>
                <ColorModeSwitch
                    colorMode={colorMode}
                    toggleColorMode={toggleColorMode}
                />
                <IconButton onClick={toggleColorMode}>
                    <IconShare size={32} color="#0D5E47" />
                </IconButton>
            </Stack>
        </Stack>
    )
}

export default Navbar
