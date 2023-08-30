import { UserReportResponse } from "./types"

export const getUserReport = async (username: string, year: number) => {
    try {
        const response = await fetch(
            `${import.meta.env.VITE_BACKEND_API}/stats/${username}/${year}`,
            { mode: "cors" }
        )
        return (await response.json()) as Promise<UserReportResponse>
    } catch (err) {
        console.log(err)
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
