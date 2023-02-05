interface Programs {
  "id": number;
  "title": string;
  "type": string[];
  "description": string;
  "imageUrl1": string;
  "imageUrl2": string;
  "path": string;
  "days": number;
  "time": number[];
  "equip": string[];
}

export const programs: Programs[] = [
  {
    "id": 1,
    "title": "Weight Loss Challenge",
    "type": ["Weight Loss", "Full Body"], 
    "description": "This 4 week weight loss challenge will get your entire body sweating with HIIT, cardio, abs and full body workouts. This program is suitable for all fitness levels as there's no jumping or equipment required, with low-impact variations throughout.",
    "imageUrl1": "https://static.chloeting.com/programs/63ae15573e8cb6226b0c40c0/971c80f0-87c8-11ed-8684-75e08be900e2.jpeg",
    "imageUrl2": "https://static.chloeting.com/programs/63ae15573e8cb6226b0c40c0/97331630-87c8-11ed-8684-75e08be900e2.jpeg",
    "path": "/weight-loss-challenge",
    "days": 28,
    "time": [20,50],
    "equip": ["Fitness Mat", "Dumbbells", "Resistance Bands"],
  },
  {
    "id": 2,
    "title": "Grow A Booty Challenge",
    "type": ["Resistance", "Booty", "Abs & Core"], 
    "description": "This 4-week resistance challenge will help you grow a booty with progressive overload! Dumbbells & resistance bands are recommended, a bench can be useful too.Beginners can try this with bodyweight or temporary alternatives like filled water bottles",
    "imageUrl1": "https://static.chloeting.com/programs/6306f2a687caf1cb72ebad58/371d88d0-86d2-11ed-8daf-11eb0dd6c117.jpeg",
    "imageUrl2": "https://static.chloeting.com/programs/6306f2a687caf1cb72ebad58/375058a0-86d2-11ed-8daf-11eb0dd6c117.jpeg",
    "path": "/grow-a-booty-challenge",
    "days": 28,
    "time": [20,50],
    "equip": ["Fitness Mat", "Dumbbells", "Resistance Bands"],
  },
  {
    "id": 3,
    "title": "Get Abs Challenge",
    "type": ["Weight Loss", "Full Body", "Abs & Core"], 
    "description": "Want to work those abs? This is an 18-day cardio and abs challenge that also works the rest of the body.This challenge is suitable for all fitness levels as there are no jumping and low-impact variations throughout and no equipment is required.",
    "imageUrl1": "https://static.chloeting.com/programs/62c4acbfb88c73c70da0e9d3/5bb42460-86d2-11ed-b23e-23a8639ef2f0.jpeg",
    "imageUrl2": "https://static.chloeting.com/programs/62c4acbfb88c73c70da0e9d3/5be28760-86d2-11ed-b23e-23a8639ef2f0.jpeg",
    "path": "/get-abs-challenge",
    "days": 18,
    "time": [20,40],
    "equip": ["Fitness Mat", "Dumbbells", "Resistance Bands"],
  },
  {
    "id": 4,
    "title": "3 Weeks Lean Arms Challenge",
    "type": ["Weight Loss", "Arms", "Abs & Core"], 
    "description": "Work those arms with the 3 Weeks Lean Arms challenge! Strengthen your arms and abs while burning fat with cardio workouts.This program is beginner friendly as there are low-impact variations throughout, and no equipment is required.",
    "imageUrl1": "https://static.chloeting.com/programs/61bd013558da74df97ff3b36/b6b41f80-86d4-11ed-be97-e54de3bdbeba.jpeg",
    "imageUrl2": "https://static.chloeting.com/programs/61bd013558da74df97ff3b36/b6c00660-86d4-11ed-be97-e54de3bdbeba.jpeg",
    "path": "/lean-arms-challenge",
    "days": 21,
    "time": [20,50],
    "equip": ["Fitness Mat"],
  },
  {
    "id": 5,
    "title": "25 Days Hourglass Challenge",
    "type": ["Booty", "Full Body", "Abs & Core"], 
    "description": "This 25 day challenge is great for those who want to work on that hourglass figure! This challenge features abs and booty workouts and does not contain jumping or any HIIT workouts. No equipment is required, but resistance bands are recommended",
    "imageUrl1": "https://static.chloeting.com/programs/61bd0d5e245ccf425b8542e6/7d828d50-86d4-11ed-8daf-11eb0dd6c117.jpeg",
    "imageUrl2": "https://static.chloeting.com/programs/61bd0d5e245ccf425b8542e6/7d8db0e0-86d4-11ed-8daf-11eb0dd6c117.jpeg",
    "path": "/hourglass-program",
    "days": 25,
    "time": [10,50],
    "equip": ["Fitness Mat", "Resistance Bands"],
  },
  {
    "id": 6,
    "title": "5 Weeks Booty Challenge",
    "type": ["Resistance", "Booty", "Abs & Core"], 
    "description": "Commit to working those glutes with this 5-week booty challenge! This resistance challenge also works your abs, but the primary focus is strengthening your lower body.No equipment is required but resistance bands are recommended.",
    "imageUrl1": "https://static.chloeting.com/programs/61bd050658da74df97ff3ba8/ad6ca280-86d4-11ed-8daf-11eb0dd6c117.jpeg",
    "imageUrl2": "https://static.chloeting.com/programs/61bd050658da74df97ff3ba8/ad7db980-86d4-11ed-8daf-11eb0dd6c117.jpeg",
    "path": "/booty-challenge",
    "days": 35,
    "time": [10,45],
    "equip": ["Fitness Mat", "Resistance Bands"],
  },
  {
    "id": 7,
    "title": "Lean Thigh Challenge",
    "type": ["Weight Loss", "Legs"], 
    "description": "This 30 day challenge is all about inner and outer thighs! Working those legs without bulking by pairing lower body workouts and cardio.This program is beginner friendly as there are low-impact variations throughout, and no equipment is required.",
    "imageUrl1": "https://static.chloeting.com/programs/61bc11f837778b5b830c66ef/06d3e720-86d5-11ed-84c8-9d80008c6436.jpeg",
    "imageUrl2": "https://static.chloeting.com/programs/61bc11f837778b5b830c66ef/06de2050-86d5-11ed-84c8-9d80008c6436.jpeg",
    "path": "/lean-thigh-challenge",
    "days": 30,
    "time": [15,60],
    "equip": ["Fitness Mat"],
  },
  {
    "id": 8,
    "title": "2 Weeks Shred Challenge",
    "type": ["Weight Loss", "Full Body", "Abs & Core"], 
    "description": "Get shredded with this 2-week program designed to help you lose weight with HIIT workouts and to work on those abs! This challenge is beginner friendly since it is only 14 days, has no jumping and low impact variations, and no equipment is required.",
    "imageUrl1": "https://static.chloeting.com/programs/61bcedf7084e277b60445c9c/14eabbf0-86d4-11ed-ac64-692111ca50d9.jpeg",
    "imageUrl2": "https://static.chloeting.com/programs/61bcedf7084e277b60445c9c/f0daa9f0-86dd-11ed-bb51-1d9f507ab313.jpeg",
    "path": "/two-weeks-shred-challenge",
    "days": 14,
    "time": [35,60],
    "equip": ["Fitness Mat", "Dumbbells", "Resistance Bands"],
  },
]


