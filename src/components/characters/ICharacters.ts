export interface ICharacters {
    id: string,
    name: string,
    modified: Date,
    description: string,
    thumbnail: {
        path: string,
        extension: string
    }

}