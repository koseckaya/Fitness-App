export const programs: Program[] = [{
    title: 'NEW2023 Weight Loss Challenge',
    image: 'https://static.chloeting.com/programs/63ae15573e8cb6226b0c40c0/971c80f0-87c8-11ed-8684-75e08be900e2.jpeg',
    duration: '28 days',
    time: '20-50 min/day',
    url: '/workout-program1',
    type: [' Weight Loss', 'Booty'],
    equipment: ['Fitness Mat', 'Dumbbells'],
},
    {
        title: 'NEW2022 Weight Loss Challenge',
        image: 'https://static.chloeting.com/programs/63ae15573e8cb6226b0c40c0/971c80f0-87c8-11ed-8684-75e08be900e2.jpeg',
        type: [' Weight Loss', 'Booty'],
    },
    {
        title: 'NEW2022 Weight Loss Challenge',
        image: 'https://static.chloeting.com/programs/63ae15573e8cb6226b0c40c0/971c80f0-87c8-11ed-8684-75e08be900e2.jpeg',
        type: [' Weight Loss', 'Booty'],
    },
    {
        title: 'NEW2022 Weight Loss Challenge',
        image: 'https://static.chloeting.com/programs/63ae15573e8cb6226b0c40c0/971c80f0-87c8-11ed-8684-75e08be900e2.jpeg',
        type: [' Weight Loss', 'Booty'],
    },
]

export type Program= {
    title?: string;
    image?: string;
    url?: string;
    duration?: string;
    time?: string;
    type?: string[];
    equipment?: string[];
}
