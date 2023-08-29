import { Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { ROUTES } from "@app/routes"

const Footer = () => {
    return (
        <Stack
            direction="row"
            bgcolor="background.paper"
            justifyContent="center"
            alignItems="center"
            height={{ xs: 40, md: 56 }}
            mt={2}
            width="100%"
        >
            <Typography color="common.white">
                2023 © <Link to={ROUTES.HOME}>chessrecap.com</Link>
            </Typography>
        </Stack>
    )
}

export default Footer
