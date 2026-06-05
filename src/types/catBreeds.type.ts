export interface CatBreedData {
    current_page: number;
    data: CatBreed[];
}

export interface CatBreed {
    "breed": string,
    "country": string,
    "origin": string,
    "coat": string,
    "pattern": string
}