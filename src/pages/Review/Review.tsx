import { Box, Stack, Typography } from "@mui/material"
import { useParams } from "react-router-dom"
import Processing from "../../components/Processing"
import ReviewTitle from "./ReviewTitle"
import LineChart from "../../components/Chart/LineChart"
import { useColorModeProvider } from "../../hooks/useColorModeProvider"

const Review = () => {
    const { username } = useParams()
    console.log({ username })

    const { colorMode } = useColorModeProvider()

    const reportIsProcessing = false

    if (reportIsProcessing) {
        return <Processing />
    }

    return (
        <Stack spacing={8} width="100%" my={8} alignItems="center">
            <ReviewTitle />
            {/* <Box
                width="100%"
                maxWidth={1300}
                height={400}
                bgcolor="background.paper"
                borderRadius={1}
            /> */}
            <Stack
                maxWidth={1300}
                width="100%"
                minHeight={400}
                bgcolor="background.paper"
                borderRadius={1}
                alignItems="center"
                justifyContent="center"
                direction={{ xs: "column", md: "row" }}
                spacing={6}
                p={4}
            >
                <Stack spacing={1.5}>
                    <Typography variant="h3" fontSize="1.5rem" color="#C9F8EA">
                        Average Rating in 2022
                    </Typography>
                    <Typography
                        variant="h3"
                        fontSize="5rem"
                        color="common.white"
                    >
                        1632
                    </Typography>
                </Stack>
                <LineChart
                    data={[
                        1182, 1232, 1211, 1312, 1346, 1534, 1422, 1189, 1433,
                        1476, 1592, 1655,
                    ]}
                    colors={{
                        gradient:
                            colorMode === "light"
                                ? {
                                      top: "rgba(13, 94, 71, 0.4)",
                                      bottom: "rgba(13, 94, 71, 0.05)",
                                  }
                                : {
                                      top: "rgba(13, 94, 71, 0.2)",
                                      bottom: "rgba(13, 94, 71, 0.05)",
                                  },
                        points: colorMode === "dark" ? "#F6FEFC" : "#0D5E47",
                        line: colorMode === "dark" ? "#F6FEFC" : "#0D5E47",
                    }}
                    label="Rating"
                    colorMode={colorMode}
                />
            </Stack>
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
