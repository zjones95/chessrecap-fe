import { Icon, Stack, Switch } from "@mui/material"
import Logo from "./Logo"
import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react"
import { useColorModeProvider } from "@app/hooks/useColorModeProvider"
import { ColorMode } from "@app/types"

const ColorModeSwitch = ({
    colorMode,
    toggleColorMode,
}: {
    colorMode: ColorMode
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
                {/* <IconButton>
                    <IconShare size={32} color="#0D5E47" />
                </IconButton> */}
            </Stack>
        </Stack>
    )
}

export default Navbar
