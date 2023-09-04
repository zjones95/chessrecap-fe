import { DEFAULT_USER_REPORT, getUserReport } from "@app/api"
import { ROUTES } from "@app/routes"
import { UserReportResponse } from "@app/types"
import { useQuery } from "@tanstack/react-query"
import { ReactNode, createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

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
    const navigate = useNavigate()

    const userReportQuery = useQuery(
        ["userReport", username],
        () => getUserReport(username, 2022),
        {
            enabled: Boolean(username) && typeof username === "string",
            refetchOnWindowFocus: false,
            retry: false,
        }
    )

    useEffect(() => {
        if (userReportQuery.isError) {
            setUsername("")
            navigate(`${ROUTES.HOME}?error=404`)
        }
    }, [userReportQuery.isError, navigate])

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
