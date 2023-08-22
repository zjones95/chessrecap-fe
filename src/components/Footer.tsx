import { Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <Stack
            direction="row"
            bgcolor="background.paper"
            justifyContent="center"
            alignItems="center"
            height={{ xs: 40, md: 56 }}
            mt={1}
            width="100%"
        >
            <Typography color="white">
                2023 © <Link to="/">chessrecap.com</Link>
            </Typography>
        </Stack>
    )
}

export default Footer
