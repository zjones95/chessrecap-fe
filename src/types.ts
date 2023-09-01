export type ColorMode = "light" | "dark"

export interface AverageRating {
    month: number
    averageRating: number
}

export interface HighestRatings {
    bullet: number
    blitz: number
    rapid: number
}

export interface HoursPlayed {
    month: number
    hoursPlayed: number
}

export interface CountItem {
    name: string
    count: number
}

export interface Opening extends CountItem {
    wins: number
}

export interface Opponent extends CountItem {
    rating: number
    wins: number
}

export interface Streaks {
    longestWinStreak: number
    longestLossStreak: number
}

export interface TotalGames {
    bullet: number
    blitz: number
    rapid: number
}

export interface UserReportResponse {
    averageRatings: AverageRating[]
    highestRatings: HighestRatings
    hoursPlayed: HoursPlayed[]
    totalGames: TotalGames
    openings: Opening[]
    streaks: Streaks
    opponents: Opponent[]
}

export interface ApiError {
    message?: string
    status?: number
}
