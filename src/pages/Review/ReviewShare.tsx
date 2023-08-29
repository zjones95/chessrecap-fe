import {
    Alert,
    Button,
    Snackbar,
    Stack,
    TextField,
    Typography,
} from "@mui/material"
import { useInView, animated } from "@react-spring/web"
import { IconClipboardCopy } from "@tabler/icons-react"
import { useRef, useState } from "react"
import { useParams } from "react-router-dom"

const ReviewShare = () => {
    const { username } = useParams()
    const copyInputRef = useRef<HTMLInputElement | null>(null)
    const [showCopySuccess, setShowCopySuccess] = useState(false)

    const handleCopy = () => {
        if (!copyInputRef.current) return

        copyInputRef.current.select()
        navigator.clipboard.writeText(copyInputRef.current.value)
        if (!showCopySuccess) setShowCopySuccess(true)
    }

    const handleCopyClose = () => {
        setShowCopySuccess(false)
    }

    const [ref, springs] = useInView(
        () => ({
            from: {
                opacity: 0,
                y: 50,
            },
            to: {
                opacity: 1,
                y: 0,
                delay: 200,
            },
        }),
        { once: true }
    )

    return (
        <>
            <Snackbar
                open={showCopySuccess}
                title="Hi"
                autoHideDuration={4000}
                onClose={handleCopyClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
                <Alert severity="success">Copied to clipboard</Alert>
            </Snackbar>
            <Stack
                minHeight={560}
                alignItems="center"
                justifyContent="center"
                spacing={4}
                px={{ xs: 2, lg: 0 }}
            >
                <animated.div ref={ref} style={springs}>
                    <Typography fontSize={{ xs: "3rem", lg: "4rem" }}>
                        Share with your friends
                    </Typography>
                </animated.div>
                <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                    width="100%"
                >
                    <TextField
                        value={`https://chessrecap.com/r/${username}`}
                        inputProps={{
                            ref: copyInputRef,
                            onClick: (event) =>
                                (event.target as HTMLInputElement).select(),
                            sx: {
                                textAlign: "center",
                            },
                        }}
                        sx={{
                            width: { xs: "100%", lg: 500 },
                            userSelect: "none",
                            "& .MuiInputBase-root": {
                                height: 64,
                                fontSize: { xs: "1rem", lg: "1.5rem" },
                            },
                        }}
                    />
                    <Button
                        variant="contained"
                        onClick={handleCopy}
                        sx={{ height: 64, width: 64 }}
                    >
                        <IconClipboardCopy size={48} />
                    </Button>
                </Stack>
            </Stack>
        </>
    )
}

export default ReviewShare
