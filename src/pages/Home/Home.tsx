import {
    Alert,
    Box,
    Button,
    Snackbar,
    Stack,
    TextField,
    Typography,
} from "@mui/material"
import { SyntheticEvent, useState } from "react"
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import { ROUTES } from "@app/routes"
import { TitleText } from "@app/components/TitleText"

const Home = () => {
    const navigate = useNavigate()
    const [queryParams] = useSearchParams()
    const errorParam = queryParams.get("error")

    const [usernameInput, setUsernameInput] = useState("")
    const [apiError, setApiError] = useState(Boolean(errorParam))

    const handleStartReview = (event: SyntheticEvent) => {
        event.preventDefault()
        navigate(ROUTES.reviewByUsername(usernameInput))
    }

    const handleUserNameChange = (event: SyntheticEvent) => {
        event.preventDefault()
        setUsernameInput((event.target as HTMLInputElement).value)
    }

    return (
        <Stack alignItems="center" justifyContent="center" margin="auto" p={1}>
            <Snackbar
                open={apiError}
                autoHideDuration={6000}
                onClose={() => setApiError(false)}
            >
                <Alert severity="error">
                    User does not exist or Chess.com API is down
                </Alert>
            </Snackbar>
            <Stack spacing={3} pb={4}>
                <Stack
                    direction="row"
                    spacing={{ xs: 1.5, lg: 2.5 }}
                    justifyContent="center"
                >
                    <TitleText>Chess</TitleText>
                    <TitleText animationDelay={300}>Recap</TitleText>
                </Stack>
                <Stack spacing={0.5}>
                    <Typography
                        variant="body1"
                        px={2}
                        fontSize={{ xs: "0.875rem", lg: "1rem" }}
                    >
                        Get your chess year-in-review and see how good (or bad)
                        you did, or{" "}
                        <Link
                            to={ROUTES.reviewByUsername("gothamchess")}
                            style={{ textDecoration: "none" }}
                        >
                            <Box component="span" color="secondary.main">
                                view a sample report...
                            </Box>
                        </Link>
                    </Typography>
                </Stack>

                <form onSubmit={handleStartReview}>
                    <Stack
                        direction={{ xs: "column", md: "row" }}
                        spacing={2}
                        pt={1}
                        px={2}
                        width="100%"
                    >
                        <TextField
                            variant="outlined"
                            sx={{ width: "100%" }}
                            placeholder="Chess.com username...."
                            value={usernameInput}
                            onChange={handleUserNameChange}
                        />
                        <Button
                            variant="contained"
                            sx={{ minWidth: "140px" }}
                            disabled={!usernameInput}
                            type="submit"
                        >
                            Let's Go!
                        </Button>
                    </Stack>
                </form>
            </Stack>
        </Stack>
    )
}

export default Home
