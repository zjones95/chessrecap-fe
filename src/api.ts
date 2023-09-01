import axios from "axios"
import { UserReportResponse } from "./types"

export const DEFAULT_USER_REPORT: UserReportResponse = {
    averageRatings: Array.from(Array(12)).map((_, i) => ({
        month: i,
        averageRating: 0,
    })),
    highestRatings: {
        bullet: 0,
        blitz: 0,
        rapid: 0,
    },
    hoursPlayed: Array.from(Array(12)).map((_, i) => ({
        month: i,
        hoursPlayed: 0,
    })),
    totalGames: {
        bullet: 0,
        blitz: 0,
        rapid: 0,
    },
    openings: [
        {
            name: "",
            count: 0,
            wins: 0,
        },
    ],
    streaks: {
        longestWinStreak: 0,
        longestLossStreak: 0,
    },
    opponents: [
        {
            name: "",
            count: 0,
            rating: 0,
            wins: 0,
        },
    ],
}

export const getUserReport = async (username: string, year: number) => {
    try {
        const response = await axios.get(
            `${import.meta.env.VITE_BACKEND_API}/stats/${username}/${year}`,
            { timeout: 45000 }
        )

        return response.data
    } catch (err) {
        console.log(err)
        return DEFAULT_USER_REPORT
    }
}

export const getUserExists = async (username: string) => {
    try {
        return await fetch(
            `${import.meta.env.VITE_APP_CHESS_COM_API}/player/${username}`
        )
    } catch (err) {
        console.log(err)
    }
}
