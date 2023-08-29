import { ReactNode, createContext, useEffect, useState } from "react"

export type MonthStatus = "processing" | "complete" | "error" | "unprocessed"

export interface ProcessingState {
    month: number
    status: MonthStatus
}

interface ReviewValues {
    months: ProcessingState[]
    reportProcessed: boolean
}

const DEFAULT_REVIEW_VALUES: ReviewValues = {
    months: Array.from(Array(12)).map((_, i) => ({
        month: i,
        status: "unprocessed",
    })),
    reportProcessed: false,
}

export const ReviewContext = createContext(DEFAULT_REVIEW_VALUES)

export const ReviewProvider = ({ children }: { children: ReactNode }) => {
    const [months, setMonths] = useState<ProcessingState[]>(
        DEFAULT_REVIEW_VALUES.months
    )
    const [reportProcessed, setReportProcessed] = useState<boolean>(
        DEFAULT_REVIEW_VALUES.reportProcessed
    )

    const monthsProcessed = months.filter(
        (month) => month.status !== "unprocessed"
    ).length

    useEffect(() => {
        const interval = setInterval(() => {
            if (monthsProcessed < 12) {
                setMonths((prev) => {
                    const newMonths = [...prev]
                    newMonths[monthsProcessed] = {
                        month: monthsProcessed,
                        status: "complete",
                    }

                    return newMonths
                })
            }
        }, 0)

        if (monthsProcessed === 12) {
            setTimeout(() => {
                setReportProcessed(true)
            }, 500)

            clearInterval(interval)
        }

        return () => clearInterval(interval)
    }, [monthsProcessed])

    return (
        <ReviewContext.Provider
            value={{
                months,
                reportProcessed,
            }}
        >
            {children}
        </ReviewContext.Provider>
    )
}
