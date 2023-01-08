import { type section } from "../types/types"

export const toSingular  = (work: section)  : string => {
    const lastLetter = work.slice(-1)
    if (lastLetter === "s") {
        return work.slice(0, -1)
    }
    return work
} 