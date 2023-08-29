import { Button, Stack, TextField, Typography } from "@mui/material"
import React, { SyntheticEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ROUTES } from "../routes"
import { useSpring, animated } from "@react-spring/web"

const TitleText = ({
    children,
    animationDelay = 0,
}: {
    children: React.ReactNode
    animationDelay?: number
}) => {
    const [springs] = useSpring(() => ({
        from: {
            opacity: 0,
            y: 100,
        },
        to: {
            opacity: 1,
            y: 0,
        },
        delay: animationDelay,
    }))

    return (
        <animated.div style={springs}>
            <Typography variant="h1" fontSize="5rem" color="primary.main">
                {children}
            </Typography>
        </animated.div>
    )
}

const Home = () => {
    const [username, setUsername] = useState("")

    const navigate = useNavigate()

    const handleStartReview = (event: SyntheticEvent) => {
        event.preventDefault()
        navigate(ROUTES.reviewByUsername(username))
    }

    const handleUserNameChange = (event: SyntheticEvent) => {
        event.preventDefault()
        setUsername((event.target as HTMLInputElement).value)
    }

    return (
        <Stack alignItems="center" justifyContent="center" margin="auto" p={1}>
            <Stack spacing={3} pb={4}>
                <Stack direction="row" spacing={2.5} justifyContent="center">
                    <TitleText>Chess</TitleText>
                    <TitleText animationDelay={500}>Recap</TitleText>
                </Stack>
                <Typography variant="body1" px={2} fontSize="1.25rem">
                    Get your chess year-in-review and see how good (or bad) you
                    did...
                </Typography>
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
                            value={username}
                            onChange={handleUserNameChange}
                        />
                        <Button
                            variant="contained"
                            sx={{ minWidth: "140px" }}
                            disabled={!username}
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
