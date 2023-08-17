export const ROUTES: { [key: string]: string | ((id: string) => string) } = {
    HOME: "/",
    ABOUT: "/about",
    reviewById: (id: string) => `/review/${id}`,
}
