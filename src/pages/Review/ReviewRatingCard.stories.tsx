import {
    IconChessBishopFilled,
    IconChessFilled,
    IconChessRookFilled,
} from "@tabler/icons-react"
import ReviewRatingCard from "./ReviewRatingCard"

export default {
    component: ReviewRatingCard,
    title: "ReviewRatingCard",
    tags: ["autodocs"],
}

export const Bullet = {
    args: {
        icon: <IconChessFilled />,
        backgroundColor: "#6DB723",
        timeControl: "bullet",
        timeControlColor: "#C9F8EA",
        rating: 1533,
    },
}

export const Blitz = {
    args: {
        icon: <IconChessBishopFilled />,
        backgroundColor: "#0D5E47",
        timeControl: "bullet",
        timeControlColor: "#C9F8EA",
        rating: 1343,
    },
}

export const Rapid = {
    args: {
        icon: <IconChessRookFilled />,
        backgroundColor: "#0D5E47",
        timeControl: "bullet",
        timeControlColor: "#0D5E47",
        rating: 1661,
        bordered: true,
    },
}
