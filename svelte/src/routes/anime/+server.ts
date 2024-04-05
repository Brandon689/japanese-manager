import { json } from '@sveltejs/kit'

export interface Anime {
    name: string;
    id: number;
}

export function GET() {
    const a: Anime = {
        name: "H",
        id: 1,
    }
    return json(a)
}