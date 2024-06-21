export interface Name {
    en: string;
    fr: string;
    jp: string;
}

export interface Sprites {
    gmax: any;
    regular: string;
    shiny: string;
}

export interface Talents {
    name: string;
    tc: boolean;
}

export interface Stats {
    atk: number;
    def: number;
    hp: number;
    spe_atk: number;
    spe_def: number;
    vit: number;
}

export interface Types {
    name: string;
    image: string;
}

export interface Pokemon {
    pokedex_id: string;
    name: Name;
    category: string;
    types: Types[];
    talents: Talents[];
    sprites: Sprites;
    stats: Stats;
}