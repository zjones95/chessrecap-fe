import { Stack, Typography } from "@mui/material"
import { IconChessKnightFilled } from "@tabler/icons-react"
import { Link } from "react-router-dom"

const Logo = () => {
    return (
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            <Stack direction="row" alignItems="center">
                <IconChessKnightFilled size={48} style={{ color: "#0D5E47" }} />
                <Stack>
                    <Typography fontSize="0.875rem">Chess</Typography>
                    <Typography fontSize="0.875rem">Recap</Typography>
                </Stack>
            </Stack>
        </Link>
    )
}

export default Logo
