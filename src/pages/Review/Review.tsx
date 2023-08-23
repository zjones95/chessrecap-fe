import { Box, Stack } from "@mui/material"
import { useParams } from "react-router-dom"
import Processing from "../../components/Processing"
import ReviewTitle from "./ReviewTitle"

const Review = () => {
    const { username } = useParams()
    console.log({ username })

    const reportIsProcessing = false

    if (reportIsProcessing) {
        return <Processing />
    }

    return (
        <Stack spacing={8} width="100%" my={8} alignItems="center">
            <ReviewTitle />
            <Box
                width="100%"
                maxWidth={1300}
                height={400}
                bgcolor="background.paper"
                borderRadius={1}
            />
            <Stack
                direction="row"
                width="100%"
                maxWidth={1300}
                spacing={2.5}
                justifyContent="center"
                height={400}
            >
                <Box width={420} bgcolor="secondary.main" borderRadius={1} />
                <Box width={420} bgcolor="primary.main" borderRadius={1} />
                <Box
                    width={420}
                    bgcolor="transparent"
                    borderRadius={1}
                    border="4px solid"
                    borderColor="primary.main"
                />
            </Stack>
            <Box
                width="100%"
                maxWidth={1300}
                height={400}
                bgcolor="transparent"
                borderRadius={1}
                border="4px solid"
                borderColor="secondary.main"
            />
            <Box height={500} width="100%" bgcolor="background.paper" />
            <Stack
                direction="row"
                bgcolor="secondary.main"
                width="100%"
                maxWidth={1300}
                height={400}
                borderRadius={1}
                overflow="hidden"
            >
                <Box flex={1} />
                <Box flex={1} bgcolor="error.main" />
            </Stack>
            <Stack
                height={560}
                width="100%"
                maxWidth={1300}
                border="8px solid"
                borderRadius={1}
                justifyContent="center"
                color="primary.main"
                fontSize="3rem"
            >
                Most Played Opponents Table
            </Stack>
            <Box height={950} width="100%" bgcolor="background.paper" />
            <Stack
                height={560}
                width="100%"
                maxWidth={1300}
                border="8px solid"
                borderRadius={1}
                justifyContent="center"
                color="primary.main"
                fontSize="3rem"
            >
                Share Input
            </Stack>
        </Stack>
    )
}

export default Review
