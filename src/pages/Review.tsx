import { Stack } from "@mui/material"
import { useParams } from "react-router-dom"
import Processing from "../components/Processing"

const Review = () => {
    const { username } = useParams()

    const reportIsProcessing = true

    if (reportIsProcessing) {
        return <Processing />
    }

    return (
        <Stack spacing={8} width="100%">
            {username}
        </Stack>
    )
}

export default Review
