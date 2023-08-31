import { getUserReport } from "@app/api"
import { UserReportResponse } from "@app/types"
import { useQuery } from "@tanstack/react-query"
import { ReactNode, createContext, useState } from "react"

export type MonthStatus = "processing" | "complete" | "error" | "unprocessed"

export interface ProcessingState {
    month: number
    status: MonthStatus
}

interface ReviewValues {
    months: ProcessingState[]
    reportProcessed: boolean
    username: string
    getReport: (username: string) => void
    userReport: UserReportResponse
    userReportLoading: boolean
}

const DEFAULT_USER_REPORT: UserReportResponse = {
    averageRatings: [
        {
            month: 0,
            averageRating: 0,
        },
    ],
    highestRatings: {
        bullet: 0,
        blitz: 0,
        rapid: 0,
    },
    hoursPlayed: [
        {
            month: 0,
            hoursPlayed: 0,
        },
    ],
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

const DEFAULT_REVIEW_VALUES: ReviewValues = {
    months: Array.from(Array(12)).map((_, i) => ({
        month: i,
        status: "unprocessed",
    })),
    reportProcessed: true,
    username: "",
    getReport: () => {},
    userReport: DEFAULT_USER_REPORT,
    userReportLoading: true,
}

export const ReviewContext = createContext(DEFAULT_REVIEW_VALUES)

export const ReviewProvider = ({ children }: { children: ReactNode }) => {
    const [username, setUsername] = useState<string>("")
    const [months] = useState<ProcessingState[]>(DEFAULT_REVIEW_VALUES.months)
    const [reportProcessed] = useState<boolean>(
        DEFAULT_REVIEW_VALUES.reportProcessed
    )

    const userReportQuery = useQuery(
        ["userReport", username],
        () => getUserReport(username, 2022),
        {
            enabled: Boolean(username) && typeof username === "string",
            refetchOnWindowFocus: false,
        }
    )

    const getReport = (newUsername: string) => {
        if (newUsername && username !== newUsername) {
            setUsername(newUsername)
        }
    }

    return (
        <ReviewContext.Provider
            value={{
                months,
                reportProcessed,
                username,
                getReport,
                userReport: userReportQuery.data ?? DEFAULT_USER_REPORT,
                userReportLoading: userReportQuery.isLoading,
            }}
        >
            {children}
        </ReviewContext.Provider>
    )
}
