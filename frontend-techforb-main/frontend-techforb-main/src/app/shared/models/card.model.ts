export interface Card {
    name: string
    number: number
    expirationDate: string
    securityCode: number
    user?: UserCard
}

export interface UserCard {
    id: number
}