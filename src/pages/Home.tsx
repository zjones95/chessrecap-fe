import { Button, Stack, TextField, Typography } from "@mui/material"

const Home = () => {
    return (
        <Stack alignItems="center" justifyContent="center" margin="auto" p={1}>
            <Stack spacing={3} pb={4}>
                <Typography
                    variant="h1"
                    fontSize="5rem"
                    sx={{
                        background: (theme) =>
                            `linear-gradient(270deg, ${theme.palette.text.primary} 0%, ${theme.palette.primary.main} 100%)`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    Chess Recap
                </Typography>
                <Typography variant="body1" px={2} fontSize="1.25rem">
                    Get your chess year-in-review and see how good (or bad) you
                    did...
                </Typography>
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
                    />
                    <Button variant="contained" sx={{ minWidth: "140px" }}>
                        Let's Go!
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Home
