import { Button, Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { ROUTES } from "@app/routes"
import { TitleText } from "@app/components/TitleText"

const ErrorPage = () => {
    return (
        <Stack alignItems="center" justifyContent="center" spacing={4} m="auto">
            <TitleText lineHeight={{ xs: "3rem", md: "4rem", lg: "5rem" }}>
                404
            </TitleText>
            <Typography
                fontSize={{ xs: "1rem", lg: "1.25rem" }}
                color="text.primary"
            >
                Whoops! Looks like this page doesn't exist...
            </Typography>
            <Link to={ROUTES.HOME}>
                <Button variant="contained" sx={{ px: 4 }}>
                    Back To Home
                </Button>
            </Link>
        </Stack>
    )
}

export default ErrorPage
