export interface Programs {
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

export interface Program {
  programId: number,
  days: DayProgram[];
}

export interface DayProgram {
  dayNum: number;
  videos: Video[];
}

export interface Video {
  title: string;
  src: string;
  srcImg: string;
  duration: number;
}

export const programs: Programs[] = [
  {
    "id": 1,
    "title": "Weight Loss Challenge",
    "type": ["Weight Loss", "Full Body"], 
    "description": "This 4 week weight loss challenge will get your entire body sweating with HIIT, cardio, abs and full body workouts.\n This program is suitable for all fitness levels as there's no jumping or equipment required, with low-impact variations throughout.",
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
    "description": "This 4-week resistance challenge will help you grow a booty with progressive overload! Dumbbells & resistance bands are recommended, a bench can be useful too. \n Beginners can try this with bodyweight or temporary alternatives like filled water bottles",
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


export const programByDays: Program[] = [
  {
      programId: 1,
      days: [
          {
              dayNum: 1,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Intense HIIT',
                      src: 'https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Standing Abs',
                      src: 'https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Round Booty',
                      src: 'https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Lower Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg',
                      duration: 6
                  },
              ]
          },
          {
              dayNum: 2,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Intense HIIT',
                      src: 'https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Standing Abs',
                      src: 'https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Round Booty',
                      src: 'https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Lower Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg',
                      duration: 6
                  },
              ]
          },
          {
              dayNum: 3,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Intense HIIT',
                      src: 'https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Standing Abs',
                      src: 'https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Round Booty',
                      src: 'https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Lower Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg',
                      duration: 6
                  },
              ]
          },
          {
              dayNum: 4,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Intense HIIT',
                      src: 'https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Standing Abs',
                      src: 'https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Round Booty',
                      src: 'https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Lower Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg',
                      duration: 6
                  },
              ]
          },
          {
              dayNum: 5,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Intense HIIT',
                      src: 'https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Standing Abs',
                      src: 'https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Round Booty',
                      src: 'https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Lower Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg',
                      duration: 6
                  },
              ]
          },
          {
              dayNum: 6,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Intense HIIT',
                      src: 'https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Standing Abs',
                      src: 'https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Round Booty',
                      src: 'https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Lower Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg',
                      duration: 6
                  },
              ]
          },
          {
              dayNum: 7,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Intense HIIT',
                      src: 'https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Standing Abs',
                      src: 'https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Round Booty',
                      src: 'https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Lower Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg',
                      duration: 6
                  },
              ]
          },
          {
              dayNum: 8,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Intense HIIT',
                      src: 'https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Standing Abs',
                      src: 'https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Round Booty',
                      src: 'https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Lower Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg',
                      duration: 6
                  },
              ]
          },
          {
              dayNum: 9,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Intense HIIT',
                      src: 'https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Standing Abs',
                      src: 'https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Round Booty',
                      src: 'https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Lower Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg',
                      duration: 6
                  },
              ]
          },
          {
              dayNum: 10,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Intense HIIT',
                      src: 'https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Standing Abs',
                      src: 'https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Round Booty',
                      src: 'https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Lower Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg',
                      duration: 6
                  },
              ]
          },
          {
              dayNum: 11,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Intense HIIT',
                      src: 'https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Standing Abs',
                      src: 'https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Round Booty',
                      src: 'https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Lower Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg',
                      duration: 6
                  },
              ]
          },
          {
              dayNum: 12,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Intense HIIT',
                      src: 'https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Standing Abs',
                      src: 'https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Round Booty',
                      src: 'https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Lower Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg',
                      duration: 6
                  },
              ]
          },
          {
              dayNum: 13,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Intense HIIT',
                      src: 'https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Standing Abs',
                      src: 'https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Round Booty',
                      src: 'https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Lower Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg',
                      duration: 6
                  },
              ]
          },
          {
              dayNum: 14,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Intense HIIT',
                      src: 'https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Standing Abs',
                      src: 'https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Round Booty',
                      src: 'https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Lower Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg',
                      duration: 6
                  },
              ]
          },
          {
              dayNum: 15,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Intense HIIT',
                      src: 'https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Standing Abs',
                      src: 'https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Round Booty',
                      src: 'https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Lower Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg',
                      duration: 6
                  },
              ]
          },
          {
              dayNum: 16,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Intense HIIT',
                      src: 'https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Standing Abs',
                      src: 'https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Round Booty',
                      src: 'https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Lower Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg',
                      duration: 6
                  },
              ]
          },
          {
              dayNum: 17,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Intense HIIT',
                      src: 'https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Standing Abs',
                      src: 'https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Round Booty',
                      src: 'https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Lower Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg',
                      duration: 6
                  },
              ]
          },
          {
              dayNum: 18,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Intense HIIT',
                      src: 'https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Standing Abs',
                      src: 'https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Round Booty',
                      src: 'https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Lower Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg',
                      duration: 6
                  },
              ]
          },
          {
              dayNum: 19,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Intense HIIT',
                      src: 'https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Standing Abs',
                      src: 'https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Round Booty',
                      src: 'https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Lower Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg',
                      duration: 6
                  },
              ]
          },
          {
              dayNum: 20,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Intense HIIT',
                      src: 'https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Standing Abs',
                      src: 'https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Round Booty',
                      src: 'https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Lower Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg',
                      duration: 6
                  },
              ]
          },
          {
              dayNum: 21,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Intense HIIT',
                      src: 'https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Standing Abs',
                      src: 'https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Round Booty',
                      src: 'https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Lower Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg',
                      duration: 6
                  },
              ]
          },
          {
              dayNum: 22,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Intense HIIT',
                      src: 'https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Standing Abs',
                      src: 'https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Round Booty',
                      src: 'https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Lower Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg',
                      duration: 6
                  },
              ]
          },
          {
              dayNum: 23,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Intense HIIT',
                      src: 'https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Standing Abs',
                      src: 'https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Round Booty',
                      src: 'https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Lower Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg',
                      duration: 6
                  },
              ]
          },
          {
              dayNum: 24,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Intense HIIT',
                      src: 'https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Standing Abs',
                      src: 'https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Round Booty',
                      src: 'https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Lower Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg',
                      duration: 6
                  },
              ]
          },
          {
              dayNum: 25,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Intense HIIT',
                      src: 'https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Standing Abs',
                      src: 'https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Round Booty',
                      src: 'https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Lower Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg',
                      duration: 6
                  },
              ]
          },
          {
              dayNum: 26,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Intense HIIT',
                      src: 'https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Standing Abs',
                      src: 'https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Round Booty',
                      src: 'https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Lower Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg',
                      duration: 6
                  },
              ]
          },
          {
              dayNum: 27,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Intense HIIT',
                      src: 'https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Standing Abs',
                      src: 'https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Round Booty',
                      src: 'https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Lower Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg',
                      duration: 6
                  },
              ]
          },
          {
              dayNum: 28,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Intense HIIT',
                      src: 'https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Standing Abs',
                      src: 'https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Round Booty',
                      src: 'https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Lower Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg',
                      duration: 6
                  },
              ]
          },
      ]

  },
  {
      programId: 2,
      days: [
          {
              dayNum: 1,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Abs and Butt',
                      src: 'https://www.youtube.com/watch?v=7LFcL6aj73o&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306edbb319d6a2844ffec11/cd4684b0-276e-11ed-b1cf-338eb74818fa.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Lower Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg',
                      duration: 6
                  },
              ]
          },
          {
              dayNum: 2,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Abs and Butt',
                      src: 'https://www.youtube.com/watch?v=7LFcL6aj73o&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306edbb319d6a2844ffec11/cd4684b0-276e-11ed-b1cf-338eb74818fa.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Lower Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg',
                      duration: 6
                  },
              ]
          },
          {
              dayNum: 3,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Abs and Butt',
                      src: 'https://www.youtube.com/watch?v=7LFcL6aj73o&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306edbb319d6a2844ffec11/cd4684b0-276e-11ed-b1cf-338eb74818fa.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Lower Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg',
                      duration: 6
                  },
              ]
          },
          {
              dayNum: 4,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Abs and Butt',
                      src: 'https://www.youtube.com/watch?v=7LFcL6aj73o&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306edbb319d6a2844ffec11/cd4684b0-276e-11ed-b1cf-338eb74818fa.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Lower Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg',
                      duration: 6
                  },
              ]
          },
          {
              dayNum: 5,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Abs and Butt',
                      src: 'https://www.youtube.com/watch?v=7LFcL6aj73o&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306edbb319d6a2844ffec11/cd4684b0-276e-11ed-b1cf-338eb74818fa.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Lower Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg',
                      duration: 6
                  },
              ]
          },
          {
              dayNum: 6,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Abs and Butt',
                      src: 'https://www.youtube.com/watch?v=7LFcL6aj73o&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306edbb319d6a2844ffec11/cd4684b0-276e-11ed-b1cf-338eb74818fa.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Lower Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg',
                      duration: 6
                  },
              ]
          },
          {
              dayNum: 7,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Abs and Butt',
                      src: 'https://www.youtube.com/watch?v=7LFcL6aj73o&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306edbb319d6a2844ffec11/cd4684b0-276e-11ed-b1cf-338eb74818fa.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Lower Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg',
                      duration: 6
                  },
              ]
          },
          {
              dayNum: 8,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Abs and Butt',
                      src: 'https://www.youtube.com/watch?v=7LFcL6aj73o&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306edbb319d6a2844ffec11/cd4684b0-276e-11ed-b1cf-338eb74818fa.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Lower Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg',
                      duration: 6
                  },
              ]
          },
          {
              dayNum: 9,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Abs and Butt',
                      src: 'https://www.youtube.com/watch?v=7LFcL6aj73o&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306edbb319d6a2844ffec11/cd4684b0-276e-11ed-b1cf-338eb74818fa.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Lower Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg',
                      duration: 6
                  },
              ]
          },
          {
              dayNum: 10,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Abs and Butt',
                      src: 'https://www.youtube.com/watch?v=7LFcL6aj73o&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306edbb319d6a2844ffec11/cd4684b0-276e-11ed-b1cf-338eb74818fa.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Lower Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg',
                      duration: 6
                  },
              ]
          },
          {
              dayNum: 11,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Abs and Butt',
                      src: 'https://www.youtube.com/watch?v=7LFcL6aj73o&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306edbb319d6a2844ffec11/cd4684b0-276e-11ed-b1cf-338eb74818fa.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Lower Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg',
                      duration: 6
                  },
              ]
          },
          {
              dayNum: 12,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Abs and Butt',
                      src: 'https://www.youtube.com/watch?v=7LFcL6aj73o&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306edbb319d6a2844ffec11/cd4684b0-276e-11ed-b1cf-338eb74818fa.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Lower Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg',
                      duration: 6
                  },
              ]
          },
          {
              dayNum: 13,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Abs and Butt',
                      src: 'https://www.youtube.com/watch?v=7LFcL6aj73o&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306edbb319d6a2844ffec11/cd4684b0-276e-11ed-b1cf-338eb74818fa.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Lower Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg',
                      duration: 6
                  },
              ]
          },
          {
              dayNum: 14,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Abs and Butt',
                      src: 'https://www.youtube.com/watch?v=7LFcL6aj73o&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306edbb319d6a2844ffec11/cd4684b0-276e-11ed-b1cf-338eb74818fa.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Lower Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg',
                      duration: 6
                  },
              ]
          },
          {
              dayNum: 15,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Abs and Butt',
                      src: 'https://www.youtube.com/watch?v=7LFcL6aj73o&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306edbb319d6a2844ffec11/cd4684b0-276e-11ed-b1cf-338eb74818fa.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Lower Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg',
                      duration: 6
                  },
              ]
          },
          {
              dayNum: 16,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Abs and Butt',
                      src: 'https://www.youtube.com/watch?v=7LFcL6aj73o&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306edbb319d6a2844ffec11/cd4684b0-276e-11ed-b1cf-338eb74818fa.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Lower Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg',
                      duration: 6
                  },
              ]
          },
          {
              dayNum: 17,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Abs and Butt',
                      src: 'https://www.youtube.com/watch?v=7LFcL6aj73o&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306edbb319d6a2844ffec11/cd4684b0-276e-11ed-b1cf-338eb74818fa.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Lower Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg',
                      duration: 6
                  },
              ]
          },
          {
              dayNum: 18,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Abs and Butt',
                      src: 'https://www.youtube.com/watch?v=7LFcL6aj73o&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306edbb319d6a2844ffec11/cd4684b0-276e-11ed-b1cf-338eb74818fa.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Lower Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg',
                      duration: 6
                  },
              ]
          },
          {
              dayNum: 19,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Abs and Butt',
                      src: 'https://www.youtube.com/watch?v=7LFcL6aj73o&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306edbb319d6a2844ffec11/cd4684b0-276e-11ed-b1cf-338eb74818fa.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Lower Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg',
                      duration: 6
                  },
              ]
          },
          {
              dayNum: 20,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Abs and Butt',
                      src: 'https://www.youtube.com/watch?v=7LFcL6aj73o&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306edbb319d6a2844ffec11/cd4684b0-276e-11ed-b1cf-338eb74818fa.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Lower Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg',
                      duration: 6
                  },
              ]
          },
          {
              dayNum: 21,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Abs and Butt',
                      src: 'https://www.youtube.com/watch?v=7LFcL6aj73o&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306edbb319d6a2844ffec11/cd4684b0-276e-11ed-b1cf-338eb74818fa.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Lower Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg',
                      duration: 6
                  },
              ]
          },
          {
              dayNum: 22,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Abs and Butt',
                      src: 'https://www.youtube.com/watch?v=7LFcL6aj73o&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306edbb319d6a2844ffec11/cd4684b0-276e-11ed-b1cf-338eb74818fa.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Lower Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg',
                      duration: 6
                  },
              ]
          },
          {
              dayNum: 23,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Abs and Butt',
                      src: 'https://www.youtube.com/watch?v=7LFcL6aj73o&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306edbb319d6a2844ffec11/cd4684b0-276e-11ed-b1cf-338eb74818fa.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Lower Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg',
                      duration: 6
                  },
              ]
          },
          {
              dayNum: 25,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Abs and Butt',
                      src: 'https://www.youtube.com/watch?v=7LFcL6aj73o&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306edbb319d6a2844ffec11/cd4684b0-276e-11ed-b1cf-338eb74818fa.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Lower Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg',
                      duration: 6
                  },
              ]
          },
          {
              dayNum: 26,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Abs and Butt',
                      src: 'https://www.youtube.com/watch?v=7LFcL6aj73o&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306edbb319d6a2844ffec11/cd4684b0-276e-11ed-b1cf-338eb74818fa.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Lower Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg',
                      duration: 6
                  },
              ]
          },
          {
              dayNum: 27,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Abs and Butt',
                      src: 'https://www.youtube.com/watch?v=7LFcL6aj73o&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306edbb319d6a2844ffec11/cd4684b0-276e-11ed-b1cf-338eb74818fa.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Lower Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg',
                      duration: 6
                  },
              ]
          },
          {
              dayNum: 28,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Abs and Butt',
                      src: 'https://www.youtube.com/watch?v=7LFcL6aj73o&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306edbb319d6a2844ffec11/cd4684b0-276e-11ed-b1cf-338eb74818fa.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Lower Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg',
                      duration: 6
                  },
              ]
          },
      ]
  },
  {
      programId: 3,
      days: [
          {
              dayNum: 1,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61ce4e1f34185a9a5611e4dd/3f4ce200-69d0-11ec-9b4b-f91362ad20db.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Best Full Body HIIT',
                      src: 'https://www.youtube.com/watch?v=DCNfkVg3dps&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a87dc5a7dff24df09ae3/bb5abf20-fca6-11ec-9d53-e3fc21983f85.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Intense Abs Workout',
                      src: 'https://www.youtube.com/watch?v=85ici-FoXcY&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a8f9dad35363a3a03107/04e35cb0-fca7-11ec-b61e-559ee4787d5f.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Best Cooldown Stretches',
                      src: 'https://www.youtube.com/watch?v=iapsX8jB7k8&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bc25ca4df7b918c30e8bce/9fd49a10-5efd-11ec-9fce-4781ba46fa9b.jpeg',
                      duration: 16
                  },
              ]
          },
          {
              dayNum: 2,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61ce4e1f34185a9a5611e4dd/3f4ce200-69d0-11ec-9b4b-f91362ad20db.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Best Full Body HIIT',
                      src: 'https://www.youtube.com/watch?v=DCNfkVg3dps&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a87dc5a7dff24df09ae3/bb5abf20-fca6-11ec-9d53-e3fc21983f85.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Intense Abs Workout',
                      src: 'https://www.youtube.com/watch?v=85ici-FoXcY&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a8f9dad35363a3a03107/04e35cb0-fca7-11ec-b61e-559ee4787d5f.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Best Cooldown Stretches',
                      src: 'https://www.youtube.com/watch?v=iapsX8jB7k8&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bc25ca4df7b918c30e8bce/9fd49a10-5efd-11ec-9fce-4781ba46fa9b.jpeg',
                      duration: 16
                  },
              ]
          },
          {
              dayNum: 3,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61ce4e1f34185a9a5611e4dd/3f4ce200-69d0-11ec-9b4b-f91362ad20db.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Best Full Body HIIT',
                      src: 'https://www.youtube.com/watch?v=DCNfkVg3dps&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a87dc5a7dff24df09ae3/bb5abf20-fca6-11ec-9d53-e3fc21983f85.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Intense Abs Workout',
                      src: 'https://www.youtube.com/watch?v=85ici-FoXcY&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a8f9dad35363a3a03107/04e35cb0-fca7-11ec-b61e-559ee4787d5f.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Best Cooldown Stretches',
                      src: 'https://www.youtube.com/watch?v=iapsX8jB7k8&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bc25ca4df7b918c30e8bce/9fd49a10-5efd-11ec-9fce-4781ba46fa9b.jpeg',
                      duration: 16
                  },
              ]
          },
          {
              dayNum: 4,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61ce4e1f34185a9a5611e4dd/3f4ce200-69d0-11ec-9b4b-f91362ad20db.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Best Full Body HIIT',
                      src: 'https://www.youtube.com/watch?v=DCNfkVg3dps&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a87dc5a7dff24df09ae3/bb5abf20-fca6-11ec-9d53-e3fc21983f85.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Intense Abs Workout',
                      src: 'https://www.youtube.com/watch?v=85ici-FoXcY&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a8f9dad35363a3a03107/04e35cb0-fca7-11ec-b61e-559ee4787d5f.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Best Cooldown Stretches',
                      src: 'https://www.youtube.com/watch?v=iapsX8jB7k8&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bc25ca4df7b918c30e8bce/9fd49a10-5efd-11ec-9fce-4781ba46fa9b.jpeg',
                      duration: 16
                  },
              ]
          },
          {
              dayNum: 5,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61ce4e1f34185a9a5611e4dd/3f4ce200-69d0-11ec-9b4b-f91362ad20db.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Best Full Body HIIT',
                      src: 'https://www.youtube.com/watch?v=DCNfkVg3dps&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a87dc5a7dff24df09ae3/bb5abf20-fca6-11ec-9d53-e3fc21983f85.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Intense Abs Workout',
                      src: 'https://www.youtube.com/watch?v=85ici-FoXcY&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a8f9dad35363a3a03107/04e35cb0-fca7-11ec-b61e-559ee4787d5f.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Best Cooldown Stretches',
                      src: 'https://www.youtube.com/watch?v=iapsX8jB7k8&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bc25ca4df7b918c30e8bce/9fd49a10-5efd-11ec-9fce-4781ba46fa9b.jpeg',
                      duration: 16
                  },
              ]
          },
          {
              dayNum: 6,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61ce4e1f34185a9a5611e4dd/3f4ce200-69d0-11ec-9b4b-f91362ad20db.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Best Full Body HIIT',
                      src: 'https://www.youtube.com/watch?v=DCNfkVg3dps&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a87dc5a7dff24df09ae3/bb5abf20-fca6-11ec-9d53-e3fc21983f85.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Intense Abs Workout',
                      src: 'https://www.youtube.com/watch?v=85ici-FoXcY&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a8f9dad35363a3a03107/04e35cb0-fca7-11ec-b61e-559ee4787d5f.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Best Cooldown Stretches',
                      src: 'https://www.youtube.com/watch?v=iapsX8jB7k8&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bc25ca4df7b918c30e8bce/9fd49a10-5efd-11ec-9fce-4781ba46fa9b.jpeg',
                      duration: 16
                  },
              ]
          },
          {
              dayNum: 7,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61ce4e1f34185a9a5611e4dd/3f4ce200-69d0-11ec-9b4b-f91362ad20db.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Best Full Body HIIT',
                      src: 'https://www.youtube.com/watch?v=DCNfkVg3dps&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a87dc5a7dff24df09ae3/bb5abf20-fca6-11ec-9d53-e3fc21983f85.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Intense Abs Workout',
                      src: 'https://www.youtube.com/watch?v=85ici-FoXcY&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a8f9dad35363a3a03107/04e35cb0-fca7-11ec-b61e-559ee4787d5f.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Best Cooldown Stretches',
                      src: 'https://www.youtube.com/watch?v=iapsX8jB7k8&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bc25ca4df7b918c30e8bce/9fd49a10-5efd-11ec-9fce-4781ba46fa9b.jpeg',
                      duration: 16
                  },
              ]
          },
          {
              dayNum: 8,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61ce4e1f34185a9a5611e4dd/3f4ce200-69d0-11ec-9b4b-f91362ad20db.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Best Full Body HIIT',
                      src: 'https://www.youtube.com/watch?v=DCNfkVg3dps&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a87dc5a7dff24df09ae3/bb5abf20-fca6-11ec-9d53-e3fc21983f85.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Intense Abs Workout',
                      src: 'https://www.youtube.com/watch?v=85ici-FoXcY&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a8f9dad35363a3a03107/04e35cb0-fca7-11ec-b61e-559ee4787d5f.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Best Cooldown Stretches',
                      src: 'https://www.youtube.com/watch?v=iapsX8jB7k8&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bc25ca4df7b918c30e8bce/9fd49a10-5efd-11ec-9fce-4781ba46fa9b.jpeg',
                      duration: 16
                  },
              ]
          },
          {
              dayNum: 9,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61ce4e1f34185a9a5611e4dd/3f4ce200-69d0-11ec-9b4b-f91362ad20db.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Best Full Body HIIT',
                      src: 'https://www.youtube.com/watch?v=DCNfkVg3dps&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a87dc5a7dff24df09ae3/bb5abf20-fca6-11ec-9d53-e3fc21983f85.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Intense Abs Workout',
                      src: 'https://www.youtube.com/watch?v=85ici-FoXcY&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a8f9dad35363a3a03107/04e35cb0-fca7-11ec-b61e-559ee4787d5f.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Best Cooldown Stretches',
                      src: 'https://www.youtube.com/watch?v=iapsX8jB7k8&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bc25ca4df7b918c30e8bce/9fd49a10-5efd-11ec-9fce-4781ba46fa9b.jpeg',
                      duration: 16
                  },
              ]
          },
          {
              dayNum: 10,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61ce4e1f34185a9a5611e4dd/3f4ce200-69d0-11ec-9b4b-f91362ad20db.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Best Full Body HIIT',
                      src: 'https://www.youtube.com/watch?v=DCNfkVg3dps&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a87dc5a7dff24df09ae3/bb5abf20-fca6-11ec-9d53-e3fc21983f85.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Intense Abs Workout',
                      src: 'https://www.youtube.com/watch?v=85ici-FoXcY&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a8f9dad35363a3a03107/04e35cb0-fca7-11ec-b61e-559ee4787d5f.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Best Cooldown Stretches',
                      src: 'https://www.youtube.com/watch?v=iapsX8jB7k8&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bc25ca4df7b918c30e8bce/9fd49a10-5efd-11ec-9fce-4781ba46fa9b.jpeg',
                      duration: 16
                  },
              ]
          },
          {
              dayNum: 11,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61ce4e1f34185a9a5611e4dd/3f4ce200-69d0-11ec-9b4b-f91362ad20db.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Best Full Body HIIT',
                      src: 'https://www.youtube.com/watch?v=DCNfkVg3dps&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a87dc5a7dff24df09ae3/bb5abf20-fca6-11ec-9d53-e3fc21983f85.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Intense Abs Workout',
                      src: 'https://www.youtube.com/watch?v=85ici-FoXcY&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a8f9dad35363a3a03107/04e35cb0-fca7-11ec-b61e-559ee4787d5f.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Best Cooldown Stretches',
                      src: 'https://www.youtube.com/watch?v=iapsX8jB7k8&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bc25ca4df7b918c30e8bce/9fd49a10-5efd-11ec-9fce-4781ba46fa9b.jpeg',
                      duration: 16
                  },
              ]
          },
          {
              dayNum: 12,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61ce4e1f34185a9a5611e4dd/3f4ce200-69d0-11ec-9b4b-f91362ad20db.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Best Full Body HIIT',
                      src: 'https://www.youtube.com/watch?v=DCNfkVg3dps&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a87dc5a7dff24df09ae3/bb5abf20-fca6-11ec-9d53-e3fc21983f85.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Intense Abs Workout',
                      src: 'https://www.youtube.com/watch?v=85ici-FoXcY&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a8f9dad35363a3a03107/04e35cb0-fca7-11ec-b61e-559ee4787d5f.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Best Cooldown Stretches',
                      src: 'https://www.youtube.com/watch?v=iapsX8jB7k8&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bc25ca4df7b918c30e8bce/9fd49a10-5efd-11ec-9fce-4781ba46fa9b.jpeg',
                      duration: 16
                  },
              ]
          },
          {
              dayNum: 13,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61ce4e1f34185a9a5611e4dd/3f4ce200-69d0-11ec-9b4b-f91362ad20db.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Best Full Body HIIT',
                      src: 'https://www.youtube.com/watch?v=DCNfkVg3dps&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a87dc5a7dff24df09ae3/bb5abf20-fca6-11ec-9d53-e3fc21983f85.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Intense Abs Workout',
                      src: 'https://www.youtube.com/watch?v=85ici-FoXcY&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a8f9dad35363a3a03107/04e35cb0-fca7-11ec-b61e-559ee4787d5f.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Best Cooldown Stretches',
                      src: 'https://www.youtube.com/watch?v=iapsX8jB7k8&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bc25ca4df7b918c30e8bce/9fd49a10-5efd-11ec-9fce-4781ba46fa9b.jpeg',
                      duration: 16
                  },
              ]
          },
          {
              dayNum: 14,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61ce4e1f34185a9a5611e4dd/3f4ce200-69d0-11ec-9b4b-f91362ad20db.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Best Full Body HIIT',
                      src: 'https://www.youtube.com/watch?v=DCNfkVg3dps&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a87dc5a7dff24df09ae3/bb5abf20-fca6-11ec-9d53-e3fc21983f85.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Intense Abs Workout',
                      src: 'https://www.youtube.com/watch?v=85ici-FoXcY&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a8f9dad35363a3a03107/04e35cb0-fca7-11ec-b61e-559ee4787d5f.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Best Cooldown Stretches',
                      src: 'https://www.youtube.com/watch?v=iapsX8jB7k8&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bc25ca4df7b918c30e8bce/9fd49a10-5efd-11ec-9fce-4781ba46fa9b.jpeg',
                      duration: 16
                  },
              ]
          },
          {
              dayNum: 15,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61ce4e1f34185a9a5611e4dd/3f4ce200-69d0-11ec-9b4b-f91362ad20db.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Best Full Body HIIT',
                      src: 'https://www.youtube.com/watch?v=DCNfkVg3dps&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a87dc5a7dff24df09ae3/bb5abf20-fca6-11ec-9d53-e3fc21983f85.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Intense Abs Workout',
                      src: 'https://www.youtube.com/watch?v=85ici-FoXcY&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a8f9dad35363a3a03107/04e35cb0-fca7-11ec-b61e-559ee4787d5f.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Best Cooldown Stretches',
                      src: 'https://www.youtube.com/watch?v=iapsX8jB7k8&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bc25ca4df7b918c30e8bce/9fd49a10-5efd-11ec-9fce-4781ba46fa9b.jpeg',
                      duration: 16
                  },
              ]
          },
          {
              dayNum: 16,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61ce4e1f34185a9a5611e4dd/3f4ce200-69d0-11ec-9b4b-f91362ad20db.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Best Full Body HIIT',
                      src: 'https://www.youtube.com/watch?v=DCNfkVg3dps&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a87dc5a7dff24df09ae3/bb5abf20-fca6-11ec-9d53-e3fc21983f85.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Intense Abs Workout',
                      src: 'https://www.youtube.com/watch?v=85ici-FoXcY&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a8f9dad35363a3a03107/04e35cb0-fca7-11ec-b61e-559ee4787d5f.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Best Cooldown Stretches',
                      src: 'https://www.youtube.com/watch?v=iapsX8jB7k8&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bc25ca4df7b918c30e8bce/9fd49a10-5efd-11ec-9fce-4781ba46fa9b.jpeg',
                      duration: 16
                  },
              ]
          },
          {
              dayNum: 17,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61ce4e1f34185a9a5611e4dd/3f4ce200-69d0-11ec-9b4b-f91362ad20db.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Best Full Body HIIT',
                      src: 'https://www.youtube.com/watch?v=DCNfkVg3dps&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a87dc5a7dff24df09ae3/bb5abf20-fca6-11ec-9d53-e3fc21983f85.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Intense Abs Workout',
                      src: 'https://www.youtube.com/watch?v=85ici-FoXcY&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a8f9dad35363a3a03107/04e35cb0-fca7-11ec-b61e-559ee4787d5f.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Best Cooldown Stretches',
                      src: 'https://www.youtube.com/watch?v=iapsX8jB7k8&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bc25ca4df7b918c30e8bce/9fd49a10-5efd-11ec-9fce-4781ba46fa9b.jpeg',
                      duration: 16
                  },
              ]
          },
          {
              dayNum: 18,
              videos: [
                  {
                      title: '5 Min Warm Up',
                      src: 'https://www.youtube.com/watch?v=7t1qhpDLSi0&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61ce4e1f34185a9a5611e4dd/3f4ce200-69d0-11ec-9b4b-f91362ad20db.jpeg',
                      duration: 5
                  },
                  {
                      title: 'Best Full Body HIIT',
                      src: 'https://www.youtube.com/watch?v=DCNfkVg3dps&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a87dc5a7dff24df09ae3/bb5abf20-fca6-11ec-9d53-e3fc21983f85.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Intense Abs Workout',
                      src: 'https://www.youtube.com/watch?v=85ici-FoXcY&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/62c4a8f9dad35363a3a03107/04e35cb0-fca7-11ec-b61e-559ee4787d5f.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Best Cooldown Stretches',
                      src: 'https://www.youtube.com/watch?v=iapsX8jB7k8&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bc25ca4df7b918c30e8bce/9fd49a10-5efd-11ec-9fce-4781ba46fa9b.jpeg',
                      duration: 16
                  },
              ]
          },
      ]
  },
  {
      programId: 4,
      days: [
          {
              dayNum: 1,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Shredded Arms Workout',
                      src: 'https://www.youtube.com/watch?v=5qCjyzbKmAE&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdde02d47479a9df23575/c2f8c870-5ed2-11ec-9a04-3fd984621d67.jpeg',
                      duration: 14
                  },
                  {
                      title: 'Do This Everyday to Lose Weight',
                      src: 'https://www.youtube.com/watch?v=2MoGxae-zyo&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdc7e2cb3b78eb6ac2bba/efca6f80-5ed1-11ec-b182-df31ae6aab45.jpeg',
                      duration: 14
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 2,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Shredded Arms Workout',
                      src: 'https://www.youtube.com/watch?v=5qCjyzbKmAE&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdde02d47479a9df23575/c2f8c870-5ed2-11ec-9a04-3fd984621d67.jpeg',
                      duration: 14
                  },
                  {
                      title: 'Do This Everyday to Lose Weight',
                      src: 'https://www.youtube.com/watch?v=2MoGxae-zyo&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdc7e2cb3b78eb6ac2bba/efca6f80-5ed1-11ec-b182-df31ae6aab45.jpeg',
                      duration: 14
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 3,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Shredded Arms Workout',
                      src: 'https://www.youtube.com/watch?v=5qCjyzbKmAE&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdde02d47479a9df23575/c2f8c870-5ed2-11ec-9a04-3fd984621d67.jpeg',
                      duration: 14
                  },
                  {
                      title: 'Do This Everyday to Lose Weight',
                      src: 'https://www.youtube.com/watch?v=2MoGxae-zyo&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdc7e2cb3b78eb6ac2bba/efca6f80-5ed1-11ec-b182-df31ae6aab45.jpeg',
                      duration: 14
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 4,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Shredded Arms Workout',
                      src: 'https://www.youtube.com/watch?v=5qCjyzbKmAE&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdde02d47479a9df23575/c2f8c870-5ed2-11ec-9a04-3fd984621d67.jpeg',
                      duration: 14
                  },
                  {
                      title: 'Do This Everyday to Lose Weight',
                      src: 'https://www.youtube.com/watch?v=2MoGxae-zyo&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdc7e2cb3b78eb6ac2bba/efca6f80-5ed1-11ec-b182-df31ae6aab45.jpeg',
                      duration: 14
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 5,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Shredded Arms Workout',
                      src: 'https://www.youtube.com/watch?v=5qCjyzbKmAE&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdde02d47479a9df23575/c2f8c870-5ed2-11ec-9a04-3fd984621d67.jpeg',
                      duration: 14
                  },
                  {
                      title: 'Do This Everyday to Lose Weight',
                      src: 'https://www.youtube.com/watch?v=2MoGxae-zyo&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdc7e2cb3b78eb6ac2bba/efca6f80-5ed1-11ec-b182-df31ae6aab45.jpeg',
                      duration: 14
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 6,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Shredded Arms Workout',
                      src: 'https://www.youtube.com/watch?v=5qCjyzbKmAE&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdde02d47479a9df23575/c2f8c870-5ed2-11ec-9a04-3fd984621d67.jpeg',
                      duration: 14
                  },
                  {
                      title: 'Do This Everyday to Lose Weight',
                      src: 'https://www.youtube.com/watch?v=2MoGxae-zyo&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdc7e2cb3b78eb6ac2bba/efca6f80-5ed1-11ec-b182-df31ae6aab45.jpeg',
                      duration: 14
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 7,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Shredded Arms Workout',
                      src: 'https://www.youtube.com/watch?v=5qCjyzbKmAE&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdde02d47479a9df23575/c2f8c870-5ed2-11ec-9a04-3fd984621d67.jpeg',
                      duration: 14
                  },
                  {
                      title: 'Do This Everyday to Lose Weight',
                      src: 'https://www.youtube.com/watch?v=2MoGxae-zyo&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdc7e2cb3b78eb6ac2bba/efca6f80-5ed1-11ec-b182-df31ae6aab45.jpeg',
                      duration: 14
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 8,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Shredded Arms Workout',
                      src: 'https://www.youtube.com/watch?v=5qCjyzbKmAE&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdde02d47479a9df23575/c2f8c870-5ed2-11ec-9a04-3fd984621d67.jpeg',
                      duration: 14
                  },
                  {
                      title: 'Do This Everyday to Lose Weight',
                      src: 'https://www.youtube.com/watch?v=2MoGxae-zyo&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdc7e2cb3b78eb6ac2bba/efca6f80-5ed1-11ec-b182-df31ae6aab45.jpeg',
                      duration: 14
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 9,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Shredded Arms Workout',
                      src: 'https://www.youtube.com/watch?v=5qCjyzbKmAE&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdde02d47479a9df23575/c2f8c870-5ed2-11ec-9a04-3fd984621d67.jpeg',
                      duration: 14
                  },
                  {
                      title: 'Do This Everyday to Lose Weight',
                      src: 'https://www.youtube.com/watch?v=2MoGxae-zyo&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdc7e2cb3b78eb6ac2bba/efca6f80-5ed1-11ec-b182-df31ae6aab45.jpeg',
                      duration: 14
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 10,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Shredded Arms Workout',
                      src: 'https://www.youtube.com/watch?v=5qCjyzbKmAE&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdde02d47479a9df23575/c2f8c870-5ed2-11ec-9a04-3fd984621d67.jpeg',
                      duration: 14
                  },
                  {
                      title: 'Do This Everyday to Lose Weight',
                      src: 'https://www.youtube.com/watch?v=2MoGxae-zyo&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdc7e2cb3b78eb6ac2bba/efca6f80-5ed1-11ec-b182-df31ae6aab45.jpeg',
                      duration: 14
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 11,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Shredded Arms Workout',
                      src: 'https://www.youtube.com/watch?v=5qCjyzbKmAE&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdde02d47479a9df23575/c2f8c870-5ed2-11ec-9a04-3fd984621d67.jpeg',
                      duration: 14
                  },
                  {
                      title: 'Do This Everyday to Lose Weight',
                      src: 'https://www.youtube.com/watch?v=2MoGxae-zyo&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdc7e2cb3b78eb6ac2bba/efca6f80-5ed1-11ec-b182-df31ae6aab45.jpeg',
                      duration: 14
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 12,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Shredded Arms Workout',
                      src: 'https://www.youtube.com/watch?v=5qCjyzbKmAE&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdde02d47479a9df23575/c2f8c870-5ed2-11ec-9a04-3fd984621d67.jpeg',
                      duration: 14
                  },
                  {
                      title: 'Do This Everyday to Lose Weight',
                      src: 'https://www.youtube.com/watch?v=2MoGxae-zyo&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdc7e2cb3b78eb6ac2bba/efca6f80-5ed1-11ec-b182-df31ae6aab45.jpeg',
                      duration: 14
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 13,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Shredded Arms Workout',
                      src: 'https://www.youtube.com/watch?v=5qCjyzbKmAE&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdde02d47479a9df23575/c2f8c870-5ed2-11ec-9a04-3fd984621d67.jpeg',
                      duration: 14
                  },
                  {
                      title: 'Do This Everyday to Lose Weight',
                      src: 'https://www.youtube.com/watch?v=2MoGxae-zyo&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdc7e2cb3b78eb6ac2bba/efca6f80-5ed1-11ec-b182-df31ae6aab45.jpeg',
                      duration: 14
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 14,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Shredded Arms Workout',
                      src: 'https://www.youtube.com/watch?v=5qCjyzbKmAE&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdde02d47479a9df23575/c2f8c870-5ed2-11ec-9a04-3fd984621d67.jpeg',
                      duration: 14
                  },
                  {
                      title: 'Do This Everyday to Lose Weight',
                      src: 'https://www.youtube.com/watch?v=2MoGxae-zyo&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdc7e2cb3b78eb6ac2bba/efca6f80-5ed1-11ec-b182-df31ae6aab45.jpeg',
                      duration: 14
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 15,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Shredded Arms Workout',
                      src: 'https://www.youtube.com/watch?v=5qCjyzbKmAE&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdde02d47479a9df23575/c2f8c870-5ed2-11ec-9a04-3fd984621d67.jpeg',
                      duration: 14
                  },
                  {
                      title: 'Do This Everyday to Lose Weight',
                      src: 'https://www.youtube.com/watch?v=2MoGxae-zyo&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdc7e2cb3b78eb6ac2bba/efca6f80-5ed1-11ec-b182-df31ae6aab45.jpeg',
                      duration: 14
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 16,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Shredded Arms Workout',
                      src: 'https://www.youtube.com/watch?v=5qCjyzbKmAE&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdde02d47479a9df23575/c2f8c870-5ed2-11ec-9a04-3fd984621d67.jpeg',
                      duration: 14
                  },
                  {
                      title: 'Do This Everyday to Lose Weight',
                      src: 'https://www.youtube.com/watch?v=2MoGxae-zyo&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdc7e2cb3b78eb6ac2bba/efca6f80-5ed1-11ec-b182-df31ae6aab45.jpeg',
                      duration: 14
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 17,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Shredded Arms Workout',
                      src: 'https://www.youtube.com/watch?v=5qCjyzbKmAE&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdde02d47479a9df23575/c2f8c870-5ed2-11ec-9a04-3fd984621d67.jpeg',
                      duration: 14
                  },
                  {
                      title: 'Do This Everyday to Lose Weight',
                      src: 'https://www.youtube.com/watch?v=2MoGxae-zyo&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdc7e2cb3b78eb6ac2bba/efca6f80-5ed1-11ec-b182-df31ae6aab45.jpeg',
                      duration: 14
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 18,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Shredded Arms Workout',
                      src: 'https://www.youtube.com/watch?v=5qCjyzbKmAE&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdde02d47479a9df23575/c2f8c870-5ed2-11ec-9a04-3fd984621d67.jpeg',
                      duration: 14
                  },
                  {
                      title: 'Do This Everyday to Lose Weight',
                      src: 'https://www.youtube.com/watch?v=2MoGxae-zyo&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdc7e2cb3b78eb6ac2bba/efca6f80-5ed1-11ec-b182-df31ae6aab45.jpeg',
                      duration: 14
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 19,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Shredded Arms Workout',
                      src: 'https://www.youtube.com/watch?v=5qCjyzbKmAE&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdde02d47479a9df23575/c2f8c870-5ed2-11ec-9a04-3fd984621d67.jpeg',
                      duration: 14
                  },
                  {
                      title: 'Do This Everyday to Lose Weight',
                      src: 'https://www.youtube.com/watch?v=2MoGxae-zyo&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdc7e2cb3b78eb6ac2bba/efca6f80-5ed1-11ec-b182-df31ae6aab45.jpeg',
                      duration: 14
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 20,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Shredded Arms Workout',
                      src: 'https://www.youtube.com/watch?v=5qCjyzbKmAE&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdde02d47479a9df23575/c2f8c870-5ed2-11ec-9a04-3fd984621d67.jpeg',
                      duration: 14
                  },
                  {
                      title: 'Do This Everyday to Lose Weight',
                      src: 'https://www.youtube.com/watch?v=2MoGxae-zyo&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdc7e2cb3b78eb6ac2bba/efca6f80-5ed1-11ec-b182-df31ae6aab45.jpeg',
                      duration: 14
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 21,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Shredded Arms Workout',
                      src: 'https://www.youtube.com/watch?v=5qCjyzbKmAE&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdde02d47479a9df23575/c2f8c870-5ed2-11ec-9a04-3fd984621d67.jpeg',
                      duration: 14
                  },
                  {
                      title: 'Do This Everyday to Lose Weight',
                      src: 'https://www.youtube.com/watch?v=2MoGxae-zyo&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdc7e2cb3b78eb6ac2bba/efca6f80-5ed1-11ec-b182-df31ae6aab45.jpeg',
                      duration: 14
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
      ]
  },
  {
      programId: 5,
      days: [
          {
              dayNum: 1,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Tiny Waist Round Butt',
                      src: 'https://www.youtube.com/watch?v=cIuiQyfKBTg&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf3f62d47479a9df235a8/ed177c20-5edf-11ec-9a04-3fd984621d67.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Abs in 2 Weeks',
                      src: 'https://www.youtube.com/watch?v=2pLT-olgUJs&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdcdd017bbb985e15f8eb/28972560-5ed2-11ec-b99f-c33e6b9468db.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 2,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Tiny Waist Round Butt',
                      src: 'https://www.youtube.com/watch?v=cIuiQyfKBTg&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf3f62d47479a9df235a8/ed177c20-5edf-11ec-9a04-3fd984621d67.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Abs in 2 Weeks',
                      src: 'https://www.youtube.com/watch?v=2pLT-olgUJs&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdcdd017bbb985e15f8eb/28972560-5ed2-11ec-b99f-c33e6b9468db.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 3,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Tiny Waist Round Butt',
                      src: 'https://www.youtube.com/watch?v=cIuiQyfKBTg&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf3f62d47479a9df235a8/ed177c20-5edf-11ec-9a04-3fd984621d67.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Abs in 2 Weeks',
                      src: 'https://www.youtube.com/watch?v=2pLT-olgUJs&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdcdd017bbb985e15f8eb/28972560-5ed2-11ec-b99f-c33e6b9468db.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 4,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Tiny Waist Round Butt',
                      src: 'https://www.youtube.com/watch?v=cIuiQyfKBTg&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf3f62d47479a9df235a8/ed177c20-5edf-11ec-9a04-3fd984621d67.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Abs in 2 Weeks',
                      src: 'https://www.youtube.com/watch?v=2pLT-olgUJs&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdcdd017bbb985e15f8eb/28972560-5ed2-11ec-b99f-c33e6b9468db.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 5,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Tiny Waist Round Butt',
                      src: 'https://www.youtube.com/watch?v=cIuiQyfKBTg&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf3f62d47479a9df235a8/ed177c20-5edf-11ec-9a04-3fd984621d67.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Abs in 2 Weeks',
                      src: 'https://www.youtube.com/watch?v=2pLT-olgUJs&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdcdd017bbb985e15f8eb/28972560-5ed2-11ec-b99f-c33e6b9468db.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 6,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Tiny Waist Round Butt',
                      src: 'https://www.youtube.com/watch?v=cIuiQyfKBTg&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf3f62d47479a9df235a8/ed177c20-5edf-11ec-9a04-3fd984621d67.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Abs in 2 Weeks',
                      src: 'https://www.youtube.com/watch?v=2pLT-olgUJs&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdcdd017bbb985e15f8eb/28972560-5ed2-11ec-b99f-c33e6b9468db.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 7,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Tiny Waist Round Butt',
                      src: 'https://www.youtube.com/watch?v=cIuiQyfKBTg&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf3f62d47479a9df235a8/ed177c20-5edf-11ec-9a04-3fd984621d67.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Abs in 2 Weeks',
                      src: 'https://www.youtube.com/watch?v=2pLT-olgUJs&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdcdd017bbb985e15f8eb/28972560-5ed2-11ec-b99f-c33e6b9468db.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 8,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Tiny Waist Round Butt',
                      src: 'https://www.youtube.com/watch?v=cIuiQyfKBTg&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf3f62d47479a9df235a8/ed177c20-5edf-11ec-9a04-3fd984621d67.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Abs in 2 Weeks',
                      src: 'https://www.youtube.com/watch?v=2pLT-olgUJs&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdcdd017bbb985e15f8eb/28972560-5ed2-11ec-b99f-c33e6b9468db.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 9,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Tiny Waist Round Butt',
                      src: 'https://www.youtube.com/watch?v=cIuiQyfKBTg&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf3f62d47479a9df235a8/ed177c20-5edf-11ec-9a04-3fd984621d67.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Abs in 2 Weeks',
                      src: 'https://www.youtube.com/watch?v=2pLT-olgUJs&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdcdd017bbb985e15f8eb/28972560-5ed2-11ec-b99f-c33e6b9468db.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 10,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Tiny Waist Round Butt',
                      src: 'https://www.youtube.com/watch?v=cIuiQyfKBTg&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf3f62d47479a9df235a8/ed177c20-5edf-11ec-9a04-3fd984621d67.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Abs in 2 Weeks',
                      src: 'https://www.youtube.com/watch?v=2pLT-olgUJs&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdcdd017bbb985e15f8eb/28972560-5ed2-11ec-b99f-c33e6b9468db.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 11,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Tiny Waist Round Butt',
                      src: 'https://www.youtube.com/watch?v=cIuiQyfKBTg&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf3f62d47479a9df235a8/ed177c20-5edf-11ec-9a04-3fd984621d67.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Abs in 2 Weeks',
                      src: 'https://www.youtube.com/watch?v=2pLT-olgUJs&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdcdd017bbb985e15f8eb/28972560-5ed2-11ec-b99f-c33e6b9468db.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 12,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Tiny Waist Round Butt',
                      src: 'https://www.youtube.com/watch?v=cIuiQyfKBTg&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf3f62d47479a9df235a8/ed177c20-5edf-11ec-9a04-3fd984621d67.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Abs in 2 Weeks',
                      src: 'https://www.youtube.com/watch?v=2pLT-olgUJs&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdcdd017bbb985e15f8eb/28972560-5ed2-11ec-b99f-c33e6b9468db.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 13,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Tiny Waist Round Butt',
                      src: 'https://www.youtube.com/watch?v=cIuiQyfKBTg&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf3f62d47479a9df235a8/ed177c20-5edf-11ec-9a04-3fd984621d67.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Abs in 2 Weeks',
                      src: 'https://www.youtube.com/watch?v=2pLT-olgUJs&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdcdd017bbb985e15f8eb/28972560-5ed2-11ec-b99f-c33e6b9468db.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 14,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Tiny Waist Round Butt',
                      src: 'https://www.youtube.com/watch?v=cIuiQyfKBTg&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf3f62d47479a9df235a8/ed177c20-5edf-11ec-9a04-3fd984621d67.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Abs in 2 Weeks',
                      src: 'https://www.youtube.com/watch?v=2pLT-olgUJs&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdcdd017bbb985e15f8eb/28972560-5ed2-11ec-b99f-c33e6b9468db.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 15,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Tiny Waist Round Butt',
                      src: 'https://www.youtube.com/watch?v=cIuiQyfKBTg&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf3f62d47479a9df235a8/ed177c20-5edf-11ec-9a04-3fd984621d67.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Abs in 2 Weeks',
                      src: 'https://www.youtube.com/watch?v=2pLT-olgUJs&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdcdd017bbb985e15f8eb/28972560-5ed2-11ec-b99f-c33e6b9468db.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 16,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Tiny Waist Round Butt',
                      src: 'https://www.youtube.com/watch?v=cIuiQyfKBTg&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf3f62d47479a9df235a8/ed177c20-5edf-11ec-9a04-3fd984621d67.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Abs in 2 Weeks',
                      src: 'https://www.youtube.com/watch?v=2pLT-olgUJs&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdcdd017bbb985e15f8eb/28972560-5ed2-11ec-b99f-c33e6b9468db.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 17,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Tiny Waist Round Butt',
                      src: 'https://www.youtube.com/watch?v=cIuiQyfKBTg&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf3f62d47479a9df235a8/ed177c20-5edf-11ec-9a04-3fd984621d67.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Abs in 2 Weeks',
                      src: 'https://www.youtube.com/watch?v=2pLT-olgUJs&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdcdd017bbb985e15f8eb/28972560-5ed2-11ec-b99f-c33e6b9468db.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 18,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Tiny Waist Round Butt',
                      src: 'https://www.youtube.com/watch?v=cIuiQyfKBTg&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf3f62d47479a9df235a8/ed177c20-5edf-11ec-9a04-3fd984621d67.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Abs in 2 Weeks',
                      src: 'https://www.youtube.com/watch?v=2pLT-olgUJs&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdcdd017bbb985e15f8eb/28972560-5ed2-11ec-b99f-c33e6b9468db.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 19,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Tiny Waist Round Butt',
                      src: 'https://www.youtube.com/watch?v=cIuiQyfKBTg&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf3f62d47479a9df235a8/ed177c20-5edf-11ec-9a04-3fd984621d67.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Abs in 2 Weeks',
                      src: 'https://www.youtube.com/watch?v=2pLT-olgUJs&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdcdd017bbb985e15f8eb/28972560-5ed2-11ec-b99f-c33e6b9468db.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 20,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Tiny Waist Round Butt',
                      src: 'https://www.youtube.com/watch?v=cIuiQyfKBTg&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf3f62d47479a9df235a8/ed177c20-5edf-11ec-9a04-3fd984621d67.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Abs in 2 Weeks',
                      src: 'https://www.youtube.com/watch?v=2pLT-olgUJs&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdcdd017bbb985e15f8eb/28972560-5ed2-11ec-b99f-c33e6b9468db.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 21,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Tiny Waist Round Butt',
                      src: 'https://www.youtube.com/watch?v=cIuiQyfKBTg&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf3f62d47479a9df235a8/ed177c20-5edf-11ec-9a04-3fd984621d67.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Abs in 2 Weeks',
                      src: 'https://www.youtube.com/watch?v=2pLT-olgUJs&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdcdd017bbb985e15f8eb/28972560-5ed2-11ec-b99f-c33e6b9468db.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 22,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Tiny Waist Round Butt',
                      src: 'https://www.youtube.com/watch?v=cIuiQyfKBTg&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf3f62d47479a9df235a8/ed177c20-5edf-11ec-9a04-3fd984621d67.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Abs in 2 Weeks',
                      src: 'https://www.youtube.com/watch?v=2pLT-olgUJs&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdcdd017bbb985e15f8eb/28972560-5ed2-11ec-b99f-c33e6b9468db.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 23,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Tiny Waist Round Butt',
                      src: 'https://www.youtube.com/watch?v=cIuiQyfKBTg&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf3f62d47479a9df235a8/ed177c20-5edf-11ec-9a04-3fd984621d67.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Abs in 2 Weeks',
                      src: 'https://www.youtube.com/watch?v=2pLT-olgUJs&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdcdd017bbb985e15f8eb/28972560-5ed2-11ec-b99f-c33e6b9468db.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 24,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Tiny Waist Round Butt',
                      src: 'https://www.youtube.com/watch?v=cIuiQyfKBTg&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf3f62d47479a9df235a8/ed177c20-5edf-11ec-9a04-3fd984621d67.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Abs in 2 Weeks',
                      src: 'https://www.youtube.com/watch?v=2pLT-olgUJs&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdcdd017bbb985e15f8eb/28972560-5ed2-11ec-b99f-c33e6b9468db.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 25,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Tiny Waist Round Butt',
                      src: 'https://www.youtube.com/watch?v=cIuiQyfKBTg&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf3f62d47479a9df235a8/ed177c20-5edf-11ec-9a04-3fd984621d67.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Abs in 2 Weeks',
                      src: 'https://www.youtube.com/watch?v=2pLT-olgUJs&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdcdd017bbb985e15f8eb/28972560-5ed2-11ec-b99f-c33e6b9468db.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
      ]
  },
  {
      programId: 6,
      days: [
          {
              dayNum: 1,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Grow Booty & Not Thighs',
                      src: 'https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg',
                      duration: 21
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 2,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Grow Booty & Not Thighs',
                      src: 'https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg',
                      duration: 21
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 3,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Grow Booty & Not Thighs',
                      src: 'https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg',
                      duration: 21
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 4,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Grow Booty & Not Thighs',
                      src: 'https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg',
                      duration: 21
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 5,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Grow Booty & Not Thighs',
                      src: 'https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg',
                      duration: 21
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 6,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Grow Booty & Not Thighs',
                      src: 'https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg',
                      duration: 21
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 7,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Grow Booty & Not Thighs',
                      src: 'https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg',
                      duration: 21
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 8,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Grow Booty & Not Thighs',
                      src: 'https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg',
                      duration: 21
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 9,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Grow Booty & Not Thighs',
                      src: 'https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg',
                      duration: 21
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 10,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Grow Booty & Not Thighs',
                      src: 'https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg',
                      duration: 21
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 11,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Grow Booty & Not Thighs',
                      src: 'https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg',
                      duration: 21
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 12,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Grow Booty & Not Thighs',
                      src: 'https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg',
                      duration: 21
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 13,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Grow Booty & Not Thighs',
                      src: 'https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg',
                      duration: 21
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 14,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Grow Booty & Not Thighs',
                      src: 'https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg',
                      duration: 21
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 15,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Grow Booty & Not Thighs',
                      src: 'https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg',
                      duration: 21
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 16,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Grow Booty & Not Thighs',
                      src: 'https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg',
                      duration: 21
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 17,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Grow Booty & Not Thighs',
                      src: 'https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg',
                      duration: 21
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 18,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Grow Booty & Not Thighs',
                      src: 'https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg',
                      duration: 21
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 19,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Grow Booty & Not Thighs',
                      src: 'https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg',
                      duration: 21
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 20,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Grow Booty & Not Thighs',
                      src: 'https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg',
                      duration: 21
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 21,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Grow Booty & Not Thighs',
                      src: 'https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg',
                      duration: 21
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 22,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Grow Booty & Not Thighs',
                      src: 'https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg',
                      duration: 21
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 23,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Grow Booty & Not Thighs',
                      src: 'https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg',
                      duration: 21
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 24,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Grow Booty & Not Thighs',
                      src: 'https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg',
                      duration: 21
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 25,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Grow Booty & Not Thighs',
                      src: 'https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg',
                      duration: 21
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 26,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Grow Booty & Not Thighs',
                      src: 'https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg',
                      duration: 21
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 27,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Grow Booty & Not Thighs',
                      src: 'https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg',
                      duration: 21
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 28,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Grow Booty & Not Thighs',
                      src: 'https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg',
                      duration: 21
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 29,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Grow Booty & Not Thighs',
                      src: 'https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg',
                      duration: 21
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 30,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Grow Booty & Not Thighs',
                      src: 'https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg',
                      duration: 21
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 31,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Grow Booty & Not Thighs',
                      src: 'https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg',
                      duration: 21
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 32,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Grow Booty & Not Thighs',
                      src: 'https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg',
                      duration: 21
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 33,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Grow Booty & Not Thighs',
                      src: 'https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg',
                      duration: 21
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 34,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Grow Booty & Not Thighs',
                      src: 'https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg',
                      duration: 21
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 35,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Grow Booty & Not Thighs',
                      src: 'https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg',
                      duration: 21
                  },
                  {
                      title: '11 Line Abs',
                      src: 'https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Full Body Cooldown',
                      src: 'https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 11
                  },
              ]
          },
      ]
  },
  {
      programId: 7,
      days: [
          {
              dayNum: 1,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Slim Legs',
                      src: 'https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Flat Belly Abs',
                      src: 'https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Plank Challenge',
                      src: 'https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 12
                  },
                  {
                      title: 'Slim Thigh Stretches',
                      src: 'https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 2,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Slim Legs',
                      src: 'https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Flat Belly Abs',
                      src: 'https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Plank Challenge',
                      src: 'https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 12
                  },
                  {
                      title: 'Slim Thigh Stretches',
                      src: 'https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 3,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Slim Legs',
                      src: 'https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Flat Belly Abs',
                      src: 'https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Plank Challenge',
                      src: 'https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 12
                  },
                  {
                      title: 'Slim Thigh Stretches',
                      src: 'https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 3,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Slim Legs',
                      src: 'https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Flat Belly Abs',
                      src: 'https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Plank Challenge',
                      src: 'https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 12
                  },
                  {
                      title: 'Slim Thigh Stretches',
                      src: 'https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 4,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Slim Legs',
                      src: 'https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Flat Belly Abs',
                      src: 'https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Plank Challenge',
                      src: 'https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 12
                  },
                  {
                      title: 'Slim Thigh Stretches',
                      src: 'https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 5,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Slim Legs',
                      src: 'https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Flat Belly Abs',
                      src: 'https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Plank Challenge',
                      src: 'https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 12
                  },
                  {
                      title: 'Slim Thigh Stretches',
                      src: 'https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 6,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Slim Legs',
                      src: 'https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Flat Belly Abs',
                      src: 'https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Plank Challenge',
                      src: 'https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 12
                  },
                  {
                      title: 'Slim Thigh Stretches',
                      src: 'https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 7,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Slim Legs',
                      src: 'https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Flat Belly Abs',
                      src: 'https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Plank Challenge',
                      src: 'https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 12
                  },
                  {
                      title: 'Slim Thigh Stretches',
                      src: 'https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 8,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Slim Legs',
                      src: 'https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Flat Belly Abs',
                      src: 'https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Plank Challenge',
                      src: 'https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 12
                  },
                  {
                      title: 'Slim Thigh Stretches',
                      src: 'https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 9,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Slim Legs',
                      src: 'https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Flat Belly Abs',
                      src: 'https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Plank Challenge',
                      src: 'https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 12
                  },
                  {
                      title: 'Slim Thigh Stretches',
                      src: 'https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 10,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Slim Legs',
                      src: 'https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Flat Belly Abs',
                      src: 'https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Plank Challenge',
                      src: 'https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 12
                  },
                  {
                      title: 'Slim Thigh Stretches',
                      src: 'https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 11,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Slim Legs',
                      src: 'https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Flat Belly Abs',
                      src: 'https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Plank Challenge',
                      src: 'https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 12
                  },
                  {
                      title: 'Slim Thigh Stretches',
                      src: 'https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 12,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Slim Legs',
                      src: 'https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Flat Belly Abs',
                      src: 'https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Plank Challenge',
                      src: 'https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 12
                  },
                  {
                      title: 'Slim Thigh Stretches',
                      src: 'https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 13,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Slim Legs',
                      src: 'https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Flat Belly Abs',
                      src: 'https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Plank Challenge',
                      src: 'https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 12
                  },
                  {
                      title: 'Slim Thigh Stretches',
                      src: 'https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 14,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Slim Legs',
                      src: 'https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Flat Belly Abs',
                      src: 'https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Plank Challenge',
                      src: 'https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 12
                  },
                  {
                      title: 'Slim Thigh Stretches',
                      src: 'https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 15,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Slim Legs',
                      src: 'https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Flat Belly Abs',
                      src: 'https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Plank Challenge',
                      src: 'https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 12
                  },
                  {
                      title: 'Slim Thigh Stretches',
                      src: 'https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 16,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Slim Legs',
                      src: 'https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Flat Belly Abs',
                      src: 'https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Plank Challenge',
                      src: 'https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 12
                  },
                  {
                      title: 'Slim Thigh Stretches',
                      src: 'https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 17,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Slim Legs',
                      src: 'https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Flat Belly Abs',
                      src: 'https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Plank Challenge',
                      src: 'https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 12
                  },
                  {
                      title: 'Slim Thigh Stretches',
                      src: 'https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 18,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Slim Legs',
                      src: 'https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Flat Belly Abs',
                      src: 'https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Plank Challenge',
                      src: 'https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 12
                  },
                  {
                      title: 'Slim Thigh Stretches',
                      src: 'https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 19,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Slim Legs',
                      src: 'https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Flat Belly Abs',
                      src: 'https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Plank Challenge',
                      src: 'https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 12
                  },
                  {
                      title: 'Slim Thigh Stretches',
                      src: 'https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 20,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Slim Legs',
                      src: 'https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Flat Belly Abs',
                      src: 'https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Plank Challenge',
                      src: 'https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 12
                  },
                  {
                      title: 'Slim Thigh Stretches',
                      src: 'https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 21,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Slim Legs',
                      src: 'https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Flat Belly Abs',
                      src: 'https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Plank Challenge',
                      src: 'https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 12
                  },
                  {
                      title: 'Slim Thigh Stretches',
                      src: 'https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 22,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Slim Legs',
                      src: 'https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Flat Belly Abs',
                      src: 'https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Plank Challenge',
                      src: 'https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 12
                  },
                  {
                      title: 'Slim Thigh Stretches',
                      src: 'https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 23,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Slim Legs',
                      src: 'https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Flat Belly Abs',
                      src: 'https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Plank Challenge',
                      src: 'https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 12
                  },
                  {
                      title: 'Slim Thigh Stretches',
                      src: 'https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 24,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Slim Legs',
                      src: 'https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Flat Belly Abs',
                      src: 'https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Plank Challenge',
                      src: 'https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 12
                  },
                  {
                      title: 'Slim Thigh Stretches',
                      src: 'https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 25,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Slim Legs',
                      src: 'https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Flat Belly Abs',
                      src: 'https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Plank Challenge',
                      src: 'https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 12
                  },
                  {
                      title: 'Slim Thigh Stretches',
                      src: 'https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 26,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Slim Legs',
                      src: 'https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Flat Belly Abs',
                      src: 'https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Plank Challenge',
                      src: 'https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 12
                  },
                  {
                      title: 'Slim Thigh Stretches',
                      src: 'https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 27,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Slim Legs',
                      src: 'https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Flat Belly Abs',
                      src: 'https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Plank Challenge',
                      src: 'https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 12
                  },
                  {
                      title: 'Slim Thigh Stretches',
                      src: 'https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 28,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Slim Legs',
                      src: 'https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Flat Belly Abs',
                      src: 'https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Plank Challenge',
                      src: 'https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 12
                  },
                  {
                      title: 'Slim Thigh Stretches',
                      src: 'https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 29,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Slim Legs',
                      src: 'https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Flat Belly Abs',
                      src: 'https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Plank Challenge',
                      src: 'https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 12
                  },
                  {
                      title: 'Slim Thigh Stretches',
                      src: 'https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg',
                      duration: 11
                  },
              ]
          },
          {
              dayNum: 30,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Slim Legs',
                      src: 'https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Flat Belly Abs',
                      src: 'https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Plank Challenge',
                      src: 'https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg',
                      duration: 12
                  },
                  {
                      title: 'Slim Thigh Stretches',
                      src: 'https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg',
                      duration: 11
                  },
              ]
          },
      ]
  },
  {
      programId: 8,
      days: [
          {
              dayNum: 1,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Do This Workout to Lose Weight',
                      src: 'https://www.youtube.com/watch?v=Crda1Sv9mks&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bc00884df7b918c30e8a06/6b2843e0-5ee7-11ec-b4e8-6545cdfc138f.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Abs in 2 Weeks',
                      src: 'https://www.youtube.com/watch?v=h8ctkfSx6R0&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bc1877dff295b571b03e08/af196bc0-5ef5-11ec-b4e8-6545cdfc138f.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Legs & Glutes',
                      src: 'https://www.youtube.com/watch?v=PrRResjXk6Q&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbfa342cb3b78eb6ac2c1b/a51de630-5ee3-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 14
                  },
                  {
                      title: 'Relaxation Recovery Cooldown',
                      src: 'https://www.youtube.com/watch?v=cO2RqgslEjk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf91852c5c9bf0f2550fb/fc26bde0-5ee2-11ec-b99f-c33e6b9468db.jpeg',
                      duration: 15
                  },
              ]
          },
          {
              dayNum: 2,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Do This Workout to Lose Weight',
                      src: 'https://www.youtube.com/watch?v=Crda1Sv9mks&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bc00884df7b918c30e8a06/6b2843e0-5ee7-11ec-b4e8-6545cdfc138f.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Abs in 2 Weeks',
                      src: 'https://www.youtube.com/watch?v=h8ctkfSx6R0&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bc1877dff295b571b03e08/af196bc0-5ef5-11ec-b4e8-6545cdfc138f.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Legs & Glutes',
                      src: 'https://www.youtube.com/watch?v=PrRResjXk6Q&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbfa342cb3b78eb6ac2c1b/a51de630-5ee3-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 14
                  },
                  {
                      title: 'Relaxation Recovery Cooldown',
                      src: 'https://www.youtube.com/watch?v=cO2RqgslEjk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf91852c5c9bf0f2550fb/fc26bde0-5ee2-11ec-b99f-c33e6b9468db.jpeg',
                      duration: 15
                  },
              ]
          },
          {
              dayNum: 3,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Do This Workout to Lose Weight',
                      src: 'https://www.youtube.com/watch?v=Crda1Sv9mks&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bc00884df7b918c30e8a06/6b2843e0-5ee7-11ec-b4e8-6545cdfc138f.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Abs in 2 Weeks',
                      src: 'https://www.youtube.com/watch?v=h8ctkfSx6R0&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bc1877dff295b571b03e08/af196bc0-5ef5-11ec-b4e8-6545cdfc138f.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Legs & Glutes',
                      src: 'https://www.youtube.com/watch?v=PrRResjXk6Q&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbfa342cb3b78eb6ac2c1b/a51de630-5ee3-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 14
                  },
                  {
                      title: 'Relaxation Recovery Cooldown',
                      src: 'https://www.youtube.com/watch?v=cO2RqgslEjk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf91852c5c9bf0f2550fb/fc26bde0-5ee2-11ec-b99f-c33e6b9468db.jpeg',
                      duration: 15
                  },
              ]
          },
          {
              dayNum: 4,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Do This Workout to Lose Weight',
                      src: 'https://www.youtube.com/watch?v=Crda1Sv9mks&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bc00884df7b918c30e8a06/6b2843e0-5ee7-11ec-b4e8-6545cdfc138f.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Abs in 2 Weeks',
                      src: 'https://www.youtube.com/watch?v=h8ctkfSx6R0&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bc1877dff295b571b03e08/af196bc0-5ef5-11ec-b4e8-6545cdfc138f.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Legs & Glutes',
                      src: 'https://www.youtube.com/watch?v=PrRResjXk6Q&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbfa342cb3b78eb6ac2c1b/a51de630-5ee3-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 14
                  },
                  {
                      title: 'Relaxation Recovery Cooldown',
                      src: 'https://www.youtube.com/watch?v=cO2RqgslEjk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf91852c5c9bf0f2550fb/fc26bde0-5ee2-11ec-b99f-c33e6b9468db.jpeg',
                      duration: 15
                  },
              ]
          },
          {
              dayNum: 5,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Do This Workout to Lose Weight',
                      src: 'https://www.youtube.com/watch?v=Crda1Sv9mks&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bc00884df7b918c30e8a06/6b2843e0-5ee7-11ec-b4e8-6545cdfc138f.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Abs in 2 Weeks',
                      src: 'https://www.youtube.com/watch?v=h8ctkfSx6R0&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bc1877dff295b571b03e08/af196bc0-5ef5-11ec-b4e8-6545cdfc138f.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Legs & Glutes',
                      src: 'https://www.youtube.com/watch?v=PrRResjXk6Q&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbfa342cb3b78eb6ac2c1b/a51de630-5ee3-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 14
                  },
                  {
                      title: 'Relaxation Recovery Cooldown',
                      src: 'https://www.youtube.com/watch?v=cO2RqgslEjk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf91852c5c9bf0f2550fb/fc26bde0-5ee2-11ec-b99f-c33e6b9468db.jpeg',
                      duration: 15
                  },
              ]
          },
          {
              dayNum: 6,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Do This Workout to Lose Weight',
                      src: 'https://www.youtube.com/watch?v=Crda1Sv9mks&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bc00884df7b918c30e8a06/6b2843e0-5ee7-11ec-b4e8-6545cdfc138f.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Abs in 2 Weeks',
                      src: 'https://www.youtube.com/watch?v=h8ctkfSx6R0&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bc1877dff295b571b03e08/af196bc0-5ef5-11ec-b4e8-6545cdfc138f.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Legs & Glutes',
                      src: 'https://www.youtube.com/watch?v=PrRResjXk6Q&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbfa342cb3b78eb6ac2c1b/a51de630-5ee3-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 14
                  },
                  {
                      title: 'Relaxation Recovery Cooldown',
                      src: 'https://www.youtube.com/watch?v=cO2RqgslEjk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf91852c5c9bf0f2550fb/fc26bde0-5ee2-11ec-b99f-c33e6b9468db.jpeg',
                      duration: 15
                  },
              ]
          },
          {
              dayNum: 7,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Do This Workout to Lose Weight',
                      src: 'https://www.youtube.com/watch?v=Crda1Sv9mks&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bc00884df7b918c30e8a06/6b2843e0-5ee7-11ec-b4e8-6545cdfc138f.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Abs in 2 Weeks',
                      src: 'https://www.youtube.com/watch?v=h8ctkfSx6R0&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bc1877dff295b571b03e08/af196bc0-5ef5-11ec-b4e8-6545cdfc138f.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Legs & Glutes',
                      src: 'https://www.youtube.com/watch?v=PrRResjXk6Q&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbfa342cb3b78eb6ac2c1b/a51de630-5ee3-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 14
                  },
                  {
                      title: 'Relaxation Recovery Cooldown',
                      src: 'https://www.youtube.com/watch?v=cO2RqgslEjk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf91852c5c9bf0f2550fb/fc26bde0-5ee2-11ec-b99f-c33e6b9468db.jpeg',
                      duration: 15
                  },
              ]
          },
          {
              dayNum: 8,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Do This Workout to Lose Weight',
                      src: 'https://www.youtube.com/watch?v=Crda1Sv9mks&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bc00884df7b918c30e8a06/6b2843e0-5ee7-11ec-b4e8-6545cdfc138f.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Abs in 2 Weeks',
                      src: 'https://www.youtube.com/watch?v=h8ctkfSx6R0&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bc1877dff295b571b03e08/af196bc0-5ef5-11ec-b4e8-6545cdfc138f.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Legs & Glutes',
                      src: 'https://www.youtube.com/watch?v=PrRResjXk6Q&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbfa342cb3b78eb6ac2c1b/a51de630-5ee3-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 14
                  },
                  {
                      title: 'Relaxation Recovery Cooldown',
                      src: 'https://www.youtube.com/watch?v=cO2RqgslEjk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf91852c5c9bf0f2550fb/fc26bde0-5ee2-11ec-b99f-c33e6b9468db.jpeg',
                      duration: 15
                  },
              ]
          },
          {
              dayNum: 9,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Do This Workout to Lose Weight',
                      src: 'https://www.youtube.com/watch?v=Crda1Sv9mks&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bc00884df7b918c30e8a06/6b2843e0-5ee7-11ec-b4e8-6545cdfc138f.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Abs in 2 Weeks',
                      src: 'https://www.youtube.com/watch?v=h8ctkfSx6R0&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bc1877dff295b571b03e08/af196bc0-5ef5-11ec-b4e8-6545cdfc138f.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Legs & Glutes',
                      src: 'https://www.youtube.com/watch?v=PrRResjXk6Q&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbfa342cb3b78eb6ac2c1b/a51de630-5ee3-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 14
                  },
                  {
                      title: 'Relaxation Recovery Cooldown',
                      src: 'https://www.youtube.com/watch?v=cO2RqgslEjk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf91852c5c9bf0f2550fb/fc26bde0-5ee2-11ec-b99f-c33e6b9468db.jpeg',
                      duration: 15
                  },
              ]
          },
          {
              dayNum: 10,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Do This Workout to Lose Weight',
                      src: 'https://www.youtube.com/watch?v=Crda1Sv9mks&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bc00884df7b918c30e8a06/6b2843e0-5ee7-11ec-b4e8-6545cdfc138f.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Abs in 2 Weeks',
                      src: 'https://www.youtube.com/watch?v=h8ctkfSx6R0&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bc1877dff295b571b03e08/af196bc0-5ef5-11ec-b4e8-6545cdfc138f.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Legs & Glutes',
                      src: 'https://www.youtube.com/watch?v=PrRResjXk6Q&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbfa342cb3b78eb6ac2c1b/a51de630-5ee3-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 14
                  },
                  {
                      title: 'Relaxation Recovery Cooldown',
                      src: 'https://www.youtube.com/watch?v=cO2RqgslEjk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf91852c5c9bf0f2550fb/fc26bde0-5ee2-11ec-b99f-c33e6b9468db.jpeg',
                      duration: 15
                  },
              ]
          },
          {
              dayNum: 11,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Do This Workout to Lose Weight',
                      src: 'https://www.youtube.com/watch?v=Crda1Sv9mks&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bc00884df7b918c30e8a06/6b2843e0-5ee7-11ec-b4e8-6545cdfc138f.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Abs in 2 Weeks',
                      src: 'https://www.youtube.com/watch?v=h8ctkfSx6R0&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bc1877dff295b571b03e08/af196bc0-5ef5-11ec-b4e8-6545cdfc138f.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Legs & Glutes',
                      src: 'https://www.youtube.com/watch?v=PrRResjXk6Q&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbfa342cb3b78eb6ac2c1b/a51de630-5ee3-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 14
                  },
                  {
                      title: 'Relaxation Recovery Cooldown',
                      src: 'https://www.youtube.com/watch?v=cO2RqgslEjk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf91852c5c9bf0f2550fb/fc26bde0-5ee2-11ec-b99f-c33e6b9468db.jpeg',
                      duration: 15
                  },
              ]
          },
          {
              dayNum: 12,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Do This Workout to Lose Weight',
                      src: 'https://www.youtube.com/watch?v=Crda1Sv9mks&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bc00884df7b918c30e8a06/6b2843e0-5ee7-11ec-b4e8-6545cdfc138f.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Abs in 2 Weeks',
                      src: 'https://www.youtube.com/watch?v=h8ctkfSx6R0&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bc1877dff295b571b03e08/af196bc0-5ef5-11ec-b4e8-6545cdfc138f.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Legs & Glutes',
                      src: 'https://www.youtube.com/watch?v=PrRResjXk6Q&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbfa342cb3b78eb6ac2c1b/a51de630-5ee3-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 14
                  },
                  {
                      title: 'Relaxation Recovery Cooldown',
                      src: 'https://www.youtube.com/watch?v=cO2RqgslEjk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf91852c5c9bf0f2550fb/fc26bde0-5ee2-11ec-b99f-c33e6b9468db.jpeg',
                      duration: 15
                  },
              ]
          },
          {
              dayNum: 13,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Do This Workout to Lose Weight',
                      src: 'https://www.youtube.com/watch?v=Crda1Sv9mks&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bc00884df7b918c30e8a06/6b2843e0-5ee7-11ec-b4e8-6545cdfc138f.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Abs in 2 Weeks',
                      src: 'https://www.youtube.com/watch?v=h8ctkfSx6R0&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bc1877dff295b571b03e08/af196bc0-5ef5-11ec-b4e8-6545cdfc138f.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Legs & Glutes',
                      src: 'https://www.youtube.com/watch?v=PrRResjXk6Q&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbfa342cb3b78eb6ac2c1b/a51de630-5ee3-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 14
                  },
                  {
                      title: 'Relaxation Recovery Cooldown',
                      src: 'https://www.youtube.com/watch?v=cO2RqgslEjk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf91852c5c9bf0f2550fb/fc26bde0-5ee2-11ec-b99f-c33e6b9468db.jpeg',
                      duration: 15
                  },
              ]
          },
          {
              dayNum: 14,
              videos: [
                  {
                      title: 'Warm Up',
                      src: 'https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg',
                      duration: 6,
                  },
                  {
                      title: 'Do This Workout to Lose Weight',
                      src: 'https://www.youtube.com/watch?v=Crda1Sv9mks&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bc00884df7b918c30e8a06/6b2843e0-5ee7-11ec-b4e8-6545cdfc138f.jpeg',
                      duration: 16
                  },
                  {
                      title: 'Abs in 2 Weeks',
                      src: 'https://www.youtube.com/watch?v=h8ctkfSx6R0&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bc1877dff295b571b03e08/af196bc0-5ef5-11ec-b4e8-6545cdfc138f.jpeg',
                      duration: 11
                  },
                  {
                      title: 'Legs & Glutes',
                      src: 'https://www.youtube.com/watch?v=PrRResjXk6Q&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbfa342cb3b78eb6ac2c1b/a51de630-5ee3-11ec-b8cd-2976cd667d03.jpeg',
                      duration: 14
                  },
                  {
                      title: 'Relaxation Recovery Cooldown',
                      src: 'https://www.youtube.com/watch?v=cO2RqgslEjk&feature=youtu.be&ab_channel=ChloeTing',
                      srcImg: 'https://static.chloeting.com/videos/61bbf91852c5c9bf0f2550fb/fc26bde0-5ee2-11ec-b99f-c33e6b9468db.jpeg',
                      duration: 15
                  },
              ]
          },
      ]
  }
]
