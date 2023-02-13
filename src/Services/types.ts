export interface categoryMappingType {
    [key: string]: string;
}

export interface FatsecretFood {
    food_id: string;
    food_name: string;
    food_type: FatsecretFoodType;
    food_url: string;
    brand_name?: string;
    food_description: string;
}
export enum FatsecretFoodType {
    Brand = 'Brand',
    Generic = 'Generic',
}
export interface FatsecretResponse {
    foods: {
        food: FatsecretFood[];
        max_results: number;
        total_results: number;
        page_number: number;
    };
}