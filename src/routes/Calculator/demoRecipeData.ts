
interface ItemType {
    id: number;
    title: string;
    weight: number;
    calories?: number;
    totalWeight: number;
    dietLabels: string[];
    healthLabels: string[];
    cautions: string[];
    totalNutrients: any;
    totalDaily: any;
    ingredients: any;
    totalNutrientsKCal: any;
    
}

export const demoRecipeData: ItemType[] = [
    {
        id: 1,
        title: "Sugar",
        weight: 150,
        calories: 580,
        totalWeight: 150,
        dietLabels: ["LOW_FAT", "LOW_SODIUM"],
        healthLabels: [
            "FAT_FREE",
            "LOW_FAT_ABS",
            "LOW_POTASSIUM",
            "KIDNEY_FRIENDLY",
            "VEGAN",
            "VEGETARIAN",
            "PESCATARIAN",
            "DAIRY_FREE",
            "GLUTEN_FREE",
            "WHEAT_FREE",
            "EGG_FREE",
            "MILK_FREE",
            "PEANUT_FREE",
            "TREE_NUT_FREE",
            "SOY_FREE",
            "FISH_FREE",
            "SHELLFISH_FREE",
            "PORK_FREE",
            "RED_MEAT_FREE",
            "CRUSTACEAN_FREE",
            "CELERY_FREE",
            "MUSTARD_FREE",
            "SESAME_FREE",
            "LUPINE_FREE",
            "MOLLUSK_FREE",
            "ALCOHOL_FREE",
            "NO_OIL_ADDED",
            "FODMAP_FREE",
            "KOSHER",
        ],
        cautions: [],
        totalNutrients: {
            ENERC_KCAL: {
                label: "Energy",
                quantity: 580.5,
                unit: "kcal",
            },
            FAT: {
                label: "Total lipid (fat)",
                quantity: 0,
                unit: "g",
            },
            FASAT: {
                label: "Fatty acids, total saturated",
                quantity: 0,
                unit: "g",
            },
            FAMS: {
                label: "Fatty acids, total monounsaturated",
                quantity: 0,
                unit: "g",
            },
            FAPU: {
                label: "Fatty acids, total polyunsaturated",
                quantity: 0,
                unit: "g",
            },
            CHOCDF: {
                label: "Carbohydrate, by difference",
                quantity: 149.97,
                unit: "g",
            },
            "CHOCDF.net": {
                label: "Carbohydrates (net)",
                quantity: 149.97,
                unit: "g",
            },
            FIBTG: {
                label: "Fiber, total dietary",
                quantity: 0,
                unit: "g",
            },
            SUGAR: {
                label: "Sugars, total",
                quantity: 149.7,
                unit: "g",
            },
            "SUGAR.added": {
                label: "Sugars, added",
                quantity: 149.7,
                unit: "g",
            },
            PROCNT: {
                label: "Protein",
                quantity: 0,
                unit: "g",
            },
            CHOLE: {
                label: "Cholesterol",
                quantity: 0,
                unit: "mg",
            },
            NA: {
                label: "Sodium, Na",
                quantity: 1.5,
                unit: "mg",
            },
            CA: {
                label: "Calcium, Ca",
                quantity: 1.5,
                unit: "mg",
            },
            MG: {
                label: "Magnesium, Mg",
                quantity: 0,
                unit: "mg",
            },
            K: {
                label: "Potassium, K",
                quantity: 3,
                unit: "mg",
            },
            FE: {
                label: "Iron, Fe",
                quantity: 0.07500000000000001,
                unit: "mg",
            },
            ZN: {
                label: "Zinc, Zn",
                quantity: 0.015,
                unit: "mg",
            },
            P: {
                label: "Phosphorus, P",
                quantity: 0,
                unit: "mg",
            },
            VITA_RAE: {
                label: "Vitamin A, RAE",
                quantity: 0,
                unit: "µg",
            },
            VITC: {
                label: "Vitamin C, total ascorbic acid",
                quantity: 0,
                unit: "mg",
            },
            THIA: {
                label: "Thiamin",
                quantity: 0,
                unit: "mg",
            },
            RIBF: {
                label: "Riboflavin",
                quantity: 0.028499999999999998,
                unit: "mg",
            },
            NIA: {
                label: "Niacin",
                quantity: 0,
                unit: "mg",
            },
            VITB6A: {
                label: "Vitamin B-6",
                quantity: 0,
                unit: "mg",
            },
            FOLDFE: {
                label: "Folate, DFE",
                quantity: 0,
                unit: "µg",
            },
            FOLFD: {
                label: "Folate, food",
                quantity: 0,
                unit: "µg",
            },
            FOLAC: {
                label: "Folic acid",
                quantity: 0,
                unit: "µg",
            },
            VITB12: {
                label: "Vitamin B-12",
                quantity: 0,
                unit: "µg",
            },
            VITD: {
                label: "Vitamin D (D2 + D3)",
                quantity: 0,
                unit: "µg",
            },
            TOCPHA: {
                label: "Vitamin E (alpha-tocopherol)",
                quantity: 0,
                unit: "mg",
            },
            VITK1: {
                label: "Vitamin K (phylloquinone)",
                quantity: 0,
                unit: "µg",
            },
            WATER: {
                label: "Water",
                quantity: 0.03,
                unit: "g",
            },
        },
        totalDaily: {
            ENERC_KCAL: {
                label: "Energy",
                quantity: 29.025,
                unit: "%",
            },
            FAT: {
                label: "Fat",
                quantity: 0,
                unit: "%",
            },
            FASAT: {
                label: "Saturated",
                quantity: 0,
                unit: "%",
            },
            CHOCDF: {
                label: "Carbs",
                quantity: 49.99,
                unit: "%",
            },
            FIBTG: {
                label: "Fiber",
                quantity: 0,
                unit: "%",
            },
            PROCNT: {
                label: "Protein",
                quantity: 0,
                unit: "%",
            },
            CHOLE: {
                label: "Cholesterol",
                quantity: 0,
                unit: "%",
            },
            NA: {
                label: "Sodium",
                quantity: 0.0625,
                unit: "%",
            },
            CA: {
                label: "Calcium",
                quantity: 0.15,
                unit: "%",
            },
            MG: {
                label: "Magnesium",
                quantity: 0,
                unit: "%",
            },
            K: {
                label: "Potassium",
                quantity: 0.06382978723404255,
                unit: "%",
            },
            FE: {
                label: "Iron",
                quantity: 0.41666666666666674,
                unit: "%",
            },
            ZN: {
                label: "Zinc",
                quantity: 0.13636363636363635,
                unit: "%",
            },
            P: {
                label: "Phosphorus",
                quantity: 0,
                unit: "%",
            },
            VITA_RAE: {
                label: "Vitamin A",
                quantity: 0,
                unit: "%",
            },
            VITC: {
                label: "Vitamin C",
                quantity: 0,
                unit: "%",
            },
            THIA: {
                label: "Thiamin (B1)",
                quantity: 0,
                unit: "%",
            },
            RIBF: {
                label: "Riboflavin (B2)",
                quantity: 2.192307692307692,
                unit: "%",
            },
            NIA: {
                label: "Niacin (B3)",
                quantity: 0,
                unit: "%",
            },
            VITB6A: {
                label: "Vitamin B6",
                quantity: 0,
                unit: "%",
            },
            FOLDFE: {
                label: "Folate equivalent (total)",
                quantity: 0,
                unit: "%",
            },
            VITB12: {
                label: "Vitamin B12",
                quantity: 0,
                unit: "%",
            },
            VITD: {
                label: "Vitamin D",
                quantity: 0,
                unit: "%",
            },
            TOCPHA: {
                label: "Vitamin E",
                quantity: 0,
                unit: "%",
            },
            VITK1: {
                label: "Vitamin K",
                quantity: 0,
                unit: "%",
            },
        },
        ingredients: [
            {
                text: "150g Sugar",
                parsed: [
                    {
                        quantity: 150,
                        measure: "gram",
                        foodMatch: "Sugar",
                        food: "sugar",
                        foodId: "food_axi2ijobrk819yb0adceobnhm1c2",
                        weight: 150,
                        retainedWeight: 150,
                        nutrients: {
                            RIBF: {
                                label: "Riboflavin",
                                quantity: 0.0285,
                                unit: "mg",
                            },
                            VITD: {
                                label: "Vitamin D",
                                quantity: 0,
                                unit: "IU",
                            },
                            THIA: {
                                label: "Thiamin",
                                quantity: 0,
                                unit: "mg",
                            },
                            FAPU: {
                                label: "Fatty acids, total polyunsaturated",
                                quantity: 0,
                                unit: "g",
                            },
                            NIA: {
                                label: "Niacin",
                                quantity: 0,
                                unit: "mg",
                            },
                            ENERC_KCAL: {
                                label: "Energy",
                                quantity: 580.5,
                                unit: "kcal",
                            },
                            FASAT: {
                                label: "Fatty acids, total saturated",
                                quantity: 0,
                                unit: "g",
                            },
                            VITA_RAE: {
                                label: "Vitamin A, RAE",
                                quantity: 0,
                                unit: "µg",
                            },
                            VITC: {
                                label: "Vitamin C, total ascorbic acid",
                                quantity: 0,
                                unit: "mg",
                            },
                            PROCNT: {
                                label: "Protein",
                                quantity: 0,
                                unit: "g",
                            },
                            TOCPHA: {
                                label: "Vitamin E (alpha-tocopherol)",
                                quantity: 0,
                                unit: "mg",
                            },
                            CHOLE: {
                                label: "Cholesterol",
                                quantity: 0,
                                unit: "mg",
                            },
                            FAMS: {
                                label: "Fatty acids, total monounsaturated",
                                quantity: 0,
                                unit: "g",
                            },
                            CHOCDF: {
                                label: "Carbohydrate, by difference",
                                quantity: 149.97,
                                unit: "g",
                            },
                            FAT: {
                                label: "Total lipid (fat)",
                                quantity: 0,
                                unit: "g",
                            },
                            VITB6A: {
                                label: "Vitamin B-6",
                                quantity: 0,
                                unit: "mg",
                            },
                            VITB12: {
                                label: "Vitamin B-12",
                                quantity: 0,
                                unit: "µg",
                            },
                            "SUGAR.added": {
                                label: "Sugars, added",
                                quantity: 149.7,
                                unit: "g",
                            },
                            FIBTG: {
                                label: "Fiber, total dietary",
                                quantity: 0,
                                unit: "g",
                            },
                            WATER: {
                                label: "Water",
                                quantity: 0.03,
                                unit: "g",
                            },
                            K: {
                                label: "Potassium, K",
                                quantity: 3,
                                unit: "mg",
                            },
                            P: {
                                label: "Phosphorus, P",
                                quantity: 0,
                                unit: "mg",
                            },
                            NA: {
                                label: "Sodium, Na",
                                quantity: 1.5,
                                unit: "mg",
                            },
                            ZN: {
                                label: "Zinc, Zn",
                                quantity: 0.015,
                                unit: "mg",
                            },
                            SUGAR: {
                                label: "Sugars, total",
                                quantity: 149.7,
                                unit: "g",
                            },
                            CA: {
                                label: "Calcium, Ca",
                                quantity: 1.5,
                                unit: "mg",
                            },
                            MG: {
                                label: "Magnesium, Mg",
                                quantity: 0,
                                unit: "mg",
                            },
                            FE: {
                                label: "Iron, Fe",
                                quantity: 0.075,
                                unit: "mg",
                            },
                            VITK1: {
                                label: "Vitamin K (phylloquinone)",
                                quantity: 0,
                                unit: "µg",
                            },
                            FOLFD: {
                                label: "Folate, food",
                                quantity: 0,
                                unit: "µg",
                            },
                            FOLAC: {
                                label: "Folic acid",
                                quantity: 0,
                                unit: "µg",
                            },
                            FOLDFE: {
                                label: "Folate, DFE",
                                quantity: 0,
                                unit: "µg",
                            },
                        },
                        measureURI:
                            "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
                        status: "OK",
                    },
                ],
            },
        ],
        totalNutrientsKCal: {
            ENERC_KCAL: {
                label: "Energy",
                quantity: 581,
                unit: "kcal",
            },
            PROCNT_KCAL: {
                label: "Calories from protein",
                quantity: 0,
                unit: "kcal",
            },
            FAT_KCAL: {
                label: "Calories from fat",
                quantity: 0,
                unit: "kcal",
            },
            CHOCDF_KCAL: {
                label: "Calories from carbohydrates",
                quantity: 581,
                unit: "kcal",
            },
        },
    },
    {
        id: 2,
        title: "Eggs",
        weight: 220,
        calories: 314,
        totalWeight: 220,
        dietLabels: ["LOW_CARB", "LOW_SODIUM"],
        healthLabels: [
            "SUGAR_CONSCIOUS",
            "LOW_POTASSIUM",
            "KIDNEY_FRIENDLY",
            "KETO_FRIENDLY",
            "VEGETARIAN",
            "PESCATARIAN",
            "PALEO",
            "SPECIFIC_CARBS",
            "MEDITERRANEAN",
            "DAIRY_FREE",
            "GLUTEN_FREE",
            "WHEAT_FREE",
            "MILK_FREE",
            "PEANUT_FREE",
            "TREE_NUT_FREE",
            "SOY_FREE",
            "FISH_FREE",
            "SHELLFISH_FREE",
            "PORK_FREE",
            "RED_MEAT_FREE",
            "CRUSTACEAN_FREE",
            "CELERY_FREE",
            "MUSTARD_FREE",
            "SESAME_FREE",
            "LUPINE_FREE",
            "MOLLUSK_FREE",
            "ALCOHOL_FREE",
            "NO_OIL_ADDED",
            "NO_SUGAR_ADDED",
            "SULPHITE_FREE",
            "FODMAP_FREE",
            "KOSHER",
        ],
        cautions: [],
        totalNutrients: {
            ENERC_KCAL: {
                label: "Energy",
                quantity: 314.6,
                unit: "kcal",
            },
            FAT: {
                label: "Total lipid (fat)",
                quantity: 20.922,
                unit: "g",
            },
            FASAT: {
                label: "Fatty acids, total saturated",
                quantity: 6.8772,
                unit: "g",
            },
            FATRN: {
                label: "Fatty acids, total trans",
                quantity: 0.08360000000000001,
                unit: "g",
            },
            FAMS: {
                label: "Fatty acids, total monounsaturated",
                quantity: 8.047600000000001,
                unit: "g",
            },
            FAPU: {
                label: "Fatty acids, total polyunsaturated",
                quantity: 4.2042,
                unit: "g",
            },
            CHOCDF: {
                label: "Carbohydrate, by difference",
                quantity: 1.584,
                unit: "g",
            },
            "CHOCDF.net": {
                label: "Carbohydrates (net)",
                quantity: 1.584,
                unit: "g",
            },
            FIBTG: {
                label: "Fiber, total dietary",
                quantity: 0,
                unit: "g",
            },
            SUGAR: {
                label: "Sugars, total",
                quantity: 0.8140000000000001,
                unit: "g",
            },
            PROCNT: {
                label: "Protein",
                quantity: 27.632000000000005,
                unit: "g",
            },
            CHOLE: {
                label: "Cholesterol",
                quantity: 818.4000000000001,
                unit: "mg",
            },
            NA: {
                label: "Sodium, Na",
                quantity: 312.40000000000003,
                unit: "mg",
            },
            CA: {
                label: "Calcium, Ca",
                quantity: 123.20000000000002,
                unit: "mg",
            },
            MG: {
                label: "Magnesium, Mg",
                quantity: 26.400000000000002,
                unit: "mg",
            },
            K: {
                label: "Potassium, K",
                quantity: 303.6,
                unit: "mg",
            },
            FE: {
                label: "Iron, Fe",
                quantity: 3.8500000000000005,
                unit: "mg",
            },
            ZN: {
                label: "Zinc, Zn",
                quantity: 2.8380000000000005,
                unit: "mg",
            },
            P: {
                label: "Phosphorus, P",
                quantity: 435.6,
                unit: "mg",
            },
            VITA_RAE: {
                label: "Vitamin A, RAE",
                quantity: 352,
                unit: "µg",
            },
            VITC: {
                label: "Vitamin C, total ascorbic acid",
                quantity: 0,
                unit: "mg",
            },
            THIA: {
                label: "Thiamin",
                quantity: 0.08800000000000001,
                unit: "mg",
            },
            RIBF: {
                label: "Riboflavin",
                quantity: 1.0054,
                unit: "mg",
            },
            NIA: {
                label: "Niacin",
                quantity: 0.165,
                unit: "mg",
            },
            VITB6A: {
                label: "Vitamin B-6",
                quantity: 0.37400000000000005,
                unit: "mg",
            },
            FOLDFE: {
                label: "Folate, DFE",
                quantity: 103.4,
                unit: "µg",
            },
            FOLFD: {
                label: "Folate, food",
                quantity: 103.4,
                unit: "µg",
            },
            FOLAC: {
                label: "Folic acid",
                quantity: 0,
                unit: "µg",
            },
            VITB12: {
                label: "Vitamin B-12",
                quantity: 1.9580000000000002,
                unit: "µg",
            },
            VITD: {
                label: "Vitamin D (D2 + D3)",
                quantity: 4.4,
                unit: "µg",
            },
            TOCPHA: {
                label: "Vitamin E (alpha-tocopherol)",
                quantity: 2.3100000000000005,
                unit: "mg",
            },
            VITK1: {
                label: "Vitamin K (phylloquinone)",
                quantity: 0.66,
                unit: "µg",
            },
            WATER: {
                label: "Water",
                quantity: 167.53000000000003,
                unit: "g",
            },
        },
        totalDaily: {
            ENERC_KCAL: {
                label: "Energy",
                quantity: 15.730000000000002,
                unit: "%",
            },
            FAT: {
                label: "Fat",
                quantity: 32.18769230769231,
                unit: "%",
            },
            FASAT: {
                label: "Saturated",
                quantity: 34.386,
                unit: "%",
            },
            CHOCDF: {
                label: "Carbs",
                quantity: 0.528,
                unit: "%",
            },
            FIBTG: {
                label: "Fiber",
                quantity: 0,
                unit: "%",
            },
            PROCNT: {
                label: "Protein",
                quantity: 55.26400000000002,
                unit: "%",
            },
            CHOLE: {
                label: "Cholesterol",
                quantity: 272.80000000000007,
                unit: "%",
            },
            NA: {
                label: "Sodium",
                quantity: 13.016666666666667,
                unit: "%",
            },
            CA: {
                label: "Calcium",
                quantity: 12.320000000000002,
                unit: "%",
            },
            MG: {
                label: "Magnesium",
                quantity: 6.285714285714286,
                unit: "%",
            },
            K: {
                label: "Potassium",
                quantity: 6.4595744680851075,
                unit: "%",
            },
            FE: {
                label: "Iron",
                quantity: 21.388888888888893,
                unit: "%",
            },
            ZN: {
                label: "Zinc",
                quantity: 25.800000000000008,
                unit: "%",
            },
            P: {
                label: "Phosphorus",
                quantity: 62.22857142857143,
                unit: "%",
            },
            VITA_RAE: {
                label: "Vitamin A",
                quantity: 39.111111111111114,
                unit: "%",
            },
            VITC: {
                label: "Vitamin C",
                quantity: 0,
                unit: "%",
            },
            THIA: {
                label: "Thiamin (B1)",
                quantity: 7.333333333333334,
                unit: "%",
            },
            RIBF: {
                label: "Riboflavin (B2)",
                quantity: 77.33846153846154,
                unit: "%",
            },
            NIA: {
                label: "Niacin (B3)",
                quantity: 1.03125,
                unit: "%",
            },
            VITB6A: {
                label: "Vitamin B6",
                quantity: 28.769230769230774,
                unit: "%",
            },
            FOLDFE: {
                label: "Folate equivalent (total)",
                quantity: 25.85,
                unit: "%",
            },
            VITB12: {
                label: "Vitamin B12",
                quantity: 81.58333333333334,
                unit: "%",
            },
            VITD: {
                label: "Vitamin D",
                quantity: 29.333333333333336,
                unit: "%",
            },
            TOCPHA: {
                label: "Vitamin E",
                quantity: 15.400000000000004,
                unit: "%",
            },
            VITK1: {
                label: "Vitamin K",
                quantity: 0.55,
                unit: "%",
            },
        },
        ingredients: [
            {
                text: "220g Eggs",
                parsed: [
                    {
                        quantity: 220,
                        measure: "gram",
                        foodMatch: "Eggs",
                        food: "egg",
                        foodId: "food_bhpradua77pk16aipcvzeayg732r",
                        weight: 220,
                        retainedWeight: 220,
                        nutrients: {
                            VITD: {
                                label: "Vitamin D",
                                quantity: 180.4,
                                unit: "IU",
                            },
                            FATRN: {
                                label: "Fatty acids, total trans",
                                quantity: 0.0836,
                                unit: "g",
                            },
                            ENERC_KCAL: {
                                label: "Energy",
                                quantity: 314.6,
                                unit: "kcal",
                            },
                            FASAT: {
                                label: "Fatty acids, total saturated",
                                quantity: 6.8772,
                                unit: "g",
                            },
                            VITA_RAE: {
                                label: "Vitamin A, RAE",
                                quantity: 352,
                                unit: "µg",
                            },
                            PROCNT: {
                                label: "Protein",
                                quantity: 27.632,
                                unit: "g",
                            },
                            TOCPHA: {
                                label: "Vitamin E (alpha-tocopherol)",
                                quantity: 2.31,
                                unit: "mg",
                            },
                            CHOLE: {
                                label: "Cholesterol",
                                quantity: 818.4,
                                unit: "mg",
                            },
                            CHOCDF: {
                                label: "Carbohydrate, by difference",
                                quantity: 1.584,
                                unit: "g",
                            },
                            FAT: {
                                label: "Total lipid (fat)",
                                quantity: 20.921999999999997,
                                unit: "g",
                            },
                            FIBTG: {
                                label: "Fiber, total dietary",
                                quantity: 0,
                                unit: "g",
                            },
                            RIBF: {
                                label: "Riboflavin",
                                quantity: 1.0054,
                                unit: "mg",
                            },
                            THIA: {
                                label: "Thiamin",
                                quantity: 0.08800000000000001,
                                unit: "mg",
                            },
                            FAPU: {
                                label: "Fatty acids, total polyunsaturated",
                                quantity: 4.2042,
                                unit: "g",
                            },
                            NIA: {
                                label: "Niacin",
                                quantity: 0.165,
                                unit: "mg",
                            },
                            VITC: {
                                label: "Vitamin C, total ascorbic acid",
                                quantity: 0,
                                unit: "mg",
                            },
                            FAMS: {
                                label: "Fatty acids, total monounsaturated",
                                quantity: 8.0476,
                                unit: "g",
                            },
                            VITB6A: {
                                label: "Vitamin B-6",
                                quantity: 0.37400000000000005,
                                unit: "mg",
                            },
                            VITB12: {
                                label: "Vitamin B-12",
                                quantity: 1.9580000000000002,
                                unit: "µg",
                            },
                            WATER: {
                                label: "Water",
                                quantity: 167.53,
                                unit: "g",
                            },
                            K: {
                                label: "Potassium, K",
                                quantity: 303.6,
                                unit: "mg",
                            },
                            P: {
                                label: "Phosphorus, P",
                                quantity: 435.6,
                                unit: "mg",
                            },
                            NA: {
                                label: "Sodium, Na",
                                quantity: 312.4,
                                unit: "mg",
                            },
                            ZN: {
                                label: "Zinc, Zn",
                                quantity: 2.838,
                                unit: "mg",
                            },
                            SUGAR: {
                                label: "Sugars, total",
                                quantity: 0.8140000000000001,
                                unit: "g",
                            },
                            CA: {
                                label: "Calcium, Ca",
                                quantity: 123.2,
                                unit: "mg",
                            },
                            MG: {
                                label: "Magnesium, Mg",
                                quantity: 26.4,
                                unit: "mg",
                            },
                            FE: {
                                label: "Iron, Fe",
                                quantity: 3.85,
                                unit: "mg",
                            },
                            VITK1: {
                                label: "Vitamin K (phylloquinone)",
                                quantity: 0.66,
                                unit: "µg",
                            },
                            FOLFD: {
                                label: "Folate, food",
                                quantity: 103.4,
                                unit: "µg",
                            },
                            FOLAC: {
                                label: "Folic acid",
                                quantity: 0,
                                unit: "µg",
                            },
                            FOLDFE: {
                                label: "Folate, DFE",
                                quantity: 103.4,
                                unit: "µg",
                            },
                        },
                        measureURI:
                            "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
                        status: "OK",
                    },
                ],
            },
        ],
        totalNutrientsKCal: {
            ENERC_KCAL: {
                label: "Energy",
                quantity: 315,
                unit: "kcal",
            },
            PROCNT_KCAL: {
                label: "Calories from protein",
                quantity: 114,
                unit: "kcal",
            },
            FAT_KCAL: {
                label: "Calories from fat",
                quantity: 194,
                unit: "kcal",
            },
            CHOCDF_KCAL: {
                label: "Calories from carbohydrates",
                quantity: 7,
                unit: "kcal",
            },
        },
    },
    {
        id: 3,
        title: "Flour",
        weight: 300,
        calories: 1092,
        totalWeight: 300,
        dietLabels: ["LOW_FAT", "LOW_SODIUM"],
        healthLabels: [
            "LOW_FAT_ABS",
            "SUGAR_CONSCIOUS",
            "LOW_POTASSIUM",
            "KIDNEY_FRIENDLY",
            "VEGAN",
            "VEGETARIAN",
            "PESCATARIAN",
            "MEDITERRANEAN",
            "DASH",
            "DAIRY_FREE",
            "EGG_FREE",
            "MILK_FREE",
            "PEANUT_FREE",
            "TREE_NUT_FREE",
            "SOY_FREE",
            "FISH_FREE",
            "SHELLFISH_FREE",
            "PORK_FREE",
            "RED_MEAT_FREE",
            "CRUSTACEAN_FREE",
            "CELERY_FREE",
            "MUSTARD_FREE",
            "SESAME_FREE",
            "LUPINE_FREE",
            "MOLLUSK_FREE",
            "ALCOHOL_FREE",
            "NO_OIL_ADDED",
            "NO_SUGAR_ADDED",
            "SULPHITE_FREE",
            "KOSHER",
        ],
        cautions: [],
        totalNutrients: {
            ENERC_KCAL: {
                label: "Energy",
                quantity: 1092,
                unit: "kcal",
            },
            FAT: {
                label: "Total lipid (fat)",
                quantity: 2.94,
                unit: "g",
            },
            FASAT: {
                label: "Fatty acids, total saturated",
                quantity: 0.46499999999999997,
                unit: "g",
            },
            FAMS: {
                label: "Fatty acids, total monounsaturated",
                quantity: 0.261,
                unit: "g",
            },
            FAPU: {
                label: "Fatty acids, total polyunsaturated",
                quantity: 1.2389999999999999,
                unit: "g",
            },
            CHOCDF: {
                label: "Carbohydrate, by difference",
                quantity: 228.93,
                unit: "g",
            },
            "CHOCDF.net": {
                label: "Carbohydrates (net)",
                quantity: 220.83,
                unit: "g",
            },
            FIBTG: {
                label: "Fiber, total dietary",
                quantity: 8.100000000000001,
                unit: "g",
            },
            SUGAR: {
                label: "Sugars, total",
                quantity: 0.81,
                unit: "g",
            },
            PROCNT: {
                label: "Protein",
                quantity: 30.990000000000002,
                unit: "g",
            },
            CHOLE: {
                label: "Cholesterol",
                quantity: 0,
                unit: "mg",
            },
            NA: {
                label: "Sodium, Na",
                quantity: 6,
                unit: "mg",
            },
            CA: {
                label: "Calcium, Ca",
                quantity: 45,
                unit: "mg",
            },
            MG: {
                label: "Magnesium, Mg",
                quantity: 66,
                unit: "mg",
            },
            K: {
                label: "Potassium, K",
                quantity: 321,
                unit: "mg",
            },
            FE: {
                label: "Iron, Fe",
                quantity: 3.51,
                unit: "mg",
            },
            ZN: {
                label: "Zinc, Zn",
                quantity: 2.0999999999999996,
                unit: "mg",
            },
            P: {
                label: "Phosphorus, P",
                quantity: 324,
                unit: "mg",
            },
            VITA_RAE: {
                label: "Vitamin A, RAE",
                quantity: 0,
                unit: "µg",
            },
            VITC: {
                label: "Vitamin C, total ascorbic acid",
                quantity: 0,
                unit: "mg",
            },
            THIA: {
                label: "Thiamin",
                quantity: 0.36,
                unit: "mg",
            },
            RIBF: {
                label: "Riboflavin",
                quantity: 0.12,
                unit: "mg",
            },
            NIA: {
                label: "Niacin",
                quantity: 3.75,
                unit: "mg",
            },
            VITB6A: {
                label: "Vitamin B-6",
                quantity: 0.132,
                unit: "mg",
            },
            FOLDFE: {
                label: "Folate, DFE",
                quantity: 78,
                unit: "µg",
            },
            FOLFD: {
                label: "Folate, food",
                quantity: 78,
                unit: "µg",
            },
            FOLAC: {
                label: "Folic acid",
                quantity: 0,
                unit: "µg",
            },
            VITB12: {
                label: "Vitamin B-12",
                quantity: 0,
                unit: "µg",
            },
            VITD: {
                label: "Vitamin D (D2 + D3)",
                quantity: 0,
                unit: "µg",
            },
            TOCPHA: {
                label: "Vitamin E (alpha-tocopherol)",
                quantity: 0.18,
                unit: "mg",
            },
            VITK1: {
                label: "Vitamin K (phylloquinone)",
                quantity: 0.8999999999999999,
                unit: "µg",
            },
            WATER: {
                label: "Water",
                quantity: 35.76,
                unit: "g",
            },
        },
        totalDaily: {
            ENERC_KCAL: {
                label: "Energy",
                quantity: 54.6,
                unit: "%",
            },
            FAT: {
                label: "Fat",
                quantity: 4.523076923076923,
                unit: "%",
            },
            FASAT: {
                label: "Saturated",
                quantity: 2.325,
                unit: "%",
            },
            CHOCDF: {
                label: "Carbs",
                quantity: 76.31,
                unit: "%",
            },
            FIBTG: {
                label: "Fiber",
                quantity: 32.400000000000006,
                unit: "%",
            },
            PROCNT: {
                label: "Protein",
                quantity: 61.98,
                unit: "%",
            },
            CHOLE: {
                label: "Cholesterol",
                quantity: 0,
                unit: "%",
            },
            NA: {
                label: "Sodium",
                quantity: 0.25,
                unit: "%",
            },
            CA: {
                label: "Calcium",
                quantity: 4.5,
                unit: "%",
            },
            MG: {
                label: "Magnesium",
                quantity: 15.714285714285714,
                unit: "%",
            },
            K: {
                label: "Potassium",
                quantity: 6.829787234042553,
                unit: "%",
            },
            FE: {
                label: "Iron",
                quantity: 19.5,
                unit: "%",
            },
            ZN: {
                label: "Zinc",
                quantity: 19.09090909090909,
                unit: "%",
            },
            P: {
                label: "Phosphorus",
                quantity: 46.285714285714285,
                unit: "%",
            },
            VITA_RAE: {
                label: "Vitamin A",
                quantity: 0,
                unit: "%",
            },
            VITC: {
                label: "Vitamin C",
                quantity: 0,
                unit: "%",
            },
            THIA: {
                label: "Thiamin (B1)",
                quantity: 30,
                unit: "%",
            },
            RIBF: {
                label: "Riboflavin (B2)",
                quantity: 9.23076923076923,
                unit: "%",
            },
            NIA: {
                label: "Niacin (B3)",
                quantity: 23.4375,
                unit: "%",
            },
            VITB6A: {
                label: "Vitamin B6",
                quantity: 10.153846153846155,
                unit: "%",
            },
            FOLDFE: {
                label: "Folate equivalent (total)",
                quantity: 19.5,
                unit: "%",
            },
            VITB12: {
                label: "Vitamin B12",
                quantity: 0,
                unit: "%",
            },
            VITD: {
                label: "Vitamin D",
                quantity: 0,
                unit: "%",
            },
            TOCPHA: {
                label: "Vitamin E",
                quantity: 1.2,
                unit: "%",
            },
            VITK1: {
                label: "Vitamin K",
                quantity: 0.7499999999999999,
                unit: "%",
            },
        },
        ingredients: [
            {
                text: "300g Flour",
                parsed: [
                    {
                        quantity: 300,
                        measure: "gram",
                        foodMatch: "Flour",
                        food: "flour",
                        foodId: "food_ahebfs0a985an4aubqaebbipra58",
                        weight: 300,
                        retainedWeight: 300,
                        nutrients: {
                            RIBF: {
                                label: "Riboflavin",
                                quantity: 0.12,
                                unit: "mg",
                            },
                            VITD: {
                                label: "Vitamin D",
                                quantity: 0,
                                unit: "IU",
                            },
                            THIA: {
                                label: "Thiamin",
                                quantity: 0.36,
                                unit: "mg",
                            },
                            FAPU: {
                                label: "Fatty acids, total polyunsaturated",
                                quantity: 1.2389999999999999,
                                unit: "g",
                            },
                            NIA: {
                                label: "Niacin",
                                quantity: 3.75,
                                unit: "mg",
                            },
                            ENERC_KCAL: {
                                label: "Energy",
                                quantity: 1092,
                                unit: "kcal",
                            },
                            FASAT: {
                                label: "Fatty acids, total saturated",
                                quantity: 0.465,
                                unit: "g",
                            },
                            VITA_RAE: {
                                label: "Vitamin A, RAE",
                                quantity: 0,
                                unit: "µg",
                            },
                            VITC: {
                                label: "Vitamin C, total ascorbic acid",
                                quantity: 0,
                                unit: "mg",
                            },
                            PROCNT: {
                                label: "Protein",
                                quantity: 30.99,
                                unit: "g",
                            },
                            TOCPHA: {
                                label: "Vitamin E (alpha-tocopherol)",
                                quantity: 0.18,
                                unit: "mg",
                            },
                            CHOLE: {
                                label: "Cholesterol",
                                quantity: 0,
                                unit: "mg",
                            },
                            FAMS: {
                                label: "Fatty acids, total monounsaturated",
                                quantity: 0.26099999999999995,
                                unit: "g",
                            },
                            CHOCDF: {
                                label: "Carbohydrate, by difference",
                                quantity: 228.93,
                                unit: "g",
                            },
                            FAT: {
                                label: "Total lipid (fat)",
                                quantity: 2.94,
                                unit: "g",
                            },
                            VITB6A: {
                                label: "Vitamin B-6",
                                quantity: 0.132,
                                unit: "mg",
                            },
                            VITB12: {
                                label: "Vitamin B-12",
                                quantity: 0,
                                unit: "µg",
                            },
                            FIBTG: {
                                label: "Fiber, total dietary",
                                quantity: 8.1,
                                unit: "g",
                            },
                            WATER: {
                                label: "Water",
                                quantity: 35.76,
                                unit: "g",
                            },
                            K: {
                                label: "Potassium, K",
                                quantity: 321,
                                unit: "mg",
                            },
                            P: {
                                label: "Phosphorus, P",
                                quantity: 324,
                                unit: "mg",
                            },
                            NA: {
                                label: "Sodium, Na",
                                quantity: 6,
                                unit: "mg",
                            },
                            ZN: {
                                label: "Zinc, Zn",
                                quantity: 2.1,
                                unit: "mg",
                            },
                            SUGAR: {
                                label: "Sugars, total",
                                quantity: 0.81,
                                unit: "g",
                            },
                            CA: {
                                label: "Calcium, Ca",
                                quantity: 45,
                                unit: "mg",
                            },
                            MG: {
                                label: "Magnesium, Mg",
                                quantity: 66,
                                unit: "mg",
                            },
                            FE: {
                                label: "Iron, Fe",
                                quantity: 3.51,
                                unit: "mg",
                            },
                            VITK1: {
                                label: "Vitamin K (phylloquinone)",
                                quantity: 0.9,
                                unit: "µg",
                            },
                            FOLFD: {
                                label: "Folate, food",
                                quantity: 78,
                                unit: "µg",
                            },
                            FOLAC: {
                                label: "Folic acid",
                                quantity: 0,
                                unit: "µg",
                            },
                            FOLDFE: {
                                label: "Folate, DFE",
                                quantity: 78,
                                unit: "µg",
                            },
                        },
                        measureURI:
                            "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
                        status: "OK",
                    },
                ],
            },
        ],
        totalNutrientsKCal: {
            ENERC_KCAL: {
                label: "Energy",
                quantity: 1092,
                unit: "kcal",
            },
            PROCNT_KCAL: {
                label: "Calories from protein",
                quantity: 127,
                unit: "kcal",
            },
            FAT_KCAL: {
                label: "Calories from fat",
                quantity: 27,
                unit: "kcal",
            },
            CHOCDF_KCAL: {
                label: "Calories from carbohydrates",
                quantity: 938,
                unit: "kcal",
            },
        },
    },
    {
        id: 4,
        title: "Apples",
        weight: 500,
        calories: 260,
        totalWeight: 500,
        dietLabels: ["HIGH_FIBER", "LOW_FAT", "LOW_SODIUM"],
        healthLabels: [
            "FAT_FREE",
            "LOW_FAT_ABS",
            "VEGAN",
            "VEGETARIAN",
            "PESCATARIAN",
            "PALEO",
            "SPECIFIC_CARBS",
            "MEDITERRANEAN",
            "DASH",
            "DAIRY_FREE",
            "GLUTEN_FREE",
            "WHEAT_FREE",
            "EGG_FREE",
            "MILK_FREE",
            "PEANUT_FREE",
            "TREE_NUT_FREE",
            "SOY_FREE",
            "FISH_FREE",
            "SHELLFISH_FREE",
            "PORK_FREE",
            "RED_MEAT_FREE",
            "CRUSTACEAN_FREE",
            "CELERY_FREE",
            "MUSTARD_FREE",
            "SESAME_FREE",
            "LUPINE_FREE",
            "MOLLUSK_FREE",
            "ALCOHOL_FREE",
            "NO_OIL_ADDED",
            "NO_SUGAR_ADDED",
            "SULPHITE_FREE",
            "KOSHER",
        ],
        cautions: ["SULFITES"],
        totalNutrients: {
            ENERC_KCAL: {
                label: "Energy",
                quantity: 260,
                unit: "kcal",
            },
            FAT: {
                label: "Total lipid (fat)",
                quantity: 0.8500000000000001,
                unit: "g",
            },
            FASAT: {
                label: "Fatty acids, total saturated",
                quantity: 0.14,
                unit: "g",
            },
            FAMS: {
                label: "Fatty acids, total monounsaturated",
                quantity: 0.035,
                unit: "g",
            },
            FAPU: {
                label: "Fatty acids, total polyunsaturated",
                quantity: 0.255,
                unit: "g",
            },
            CHOCDF: {
                label: "Carbohydrate, by difference",
                quantity: 69.05,
                unit: "g",
            },
            "CHOCDF.net": {
                label: "Carbohydrates (net)",
                quantity: 57.05,
                unit: "g",
            },
            FIBTG: {
                label: "Fiber, total dietary",
                quantity: 12,
                unit: "g",
            },
            SUGAR: {
                label: "Sugars, total",
                quantity: 51.95,
                unit: "g",
            },
            PROCNT: {
                label: "Protein",
                quantity: 1.3,
                unit: "g",
            },
            CHOLE: {
                label: "Cholesterol",
                quantity: 0,
                unit: "mg",
            },
            NA: {
                label: "Sodium, Na",
                quantity: 5,
                unit: "mg",
            },
            CA: {
                label: "Calcium, Ca",
                quantity: 30,
                unit: "mg",
            },
            MG: {
                label: "Magnesium, Mg",
                quantity: 25,
                unit: "mg",
            },
            K: {
                label: "Potassium, K",
                quantity: 535,
                unit: "mg",
            },
            FE: {
                label: "Iron, Fe",
                quantity: 0.6,
                unit: "mg",
            },
            ZN: {
                label: "Zinc, Zn",
                quantity: 0.2,
                unit: "mg",
            },
            P: {
                label: "Phosphorus, P",
                quantity: 55,
                unit: "mg",
            },
            VITA_RAE: {
                label: "Vitamin A, RAE",
                quantity: 15,
                unit: "µg",
            },
            VITC: {
                label: "Vitamin C, total ascorbic acid",
                quantity: 23,
                unit: "mg",
            },
            THIA: {
                label: "Thiamin",
                quantity: 0.085,
                unit: "mg",
            },
            RIBF: {
                label: "Riboflavin",
                quantity: 0.13,
                unit: "mg",
            },
            NIA: {
                label: "Niacin",
                quantity: 0.45499999999999996,
                unit: "mg",
            },
            VITB6A: {
                label: "Vitamin B-6",
                quantity: 0.20500000000000002,
                unit: "mg",
            },
            FOLDFE: {
                label: "Folate, DFE",
                quantity: 15,
                unit: "µg",
            },
            FOLFD: {
                label: "Folate, food",
                quantity: 15,
                unit: "µg",
            },
            FOLAC: {
                label: "Folic acid",
                quantity: 0,
                unit: "µg",
            },
            VITB12: {
                label: "Vitamin B-12",
                quantity: 0,
                unit: "µg",
            },
            VITD: {
                label: "Vitamin D (D2 + D3)",
                quantity: 0,
                unit: "µg",
            },
            TOCPHA: {
                label: "Vitamin E (alpha-tocopherol)",
                quantity: 0.8999999999999999,
                unit: "mg",
            },
            VITK1: {
                label: "Vitamin K (phylloquinone)",
                quantity: 11,
                unit: "µg",
            },
            WATER: {
                label: "Water",
                quantity: 427.8,
                unit: "g",
            },
        },
        totalDaily: {
            ENERC_KCAL: {
                label: "Energy",
                quantity: 13,
                unit: "%",
            },
            FAT: {
                label: "Fat",
                quantity: 1.307692307692308,
                unit: "%",
            },
            FASAT: {
                label: "Saturated",
                quantity: 0.7000000000000001,
                unit: "%",
            },
            CHOCDF: {
                label: "Carbs",
                quantity: 23.016666666666666,
                unit: "%",
            },
            FIBTG: {
                label: "Fiber",
                quantity: 48,
                unit: "%",
            },
            PROCNT: {
                label: "Protein",
                quantity: 2.6,
                unit: "%",
            },
            CHOLE: {
                label: "Cholesterol",
                quantity: 0,
                unit: "%",
            },
            NA: {
                label: "Sodium",
                quantity: 0.20833333333333334,
                unit: "%",
            },
            CA: {
                label: "Calcium",
                quantity: 3,
                unit: "%",
            },
            MG: {
                label: "Magnesium",
                quantity: 5.9523809523809526,
                unit: "%",
            },
            K: {
                label: "Potassium",
                quantity: 11.382978723404255,
                unit: "%",
            },
            FE: {
                label: "Iron",
                quantity: 3.3333333333333335,
                unit: "%",
            },
            ZN: {
                label: "Zinc",
                quantity: 1.8181818181818181,
                unit: "%",
            },
            P: {
                label: "Phosphorus",
                quantity: 7.857142857142857,
                unit: "%",
            },
            VITA_RAE: {
                label: "Vitamin A",
                quantity: 1.6666666666666667,
                unit: "%",
            },
            VITC: {
                label: "Vitamin C",
                quantity: 25.555555555555557,
                unit: "%",
            },
            THIA: {
                label: "Thiamin (B1)",
                quantity: 7.083333333333334,
                unit: "%",
            },
            RIBF: {
                label: "Riboflavin (B2)",
                quantity: 10,
                unit: "%",
            },
            NIA: {
                label: "Niacin (B3)",
                quantity: 2.8437499999999996,
                unit: "%",
            },
            VITB6A: {
                label: "Vitamin B6",
                quantity: 15.769230769230768,
                unit: "%",
            },
            FOLDFE: {
                label: "Folate equivalent (total)",
                quantity: 3.75,
                unit: "%",
            },
            VITB12: {
                label: "Vitamin B12",
                quantity: 0,
                unit: "%",
            },
            VITD: {
                label: "Vitamin D",
                quantity: 0,
                unit: "%",
            },
            TOCPHA: {
                label: "Vitamin E",
                quantity: 5.999999999999999,
                unit: "%",
            },
            VITK1: {
                label: "Vitamin K",
                quantity: 9.166666666666666,
                unit: "%",
            },
        },
        ingredients: [
            {
                text: "500g Apples",
                parsed: [
                    {
                        quantity: 500,
                        measure: "gram",
                        foodMatch: "Apples",
                        food: "apple",
                        foodId: "food_a1gb9ubb72c7snbuxr3weagwv0dd",
                        weight: 500,
                        retainedWeight: 500,
                        nutrients: {
                            VITD: {
                                label: "Vitamin D",
                                quantity: 0,
                                unit: "IU",
                            },
                            ENERC_KCAL: {
                                label: "Energy",
                                quantity: 260,
                                unit: "kcal",
                            },
                            FASAT: {
                                label: "Fatty acids, total saturated",
                                quantity: 0.14,
                                unit: "g",
                            },
                            VITA_RAE: {
                                label: "Vitamin A, RAE",
                                quantity: 15,
                                unit: "µg",
                            },
                            PROCNT: {
                                label: "Protein",
                                quantity: 1.3,
                                unit: "g",
                            },
                            TOCPHA: {
                                label: "Vitamin E (alpha-tocopherol)",
                                quantity: 0.9,
                                unit: "mg",
                            },
                            CHOLE: {
                                label: "Cholesterol",
                                quantity: 0,
                                unit: "mg",
                            },
                            CHOCDF: {
                                label: "Carbohydrate, by difference",
                                quantity: 69.05,
                                unit: "g",
                            },
                            FAT: {
                                label: "Total lipid (fat)",
                                quantity: 0.85,
                                unit: "g",
                            },
                            FIBTG: {
                                label: "Fiber, total dietary",
                                quantity: 12,
                                unit: "g",
                            },
                            RIBF: {
                                label: "Riboflavin",
                                quantity: 0.13,
                                unit: "mg",
                            },
                            THIA: {
                                label: "Thiamin",
                                quantity: 0.085,
                                unit: "mg",
                            },
                            FAPU: {
                                label: "Fatty acids, total polyunsaturated",
                                quantity: 0.255,
                                unit: "g",
                            },
                            NIA: {
                                label: "Niacin",
                                quantity: 0.455,
                                unit: "mg",
                            },
                            VITC: {
                                label: "Vitamin C, total ascorbic acid",
                                quantity: 23,
                                unit: "mg",
                            },
                            FAMS: {
                                label: "Fatty acids, total monounsaturated",
                                quantity: 0.035,
                                unit: "g",
                            },
                            VITB6A: {
                                label: "Vitamin B-6",
                                quantity: 0.205,
                                unit: "mg",
                            },
                            VITB12: {
                                label: "Vitamin B-12",
                                quantity: 0,
                                unit: "µg",
                            },
                            WATER: {
                                label: "Water",
                                quantity: 427.8,
                                unit: "g",
                            },
                            K: {
                                label: "Potassium, K",
                                quantity: 535,
                                unit: "mg",
                            },
                            P: {
                                label: "Phosphorus, P",
                                quantity: 55,
                                unit: "mg",
                            },
                            NA: {
                                label: "Sodium, Na",
                                quantity: 5,
                                unit: "mg",
                            },
                            ZN: {
                                label: "Zinc, Zn",
                                quantity: 0.2,
                                unit: "mg",
                            },
                            SUGAR: {
                                label: "Sugars, total",
                                quantity: 51.95,
                                unit: "g",
                            },
                            CA: {
                                label: "Calcium, Ca",
                                quantity: 30,
                                unit: "mg",
                            },
                            MG: {
                                label: "Magnesium, Mg",
                                quantity: 25,
                                unit: "mg",
                            },
                            FE: {
                                label: "Iron, Fe",
                                quantity: 0.6,
                                unit: "mg",
                            },
                            VITK1: {
                                label: "Vitamin K (phylloquinone)",
                                quantity: 11,
                                unit: "µg",
                            },
                            FOLFD: {
                                label: "Folate, food",
                                quantity: 15,
                                unit: "µg",
                            },
                            FOLAC: {
                                label: "Folic acid",
                                quantity: 0,
                                unit: "µg",
                            },
                            FOLDFE: {
                                label: "Folate, DFE",
                                quantity: 15,
                                unit: "µg",
                            },
                        },
                        measureURI:
                            "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
                        status: "OK",
                    },
                ],
            },
        ],
        totalNutrientsKCal: {
            ENERC_KCAL: {
                label: "Energy",
                quantity: 260,
                unit: "kcal",
            },
            PROCNT_KCAL: {
                label: "Calories from protein",
                quantity: 5,
                unit: "kcal",
            },
            FAT_KCAL: {
                label: "Calories from fat",
                quantity: 7,
                unit: "kcal",
            },
            CHOCDF_KCAL: {
                label: "Calories from carbohydrates",
                quantity: 248,
                unit: "kcal",
            },
        },
    },
];
