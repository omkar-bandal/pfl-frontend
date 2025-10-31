export type PostUOM = {
    unit: string,
    abbreviation: string,
    description: string,
}

export type GetUOM = {id: string} & PostUOM;