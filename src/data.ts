//@ts-nocheck
export interface Programs {
  id: number;
  title: string;
  type: string[];
  description: string;
  imageUrl1: string;
  imageUrl2: string;
  path: string;
  days: number;
  time: number[];
  equip: string[];
}

export interface Program {
  programId: number;
  days: DayProgram[];
}

export interface DayProgram {
  dayNum: number;
  videos: Video[];
}

export interface Video {
  id?: number;
  categories?: string[];
  title?: string;
  src: string;
  srcImg: string;
  duration: number;
}

export const programs: Programs[] = [
  {
    id: 1,
    title: "Weight Loss Challenge",
    type: ["Weight Loss", "Full Body"],
    description:
      "This 4 week weight loss challenge will get your entire body sweating with HIIT, cardio, abs and full body workouts.\n This program is suitable for all fitness levels as there's no jumping or equipment required, with low-impact variations throughout.",
    imageUrl1:
      "https://static.chloeting.com/programs/63ae15573e8cb6226b0c40c0/971c80f0-87c8-11ed-8684-75e08be900e2.jpeg",
    imageUrl2:
      "https://static.chloeting.com/programs/63ae15573e8cb6226b0c40c0/97331630-87c8-11ed-8684-75e08be900e2.jpeg",
    path: "/weight-loss-challenge",
    days: 28,
    time: [20, 50],
    equip: ["Fitness Mat", "Dumbbells", "Resistance Bands"],
  },
  {
    id: 2,
    title: "Grow A Booty Challenge",
    type: ["Resistance", "Booty", "Abs & Core"],
    description:
      "This 4-week resistance challenge will help you grow a booty with progressive overload! Dumbbells & resistance bands are recommended, a bench can be useful too. \n Beginners can try this with bodyweight or temporary alternatives like filled water bottles",
    imageUrl1:
      "https://static.chloeting.com/programs/6306f2a687caf1cb72ebad58/371d88d0-86d2-11ed-8daf-11eb0dd6c117.jpeg",
    imageUrl2:
      "https://static.chloeting.com/programs/6306f2a687caf1cb72ebad58/375058a0-86d2-11ed-8daf-11eb0dd6c117.jpeg",
    path: "/grow-a-booty-challenge",
    days: 28,
    time: [20, 50],
    equip: ["Fitness Mat", "Dumbbells", "Resistance Bands"],
  },
  {
    id: 3,
    title: "Get Abs Challenge",
    type: ["Weight Loss", "Full Body", "Abs & Core"],
    description:
      "Want to work those abs? This is an 18-day cardio and abs challenge that also works the rest of the body.This challenge is suitable for all fitness levels as there are no jumping and low-impact variations throughout and no equipment is required.",
    imageUrl1:
      "https://static.chloeting.com/programs/62c4acbfb88c73c70da0e9d3/5bb42460-86d2-11ed-b23e-23a8639ef2f0.jpeg",
    imageUrl2:
      "https://static.chloeting.com/programs/62c4acbfb88c73c70da0e9d3/5be28760-86d2-11ed-b23e-23a8639ef2f0.jpeg",
    path: "/get-abs-challenge",
    days: 18,
    time: [20, 40],
    equip: ["Fitness Mat", "Dumbbells", "Resistance Bands"],
  },
  {
    id: 4,
    title: "3 Weeks Lean Arms Challenge",
    type: ["Weight Loss", "Arms", "Abs & Core"],
    description:
      "Work those arms with the 3 Weeks Lean Arms challenge! Strengthen your arms and abs while burning fat with cardio workouts.This program is beginner friendly as there are low-impact variations throughout, and no equipment is required.",
    imageUrl1:
      "https://static.chloeting.com/programs/61bd013558da74df97ff3b36/b6b41f80-86d4-11ed-be97-e54de3bdbeba.jpeg",
    imageUrl2:
      "https://static.chloeting.com/programs/61bd013558da74df97ff3b36/b6c00660-86d4-11ed-be97-e54de3bdbeba.jpeg",
    path: "/lean-arms-challenge",
    days: 21,
    time: [20, 50],
    equip: ["Fitness Mat"],
  },
  {
    id: 5,
    title: "25 Days Hourglass Challenge",
    type: ["Booty", "Full Body", "Abs & Core"],
    description:
      "This 25 day challenge is great for those who want to work on that hourglass figure! This challenge features abs and booty workouts and does not contain jumping or any HIIT workouts. No equipment is required, but resistance bands are recommended",
    imageUrl1:
      "https://static.chloeting.com/programs/61bd0d5e245ccf425b8542e6/7d828d50-86d4-11ed-8daf-11eb0dd6c117.jpeg",
    imageUrl2:
      "https://static.chloeting.com/programs/61bd0d5e245ccf425b8542e6/7d8db0e0-86d4-11ed-8daf-11eb0dd6c117.jpeg",
    path: "/hourglass-program",
    days: 25,
    time: [10, 50],
    equip: ["Fitness Mat", "Resistance Bands"],
  },
  {
    id: 6,
    title: "5 Weeks Booty Challenge",
    type: ["Resistance", "Booty", "Abs & Core"],
    description:
      "Commit to working those glutes with this 5-week booty challenge! This resistance challenge also works your abs, but the primary focus is strengthening your lower body.No equipment is required but resistance bands are recommended.",
    imageUrl1:
      "https://static.chloeting.com/programs/61bd050658da74df97ff3ba8/ad6ca280-86d4-11ed-8daf-11eb0dd6c117.jpeg",
    imageUrl2:
      "https://static.chloeting.com/programs/61bd050658da74df97ff3ba8/ad7db980-86d4-11ed-8daf-11eb0dd6c117.jpeg",
    path: "/booty-challenge",
    days: 35,
    time: [10, 45],
    equip: ["Fitness Mat", "Resistance Bands"],
  },
  {
    id: 7,
    title: "Lean Thigh Challenge",
    type: ["Weight Loss", "Legs"],
    description:
      "This 30 day challenge is all about inner and outer thighs! Working those legs without bulking by pairing lower body workouts and cardio.This program is beginner friendly as there are low-impact variations throughout, and no equipment is required.",
    imageUrl1:
      "https://static.chloeting.com/programs/61bc11f837778b5b830c66ef/06d3e720-86d5-11ed-84c8-9d80008c6436.jpeg",
    imageUrl2:
      "https://static.chloeting.com/programs/61bc11f837778b5b830c66ef/06de2050-86d5-11ed-84c8-9d80008c6436.jpeg",
    path: "/lean-thigh-challenge",
    days: 30,
    time: [15, 60],
    equip: ["Fitness Mat"],
  },
  {
    id: 8,
    title: "2 Weeks Shred Challenge",
    type: ["Weight Loss", "Full Body", "Abs & Core"],
    description:
      "Get shredded with this 2-week program designed to help you lose weight with HIIT workouts and to work on those abs! This challenge is beginner friendly since it is only 14 days, has no jumping and low impact variations, and no equipment is required.",
    imageUrl1:
      "https://static.chloeting.com/programs/61bcedf7084e277b60445c9c/14eabbf0-86d4-11ed-ac64-692111ca50d9.jpeg",
    imageUrl2:
      "https://static.chloeting.com/programs/61bcedf7084e277b60445c9c/f0daa9f0-86dd-11ed-bb51-1d9f507ab313.jpeg",
    path: "/two-weeks-shred-challenge",
    days: 14,
    time: [35, 60],
    equip: ["Fitness Mat", "Dumbbells", "Resistance Bands"],
  },
];

export const programByDays: Program[] = [
  {
    programId: 1,
    days: [
      {
        dayNum: 1,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Intense HIIT",
            src: "https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg",
            duration: 16,
          },
          {
            title: "Standing Abs",
            src: "https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg",
            duration: 11,
          },
          {
            title: "Round Booty",
            src: "https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
      {
        dayNum: 2,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Intense HIIT",
            src: "https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg",
            duration: 16,
          },
          {
            title: "Standing Abs",
            src: "https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg",
            duration: 11,
          },
          {
            title: "Round Booty",
            src: "https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
      {
        dayNum: 3,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Intense HIIT",
            src: "https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg",
            duration: 16,
          },
          {
            title: "Standing Abs",
            src: "https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg",
            duration: 11,
          },
          {
            title: "Round Booty",
            src: "https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
      {
        dayNum: 4,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Intense HIIT",
            src: "https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg",
            duration: 16,
          },
          {
            title: "Standing Abs",
            src: "https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg",
            duration: 11,
          },
          {
            title: "Round Booty",
            src: "https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
      {
        dayNum: 5,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Intense HIIT",
            src: "https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg",
            duration: 16,
          },
          {
            title: "Standing Abs",
            src: "https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg",
            duration: 11,
          },
          {
            title: "Round Booty",
            src: "https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
      {
        dayNum: 6,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Intense HIIT",
            src: "https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg",
            duration: 16,
          },
          {
            title: "Standing Abs",
            src: "https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg",
            duration: 11,
          },
          {
            title: "Round Booty",
            src: "https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
      {
        dayNum: 7,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Intense HIIT",
            src: "https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg",
            duration: 16,
          },
          {
            title: "Standing Abs",
            src: "https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg",
            duration: 11,
          },
          {
            title: "Round Booty",
            src: "https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
      {
        dayNum: 8,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Intense HIIT",
            src: "https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg",
            duration: 16,
          },
          {
            title: "Standing Abs",
            src: "https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg",
            duration: 11,
          },
          {
            title: "Round Booty",
            src: "https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
      {
        dayNum: 9,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Intense HIIT",
            src: "https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg",
            duration: 16,
          },
          {
            title: "Standing Abs",
            src: "https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg",
            duration: 11,
          },
          {
            title: "Round Booty",
            src: "https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
      {
        dayNum: 10,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Intense HIIT",
            src: "https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg",
            duration: 16,
          },
          {
            title: "Standing Abs",
            src: "https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg",
            duration: 11,
          },
          {
            title: "Round Booty",
            src: "https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
      {
        dayNum: 11,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Intense HIIT",
            src: "https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg",
            duration: 16,
          },
          {
            title: "Standing Abs",
            src: "https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg",
            duration: 11,
          },
          {
            title: "Round Booty",
            src: "https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
      {
        dayNum: 12,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Intense HIIT",
            src: "https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg",
            duration: 16,
          },
          {
            title: "Standing Abs",
            src: "https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg",
            duration: 11,
          },
          {
            title: "Round Booty",
            src: "https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
      {
        dayNum: 13,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Intense HIIT",
            src: "https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg",
            duration: 16,
          },
          {
            title: "Standing Abs",
            src: "https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg",
            duration: 11,
          },
          {
            title: "Round Booty",
            src: "https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
      {
        dayNum: 14,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Intense HIIT",
            src: "https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg",
            duration: 16,
          },
          {
            title: "Standing Abs",
            src: "https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg",
            duration: 11,
          },
          {
            title: "Round Booty",
            src: "https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
      {
        dayNum: 15,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Intense HIIT",
            src: "https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg",
            duration: 16,
          },
          {
            title: "Standing Abs",
            src: "https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg",
            duration: 11,
          },
          {
            title: "Round Booty",
            src: "https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
      {
        dayNum: 16,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Intense HIIT",
            src: "https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg",
            duration: 16,
          },
          {
            title: "Standing Abs",
            src: "https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg",
            duration: 11,
          },
          {
            title: "Round Booty",
            src: "https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
      {
        dayNum: 17,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Intense HIIT",
            src: "https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg",
            duration: 16,
          },
          {
            title: "Standing Abs",
            src: "https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg",
            duration: 11,
          },
          {
            title: "Round Booty",
            src: "https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
      {
        dayNum: 18,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Intense HIIT",
            src: "https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg",
            duration: 16,
          },
          {
            title: "Standing Abs",
            src: "https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg",
            duration: 11,
          },
          {
            title: "Round Booty",
            src: "https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
      {
        dayNum: 19,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Intense HIIT",
            src: "https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg",
            duration: 16,
          },
          {
            title: "Standing Abs",
            src: "https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg",
            duration: 11,
          },
          {
            title: "Round Booty",
            src: "https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
      {
        dayNum: 20,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Intense HIIT",
            src: "https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg",
            duration: 16,
          },
          {
            title: "Standing Abs",
            src: "https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg",
            duration: 11,
          },
          {
            title: "Round Booty",
            src: "https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
      {
        dayNum: 21,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Intense HIIT",
            src: "https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg",
            duration: 16,
          },
          {
            title: "Standing Abs",
            src: "https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg",
            duration: 11,
          },
          {
            title: "Round Booty",
            src: "https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
      {
        dayNum: 22,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Intense HIIT",
            src: "https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg",
            duration: 16,
          },
          {
            title: "Standing Abs",
            src: "https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg",
            duration: 11,
          },
          {
            title: "Round Booty",
            src: "https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
      {
        dayNum: 23,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Intense HIIT",
            src: "https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg",
            duration: 16,
          },
          {
            title: "Standing Abs",
            src: "https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg",
            duration: 11,
          },
          {
            title: "Round Booty",
            src: "https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
      {
        dayNum: 24,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Intense HIIT",
            src: "https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg",
            duration: 16,
          },
          {
            title: "Standing Abs",
            src: "https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg",
            duration: 11,
          },
          {
            title: "Round Booty",
            src: "https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
      {
        dayNum: 25,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Intense HIIT",
            src: "https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg",
            duration: 16,
          },
          {
            title: "Standing Abs",
            src: "https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg",
            duration: 11,
          },
          {
            title: "Round Booty",
            src: "https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
      {
        dayNum: 26,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Intense HIIT",
            src: "https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg",
            duration: 16,
          },
          {
            title: "Standing Abs",
            src: "https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg",
            duration: 11,
          },
          {
            title: "Round Booty",
            src: "https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
      {
        dayNum: 27,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Intense HIIT",
            src: "https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg",
            duration: 16,
          },
          {
            title: "Standing Abs",
            src: "https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg",
            duration: 11,
          },
          {
            title: "Round Booty",
            src: "https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
      {
        dayNum: 28,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Intense HIIT",
            src: "https://www.youtube.com/watch?v=EO7NvFw-9Ko&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae0e79fdc237c10ffc54d7/33861cd0-8a99-11ed-8a37-030b440bb536.jpeg",
            duration: 16,
          },
          {
            title: "Standing Abs",
            src: "https://www.youtube.com/watch?v=mBO_61r7CIY&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6344d251ed61d9ae54297892/a408c1e0-4ec3-11ed-a3ce-b308361a3e05.jpeg",
            duration: 11,
          },
          {
            title: "Round Booty",
            src: "https://www.youtube.com/watch?v=WM3lSuuT99c&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a9838743247ee1d2cfac/575e2b50-fca7-11ec-a789-2f543735a378.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
    ],
  },
  {
    programId: 2,
    days: [
      {
        dayNum: 1,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Abs and Butt",
            src: "https://www.youtube.com/watch?v=7LFcL6aj73o&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306edbb319d6a2844ffec11/cd4684b0-276e-11ed-b1cf-338eb74818fa.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
      {
        dayNum: 2,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Abs and Butt",
            src: "https://www.youtube.com/watch?v=7LFcL6aj73o&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306edbb319d6a2844ffec11/cd4684b0-276e-11ed-b1cf-338eb74818fa.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
      {
        dayNum: 3,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Abs and Butt",
            src: "https://www.youtube.com/watch?v=7LFcL6aj73o&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306edbb319d6a2844ffec11/cd4684b0-276e-11ed-b1cf-338eb74818fa.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
      {
        dayNum: 4,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Abs and Butt",
            src: "https://www.youtube.com/watch?v=7LFcL6aj73o&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306edbb319d6a2844ffec11/cd4684b0-276e-11ed-b1cf-338eb74818fa.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
      {
        dayNum: 5,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Abs and Butt",
            src: "https://www.youtube.com/watch?v=7LFcL6aj73o&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306edbb319d6a2844ffec11/cd4684b0-276e-11ed-b1cf-338eb74818fa.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
      {
        dayNum: 6,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Abs and Butt",
            src: "https://www.youtube.com/watch?v=7LFcL6aj73o&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306edbb319d6a2844ffec11/cd4684b0-276e-11ed-b1cf-338eb74818fa.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
      {
        dayNum: 7,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Abs and Butt",
            src: "https://www.youtube.com/watch?v=7LFcL6aj73o&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306edbb319d6a2844ffec11/cd4684b0-276e-11ed-b1cf-338eb74818fa.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
      {
        dayNum: 8,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Abs and Butt",
            src: "https://www.youtube.com/watch?v=7LFcL6aj73o&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306edbb319d6a2844ffec11/cd4684b0-276e-11ed-b1cf-338eb74818fa.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
      {
        dayNum: 9,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Abs and Butt",
            src: "https://www.youtube.com/watch?v=7LFcL6aj73o&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306edbb319d6a2844ffec11/cd4684b0-276e-11ed-b1cf-338eb74818fa.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
      {
        dayNum: 10,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Abs and Butt",
            src: "https://www.youtube.com/watch?v=7LFcL6aj73o&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306edbb319d6a2844ffec11/cd4684b0-276e-11ed-b1cf-338eb74818fa.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
      {
        dayNum: 11,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Abs and Butt",
            src: "https://www.youtube.com/watch?v=7LFcL6aj73o&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306edbb319d6a2844ffec11/cd4684b0-276e-11ed-b1cf-338eb74818fa.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
      {
        dayNum: 12,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Abs and Butt",
            src: "https://www.youtube.com/watch?v=7LFcL6aj73o&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306edbb319d6a2844ffec11/cd4684b0-276e-11ed-b1cf-338eb74818fa.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
      {
        dayNum: 13,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Abs and Butt",
            src: "https://www.youtube.com/watch?v=7LFcL6aj73o&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306edbb319d6a2844ffec11/cd4684b0-276e-11ed-b1cf-338eb74818fa.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
      {
        dayNum: 14,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Abs and Butt",
            src: "https://www.youtube.com/watch?v=7LFcL6aj73o&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306edbb319d6a2844ffec11/cd4684b0-276e-11ed-b1cf-338eb74818fa.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
      {
        dayNum: 15,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Abs and Butt",
            src: "https://www.youtube.com/watch?v=7LFcL6aj73o&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306edbb319d6a2844ffec11/cd4684b0-276e-11ed-b1cf-338eb74818fa.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
      {
        dayNum: 16,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Abs and Butt",
            src: "https://www.youtube.com/watch?v=7LFcL6aj73o&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306edbb319d6a2844ffec11/cd4684b0-276e-11ed-b1cf-338eb74818fa.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
      {
        dayNum: 17,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Abs and Butt",
            src: "https://www.youtube.com/watch?v=7LFcL6aj73o&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306edbb319d6a2844ffec11/cd4684b0-276e-11ed-b1cf-338eb74818fa.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
      {
        dayNum: 18,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Abs and Butt",
            src: "https://www.youtube.com/watch?v=7LFcL6aj73o&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306edbb319d6a2844ffec11/cd4684b0-276e-11ed-b1cf-338eb74818fa.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
      {
        dayNum: 19,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Abs and Butt",
            src: "https://www.youtube.com/watch?v=7LFcL6aj73o&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306edbb319d6a2844ffec11/cd4684b0-276e-11ed-b1cf-338eb74818fa.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
      {
        dayNum: 20,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Abs and Butt",
            src: "https://www.youtube.com/watch?v=7LFcL6aj73o&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306edbb319d6a2844ffec11/cd4684b0-276e-11ed-b1cf-338eb74818fa.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
      {
        dayNum: 21,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Abs and Butt",
            src: "https://www.youtube.com/watch?v=7LFcL6aj73o&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306edbb319d6a2844ffec11/cd4684b0-276e-11ed-b1cf-338eb74818fa.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
      {
        dayNum: 22,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Abs and Butt",
            src: "https://www.youtube.com/watch?v=7LFcL6aj73o&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306edbb319d6a2844ffec11/cd4684b0-276e-11ed-b1cf-338eb74818fa.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
      {
        dayNum: 23,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Abs and Butt",
            src: "https://www.youtube.com/watch?v=7LFcL6aj73o&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306edbb319d6a2844ffec11/cd4684b0-276e-11ed-b1cf-338eb74818fa.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
      {
        dayNum: 24,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Abs and Butt",
            src: "https://www.youtube.com/watch?v=7LFcL6aj73o&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306edbb319d6a2844ffec11/cd4684b0-276e-11ed-b1cf-338eb74818fa.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
      {
        dayNum: 25,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Abs and Butt",
            src: "https://www.youtube.com/watch?v=7LFcL6aj73o&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306edbb319d6a2844ffec11/cd4684b0-276e-11ed-b1cf-338eb74818fa.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
      {
        dayNum: 26,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Abs and Butt",
            src: "https://www.youtube.com/watch?v=7LFcL6aj73o&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306edbb319d6a2844ffec11/cd4684b0-276e-11ed-b1cf-338eb74818fa.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
      {
        dayNum: 27,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Abs and Butt",
            src: "https://www.youtube.com/watch?v=7LFcL6aj73o&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306edbb319d6a2844ffec11/cd4684b0-276e-11ed-b1cf-338eb74818fa.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
      {
        dayNum: 28,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/63ae100649cf64962cb594e2/f081bd90-8a98-11ed-97ac-4b900c40c009.jpeg",
            duration: 5,
          },
          {
            title: "Abs and Butt",
            src: "https://www.youtube.com/watch?v=7LFcL6aj73o&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306edbb319d6a2844ffec11/cd4684b0-276e-11ed-b1cf-338eb74818fa.jpeg",
            duration: 16,
          },
          {
            title: "Lower Body Cooldown",
            src: "https://www.youtube.com/watch?v=kI9mXjMQWzA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/6306efc337990d0691f93a35/8693ea80-276e-11ed-94c7-572dee6a46f7.jpeg",
            duration: 6,
          },
        ],
      },
    ],
  },
  {
    programId: 3,
    days: [
      {
        dayNum: 1,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61ce4e1f34185a9a5611e4dd/3f4ce200-69d0-11ec-9b4b-f91362ad20db.jpeg",
            duration: 5,
          },
          {
            title: "Best Full Body HIIT",
            src: "https://www.youtube.com/watch?v=DCNfkVg3dps&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a87dc5a7dff24df09ae3/bb5abf20-fca6-11ec-9d53-e3fc21983f85.jpeg",
            duration: 16,
          },
          {
            title: "Intense Abs Workout",
            src: "https://www.youtube.com/watch?v=85ici-FoXcY&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a8f9dad35363a3a03107/04e35cb0-fca7-11ec-b61e-559ee4787d5f.jpeg",
            duration: 11,
          },
          {
            title: "Best Cooldown Stretches",
            src: "https://www.youtube.com/watch?v=iapsX8jB7k8&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bc25ca4df7b918c30e8bce/9fd49a10-5efd-11ec-9fce-4781ba46fa9b.jpeg",
            duration: 16,
          },
        ],
      },
      {
        dayNum: 2,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61ce4e1f34185a9a5611e4dd/3f4ce200-69d0-11ec-9b4b-f91362ad20db.jpeg",
            duration: 5,
          },
          {
            title: "Best Full Body HIIT",
            src: "https://www.youtube.com/watch?v=DCNfkVg3dps&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a87dc5a7dff24df09ae3/bb5abf20-fca6-11ec-9d53-e3fc21983f85.jpeg",
            duration: 16,
          },
          {
            title: "Intense Abs Workout",
            src: "https://www.youtube.com/watch?v=85ici-FoXcY&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a8f9dad35363a3a03107/04e35cb0-fca7-11ec-b61e-559ee4787d5f.jpeg",
            duration: 11,
          },
          {
            title: "Best Cooldown Stretches",
            src: "https://www.youtube.com/watch?v=iapsX8jB7k8&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bc25ca4df7b918c30e8bce/9fd49a10-5efd-11ec-9fce-4781ba46fa9b.jpeg",
            duration: 16,
          },
        ],
      },
      {
        dayNum: 3,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61ce4e1f34185a9a5611e4dd/3f4ce200-69d0-11ec-9b4b-f91362ad20db.jpeg",
            duration: 5,
          },
          {
            title: "Best Full Body HIIT",
            src: "https://www.youtube.com/watch?v=DCNfkVg3dps&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a87dc5a7dff24df09ae3/bb5abf20-fca6-11ec-9d53-e3fc21983f85.jpeg",
            duration: 16,
          },
          {
            title: "Intense Abs Workout",
            src: "https://www.youtube.com/watch?v=85ici-FoXcY&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a8f9dad35363a3a03107/04e35cb0-fca7-11ec-b61e-559ee4787d5f.jpeg",
            duration: 11,
          },
          {
            title: "Best Cooldown Stretches",
            src: "https://www.youtube.com/watch?v=iapsX8jB7k8&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bc25ca4df7b918c30e8bce/9fd49a10-5efd-11ec-9fce-4781ba46fa9b.jpeg",
            duration: 16,
          },
        ],
      },
      {
        dayNum: 4,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61ce4e1f34185a9a5611e4dd/3f4ce200-69d0-11ec-9b4b-f91362ad20db.jpeg",
            duration: 5,
          },
          {
            title: "Best Full Body HIIT",
            src: "https://www.youtube.com/watch?v=DCNfkVg3dps&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a87dc5a7dff24df09ae3/bb5abf20-fca6-11ec-9d53-e3fc21983f85.jpeg",
            duration: 16,
          },
          {
            title: "Intense Abs Workout",
            src: "https://www.youtube.com/watch?v=85ici-FoXcY&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a8f9dad35363a3a03107/04e35cb0-fca7-11ec-b61e-559ee4787d5f.jpeg",
            duration: 11,
          },
          {
            title: "Best Cooldown Stretches",
            src: "https://www.youtube.com/watch?v=iapsX8jB7k8&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bc25ca4df7b918c30e8bce/9fd49a10-5efd-11ec-9fce-4781ba46fa9b.jpeg",
            duration: 16,
          },
        ],
      },
      {
        dayNum: 5,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61ce4e1f34185a9a5611e4dd/3f4ce200-69d0-11ec-9b4b-f91362ad20db.jpeg",
            duration: 5,
          },
          {
            title: "Best Full Body HIIT",
            src: "https://www.youtube.com/watch?v=DCNfkVg3dps&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a87dc5a7dff24df09ae3/bb5abf20-fca6-11ec-9d53-e3fc21983f85.jpeg",
            duration: 16,
          },
          {
            title: "Intense Abs Workout",
            src: "https://www.youtube.com/watch?v=85ici-FoXcY&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a8f9dad35363a3a03107/04e35cb0-fca7-11ec-b61e-559ee4787d5f.jpeg",
            duration: 11,
          },
          {
            title: "Best Cooldown Stretches",
            src: "https://www.youtube.com/watch?v=iapsX8jB7k8&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bc25ca4df7b918c30e8bce/9fd49a10-5efd-11ec-9fce-4781ba46fa9b.jpeg",
            duration: 16,
          },
        ],
      },
      {
        dayNum: 6,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61ce4e1f34185a9a5611e4dd/3f4ce200-69d0-11ec-9b4b-f91362ad20db.jpeg",
            duration: 5,
          },
          {
            title: "Best Full Body HIIT",
            src: "https://www.youtube.com/watch?v=DCNfkVg3dps&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a87dc5a7dff24df09ae3/bb5abf20-fca6-11ec-9d53-e3fc21983f85.jpeg",
            duration: 16,
          },
          {
            title: "Intense Abs Workout",
            src: "https://www.youtube.com/watch?v=85ici-FoXcY&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a8f9dad35363a3a03107/04e35cb0-fca7-11ec-b61e-559ee4787d5f.jpeg",
            duration: 11,
          },
          {
            title: "Best Cooldown Stretches",
            src: "https://www.youtube.com/watch?v=iapsX8jB7k8&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bc25ca4df7b918c30e8bce/9fd49a10-5efd-11ec-9fce-4781ba46fa9b.jpeg",
            duration: 16,
          },
        ],
      },
      {
        dayNum: 7,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61ce4e1f34185a9a5611e4dd/3f4ce200-69d0-11ec-9b4b-f91362ad20db.jpeg",
            duration: 5,
          },
          {
            title: "Best Full Body HIIT",
            src: "https://www.youtube.com/watch?v=DCNfkVg3dps&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a87dc5a7dff24df09ae3/bb5abf20-fca6-11ec-9d53-e3fc21983f85.jpeg",
            duration: 16,
          },
          {
            title: "Intense Abs Workout",
            src: "https://www.youtube.com/watch?v=85ici-FoXcY&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a8f9dad35363a3a03107/04e35cb0-fca7-11ec-b61e-559ee4787d5f.jpeg",
            duration: 11,
          },
          {
            title: "Best Cooldown Stretches",
            src: "https://www.youtube.com/watch?v=iapsX8jB7k8&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bc25ca4df7b918c30e8bce/9fd49a10-5efd-11ec-9fce-4781ba46fa9b.jpeg",
            duration: 16,
          },
        ],
      },
      {
        dayNum: 8,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61ce4e1f34185a9a5611e4dd/3f4ce200-69d0-11ec-9b4b-f91362ad20db.jpeg",
            duration: 5,
          },
          {
            title: "Best Full Body HIIT",
            src: "https://www.youtube.com/watch?v=DCNfkVg3dps&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a87dc5a7dff24df09ae3/bb5abf20-fca6-11ec-9d53-e3fc21983f85.jpeg",
            duration: 16,
          },
          {
            title: "Intense Abs Workout",
            src: "https://www.youtube.com/watch?v=85ici-FoXcY&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a8f9dad35363a3a03107/04e35cb0-fca7-11ec-b61e-559ee4787d5f.jpeg",
            duration: 11,
          },
          {
            title: "Best Cooldown Stretches",
            src: "https://www.youtube.com/watch?v=iapsX8jB7k8&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bc25ca4df7b918c30e8bce/9fd49a10-5efd-11ec-9fce-4781ba46fa9b.jpeg",
            duration: 16,
          },
        ],
      },
      {
        dayNum: 9,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61ce4e1f34185a9a5611e4dd/3f4ce200-69d0-11ec-9b4b-f91362ad20db.jpeg",
            duration: 5,
          },
          {
            title: "Best Full Body HIIT",
            src: "https://www.youtube.com/watch?v=DCNfkVg3dps&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a87dc5a7dff24df09ae3/bb5abf20-fca6-11ec-9d53-e3fc21983f85.jpeg",
            duration: 16,
          },
          {
            title: "Intense Abs Workout",
            src: "https://www.youtube.com/watch?v=85ici-FoXcY&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a8f9dad35363a3a03107/04e35cb0-fca7-11ec-b61e-559ee4787d5f.jpeg",
            duration: 11,
          },
          {
            title: "Best Cooldown Stretches",
            src: "https://www.youtube.com/watch?v=iapsX8jB7k8&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bc25ca4df7b918c30e8bce/9fd49a10-5efd-11ec-9fce-4781ba46fa9b.jpeg",
            duration: 16,
          },
        ],
      },
      {
        dayNum: 10,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61ce4e1f34185a9a5611e4dd/3f4ce200-69d0-11ec-9b4b-f91362ad20db.jpeg",
            duration: 5,
          },
          {
            title: "Best Full Body HIIT",
            src: "https://www.youtube.com/watch?v=DCNfkVg3dps&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a87dc5a7dff24df09ae3/bb5abf20-fca6-11ec-9d53-e3fc21983f85.jpeg",
            duration: 16,
          },
          {
            title: "Intense Abs Workout",
            src: "https://www.youtube.com/watch?v=85ici-FoXcY&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a8f9dad35363a3a03107/04e35cb0-fca7-11ec-b61e-559ee4787d5f.jpeg",
            duration: 11,
          },
          {
            title: "Best Cooldown Stretches",
            src: "https://www.youtube.com/watch?v=iapsX8jB7k8&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bc25ca4df7b918c30e8bce/9fd49a10-5efd-11ec-9fce-4781ba46fa9b.jpeg",
            duration: 16,
          },
        ],
      },
      {
        dayNum: 11,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61ce4e1f34185a9a5611e4dd/3f4ce200-69d0-11ec-9b4b-f91362ad20db.jpeg",
            duration: 5,
          },
          {
            title: "Best Full Body HIIT",
            src: "https://www.youtube.com/watch?v=DCNfkVg3dps&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a87dc5a7dff24df09ae3/bb5abf20-fca6-11ec-9d53-e3fc21983f85.jpeg",
            duration: 16,
          },
          {
            title: "Intense Abs Workout",
            src: "https://www.youtube.com/watch?v=85ici-FoXcY&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a8f9dad35363a3a03107/04e35cb0-fca7-11ec-b61e-559ee4787d5f.jpeg",
            duration: 11,
          },
          {
            title: "Best Cooldown Stretches",
            src: "https://www.youtube.com/watch?v=iapsX8jB7k8&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bc25ca4df7b918c30e8bce/9fd49a10-5efd-11ec-9fce-4781ba46fa9b.jpeg",
            duration: 16,
          },
        ],
      },
      {
        dayNum: 12,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61ce4e1f34185a9a5611e4dd/3f4ce200-69d0-11ec-9b4b-f91362ad20db.jpeg",
            duration: 5,
          },
          {
            title: "Best Full Body HIIT",
            src: "https://www.youtube.com/watch?v=DCNfkVg3dps&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a87dc5a7dff24df09ae3/bb5abf20-fca6-11ec-9d53-e3fc21983f85.jpeg",
            duration: 16,
          },
          {
            title: "Intense Abs Workout",
            src: "https://www.youtube.com/watch?v=85ici-FoXcY&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a8f9dad35363a3a03107/04e35cb0-fca7-11ec-b61e-559ee4787d5f.jpeg",
            duration: 11,
          },
          {
            title: "Best Cooldown Stretches",
            src: "https://www.youtube.com/watch?v=iapsX8jB7k8&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bc25ca4df7b918c30e8bce/9fd49a10-5efd-11ec-9fce-4781ba46fa9b.jpeg",
            duration: 16,
          },
        ],
      },
      {
        dayNum: 13,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61ce4e1f34185a9a5611e4dd/3f4ce200-69d0-11ec-9b4b-f91362ad20db.jpeg",
            duration: 5,
          },
          {
            title: "Best Full Body HIIT",
            src: "https://www.youtube.com/watch?v=DCNfkVg3dps&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a87dc5a7dff24df09ae3/bb5abf20-fca6-11ec-9d53-e3fc21983f85.jpeg",
            duration: 16,
          },
          {
            title: "Intense Abs Workout",
            src: "https://www.youtube.com/watch?v=85ici-FoXcY&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a8f9dad35363a3a03107/04e35cb0-fca7-11ec-b61e-559ee4787d5f.jpeg",
            duration: 11,
          },
          {
            title: "Best Cooldown Stretches",
            src: "https://www.youtube.com/watch?v=iapsX8jB7k8&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bc25ca4df7b918c30e8bce/9fd49a10-5efd-11ec-9fce-4781ba46fa9b.jpeg",
            duration: 16,
          },
        ],
      },
      {
        dayNum: 14,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61ce4e1f34185a9a5611e4dd/3f4ce200-69d0-11ec-9b4b-f91362ad20db.jpeg",
            duration: 5,
          },
          {
            title: "Best Full Body HIIT",
            src: "https://www.youtube.com/watch?v=DCNfkVg3dps&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a87dc5a7dff24df09ae3/bb5abf20-fca6-11ec-9d53-e3fc21983f85.jpeg",
            duration: 16,
          },
          {
            title: "Intense Abs Workout",
            src: "https://www.youtube.com/watch?v=85ici-FoXcY&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a8f9dad35363a3a03107/04e35cb0-fca7-11ec-b61e-559ee4787d5f.jpeg",
            duration: 11,
          },
          {
            title: "Best Cooldown Stretches",
            src: "https://www.youtube.com/watch?v=iapsX8jB7k8&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bc25ca4df7b918c30e8bce/9fd49a10-5efd-11ec-9fce-4781ba46fa9b.jpeg",
            duration: 16,
          },
        ],
      },
      {
        dayNum: 15,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61ce4e1f34185a9a5611e4dd/3f4ce200-69d0-11ec-9b4b-f91362ad20db.jpeg",
            duration: 5,
          },
          {
            title: "Best Full Body HIIT",
            src: "https://www.youtube.com/watch?v=DCNfkVg3dps&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a87dc5a7dff24df09ae3/bb5abf20-fca6-11ec-9d53-e3fc21983f85.jpeg",
            duration: 16,
          },
          {
            title: "Intense Abs Workout",
            src: "https://www.youtube.com/watch?v=85ici-FoXcY&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a8f9dad35363a3a03107/04e35cb0-fca7-11ec-b61e-559ee4787d5f.jpeg",
            duration: 11,
          },
          {
            title: "Best Cooldown Stretches",
            src: "https://www.youtube.com/watch?v=iapsX8jB7k8&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bc25ca4df7b918c30e8bce/9fd49a10-5efd-11ec-9fce-4781ba46fa9b.jpeg",
            duration: 16,
          },
        ],
      },
      {
        dayNum: 16,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61ce4e1f34185a9a5611e4dd/3f4ce200-69d0-11ec-9b4b-f91362ad20db.jpeg",
            duration: 5,
          },
          {
            title: "Best Full Body HIIT",
            src: "https://www.youtube.com/watch?v=DCNfkVg3dps&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a87dc5a7dff24df09ae3/bb5abf20-fca6-11ec-9d53-e3fc21983f85.jpeg",
            duration: 16,
          },
          {
            title: "Intense Abs Workout",
            src: "https://www.youtube.com/watch?v=85ici-FoXcY&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a8f9dad35363a3a03107/04e35cb0-fca7-11ec-b61e-559ee4787d5f.jpeg",
            duration: 11,
          },
          {
            title: "Best Cooldown Stretches",
            src: "https://www.youtube.com/watch?v=iapsX8jB7k8&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bc25ca4df7b918c30e8bce/9fd49a10-5efd-11ec-9fce-4781ba46fa9b.jpeg",
            duration: 16,
          },
        ],
      },
      {
        dayNum: 17,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61ce4e1f34185a9a5611e4dd/3f4ce200-69d0-11ec-9b4b-f91362ad20db.jpeg",
            duration: 5,
          },
          {
            title: "Best Full Body HIIT",
            src: "https://www.youtube.com/watch?v=DCNfkVg3dps&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a87dc5a7dff24df09ae3/bb5abf20-fca6-11ec-9d53-e3fc21983f85.jpeg",
            duration: 16,
          },
          {
            title: "Intense Abs Workout",
            src: "https://www.youtube.com/watch?v=85ici-FoXcY&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a8f9dad35363a3a03107/04e35cb0-fca7-11ec-b61e-559ee4787d5f.jpeg",
            duration: 11,
          },
          {
            title: "Best Cooldown Stretches",
            src: "https://www.youtube.com/watch?v=iapsX8jB7k8&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bc25ca4df7b918c30e8bce/9fd49a10-5efd-11ec-9fce-4781ba46fa9b.jpeg",
            duration: 16,
          },
        ],
      },
      {
        dayNum: 18,
        videos: [
          {
            title: "5 Min Warm Up",
            src: "https://www.youtube.com/watch?v=7t1qhpDLSi0&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61ce4e1f34185a9a5611e4dd/3f4ce200-69d0-11ec-9b4b-f91362ad20db.jpeg",
            duration: 5,
          },
          {
            title: "Best Full Body HIIT",
            src: "https://www.youtube.com/watch?v=DCNfkVg3dps&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a87dc5a7dff24df09ae3/bb5abf20-fca6-11ec-9d53-e3fc21983f85.jpeg",
            duration: 16,
          },
          {
            title: "Intense Abs Workout",
            src: "https://www.youtube.com/watch?v=85ici-FoXcY&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/62c4a8f9dad35363a3a03107/04e35cb0-fca7-11ec-b61e-559ee4787d5f.jpeg",
            duration: 11,
          },
          {
            title: "Best Cooldown Stretches",
            src: "https://www.youtube.com/watch?v=iapsX8jB7k8&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bc25ca4df7b918c30e8bce/9fd49a10-5efd-11ec-9fce-4781ba46fa9b.jpeg",
            duration: 16,
          },
        ],
      },
    ],
  },
  {
    programId: 4,
    days: [
      {
        dayNum: 1,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Shredded Arms Workout",
            src: "https://www.youtube.com/watch?v=5qCjyzbKmAE&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdde02d47479a9df23575/c2f8c870-5ed2-11ec-9a04-3fd984621d67.jpeg",
            duration: 14,
          },
          {
            title: "Do This Everyday to Lose Weight",
            src: "https://www.youtube.com/watch?v=2MoGxae-zyo&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdc7e2cb3b78eb6ac2bba/efca6f80-5ed1-11ec-b182-df31ae6aab45.jpeg",
            duration: 14,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 2,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Shredded Arms Workout",
            src: "https://www.youtube.com/watch?v=5qCjyzbKmAE&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdde02d47479a9df23575/c2f8c870-5ed2-11ec-9a04-3fd984621d67.jpeg",
            duration: 14,
          },
          {
            title: "Do This Everyday to Lose Weight",
            src: "https://www.youtube.com/watch?v=2MoGxae-zyo&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdc7e2cb3b78eb6ac2bba/efca6f80-5ed1-11ec-b182-df31ae6aab45.jpeg",
            duration: 14,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 3,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Shredded Arms Workout",
            src: "https://www.youtube.com/watch?v=5qCjyzbKmAE&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdde02d47479a9df23575/c2f8c870-5ed2-11ec-9a04-3fd984621d67.jpeg",
            duration: 14,
          },
          {
            title: "Do This Everyday to Lose Weight",
            src: "https://www.youtube.com/watch?v=2MoGxae-zyo&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdc7e2cb3b78eb6ac2bba/efca6f80-5ed1-11ec-b182-df31ae6aab45.jpeg",
            duration: 14,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 4,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Shredded Arms Workout",
            src: "https://www.youtube.com/watch?v=5qCjyzbKmAE&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdde02d47479a9df23575/c2f8c870-5ed2-11ec-9a04-3fd984621d67.jpeg",
            duration: 14,
          },
          {
            title: "Do This Everyday to Lose Weight",
            src: "https://www.youtube.com/watch?v=2MoGxae-zyo&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdc7e2cb3b78eb6ac2bba/efca6f80-5ed1-11ec-b182-df31ae6aab45.jpeg",
            duration: 14,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 5,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Shredded Arms Workout",
            src: "https://www.youtube.com/watch?v=5qCjyzbKmAE&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdde02d47479a9df23575/c2f8c870-5ed2-11ec-9a04-3fd984621d67.jpeg",
            duration: 14,
          },
          {
            title: "Do This Everyday to Lose Weight",
            src: "https://www.youtube.com/watch?v=2MoGxae-zyo&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdc7e2cb3b78eb6ac2bba/efca6f80-5ed1-11ec-b182-df31ae6aab45.jpeg",
            duration: 14,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 6,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Shredded Arms Workout",
            src: "https://www.youtube.com/watch?v=5qCjyzbKmAE&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdde02d47479a9df23575/c2f8c870-5ed2-11ec-9a04-3fd984621d67.jpeg",
            duration: 14,
          },
          {
            title: "Do This Everyday to Lose Weight",
            src: "https://www.youtube.com/watch?v=2MoGxae-zyo&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdc7e2cb3b78eb6ac2bba/efca6f80-5ed1-11ec-b182-df31ae6aab45.jpeg",
            duration: 14,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 7,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Shredded Arms Workout",
            src: "https://www.youtube.com/watch?v=5qCjyzbKmAE&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdde02d47479a9df23575/c2f8c870-5ed2-11ec-9a04-3fd984621d67.jpeg",
            duration: 14,
          },
          {
            title: "Do This Everyday to Lose Weight",
            src: "https://www.youtube.com/watch?v=2MoGxae-zyo&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdc7e2cb3b78eb6ac2bba/efca6f80-5ed1-11ec-b182-df31ae6aab45.jpeg",
            duration: 14,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 8,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Shredded Arms Workout",
            src: "https://www.youtube.com/watch?v=5qCjyzbKmAE&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdde02d47479a9df23575/c2f8c870-5ed2-11ec-9a04-3fd984621d67.jpeg",
            duration: 14,
          },
          {
            title: "Do This Everyday to Lose Weight",
            src: "https://www.youtube.com/watch?v=2MoGxae-zyo&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdc7e2cb3b78eb6ac2bba/efca6f80-5ed1-11ec-b182-df31ae6aab45.jpeg",
            duration: 14,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 9,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Shredded Arms Workout",
            src: "https://www.youtube.com/watch?v=5qCjyzbKmAE&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdde02d47479a9df23575/c2f8c870-5ed2-11ec-9a04-3fd984621d67.jpeg",
            duration: 14,
          },
          {
            title: "Do This Everyday to Lose Weight",
            src: "https://www.youtube.com/watch?v=2MoGxae-zyo&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdc7e2cb3b78eb6ac2bba/efca6f80-5ed1-11ec-b182-df31ae6aab45.jpeg",
            duration: 14,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 10,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Shredded Arms Workout",
            src: "https://www.youtube.com/watch?v=5qCjyzbKmAE&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdde02d47479a9df23575/c2f8c870-5ed2-11ec-9a04-3fd984621d67.jpeg",
            duration: 14,
          },
          {
            title: "Do This Everyday to Lose Weight",
            src: "https://www.youtube.com/watch?v=2MoGxae-zyo&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdc7e2cb3b78eb6ac2bba/efca6f80-5ed1-11ec-b182-df31ae6aab45.jpeg",
            duration: 14,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 11,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Shredded Arms Workout",
            src: "https://www.youtube.com/watch?v=5qCjyzbKmAE&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdde02d47479a9df23575/c2f8c870-5ed2-11ec-9a04-3fd984621d67.jpeg",
            duration: 14,
          },
          {
            title: "Do This Everyday to Lose Weight",
            src: "https://www.youtube.com/watch?v=2MoGxae-zyo&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdc7e2cb3b78eb6ac2bba/efca6f80-5ed1-11ec-b182-df31ae6aab45.jpeg",
            duration: 14,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 12,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Shredded Arms Workout",
            src: "https://www.youtube.com/watch?v=5qCjyzbKmAE&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdde02d47479a9df23575/c2f8c870-5ed2-11ec-9a04-3fd984621d67.jpeg",
            duration: 14,
          },
          {
            title: "Do This Everyday to Lose Weight",
            src: "https://www.youtube.com/watch?v=2MoGxae-zyo&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdc7e2cb3b78eb6ac2bba/efca6f80-5ed1-11ec-b182-df31ae6aab45.jpeg",
            duration: 14,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 13,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Shredded Arms Workout",
            src: "https://www.youtube.com/watch?v=5qCjyzbKmAE&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdde02d47479a9df23575/c2f8c870-5ed2-11ec-9a04-3fd984621d67.jpeg",
            duration: 14,
          },
          {
            title: "Do This Everyday to Lose Weight",
            src: "https://www.youtube.com/watch?v=2MoGxae-zyo&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdc7e2cb3b78eb6ac2bba/efca6f80-5ed1-11ec-b182-df31ae6aab45.jpeg",
            duration: 14,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 14,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Shredded Arms Workout",
            src: "https://www.youtube.com/watch?v=5qCjyzbKmAE&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdde02d47479a9df23575/c2f8c870-5ed2-11ec-9a04-3fd984621d67.jpeg",
            duration: 14,
          },
          {
            title: "Do This Everyday to Lose Weight",
            src: "https://www.youtube.com/watch?v=2MoGxae-zyo&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdc7e2cb3b78eb6ac2bba/efca6f80-5ed1-11ec-b182-df31ae6aab45.jpeg",
            duration: 14,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 15,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Shredded Arms Workout",
            src: "https://www.youtube.com/watch?v=5qCjyzbKmAE&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdde02d47479a9df23575/c2f8c870-5ed2-11ec-9a04-3fd984621d67.jpeg",
            duration: 14,
          },
          {
            title: "Do This Everyday to Lose Weight",
            src: "https://www.youtube.com/watch?v=2MoGxae-zyo&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdc7e2cb3b78eb6ac2bba/efca6f80-5ed1-11ec-b182-df31ae6aab45.jpeg",
            duration: 14,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 16,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Shredded Arms Workout",
            src: "https://www.youtube.com/watch?v=5qCjyzbKmAE&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdde02d47479a9df23575/c2f8c870-5ed2-11ec-9a04-3fd984621d67.jpeg",
            duration: 14,
          },
          {
            title: "Do This Everyday to Lose Weight",
            src: "https://www.youtube.com/watch?v=2MoGxae-zyo&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdc7e2cb3b78eb6ac2bba/efca6f80-5ed1-11ec-b182-df31ae6aab45.jpeg",
            duration: 14,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 17,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Shredded Arms Workout",
            src: "https://www.youtube.com/watch?v=5qCjyzbKmAE&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdde02d47479a9df23575/c2f8c870-5ed2-11ec-9a04-3fd984621d67.jpeg",
            duration: 14,
          },
          {
            title: "Do This Everyday to Lose Weight",
            src: "https://www.youtube.com/watch?v=2MoGxae-zyo&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdc7e2cb3b78eb6ac2bba/efca6f80-5ed1-11ec-b182-df31ae6aab45.jpeg",
            duration: 14,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 18,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Shredded Arms Workout",
            src: "https://www.youtube.com/watch?v=5qCjyzbKmAE&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdde02d47479a9df23575/c2f8c870-5ed2-11ec-9a04-3fd984621d67.jpeg",
            duration: 14,
          },
          {
            title: "Do This Everyday to Lose Weight",
            src: "https://www.youtube.com/watch?v=2MoGxae-zyo&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdc7e2cb3b78eb6ac2bba/efca6f80-5ed1-11ec-b182-df31ae6aab45.jpeg",
            duration: 14,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 19,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Shredded Arms Workout",
            src: "https://www.youtube.com/watch?v=5qCjyzbKmAE&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdde02d47479a9df23575/c2f8c870-5ed2-11ec-9a04-3fd984621d67.jpeg",
            duration: 14,
          },
          {
            title: "Do This Everyday to Lose Weight",
            src: "https://www.youtube.com/watch?v=2MoGxae-zyo&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdc7e2cb3b78eb6ac2bba/efca6f80-5ed1-11ec-b182-df31ae6aab45.jpeg",
            duration: 14,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 20,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Shredded Arms Workout",
            src: "https://www.youtube.com/watch?v=5qCjyzbKmAE&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdde02d47479a9df23575/c2f8c870-5ed2-11ec-9a04-3fd984621d67.jpeg",
            duration: 14,
          },
          {
            title: "Do This Everyday to Lose Weight",
            src: "https://www.youtube.com/watch?v=2MoGxae-zyo&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdc7e2cb3b78eb6ac2bba/efca6f80-5ed1-11ec-b182-df31ae6aab45.jpeg",
            duration: 14,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 21,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Shredded Arms Workout",
            src: "https://www.youtube.com/watch?v=5qCjyzbKmAE&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdde02d47479a9df23575/c2f8c870-5ed2-11ec-9a04-3fd984621d67.jpeg",
            duration: 14,
          },
          {
            title: "Do This Everyday to Lose Weight",
            src: "https://www.youtube.com/watch?v=2MoGxae-zyo&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdc7e2cb3b78eb6ac2bba/efca6f80-5ed1-11ec-b182-df31ae6aab45.jpeg",
            duration: 14,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
    ],
  },
  {
    programId: 5,
    days: [
      {
        dayNum: 1,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Tiny Waist Round Butt",
            src: "https://www.youtube.com/watch?v=cIuiQyfKBTg&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf3f62d47479a9df235a8/ed177c20-5edf-11ec-9a04-3fd984621d67.jpeg",
            duration: 16,
          },
          {
            title: "Abs in 2 Weeks",
            src: "https://www.youtube.com/watch?v=2pLT-olgUJs&t=0s&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdcdd017bbb985e15f8eb/28972560-5ed2-11ec-b99f-c33e6b9468db.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 2,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Tiny Waist Round Butt",
            src: "https://www.youtube.com/watch?v=cIuiQyfKBTg&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf3f62d47479a9df235a8/ed177c20-5edf-11ec-9a04-3fd984621d67.jpeg",
            duration: 16,
          },
          {
            title: "Abs in 2 Weeks",
            src: "https://www.youtube.com/watch?v=2pLT-olgUJs&t=0s&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdcdd017bbb985e15f8eb/28972560-5ed2-11ec-b99f-c33e6b9468db.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 3,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Tiny Waist Round Butt",
            src: "https://www.youtube.com/watch?v=cIuiQyfKBTg&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf3f62d47479a9df235a8/ed177c20-5edf-11ec-9a04-3fd984621d67.jpeg",
            duration: 16,
          },
          {
            title: "Abs in 2 Weeks",
            src: "https://www.youtube.com/watch?v=2pLT-olgUJs&t=0s&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdcdd017bbb985e15f8eb/28972560-5ed2-11ec-b99f-c33e6b9468db.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 4,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Tiny Waist Round Butt",
            src: "https://www.youtube.com/watch?v=cIuiQyfKBTg&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf3f62d47479a9df235a8/ed177c20-5edf-11ec-9a04-3fd984621d67.jpeg",
            duration: 16,
          },
          {
            title: "Abs in 2 Weeks",
            src: "https://www.youtube.com/watch?v=2pLT-olgUJs&t=0s&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdcdd017bbb985e15f8eb/28972560-5ed2-11ec-b99f-c33e6b9468db.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 5,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Tiny Waist Round Butt",
            src: "https://www.youtube.com/watch?v=cIuiQyfKBTg&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf3f62d47479a9df235a8/ed177c20-5edf-11ec-9a04-3fd984621d67.jpeg",
            duration: 16,
          },
          {
            title: "Abs in 2 Weeks",
            src: "https://www.youtube.com/watch?v=2pLT-olgUJs&t=0s&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdcdd017bbb985e15f8eb/28972560-5ed2-11ec-b99f-c33e6b9468db.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 6,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Tiny Waist Round Butt",
            src: "https://www.youtube.com/watch?v=cIuiQyfKBTg&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf3f62d47479a9df235a8/ed177c20-5edf-11ec-9a04-3fd984621d67.jpeg",
            duration: 16,
          },
          {
            title: "Abs in 2 Weeks",
            src: "https://www.youtube.com/watch?v=2pLT-olgUJs&t=0s&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdcdd017bbb985e15f8eb/28972560-5ed2-11ec-b99f-c33e6b9468db.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 7,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Tiny Waist Round Butt",
            src: "https://www.youtube.com/watch?v=cIuiQyfKBTg&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf3f62d47479a9df235a8/ed177c20-5edf-11ec-9a04-3fd984621d67.jpeg",
            duration: 16,
          },
          {
            title: "Abs in 2 Weeks",
            src: "https://www.youtube.com/watch?v=2pLT-olgUJs&t=0s&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdcdd017bbb985e15f8eb/28972560-5ed2-11ec-b99f-c33e6b9468db.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 8,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Tiny Waist Round Butt",
            src: "https://www.youtube.com/watch?v=cIuiQyfKBTg&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf3f62d47479a9df235a8/ed177c20-5edf-11ec-9a04-3fd984621d67.jpeg",
            duration: 16,
          },
          {
            title: "Abs in 2 Weeks",
            src: "https://www.youtube.com/watch?v=2pLT-olgUJs&t=0s&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdcdd017bbb985e15f8eb/28972560-5ed2-11ec-b99f-c33e6b9468db.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 9,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Tiny Waist Round Butt",
            src: "https://www.youtube.com/watch?v=cIuiQyfKBTg&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf3f62d47479a9df235a8/ed177c20-5edf-11ec-9a04-3fd984621d67.jpeg",
            duration: 16,
          },
          {
            title: "Abs in 2 Weeks",
            src: "https://www.youtube.com/watch?v=2pLT-olgUJs&t=0s&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdcdd017bbb985e15f8eb/28972560-5ed2-11ec-b99f-c33e6b9468db.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 10,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Tiny Waist Round Butt",
            src: "https://www.youtube.com/watch?v=cIuiQyfKBTg&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf3f62d47479a9df235a8/ed177c20-5edf-11ec-9a04-3fd984621d67.jpeg",
            duration: 16,
          },
          {
            title: "Abs in 2 Weeks",
            src: "https://www.youtube.com/watch?v=2pLT-olgUJs&t=0s&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdcdd017bbb985e15f8eb/28972560-5ed2-11ec-b99f-c33e6b9468db.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 11,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Tiny Waist Round Butt",
            src: "https://www.youtube.com/watch?v=cIuiQyfKBTg&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf3f62d47479a9df235a8/ed177c20-5edf-11ec-9a04-3fd984621d67.jpeg",
            duration: 16,
          },
          {
            title: "Abs in 2 Weeks",
            src: "https://www.youtube.com/watch?v=2pLT-olgUJs&t=0s&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdcdd017bbb985e15f8eb/28972560-5ed2-11ec-b99f-c33e6b9468db.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 12,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Tiny Waist Round Butt",
            src: "https://www.youtube.com/watch?v=cIuiQyfKBTg&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf3f62d47479a9df235a8/ed177c20-5edf-11ec-9a04-3fd984621d67.jpeg",
            duration: 16,
          },
          {
            title: "Abs in 2 Weeks",
            src: "https://www.youtube.com/watch?v=2pLT-olgUJs&t=0s&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdcdd017bbb985e15f8eb/28972560-5ed2-11ec-b99f-c33e6b9468db.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 13,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Tiny Waist Round Butt",
            src: "https://www.youtube.com/watch?v=cIuiQyfKBTg&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf3f62d47479a9df235a8/ed177c20-5edf-11ec-9a04-3fd984621d67.jpeg",
            duration: 16,
          },
          {
            title: "Abs in 2 Weeks",
            src: "https://www.youtube.com/watch?v=2pLT-olgUJs&t=0s&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdcdd017bbb985e15f8eb/28972560-5ed2-11ec-b99f-c33e6b9468db.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 14,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Tiny Waist Round Butt",
            src: "https://www.youtube.com/watch?v=cIuiQyfKBTg&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf3f62d47479a9df235a8/ed177c20-5edf-11ec-9a04-3fd984621d67.jpeg",
            duration: 16,
          },
          {
            title: "Abs in 2 Weeks",
            src: "https://www.youtube.com/watch?v=2pLT-olgUJs&t=0s&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdcdd017bbb985e15f8eb/28972560-5ed2-11ec-b99f-c33e6b9468db.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 15,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Tiny Waist Round Butt",
            src: "https://www.youtube.com/watch?v=cIuiQyfKBTg&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf3f62d47479a9df235a8/ed177c20-5edf-11ec-9a04-3fd984621d67.jpeg",
            duration: 16,
          },
          {
            title: "Abs in 2 Weeks",
            src: "https://www.youtube.com/watch?v=2pLT-olgUJs&t=0s&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdcdd017bbb985e15f8eb/28972560-5ed2-11ec-b99f-c33e6b9468db.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 16,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Tiny Waist Round Butt",
            src: "https://www.youtube.com/watch?v=cIuiQyfKBTg&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf3f62d47479a9df235a8/ed177c20-5edf-11ec-9a04-3fd984621d67.jpeg",
            duration: 16,
          },
          {
            title: "Abs in 2 Weeks",
            src: "https://www.youtube.com/watch?v=2pLT-olgUJs&t=0s&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdcdd017bbb985e15f8eb/28972560-5ed2-11ec-b99f-c33e6b9468db.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 17,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Tiny Waist Round Butt",
            src: "https://www.youtube.com/watch?v=cIuiQyfKBTg&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf3f62d47479a9df235a8/ed177c20-5edf-11ec-9a04-3fd984621d67.jpeg",
            duration: 16,
          },
          {
            title: "Abs in 2 Weeks",
            src: "https://www.youtube.com/watch?v=2pLT-olgUJs&t=0s&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdcdd017bbb985e15f8eb/28972560-5ed2-11ec-b99f-c33e6b9468db.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 18,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Tiny Waist Round Butt",
            src: "https://www.youtube.com/watch?v=cIuiQyfKBTg&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf3f62d47479a9df235a8/ed177c20-5edf-11ec-9a04-3fd984621d67.jpeg",
            duration: 16,
          },
          {
            title: "Abs in 2 Weeks",
            src: "https://www.youtube.com/watch?v=2pLT-olgUJs&t=0s&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdcdd017bbb985e15f8eb/28972560-5ed2-11ec-b99f-c33e6b9468db.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 19,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Tiny Waist Round Butt",
            src: "https://www.youtube.com/watch?v=cIuiQyfKBTg&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf3f62d47479a9df235a8/ed177c20-5edf-11ec-9a04-3fd984621d67.jpeg",
            duration: 16,
          },
          {
            title: "Abs in 2 Weeks",
            src: "https://www.youtube.com/watch?v=2pLT-olgUJs&t=0s&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdcdd017bbb985e15f8eb/28972560-5ed2-11ec-b99f-c33e6b9468db.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 20,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Tiny Waist Round Butt",
            src: "https://www.youtube.com/watch?v=cIuiQyfKBTg&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf3f62d47479a9df235a8/ed177c20-5edf-11ec-9a04-3fd984621d67.jpeg",
            duration: 16,
          },
          {
            title: "Abs in 2 Weeks",
            src: "https://www.youtube.com/watch?v=2pLT-olgUJs&t=0s&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdcdd017bbb985e15f8eb/28972560-5ed2-11ec-b99f-c33e6b9468db.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 21,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Tiny Waist Round Butt",
            src: "https://www.youtube.com/watch?v=cIuiQyfKBTg&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf3f62d47479a9df235a8/ed177c20-5edf-11ec-9a04-3fd984621d67.jpeg",
            duration: 16,
          },
          {
            title: "Abs in 2 Weeks",
            src: "https://www.youtube.com/watch?v=2pLT-olgUJs&t=0s&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdcdd017bbb985e15f8eb/28972560-5ed2-11ec-b99f-c33e6b9468db.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 22,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Tiny Waist Round Butt",
            src: "https://www.youtube.com/watch?v=cIuiQyfKBTg&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf3f62d47479a9df235a8/ed177c20-5edf-11ec-9a04-3fd984621d67.jpeg",
            duration: 16,
          },
          {
            title: "Abs in 2 Weeks",
            src: "https://www.youtube.com/watch?v=2pLT-olgUJs&t=0s&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdcdd017bbb985e15f8eb/28972560-5ed2-11ec-b99f-c33e6b9468db.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 23,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Tiny Waist Round Butt",
            src: "https://www.youtube.com/watch?v=cIuiQyfKBTg&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf3f62d47479a9df235a8/ed177c20-5edf-11ec-9a04-3fd984621d67.jpeg",
            duration: 16,
          },
          {
            title: "Abs in 2 Weeks",
            src: "https://www.youtube.com/watch?v=2pLT-olgUJs&t=0s&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdcdd017bbb985e15f8eb/28972560-5ed2-11ec-b99f-c33e6b9468db.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 24,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Tiny Waist Round Butt",
            src: "https://www.youtube.com/watch?v=cIuiQyfKBTg&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf3f62d47479a9df235a8/ed177c20-5edf-11ec-9a04-3fd984621d67.jpeg",
            duration: 16,
          },
          {
            title: "Abs in 2 Weeks",
            src: "https://www.youtube.com/watch?v=2pLT-olgUJs&t=0s&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdcdd017bbb985e15f8eb/28972560-5ed2-11ec-b99f-c33e6b9468db.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 25,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Tiny Waist Round Butt",
            src: "https://www.youtube.com/watch?v=cIuiQyfKBTg&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf3f62d47479a9df235a8/ed177c20-5edf-11ec-9a04-3fd984621d67.jpeg",
            duration: 16,
          },
          {
            title: "Abs in 2 Weeks",
            src: "https://www.youtube.com/watch?v=2pLT-olgUJs&t=0s&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdcdd017bbb985e15f8eb/28972560-5ed2-11ec-b99f-c33e6b9468db.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
    ],
  },
  {
    programId: 6,
    days: [
      {
        dayNum: 1,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Grow Booty & Not Thighs",
            src: "https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg",
            duration: 21,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 2,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Grow Booty & Not Thighs",
            src: "https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg",
            duration: 21,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 3,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Grow Booty & Not Thighs",
            src: "https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg",
            duration: 21,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 4,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Grow Booty & Not Thighs",
            src: "https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg",
            duration: 21,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 5,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Grow Booty & Not Thighs",
            src: "https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg",
            duration: 21,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 6,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Grow Booty & Not Thighs",
            src: "https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg",
            duration: 21,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 7,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Grow Booty & Not Thighs",
            src: "https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg",
            duration: 21,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 8,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Grow Booty & Not Thighs",
            src: "https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg",
            duration: 21,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 9,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Grow Booty & Not Thighs",
            src: "https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg",
            duration: 21,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 10,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Grow Booty & Not Thighs",
            src: "https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg",
            duration: 21,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 11,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Grow Booty & Not Thighs",
            src: "https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg",
            duration: 21,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 12,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Grow Booty & Not Thighs",
            src: "https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg",
            duration: 21,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 13,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Grow Booty & Not Thighs",
            src: "https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg",
            duration: 21,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 14,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Grow Booty & Not Thighs",
            src: "https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg",
            duration: 21,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 15,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Grow Booty & Not Thighs",
            src: "https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg",
            duration: 21,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 16,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Grow Booty & Not Thighs",
            src: "https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg",
            duration: 21,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 17,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Grow Booty & Not Thighs",
            src: "https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg",
            duration: 21,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 18,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Grow Booty & Not Thighs",
            src: "https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg",
            duration: 21,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 19,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Grow Booty & Not Thighs",
            src: "https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg",
            duration: 21,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 20,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Grow Booty & Not Thighs",
            src: "https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg",
            duration: 21,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 21,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Grow Booty & Not Thighs",
            src: "https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg",
            duration: 21,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 22,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Grow Booty & Not Thighs",
            src: "https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg",
            duration: 21,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 23,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Grow Booty & Not Thighs",
            src: "https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg",
            duration: 21,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 24,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Grow Booty & Not Thighs",
            src: "https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg",
            duration: 21,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 25,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Grow Booty & Not Thighs",
            src: "https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg",
            duration: 21,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 26,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Grow Booty & Not Thighs",
            src: "https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg",
            duration: 21,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 27,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Grow Booty & Not Thighs",
            src: "https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg",
            duration: 21,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 28,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Grow Booty & Not Thighs",
            src: "https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg",
            duration: 21,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 29,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Grow Booty & Not Thighs",
            src: "https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg",
            duration: 21,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 30,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Grow Booty & Not Thighs",
            src: "https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg",
            duration: 21,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 31,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Grow Booty & Not Thighs",
            src: "https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg",
            duration: 21,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 32,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Grow Booty & Not Thighs",
            src: "https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg",
            duration: 21,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 33,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Grow Booty & Not Thighs",
            src: "https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg",
            duration: 21,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 34,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Grow Booty & Not Thighs",
            src: "https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg",
            duration: 21,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 35,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Grow Booty & Not Thighs",
            src: "https://www.youtube.com/watch?v=_3NCDf7pplc&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbdf982d47479a9df23582/c8e257f0-5ed3-11ec-9a04-3fd984621d67.jpeg",
            duration: 21,
          },
          {
            title: "11 Line Abs",
            src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
          {
            title: "Full Body Cooldown",
            src: "https://www.youtube.com/watch?v=tXWh-dowiLg&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf02a2cb3b78eb6ac2beb/a98805d0-5edd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 11,
          },
        ],
      },
    ],
  },
  {
    programId: 7,
    days: [
      {
        dayNum: 1,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Slim Legs",
            src: "https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 16,
          },
          {
            title: "Flat Belly Abs",
            src: "https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 11,
          },
          {
            title: "Plank Challenge",
            src: "https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 12,
          },
          {
            title: "Slim Thigh Stretches",
            src: "https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 2,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Slim Legs",
            src: "https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 16,
          },
          {
            title: "Flat Belly Abs",
            src: "https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 11,
          },
          {
            title: "Plank Challenge",
            src: "https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 12,
          },
          {
            title: "Slim Thigh Stretches",
            src: "https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 3,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Slim Legs",
            src: "https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 16,
          },
          {
            title: "Flat Belly Abs",
            src: "https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 11,
          },
          {
            title: "Plank Challenge",
            src: "https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 12,
          },
          {
            title: "Slim Thigh Stretches",
            src: "https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 4,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Slim Legs",
            src: "https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 16,
          },
          {
            title: "Flat Belly Abs",
            src: "https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 11,
          },
          {
            title: "Plank Challenge",
            src: "https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 12,
          },
          {
            title: "Slim Thigh Stretches",
            src: "https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 5,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Slim Legs",
            src: "https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 16,
          },
          {
            title: "Flat Belly Abs",
            src: "https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 11,
          },
          {
            title: "Plank Challenge",
            src: "https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 12,
          },
          {
            title: "Slim Thigh Stretches",
            src: "https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 6,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Slim Legs",
            src: "https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 16,
          },
          {
            title: "Flat Belly Abs",
            src: "https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 11,
          },
          {
            title: "Plank Challenge",
            src: "https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 12,
          },
          {
            title: "Slim Thigh Stretches",
            src: "https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 7,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Slim Legs",
            src: "https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 16,
          },
          {
            title: "Flat Belly Abs",
            src: "https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 11,
          },
          {
            title: "Plank Challenge",
            src: "https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 12,
          },
          {
            title: "Slim Thigh Stretches",
            src: "https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 8,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Slim Legs",
            src: "https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 16,
          },
          {
            title: "Flat Belly Abs",
            src: "https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 11,
          },
          {
            title: "Plank Challenge",
            src: "https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 12,
          },
          {
            title: "Slim Thigh Stretches",
            src: "https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 9,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Slim Legs",
            src: "https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 16,
          },
          {
            title: "Flat Belly Abs",
            src: "https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 11,
          },
          {
            title: "Plank Challenge",
            src: "https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 12,
          },
          {
            title: "Slim Thigh Stretches",
            src: "https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 10,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Slim Legs",
            src: "https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 16,
          },
          {
            title: "Flat Belly Abs",
            src: "https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 11,
          },
          {
            title: "Plank Challenge",
            src: "https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 12,
          },
          {
            title: "Slim Thigh Stretches",
            src: "https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 11,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Slim Legs",
            src: "https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 16,
          },
          {
            title: "Flat Belly Abs",
            src: "https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 11,
          },
          {
            title: "Plank Challenge",
            src: "https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 12,
          },
          {
            title: "Slim Thigh Stretches",
            src: "https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 12,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Slim Legs",
            src: "https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 16,
          },
          {
            title: "Flat Belly Abs",
            src: "https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 11,
          },
          {
            title: "Plank Challenge",
            src: "https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 12,
          },
          {
            title: "Slim Thigh Stretches",
            src: "https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 13,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Slim Legs",
            src: "https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 16,
          },
          {
            title: "Flat Belly Abs",
            src: "https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 11,
          },
          {
            title: "Plank Challenge",
            src: "https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 12,
          },
          {
            title: "Slim Thigh Stretches",
            src: "https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 14,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Slim Legs",
            src: "https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 16,
          },
          {
            title: "Flat Belly Abs",
            src: "https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 11,
          },
          {
            title: "Plank Challenge",
            src: "https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 12,
          },
          {
            title: "Slim Thigh Stretches",
            src: "https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 15,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Slim Legs",
            src: "https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 16,
          },
          {
            title: "Flat Belly Abs",
            src: "https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 11,
          },
          {
            title: "Plank Challenge",
            src: "https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 12,
          },
          {
            title: "Slim Thigh Stretches",
            src: "https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 16,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Slim Legs",
            src: "https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 16,
          },
          {
            title: "Flat Belly Abs",
            src: "https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 11,
          },
          {
            title: "Plank Challenge",
            src: "https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 12,
          },
          {
            title: "Slim Thigh Stretches",
            src: "https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 17,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Slim Legs",
            src: "https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 16,
          },
          {
            title: "Flat Belly Abs",
            src: "https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 11,
          },
          {
            title: "Plank Challenge",
            src: "https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 12,
          },
          {
            title: "Slim Thigh Stretches",
            src: "https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 18,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Slim Legs",
            src: "https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 16,
          },
          {
            title: "Flat Belly Abs",
            src: "https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 11,
          },
          {
            title: "Plank Challenge",
            src: "https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 12,
          },
          {
            title: "Slim Thigh Stretches",
            src: "https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 19,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Slim Legs",
            src: "https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 16,
          },
          {
            title: "Flat Belly Abs",
            src: "https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 11,
          },
          {
            title: "Plank Challenge",
            src: "https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 12,
          },
          {
            title: "Slim Thigh Stretches",
            src: "https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 20,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Slim Legs",
            src: "https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 16,
          },
          {
            title: "Flat Belly Abs",
            src: "https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 11,
          },
          {
            title: "Plank Challenge",
            src: "https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 12,
          },
          {
            title: "Slim Thigh Stretches",
            src: "https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 21,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Slim Legs",
            src: "https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 16,
          },
          {
            title: "Flat Belly Abs",
            src: "https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 11,
          },
          {
            title: "Plank Challenge",
            src: "https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 12,
          },
          {
            title: "Slim Thigh Stretches",
            src: "https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 22,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Slim Legs",
            src: "https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 16,
          },
          {
            title: "Flat Belly Abs",
            src: "https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 11,
          },
          {
            title: "Plank Challenge",
            src: "https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 12,
          },
          {
            title: "Slim Thigh Stretches",
            src: "https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 23,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Slim Legs",
            src: "https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 16,
          },
          {
            title: "Flat Belly Abs",
            src: "https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 11,
          },
          {
            title: "Plank Challenge",
            src: "https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 12,
          },
          {
            title: "Slim Thigh Stretches",
            src: "https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 24,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Slim Legs",
            src: "https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 16,
          },
          {
            title: "Flat Belly Abs",
            src: "https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 11,
          },
          {
            title: "Plank Challenge",
            src: "https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 12,
          },
          {
            title: "Slim Thigh Stretches",
            src: "https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 25,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Slim Legs",
            src: "https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 16,
          },
          {
            title: "Flat Belly Abs",
            src: "https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 11,
          },
          {
            title: "Plank Challenge",
            src: "https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 12,
          },
          {
            title: "Slim Thigh Stretches",
            src: "https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 26,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Slim Legs",
            src: "https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 16,
          },
          {
            title: "Flat Belly Abs",
            src: "https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 11,
          },
          {
            title: "Plank Challenge",
            src: "https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 12,
          },
          {
            title: "Slim Thigh Stretches",
            src: "https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 27,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Slim Legs",
            src: "https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 16,
          },
          {
            title: "Flat Belly Abs",
            src: "https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 11,
          },
          {
            title: "Plank Challenge",
            src: "https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 12,
          },
          {
            title: "Slim Thigh Stretches",
            src: "https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 28,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Slim Legs",
            src: "https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 16,
          },
          {
            title: "Flat Belly Abs",
            src: "https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 11,
          },
          {
            title: "Plank Challenge",
            src: "https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 12,
          },
          {
            title: "Slim Thigh Stretches",
            src: "https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 29,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Slim Legs",
            src: "https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 16,
          },
          {
            title: "Flat Belly Abs",
            src: "https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 11,
          },
          {
            title: "Plank Challenge",
            src: "https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 12,
          },
          {
            title: "Slim Thigh Stretches",
            src: "https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg",
            duration: 11,
          },
        ],
      },
      {
        dayNum: 30,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Slim Legs",
            src: "https://www.youtube.com/watch?v=qH1e8HYEDCQ&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd5ba2d47479a9df23558/e7b18440-5ecd-11ec-b8cd-2976cd667d03.jpeg",
            duration: 16,
          },
          {
            title: "Flat Belly Abs",
            src: "https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 11,
          },
          {
            title: "Plank Challenge",
            src: "https://www.youtube.com/watch?v=EJ8XxPvCG0U&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
            duration: 12,
          },
          {
            title: "Slim Thigh Stretches",
            src: "https://www.youtube.com/watch?v=a3gaS8gz1aw&t=0s&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbd68e52c5c9bf0f255099/66272c80-5ece-11ec-883e-77d525cedf9b.jpeg",
            duration: 11,
          },
        ],
      },
    ],
  },
  {
    programId: 8,
    days: [
      {
        dayNum: 1,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Do This Workout to Lose Weight",
            src: "https://www.youtube.com/watch?v=Crda1Sv9mks&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bc00884df7b918c30e8a06/6b2843e0-5ee7-11ec-b4e8-6545cdfc138f.jpeg",
            duration: 16,
          },
          {
            title: "Abs in 2 Weeks",
            src: "https://www.youtube.com/watch?v=h8ctkfSx6R0&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bc1877dff295b571b03e08/af196bc0-5ef5-11ec-b4e8-6545cdfc138f.jpeg",
            duration: 11,
          },
          {
            title: "Legs & Glutes",
            src: "https://www.youtube.com/watch?v=PrRResjXk6Q&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbfa342cb3b78eb6ac2c1b/a51de630-5ee3-11ec-b8cd-2976cd667d03.jpeg",
            duration: 14,
          },
          {
            title: "Relaxation Recovery Cooldown",
            src: "https://www.youtube.com/watch?v=cO2RqgslEjk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf91852c5c9bf0f2550fb/fc26bde0-5ee2-11ec-b99f-c33e6b9468db.jpeg",
            duration: 15,
          },
        ],
      },
      {
        dayNum: 2,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Do This Workout to Lose Weight",
            src: "https://www.youtube.com/watch?v=Crda1Sv9mks&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bc00884df7b918c30e8a06/6b2843e0-5ee7-11ec-b4e8-6545cdfc138f.jpeg",
            duration: 16,
          },
          {
            title: "Abs in 2 Weeks",
            src: "https://www.youtube.com/watch?v=h8ctkfSx6R0&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bc1877dff295b571b03e08/af196bc0-5ef5-11ec-b4e8-6545cdfc138f.jpeg",
            duration: 11,
          },
          {
            title: "Legs & Glutes",
            src: "https://www.youtube.com/watch?v=PrRResjXk6Q&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbfa342cb3b78eb6ac2c1b/a51de630-5ee3-11ec-b8cd-2976cd667d03.jpeg",
            duration: 14,
          },
          {
            title: "Relaxation Recovery Cooldown",
            src: "https://www.youtube.com/watch?v=cO2RqgslEjk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf91852c5c9bf0f2550fb/fc26bde0-5ee2-11ec-b99f-c33e6b9468db.jpeg",
            duration: 15,
          },
        ],
      },
      {
        dayNum: 3,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Do This Workout to Lose Weight",
            src: "https://www.youtube.com/watch?v=Crda1Sv9mks&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bc00884df7b918c30e8a06/6b2843e0-5ee7-11ec-b4e8-6545cdfc138f.jpeg",
            duration: 16,
          },
          {
            title: "Abs in 2 Weeks",
            src: "https://www.youtube.com/watch?v=h8ctkfSx6R0&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bc1877dff295b571b03e08/af196bc0-5ef5-11ec-b4e8-6545cdfc138f.jpeg",
            duration: 11,
          },
          {
            title: "Legs & Glutes",
            src: "https://www.youtube.com/watch?v=PrRResjXk6Q&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbfa342cb3b78eb6ac2c1b/a51de630-5ee3-11ec-b8cd-2976cd667d03.jpeg",
            duration: 14,
          },
          {
            title: "Relaxation Recovery Cooldown",
            src: "https://www.youtube.com/watch?v=cO2RqgslEjk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf91852c5c9bf0f2550fb/fc26bde0-5ee2-11ec-b99f-c33e6b9468db.jpeg",
            duration: 15,
          },
        ],
      },
      {
        dayNum: 4,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Do This Workout to Lose Weight",
            src: "https://www.youtube.com/watch?v=Crda1Sv9mks&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bc00884df7b918c30e8a06/6b2843e0-5ee7-11ec-b4e8-6545cdfc138f.jpeg",
            duration: 16,
          },
          {
            title: "Abs in 2 Weeks",
            src: "https://www.youtube.com/watch?v=h8ctkfSx6R0&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bc1877dff295b571b03e08/af196bc0-5ef5-11ec-b4e8-6545cdfc138f.jpeg",
            duration: 11,
          },
          {
            title: "Legs & Glutes",
            src: "https://www.youtube.com/watch?v=PrRResjXk6Q&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbfa342cb3b78eb6ac2c1b/a51de630-5ee3-11ec-b8cd-2976cd667d03.jpeg",
            duration: 14,
          },
          {
            title: "Relaxation Recovery Cooldown",
            src: "https://www.youtube.com/watch?v=cO2RqgslEjk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf91852c5c9bf0f2550fb/fc26bde0-5ee2-11ec-b99f-c33e6b9468db.jpeg",
            duration: 15,
          },
        ],
      },
      {
        dayNum: 5,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Do This Workout to Lose Weight",
            src: "https://www.youtube.com/watch?v=Crda1Sv9mks&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bc00884df7b918c30e8a06/6b2843e0-5ee7-11ec-b4e8-6545cdfc138f.jpeg",
            duration: 16,
          },
          {
            title: "Abs in 2 Weeks",
            src: "https://www.youtube.com/watch?v=h8ctkfSx6R0&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bc1877dff295b571b03e08/af196bc0-5ef5-11ec-b4e8-6545cdfc138f.jpeg",
            duration: 11,
          },
          {
            title: "Legs & Glutes",
            src: "https://www.youtube.com/watch?v=PrRResjXk6Q&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbfa342cb3b78eb6ac2c1b/a51de630-5ee3-11ec-b8cd-2976cd667d03.jpeg",
            duration: 14,
          },
          {
            title: "Relaxation Recovery Cooldown",
            src: "https://www.youtube.com/watch?v=cO2RqgslEjk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf91852c5c9bf0f2550fb/fc26bde0-5ee2-11ec-b99f-c33e6b9468db.jpeg",
            duration: 15,
          },
        ],
      },
      {
        dayNum: 6,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Do This Workout to Lose Weight",
            src: "https://www.youtube.com/watch?v=Crda1Sv9mks&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bc00884df7b918c30e8a06/6b2843e0-5ee7-11ec-b4e8-6545cdfc138f.jpeg",
            duration: 16,
          },
          {
            title: "Abs in 2 Weeks",
            src: "https://www.youtube.com/watch?v=h8ctkfSx6R0&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bc1877dff295b571b03e08/af196bc0-5ef5-11ec-b4e8-6545cdfc138f.jpeg",
            duration: 11,
          },
          {
            title: "Legs & Glutes",
            src: "https://www.youtube.com/watch?v=PrRResjXk6Q&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbfa342cb3b78eb6ac2c1b/a51de630-5ee3-11ec-b8cd-2976cd667d03.jpeg",
            duration: 14,
          },
          {
            title: "Relaxation Recovery Cooldown",
            src: "https://www.youtube.com/watch?v=cO2RqgslEjk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf91852c5c9bf0f2550fb/fc26bde0-5ee2-11ec-b99f-c33e6b9468db.jpeg",
            duration: 15,
          },
        ],
      },
      {
        dayNum: 7,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Do This Workout to Lose Weight",
            src: "https://www.youtube.com/watch?v=Crda1Sv9mks&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bc00884df7b918c30e8a06/6b2843e0-5ee7-11ec-b4e8-6545cdfc138f.jpeg",
            duration: 16,
          },
          {
            title: "Abs in 2 Weeks",
            src: "https://www.youtube.com/watch?v=h8ctkfSx6R0&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bc1877dff295b571b03e08/af196bc0-5ef5-11ec-b4e8-6545cdfc138f.jpeg",
            duration: 11,
          },
          {
            title: "Legs & Glutes",
            src: "https://www.youtube.com/watch?v=PrRResjXk6Q&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbfa342cb3b78eb6ac2c1b/a51de630-5ee3-11ec-b8cd-2976cd667d03.jpeg",
            duration: 14,
          },
          {
            title: "Relaxation Recovery Cooldown",
            src: "https://www.youtube.com/watch?v=cO2RqgslEjk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf91852c5c9bf0f2550fb/fc26bde0-5ee2-11ec-b99f-c33e6b9468db.jpeg",
            duration: 15,
          },
        ],
      },
      {
        dayNum: 8,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Do This Workout to Lose Weight",
            src: "https://www.youtube.com/watch?v=Crda1Sv9mks&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bc00884df7b918c30e8a06/6b2843e0-5ee7-11ec-b4e8-6545cdfc138f.jpeg",
            duration: 16,
          },
          {
            title: "Abs in 2 Weeks",
            src: "https://www.youtube.com/watch?v=h8ctkfSx6R0&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bc1877dff295b571b03e08/af196bc0-5ef5-11ec-b4e8-6545cdfc138f.jpeg",
            duration: 11,
          },
          {
            title: "Legs & Glutes",
            src: "https://www.youtube.com/watch?v=PrRResjXk6Q&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbfa342cb3b78eb6ac2c1b/a51de630-5ee3-11ec-b8cd-2976cd667d03.jpeg",
            duration: 14,
          },
          {
            title: "Relaxation Recovery Cooldown",
            src: "https://www.youtube.com/watch?v=cO2RqgslEjk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf91852c5c9bf0f2550fb/fc26bde0-5ee2-11ec-b99f-c33e6b9468db.jpeg",
            duration: 15,
          },
        ],
      },
      {
        dayNum: 9,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Do This Workout to Lose Weight",
            src: "https://www.youtube.com/watch?v=Crda1Sv9mks&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bc00884df7b918c30e8a06/6b2843e0-5ee7-11ec-b4e8-6545cdfc138f.jpeg",
            duration: 16,
          },
          {
            title: "Abs in 2 Weeks",
            src: "https://www.youtube.com/watch?v=h8ctkfSx6R0&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bc1877dff295b571b03e08/af196bc0-5ef5-11ec-b4e8-6545cdfc138f.jpeg",
            duration: 11,
          },
          {
            title: "Legs & Glutes",
            src: "https://www.youtube.com/watch?v=PrRResjXk6Q&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbfa342cb3b78eb6ac2c1b/a51de630-5ee3-11ec-b8cd-2976cd667d03.jpeg",
            duration: 14,
          },
          {
            title: "Relaxation Recovery Cooldown",
            src: "https://www.youtube.com/watch?v=cO2RqgslEjk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf91852c5c9bf0f2550fb/fc26bde0-5ee2-11ec-b99f-c33e6b9468db.jpeg",
            duration: 15,
          },
        ],
      },
      {
        dayNum: 10,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Do This Workout to Lose Weight",
            src: "https://www.youtube.com/watch?v=Crda1Sv9mks&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bc00884df7b918c30e8a06/6b2843e0-5ee7-11ec-b4e8-6545cdfc138f.jpeg",
            duration: 16,
          },
          {
            title: "Abs in 2 Weeks",
            src: "https://www.youtube.com/watch?v=h8ctkfSx6R0&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bc1877dff295b571b03e08/af196bc0-5ef5-11ec-b4e8-6545cdfc138f.jpeg",
            duration: 11,
          },
          {
            title: "Legs & Glutes",
            src: "https://www.youtube.com/watch?v=PrRResjXk6Q&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbfa342cb3b78eb6ac2c1b/a51de630-5ee3-11ec-b8cd-2976cd667d03.jpeg",
            duration: 14,
          },
          {
            title: "Relaxation Recovery Cooldown",
            src: "https://www.youtube.com/watch?v=cO2RqgslEjk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf91852c5c9bf0f2550fb/fc26bde0-5ee2-11ec-b99f-c33e6b9468db.jpeg",
            duration: 15,
          },
        ],
      },
      {
        dayNum: 11,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Do This Workout to Lose Weight",
            src: "https://www.youtube.com/watch?v=Crda1Sv9mks&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bc00884df7b918c30e8a06/6b2843e0-5ee7-11ec-b4e8-6545cdfc138f.jpeg",
            duration: 16,
          },
          {
            title: "Abs in 2 Weeks",
            src: "https://www.youtube.com/watch?v=h8ctkfSx6R0&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bc1877dff295b571b03e08/af196bc0-5ef5-11ec-b4e8-6545cdfc138f.jpeg",
            duration: 11,
          },
          {
            title: "Legs & Glutes",
            src: "https://www.youtube.com/watch?v=PrRResjXk6Q&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbfa342cb3b78eb6ac2c1b/a51de630-5ee3-11ec-b8cd-2976cd667d03.jpeg",
            duration: 14,
          },
          {
            title: "Relaxation Recovery Cooldown",
            src: "https://www.youtube.com/watch?v=cO2RqgslEjk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf91852c5c9bf0f2550fb/fc26bde0-5ee2-11ec-b99f-c33e6b9468db.jpeg",
            duration: 15,
          },
        ],
      },
      {
        dayNum: 12,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Do This Workout to Lose Weight",
            src: "https://www.youtube.com/watch?v=Crda1Sv9mks&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bc00884df7b918c30e8a06/6b2843e0-5ee7-11ec-b4e8-6545cdfc138f.jpeg",
            duration: 16,
          },
          {
            title: "Abs in 2 Weeks",
            src: "https://www.youtube.com/watch?v=h8ctkfSx6R0&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bc1877dff295b571b03e08/af196bc0-5ef5-11ec-b4e8-6545cdfc138f.jpeg",
            duration: 11,
          },
          {
            title: "Legs & Glutes",
            src: "https://www.youtube.com/watch?v=PrRResjXk6Q&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbfa342cb3b78eb6ac2c1b/a51de630-5ee3-11ec-b8cd-2976cd667d03.jpeg",
            duration: 14,
          },
          {
            title: "Relaxation Recovery Cooldown",
            src: "https://www.youtube.com/watch?v=cO2RqgslEjk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf91852c5c9bf0f2550fb/fc26bde0-5ee2-11ec-b99f-c33e6b9468db.jpeg",
            duration: 15,
          },
        ],
      },
      {
        dayNum: 13,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Do This Workout to Lose Weight",
            src: "https://www.youtube.com/watch?v=Crda1Sv9mks&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bc00884df7b918c30e8a06/6b2843e0-5ee7-11ec-b4e8-6545cdfc138f.jpeg",
            duration: 16,
          },
          {
            title: "Abs in 2 Weeks",
            src: "https://www.youtube.com/watch?v=h8ctkfSx6R0&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bc1877dff295b571b03e08/af196bc0-5ef5-11ec-b4e8-6545cdfc138f.jpeg",
            duration: 11,
          },
          {
            title: "Legs & Glutes",
            src: "https://www.youtube.com/watch?v=PrRResjXk6Q&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbfa342cb3b78eb6ac2c1b/a51de630-5ee3-11ec-b8cd-2976cd667d03.jpeg",
            duration: 14,
          },
          {
            title: "Relaxation Recovery Cooldown",
            src: "https://www.youtube.com/watch?v=cO2RqgslEjk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf91852c5c9bf0f2550fb/fc26bde0-5ee2-11ec-b99f-c33e6b9468db.jpeg",
            duration: 15,
          },
        ],
      },
      {
        dayNum: 14,
        videos: [
          {
            title: "Warm Up",
            src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
            duration: 6,
          },
          {
            title: "Do This Workout to Lose Weight",
            src: "https://www.youtube.com/watch?v=Crda1Sv9mks&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bc00884df7b918c30e8a06/6b2843e0-5ee7-11ec-b4e8-6545cdfc138f.jpeg",
            duration: 16,
          },
          {
            title: "Abs in 2 Weeks",
            src: "https://www.youtube.com/watch?v=h8ctkfSx6R0&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bc1877dff295b571b03e08/af196bc0-5ef5-11ec-b4e8-6545cdfc138f.jpeg",
            duration: 11,
          },
          {
            title: "Legs & Glutes",
            src: "https://www.youtube.com/watch?v=PrRResjXk6Q&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbfa342cb3b78eb6ac2c1b/a51de630-5ee3-11ec-b8cd-2976cd667d03.jpeg",
            duration: 14,
          },
          {
            title: "Relaxation Recovery Cooldown",
            src: "https://www.youtube.com/watch?v=cO2RqgslEjk&feature=youtu.be&ab_channel=ChloeTing",
            srcImg:
              "https://static.chloeting.com/videos/61bbf91852c5c9bf0f2550fb/fc26bde0-5ee2-11ec-b99f-c33e6b9468db.jpeg",
            duration: 15,
          },
        ],
      },
    ],
  },
];

export interface ImagesLargeType {
  url: string;
  height?: number;
  width?: number;
}

export interface NutrientType {
  label: string;
  quantity: number;
  unit: string;
}
export type NutrientsKeyType = "ENERC_KCAL" | "FAT" | "PROCNT" | "CHOCDF";

export interface NutrientsType {
  [key: string]: NutrientType;
}

export interface RecipeItem {
  url: string;
  uri: string;
  shareAs: string;
  label: string;
  image: string;
  calories: number;
  images?: ImagesType;
  ingredientLines?: string[];
  totalNutrients?: NutrientsType;
  healthLabels?: string[];
  totalTime?: number;
}
export interface RecipeApi {
  recipe: RecipeItem;
}
export interface RecipeContextItems {
  [key: string]: RecipeApi;
}

export interface RecipeContextType {
    category: string;
    recipes: RecipeContextItems;
    setCategory: (category: string) => void;
    setRecipes: (recipes: RecipeContextItems, resetData?: boolean) => void;
}

export interface ThemeContextType {
    theme: string;
    setTheme?: (theme: string) => void;
  category: string;
  recipes: RecipeContextItems;
  setCategory: (category: string) => void;
  setRecipes: (recipes: RecipeContextItems, resetData?: boolean) => void;
}

export const recipeData: RecipeApi[] = [
  {
    recipe: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_bbfc1a248bd6fe277e35fe01027de91f",
      label: "Naomi Duguid's Fried Noodles",
      image:
        "https://edamam-product-images.s3.amazonaws.com/web-img/041/04158b5869398c899942336274f0e0f7.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=fe8b6ae85466c4bffd9afb033f019a7ff865bdf67870b4bfbc7906e10cc8c621",
      images: {
        THUMBNAIL: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/041/04158b5869398c899942336274f0e0f7-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b67af465f7e85004cde01f5416f9f19f6158b97edcae30a9179d324f9dcab5be",
          width: 100,
          height: 100,
        },
        SMALL: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/041/04158b5869398c899942336274f0e0f7-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b2e05cac287259856a760d3e692c493bd3c7a658db2a2417d6acc346f4d8960c",
          width: 200,
          height: 200,
        },
        REGULAR: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/041/04158b5869398c899942336274f0e0f7.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=fe8b6ae85466c4bffd9afb033f019a7ff865bdf67870b4bfbc7906e10cc8c621",
          width: 300,
          height: 300,
        },
      },
      source: "Serious Eats",
      url: "http://www.seriouseats.com/recipes/2012/10/naomi-duguids-fried-noodles.html",
      shareAs:
        "http://www.edamam.com/recipe/naomi-duguid-s-fried-noodles-bbfc1a248bd6fe277e35fe01027de91f/-/alcohol-free/balanced",
      yield: 2,
      dietLabels: ["Balanced", "Low-Sodium"],
      healthLabels: [
        "Sugar-Conscious",
        "Low Potassium",
        "Kidney-Friendly",
        "Vegetarian",
        "Pescatarian",
        "Dairy-Free",
        "Tree-Nut-Free",
        "Soy-Free",
        "Fish-Free",
        "Shellfish-Free",
        "Pork-Free",
        "Red-Meat-Free",
        "Crustacean-Free",
        "Celery-Free",
        "Mustard-Free",
        "Sesame-Free",
        "Lupine-Free",
        "Mollusk-Free",
        "Alcohol-Free",
        "Sulfite-Free",
        "Kosher",
      ],
      cautions: [],
      ingredientLines: ["1 cup dried egg noodles", "Peanut oil, for frying"],
      ingredients: [
        {
          text: "1 cup dried egg noodles",
          quantity: 1,
          measure: "cup",
          food: "egg noodles",
          weight: 38,
          foodCategory: "grains",
          foodId: "food_aefg3gqa71nrtpbhjfo3yb36kd81",
          image:
            "https://www.edamam.com/food-img/800/800c9c0d7cef6b5474723682ffa2878d.jpg",
        },
        {
          text: "Peanut oil, for frying",
          quantity: 0,
          measure: null,
          food: "Peanut oil",
          weight: 0.5167999999999999,
          foodCategory: "Oils",
          foodId: "food_ackj525b2vo905bisrwjabfanm5t",
          image:
            "https://www.edamam.com/food-img/827/82725f6b015e75a059ba2569c768eb68.jpg",
        },
      ],
      calories: 196.30800000000002,
      totalWeight: 43.7,
      totalTime: 20,
      cuisineType: ["asian"],
      mealType: ["lunch/dinner"],
      dishType: ["main course"],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 196.30800000000002,
          unit: "kcal",
        },
        FAT: {
          label: "Fat",
          quantity: 7.3872,
          unit: "g",
        },
        FASAT: {
          label: "Saturated",
          quantity: 1.4117,
          unit: "g",
        },
        FATRN: {
          label: "Trans",
          quantity: 0.02318,
          unit: "g",
        },
        FAMS: {
          label: "Monounsaturated",
          quantity: 3.1091600000000006,
          unit: "g",
        },
        FAPU: {
          label: "Polyunsaturated",
          quantity: 2.32978,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 27.0826,
          unit: "g",
        },
        "CHOCDF.net": {
          label: "Carbohydrates (net)",
          quantity: 25.828599999999998,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 1.254,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars",
          quantity: 0.7143999999999999,
          unit: "g",
        },
        "SUGAR.added": {
          label: "Sugars, added",
          quantity: 0,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 5.3808,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 31.92,
          unit: "mg",
        },
        NA: {
          label: "Sodium",
          quantity: 7.98,
          unit: "mg",
        },
        CA: {
          label: "Calcium",
          quantity: 13.3,
          unit: "mg",
        },
        MG: {
          label: "Magnesium",
          quantity: 22.04,
          unit: "mg",
        },
        K: {
          label: "Potassium",
          quantity: 92.72,
          unit: "mg",
        },
        FE: {
          label: "Iron",
          quantity: 1.5255100000000001,
          unit: "mg",
        },
        ZN: {
          label: "Zinc",
          quantity: 0.73017,
          unit: "mg",
        },
        P: {
          label: "Phosphorus",
          quantity: 91.58,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 6.46,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 0,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 0.43054000000000003,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 0.16188,
          unit: "mg",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 3.1870600000000002,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 0.08208,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 140.6,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate (food)",
          quantity: 11.02,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 76.38,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 0.11019999999999999,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 0.11399999999999999,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 1.03493,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 0.2299,
          unit: "µg",
        },
        "Sugar.alcohol": {
          label: "Sugar alcohol",
          quantity: 0,
          unit: "g",
        },
        WATER: {
          label: "Water",
          quantity: 3.4238,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 9.815400000000002,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 11.364923076923077,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 7.0584999999999996,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 9.027533333333333,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 5.016,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 10.761599999999998,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 10.64,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 0.3325,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 1.33,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 5.247619047619048,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 1.9727659574468086,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 8.475055555555556,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 6.6379090909090905,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 13.082857142857144,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 0.7177777777777777,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 0,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 35.87833333333334,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 12.452307692307691,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 19.919125,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 6.313846153846153,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 35.15,
          unit: "%",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 4.591666666666667,
          unit: "%",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 0.7599999999999999,
          unit: "%",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 6.899533333333333,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 0.19158333333333333,
          unit: "%",
        },
      },
      digest: [
        {
          label: "Fat",
          tag: "FAT",
          schemaOrgTag: "fatContent",
          total: 7.3872,
          hasRDI: true,
          daily: 11.364923076923077,
          unit: "g",
          sub: [
            {
              label: "Saturated",
              tag: "FASAT",
              schemaOrgTag: "saturatedFatContent",
              total: 1.4117,
              hasRDI: true,
              daily: 7.0584999999999996,
              unit: "g",
            },
            {
              label: "Trans",
              tag: "FATRN",
              schemaOrgTag: "transFatContent",
              total: 0.02318,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Monounsaturated",
              tag: "FAMS",
              schemaOrgTag: null,
              total: 3.1091600000000006,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Polyunsaturated",
              tag: "FAPU",
              schemaOrgTag: null,
              total: 2.32978,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
          ],
        },
        {
          label: "Carbs",
          tag: "CHOCDF",
          schemaOrgTag: "carbohydrateContent",
          total: 27.0826,
          hasRDI: true,
          daily: 9.027533333333333,
          unit: "g",
          sub: [
            {
              label: "Carbs (net)",
              tag: "CHOCDF.net",
              schemaOrgTag: null,
              total: 25.828599999999998,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Fiber",
              tag: "FIBTG",
              schemaOrgTag: "fiberContent",
              total: 1.254,
              hasRDI: true,
              daily: 5.016,
              unit: "g",
            },
            {
              label: "Sugars",
              tag: "SUGAR",
              schemaOrgTag: "sugarContent",
              total: 0.7143999999999999,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Sugars, added",
              tag: "SUGAR.added",
              schemaOrgTag: null,
              total: 0,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
          ],
        },
        {
          label: "Protein",
          tag: "PROCNT",
          schemaOrgTag: "proteinContent",
          total: 5.3808,
          hasRDI: true,
          daily: 10.761599999999998,
          unit: "g",
        },
        {
          label: "Cholesterol",
          tag: "CHOLE",
          schemaOrgTag: "cholesterolContent",
          total: 31.92,
          hasRDI: true,
          daily: 10.64,
          unit: "mg",
        },
        {
          label: "Sodium",
          tag: "NA",
          schemaOrgTag: "sodiumContent",
          total: 7.98,
          hasRDI: true,
          daily: 0.3325,
          unit: "mg",
        },
        {
          label: "Calcium",
          tag: "CA",
          schemaOrgTag: null,
          total: 13.3,
          hasRDI: true,
          daily: 1.33,
          unit: "mg",
        },
        {
          label: "Magnesium",
          tag: "MG",
          schemaOrgTag: null,
          total: 22.04,
          hasRDI: true,
          daily: 5.247619047619048,
          unit: "mg",
        },
        {
          label: "Potassium",
          tag: "K",
          schemaOrgTag: null,
          total: 92.72,
          hasRDI: true,
          daily: 1.9727659574468086,
          unit: "mg",
        },
        {
          label: "Iron",
          tag: "FE",
          schemaOrgTag: null,
          total: 1.5255100000000001,
          hasRDI: true,
          daily: 8.475055555555556,
          unit: "mg",
        },
        {
          label: "Zinc",
          tag: "ZN",
          schemaOrgTag: null,
          total: 0.73017,
          hasRDI: true,
          daily: 6.6379090909090905,
          unit: "mg",
        },
        {
          label: "Phosphorus",
          tag: "P",
          schemaOrgTag: null,
          total: 91.58,
          hasRDI: true,
          daily: 13.082857142857144,
          unit: "mg",
        },
        {
          label: "Vitamin A",
          tag: "VITA_RAE",
          schemaOrgTag: null,
          total: 6.46,
          hasRDI: true,
          daily: 0.7177777777777777,
          unit: "µg",
        },
        {
          label: "Vitamin C",
          tag: "VITC",
          schemaOrgTag: null,
          total: 0,
          hasRDI: true,
          daily: 0,
          unit: "mg",
        },
        {
          label: "Thiamin (B1)",
          tag: "THIA",
          schemaOrgTag: null,
          total: 0.43054000000000003,
          hasRDI: true,
          daily: 35.87833333333334,
          unit: "mg",
        },
        {
          label: "Riboflavin (B2)",
          tag: "RIBF",
          schemaOrgTag: null,
          total: 0.16188,
          hasRDI: true,
          daily: 12.452307692307691,
          unit: "mg",
        },
        {
          label: "Niacin (B3)",
          tag: "NIA",
          schemaOrgTag: null,
          total: 3.1870600000000002,
          hasRDI: true,
          daily: 19.919125,
          unit: "mg",
        },
        {
          label: "Vitamin B6",
          tag: "VITB6A",
          schemaOrgTag: null,
          total: 0.08208,
          hasRDI: true,
          daily: 6.313846153846153,
          unit: "mg",
        },
        {
          label: "Folate equivalent (total)",
          tag: "FOLDFE",
          schemaOrgTag: null,
          total: 140.6,
          hasRDI: true,
          daily: 35.15,
          unit: "µg",
        },
        {
          label: "Folate (food)",
          tag: "FOLFD",
          schemaOrgTag: null,
          total: 11.02,
          hasRDI: false,
          daily: 0,
          unit: "µg",
        },
        {
          label: "Folic acid",
          tag: "FOLAC",
          schemaOrgTag: null,
          total: 76.38,
          hasRDI: false,
          daily: 0,
          unit: "µg",
        },
        {
          label: "Vitamin B12",
          tag: "VITB12",
          schemaOrgTag: null,
          total: 0.11019999999999999,
          hasRDI: true,
          daily: 4.591666666666667,
          unit: "µg",
        },
        {
          label: "Vitamin D",
          tag: "VITD",
          schemaOrgTag: null,
          total: 0.11399999999999999,
          hasRDI: true,
          daily: 0.7599999999999999,
          unit: "µg",
        },
        {
          label: "Vitamin E",
          tag: "TOCPHA",
          schemaOrgTag: null,
          total: 1.03493,
          hasRDI: true,
          daily: 6.899533333333333,
          unit: "mg",
        },
        {
          label: "Vitamin K",
          tag: "VITK1",
          schemaOrgTag: null,
          total: 0.2299,
          hasRDI: true,
          daily: 0.19158333333333333,
          unit: "µg",
        },
        {
          label: "Sugar alcohols",
          tag: "Sugar.alcohol",
          schemaOrgTag: null,
          total: 0,
          hasRDI: false,
          daily: 0,
          unit: "g",
        },
        {
          label: "Water",
          tag: "WATER",
          schemaOrgTag: null,
          total: 3.4238,
          hasRDI: false,
          daily: 0,
          unit: "g",
        },
      ],
    },
    _links: {
      self: {
        title: "Self",
        href: "https://api.edamam.com/api/recipes/v2/bbfc1a248bd6fe277e35fe01027de91f?type=public&app_id=de511dc8&app_key=3f9639bae8563438d47729b156a7b78a",
      },
    },
  },
  {
    recipe: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_067f0b7be628ae847366e4f3e614b319",
      label: "Maple Banana Frozen Yogurt",
      image:
        "https://edamam-product-images.s3.amazonaws.com/web-img/b2d/b2dbd9ac524a41cae54682d3b5dc8d10.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=7903bbe87e3fde08b71f0accdf37d096a59b9b1bb0447a560b66422c7253700b",
      images: {
        THUMBNAIL: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/b2d/b2dbd9ac524a41cae54682d3b5dc8d10-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8619f574eda328f7a3f4822e4ad78464f8f50b84f3152ddd6f40a0adf38a612a",
          width: 100,
          height: 100,
        },
        SMALL: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/b2d/b2dbd9ac524a41cae54682d3b5dc8d10-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2b4111c1b79de339d552144348d2ae7af3a9102abd124c7c36073c4c55cfeb61",
          width: 200,
          height: 200,
        },
        REGULAR: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/b2d/b2dbd9ac524a41cae54682d3b5dc8d10.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=7903bbe87e3fde08b71f0accdf37d096a59b9b1bb0447a560b66422c7253700b",
          width: 300,
          height: 300,
        },
        LARGE: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/b2d/b2dbd9ac524a41cae54682d3b5dc8d10-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4c18f007a3535eba45b28228deb124e3210ce0484cf785806a2504771bfff8dc",
          width: 600,
          height: 600,
        },
      },
      source: "No Recipes",
      url: "http://norecipes.com/blog/2008/04/26/maple-banana-frozen-yogurt/",
      shareAs:
        "http://www.edamam.com/recipe/maple-banana-frozen-yogurt-067f0b7be628ae847366e4f3e614b319/-/alcohol-free/balanced",
      yield: 4,
      dietLabels: ["Balanced", "Low-Sodium"],
      healthLabels: [
        "Vegetarian",
        "Pescatarian",
        "Mediterranean",
        "Gluten-Free",
        "Wheat-Free",
        "Egg-Free",
        "Peanut-Free",
        "Tree-Nut-Free",
        "Soy-Free",
        "Fish-Free",
        "Shellfish-Free",
        "Pork-Free",
        "Red-Meat-Free",
        "Crustacean-Free",
        "Celery-Free",
        "Mustard-Free",
        "Sesame-Free",
        "Lupine-Free",
        "Mollusk-Free",
        "Alcohol-Free",
        "No oil added",
        "Sulfite-Free",
        "Kosher",
      ],
      cautions: ["Sulfites"],
      ingredientLines: [
        "2 rice bananas",
        "16 oz maple yogurt (I use Brown Cow Cream Top)",
        "1 tsp vanilla",
      ],
      ingredients: [
        {
          text: "2 rice bananas",
          quantity: 2,
          measure: "<unit>",
          food: "bananas",
          weight: 231.4,
          foodCategory: "fruit",
          foodId: "food_bjsfxtcaidvmhaa3afrbna43q3hu",
          image:
            "https://www.edamam.com/food-img/9f6/9f6181163a25c96022ee3fc66d9ebb11.jpg",
        },
        {
          text: "16 oz maple yogurt (I use Brown Cow Cream Top)",
          quantity: 16,
          measure: "ounce",
          food: "yogurt",
          weight: 453.59237,
          foodCategory: "yogurt",
          foodId: "food_a79ojfkbgdeekgblqmky9bunr8f6",
          image:
            "https://www.edamam.com/food-img/933/933eb3791b3a2175e007f1607d56b7e2.jpg",
        },
        {
          text: "1 tsp vanilla",
          quantity: 1,
          measure: "teaspoon",
          food: "vanilla",
          weight: 4.2,
          foodCategory: "Condiments and sauces",
          foodId: "food_bh1wvnqaw3q7ciascfoygaabax2a",
          image:
            "https://www.edamam.com/food-img/90f/90f910b0bf82750d4f6528263e014cca.jpg",
        },
      ],
      calories: 494.7333457000001,
      totalWeight: 689.1923700000001,
      totalTime: 0,
      cuisineType: ["american"],
      mealType: ["lunch/dinner"],
      dishType: ["desserts"],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 494.7333457000001,
          unit: "kcal",
        },
        FAT: {
          label: "Fat",
          quantity: 15.507892025000002,
          unit: "g",
        },
        FASAT: {
          label: "Saturated",
          quantity: 9.766884075200002,
          unit: "g",
        },
        FATRN: {
          label: "Trans",
          quantity: 0,
          unit: "g",
        },
        FAMS: {
          label: "Monounsaturated",
          quantity: 4.125047864100001,
          unit: "g",
        },
        FAPU: {
          label: "Polyunsaturated",
          quantity: 0.5863949803999999,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 74.520464442,
          unit: "g",
        },
        "CHOCDF.net": {
          label: "Carbohydrates (net)",
          quantity: 68.504064442,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 6.0164,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars",
          quantity: 49.96892444200001,
          unit: "g",
        },
        "SUGAR.added": {
          label: "Sugars, added",
          quantity: 0,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 18.264435239000004,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 58.96700810000001,
          unit: "mg",
        },
        NA: {
          label: "Sodium",
          quantity: 211.3444902,
          unit: "mg",
        },
        CA: {
          label: "Calcium",
          quantity: 560.8787677000001,
          unit: "mg",
        },
        MG: {
          label: "Magnesium",
          quantity: 117.41308440000002,
          unit: "mg",
        },
        K: {
          label: "Potassium",
          quantity: 1537.6961735,
          unit: "mg",
        },
        FE: {
          label: "Iron",
          quantity: 0.8334761850000002,
          unit: "mg",
        },
        ZN: {
          label: "Zinc",
          quantity: 3.0279149830000005,
          unit: "mg",
        },
        P: {
          label: "Phosphorus",
          quantity: 482.0727515000001,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 129.41193990000002,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 22.399761849999997,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 0.2037377873,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 0.8170131654000001,
          unit: "mg",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 1.8968542775,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 0.9954795584,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 78.0314659,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate (food)",
          quantity: 78.0314659,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 0,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 1.678291769,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 0.4535923700000001,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 0.503555422,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 2.06418474,
          unit: "µg",
        },
        "Sugar.alcohol": {
          label: "Sugar alcohol",
          quantity: 0,
          unit: "g",
        },
        WATER: {
          label: "Water",
          quantity: 574.2577932300001,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 24.736667285000003,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 23.858295423076925,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 48.83442037600001,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 24.840154814,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 24.0656,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 36.52887047800001,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 19.65566936666667,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 8.806020425,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 56.087876770000015,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 27.955496285714293,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 32.71693986170212,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 4.6304232500000015,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 27.526499845454552,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 68.86753592857144,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 14.379104433333335,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 24.888624277777772,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 16.978148941666667,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 62.84716656923077,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 11.855339234375,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 76.57535064615385,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 19.507866475,
          unit: "%",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 69.92882370833334,
          unit: "%",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 3.0239491333333337,
          unit: "%",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 3.3570361466666667,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 1.72015395,
          unit: "%",
        },
      },
      digest: [
        {
          label: "Fat",
          tag: "FAT",
          schemaOrgTag: "fatContent",
          total: 15.507892025000002,
          hasRDI: true,
          daily: 23.858295423076925,
          unit: "g",
          sub: [
            {
              label: "Saturated",
              tag: "FASAT",
              schemaOrgTag: "saturatedFatContent",
              total: 9.766884075200002,
              hasRDI: true,
              daily: 48.83442037600001,
              unit: "g",
            },
            {
              label: "Trans",
              tag: "FATRN",
              schemaOrgTag: "transFatContent",
              total: 0,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Monounsaturated",
              tag: "FAMS",
              schemaOrgTag: null,
              total: 4.125047864100001,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Polyunsaturated",
              tag: "FAPU",
              schemaOrgTag: null,
              total: 0.5863949803999999,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
          ],
        },
        {
          label: "Carbs",
          tag: "CHOCDF",
          schemaOrgTag: "carbohydrateContent",
          total: 74.520464442,
          hasRDI: true,
          daily: 24.840154814,
          unit: "g",
          sub: [
            {
              label: "Carbs (net)",
              tag: "CHOCDF.net",
              schemaOrgTag: null,
              total: 68.504064442,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Fiber",
              tag: "FIBTG",
              schemaOrgTag: "fiberContent",
              total: 6.0164,
              hasRDI: true,
              daily: 24.0656,
              unit: "g",
            },
            {
              label: "Sugars",
              tag: "SUGAR",
              schemaOrgTag: "sugarContent",
              total: 49.96892444200001,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Sugars, added",
              tag: "SUGAR.added",
              schemaOrgTag: null,
              total: 0,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
          ],
        },
        {
          label: "Protein",
          tag: "PROCNT",
          schemaOrgTag: "proteinContent",
          total: 18.264435239000004,
          hasRDI: true,
          daily: 36.52887047800001,
          unit: "g",
        },
        {
          label: "Cholesterol",
          tag: "CHOLE",
          schemaOrgTag: "cholesterolContent",
          total: 58.96700810000001,
          hasRDI: true,
          daily: 19.65566936666667,
          unit: "mg",
        },
        {
          label: "Sodium",
          tag: "NA",
          schemaOrgTag: "sodiumContent",
          total: 211.3444902,
          hasRDI: true,
          daily: 8.806020425,
          unit: "mg",
        },
        {
          label: "Calcium",
          tag: "CA",
          schemaOrgTag: null,
          total: 560.8787677000001,
          hasRDI: true,
          daily: 56.087876770000015,
          unit: "mg",
        },
        {
          label: "Magnesium",
          tag: "MG",
          schemaOrgTag: null,
          total: 117.41308440000002,
          hasRDI: true,
          daily: 27.955496285714293,
          unit: "mg",
        },
        {
          label: "Potassium",
          tag: "K",
          schemaOrgTag: null,
          total: 1537.6961735,
          hasRDI: true,
          daily: 32.71693986170212,
          unit: "mg",
        },
        {
          label: "Iron",
          tag: "FE",
          schemaOrgTag: null,
          total: 0.8334761850000002,
          hasRDI: true,
          daily: 4.6304232500000015,
          unit: "mg",
        },
        {
          label: "Zinc",
          tag: "ZN",
          schemaOrgTag: null,
          total: 3.0279149830000005,
          hasRDI: true,
          daily: 27.526499845454552,
          unit: "mg",
        },
        {
          label: "Phosphorus",
          tag: "P",
          schemaOrgTag: null,
          total: 482.0727515000001,
          hasRDI: true,
          daily: 68.86753592857144,
          unit: "mg",
        },
        {
          label: "Vitamin A",
          tag: "VITA_RAE",
          schemaOrgTag: null,
          total: 129.41193990000002,
          hasRDI: true,
          daily: 14.379104433333335,
          unit: "µg",
        },
        {
          label: "Vitamin C",
          tag: "VITC",
          schemaOrgTag: null,
          total: 22.399761849999997,
          hasRDI: true,
          daily: 24.888624277777772,
          unit: "mg",
        },
        {
          label: "Thiamin (B1)",
          tag: "THIA",
          schemaOrgTag: null,
          total: 0.2037377873,
          hasRDI: true,
          daily: 16.978148941666667,
          unit: "mg",
        },
        {
          label: "Riboflavin (B2)",
          tag: "RIBF",
          schemaOrgTag: null,
          total: 0.8170131654000001,
          hasRDI: true,
          daily: 62.84716656923077,
          unit: "mg",
        },
        {
          label: "Niacin (B3)",
          tag: "NIA",
          schemaOrgTag: null,
          total: 1.8968542775,
          hasRDI: true,
          daily: 11.855339234375,
          unit: "mg",
        },
        {
          label: "Vitamin B6",
          tag: "VITB6A",
          schemaOrgTag: null,
          total: 0.9954795584,
          hasRDI: true,
          daily: 76.57535064615385,
          unit: "mg",
        },
        {
          label: "Folate equivalent (total)",
          tag: "FOLDFE",
          schemaOrgTag: null,
          total: 78.0314659,
          hasRDI: true,
          daily: 19.507866475,
          unit: "µg",
        },
        {
          label: "Folate (food)",
          tag: "FOLFD",
          schemaOrgTag: null,
          total: 78.0314659,
          hasRDI: false,
          daily: 0,
          unit: "µg",
        },
        {
          label: "Folic acid",
          tag: "FOLAC",
          schemaOrgTag: null,
          total: 0,
          hasRDI: false,
          daily: 0,
          unit: "µg",
        },
        {
          label: "Vitamin B12",
          tag: "VITB12",
          schemaOrgTag: null,
          total: 1.678291769,
          hasRDI: true,
          daily: 69.92882370833334,
          unit: "µg",
        },
        {
          label: "Vitamin D",
          tag: "VITD",
          schemaOrgTag: null,
          total: 0.4535923700000001,
          hasRDI: true,
          daily: 3.0239491333333337,
          unit: "µg",
        },
        {
          label: "Vitamin E",
          tag: "TOCPHA",
          schemaOrgTag: null,
          total: 0.503555422,
          hasRDI: true,
          daily: 3.3570361466666667,
          unit: "mg",
        },
        {
          label: "Vitamin K",
          tag: "VITK1",
          schemaOrgTag: null,
          total: 2.06418474,
          hasRDI: true,
          daily: 1.72015395,
          unit: "µg",
        },
        {
          label: "Sugar alcohols",
          tag: "Sugar.alcohol",
          schemaOrgTag: null,
          total: 0,
          hasRDI: false,
          daily: 0,
          unit: "g",
        },
        {
          label: "Water",
          tag: "WATER",
          schemaOrgTag: null,
          total: 574.2577932300001,
          hasRDI: false,
          daily: 0,
          unit: "g",
        },
      ],
    },
    _links: {
      self: {
        title: "Self",
        href: "https://api.edamam.com/api/recipes/v2/067f0b7be628ae847366e4f3e614b319?type=public&app_id=de511dc8&app_key=3f9639bae8563438d47729b156a7b78a",
      },
    },
  },
  {
    recipe: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_845a9adf81bb22f3b76ead2981a872a0",
      label: "Vanilla Ice Cream With Grilled Corn And Lime",
      image:
        "https://edamam-product-images.s3.amazonaws.com/web-img/270/270c9aae056587c1f176ae6eafdb4c0d.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=af1dfe92b0b09aa56e61cafea55b4ab1b240cc75c1a0cc2ca6aed308476b8ee9",
      images: {
        THUMBNAIL: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/270/270c9aae056587c1f176ae6eafdb4c0d-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=70b8ecd65de1b006e6a2743f28c0eec6406306d0682a55bc070f7ad679c29b16",
          width: 100,
          height: 100,
        },
        SMALL: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/270/270c9aae056587c1f176ae6eafdb4c0d-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=899055d83ac6b21d59a63f16ab532e517da3413d87ff5f2e1110f3d3afc1a1b9",
          width: 200,
          height: 200,
        },
        REGULAR: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/270/270c9aae056587c1f176ae6eafdb4c0d.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=af1dfe92b0b09aa56e61cafea55b4ab1b240cc75c1a0cc2ca6aed308476b8ee9",
          width: 300,
          height: 300,
        },
        LARGE: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/270/270c9aae056587c1f176ae6eafdb4c0d-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ec682c7c32b4da224e3ed519d21265b25bead6362e55340e5e37eb150ac25570",
          width: 600,
          height: 600,
        },
      },
      source: "Ruhlman",
      url: "http://ruhlman.com/2011/07/how-to-grill-corn/",
      shareAs:
        "http://www.edamam.com/recipe/vanilla-ice-cream-with-grilled-corn-and-lime-845a9adf81bb22f3b76ead2981a872a0/-/alcohol-free/balanced",
      yield: 2,
      dietLabels: ["Balanced", "Low-Sodium"],
      healthLabels: [
        "Vegetarian",
        "Pescatarian",
        "Gluten-Free",
        "Wheat-Free",
        "Egg-Free",
        "Peanut-Free",
        "Tree-Nut-Free",
        "Soy-Free",
        "Fish-Free",
        "Shellfish-Free",
        "Pork-Free",
        "Red-Meat-Free",
        "Crustacean-Free",
        "Celery-Free",
        "Mustard-Free",
        "Sesame-Free",
        "Lupine-Free",
        "Mollusk-Free",
        "Alcohol-Free",
        "Sulfite-Free",
        "Kosher",
      ],
      cautions: ["Sulfites"],
      ingredientLines: [
        "Good vanilla ice cream (about 1/2 cup per person, or as you wish)",
        "Grilled corn (1/2 ear per person)",
        "1 lime (for every four servings)",
      ],
      ingredients: [
        {
          text: "Good vanilla ice cream (about 1/2 cup per person, or as you wish)",
          quantity: 0.5,
          measure: "cup",
          food: "vanilla ice cream",
          weight: 66,
          foodCategory: "frozen treats",
          foodId: "food_bsg87una16tr8waipd66na9drm1k",
          image:
            "https://www.edamam.com/food-img/1be/1be43587dc55730fc761aedf4f3df090.jpg",
        },
        {
          text: "Grilled corn (1/2 ear per person)",
          quantity: 2,
          measure: "ear",
          food: "corn",
          weight: 204,
          foodCategory: "vegetables",
          foodId: "food_b4wvre6b14mmkpaa22d8ybup8q51",
          image:
            "https://www.edamam.com/food-img/eb5/eb5e11afb9f697720b2de2e0e0e27d8d.jpg",
        },
        {
          text: "1 lime (for every four servings)",
          quantity: 1,
          measure: "<unit>",
          food: "lime",
          weight: 67,
          foodCategory: "fruit",
          foodId: "food_av58muyb8kg92fbk0g8g8aui5knv",
          image:
            "https://www.edamam.com/food-img/48a/48a123c9576647c4ada6a41df5eeb22a.jpg",
        },
      ],
      calories: 332.16,
      totalWeight: 337,
      totalTime: 0,
      cuisineType: ["american"],
      mealType: ["lunch/dinner"],
      dishType: ["desserts"],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 332.16,
          unit: "kcal",
        },
        FAT: {
          label: "Fat",
          quantity: 10.148000000000001,
          unit: "g",
        },
        FASAT: {
          label: "Saturated",
          quantity: 5.15914,
          unit: "g",
        },
        FATRN: {
          label: "Trans",
          quantity: 0.014280000000000001,
          unit: "g",
        },
        FAMS: {
          label: "Monounsaturated",
          quantity: 2.85355,
          unit: "g",
        },
        FAPU: {
          label: "Polyunsaturated",
          quantity: 1.32865,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 60.785799999999995,
          unit: "g",
        },
        "CHOCDF.net": {
          label: "Carbohydrates (net)",
          quantity: 54.367799999999995,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 6.417999999999999,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars",
          quantity: 27.9079,
          unit: "g",
        },
        "SUGAR.added": {
          label: "Sugars, added",
          quantity: 14.0052,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 9.4498,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 29.040000000000003,
          unit: "mg",
        },
        NA: {
          label: "Sodium",
          quantity: 84.74000000000001,
          unit: "mg",
        },
        CA: {
          label: "Calcium",
          quantity: 110.67,
          unit: "mg",
        },
        MG: {
          label: "Magnesium",
          quantity: 88.74,
          unit: "mg",
        },
        K: {
          label: "Potassium",
          quantity: 750.48,
          unit: "mg",
        },
        FE: {
          label: "Iron",
          quantity: 1.5221999999999998,
          unit: "mg",
        },
        ZN: {
          label: "Zinc",
          quantity: 1.4675,
          unit: "mg",
        },
        P: {
          label: "Phosphorus",
          quantity: 262.92,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 97.58000000000001,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 33.765,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 0.36336,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 0.28400000000000003,
          unit: "mg",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 3.8213600000000003,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 0.25021,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 94.34,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate (food)",
          quantity: 94.34,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 0,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 0.2574,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 0.132,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 0.48819999999999997,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 1.2120000000000002,
          unit: "µg",
        },
        "Sugar.alcohol": {
          label: "Sugar alcohol",
          quantity: 0,
          unit: "g",
        },
        WATER: {
          label: "Water",
          quantity: 254.5362,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 16.608,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 15.612307692307695,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 25.7957,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 20.26193333333333,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 25.671999999999997,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 18.8996,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 9.680000000000001,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 3.5308333333333333,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 11.067,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 21.12857142857143,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 15.967659574468085,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 8.456666666666665,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 13.340909090909092,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 37.56,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 10.842222222222224,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 37.516666666666666,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 30.28,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 21.846153846153847,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 23.8835,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 19.246923076923075,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 23.585,
          unit: "%",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 10.725000000000001,
          unit: "%",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 0.8800000000000001,
          unit: "%",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 3.254666666666666,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 1.0100000000000002,
          unit: "%",
        },
      },
      digest: [
        {
          label: "Fat",
          tag: "FAT",
          schemaOrgTag: "fatContent",
          total: 10.148000000000001,
          hasRDI: true,
          daily: 15.612307692307695,
          unit: "g",
          sub: [
            {
              label: "Saturated",
              tag: "FASAT",
              schemaOrgTag: "saturatedFatContent",
              total: 5.15914,
              hasRDI: true,
              daily: 25.7957,
              unit: "g",
            },
            {
              label: "Trans",
              tag: "FATRN",
              schemaOrgTag: "transFatContent",
              total: 0.014280000000000001,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Monounsaturated",
              tag: "FAMS",
              schemaOrgTag: null,
              total: 2.85355,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Polyunsaturated",
              tag: "FAPU",
              schemaOrgTag: null,
              total: 1.32865,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
          ],
        },
        {
          label: "Carbs",
          tag: "CHOCDF",
          schemaOrgTag: "carbohydrateContent",
          total: 60.785799999999995,
          hasRDI: true,
          daily: 20.26193333333333,
          unit: "g",
          sub: [
            {
              label: "Carbs (net)",
              tag: "CHOCDF.net",
              schemaOrgTag: null,
              total: 54.367799999999995,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Fiber",
              tag: "FIBTG",
              schemaOrgTag: "fiberContent",
              total: 6.417999999999999,
              hasRDI: true,
              daily: 25.671999999999997,
              unit: "g",
            },
            {
              label: "Sugars",
              tag: "SUGAR",
              schemaOrgTag: "sugarContent",
              total: 27.9079,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Sugars, added",
              tag: "SUGAR.added",
              schemaOrgTag: null,
              total: 14.0052,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
          ],
        },
        {
          label: "Protein",
          tag: "PROCNT",
          schemaOrgTag: "proteinContent",
          total: 9.4498,
          hasRDI: true,
          daily: 18.8996,
          unit: "g",
        },
        {
          label: "Cholesterol",
          tag: "CHOLE",
          schemaOrgTag: "cholesterolContent",
          total: 29.040000000000003,
          hasRDI: true,
          daily: 9.680000000000001,
          unit: "mg",
        },
        {
          label: "Sodium",
          tag: "NA",
          schemaOrgTag: "sodiumContent",
          total: 84.74000000000001,
          hasRDI: true,
          daily: 3.5308333333333333,
          unit: "mg",
        },
        {
          label: "Calcium",
          tag: "CA",
          schemaOrgTag: null,
          total: 110.67,
          hasRDI: true,
          daily: 11.067,
          unit: "mg",
        },
        {
          label: "Magnesium",
          tag: "MG",
          schemaOrgTag: null,
          total: 88.74,
          hasRDI: true,
          daily: 21.12857142857143,
          unit: "mg",
        },
        {
          label: "Potassium",
          tag: "K",
          schemaOrgTag: null,
          total: 750.48,
          hasRDI: true,
          daily: 15.967659574468085,
          unit: "mg",
        },
        {
          label: "Iron",
          tag: "FE",
          schemaOrgTag: null,
          total: 1.5221999999999998,
          hasRDI: true,
          daily: 8.456666666666665,
          unit: "mg",
        },
        {
          label: "Zinc",
          tag: "ZN",
          schemaOrgTag: null,
          total: 1.4675,
          hasRDI: true,
          daily: 13.340909090909092,
          unit: "mg",
        },
        {
          label: "Phosphorus",
          tag: "P",
          schemaOrgTag: null,
          total: 262.92,
          hasRDI: true,
          daily: 37.56,
          unit: "mg",
        },
        {
          label: "Vitamin A",
          tag: "VITA_RAE",
          schemaOrgTag: null,
          total: 97.58000000000001,
          hasRDI: true,
          daily: 10.842222222222224,
          unit: "µg",
        },
        {
          label: "Vitamin C",
          tag: "VITC",
          schemaOrgTag: null,
          total: 33.765,
          hasRDI: true,
          daily: 37.516666666666666,
          unit: "mg",
        },
        {
          label: "Thiamin (B1)",
          tag: "THIA",
          schemaOrgTag: null,
          total: 0.36336,
          hasRDI: true,
          daily: 30.28,
          unit: "mg",
        },
        {
          label: "Riboflavin (B2)",
          tag: "RIBF",
          schemaOrgTag: null,
          total: 0.28400000000000003,
          hasRDI: true,
          daily: 21.846153846153847,
          unit: "mg",
        },
        {
          label: "Niacin (B3)",
          tag: "NIA",
          schemaOrgTag: null,
          total: 3.8213600000000003,
          hasRDI: true,
          daily: 23.8835,
          unit: "mg",
        },
        {
          label: "Vitamin B6",
          tag: "VITB6A",
          schemaOrgTag: null,
          total: 0.25021,
          hasRDI: true,
          daily: 19.246923076923075,
          unit: "mg",
        },
        {
          label: "Folate equivalent (total)",
          tag: "FOLDFE",
          schemaOrgTag: null,
          total: 94.34,
          hasRDI: true,
          daily: 23.585,
          unit: "µg",
        },
        {
          label: "Folate (food)",
          tag: "FOLFD",
          schemaOrgTag: null,
          total: 94.34,
          hasRDI: false,
          daily: 0,
          unit: "µg",
        },
        {
          label: "Folic acid",
          tag: "FOLAC",
          schemaOrgTag: null,
          total: 0,
          hasRDI: false,
          daily: 0,
          unit: "µg",
        },
        {
          label: "Vitamin B12",
          tag: "VITB12",
          schemaOrgTag: null,
          total: 0.2574,
          hasRDI: true,
          daily: 10.725000000000001,
          unit: "µg",
        },
        {
          label: "Vitamin D",
          tag: "VITD",
          schemaOrgTag: null,
          total: 0.132,
          hasRDI: true,
          daily: 0.8800000000000001,
          unit: "µg",
        },
        {
          label: "Vitamin E",
          tag: "TOCPHA",
          schemaOrgTag: null,
          total: 0.48819999999999997,
          hasRDI: true,
          daily: 3.254666666666666,
          unit: "mg",
        },
        {
          label: "Vitamin K",
          tag: "VITK1",
          schemaOrgTag: null,
          total: 1.2120000000000002,
          hasRDI: true,
          daily: 1.0100000000000002,
          unit: "µg",
        },
        {
          label: "Sugar alcohols",
          tag: "Sugar.alcohol",
          schemaOrgTag: null,
          total: 0,
          hasRDI: false,
          daily: 0,
          unit: "g",
        },
        {
          label: "Water",
          tag: "WATER",
          schemaOrgTag: null,
          total: 254.5362,
          hasRDI: false,
          daily: 0,
          unit: "g",
        },
      ],
    },
    _links: {
      self: {
        title: "Self",
        href: "https://api.edamam.com/api/recipes/v2/845a9adf81bb22f3b76ead2981a872a0?type=public&app_id=de511dc8&app_key=3f9639bae8563438d47729b156a7b78a",
      },
    },
  },
  {
    recipe: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_3bc095c814af01cfc5e12aa3c3bad9e6",
      label: "Crispy Frizzled Artichokes recipes",
      image:
        "https://edamam-product-images.s3.amazonaws.com/web-img/585/585064d750d123eeefb28b4c5be960a4?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6491ede3b4b3fec39721d0e0bad61e4a6fa20ba3a3cdee48f4e15b0394fdad55",
      images: {
        THUMBNAIL: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/585/585064d750d123eeefb28b4c5be960a4-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=08f6c506501f690161eda282a58c2310ec1dc42dc28b0cfede25f874cd6fd319",
          width: 100,
          height: 100,
        },
        SMALL: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/585/585064d750d123eeefb28b4c5be960a4-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=fe4a2242f938a3e26e5a7c6132a386ab7eb0aeb4af8fde67796b6ea64ed5d6f0",
          width: 200,
          height: 200,
        },
        REGULAR: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/585/585064d750d123eeefb28b4c5be960a4?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6491ede3b4b3fec39721d0e0bad61e4a6fa20ba3a3cdee48f4e15b0394fdad55",
          width: 300,
          height: 300,
        },
      },
      source: "Smitten Kitchen",
      url: "https://smittenkitchen.com/2015/06/crispy-frizzled-artichokes/",
      shareAs:
        "http://www.edamam.com/recipe/crispy-frizzled-artichokes-recipes-3bc095c814af01cfc5e12aa3c3bad9e6/-/alcohol-free/balanced",
      yield: 4,
      dietLabels: ["Balanced", "Low-Sodium"],
      healthLabels: [
        "Sugar-Conscious",
        "Low Potassium",
        "Kidney-Friendly",
        "Keto-Friendly",
        "Vegan",
        "Vegetarian",
        "Pescatarian",
        "Paleo",
        "Mediterranean",
        "DASH",
        "Dairy-Free",
        "Gluten-Free",
        "Wheat-Free",
        "Egg-Free",
        "Peanut-Free",
        "Tree-Nut-Free",
        "Soy-Free",
        "Fish-Free",
        "Shellfish-Free",
        "Pork-Free",
        "Red-Meat-Free",
        "Crustacean-Free",
        "Celery-Free",
        "Mustard-Free",
        "Sesame-Free",
        "Lupine-Free",
        "Mollusk-Free",
        "Alcohol-Free",
        "Sulfite-Free",
        "FODMAP-Free",
        "Kosher",
        "Immuno-Supportive",
      ],
      cautions: ["Sulfites"],
      ingredientLines: [
        "1 to 2 lemons, halved (1 should be fine for smaller amounts)",
        "olive oil",
        "coarse salt",
        "leaf parsley",
      ],
      ingredients: [
        {
          text: "1 to 2 lemons, halved (1 should be fine for smaller amounts)",
          quantity: 1.5,
          measure: "<unit>",
          food: "lemons",
          weight: 87,
          foodCategory: "fruit",
          foodId: "food_a6uzc62astrxcgbtzyq59b6fncrr",
          image:
            "https://www.edamam.com/food-img/70a/70acba3d4c734d7c70ef4efeed85dc8f.jpg",
        },
        {
          text: "olive oil",
          quantity: 0,
          measure: null,
          food: "olive oil",
          weight: 1.18864,
          foodCategory: "Oils",
          foodId: "food_b1d1icuad3iktrbqby0hiagafaz7",
          image:
            "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg",
        },
        {
          text: "coarse salt",
          quantity: 0,
          measure: null,
          food: "coarse salt",
          weight: 0.5244000000000001,
          foodCategory: "Condiments and sauces",
          foodId: "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
          image:
            "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg",
        },
        {
          text: "leaf parsley",
          quantity: 1,
          measure: "leaf",
          food: "parsley",
          weight: 0.4,
          foodCategory: "vegetables",
          foodId: "food_b244pqdazw24zobr5vqu2bf0uid8",
          image:
            "https://www.edamam.com/food-img/46a/46a132e96626d7989b4d6ed8c91f4da0.jpg",
        },
      ],
      calories: 35.8815776,
      totalWeight: 89.11304000000001,
      totalTime: 70,
      cuisineType: ["mediterranean"],
      mealType: ["lunch/dinner"],
      dishType: ["condiments and sauces"],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 35.8815776,
          unit: "kcal",
        },
        FAT: {
          label: "Fat",
          quantity: 1.4528,
          unit: "g",
        },
        FASAT: {
          label: "Saturated",
          quantity: 0.19858541119999998,
          unit: "g",
        },
        FATRN: {
          label: "Trans",
          quantity: 0,
          unit: "g",
        },
        FAMS: {
          label: "Monounsaturated",
          quantity: 0.8779936303999999,
          unit: "g",
        },
        FAPU: {
          label: "Polyunsaturated",
          quantity: 0.2030065872,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 8.13372,
          unit: "g",
        },
        "CHOCDF.net": {
          label: "Carbohydrates (net)",
          quantity: 5.684520000000001,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 2.4492,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars",
          quantity: 2.1784,
          unit: "g",
        },
        "SUGAR.added": {
          label: "Sugars, added",
          quantity: 0,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 0.9688800000000001,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 0,
          unit: "mg",
        },
        NA: {
          label: "Sodium",
          quantity: 205.23472480000004,
          unit: "mg",
        },
        CA: {
          label: "Calcium",
          quantity: 23.3097424,
          unit: "mg",
        },
        MG: {
          label: "Magnesium",
          quantity: 7.165244,
          unit: "mg",
        },
        K: {
          label: "Potassium",
          quantity: 122.32983839999999,
          unit: "mg",
        },
        FE: {
          label: "Iron",
          quantity: 0.555186904,
          unit: "mg",
        },
        ZN: {
          label: "Zinc",
          quantity: 0.0570044,
          unit: "mg",
        },
        P: {
          label: "Phosphorus",
          quantity: 14.152,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 2.554,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 46.641999999999996,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 0.035143999999999995,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 0.017792,
          unit: "mg",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 0.092252,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 0.06996,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 10.178,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate (food)",
          quantity: 10.178,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 0,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 0,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 0,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 0.30406984000000004,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 7.275561280000001,
          unit: "µg",
        },
        "Sugar.alcohol": {
          label: "Sugar alcohol",
          quantity: 0,
          unit: "g",
        },
        WATER: {
          label: "Water",
          quantity: 77.76448880000001,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 1.79407888,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 2.235076923076923,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 0.9929270559999999,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 2.71124,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 9.7968,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 1.9377600000000001,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 0,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 8.551446866666668,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 2.33097424,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 1.7060104761904762,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 2.602762519148936,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 3.084371688888889,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 0.5182218181818181,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 2.0217142857142854,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 0.28377777777777774,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 51.824444444444445,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 2.928666666666666,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 1.3686153846153846,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 0.5765750000000001,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 5.381538461538461,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 2.5445,
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
          quantity: 2.027132266666667,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 6.062967733333334,
          unit: "%",
        },
      },
      digest: [
        {
          label: "Fat",
          tag: "FAT",
          schemaOrgTag: "fatContent",
          total: 1.4528,
          hasRDI: true,
          daily: 2.235076923076923,
          unit: "g",
          sub: [
            {
              label: "Saturated",
              tag: "FASAT",
              schemaOrgTag: "saturatedFatContent",
              total: 0.19858541119999998,
              hasRDI: true,
              daily: 0.9929270559999999,
              unit: "g",
            },
            {
              label: "Trans",
              tag: "FATRN",
              schemaOrgTag: "transFatContent",
              total: 0,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Monounsaturated",
              tag: "FAMS",
              schemaOrgTag: null,
              total: 0.8779936303999999,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Polyunsaturated",
              tag: "FAPU",
              schemaOrgTag: null,
              total: 0.2030065872,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
          ],
        },
        {
          label: "Carbs",
          tag: "CHOCDF",
          schemaOrgTag: "carbohydrateContent",
          total: 8.13372,
          hasRDI: true,
          daily: 2.71124,
          unit: "g",
          sub: [
            {
              label: "Carbs (net)",
              tag: "CHOCDF.net",
              schemaOrgTag: null,
              total: 5.684520000000001,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Fiber",
              tag: "FIBTG",
              schemaOrgTag: "fiberContent",
              total: 2.4492,
              hasRDI: true,
              daily: 9.7968,
              unit: "g",
            },
            {
              label: "Sugars",
              tag: "SUGAR",
              schemaOrgTag: "sugarContent",
              total: 2.1784,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Sugars, added",
              tag: "SUGAR.added",
              schemaOrgTag: null,
              total: 0,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
          ],
        },
        {
          label: "Protein",
          tag: "PROCNT",
          schemaOrgTag: "proteinContent",
          total: 0.9688800000000001,
          hasRDI: true,
          daily: 1.9377600000000001,
          unit: "g",
        },
        {
          label: "Cholesterol",
          tag: "CHOLE",
          schemaOrgTag: "cholesterolContent",
          total: 0,
          hasRDI: true,
          daily: 0,
          unit: "mg",
        },
        {
          label: "Sodium",
          tag: "NA",
          schemaOrgTag: "sodiumContent",
          total: 205.23472480000004,
          hasRDI: true,
          daily: 8.551446866666668,
          unit: "mg",
        },
        {
          label: "Calcium",
          tag: "CA",
          schemaOrgTag: null,
          total: 23.3097424,
          hasRDI: true,
          daily: 2.33097424,
          unit: "mg",
        },
        {
          label: "Magnesium",
          tag: "MG",
          schemaOrgTag: null,
          total: 7.165244,
          hasRDI: true,
          daily: 1.7060104761904762,
          unit: "mg",
        },
        {
          label: "Potassium",
          tag: "K",
          schemaOrgTag: null,
          total: 122.32983839999999,
          hasRDI: true,
          daily: 2.602762519148936,
          unit: "mg",
        },
        {
          label: "Iron",
          tag: "FE",
          schemaOrgTag: null,
          total: 0.555186904,
          hasRDI: true,
          daily: 3.084371688888889,
          unit: "mg",
        },
        {
          label: "Zinc",
          tag: "ZN",
          schemaOrgTag: null,
          total: 0.0570044,
          hasRDI: true,
          daily: 0.5182218181818181,
          unit: "mg",
        },
        {
          label: "Phosphorus",
          tag: "P",
          schemaOrgTag: null,
          total: 14.152,
          hasRDI: true,
          daily: 2.0217142857142854,
          unit: "mg",
        },
        {
          label: "Vitamin A",
          tag: "VITA_RAE",
          schemaOrgTag: null,
          total: 2.554,
          hasRDI: true,
          daily: 0.28377777777777774,
          unit: "µg",
        },
        {
          label: "Vitamin C",
          tag: "VITC",
          schemaOrgTag: null,
          total: 46.641999999999996,
          hasRDI: true,
          daily: 51.824444444444445,
          unit: "mg",
        },
        {
          label: "Thiamin (B1)",
          tag: "THIA",
          schemaOrgTag: null,
          total: 0.035143999999999995,
          hasRDI: true,
          daily: 2.928666666666666,
          unit: "mg",
        },
        {
          label: "Riboflavin (B2)",
          tag: "RIBF",
          schemaOrgTag: null,
          total: 0.017792,
          hasRDI: true,
          daily: 1.3686153846153846,
          unit: "mg",
        },
        {
          label: "Niacin (B3)",
          tag: "NIA",
          schemaOrgTag: null,
          total: 0.092252,
          hasRDI: true,
          daily: 0.5765750000000001,
          unit: "mg",
        },
        {
          label: "Vitamin B6",
          tag: "VITB6A",
          schemaOrgTag: null,
          total: 0.06996,
          hasRDI: true,
          daily: 5.381538461538461,
          unit: "mg",
        },
        {
          label: "Folate equivalent (total)",
          tag: "FOLDFE",
          schemaOrgTag: null,
          total: 10.178,
          hasRDI: true,
          daily: 2.5445,
          unit: "µg",
        },
        {
          label: "Folate (food)",
          tag: "FOLFD",
          schemaOrgTag: null,
          total: 10.178,
          hasRDI: false,
          daily: 0,
          unit: "µg",
        },
        {
          label: "Folic acid",
          tag: "FOLAC",
          schemaOrgTag: null,
          total: 0,
          hasRDI: false,
          daily: 0,
          unit: "µg",
        },
        {
          label: "Vitamin B12",
          tag: "VITB12",
          schemaOrgTag: null,
          total: 0,
          hasRDI: true,
          daily: 0,
          unit: "µg",
        },
        {
          label: "Vitamin D",
          tag: "VITD",
          schemaOrgTag: null,
          total: 0,
          hasRDI: true,
          daily: 0,
          unit: "µg",
        },
        {
          label: "Vitamin E",
          tag: "TOCPHA",
          schemaOrgTag: null,
          total: 0.30406984000000004,
          hasRDI: true,
          daily: 2.027132266666667,
          unit: "mg",
        },
        {
          label: "Vitamin K",
          tag: "VITK1",
          schemaOrgTag: null,
          total: 7.275561280000001,
          hasRDI: true,
          daily: 6.062967733333334,
          unit: "µg",
        },
        {
          label: "Sugar alcohols",
          tag: "Sugar.alcohol",
          schemaOrgTag: null,
          total: 0,
          hasRDI: false,
          daily: 0,
          unit: "g",
        },
        {
          label: "Water",
          tag: "WATER",
          schemaOrgTag: null,
          total: 77.76448880000001,
          hasRDI: false,
          daily: 0,
          unit: "g",
        },
      ],
    },
    _links: {
      self: {
        title: "Self",
        href: "https://api.edamam.com/api/recipes/v2/3bc095c814af01cfc5e12aa3c3bad9e6?type=public&app_id=de511dc8&app_key=3f9639bae8563438d47729b156a7b78a",
      },
    },
  },
  {
    recipe: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_fc39484a6eb3f14aefe6db632cac9ecc",
      label: "Frothy Indian Coffee",
      image:
        "https://edamam-product-images.s3.amazonaws.com/web-img/bd3/bd36cf6d5fc839c66e8098186ef121d5.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6f813fecbe6f6b6e228fbfa2f598a6c257a0e0ccc4a16305d95ee528a6a507c5",
      images: {
        THUMBNAIL: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/bd3/bd36cf6d5fc839c66e8098186ef121d5-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2f2b10e57174a7e0fed7b0873152c30109307ed9dc4f5e3668406c4b2d108626",
          width: 100,
          height: 100,
        },
        SMALL: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/bd3/bd36cf6d5fc839c66e8098186ef121d5-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d09f832f51a8def76bcb70c83f50a5a78dde08f454baab6b31591323c8e233a1",
          width: 200,
          height: 200,
        },
        REGULAR: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/bd3/bd36cf6d5fc839c66e8098186ef121d5.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6f813fecbe6f6b6e228fbfa2f598a6c257a0e0ccc4a16305d95ee528a6a507c5",
          width: 300,
          height: 300,
        },
        LARGE: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/bd3/bd36cf6d5fc839c66e8098186ef121d5-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a1c4d5b32bef89f0e79c45945bccd41a7b1a3c2129eef8935995e6ebbea98bc8",
          width: 600,
          height: 600,
        },
      },
      source: "Seven Spoons",
      url: "http://www.sevenspoons.net/blog/2011/5/9/halfway-already.html",
      shareAs:
        "http://www.edamam.com/recipe/frothy-indian-coffee-fc39484a6eb3f14aefe6db632cac9ecc/-/alcohol-free/balanced",
      yield: 2,
      dietLabels: ["Balanced", "Low-Sodium"],
      healthLabels: [
        "Kidney-Friendly",
        "Vegetarian",
        "Pescatarian",
        "Gluten-Free",
        "Wheat-Free",
        "Egg-Free",
        "Peanut-Free",
        "Tree-Nut-Free",
        "Soy-Free",
        "Fish-Free",
        "Shellfish-Free",
        "Pork-Free",
        "Red-Meat-Free",
        "Crustacean-Free",
        "Celery-Free",
        "Mustard-Free",
        "Sesame-Free",
        "Lupine-Free",
        "Mollusk-Free",
        "Alcohol-Free",
        "No oil added",
        "Kosher",
      ],
      cautions: ["Sulfites"],
      ingredientLines: [
        "3/4 cup milk",
        "1/4 cup water, plus around 1/2 teaspoon more",
        "4 tsp sugar, or to taste",
        "1 tbsp instant coffee powder",
      ],
      ingredients: [
        {
          text: "3/4 cup milk",
          quantity: 0.75,
          measure: "cup",
          food: "milk",
          weight: 183,
          foodCategory: "Milk",
          foodId: "food_b49rs1kaw0jktabzkg2vvanvvsis",
          image:
            "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg",
        },
        {
          text: "1/4 cup water, plus around 1/2 teaspoon more",
          quantity: 0.25,
          measure: "cup",
          food: "water",
          weight: 59.25,
          foodCategory: "water",
          foodId: "food_a99vzubbk1ayrsad318rvbzr3dh0",
          image:
            "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg",
        },
        {
          text: "4 tsp sugar, or to taste",
          quantity: 4,
          measure: "teaspoon",
          food: "sugar",
          weight: 16.8,
          foodCategory: "sugars",
          foodId: "food_axi2ijobrk819yb0adceobnhm1c2",
          image:
            "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg",
        },
        {
          text: "1 tbsp instant coffee powder",
          quantity: 1,
          measure: "tablespoon",
          food: "instant coffee powder",
          weight: 2.999999999797116,
          foodCategory: "coffee and tea",
          foodId: "food_aof7z08ad0qgsta38run7arojif8",
          image:
            "https://www.edamam.com/food-img/336/336e810373dd353a955a6896699b586e.jpg",
        },
      ],
      calories: 187.23599999928382,
      totalWeight: 262.04999999979714,
      totalTime: 0,
      cuisineType: ["indian"],
      mealType: ["teatime"],
      dishType: ["drinks"],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 187.23599999928382,
          unit: "kcal",
        },
        FAT: {
          label: "Fat",
          quantity: 5.962499999998985,
          unit: "g",
        },
        FASAT: {
          label: "Saturated",
          quantity: 3.4188599999996003,
          unit: "g",
        },
        FATRN: {
          label: "Trans",
          quantity: 0,
          unit: "g",
        },
        FAMS: {
          label: "Monounsaturated",
          quantity: 1.487189999999917,
          unit: "g",
        },
        FAPU: {
          label: "Polyunsaturated",
          quantity: 0.36272999999960237,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 27.842639999847027,
          unit: "g",
        },
        "CHOCDF.net": {
          label: "Carbohydrates (net)",
          quantity: 27.842639999847027,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 0,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars",
          quantity: 26.0079,
          unit: "g",
        },
        "SUGAR.added": {
          label: "Sugars, added",
          quantity: 16.7664,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 6.130499999975248,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 18.3,
          unit: "mg",
        },
        NA: {
          label: "Sodium",
          quantity: 82.33799999992495,
          unit: "mg",
        },
        CA: {
          label: "Calcium",
          quantity: 212.96549999971396,
          unit: "mg",
        },
        MG: {
          label: "Magnesium",
          quantity: 28.70249999933657,
          unit: "mg",
        },
        K: {
          label: "Potassium",
          quantity: 347.9459999928281,
          unit: "mg",
        },
        FE: {
          label: "Iron",
          quantity: 0.19559999999105282,
          unit: "mg",
        },
        ZN: {
          label: "Zinc",
          quantity: 0.6952049999992899,
          unit: "mg",
        },
        P: {
          label: "Phosphorus",
          quantity: 162.80999999938527,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 84.18,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 0,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 0.08441999999998377,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 0.31468199999984986,
          unit: "mg",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 1.0080599999428415,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 0.06674999999994116,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 9.15,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate (food)",
          quantity: 9.15,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 0,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 0.8235,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 2.379,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 0.12810000000000002,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 0.6059999999961453,
          unit: "µg",
        },
        "Sugar.alcohol": {
          label: "Sugar alcohol",
          quantity: 0,
          unit: "g",
        },
        WATER: {
          label: "Water",
          quantity: 220.5650099999937,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 9.361799999964191,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 9.173076923075362,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 17.094299999998,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 9.28087999994901,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 0,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 12.260999999950496,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 6.1,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 3.4307499999968725,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 21.296549999971393,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 6.8339285712706115,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 7.403106382826129,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 1.0866666666169602,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 6.320045454538999,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 23.25857142848361,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 9.353333333333333,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 0,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 7.0349999999986474,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 24.206307692296143,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 6.300374999642759,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 5.134615384610859,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 2.2875,
          unit: "%",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 34.3125,
          unit: "%",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 15.860000000000001,
          unit: "%",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 0.8540000000000002,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 0.5049999999967878,
          unit: "%",
        },
      },
      digest: [
        {
          label: "Fat",
          tag: "FAT",
          schemaOrgTag: "fatContent",
          total: 5.962499999998985,
          hasRDI: true,
          daily: 9.173076923075362,
          unit: "g",
          sub: [
            {
              label: "Saturated",
              tag: "FASAT",
              schemaOrgTag: "saturatedFatContent",
              total: 3.4188599999996003,
              hasRDI: true,
              daily: 17.094299999998,
              unit: "g",
            },
            {
              label: "Trans",
              tag: "FATRN",
              schemaOrgTag: "transFatContent",
              total: 0,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Monounsaturated",
              tag: "FAMS",
              schemaOrgTag: null,
              total: 1.487189999999917,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Polyunsaturated",
              tag: "FAPU",
              schemaOrgTag: null,
              total: 0.36272999999960237,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
          ],
        },
        {
          label: "Carbs",
          tag: "CHOCDF",
          schemaOrgTag: "carbohydrateContent",
          total: 27.842639999847027,
          hasRDI: true,
          daily: 9.28087999994901,
          unit: "g",
          sub: [
            {
              label: "Carbs (net)",
              tag: "CHOCDF.net",
              schemaOrgTag: null,
              total: 27.842639999847027,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Fiber",
              tag: "FIBTG",
              schemaOrgTag: "fiberContent",
              total: 0,
              hasRDI: true,
              daily: 0,
              unit: "g",
            },
            {
              label: "Sugars",
              tag: "SUGAR",
              schemaOrgTag: "sugarContent",
              total: 26.0079,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Sugars, added",
              tag: "SUGAR.added",
              schemaOrgTag: null,
              total: 16.7664,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
          ],
        },
        {
          label: "Protein",
          tag: "PROCNT",
          schemaOrgTag: "proteinContent",
          total: 6.130499999975248,
          hasRDI: true,
          daily: 12.260999999950496,
          unit: "g",
        },
        {
          label: "Cholesterol",
          tag: "CHOLE",
          schemaOrgTag: "cholesterolContent",
          total: 18.3,
          hasRDI: true,
          daily: 6.1,
          unit: "mg",
        },
        {
          label: "Sodium",
          tag: "NA",
          schemaOrgTag: "sodiumContent",
          total: 82.33799999992495,
          hasRDI: true,
          daily: 3.4307499999968725,
          unit: "mg",
        },
        {
          label: "Calcium",
          tag: "CA",
          schemaOrgTag: null,
          total: 212.96549999971396,
          hasRDI: true,
          daily: 21.296549999971393,
          unit: "mg",
        },
        {
          label: "Magnesium",
          tag: "MG",
          schemaOrgTag: null,
          total: 28.70249999933657,
          hasRDI: true,
          daily: 6.8339285712706115,
          unit: "mg",
        },
        {
          label: "Potassium",
          tag: "K",
          schemaOrgTag: null,
          total: 347.9459999928281,
          hasRDI: true,
          daily: 7.403106382826129,
          unit: "mg",
        },
        {
          label: "Iron",
          tag: "FE",
          schemaOrgTag: null,
          total: 0.19559999999105282,
          hasRDI: true,
          daily: 1.0866666666169602,
          unit: "mg",
        },
        {
          label: "Zinc",
          tag: "ZN",
          schemaOrgTag: null,
          total: 0.6952049999992899,
          hasRDI: true,
          daily: 6.320045454538999,
          unit: "mg",
        },
        {
          label: "Phosphorus",
          tag: "P",
          schemaOrgTag: null,
          total: 162.80999999938527,
          hasRDI: true,
          daily: 23.25857142848361,
          unit: "mg",
        },
        {
          label: "Vitamin A",
          tag: "VITA_RAE",
          schemaOrgTag: null,
          total: 84.18,
          hasRDI: true,
          daily: 9.353333333333333,
          unit: "µg",
        },
        {
          label: "Vitamin C",
          tag: "VITC",
          schemaOrgTag: null,
          total: 0,
          hasRDI: true,
          daily: 0,
          unit: "mg",
        },
        {
          label: "Thiamin (B1)",
          tag: "THIA",
          schemaOrgTag: null,
          total: 0.08441999999998377,
          hasRDI: true,
          daily: 7.0349999999986474,
          unit: "mg",
        },
        {
          label: "Riboflavin (B2)",
          tag: "RIBF",
          schemaOrgTag: null,
          total: 0.31468199999984986,
          hasRDI: true,
          daily: 24.206307692296143,
          unit: "mg",
        },
        {
          label: "Niacin (B3)",
          tag: "NIA",
          schemaOrgTag: null,
          total: 1.0080599999428415,
          hasRDI: true,
          daily: 6.300374999642759,
          unit: "mg",
        },
        {
          label: "Vitamin B6",
          tag: "VITB6A",
          schemaOrgTag: null,
          total: 0.06674999999994116,
          hasRDI: true,
          daily: 5.134615384610859,
          unit: "mg",
        },
        {
          label: "Folate equivalent (total)",
          tag: "FOLDFE",
          schemaOrgTag: null,
          total: 9.15,
          hasRDI: true,
          daily: 2.2875,
          unit: "µg",
        },
        {
          label: "Folate (food)",
          tag: "FOLFD",
          schemaOrgTag: null,
          total: 9.15,
          hasRDI: false,
          daily: 0,
          unit: "µg",
        },
        {
          label: "Folic acid",
          tag: "FOLAC",
          schemaOrgTag: null,
          total: 0,
          hasRDI: false,
          daily: 0,
          unit: "µg",
        },
        {
          label: "Vitamin B12",
          tag: "VITB12",
          schemaOrgTag: null,
          total: 0.8235,
          hasRDI: true,
          daily: 34.3125,
          unit: "µg",
        },
        {
          label: "Vitamin D",
          tag: "VITD",
          schemaOrgTag: null,
          total: 2.379,
          hasRDI: true,
          daily: 15.860000000000001,
          unit: "µg",
        },
        {
          label: "Vitamin E",
          tag: "TOCPHA",
          schemaOrgTag: null,
          total: 0.12810000000000002,
          hasRDI: true,
          daily: 0.8540000000000002,
          unit: "mg",
        },
        {
          label: "Vitamin K",
          tag: "VITK1",
          schemaOrgTag: null,
          total: 0.6059999999961453,
          hasRDI: true,
          daily: 0.5049999999967878,
          unit: "µg",
        },
        {
          label: "Sugar alcohols",
          tag: "Sugar.alcohol",
          schemaOrgTag: null,
          total: 0,
          hasRDI: false,
          daily: 0,
          unit: "g",
        },
        {
          label: "Water",
          tag: "WATER",
          schemaOrgTag: null,
          total: 220.5650099999937,
          hasRDI: false,
          daily: 0,
          unit: "g",
        },
      ],
    },
    _links: {
      self: {
        title: "Self",
        href: "https://api.edamam.com/api/recipes/v2/fc39484a6eb3f14aefe6db632cac9ecc?type=public&app_id=de511dc8&app_key=3f9639bae8563438d47729b156a7b78a",
      },
    },
  },
  {
    recipe: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_49864e04de41a2512ee21919e26f482c",
      label: "Ultimate Chickpea Noodle Soup recipes",
      image:
        "https://edamam-product-images.s3.amazonaws.com/web-img/996/996dc0887734927c79893f7ceca9c69e?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8196ba81b5636d0052962aea7bc512973857c7e83410495b359c57e3713c8808",
      images: {
        THUMBNAIL: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/996/996dc0887734927c79893f7ceca9c69e-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4dc419e66b92f1866d8a2bccfb3db30dd68d254b7f3eb8d217fc4607dd0ce38e",
          width: 100,
          height: 100,
        },
        SMALL: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/996/996dc0887734927c79893f7ceca9c69e-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=52fb14304d98f3d46d191ae73eadebe1ee43d647b5142383120c7b5d00129be4",
          width: 200,
          height: 200,
        },
        REGULAR: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/996/996dc0887734927c79893f7ceca9c69e?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8196ba81b5636d0052962aea7bc512973857c7e83410495b359c57e3713c8808",
          width: 300,
          height: 300,
        },
      },
      source: "101 Cookbooks",
      url: "http://www.101cookbooks.com/archives/001540.html",
      shareAs:
        "http://www.edamam.com/recipe/ultimate-chickpea-noodle-soup-recipes-49864e04de41a2512ee21919e26f482c/-/alcohol-free/balanced",
      yield: 4,
      dietLabels: ["Balanced", "High-Fiber"],
      healthLabels: [
        "Vegan",
        "Vegetarian",
        "Pescatarian",
        "Mediterranean",
        "Dairy-Free",
        "Egg-Free",
        "Peanut-Free",
        "Tree-Nut-Free",
        "Soy-Free",
        "Fish-Free",
        "Shellfish-Free",
        "Pork-Free",
        "Red-Meat-Free",
        "Crustacean-Free",
        "Celery-Free",
        "Mustard-Free",
        "Sesame-Free",
        "Lupine-Free",
        "Mollusk-Free",
        "Alcohol-Free",
        "Sulfite-Free",
        "Kosher",
      ],
      cautions: [],
      ingredientLines: [
        "4 cups water or a mild vegetable stock",
        "2 cups pre-soaked ceci beans (also known as chickpeas or garbanzo beans)",
        "6 ounces fresh or dried pappardelle",
        "1/3 cup extra virgin olive oil",
        "sea salt",
      ],
      ingredients: [
        {
          text: "4 cups water or a mild vegetable stock",
          quantity: 4,
          measure: "cup",
          food: "vegetable stock",
          weight: 908,
          foodCategory: "Vegan products",
          foodId: "food_bb2qjrjamst0vmam39stubtkmrs4",
          image:
            "https://www.edamam.com/food-img/e61/e6184a8681b772e5198ef0ca1919e1b7.jpg",
        },
        {
          text: "2 cups pre-soaked ceci beans (also known as chickpeas or garbanzo beans)",
          quantity: 2,
          measure: "cup",
          food: "garbanzo beans",
          weight: 400,
          foodCategory: "plant-based protein",
          foodId: "food_baux5rqbkto336asd7w3lbbi1koo",
          image:
            "https://www.edamam.com/food-img/520/520c62055515f730b8947e0e445fd2be.jpg",
        },
        {
          text: "6 ounces fresh or dried pappardelle",
          quantity: 6,
          measure: "ounce",
          food: "pappardelle",
          weight: 170.09713875,
          foodCategory: "grains",
          foodId: "food_a8hs60uayl5icia1qe8qoba1kwp8",
          image:
            "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg",
        },
        {
          text: "1/3 cup extra virgin olive oil",
          quantity: 0.3333333333333333,
          measure: "cup",
          food: "extra virgin olive oil",
          weight: 72,
          foodCategory: "Oils",
          foodId: "food_b1d1icuad3iktrbqby0hiagafaz7",
          image:
            "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg",
        },
        {
          text: "sea salt",
          quantity: 0,
          measure: null,
          food: "sea salt",
          weight: 9.3005828325,
          foodCategory: "Condiments and sauces",
          foodId: "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
          image:
            "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg",
        },
      ],
      calories: 2788.28734183962,
      totalWeight: 1558.7490957971008,
      totalTime: 60,
      cuisineType: ["asian"],
      mealType: ["lunch/dinner"],
      dishType: ["soup"],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 2788.28734183962,
          unit: "kcal",
        },
        FAT: {
          label: "Fat",
          quantity: 99.070495603805,
          unit: "g",
        },
        FASAT: {
          label: "Saturated",
          quantity: 12.8748198244175,
          unit: "g",
        },
        FATRN: {
          label: "Trans",
          quantity: 0,
          unit: "g",
        },
        FAMS: {
          label: "Monounsaturated",
          quantity: 58.553077110302496,
          unit: "g",
        },
        FAPU: {
          label: "Polyunsaturated",
          quantity: 19.50647256323,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 380.17632267178504,
          unit: "g",
        },
        "CHOCDF.net": {
          label: "Carbohydrates (net)",
          quantity: 325.54960980106506,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 54.62671287072,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars",
          quantity: 47.827196898744994,
          unit: "g",
        },
        "SUGAR.added": {
          label: "Sugars, added",
          quantity: 0,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 104.33617469551999,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 0,
          unit: "mg",
        },
        NA: {
          label: "Sodium",
          quantity: 3604.7198942203495,
          unit: "mg",
        },
        CA: {
          label: "Calcium",
          quantity: 301.86224749772424,
          unit: "mg",
        },
        MG: {
          label: "Magnesium",
          quantity: 418.059339034411,
          unit: "mg",
        },
        K: {
          label: "Potassium",
          quantity: 3297.302834614868,
          unit: "mg",
        },
        FE: {
          label: "Iron",
          quantity: 20.088120674965428,
          unit: "mg",
        },
        ZN: {
          label: "Zinc",
          quantity: 13.5939221573421,
          unit: "mg",
        },
        P: {
          label: "Phosphorus",
          quantity: 1336.4028848560602,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 43.51709515576,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 18.51504811624,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 2.0694047048749997,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 0.96557985317,
          unit: "mg",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 9.19867151019,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 2.404265948825,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 2263.72463469584,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate (food)",
          quantity: 2263.72463469584,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 0,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 0.000554788,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 0.00332328,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 13.905540451584999,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 93.44359440491,
          unit: "µg",
        },
        "Sugar.alcohol": {
          label: "Sugar alcohol",
          quantity: 0,
          unit: "g",
        },
        WATER: {
          label: "Water",
          quantity: 952.2985440651443,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 139.414367091981,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 152.41614708277692,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 64.3740991220875,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 126.72544089059501,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 218.50685148288002,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 208.67234939103997,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 0,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 150.19666225918124,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 30.186224749772425,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 99.53793786533593,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 70.15537945989081,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 111.6006704164746,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 123.5811105212918,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 190.91469783658005,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 4.835232795084445,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 20.572275684711112,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 172.45039207291666,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 74.27537332076922,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 57.4916969386875,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 184.943534525,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 565.93115867396,
          unit: "%",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 0.023116166666666667,
          unit: "%",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 0.0221552,
          unit: "%",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 92.70360301056667,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 77.86966200409167,
          unit: "%",
        },
      },
      digest: [
        {
          label: "Fat",
          tag: "FAT",
          schemaOrgTag: "fatContent",
          total: 99.070495603805,
          hasRDI: true,
          daily: 152.41614708277692,
          unit: "g",
          sub: [
            {
              label: "Saturated",
              tag: "FASAT",
              schemaOrgTag: "saturatedFatContent",
              total: 12.8748198244175,
              hasRDI: true,
              daily: 64.3740991220875,
              unit: "g",
            },
            {
              label: "Trans",
              tag: "FATRN",
              schemaOrgTag: "transFatContent",
              total: 0,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Monounsaturated",
              tag: "FAMS",
              schemaOrgTag: null,
              total: 58.553077110302496,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Polyunsaturated",
              tag: "FAPU",
              schemaOrgTag: null,
              total: 19.50647256323,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
          ],
        },
        {
          label: "Carbs",
          tag: "CHOCDF",
          schemaOrgTag: "carbohydrateContent",
          total: 380.17632267178504,
          hasRDI: true,
          daily: 126.72544089059501,
          unit: "g",
          sub: [
            {
              label: "Carbs (net)",
              tag: "CHOCDF.net",
              schemaOrgTag: null,
              total: 325.54960980106506,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Fiber",
              tag: "FIBTG",
              schemaOrgTag: "fiberContent",
              total: 54.62671287072,
              hasRDI: true,
              daily: 218.50685148288002,
              unit: "g",
            },
            {
              label: "Sugars",
              tag: "SUGAR",
              schemaOrgTag: "sugarContent",
              total: 47.827196898744994,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Sugars, added",
              tag: "SUGAR.added",
              schemaOrgTag: null,
              total: 0,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
          ],
        },
        {
          label: "Protein",
          tag: "PROCNT",
          schemaOrgTag: "proteinContent",
          total: 104.33617469551999,
          hasRDI: true,
          daily: 208.67234939103997,
          unit: "g",
        },
        {
          label: "Cholesterol",
          tag: "CHOLE",
          schemaOrgTag: "cholesterolContent",
          total: 0,
          hasRDI: true,
          daily: 0,
          unit: "mg",
        },
        {
          label: "Sodium",
          tag: "NA",
          schemaOrgTag: "sodiumContent",
          total: 3604.7198942203495,
          hasRDI: true,
          daily: 150.19666225918124,
          unit: "mg",
        },
        {
          label: "Calcium",
          tag: "CA",
          schemaOrgTag: null,
          total: 301.86224749772424,
          hasRDI: true,
          daily: 30.186224749772425,
          unit: "mg",
        },
        {
          label: "Magnesium",
          tag: "MG",
          schemaOrgTag: null,
          total: 418.059339034411,
          hasRDI: true,
          daily: 99.53793786533593,
          unit: "mg",
        },
        {
          label: "Potassium",
          tag: "K",
          schemaOrgTag: null,
          total: 3297.302834614868,
          hasRDI: true,
          daily: 70.15537945989081,
          unit: "mg",
        },
        {
          label: "Iron",
          tag: "FE",
          schemaOrgTag: null,
          total: 20.088120674965428,
          hasRDI: true,
          daily: 111.6006704164746,
          unit: "mg",
        },
        {
          label: "Zinc",
          tag: "ZN",
          schemaOrgTag: null,
          total: 13.5939221573421,
          hasRDI: true,
          daily: 123.5811105212918,
          unit: "mg",
        },
        {
          label: "Phosphorus",
          tag: "P",
          schemaOrgTag: null,
          total: 1336.4028848560602,
          hasRDI: true,
          daily: 190.91469783658005,
          unit: "mg",
        },
        {
          label: "Vitamin A",
          tag: "VITA_RAE",
          schemaOrgTag: null,
          total: 43.51709515576,
          hasRDI: true,
          daily: 4.835232795084445,
          unit: "µg",
        },
        {
          label: "Vitamin C",
          tag: "VITC",
          schemaOrgTag: null,
          total: 18.51504811624,
          hasRDI: true,
          daily: 20.572275684711112,
          unit: "mg",
        },
        {
          label: "Thiamin (B1)",
          tag: "THIA",
          schemaOrgTag: null,
          total: 2.0694047048749997,
          hasRDI: true,
          daily: 172.45039207291666,
          unit: "mg",
        },
        {
          label: "Riboflavin (B2)",
          tag: "RIBF",
          schemaOrgTag: null,
          total: 0.96557985317,
          hasRDI: true,
          daily: 74.27537332076922,
          unit: "mg",
        },
        {
          label: "Niacin (B3)",
          tag: "NIA",
          schemaOrgTag: null,
          total: 9.19867151019,
          hasRDI: true,
          daily: 57.4916969386875,
          unit: "mg",
        },
        {
          label: "Vitamin B6",
          tag: "VITB6A",
          schemaOrgTag: null,
          total: 2.404265948825,
          hasRDI: true,
          daily: 184.943534525,
          unit: "mg",
        },
        {
          label: "Folate equivalent (total)",
          tag: "FOLDFE",
          schemaOrgTag: null,
          total: 2263.72463469584,
          hasRDI: true,
          daily: 565.93115867396,
          unit: "µg",
        },
        {
          label: "Folate (food)",
          tag: "FOLFD",
          schemaOrgTag: null,
          total: 2263.72463469584,
          hasRDI: false,
          daily: 0,
          unit: "µg",
        },
        {
          label: "Folic acid",
          tag: "FOLAC",
          schemaOrgTag: null,
          total: 0,
          hasRDI: false,
          daily: 0,
          unit: "µg",
        },
        {
          label: "Vitamin B12",
          tag: "VITB12",
          schemaOrgTag: null,
          total: 0.000554788,
          hasRDI: true,
          daily: 0.023116166666666667,
          unit: "µg",
        },
        {
          label: "Vitamin D",
          tag: "VITD",
          schemaOrgTag: null,
          total: 0.00332328,
          hasRDI: true,
          daily: 0.0221552,
          unit: "µg",
        },
        {
          label: "Vitamin E",
          tag: "TOCPHA",
          schemaOrgTag: null,
          total: 13.905540451584999,
          hasRDI: true,
          daily: 92.70360301056667,
          unit: "mg",
        },
        {
          label: "Vitamin K",
          tag: "VITK1",
          schemaOrgTag: null,
          total: 93.44359440491,
          hasRDI: true,
          daily: 77.86966200409167,
          unit: "µg",
        },
        {
          label: "Sugar alcohols",
          tag: "Sugar.alcohol",
          schemaOrgTag: null,
          total: 0,
          hasRDI: false,
          daily: 0,
          unit: "g",
        },
        {
          label: "Water",
          tag: "WATER",
          schemaOrgTag: null,
          total: 952.2985440651443,
          hasRDI: false,
          daily: 0,
          unit: "g",
        },
      ],
    },
    _links: {
      self: {
        title: "Self",
        href: "https://api.edamam.com/api/recipes/v2/49864e04de41a2512ee21919e26f482c?type=public&app_id=de511dc8&app_key=3f9639bae8563438d47729b156a7b78a",
      },
    },
  },
  {
    recipe: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_1c0fd9a2dc4dbf64a7bbf4fe4c0bd310",
      label: "Squid Ink Pasta With Stilton Blue And Fresh Figs",
      image:
        "https://edamam-product-images.s3.amazonaws.com/web-img/541/541e2f2ecffb75708f1615abc923d537.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f47cc2f6f114e4cdd3c263f0aa6f6c2eb0bcacc09a9c2ac8dd6d12e3d46d57e0",
      images: {
        THUMBNAIL: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/541/541e2f2ecffb75708f1615abc923d537-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=20f3731cbd056129d23e7012aa4627b2c2ea7e21440044fc39c19ef402cca10b",
          width: 100,
          height: 100,
        },
        SMALL: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/541/541e2f2ecffb75708f1615abc923d537-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5b17db73e56a061f7e8f322194194212c7a3ab9be1ecfd3045b40d8513e0b456",
          width: 200,
          height: 200,
        },
        REGULAR: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/541/541e2f2ecffb75708f1615abc923d537.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f47cc2f6f114e4cdd3c263f0aa6f6c2eb0bcacc09a9c2ac8dd6d12e3d46d57e0",
          width: 300,
          height: 300,
        },
        LARGE: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/541/541e2f2ecffb75708f1615abc923d537-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d7e6bc55362071a22828936f78095fc97fbebdadcd0198cc668cb2f73a42b15f",
          width: 600,
          height: 600,
        },
      },
      source: "Tartelette",
      url: "http://www.tarteletteblog.com/2013/09/recipegluten-free-squid-in-pasta-with.html",
      shareAs:
        "http://www.edamam.com/recipe/squid-ink-pasta-with-stilton-blue-and-fresh-figs-1c0fd9a2dc4dbf64a7bbf4fe4c0bd310/-/alcohol-free/balanced",
      yield: 2,
      dietLabels: ["Balanced", "High-Fiber"],
      healthLabels: [
        "Vegetarian",
        "Pescatarian",
        "Mediterranean",
        "Egg-Free",
        "Peanut-Free",
        "Tree-Nut-Free",
        "Soy-Free",
        "Fish-Free",
        "Shellfish-Free",
        "Pork-Free",
        "Red-Meat-Free",
        "Crustacean-Free",
        "Celery-Free",
        "Mustard-Free",
        "Sesame-Free",
        "Lupine-Free",
        "Mollusk-Free",
        "Alcohol-Free",
        "Sulfite-Free",
        "Kosher",
        "Immuno-Supportive",
      ],
      cautions: ["Sulfites"],
      ingredientLines: [
        "8 oz dry skid ink pasta (substitute gf spaghetti)",
        "1-2 tablespoons olive oil",
        "1/4 cup crumbled Stilton blue cheese",
        "6 to 8 figs, quartered",
        "drizzle of olive oil",
        "salt and pepper to taste",
      ],
      ingredients: [
        {
          text: "8 oz dry skid ink pasta (substitute gf spaghetti)",
          quantity: 8,
          measure: "ounce",
          food: "pasta",
          weight: 226.796185,
          foodCategory: "grains",
          foodId: "food_a8hs60uayl5icia1qe8qoba1kwp8",
          image:
            "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg",
        },
        {
          text: "1-2 tablespoons olive oil",
          quantity: 1.5,
          measure: "tablespoon",
          food: "olive oil",
          weight: 20.25,
          foodCategory: "Oils",
          foodId: "food_b1d1icuad3iktrbqby0hiagafaz7",
          image:
            "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg",
        },
        {
          text: "1/4 cup crumbled Stilton blue cheese",
          quantity: 0.25,
          measure: "cup",
          food: "blue cheese",
          weight: 33.75,
          foodCategory: "Cheese",
          foodId: "food_ao35kxmb5lh3lpaeaxh9ka2vfaf4",
          image:
            "https://www.edamam.com/food-img/b44/b442cfc174a1a691dca574c9b7dcb47a.jpg",
        },
        {
          text: "6 to 8 figs, quartered",
          quantity: 7,
          measure: "<unit>",
          food: "figs",
          weight: 360.5777777777778,
          foodCategory: "fruit",
          foodId: "food_bpi6nyjanaz6y3bnozq4jbtf5slb",
          image:
            "https://www.edamam.com/food-img/3ce/3ce7b15338ac4ecb9a043df83ea6f9d4.jpg",
        },
        {
          text: "drizzle of olive oil",
          quantity: 0,
          measure: null,
          food: "olive oil",
          weight: 8.722685893777777,
          foodCategory: "Oils",
          foodId: "food_b1d1icuad3iktrbqby0hiagafaz7",
          image:
            "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg",
        },
        {
          text: "salt and pepper to taste",
          quantity: 0,
          measure: null,
          food: "salt",
          weight: 3.848243776666667,
          foodCategory: "Condiments and sauces",
          foodId: "food_btxz81db72hwbra2pncvebzzzum9",
          image:
            "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg",
        },
        {
          text: "salt and pepper to taste",
          quantity: 0,
          measure: null,
          food: "pepper",
          weight: 1.9241218883333335,
          foodCategory: "Condiments and sauces",
          foodId: "food_b6ywzluaaxv02wad7s1r9ag4py89",
          image:
            "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg",
        },
      ],
      calories: 1488.3269911462678,
      totalWeight: 654.8880713353374,
      totalTime: 0,
      cuisineType: ["italian"],
      mealType: ["lunch/dinner"],
      dishType: ["salad"],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 1488.3269911462678,
          unit: "kcal",
        },
        FAT: {
          label: "Fat",
          quantity: 43.241517994170785,
          unit: "g",
        },
        FASAT: {
          label: "Saturated",
          quantity: 11.172691844015102,
          unit: "g",
        },
        FATRN: {
          label: "Trans",
          quantity: 0,
          unit: "g",
        },
        FAMS: {
          label: "Monounsaturated",
          quantity: 24.40385842539732,
          unit: "g",
        },
        FAPU: {
          label: "Polyunsaturated",
          quantity: 5.1363609564478026,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 240.52775506486697,
          unit: "g",
        },
        "CHOCDF.net": {
          label: "Carbohydrates (net)",
          quantity: 222.32671875156308,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 18.20103631330389,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars",
          quantity: 64.866469186252,
          unit: "g",
        },
        "SUGAR.added": {
          label: "Sugars, added",
          quantity: 0,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 39.700972121531166,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 25.3125,
          unit: "mg",
        },
        NA: {
          label: "Sodium",
          quantity: 1516.261261521611,
          unit: "mg",
        },
        CA: {
          label: "Calcium",
          quantity: 361.5311600825843,
          unit: "mg",
        },
        MG: {
          label: "Magnesium",
          quantity: 192.5816217090267,
          unit: "mg",
        },
        K: {
          label: "Potassium",
          quantity: 1454.7866278113684,
          unit: "mg",
        },
        FE: {
          label: "Iron",
          quantity: 4.74565455169908,
          unit: "mg",
        },
        ZN: {
          label: "Zinc",
          quantity: 4.662207226413282,
          unit: "mg",
        },
        P: {
          label: "Phosphorus",
          quantity: 612.7782911224556,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 92.58495735429445,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 7.211555555555556,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 0.4323287848060667,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 0.448755019287889,
          unit: "mg",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 5.662738969294762,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 0.7911276662839389,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 74.93508068768334,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate (food)",
          quantity: 74.93508068768334,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 0,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 0.41175,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 0.16875,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 4.908077652451333,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 38.57529617981145,
          unit: "µg",
        },
        "Sugar.alcohol": {
          label: "Sugar alcohol",
          quantity: 0,
          unit: "g",
        },
        WATER: {
          label: "Water",
          quantity: 322.26475750383725,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 74.41634955731338,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 66.52541229872428,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 55.863459220075505,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 80.17591835495566,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 72.80414525321557,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 79.40194424306233,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 8.4375,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 63.17755256340046,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 36.15311600825842,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 45.85276707357779,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 30.952906974709965,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 26.364747509439336,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 42.38370205830257,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 87.53975587463651,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 10.287217483810494,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 8.01283950617284,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 36.027398733838886,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 34.51961686829915,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 35.392118558092264,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 60.855974329533765,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 18.733770171920835,
          unit: "%",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 17.15625,
          unit: "%",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 1.125,
          unit: "%",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 32.720517683008886,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 32.14608014984288,
          unit: "%",
        },
      },
      digest: [
        {
          label: "Fat",
          tag: "FAT",
          schemaOrgTag: "fatContent",
          total: 43.241517994170785,
          hasRDI: true,
          daily: 66.52541229872428,
          unit: "g",
          sub: [
            {
              label: "Saturated",
              tag: "FASAT",
              schemaOrgTag: "saturatedFatContent",
              total: 11.172691844015102,
              hasRDI: true,
              daily: 55.863459220075505,
              unit: "g",
            },
            {
              label: "Trans",
              tag: "FATRN",
              schemaOrgTag: "transFatContent",
              total: 0,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Monounsaturated",
              tag: "FAMS",
              schemaOrgTag: null,
              total: 24.40385842539732,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Polyunsaturated",
              tag: "FAPU",
              schemaOrgTag: null,
              total: 5.1363609564478026,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
          ],
        },
        {
          label: "Carbs",
          tag: "CHOCDF",
          schemaOrgTag: "carbohydrateContent",
          total: 240.52775506486697,
          hasRDI: true,
          daily: 80.17591835495566,
          unit: "g",
          sub: [
            {
              label: "Carbs (net)",
              tag: "CHOCDF.net",
              schemaOrgTag: null,
              total: 222.32671875156308,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Fiber",
              tag: "FIBTG",
              schemaOrgTag: "fiberContent",
              total: 18.20103631330389,
              hasRDI: true,
              daily: 72.80414525321557,
              unit: "g",
            },
            {
              label: "Sugars",
              tag: "SUGAR",
              schemaOrgTag: "sugarContent",
              total: 64.866469186252,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Sugars, added",
              tag: "SUGAR.added",
              schemaOrgTag: null,
              total: 0,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
          ],
        },
        {
          label: "Protein",
          tag: "PROCNT",
          schemaOrgTag: "proteinContent",
          total: 39.700972121531166,
          hasRDI: true,
          daily: 79.40194424306233,
          unit: "g",
        },
        {
          label: "Cholesterol",
          tag: "CHOLE",
          schemaOrgTag: "cholesterolContent",
          total: 25.3125,
          hasRDI: true,
          daily: 8.4375,
          unit: "mg",
        },
        {
          label: "Sodium",
          tag: "NA",
          schemaOrgTag: "sodiumContent",
          total: 1516.261261521611,
          hasRDI: true,
          daily: 63.17755256340046,
          unit: "mg",
        },
        {
          label: "Calcium",
          tag: "CA",
          schemaOrgTag: null,
          total: 361.5311600825843,
          hasRDI: true,
          daily: 36.15311600825842,
          unit: "mg",
        },
        {
          label: "Magnesium",
          tag: "MG",
          schemaOrgTag: null,
          total: 192.5816217090267,
          hasRDI: true,
          daily: 45.85276707357779,
          unit: "mg",
        },
        {
          label: "Potassium",
          tag: "K",
          schemaOrgTag: null,
          total: 1454.7866278113684,
          hasRDI: true,
          daily: 30.952906974709965,
          unit: "mg",
        },
        {
          label: "Iron",
          tag: "FE",
          schemaOrgTag: null,
          total: 4.74565455169908,
          hasRDI: true,
          daily: 26.364747509439336,
          unit: "mg",
        },
        {
          label: "Zinc",
          tag: "ZN",
          schemaOrgTag: null,
          total: 4.662207226413282,
          hasRDI: true,
          daily: 42.38370205830257,
          unit: "mg",
        },
        {
          label: "Phosphorus",
          tag: "P",
          schemaOrgTag: null,
          total: 612.7782911224556,
          hasRDI: true,
          daily: 87.53975587463651,
          unit: "mg",
        },
        {
          label: "Vitamin A",
          tag: "VITA_RAE",
          schemaOrgTag: null,
          total: 92.58495735429445,
          hasRDI: true,
          daily: 10.287217483810494,
          unit: "µg",
        },
        {
          label: "Vitamin C",
          tag: "VITC",
          schemaOrgTag: null,
          total: 7.211555555555556,
          hasRDI: true,
          daily: 8.01283950617284,
          unit: "mg",
        },
        {
          label: "Thiamin (B1)",
          tag: "THIA",
          schemaOrgTag: null,
          total: 0.4323287848060667,
          hasRDI: true,
          daily: 36.027398733838886,
          unit: "mg",
        },
        {
          label: "Riboflavin (B2)",
          tag: "RIBF",
          schemaOrgTag: null,
          total: 0.448755019287889,
          hasRDI: true,
          daily: 34.51961686829915,
          unit: "mg",
        },
        {
          label: "Niacin (B3)",
          tag: "NIA",
          schemaOrgTag: null,
          total: 5.662738969294762,
          hasRDI: true,
          daily: 35.392118558092264,
          unit: "mg",
        },
        {
          label: "Vitamin B6",
          tag: "VITB6A",
          schemaOrgTag: null,
          total: 0.7911276662839389,
          hasRDI: true,
          daily: 60.855974329533765,
          unit: "mg",
        },
        {
          label: "Folate equivalent (total)",
          tag: "FOLDFE",
          schemaOrgTag: null,
          total: 74.93508068768334,
          hasRDI: true,
          daily: 18.733770171920835,
          unit: "µg",
        },
        {
          label: "Folate (food)",
          tag: "FOLFD",
          schemaOrgTag: null,
          total: 74.93508068768334,
          hasRDI: false,
          daily: 0,
          unit: "µg",
        },
        {
          label: "Folic acid",
          tag: "FOLAC",
          schemaOrgTag: null,
          total: 0,
          hasRDI: false,
          daily: 0,
          unit: "µg",
        },
        {
          label: "Vitamin B12",
          tag: "VITB12",
          schemaOrgTag: null,
          total: 0.41175,
          hasRDI: true,
          daily: 17.15625,
          unit: "µg",
        },
        {
          label: "Vitamin D",
          tag: "VITD",
          schemaOrgTag: null,
          total: 0.16875,
          hasRDI: true,
          daily: 1.125,
          unit: "µg",
        },
        {
          label: "Vitamin E",
          tag: "TOCPHA",
          schemaOrgTag: null,
          total: 4.908077652451333,
          hasRDI: true,
          daily: 32.720517683008886,
          unit: "mg",
        },
        {
          label: "Vitamin K",
          tag: "VITK1",
          schemaOrgTag: null,
          total: 38.57529617981145,
          hasRDI: true,
          daily: 32.14608014984288,
          unit: "µg",
        },
        {
          label: "Sugar alcohols",
          tag: "Sugar.alcohol",
          schemaOrgTag: null,
          total: 0,
          hasRDI: false,
          daily: 0,
          unit: "g",
        },
        {
          label: "Water",
          tag: "WATER",
          schemaOrgTag: null,
          total: 322.26475750383725,
          hasRDI: false,
          daily: 0,
          unit: "g",
        },
      ],
    },
    _links: {
      self: {
        title: "Self",
        href: "https://api.edamam.com/api/recipes/v2/1c0fd9a2dc4dbf64a7bbf4fe4c0bd310?type=public&app_id=de511dc8&app_key=3f9639bae8563438d47729b156a7b78a",
      },
    },
  },
  {
    recipe: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_289e0b03ad7059c37420bfed928dd4af",
      label: "Pão De Queijo (Brazilian Cheese Bread)",
      image:
        "https://edamam-product-images.s3.amazonaws.com/web-img/87c/87cb85a47028246a3ff27ca78c4fdffd.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=75e19677194d525114615b1abf702317f1bb3749276fb13e5b7940e5349ce61c",
      images: {
        THUMBNAIL: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/87c/87cb85a47028246a3ff27ca78c4fdffd-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8089ed55c06bf93178f8ae6709ee3f851ae79b637f86336d3b8c4b7b8c9e47fd",
          width: 100,
          height: 100,
        },
        SMALL: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/87c/87cb85a47028246a3ff27ca78c4fdffd-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a529f4cec8b54385337e57712da6df1376e04ecd9e9f198d5b7d3a8c346fbca5",
          width: 200,
          height: 200,
        },
        REGULAR: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/87c/87cb85a47028246a3ff27ca78c4fdffd.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=75e19677194d525114615b1abf702317f1bb3749276fb13e5b7940e5349ce61c",
          width: 300,
          height: 300,
        },
        LARGE: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/87c/87cb85a47028246a3ff27ca78c4fdffd-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f571ea48f79fcacf6d5cd33e952dacbfb65217d4b0e4a7905e833b94fb31baa9",
          width: 600,
          height: 600,
        },
      },
      source: "The Traveler's Lunchbox",
      url: "http://www.travelerslunchbox.com/journal/2007/2/4/list-making-for-dummies.html",
      shareAs:
        "http://www.edamam.com/recipe/p%C3%A3o-de-queijo-brazilian-cheese-bread-289e0b03ad7059c37420bfed928dd4af/-/alcohol-free/balanced",
      yield: 30,
      dietLabels: ["Balanced", "Low-Sodium"],
      healthLabels: [
        "Sugar-Conscious",
        "Low Potassium",
        "Kidney-Friendly",
        "Vegetarian",
        "Pescatarian",
        "Gluten-Free",
        "Wheat-Free",
        "Peanut-Free",
        "Tree-Nut-Free",
        "Soy-Free",
        "Fish-Free",
        "Shellfish-Free",
        "Pork-Free",
        "Red-Meat-Free",
        "Crustacean-Free",
        "Celery-Free",
        "Mustard-Free",
        "Sesame-Free",
        "Lupine-Free",
        "Mollusk-Free",
        "Alcohol-Free",
        "Sulfite-Free",
        "Kosher",
      ],
      cautions: ["Sulfites"],
      ingredientLines: [
        "4 cup tapioca starch",
        "1 1/2 tsp salt",
        "1 1/2 cup milk",
        "1/2 cup unsalted butter or vegetable oil",
        "2 x eggs, at room temperature",
        "7 oz finely-grated parmesan cheese",
      ],
      ingredients: [
        {
          text: "4 cup tapioca starch",
          quantity: 4,
          measure: "cup",
          food: "tapioca starch",
          weight: 480,
          foodCategory: "grains",
          foodId: "food_a2j0fzta3x3yg9azedc0xb5wccng",
          image:
            "https://www.edamam.com/food-img/a30/a3063ea98ee3270b27743406d5536880.jpg",
        },
        {
          text: "1 1/2 tsp salt",
          quantity: 1.5,
          measure: "teaspoon",
          food: "salt",
          weight: 9,
          foodCategory: "Condiments and sauces",
          foodId: "food_btxz81db72hwbra2pncvebzzzum9",
          image:
            "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg",
        },
        {
          text: "1 1/2 cup milk",
          quantity: 1.5,
          measure: "cup",
          food: "milk",
          weight: 366,
          foodCategory: "Milk",
          foodId: "food_b49rs1kaw0jktabzkg2vvanvvsis",
          image:
            "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg",
        },
        {
          text: "1/2 cup unsalted butter or vegetable oil",
          quantity: 0.5,
          measure: "cup",
          food: "unsalted butter",
          weight: 113.5,
          foodCategory: "Dairy",
          foodId: "food_awz3iefajbk1fwahq9logahmgltj",
          image:
            "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg",
        },
        {
          text: "2 x eggs, at room temperature",
          quantity: 2,
          measure: "<unit>",
          food: "eggs",
          weight: 86,
          foodCategory: "Eggs",
          foodId: "food_bhpradua77pk16aipcvzeayg732r",
          image:
            "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg",
        },
        {
          text: "7 oz finely-grated parmesan cheese",
          quantity: 7,
          measure: "ounce",
          food: "parmesan cheese",
          weight: 198.44666187500002,
          foodCategory: "Cheese",
          foodId: "food_a104ppxa06d3emb272fkcab3cugd",
          image:
            "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg",
        },
      ],
      calories: 3473.94591455,
      totalWeight: 1243.946661875,
      totalTime: 0,
      cuisineType: ["south american"],
      mealType: ["breakfast"],
      dishType: ["bread"],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 3473.94591455,
          unit: "kcal",
        },
        FAT: {
          label: "Fat",
          quantity: 163.39222276231249,
          unit: "g",
        },
        FASAT: {
          label: "Saturated",
          quantity: 100.38203721368751,
          unit: "g",
        },
        FATRN: {
          label: "Trans",
          quantity: 3.7532099999999997,
          unit: "g",
        },
        FAMS: {
          label: "Monounsaturated",
          quantity: 44.889901639906256,
          unit: "g",
        },
        FAPU: {
          label: "Polyunsaturated",
          quantity: 6.940126506068751,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 424.005282512375,
          unit: "g",
        },
        "CHOCDF.net": {
          label: "Carbohydrates (net)",
          quantity: 424.005282512375,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 0,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars",
          quantity: 20.456873295,
          unit: "g",
        },
        "SUGAR.added": {
          label: "Sugars, added",
          quantity: 0,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 94.24003162031251,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 735.4887300750001,
          unit: "mg",
        },
        NA: {
          label: "Sodium",
          quantity: 3022.6110674000006,
          unit: "mg",
        },
        CA: {
          label: "Calcium",
          quantity: 2838.5884766000004,
          unit: "mg",
        },
        MG: {
          label: "Magnesium",
          quantity: 136.506531225,
          unit: "mg",
        },
        K: {
          label: "Potassium",
          quantity: 811.6109289249999,
          unit: "mg",
        },
        FE: {
          label: "Iron",
          quantity: 8.544762627375,
          unit: "mg",
        },
        ZN: {
          label: "Zinc",
          quantity: 8.0230332015625,
          unit: "mg",
        },
        P: {
          label: "Phosphorus",
          quantity: 1882.1798334125,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 1493.08459008125,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 0,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 0.2858291981312501,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 1.7089929174250003,
          unit: "mg",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 0.9757004536812501,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 0.46195146230624995,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 76.01626633125,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate (food)",
          quantity: 76.01626633125,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 0,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 4.9867099425,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 9.172733309375001,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 4.228982656125,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 12.674593251875002,
          unit: "µg",
        },
        "Sugar.alcohol": {
          label: "Sugar alcohol",
          quantity: 0,
          unit: "g",
        },
        WATER: {
          label: "Water",
          quantity: 466.27374660275,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 173.6972957275,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 251.37265040355766,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 501.91018606843755,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 141.33509417079165,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 0,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 188.48006324062501,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 245.16291002500006,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 125.94212780833337,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 283.85884766000004,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 32.50155505357143,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 17.268317636702125,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 47.47090348541667,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 72.93666546875001,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 268.8828333446429,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 165.89828778680555,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 0,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 23.819099844270838,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 131.46099364807694,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 6.098127835507813,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 35.53472786971153,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 19.0040665828125,
          unit: "%",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 207.77958093750001,
          unit: "%",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 61.15155539583334,
          unit: "%",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 28.1932177075,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 10.56216104322917,
          unit: "%",
        },
      },
      digest: [
        {
          label: "Fat",
          tag: "FAT",
          schemaOrgTag: "fatContent",
          total: 163.39222276231249,
          hasRDI: true,
          daily: 251.37265040355766,
          unit: "g",
          sub: [
            {
              label: "Saturated",
              tag: "FASAT",
              schemaOrgTag: "saturatedFatContent",
              total: 100.38203721368751,
              hasRDI: true,
              daily: 501.91018606843755,
              unit: "g",
            },
            {
              label: "Trans",
              tag: "FATRN",
              schemaOrgTag: "transFatContent",
              total: 3.7532099999999997,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Monounsaturated",
              tag: "FAMS",
              schemaOrgTag: null,
              total: 44.889901639906256,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Polyunsaturated",
              tag: "FAPU",
              schemaOrgTag: null,
              total: 6.940126506068751,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
          ],
        },
        {
          label: "Carbs",
          tag: "CHOCDF",
          schemaOrgTag: "carbohydrateContent",
          total: 424.005282512375,
          hasRDI: true,
          daily: 141.33509417079165,
          unit: "g",
          sub: [
            {
              label: "Carbs (net)",
              tag: "CHOCDF.net",
              schemaOrgTag: null,
              total: 424.005282512375,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Fiber",
              tag: "FIBTG",
              schemaOrgTag: "fiberContent",
              total: 0,
              hasRDI: true,
              daily: 0,
              unit: "g",
            },
            {
              label: "Sugars",
              tag: "SUGAR",
              schemaOrgTag: "sugarContent",
              total: 20.456873295,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Sugars, added",
              tag: "SUGAR.added",
              schemaOrgTag: null,
              total: 0,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
          ],
        },
        {
          label: "Protein",
          tag: "PROCNT",
          schemaOrgTag: "proteinContent",
          total: 94.24003162031251,
          hasRDI: true,
          daily: 188.48006324062501,
          unit: "g",
        },
        {
          label: "Cholesterol",
          tag: "CHOLE",
          schemaOrgTag: "cholesterolContent",
          total: 735.4887300750001,
          hasRDI: true,
          daily: 245.16291002500006,
          unit: "mg",
        },
        {
          label: "Sodium",
          tag: "NA",
          schemaOrgTag: "sodiumContent",
          total: 3022.6110674000006,
          hasRDI: true,
          daily: 125.94212780833337,
          unit: "mg",
        },
        {
          label: "Calcium",
          tag: "CA",
          schemaOrgTag: null,
          total: 2838.5884766000004,
          hasRDI: true,
          daily: 283.85884766000004,
          unit: "mg",
        },
        {
          label: "Magnesium",
          tag: "MG",
          schemaOrgTag: null,
          total: 136.506531225,
          hasRDI: true,
          daily: 32.50155505357143,
          unit: "mg",
        },
        {
          label: "Potassium",
          tag: "K",
          schemaOrgTag: null,
          total: 811.6109289249999,
          hasRDI: true,
          daily: 17.268317636702125,
          unit: "mg",
        },
        {
          label: "Iron",
          tag: "FE",
          schemaOrgTag: null,
          total: 8.544762627375,
          hasRDI: true,
          daily: 47.47090348541667,
          unit: "mg",
        },
        {
          label: "Zinc",
          tag: "ZN",
          schemaOrgTag: null,
          total: 8.0230332015625,
          hasRDI: true,
          daily: 72.93666546875001,
          unit: "mg",
        },
        {
          label: "Phosphorus",
          tag: "P",
          schemaOrgTag: null,
          total: 1882.1798334125,
          hasRDI: true,
          daily: 268.8828333446429,
          unit: "mg",
        },
        {
          label: "Vitamin A",
          tag: "VITA_RAE",
          schemaOrgTag: null,
          total: 1493.08459008125,
          hasRDI: true,
          daily: 165.89828778680555,
          unit: "µg",
        },
        {
          label: "Vitamin C",
          tag: "VITC",
          schemaOrgTag: null,
          total: 0,
          hasRDI: true,
          daily: 0,
          unit: "mg",
        },
        {
          label: "Thiamin (B1)",
          tag: "THIA",
          schemaOrgTag: null,
          total: 0.2858291981312501,
          hasRDI: true,
          daily: 23.819099844270838,
          unit: "mg",
        },
        {
          label: "Riboflavin (B2)",
          tag: "RIBF",
          schemaOrgTag: null,
          total: 1.7089929174250003,
          hasRDI: true,
          daily: 131.46099364807694,
          unit: "mg",
        },
        {
          label: "Niacin (B3)",
          tag: "NIA",
          schemaOrgTag: null,
          total: 0.9757004536812501,
          hasRDI: true,
          daily: 6.098127835507813,
          unit: "mg",
        },
        {
          label: "Vitamin B6",
          tag: "VITB6A",
          schemaOrgTag: null,
          total: 0.46195146230624995,
          hasRDI: true,
          daily: 35.53472786971153,
          unit: "mg",
        },
        {
          label: "Folate equivalent (total)",
          tag: "FOLDFE",
          schemaOrgTag: null,
          total: 76.01626633125,
          hasRDI: true,
          daily: 19.0040665828125,
          unit: "µg",
        },
        {
          label: "Folate (food)",
          tag: "FOLFD",
          schemaOrgTag: null,
          total: 76.01626633125,
          hasRDI: false,
          daily: 0,
          unit: "µg",
        },
        {
          label: "Folic acid",
          tag: "FOLAC",
          schemaOrgTag: null,
          total: 0,
          hasRDI: false,
          daily: 0,
          unit: "µg",
        },
        {
          label: "Vitamin B12",
          tag: "VITB12",
          schemaOrgTag: null,
          total: 4.9867099425,
          hasRDI: true,
          daily: 207.77958093750001,
          unit: "µg",
        },
        {
          label: "Vitamin D",
          tag: "VITD",
          schemaOrgTag: null,
          total: 9.172733309375001,
          hasRDI: true,
          daily: 61.15155539583334,
          unit: "µg",
        },
        {
          label: "Vitamin E",
          tag: "TOCPHA",
          schemaOrgTag: null,
          total: 4.228982656125,
          hasRDI: true,
          daily: 28.1932177075,
          unit: "mg",
        },
        {
          label: "Vitamin K",
          tag: "VITK1",
          schemaOrgTag: null,
          total: 12.674593251875002,
          hasRDI: true,
          daily: 10.56216104322917,
          unit: "µg",
        },
        {
          label: "Sugar alcohols",
          tag: "Sugar.alcohol",
          schemaOrgTag: null,
          total: 0,
          hasRDI: false,
          daily: 0,
          unit: "g",
        },
        {
          label: "Water",
          tag: "WATER",
          schemaOrgTag: null,
          total: 466.27374660275,
          hasRDI: false,
          daily: 0,
          unit: "g",
        },
      ],
    },
    _links: {
      self: {
        title: "Self",
        href: "https://api.edamam.com/api/recipes/v2/289e0b03ad7059c37420bfed928dd4af?type=public&app_id=de511dc8&app_key=3f9639bae8563438d47729b156a7b78a",
      },
    },
  },
  {
    recipe: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_6aba900865269b0b89f58b5fc745eb42",
      label: "Peppermint Hot Chocolate Affogato recipes",
      image:
        "https://edamam-product-images.s3.amazonaws.com/web-img/d39/d39e1b0c81da05842cab7cdf1fea3987?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3195ecf17f4f63ee02bbf1bb58919daad3be5afafd02103a36eb301bc8e1da7a",
      images: {
        THUMBNAIL: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/d39/d39e1b0c81da05842cab7cdf1fea3987-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=51965dddd2dd6478693ded951e4c9fd33a88a9acdf8bf0a815d23b55f2438146",
          width: 100,
          height: 100,
        },
        SMALL: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/d39/d39e1b0c81da05842cab7cdf1fea3987-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=91dc7d3fe868391a76068a8d76a05e6cdda04f21e953869f8a1e3fc1c6453c3a",
          width: 200,
          height: 200,
        },
        REGULAR: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/d39/d39e1b0c81da05842cab7cdf1fea3987?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3195ecf17f4f63ee02bbf1bb58919daad3be5afafd02103a36eb301bc8e1da7a",
          width: 300,
          height: 300,
        },
      },
      source: "Not Without Salt",
      url: "http://notwithoutsalt.com/2013/12/09/peppermint-hot-chocolate-affogato/",
      shareAs:
        "http://www.edamam.com/recipe/peppermint-hot-chocolate-affogato-recipes-6aba900865269b0b89f58b5fc745eb42/-/alcohol-free/balanced",
      yield: 9,
      dietLabels: ["Balanced", "Low-Sodium"],
      healthLabels: [
        "Low Potassium",
        "Kidney-Friendly",
        "Vegetarian",
        "Pescatarian",
        "Gluten-Free",
        "Wheat-Free",
        "Egg-Free",
        "Peanut-Free",
        "Tree-Nut-Free",
        "Soy-Free",
        "Fish-Free",
        "Shellfish-Free",
        "Pork-Free",
        "Red-Meat-Free",
        "Crustacean-Free",
        "Celery-Free",
        "Mustard-Free",
        "Sesame-Free",
        "Lupine-Free",
        "Mollusk-Free",
        "Alcohol-Free",
        "Kosher",
      ],
      cautions: ["Sulfites"],
      ingredientLines: [
        "2 cups milk",
        "6 tablespoons cocoa powder",
        "4 tablespoons granulated sugar",
        "2 ounces bittersweet chocolate, chopped",
        "pinch salt",
        "few drops peppermint extract",
      ],
      ingredients: [
        {
          text: "2 cups milk",
          quantity: 2,
          measure: "cup",
          food: "milk",
          weight: 488,
          foodCategory: "Milk",
          foodId: "food_b49rs1kaw0jktabzkg2vvanvvsis",
          image:
            "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg",
        },
        {
          text: "6 tablespoons cocoa powder",
          quantity: 6,
          measure: "tablespoon",
          food: "cocoa",
          weight: 32.400000000000006,
          foodCategory: "chocolate",
          foodId: "food_afcmkjjaqwjkezbfz7htdb7mpkwz",
          image:
            "https://www.edamam.com/food-img/89a/89af89595db3cf2c3007f2b064c5fef6.jpg",
        },
        {
          text: "4 tablespoons granulated sugar",
          quantity: 4,
          measure: "tablespoon",
          food: "granulated sugar",
          weight: 49.9999999991548,
          foodCategory: "sugars",
          foodId: "food_axi2ijobrk819yb0adceobnhm1c2",
          image:
            "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg",
        },
        {
          text: "2 ounces bittersweet chocolate, chopped",
          quantity: 2,
          measure: "ounce",
          food: "bittersweet chocolate",
          weight: 56.69904625,
          foodCategory: "chocolate",
          foodId: "food_beu5dozavhrqdpblca414a55qow3",
          image:
            "https://www.edamam.com/food-img/0a1/0a1b6f30cb99e1842cac6167f6f424d7.jpg",
        },
        {
          text: "pinch salt",
          quantity: 1,
          measure: "pinch",
          food: "salt",
          weight: 0.380208333815447,
          foodCategory: "Condiments and sauces",
          foodId: "food_btxz81db72hwbra2pncvebzzzum9",
          image:
            "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg",
        },
        {
          text: "few drops peppermint extract",
          quantity: 1,
          measure: "drop",
          food: "peppermint",
          weight: 0.006666666675232881,
          foodCategory: "Condiments and sauces",
          foodId: "food_a0d3dm0bim7d2zbvpro3wboyj7nf",
          image:
            "https://www.edamam.com/food-img/fc1/fc1b9eea517ee139e9580908530124b0.jpg",
        },
      ],
      calories: 837.2120886634018,
      totalWeight: 627.4859212496455,
      totalTime: 40,
      cuisineType: ["american"],
      mealType: ["brunch"],
      dishType: ["condiments and sauces"],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 837.2120886634018,
          unit: "kcal",
        },
        FAT: {
          label: "Fat",
          quantity: 37.30857654166675,
          unit: "g",
        },
        FASAT: {
          label: "Saturated",
          quantity: 21.779977109375025,
          unit: "g",
        },
        FATRN: {
          label: "Trans",
          quantity: 0,
          unit: "g",
        },
        FAMS: {
          label: "Monounsaturated",
          quantity: 11.093869149275001,
          unit: "g",
        },
        FAPU: {
          label: "Polyunsaturated",
          quantity: 1.6419066534417102,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 128.4052832195729,
          unit: "g",
        },
        "CHOCDF.net": {
          label: "Carbohydrates (net)",
          quantity: 113.07150615748888,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 15.333777062084023,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars",
          quantity: 106.0119802054065,
          unit: "g",
        },
        "SUGAR.added": {
          label: "Sugars, added",
          quantity: 80.80098020540649,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 24.104009942500323,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 48.8,
          unit: "mg",
        },
        NA: {
          label: "Sodium",
          quantity: 370.74410777435185,
          unit: "mg",
        },
        CA: {
          label: "Calcium",
          quantity: 611.6631448001281,
          unit: "mg",
        },
        MG: {
          label: "Magnesium",
          quantity: 275.68903860417834,
          unit: "mg",
        },
        K: {
          label: "Potassium",
          quantity: 1345.9558688125708,
          unit: "mg",
        },
        FE: {
          label: "Iron",
          quantity: 6.438313501793272,
          unit: "mg",
        },
        ZN: {
          label: "Zinc",
          quantity: 4.936018757583826,
          unit: "mg",
        },
        P: {
          label: "Phosphorus",
          quantity: 722.583607716673,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 224.49413333335147,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 0.002120000002724056,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 0.28094194210417367,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 0.9633508749581956,
          unit: "mg",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 1.3844786608209796,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 0.23376526618751103,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 42.146476012509765,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate (food)",
          quantity: 42.146476012509765,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 0,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 2.196,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 6.344,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 0.52141752025,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 5.44914659,
          unit: "µg",
        },
        "Sugar.alcohol": {
          label: "Sugar alcohol",
          quantity: 0,
          unit: "g",
        },
        WATER: {
          label: "Water",
          quantity: 431.45929707375745,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 41.86060443317009,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 57.3978100641027,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 108.89988554687514,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 42.80176107319097,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 61.33510824833609,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 48.20801988500065,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 16.266666666666666,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 15.447671157264661,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 61.16631448001281,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 65.64024728670913,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 28.63735891090576,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 35.76840834329595,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 44.8728977962166,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 103.22622967381042,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 24.943792592594605,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 0.0023555555585822847,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 23.41182850868114,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 74.10391345832274,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 8.652991630131122,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 17.981943552885465,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 10.536619003127441,
          unit: "%",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 91.50000000000001,
          unit: "%",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 42.29333333333333,
          unit: "%",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 3.476116801666667,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 4.540955491666667,
          unit: "%",
        },
      },
      digest: [
        {
          label: "Fat",
          tag: "FAT",
          schemaOrgTag: "fatContent",
          total: 37.30857654166675,
          hasRDI: true,
          daily: 57.3978100641027,
          unit: "g",
          sub: [
            {
              label: "Saturated",
              tag: "FASAT",
              schemaOrgTag: "saturatedFatContent",
              total: 21.779977109375025,
              hasRDI: true,
              daily: 108.89988554687514,
              unit: "g",
            },
            {
              label: "Trans",
              tag: "FATRN",
              schemaOrgTag: "transFatContent",
              total: 0,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Monounsaturated",
              tag: "FAMS",
              schemaOrgTag: null,
              total: 11.093869149275001,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Polyunsaturated",
              tag: "FAPU",
              schemaOrgTag: null,
              total: 1.6419066534417102,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
          ],
        },
        {
          label: "Carbs",
          tag: "CHOCDF",
          schemaOrgTag: "carbohydrateContent",
          total: 128.4052832195729,
          hasRDI: true,
          daily: 42.80176107319097,
          unit: "g",
          sub: [
            {
              label: "Carbs (net)",
              tag: "CHOCDF.net",
              schemaOrgTag: null,
              total: 113.07150615748888,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Fiber",
              tag: "FIBTG",
              schemaOrgTag: "fiberContent",
              total: 15.333777062084023,
              hasRDI: true,
              daily: 61.33510824833609,
              unit: "g",
            },
            {
              label: "Sugars",
              tag: "SUGAR",
              schemaOrgTag: "sugarContent",
              total: 106.0119802054065,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Sugars, added",
              tag: "SUGAR.added",
              schemaOrgTag: null,
              total: 80.80098020540649,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
          ],
        },
        {
          label: "Protein",
          tag: "PROCNT",
          schemaOrgTag: "proteinContent",
          total: 24.104009942500323,
          hasRDI: true,
          daily: 48.20801988500065,
          unit: "g",
        },
        {
          label: "Cholesterol",
          tag: "CHOLE",
          schemaOrgTag: "cholesterolContent",
          total: 48.8,
          hasRDI: true,
          daily: 16.266666666666666,
          unit: "mg",
        },
        {
          label: "Sodium",
          tag: "NA",
          schemaOrgTag: "sodiumContent",
          total: 370.74410777435185,
          hasRDI: true,
          daily: 15.447671157264661,
          unit: "mg",
        },
        {
          label: "Calcium",
          tag: "CA",
          schemaOrgTag: null,
          total: 611.6631448001281,
          hasRDI: true,
          daily: 61.16631448001281,
          unit: "mg",
        },
        {
          label: "Magnesium",
          tag: "MG",
          schemaOrgTag: null,
          total: 275.68903860417834,
          hasRDI: true,
          daily: 65.64024728670913,
          unit: "mg",
        },
        {
          label: "Potassium",
          tag: "K",
          schemaOrgTag: null,
          total: 1345.9558688125708,
          hasRDI: true,
          daily: 28.63735891090576,
          unit: "mg",
        },
        {
          label: "Iron",
          tag: "FE",
          schemaOrgTag: null,
          total: 6.438313501793272,
          hasRDI: true,
          daily: 35.76840834329595,
          unit: "mg",
        },
        {
          label: "Zinc",
          tag: "ZN",
          schemaOrgTag: null,
          total: 4.936018757583826,
          hasRDI: true,
          daily: 44.8728977962166,
          unit: "mg",
        },
        {
          label: "Phosphorus",
          tag: "P",
          schemaOrgTag: null,
          total: 722.583607716673,
          hasRDI: true,
          daily: 103.22622967381042,
          unit: "mg",
        },
        {
          label: "Vitamin A",
          tag: "VITA_RAE",
          schemaOrgTag: null,
          total: 224.49413333335147,
          hasRDI: true,
          daily: 24.943792592594605,
          unit: "µg",
        },
        {
          label: "Vitamin C",
          tag: "VITC",
          schemaOrgTag: null,
          total: 0.002120000002724056,
          hasRDI: true,
          daily: 0.0023555555585822847,
          unit: "mg",
        },
        {
          label: "Thiamin (B1)",
          tag: "THIA",
          schemaOrgTag: null,
          total: 0.28094194210417367,
          hasRDI: true,
          daily: 23.41182850868114,
          unit: "mg",
        },
        {
          label: "Riboflavin (B2)",
          tag: "RIBF",
          schemaOrgTag: null,
          total: 0.9633508749581956,
          hasRDI: true,
          daily: 74.10391345832274,
          unit: "mg",
        },
        {
          label: "Niacin (B3)",
          tag: "NIA",
          schemaOrgTag: null,
          total: 1.3844786608209796,
          hasRDI: true,
          daily: 8.652991630131122,
          unit: "mg",
        },
        {
          label: "Vitamin B6",
          tag: "VITB6A",
          schemaOrgTag: null,
          total: 0.23376526618751103,
          hasRDI: true,
          daily: 17.981943552885465,
          unit: "mg",
        },
        {
          label: "Folate equivalent (total)",
          tag: "FOLDFE",
          schemaOrgTag: null,
          total: 42.146476012509765,
          hasRDI: true,
          daily: 10.536619003127441,
          unit: "µg",
        },
        {
          label: "Folate (food)",
          tag: "FOLFD",
          schemaOrgTag: null,
          total: 42.146476012509765,
          hasRDI: false,
          daily: 0,
          unit: "µg",
        },
        {
          label: "Folic acid",
          tag: "FOLAC",
          schemaOrgTag: null,
          total: 0,
          hasRDI: false,
          daily: 0,
          unit: "µg",
        },
        {
          label: "Vitamin B12",
          tag: "VITB12",
          schemaOrgTag: null,
          total: 2.196,
          hasRDI: true,
          daily: 91.50000000000001,
          unit: "µg",
        },
        {
          label: "Vitamin D",
          tag: "VITD",
          schemaOrgTag: null,
          total: 6.344,
          hasRDI: true,
          daily: 42.29333333333333,
          unit: "µg",
        },
        {
          label: "Vitamin E",
          tag: "TOCPHA",
          schemaOrgTag: null,
          total: 0.52141752025,
          hasRDI: true,
          daily: 3.476116801666667,
          unit: "mg",
        },
        {
          label: "Vitamin K",
          tag: "VITK1",
          schemaOrgTag: null,
          total: 5.44914659,
          hasRDI: true,
          daily: 4.540955491666667,
          unit: "µg",
        },
        {
          label: "Sugar alcohols",
          tag: "Sugar.alcohol",
          schemaOrgTag: null,
          total: 0,
          hasRDI: false,
          daily: 0,
          unit: "g",
        },
        {
          label: "Water",
          tag: "WATER",
          schemaOrgTag: null,
          total: 431.45929707375745,
          hasRDI: false,
          daily: 0,
          unit: "g",
        },
      ],
    },
    _links: {
      self: {
        title: "Self",
        href: "https://api.edamam.com/api/recipes/v2/6aba900865269b0b89f58b5fc745eb42?type=public&app_id=de511dc8&app_key=3f9639bae8563438d47729b156a7b78a",
      },
    },
  },
  {
    recipe: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_ab7b274349df0ce399cd05b5167d7052",
      label: "Panisse Recipe",
      image:
        "https://edamam-product-images.s3.amazonaws.com/web-img/4e6/4e6bb7f11cb1d36a12f3d1b89156a3ea.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=83935289f57600b2b09afb9f832047a5ff461b996369f04fdb0b2b8cdb164be4",
      images: {
        THUMBNAIL: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/4e6/4e6bb7f11cb1d36a12f3d1b89156a3ea-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=87d8523524509d50a5242abb62db579c9db81f63161ce64cc20df14ff538b80b",
          width: 100,
          height: 100,
        },
        SMALL: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/4e6/4e6bb7f11cb1d36a12f3d1b89156a3ea-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=df7661c4cbdd202ca72df743d248f9ef76105140ccfdeed82a77eb40fe7a7401",
          width: 200,
          height: 200,
        },
        REGULAR: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/4e6/4e6bb7f11cb1d36a12f3d1b89156a3ea.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=83935289f57600b2b09afb9f832047a5ff461b996369f04fdb0b2b8cdb164be4",
          width: 300,
          height: 300,
        },
      },
      source: "David Lebovitz",
      url: "http://www.davidlebovitz.com/panisses-1/",
      shareAs:
        "http://www.edamam.com/recipe/panisse-recipe-ab7b274349df0ce399cd05b5167d7052/-/alcohol-free/balanced",
      yield: 6,
      dietLabels: ["Balanced", "High-Fiber"],
      healthLabels: [
        "Vegan",
        "Vegetarian",
        "Pescatarian",
        "Mediterranean",
        "Dairy-Free",
        "Gluten-Free",
        "Wheat-Free",
        "Egg-Free",
        "Peanut-Free",
        "Tree-Nut-Free",
        "Soy-Free",
        "Fish-Free",
        "Shellfish-Free",
        "Pork-Free",
        "Red-Meat-Free",
        "Crustacean-Free",
        "Celery-Free",
        "Mustard-Free",
        "Sesame-Free",
        "Lupine-Free",
        "Mollusk-Free",
        "Alcohol-Free",
        "Sulfite-Free",
        "Kosher",
      ],
      cautions: [],
      ingredientLines: [
        "1 quart (1l) water",
        "2 teaspoons olive oil",
        "3/4 teaspoon coarse salt",
        "2 1/4 cups (285g) chickpea flour",
        "Olive oil, for frying",
        "Coarse salt and freshly-cracked pepper, for serving",
      ],
      ingredients: [
        {
          text: "1 quart (1l) water",
          quantity: 1,
          measure: "quart",
          food: "water",
          weight: 946.352946,
          foodCategory: "water",
          foodId: "food_a99vzubbk1ayrsad318rvbzr3dh0",
          image:
            "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg",
        },
        {
          text: "2 teaspoons olive oil",
          quantity: 2,
          measure: "teaspoon",
          food: "olive oil",
          weight: 9,
          foodCategory: "Oils",
          foodId: "food_b1d1icuad3iktrbqby0hiagafaz7",
          image:
            "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg",
        },
        {
          text: "3/4 teaspoon coarse salt",
          quantity: 0.75,
          measure: "teaspoon",
          food: "coarse salt",
          weight: 3.6406250001846567,
          foodCategory: "Condiments and sauces",
          foodId: "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
          image:
            "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg",
        },
        {
          text: "2 1/4 cups (285g) chickpea flour",
          quantity: 285,
          measure: "gram",
          food: "chickpea flour",
          weight: 285,
          foodCategory: "plant-based protein",
          foodId: "food_ai4nfwgapicos4bvmlp3hbzvfruh",
          image:
            "https://www.edamam.com/food-img/9dc/9dcf09970a51eca75a1b86935048e08d.jpg",
        },
        {
          text: "Olive oil, for frying",
          quantity: 0,
          measure: null,
          food: "Olive oil",
          weight: 16.92511256560251,
          foodCategory: "Oils",
          foodId: "food_b1d1icuad3iktrbqby0hiagafaz7",
          image:
            "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg",
        },
        {
          text: "Coarse salt and freshly-cracked pepper, for serving",
          quantity: 1,
          measure: "serving",
          food: "Coarse salt",
          weight: 0.5,
          foodCategory: "Condiments and sauces",
          foodId: "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
          image:
            "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg",
        },
      ],
      calories: 1565.910468750245,
      totalWeight: 1287.8646647502123,
      totalTime: 165,
      cuisineType: ["american"],
      mealType: ["lunch/dinner"],
      dishType: ["main course"],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 1565.910468750245,
          unit: "kcal",
        },
        FAT: {
          label: "Fat",
          quantity: 71.4375937500277,
          unit: "g",
        },
        FASAT: {
          label: "Saturated",
          quantity: 9.206450625003825,
          unit: "g",
        },
        FATRN: {
          label: "Trans",
          quantity: 0,
          unit: "g",
        },
        FAMS: {
          label: "Monounsaturated",
          quantity: 42.496873710957715,
          unit: "g",
        },
        FAPU: {
          label: "Polyunsaturated",
          quantity: 14.012560195315416,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 164.787,
          unit: "g",
        },
        "CHOCDF.net": {
          label: "Carbohydrates (net)",
          quantity: 134.007,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 30.780000000000005,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars",
          quantity: 30.9225,
          unit: "g",
        },
        "SUGAR.added": {
          label: "Sugars, added",
          quantity: 0,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 63.81150000000001,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 0,
          unit: "mg",
        },
        NA: {
          label: "Sodium",
          quantity: 1826.12497728657,
          unit: "mg",
        },
        CA: {
          label: "Calcium",
          quantity: 158.1580493175446,
          unit: "mg",
        },
        MG: {
          label: "Magnesium",
          quantity: 482.6049357100019,
          unit: "mg",
        },
        K: {
          label: "Potassium",
          quantity: 2411.954960937515,
          unit: "mg",
        },
        FE: {
          label: "Iron",
          quantity: 14.157942187500765,
          unit: "mg",
        },
        ZN: {
          label: "Zinc",
          quantity: 8.107275919600186,
          unit: "mg",
        },
        P: {
          label: "Phosphorus",
          quantity: 906.3000000000001,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 5.7,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 0,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 1.3851,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 0.3021,
          unit: "mg",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 5.0217,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 1.4022000000000001,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 1245.45,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate (food)",
          quantity: 1245.45,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 0,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 0,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 0,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 9.880751953128975,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 57.46239843751668,
          unit: "µg",
        },
        "Sugar.alcohol": {
          label: "Sugar alcohol",
          quantity: 0,
          unit: "g",
        },
        WATER: {
          label: "Water",
          quantity: 974.7128743040004,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 78.29552343751226,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 109.903990384658,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 46.032253125019125,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 54.929,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 123.12000000000002,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 127.623,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 0,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 76.08854072027374,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 15.815804931754458,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 114.90593707380997,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 51.318190658244994,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 78.65523437500426,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 73.70250836000169,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 129.47142857142856,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 0.6333333333333333,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 0,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 115.425,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 23.238461538461536,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 31.385625,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 107.86153846153846,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 311.3625,
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
          quantity: 65.8716796875265,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 47.88533203126391,
          unit: "%",
        },
      },
      digest: [
        {
          label: "Fat",
          tag: "FAT",
          schemaOrgTag: "fatContent",
          total: 71.4375937500277,
          hasRDI: true,
          daily: 109.903990384658,
          unit: "g",
          sub: [
            {
              label: "Saturated",
              tag: "FASAT",
              schemaOrgTag: "saturatedFatContent",
              total: 9.206450625003825,
              hasRDI: true,
              daily: 46.032253125019125,
              unit: "g",
            },
            {
              label: "Trans",
              tag: "FATRN",
              schemaOrgTag: "transFatContent",
              total: 0,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Monounsaturated",
              tag: "FAMS",
              schemaOrgTag: null,
              total: 42.496873710957715,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Polyunsaturated",
              tag: "FAPU",
              schemaOrgTag: null,
              total: 14.012560195315416,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
          ],
        },
        {
          label: "Carbs",
          tag: "CHOCDF",
          schemaOrgTag: "carbohydrateContent",
          total: 164.787,
          hasRDI: true,
          daily: 54.929,
          unit: "g",
          sub: [
            {
              label: "Carbs (net)",
              tag: "CHOCDF.net",
              schemaOrgTag: null,
              total: 134.007,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Fiber",
              tag: "FIBTG",
              schemaOrgTag: "fiberContent",
              total: 30.780000000000005,
              hasRDI: true,
              daily: 123.12000000000002,
              unit: "g",
            },
            {
              label: "Sugars",
              tag: "SUGAR",
              schemaOrgTag: "sugarContent",
              total: 30.9225,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Sugars, added",
              tag: "SUGAR.added",
              schemaOrgTag: null,
              total: 0,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
          ],
        },
        {
          label: "Protein",
          tag: "PROCNT",
          schemaOrgTag: "proteinContent",
          total: 63.81150000000001,
          hasRDI: true,
          daily: 127.623,
          unit: "g",
        },
        {
          label: "Cholesterol",
          tag: "CHOLE",
          schemaOrgTag: "cholesterolContent",
          total: 0,
          hasRDI: true,
          daily: 0,
          unit: "mg",
        },
        {
          label: "Sodium",
          tag: "NA",
          schemaOrgTag: "sodiumContent",
          total: 1826.12497728657,
          hasRDI: true,
          daily: 76.08854072027374,
          unit: "mg",
        },
        {
          label: "Calcium",
          tag: "CA",
          schemaOrgTag: null,
          total: 158.1580493175446,
          hasRDI: true,
          daily: 15.815804931754458,
          unit: "mg",
        },
        {
          label: "Magnesium",
          tag: "MG",
          schemaOrgTag: null,
          total: 482.6049357100019,
          hasRDI: true,
          daily: 114.90593707380997,
          unit: "mg",
        },
        {
          label: "Potassium",
          tag: "K",
          schemaOrgTag: null,
          total: 2411.954960937515,
          hasRDI: true,
          daily: 51.318190658244994,
          unit: "mg",
        },
        {
          label: "Iron",
          tag: "FE",
          schemaOrgTag: null,
          total: 14.157942187500765,
          hasRDI: true,
          daily: 78.65523437500426,
          unit: "mg",
        },
        {
          label: "Zinc",
          tag: "ZN",
          schemaOrgTag: null,
          total: 8.107275919600186,
          hasRDI: true,
          daily: 73.70250836000169,
          unit: "mg",
        },
        {
          label: "Phosphorus",
          tag: "P",
          schemaOrgTag: null,
          total: 906.3000000000001,
          hasRDI: true,
          daily: 129.47142857142856,
          unit: "mg",
        },
        {
          label: "Vitamin A",
          tag: "VITA_RAE",
          schemaOrgTag: null,
          total: 5.7,
          hasRDI: true,
          daily: 0.6333333333333333,
          unit: "µg",
        },
        {
          label: "Vitamin C",
          tag: "VITC",
          schemaOrgTag: null,
          total: 0,
          hasRDI: true,
          daily: 0,
          unit: "mg",
        },
        {
          label: "Thiamin (B1)",
          tag: "THIA",
          schemaOrgTag: null,
          total: 1.3851,
          hasRDI: true,
          daily: 115.425,
          unit: "mg",
        },
        {
          label: "Riboflavin (B2)",
          tag: "RIBF",
          schemaOrgTag: null,
          total: 0.3021,
          hasRDI: true,
          daily: 23.238461538461536,
          unit: "mg",
        },
        {
          label: "Niacin (B3)",
          tag: "NIA",
          schemaOrgTag: null,
          total: 5.0217,
          hasRDI: true,
          daily: 31.385625,
          unit: "mg",
        },
        {
          label: "Vitamin B6",
          tag: "VITB6A",
          schemaOrgTag: null,
          total: 1.4022000000000001,
          hasRDI: true,
          daily: 107.86153846153846,
          unit: "mg",
        },
        {
          label: "Folate equivalent (total)",
          tag: "FOLDFE",
          schemaOrgTag: null,
          total: 1245.45,
          hasRDI: true,
          daily: 311.3625,
          unit: "µg",
        },
        {
          label: "Folate (food)",
          tag: "FOLFD",
          schemaOrgTag: null,
          total: 1245.45,
          hasRDI: false,
          daily: 0,
          unit: "µg",
        },
        {
          label: "Folic acid",
          tag: "FOLAC",
          schemaOrgTag: null,
          total: 0,
          hasRDI: false,
          daily: 0,
          unit: "µg",
        },
        {
          label: "Vitamin B12",
          tag: "VITB12",
          schemaOrgTag: null,
          total: 0,
          hasRDI: true,
          daily: 0,
          unit: "µg",
        },
        {
          label: "Vitamin D",
          tag: "VITD",
          schemaOrgTag: null,
          total: 0,
          hasRDI: true,
          daily: 0,
          unit: "µg",
        },
        {
          label: "Vitamin E",
          tag: "TOCPHA",
          schemaOrgTag: null,
          total: 9.880751953128975,
          hasRDI: true,
          daily: 65.8716796875265,
          unit: "mg",
        },
        {
          label: "Vitamin K",
          tag: "VITK1",
          schemaOrgTag: null,
          total: 57.46239843751668,
          hasRDI: true,
          daily: 47.88533203126391,
          unit: "µg",
        },
        {
          label: "Sugar alcohols",
          tag: "Sugar.alcohol",
          schemaOrgTag: null,
          total: 0,
          hasRDI: false,
          daily: 0,
          unit: "g",
        },
        {
          label: "Water",
          tag: "WATER",
          schemaOrgTag: null,
          total: 974.7128743040004,
          hasRDI: false,
          daily: 0,
          unit: "g",
        },
      ],
    },
    _links: {
      self: {
        title: "Self",
        href: "https://api.edamam.com/api/recipes/v2/ab7b274349df0ce399cd05b5167d7052?type=public&app_id=de511dc8&app_key=3f9639bae8563438d47729b156a7b78a",
      },
    },
  },
  {
    recipe: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_2e9b699be433fab7da069629e1699455",
      label: "Easy Mango-Blackberry Smoothie Recipe",
      image:
        "https://edamam-product-images.s3.amazonaws.com/web-img/36b/36be4fd2cbb2dafacf722da53d7de6da.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=526c9a6c0161f730c76495aedbfb503e912c8af2cfed4cb738544fcd06f593c7",
      images: {
        THUMBNAIL: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/36b/36be4fd2cbb2dafacf722da53d7de6da-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=fad93e6c2939354822790e896f61073d5759df5c405ec5c5a448525630406e40",
          width: 100,
          height: 100,
        },
        SMALL: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/36b/36be4fd2cbb2dafacf722da53d7de6da-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4e469ca6b11405bc4f8075f23c7497dc183ff6f8263313910df19650ca229c45",
          width: 200,
          height: 200,
        },
        REGULAR: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/36b/36be4fd2cbb2dafacf722da53d7de6da.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=526c9a6c0161f730c76495aedbfb503e912c8af2cfed4cb738544fcd06f593c7",
          width: 300,
          height: 300,
        },
      },
      source: "Serious Eats",
      url: "http://www.seriouseats.com/recipes/2014/01/easy-mango-blackberry-kefir-smoothie-recipe.html",
      shareAs:
        "http://www.edamam.com/recipe/easy-mango-blackberry-smoothie-recipe-2e9b699be433fab7da069629e1699455/-/alcohol-free/balanced",
      yield: 1,
      dietLabels: ["Balanced", "High-Fiber", "Low-Sodium"],
      healthLabels: [
        "Vegetarian",
        "Pescatarian",
        "Mediterranean",
        "Gluten-Free",
        "Wheat-Free",
        "Egg-Free",
        "Peanut-Free",
        "Tree-Nut-Free",
        "Soy-Free",
        "Fish-Free",
        "Shellfish-Free",
        "Pork-Free",
        "Red-Meat-Free",
        "Crustacean-Free",
        "Celery-Free",
        "Mustard-Free",
        "Sesame-Free",
        "Lupine-Free",
        "Mollusk-Free",
        "Alcohol-Free",
        "No oil added",
        "Sulfite-Free",
        "Kosher",
        "Immuno-Supportive",
      ],
      cautions: ["Sulfites"],
      ingredientLines: [
        "1 large ripe Ataulfo mango, peeled and roughly chopped (about 1 cup)",
        "1 cup plain unsweetened kefir",
        "1 cup frozen blackberries (4 1/2 ounces)",
      ],
      ingredients: [
        {
          text: "1 large ripe Ataulfo mango, peeled and roughly chopped (about 1 cup)",
          quantity: 1,
          measure: "cup",
          food: "mango",
          weight: 165,
          foodCategory: "fruit",
          foodId: "food_an1dqoib8xj3tyb3pr7c0abi4rbw",
          image:
            "https://www.edamam.com/food-img/6e0/6e04857756d0876f14bfc035ff238e0b.png",
        },
        {
          text: "1 cup plain unsweetened kefir",
          quantity: 1,
          measure: "cup",
          food: "kefir",
          weight: 245,
          foodCategory: "yogurt",
          foodId: "food_a79ojfkbgdeekgblqmky9bunr8f6",
          image:
            "https://www.edamam.com/food-img/933/933eb3791b3a2175e007f1607d56b7e2.jpg",
        },
        {
          text: "1 cup frozen blackberries (4 1/2 ounces)",
          quantity: 4.5,
          measure: "ounce",
          food: "blackberries",
          weight: 127.5728540625,
          foodCategory: "fruit",
          foodId: "food_ahpid76by0of7kau7y8jqbw3zofy",
          image:
            "https://www.edamam.com/food-img/b49/b49683595ad4c4565d1bfe05348ef6eb.jpg",
        },
      ],
      calories: 274.59632724687503,
      totalWeight: 537.5728540625,
      totalTime: 3,
      cuisineType: ["american"],
      mealType: ["breakfast"],
      dishType: ["drinks"],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 274.59632724687503,
          unit: "kcal",
        },
        FAT: {
          label: "Fat",
          quantity: 9.03277698490625,
          unit: "g",
        },
        FASAT: {
          label: "Saturated",
          quantity: 5.26083819956875,
          unit: "g",
        },
        FATRN: {
          label: "Trans",
          quantity: 0,
          unit: "g",
        },
        FAMS: {
          label: "Monounsaturated",
          quantity: 2.411819241409375,
          unit: "g",
        },
        FAPU: {
          label: "Polyunsaturated",
          quantity: 0.6657804913750001,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 41.225821275406254,
          unit: "g",
        },
        "CHOCDF.net": {
          label: "Carbohydrates (net)",
          quantity: 32.59006001009375,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 8.6357612653125,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars",
          quantity: 33.64524527825,
          unit: "g",
        },
        "SUGAR.added": {
          label: "Sugars, added",
          quantity: 0,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 11.235392671468752,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 31.85,
          unit: "mg",
        },
        NA: {
          label: "Sodium",
          quantity: 115.147228540625,
          unit: "mg",
        },
        CA: {
          label: "Calcium",
          quantity: 346.33262767812505,
          unit: "mg",
        },
        MG: {
          label: "Magnesium",
          quantity: 66.6295708125,
          unit: "mg",
        },
        K: {
          label: "Potassium",
          quantity: 783.2300235812501,
          unit: "mg",
        },
        FE: {
          label: "Iron",
          quantity: 1.1008916951875,
          unit: "mg",
        },
        ZN: {
          label: "Zinc",
          quantity: 2.22707112653125,
          unit: "mg",
        },
        P: {
          label: "Phosphorus",
          quantity: 277.21702789375,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 143.444013946875,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 70.657899353125,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 0.1293665708125,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 0.42558594205625,
          unit: "mg",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 1.7916041372437501,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 0.25608035621875,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 99.41771351562501,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate (food)",
          quantity: 99.41771351562501,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 0,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 0.9065000000000001,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 0.24500000000000002,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 2.69395239253125,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 30.669725104375,
          unit: "µg",
        },
        "Sugar.alcohol": {
          label: "Sugar alcohol",
          quantity: 0,
          unit: "g",
        },
        WATER: {
          label: "Water",
          quantity: 425.5838608560938,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 13.729816362343753,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 13.896579976778845,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 26.30419099784375,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 13.741940425135418,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 34.54304506125,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 22.470785342937504,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 10.616666666666667,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 4.797801189192708,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 34.633262767812504,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 15.864183526785716,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 16.66446858683511,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 6.11606497326389,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 20.24610115028409,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 39.60243255625,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 15.938223771875,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 78.50877705902778,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 10.780547567708332,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 32.737380158173075,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 11.197525857773439,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 19.69848893990385,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 24.854428378906256,
          unit: "%",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 37.770833333333336,
          unit: "%",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 1.6333333333333335,
          unit: "%",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 17.959682616875,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 25.558104253645833,
          unit: "%",
        },
      },
      digest: [
        {
          label: "Fat",
          tag: "FAT",
          schemaOrgTag: "fatContent",
          total: 9.03277698490625,
          hasRDI: true,
          daily: 13.896579976778845,
          unit: "g",
          sub: [
            {
              label: "Saturated",
              tag: "FASAT",
              schemaOrgTag: "saturatedFatContent",
              total: 5.26083819956875,
              hasRDI: true,
              daily: 26.30419099784375,
              unit: "g",
            },
            {
              label: "Trans",
              tag: "FATRN",
              schemaOrgTag: "transFatContent",
              total: 0,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Monounsaturated",
              tag: "FAMS",
              schemaOrgTag: null,
              total: 2.411819241409375,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Polyunsaturated",
              tag: "FAPU",
              schemaOrgTag: null,
              total: 0.6657804913750001,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
          ],
        },
        {
          label: "Carbs",
          tag: "CHOCDF",
          schemaOrgTag: "carbohydrateContent",
          total: 41.225821275406254,
          hasRDI: true,
          daily: 13.741940425135418,
          unit: "g",
          sub: [
            {
              label: "Carbs (net)",
              tag: "CHOCDF.net",
              schemaOrgTag: null,
              total: 32.59006001009375,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Fiber",
              tag: "FIBTG",
              schemaOrgTag: "fiberContent",
              total: 8.6357612653125,
              hasRDI: true,
              daily: 34.54304506125,
              unit: "g",
            },
            {
              label: "Sugars",
              tag: "SUGAR",
              schemaOrgTag: "sugarContent",
              total: 33.64524527825,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Sugars, added",
              tag: "SUGAR.added",
              schemaOrgTag: null,
              total: 0,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
          ],
        },
        {
          label: "Protein",
          tag: "PROCNT",
          schemaOrgTag: "proteinContent",
          total: 11.235392671468752,
          hasRDI: true,
          daily: 22.470785342937504,
          unit: "g",
        },
        {
          label: "Cholesterol",
          tag: "CHOLE",
          schemaOrgTag: "cholesterolContent",
          total: 31.85,
          hasRDI: true,
          daily: 10.616666666666667,
          unit: "mg",
        },
        {
          label: "Sodium",
          tag: "NA",
          schemaOrgTag: "sodiumContent",
          total: 115.147228540625,
          hasRDI: true,
          daily: 4.797801189192708,
          unit: "mg",
        },
        {
          label: "Calcium",
          tag: "CA",
          schemaOrgTag: null,
          total: 346.33262767812505,
          hasRDI: true,
          daily: 34.633262767812504,
          unit: "mg",
        },
        {
          label: "Magnesium",
          tag: "MG",
          schemaOrgTag: null,
          total: 66.6295708125,
          hasRDI: true,
          daily: 15.864183526785716,
          unit: "mg",
        },
        {
          label: "Potassium",
          tag: "K",
          schemaOrgTag: null,
          total: 783.2300235812501,
          hasRDI: true,
          daily: 16.66446858683511,
          unit: "mg",
        },
        {
          label: "Iron",
          tag: "FE",
          schemaOrgTag: null,
          total: 1.1008916951875,
          hasRDI: true,
          daily: 6.11606497326389,
          unit: "mg",
        },
        {
          label: "Zinc",
          tag: "ZN",
          schemaOrgTag: null,
          total: 2.22707112653125,
          hasRDI: true,
          daily: 20.24610115028409,
          unit: "mg",
        },
        {
          label: "Phosphorus",
          tag: "P",
          schemaOrgTag: null,
          total: 277.21702789375,
          hasRDI: true,
          daily: 39.60243255625,
          unit: "mg",
        },
        {
          label: "Vitamin A",
          tag: "VITA_RAE",
          schemaOrgTag: null,
          total: 143.444013946875,
          hasRDI: true,
          daily: 15.938223771875,
          unit: "µg",
        },
        {
          label: "Vitamin C",
          tag: "VITC",
          schemaOrgTag: null,
          total: 70.657899353125,
          hasRDI: true,
          daily: 78.50877705902778,
          unit: "mg",
        },
        {
          label: "Thiamin (B1)",
          tag: "THIA",
          schemaOrgTag: null,
          total: 0.1293665708125,
          hasRDI: true,
          daily: 10.780547567708332,
          unit: "mg",
        },
        {
          label: "Riboflavin (B2)",
          tag: "RIBF",
          schemaOrgTag: null,
          total: 0.42558594205625,
          hasRDI: true,
          daily: 32.737380158173075,
          unit: "mg",
        },
        {
          label: "Niacin (B3)",
          tag: "NIA",
          schemaOrgTag: null,
          total: 1.7916041372437501,
          hasRDI: true,
          daily: 11.197525857773439,
          unit: "mg",
        },
        {
          label: "Vitamin B6",
          tag: "VITB6A",
          schemaOrgTag: null,
          total: 0.25608035621875,
          hasRDI: true,
          daily: 19.69848893990385,
          unit: "mg",
        },
        {
          label: "Folate equivalent (total)",
          tag: "FOLDFE",
          schemaOrgTag: null,
          total: 99.41771351562501,
          hasRDI: true,
          daily: 24.854428378906256,
          unit: "µg",
        },
        {
          label: "Folate (food)",
          tag: "FOLFD",
          schemaOrgTag: null,
          total: 99.41771351562501,
          hasRDI: false,
          daily: 0,
          unit: "µg",
        },
        {
          label: "Folic acid",
          tag: "FOLAC",
          schemaOrgTag: null,
          total: 0,
          hasRDI: false,
          daily: 0,
          unit: "µg",
        },
        {
          label: "Vitamin B12",
          tag: "VITB12",
          schemaOrgTag: null,
          total: 0.9065000000000001,
          hasRDI: true,
          daily: 37.770833333333336,
          unit: "µg",
        },
        {
          label: "Vitamin D",
          tag: "VITD",
          schemaOrgTag: null,
          total: 0.24500000000000002,
          hasRDI: true,
          daily: 1.6333333333333335,
          unit: "µg",
        },
        {
          label: "Vitamin E",
          tag: "TOCPHA",
          schemaOrgTag: null,
          total: 2.69395239253125,
          hasRDI: true,
          daily: 17.959682616875,
          unit: "mg",
        },
        {
          label: "Vitamin K",
          tag: "VITK1",
          schemaOrgTag: null,
          total: 30.669725104375,
          hasRDI: true,
          daily: 25.558104253645833,
          unit: "µg",
        },
        {
          label: "Sugar alcohols",
          tag: "Sugar.alcohol",
          schemaOrgTag: null,
          total: 0,
          hasRDI: false,
          daily: 0,
          unit: "g",
        },
        {
          label: "Water",
          tag: "WATER",
          schemaOrgTag: null,
          total: 425.5838608560938,
          hasRDI: false,
          daily: 0,
          unit: "g",
        },
      ],
    },
    _links: {
      self: {
        title: "Self",
        href: "https://api.edamam.com/api/recipes/v2/2e9b699be433fab7da069629e1699455?type=public&app_id=de511dc8&app_key=3f9639bae8563438d47729b156a7b78a",
      },
    },
  },
  {
    recipe: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_3d45f44e2e398b038c1113b0fd9a484c",
      label: "Seven-Yolk Pasta Dough",
      image:
        "https://edamam-product-images.s3.amazonaws.com/web-img/470/470026e882df183a9634545759d4a8ba.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=53f834c5e05933ff7fff7c64ced54fb17f30dff378346e9a45217b5734aa0add",
      images: {
        THUMBNAIL: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/470/470026e882df183a9634545759d4a8ba-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=60e0f4238f7fccaf8a93824687c5a11ba7bfc5684c021b0dd6c1b2a4a4c65a91",
          width: 100,
          height: 100,
        },
        SMALL: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/470/470026e882df183a9634545759d4a8ba-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5bc1bc98ade6c071433e0c74befad5a4905547ffe546d39701084808d4c30184",
          width: 200,
          height: 200,
        },
        REGULAR: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/470/470026e882df183a9634545759d4a8ba.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=53f834c5e05933ff7fff7c64ced54fb17f30dff378346e9a45217b5734aa0add",
          width: 300,
          height: 300,
        },
        LARGE: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/470/470026e882df183a9634545759d4a8ba-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8084a634d6aa3192fb71211dfdf5960f7027d362008e517c730eda320cd2184f",
          width: 600,
          height: 600,
        },
      },
      source: "Smitten Kitchen",
      url: "http://smittenkitchen.com/2008/02/seven-yolk-pasta-dough/",
      shareAs:
        "http://www.edamam.com/recipe/seven-yolk-pasta-dough-3d45f44e2e398b038c1113b0fd9a484c/-/alcohol-free/balanced",
      yield: 6,
      dietLabels: ["Balanced", "Low-Sodium"],
      healthLabels: [
        "Sugar-Conscious",
        "Low Potassium",
        "Kidney-Friendly",
        "Vegetarian",
        "Pescatarian",
        "Mediterranean",
        "Peanut-Free",
        "Tree-Nut-Free",
        "Soy-Free",
        "Fish-Free",
        "Shellfish-Free",
        "Pork-Free",
        "Red-Meat-Free",
        "Crustacean-Free",
        "Celery-Free",
        "Mustard-Free",
        "Sesame-Free",
        "Lupine-Free",
        "Mollusk-Free",
        "Alcohol-Free",
        "Sulfite-Free",
        "Kosher",
      ],
      cautions: [],
      ingredientLines: [
        "1 3/4 cups (8 ounces) all-purpose flour",
        "6 large egg yolks",
        "1 large egg",
        "1 1/2 teaspoons olive oil",
        "1 tablespoon milk",
      ],
      ingredients: [
        {
          text: "1 3/4 cups (8 ounces) all-purpose flour",
          quantity: 8,
          measure: "ounce",
          food: "all-purpose flour",
          weight: 226.796185,
          foodCategory: "grains",
          foodId: "food_ar3x97tbq9o9p6b6gzwj0am0c81l",
          image:
            "https://www.edamam.com/food-img/368/368077bbcab62f862a8c766a56ea5dd1.jpg",
        },
        {
          text: "6 large egg yolks",
          quantity: 6,
          measure: "<unit>",
          food: "egg yolks",
          weight: 102,
          foodCategory: "Eggs",
          foodId: "food_awlnigdb6qm6i1biwv7rlalfg2ni",
          image:
            "https://www.edamam.com/food-img/e3f/e3f697887aec0e8ecf09a9ca8ef3944a.jpg",
        },
        {
          text: "1 large egg",
          quantity: 1,
          measure: "<unit>",
          food: "egg",
          weight: 50,
          foodCategory: "Eggs",
          foodId: "food_bhpradua77pk16aipcvzeayg732r",
          image:
            "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg",
        },
        {
          text: "1 1/2 teaspoons olive oil",
          quantity: 1.5,
          measure: "teaspoon",
          food: "olive oil",
          weight: 6.75,
          foodCategory: "Oils",
          foodId: "food_b1d1icuad3iktrbqby0hiagafaz7",
          image:
            "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg",
        },
        {
          text: "1 tablespoon milk",
          quantity: 1,
          measure: "tablespoon",
          food: "milk",
          weight: 15,
          foodCategory: "Milk",
          foodId: "food_b49rs1kaw0jktabzkg2vvanvvsis",
          image:
            "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg",
        },
      ],
      calories: 1294.2981134000004,
      totalWeight: 400.54618500000004,
      totalTime: 0,
      cuisineType: ["american"],
      mealType: ["lunch/dinner"],
      dishType: ["main course"],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 1294.2981134000004,
          unit: "kcal",
        },
        FAT: {
          label: "Fat",
          quantity: 41.285902613,
          unit: "g",
        },
        FASAT: {
          label: "Saturated",
          quantity: 12.868344086750003,
          unit: "g",
        },
        FATRN: {
          label: "Trans",
          quantity: 0.019,
          unit: "g",
        },
        FAMS: {
          label: "Monounsaturated",
          quantity: 19.045740180950002,
          unit: "g",
        },
        FAPU: {
          label: "Polyunsaturated",
          quantity: 6.919800744050001,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 177.80996877350003,
          unit: "g",
        },
        "CHOCDF.net": {
          label: "Carbohydrates (net)",
          quantity: 171.68647177850002,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 6.123496995000001,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars",
          quantity: 2.1260496995000002,
          unit: "g",
        },
        "SUGAR.added": {
          label: "Sugars, added",
          quantity: 0,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 46.3577459105,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 1294.2,
          unit: "mg",
        },
        NA: {
          label: "Sodium",
          quantity: 131.0809237,
          unit: "mg",
        },
        CA: {
          label: "Calcium",
          quantity: 210.61692775,
          unit: "mg",
        },
        MG: {
          label: "Magnesium",
          quantity: 62.49516070000001,
          unit: "mg",
        },
        K: {
          label: "Potassium",
          quantity: 442.71941795,
          unit: "mg",
        },
        FE: {
          label: "Iron",
          quantity: 14.225242984000001,
          unit: "mg",
        },
        ZN: {
          label: "Zinc",
          quantity: 4.634073295,
          unit: "mg",
        },
        P: {
          label: "Phosphorus",
          quantity: 754.3398798000001,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 475.52,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 0,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 1.9867700522500003,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 1.9127831539,
          unit: "mg",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 13.465376762400002,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 0.5471903213999999,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 833.1468983500001,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate (food)",
          quantity: 238.94089365000002,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 349.2661249,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 2.5014999999999996,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 6.703000000000001,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 4.657356225500001,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 5.6528885550000005,
          unit: "µg",
        },
        "Sugar.alcohol": {
          label: "Sugar alcohol",
          quantity: 0,
          unit: "g",
        },
        WATER: {
          label: "Water",
          quantity: 131.68480525200002,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 64.71490567000002,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 63.516773250769226,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 64.34172043375001,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 59.26998959116668,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 24.49398798,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 92.715491821,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 431.4,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 5.461705154166666,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 21.061692775,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 14.879800166666667,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 9.419562084042553,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 79.02912768888889,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 42.12793904545455,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 107.76283997142858,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 52.83555555555556,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 0,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 165.56417102083336,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 147.13716568461538,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 84.158604765,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 42.091563184615374,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 208.28672458750003,
          unit: "%",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 104.22916666666664,
          unit: "%",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 44.686666666666675,
          unit: "%",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 31.04904150333334,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 4.7107404625000004,
          unit: "%",
        },
      },
      digest: [
        {
          label: "Fat",
          tag: "FAT",
          schemaOrgTag: "fatContent",
          total: 41.285902613,
          hasRDI: true,
          daily: 63.516773250769226,
          unit: "g",
          sub: [
            {
              label: "Saturated",
              tag: "FASAT",
              schemaOrgTag: "saturatedFatContent",
              total: 12.868344086750003,
              hasRDI: true,
              daily: 64.34172043375001,
              unit: "g",
            },
            {
              label: "Trans",
              tag: "FATRN",
              schemaOrgTag: "transFatContent",
              total: 0.019,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Monounsaturated",
              tag: "FAMS",
              schemaOrgTag: null,
              total: 19.045740180950002,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Polyunsaturated",
              tag: "FAPU",
              schemaOrgTag: null,
              total: 6.919800744050001,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
          ],
        },
        {
          label: "Carbs",
          tag: "CHOCDF",
          schemaOrgTag: "carbohydrateContent",
          total: 177.80996877350003,
          hasRDI: true,
          daily: 59.26998959116668,
          unit: "g",
          sub: [
            {
              label: "Carbs (net)",
              tag: "CHOCDF.net",
              schemaOrgTag: null,
              total: 171.68647177850002,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Fiber",
              tag: "FIBTG",
              schemaOrgTag: "fiberContent",
              total: 6.123496995000001,
              hasRDI: true,
              daily: 24.49398798,
              unit: "g",
            },
            {
              label: "Sugars",
              tag: "SUGAR",
              schemaOrgTag: "sugarContent",
              total: 2.1260496995000002,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Sugars, added",
              tag: "SUGAR.added",
              schemaOrgTag: null,
              total: 0,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
          ],
        },
        {
          label: "Protein",
          tag: "PROCNT",
          schemaOrgTag: "proteinContent",
          total: 46.3577459105,
          hasRDI: true,
          daily: 92.715491821,
          unit: "g",
        },
        {
          label: "Cholesterol",
          tag: "CHOLE",
          schemaOrgTag: "cholesterolContent",
          total: 1294.2,
          hasRDI: true,
          daily: 431.4,
          unit: "mg",
        },
        {
          label: "Sodium",
          tag: "NA",
          schemaOrgTag: "sodiumContent",
          total: 131.0809237,
          hasRDI: true,
          daily: 5.461705154166666,
          unit: "mg",
        },
        {
          label: "Calcium",
          tag: "CA",
          schemaOrgTag: null,
          total: 210.61692775,
          hasRDI: true,
          daily: 21.061692775,
          unit: "mg",
        },
        {
          label: "Magnesium",
          tag: "MG",
          schemaOrgTag: null,
          total: 62.49516070000001,
          hasRDI: true,
          daily: 14.879800166666667,
          unit: "mg",
        },
        {
          label: "Potassium",
          tag: "K",
          schemaOrgTag: null,
          total: 442.71941795,
          hasRDI: true,
          daily: 9.419562084042553,
          unit: "mg",
        },
        {
          label: "Iron",
          tag: "FE",
          schemaOrgTag: null,
          total: 14.225242984000001,
          hasRDI: true,
          daily: 79.02912768888889,
          unit: "mg",
        },
        {
          label: "Zinc",
          tag: "ZN",
          schemaOrgTag: null,
          total: 4.634073295,
          hasRDI: true,
          daily: 42.12793904545455,
          unit: "mg",
        },
        {
          label: "Phosphorus",
          tag: "P",
          schemaOrgTag: null,
          total: 754.3398798000001,
          hasRDI: true,
          daily: 107.76283997142858,
          unit: "mg",
        },
        {
          label: "Vitamin A",
          tag: "VITA_RAE",
          schemaOrgTag: null,
          total: 475.52,
          hasRDI: true,
          daily: 52.83555555555556,
          unit: "µg",
        },
        {
          label: "Vitamin C",
          tag: "VITC",
          schemaOrgTag: null,
          total: 0,
          hasRDI: true,
          daily: 0,
          unit: "mg",
        },
        {
          label: "Thiamin (B1)",
          tag: "THIA",
          schemaOrgTag: null,
          total: 1.9867700522500003,
          hasRDI: true,
          daily: 165.56417102083336,
          unit: "mg",
        },
        {
          label: "Riboflavin (B2)",
          tag: "RIBF",
          schemaOrgTag: null,
          total: 1.9127831539,
          hasRDI: true,
          daily: 147.13716568461538,
          unit: "mg",
        },
        {
          label: "Niacin (B3)",
          tag: "NIA",
          schemaOrgTag: null,
          total: 13.465376762400002,
          hasRDI: true,
          daily: 84.158604765,
          unit: "mg",
        },
        {
          label: "Vitamin B6",
          tag: "VITB6A",
          schemaOrgTag: null,
          total: 0.5471903213999999,
          hasRDI: true,
          daily: 42.091563184615374,
          unit: "mg",
        },
        {
          label: "Folate equivalent (total)",
          tag: "FOLDFE",
          schemaOrgTag: null,
          total: 833.1468983500001,
          hasRDI: true,
          daily: 208.28672458750003,
          unit: "µg",
        },
        {
          label: "Folate (food)",
          tag: "FOLFD",
          schemaOrgTag: null,
          total: 238.94089365000002,
          hasRDI: false,
          daily: 0,
          unit: "µg",
        },
        {
          label: "Folic acid",
          tag: "FOLAC",
          schemaOrgTag: null,
          total: 349.2661249,
          hasRDI: false,
          daily: 0,
          unit: "µg",
        },
        {
          label: "Vitamin B12",
          tag: "VITB12",
          schemaOrgTag: null,
          total: 2.5014999999999996,
          hasRDI: true,
          daily: 104.22916666666664,
          unit: "µg",
        },
        {
          label: "Vitamin D",
          tag: "VITD",
          schemaOrgTag: null,
          total: 6.703000000000001,
          hasRDI: true,
          daily: 44.686666666666675,
          unit: "µg",
        },
        {
          label: "Vitamin E",
          tag: "TOCPHA",
          schemaOrgTag: null,
          total: 4.657356225500001,
          hasRDI: true,
          daily: 31.04904150333334,
          unit: "mg",
        },
        {
          label: "Vitamin K",
          tag: "VITK1",
          schemaOrgTag: null,
          total: 5.6528885550000005,
          hasRDI: true,
          daily: 4.7107404625000004,
          unit: "µg",
        },
        {
          label: "Sugar alcohols",
          tag: "Sugar.alcohol",
          schemaOrgTag: null,
          total: 0,
          hasRDI: false,
          daily: 0,
          unit: "g",
        },
        {
          label: "Water",
          tag: "WATER",
          schemaOrgTag: null,
          total: 131.68480525200002,
          hasRDI: false,
          daily: 0,
          unit: "g",
        },
      ],
    },
    _links: {
      self: {
        title: "Self",
        href: "https://api.edamam.com/api/recipes/v2/3d45f44e2e398b038c1113b0fd9a484c?type=public&app_id=de511dc8&app_key=3f9639bae8563438d47729b156a7b78a",
      },
    },
  },
  {
    recipe: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_4257d55367f55e4021acbeb6d6820923",
      label: "Mixed Berry Ricotta Fool",
      image:
        "https://edamam-product-images.s3.amazonaws.com/web-img/084/084bea3aa2a0e5a0eb2323bcf8cbb696.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d71088149745a1dccd5a88030b0c57bfc9ff0de3836dfd7752124acd3dfeee41",
      images: {
        THUMBNAIL: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/084/084bea3aa2a0e5a0eb2323bcf8cbb696-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c2d740a80efbe229de979a0568a67b5f56624c2e4103ee899d689db50878c7c7",
          width: 100,
          height: 100,
        },
        SMALL: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/084/084bea3aa2a0e5a0eb2323bcf8cbb696-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=fcb570f29bf6fb3d02df2a670c70399c42b965d96c8fb97757e5457023758123",
          width: 200,
          height: 200,
        },
        REGULAR: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/084/084bea3aa2a0e5a0eb2323bcf8cbb696.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d71088149745a1dccd5a88030b0c57bfc9ff0de3836dfd7752124acd3dfeee41",
          width: 300,
          height: 300,
        },
        LARGE: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/084/084bea3aa2a0e5a0eb2323bcf8cbb696-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9bdba413aed556e8f288ed48af6446a6b342bca03effb76fbed249d3ca316904",
          width: 600,
          height: 600,
        },
      },
      source: "Seven Spoons",
      url: "http://www.sevenspoons.net/blog/2006/4/11/reality-bites.html",
      shareAs:
        "http://www.edamam.com/recipe/mixed-berry-ricotta-fool-4257d55367f55e4021acbeb6d6820923/-/alcohol-free/balanced",
      yield: 1,
      dietLabels: ["Balanced", "Low-Sodium"],
      healthLabels: [
        "Low Potassium",
        "Kidney-Friendly",
        "Vegetarian",
        "Pescatarian",
        "Gluten-Free",
        "Wheat-Free",
        "Egg-Free",
        "Peanut-Free",
        "Tree-Nut-Free",
        "Soy-Free",
        "Fish-Free",
        "Shellfish-Free",
        "Pork-Free",
        "Red-Meat-Free",
        "Crustacean-Free",
        "Celery-Free",
        "Mustard-Free",
        "Sesame-Free",
        "Lupine-Free",
        "Mollusk-Free",
        "Alcohol-Free",
        "No oil added",
        "Kosher",
      ],
      cautions: ["Sulfites"],
      ingredientLines: [
        "1/3 cup mixed berries",
        "3 tbsp ricotta",
        "1/2 tsp Honey",
        "1/8 tsp vanilla",
        "A few grates of lemon zest (optional)",
      ],
      ingredients: [
        {
          text: "1/3 cup mixed berries",
          quantity: 0.3333333333333333,
          measure: "cup",
          food: "berries",
          weight: 49.33333333333333,
          foodCategory: "fruit",
          foodId: "food_bgkl0cuasoeomtbolalmcauhha54",
          image:
            "https://www.edamam.com/food-img/f55/f55705a2a9ea9f7abf449a05fa968139.png",
        },
        {
          text: "3 tbsp ricotta",
          quantity: 3,
          measure: "tablespoon",
          food: "ricotta",
          weight: 46.1249999992203,
          foodCategory: "Cheese",
          foodId: "food_ahhgiwga1i8qo9bcvoa6wbi3xybg",
          image:
            "https://www.edamam.com/food-img/fc4/fc42636b63848462aea5f5930c2b6268.jpg",
        },
        {
          text: "1/2 tsp Honey",
          quantity: 0.5,
          measure: "teaspoon",
          food: "Honey",
          weight: 3.5312500001791087,
          foodCategory: "sugar syrups",
          foodId: "food_b1cj2pmac27zngan87974b0a40hk",
          image:
            "https://www.edamam.com/food-img/198/198c7b25c23b4235b4cc33818c7b335f.jpg",
        },
        {
          text: "1/8 tsp vanilla",
          quantity: 0.125,
          measure: "teaspoon",
          food: "vanilla",
          weight: 0.525,
          foodCategory: "Condiments and sauces",
          foodId: "food_bh1wvnqaw3q7ciascfoygaabax2a",
          image:
            "https://www.edamam.com/food-img/90f/90f910b0bf82750d4f6528263e014cca.jpg",
        },
        {
          text: "A few grates of lemon zest (optional)",
          quantity: 1,
          measure: "<unit>",
          food: "lemon zest",
          weight: 12,
          foodCategory: "fruit",
          foodId: "food_bpg66j3a5vjuuga36uiiyaqeazpd",
          image:
            "https://www.edamam.com/food-img/540/5405605c8e9b284243f06c0b1587ab6f.jpg",
        },
      ],
      calories: 126.2644999991878,
      totalWeight: 111.51458333273274,
      totalTime: 0,
      cuisineType: ["american"],
      mealType: ["lunch/dinner"],
      dishType: ["desserts"],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 126.2644999991878,
          unit: "kcal",
        },
        FAT: {
          label: "Fat",
          quantity: 6.186139999898795,
          unit: "g",
        },
        FASAT: {
          label: "Saturated",
          quantity: 3.844614583268657,
          unit: "g",
        },
        FATRN: {
          label: "Trans",
          quantity: 0,
          unit: "g",
        },
        FAMS: {
          label: "Monounsaturated",
          quantity: 1.6975129166383869,
          unit: "g",
        },
        FAPU: {
          label: "Polyunsaturated",
          quantity: 0.26030891666366485,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 13.446762500123883,
          unit: "g",
        },
        "CHOCDF.net": {
          label: "Carbohydrates (net)",
          quantity: 10.983700000123525,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 2.4630625000003583,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars",
          quantity: 8.504812500144979,
          unit: "g",
        },
        "SUGAR.added": {
          label: "Sugars, added",
          quantity: 2.899862500147084,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 5.749650416579409,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 23.523749999602355,
          unit: "mg",
        },
        NA: {
          label: "Sodium",
          quantity: 40.146833332685546,
          unit: "mg",
        },
        CA: {
          label: "Calcium",
          quantity: 114.78837499839676,
          unit: "mg",
        },
        MG: {
          label: "Magnesium",
          quantity: 9.967374999917816,
          unit: "mg",
        },
        K: {
          label: "Potassium",
          quantity: 108.23116666594112,
          unit: "mg",
        },
        FE: {
          label: "Iron",
          quantity: 0.4248695833311227,
          unit: "mg",
        },
        ZN: {
          label: "Zinc",
          quantity: 0.6523295833246828,
          unit: "mg",
        },
        P: {
          label: "Phosphorus",
          quantity: 80.41024999877523,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 57.189999999064355,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 20.282989583334228,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 0.03150733333323197,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 0.12161104166521433,
          unit: "mg",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 0.30868739583273913,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 0.06711108333304104,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 10.12562499991002,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate (food)",
          quantity: 10.12562499991002,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 0,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 0.15682499999734903,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 0.09224999999844061,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 0.36193749999914226,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 10.028708333324756,
          unit: "µg",
        },
        "Sugar.alcohol": {
          label: "Sugar alcohol",
          quantity: 0,
          unit: "g",
        },
        WATER: {
          label: "Water",
          quantity: 85.28711374947159,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 6.313224999959391,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 9.517138461382762,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 19.223072916343284,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 4.482254166707961,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 9.852250000001433,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 11.499300833158818,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 7.841249999867451,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 1.672784722195231,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 11.478837499839676,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 2.373184523789956,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 2.3027907801264065,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 2.360386574061793,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 5.930268939315298,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 11.487178571253603,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 6.354444444340484,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 22.536655092593588,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 2.625611111102664,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 9.354695512708794,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 1.9292962239546196,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 5.1623910256185415,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 2.531406249977505,
          unit: "%",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 6.534374999889543,
          unit: "%",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 0.614999999989604,
          unit: "%",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 2.4129166666609483,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 8.357256944437298,
          unit: "%",
        },
      },
      digest: [
        {
          label: "Fat",
          tag: "FAT",
          schemaOrgTag: "fatContent",
          total: 6.186139999898795,
          hasRDI: true,
          daily: 9.517138461382762,
          unit: "g",
          sub: [
            {
              label: "Saturated",
              tag: "FASAT",
              schemaOrgTag: "saturatedFatContent",
              total: 3.844614583268657,
              hasRDI: true,
              daily: 19.223072916343284,
              unit: "g",
            },
            {
              label: "Trans",
              tag: "FATRN",
              schemaOrgTag: "transFatContent",
              total: 0,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Monounsaturated",
              tag: "FAMS",
              schemaOrgTag: null,
              total: 1.6975129166383869,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Polyunsaturated",
              tag: "FAPU",
              schemaOrgTag: null,
              total: 0.26030891666366485,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
          ],
        },
        {
          label: "Carbs",
          tag: "CHOCDF",
          schemaOrgTag: "carbohydrateContent",
          total: 13.446762500123883,
          hasRDI: true,
          daily: 4.482254166707961,
          unit: "g",
          sub: [
            {
              label: "Carbs (net)",
              tag: "CHOCDF.net",
              schemaOrgTag: null,
              total: 10.983700000123525,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Fiber",
              tag: "FIBTG",
              schemaOrgTag: "fiberContent",
              total: 2.4630625000003583,
              hasRDI: true,
              daily: 9.852250000001433,
              unit: "g",
            },
            {
              label: "Sugars",
              tag: "SUGAR",
              schemaOrgTag: "sugarContent",
              total: 8.504812500144979,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Sugars, added",
              tag: "SUGAR.added",
              schemaOrgTag: null,
              total: 2.899862500147084,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
          ],
        },
        {
          label: "Protein",
          tag: "PROCNT",
          schemaOrgTag: "proteinContent",
          total: 5.749650416579409,
          hasRDI: true,
          daily: 11.499300833158818,
          unit: "g",
        },
        {
          label: "Cholesterol",
          tag: "CHOLE",
          schemaOrgTag: "cholesterolContent",
          total: 23.523749999602355,
          hasRDI: true,
          daily: 7.841249999867451,
          unit: "mg",
        },
        {
          label: "Sodium",
          tag: "NA",
          schemaOrgTag: "sodiumContent",
          total: 40.146833332685546,
          hasRDI: true,
          daily: 1.672784722195231,
          unit: "mg",
        },
        {
          label: "Calcium",
          tag: "CA",
          schemaOrgTag: null,
          total: 114.78837499839676,
          hasRDI: true,
          daily: 11.478837499839676,
          unit: "mg",
        },
        {
          label: "Magnesium",
          tag: "MG",
          schemaOrgTag: null,
          total: 9.967374999917816,
          hasRDI: true,
          daily: 2.373184523789956,
          unit: "mg",
        },
        {
          label: "Potassium",
          tag: "K",
          schemaOrgTag: null,
          total: 108.23116666594112,
          hasRDI: true,
          daily: 2.3027907801264065,
          unit: "mg",
        },
        {
          label: "Iron",
          tag: "FE",
          schemaOrgTag: null,
          total: 0.4248695833311227,
          hasRDI: true,
          daily: 2.360386574061793,
          unit: "mg",
        },
        {
          label: "Zinc",
          tag: "ZN",
          schemaOrgTag: null,
          total: 0.6523295833246828,
          hasRDI: true,
          daily: 5.930268939315298,
          unit: "mg",
        },
        {
          label: "Phosphorus",
          tag: "P",
          schemaOrgTag: null,
          total: 80.41024999877523,
          hasRDI: true,
          daily: 11.487178571253603,
          unit: "mg",
        },
        {
          label: "Vitamin A",
          tag: "VITA_RAE",
          schemaOrgTag: null,
          total: 57.189999999064355,
          hasRDI: true,
          daily: 6.354444444340484,
          unit: "µg",
        },
        {
          label: "Vitamin C",
          tag: "VITC",
          schemaOrgTag: null,
          total: 20.282989583334228,
          hasRDI: true,
          daily: 22.536655092593588,
          unit: "mg",
        },
        {
          label: "Thiamin (B1)",
          tag: "THIA",
          schemaOrgTag: null,
          total: 0.03150733333323197,
          hasRDI: true,
          daily: 2.625611111102664,
          unit: "mg",
        },
        {
          label: "Riboflavin (B2)",
          tag: "RIBF",
          schemaOrgTag: null,
          total: 0.12161104166521433,
          hasRDI: true,
          daily: 9.354695512708794,
          unit: "mg",
        },
        {
          label: "Niacin (B3)",
          tag: "NIA",
          schemaOrgTag: null,
          total: 0.30868739583273913,
          hasRDI: true,
          daily: 1.9292962239546196,
          unit: "mg",
        },
        {
          label: "Vitamin B6",
          tag: "VITB6A",
          schemaOrgTag: null,
          total: 0.06711108333304104,
          hasRDI: true,
          daily: 5.1623910256185415,
          unit: "mg",
        },
        {
          label: "Folate equivalent (total)",
          tag: "FOLDFE",
          schemaOrgTag: null,
          total: 10.12562499991002,
          hasRDI: true,
          daily: 2.531406249977505,
          unit: "µg",
        },
        {
          label: "Folate (food)",
          tag: "FOLFD",
          schemaOrgTag: null,
          total: 10.12562499991002,
          hasRDI: false,
          daily: 0,
          unit: "µg",
        },
        {
          label: "Folic acid",
          tag: "FOLAC",
          schemaOrgTag: null,
          total: 0,
          hasRDI: false,
          daily: 0,
          unit: "µg",
        },
        {
          label: "Vitamin B12",
          tag: "VITB12",
          schemaOrgTag: null,
          total: 0.15682499999734903,
          hasRDI: true,
          daily: 6.534374999889543,
          unit: "µg",
        },
        {
          label: "Vitamin D",
          tag: "VITD",
          schemaOrgTag: null,
          total: 0.09224999999844061,
          hasRDI: true,
          daily: 0.614999999989604,
          unit: "µg",
        },
        {
          label: "Vitamin E",
          tag: "TOCPHA",
          schemaOrgTag: null,
          total: 0.36193749999914226,
          hasRDI: true,
          daily: 2.4129166666609483,
          unit: "mg",
        },
        {
          label: "Vitamin K",
          tag: "VITK1",
          schemaOrgTag: null,
          total: 10.028708333324756,
          hasRDI: true,
          daily: 8.357256944437298,
          unit: "µg",
        },
        {
          label: "Sugar alcohols",
          tag: "Sugar.alcohol",
          schemaOrgTag: null,
          total: 0,
          hasRDI: false,
          daily: 0,
          unit: "g",
        },
        {
          label: "Water",
          tag: "WATER",
          schemaOrgTag: null,
          total: 85.28711374947159,
          hasRDI: false,
          daily: 0,
          unit: "g",
        },
      ],
    },
    _links: {
      self: {
        title: "Self",
        href: "https://api.edamam.com/api/recipes/v2/4257d55367f55e4021acbeb6d6820923?type=public&app_id=de511dc8&app_key=3f9639bae8563438d47729b156a7b78a",
      },
    },
  },
  {
    recipe: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_5deb035300431c30319d1f77afdefa89",
      label: "Olive Oil Cracker recipes",
      image:
        "https://edamam-product-images.s3.amazonaws.com/web-img/d35/d35614d9aac3d80c44f4583e6f2c59cb?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c9c6bc73b062beecc19225e5ed4699145a91d12d43d10743b232a7caed2d54f9",
      images: {
        THUMBNAIL: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/d35/d35614d9aac3d80c44f4583e6f2c59cb-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2f8b1d9dd5717ffaa00d1ee6a574a1a0e3ee095c81074c575256720e4848daca",
          width: 100,
          height: 100,
        },
        SMALL: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/d35/d35614d9aac3d80c44f4583e6f2c59cb-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6102232737b13010ca9d86efd51b1938157a56e9e1e8b19f2bbee60f3dbb60bf",
          width: 200,
          height: 200,
        },
        REGULAR: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/d35/d35614d9aac3d80c44f4583e6f2c59cb?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c9c6bc73b062beecc19225e5ed4699145a91d12d43d10743b232a7caed2d54f9",
          width: 300,
          height: 300,
        },
      },
      source: "101 Cookbooks",
      url: "http://www.101cookbooks.com/archives/olive-oil-crackers-recipe.html",
      shareAs:
        "http://www.edamam.com/recipe/olive-oil-cracker-recipes-5deb035300431c30319d1f77afdefa89/-/alcohol-free/balanced",
      yield: 4,
      dietLabels: ["Balanced", "High-Fiber"],
      healthLabels: [
        "Sugar-Conscious",
        "Vegan",
        "Vegetarian",
        "Pescatarian",
        "Mediterranean",
        "Dairy-Free",
        "Egg-Free",
        "Peanut-Free",
        "Tree-Nut-Free",
        "Soy-Free",
        "Fish-Free",
        "Shellfish-Free",
        "Pork-Free",
        "Red-Meat-Free",
        "Crustacean-Free",
        "Celery-Free",
        "Mustard-Free",
        "Sesame-Free",
        "Lupine-Free",
        "Mollusk-Free",
        "Alcohol-Free",
        "Sulfite-Free",
        "Kosher",
      ],
      cautions: [],
      ingredientLines: [
        "1 1/2 cups semolina flour",
        "1 1/2 cups white whole wheat flour (or all-purpose flour)",
        "1 teaspoon fine-grain sea salt",
        "1 cup warm water",
        "1/3 cup extra virgin olive oil",
      ],
      ingredients: [
        {
          text: "1 1/2 cups semolina flour",
          quantity: 1.5,
          measure: "cup",
          food: "semolina flour",
          weight: 250.5,
          foodCategory: "grains",
          foodId: "food_bd7u95la1cuahhav8pa0saklqawb",
          image:
            "https://www.edamam.com/food-img/78f/78fef871275ab078606ea747e446150e.jpg",
        },
        {
          text: "1 1/2 cups white whole wheat flour (or all-purpose flour)",
          quantity: 1.5,
          measure: "cup",
          food: "whole wheat flour",
          weight: 180,
          foodCategory: "grains",
          foodId: "food_azuyr92bee8mu1aodnko9agg46su",
          image:
            "https://www.edamam.com/food-img/f46/f46a64137365c10237522be5980f769c.jpg",
        },
        {
          text: "1 teaspoon fine-grain sea salt",
          quantity: 1,
          measure: "teaspoon",
          food: "fine-grain sea salt",
          weight: 6,
          foodCategory: "Condiments and sauces",
          foodId: "food_btxz81db72hwbra2pncvebzzzum9",
          image:
            "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg",
        },
        {
          text: "1 cup warm water",
          quantity: 1,
          measure: "cup",
          food: "water",
          weight: 237,
          foodCategory: "water",
          foodId: "food_a99vzubbk1ayrsad318rvbzr3dh0",
          image:
            "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg",
        },
        {
          text: "1/3 cup extra virgin olive oil",
          quantity: 0.3333333333333333,
          measure: "cup",
          food: "extra virgin olive oil",
          weight: 72,
          foodCategory: "Oils",
          foodId: "food_b1d1icuad3iktrbqby0hiagafaz7",
          image:
            "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg",
        },
      ],
      calories: 2150.2799999999997,
      totalWeight: 743.8930735848082,
      totalTime: 60,
      cuisineType: ["american"],
      mealType: ["snack"],
      dishType: ["starter"],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 2150.2799999999997,
          unit: "kcal",
        },
        FAT: {
          label: "Fat",
          quantity: 79.13025,
          unit: "g",
        },
        FASAT: {
          label: "Saturated",
          quantity: 11.09151,
          unit: "g",
        },
        FATRN: {
          label: "Trans",
          quantity: 0,
          unit: "g",
        },
        FAMS: {
          label: "Monounsaturated",
          quantity: 53.35194,
          unit: "g",
        },
        FAPU: {
          label: "Polyunsaturated",
          quantity: 10.75431,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 311.98515,
          unit: "g",
        },
        "CHOCDF.net": {
          label: "Carbohydrates (net)",
          quantity: 282.95565,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 29.0295,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars",
          quantity: 0.738,
          unit: "g",
        },
        "SUGAR.added": {
          label: "Sugars, added",
          quantity: 0,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 55.541399999999996,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 0,
          unit: "mg",
        },
        NA: {
          label: "Sodium",
          quantity: 1719.6924600000004,
          unit: "mg",
        },
        CA: {
          label: "Calcium",
          quantity: 112.66933766035399,
          unit: "mg",
        },
        MG: {
          label: "Magnesium",
          quantity: 366.7489307358481,
          unit: "mg",
        },
        K: {
          label: "Potassium",
          quantity: 1120.4014458867846,
          unit: "mg",
        },
        FE: {
          label: "Iron",
          quantity: 9.978847142829867,
          unit: "mg",
        },
        ZN: {
          label: "Zinc",
          quantity: 7.3383430735848085,
          unit: "mg",
        },
        P: {
          label: "Phosphorus",
          quantity: 983.28,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 0,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 0,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 1.605,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 0.49740000000000006,
          unit: "mg",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 17.214149999999997,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 0.9906149999999999,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 259.56,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate (food)",
          quantity: 259.56,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 0,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 0,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 0,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 11.61,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 46.764,
          unit: "µg",
        },
        "Sugar.alcohol": {
          label: "Sugar alcohol",
          quantity: 0,
          unit: "g",
        },
        WATER: {
          label: "Water",
          quantity: 287.84213614716964,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 107.51399999999998,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 121.73884615384617,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 55.45754999999999,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 103.99504999999999,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 116.118,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 111.08279999999999,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 0,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 71.65385250000001,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 11.2669337660354,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 87.32117398472575,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 23.838328635889035,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 55.43803968238815,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 66.71220975986189,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 140.46857142857144,
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
          quantity: 133.75,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 38.261538461538464,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 107.58843749999998,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 76.20115384615384,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 64.89,
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
          quantity: 77.4,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 38.970000000000006,
          unit: "%",
        },
      },
      digest: [
        {
          label: "Fat",
          tag: "FAT",
          schemaOrgTag: "fatContent",
          total: 79.13025,
          hasRDI: true,
          daily: 121.73884615384617,
          unit: "g",
          sub: [
            {
              label: "Saturated",
              tag: "FASAT",
              schemaOrgTag: "saturatedFatContent",
              total: 11.09151,
              hasRDI: true,
              daily: 55.45754999999999,
              unit: "g",
            },
            {
              label: "Trans",
              tag: "FATRN",
              schemaOrgTag: "transFatContent",
              total: 0,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Monounsaturated",
              tag: "FAMS",
              schemaOrgTag: null,
              total: 53.35194,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Polyunsaturated",
              tag: "FAPU",
              schemaOrgTag: null,
              total: 10.75431,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
          ],
        },
        {
          label: "Carbs",
          tag: "CHOCDF",
          schemaOrgTag: "carbohydrateContent",
          total: 311.98515,
          hasRDI: true,
          daily: 103.99504999999999,
          unit: "g",
          sub: [
            {
              label: "Carbs (net)",
              tag: "CHOCDF.net",
              schemaOrgTag: null,
              total: 282.95565,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Fiber",
              tag: "FIBTG",
              schemaOrgTag: "fiberContent",
              total: 29.0295,
              hasRDI: true,
              daily: 116.118,
              unit: "g",
            },
            {
              label: "Sugars",
              tag: "SUGAR",
              schemaOrgTag: "sugarContent",
              total: 0.738,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Sugars, added",
              tag: "SUGAR.added",
              schemaOrgTag: null,
              total: 0,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
          ],
        },
        {
          label: "Protein",
          tag: "PROCNT",
          schemaOrgTag: "proteinContent",
          total: 55.541399999999996,
          hasRDI: true,
          daily: 111.08279999999999,
          unit: "g",
        },
        {
          label: "Cholesterol",
          tag: "CHOLE",
          schemaOrgTag: "cholesterolContent",
          total: 0,
          hasRDI: true,
          daily: 0,
          unit: "mg",
        },
        {
          label: "Sodium",
          tag: "NA",
          schemaOrgTag: "sodiumContent",
          total: 1719.6924600000004,
          hasRDI: true,
          daily: 71.65385250000001,
          unit: "mg",
        },
        {
          label: "Calcium",
          tag: "CA",
          schemaOrgTag: null,
          total: 112.66933766035399,
          hasRDI: true,
          daily: 11.2669337660354,
          unit: "mg",
        },
        {
          label: "Magnesium",
          tag: "MG",
          schemaOrgTag: null,
          total: 366.7489307358481,
          hasRDI: true,
          daily: 87.32117398472575,
          unit: "mg",
        },
        {
          label: "Potassium",
          tag: "K",
          schemaOrgTag: null,
          total: 1120.4014458867846,
          hasRDI: true,
          daily: 23.838328635889035,
          unit: "mg",
        },
        {
          label: "Iron",
          tag: "FE",
          schemaOrgTag: null,
          total: 9.978847142829867,
          hasRDI: true,
          daily: 55.43803968238815,
          unit: "mg",
        },
        {
          label: "Zinc",
          tag: "ZN",
          schemaOrgTag: null,
          total: 7.3383430735848085,
          hasRDI: true,
          daily: 66.71220975986189,
          unit: "mg",
        },
        {
          label: "Phosphorus",
          tag: "P",
          schemaOrgTag: null,
          total: 983.28,
          hasRDI: true,
          daily: 140.46857142857144,
          unit: "mg",
        },
        {
          label: "Vitamin A",
          tag: "VITA_RAE",
          schemaOrgTag: null,
          total: 0,
          hasRDI: true,
          daily: 0,
          unit: "µg",
        },
        {
          label: "Vitamin C",
          tag: "VITC",
          schemaOrgTag: null,
          total: 0,
          hasRDI: true,
          daily: 0,
          unit: "mg",
        },
        {
          label: "Thiamin (B1)",
          tag: "THIA",
          schemaOrgTag: null,
          total: 1.605,
          hasRDI: true,
          daily: 133.75,
          unit: "mg",
        },
        {
          label: "Riboflavin (B2)",
          tag: "RIBF",
          schemaOrgTag: null,
          total: 0.49740000000000006,
          hasRDI: true,
          daily: 38.261538461538464,
          unit: "mg",
        },
        {
          label: "Niacin (B3)",
          tag: "NIA",
          schemaOrgTag: null,
          total: 17.214149999999997,
          hasRDI: true,
          daily: 107.58843749999998,
          unit: "mg",
        },
        {
          label: "Vitamin B6",
          tag: "VITB6A",
          schemaOrgTag: null,
          total: 0.9906149999999999,
          hasRDI: true,
          daily: 76.20115384615384,
          unit: "mg",
        },
        {
          label: "Folate equivalent (total)",
          tag: "FOLDFE",
          schemaOrgTag: null,
          total: 259.56,
          hasRDI: true,
          daily: 64.89,
          unit: "µg",
        },
        {
          label: "Folate (food)",
          tag: "FOLFD",
          schemaOrgTag: null,
          total: 259.56,
          hasRDI: false,
          daily: 0,
          unit: "µg",
        },
        {
          label: "Folic acid",
          tag: "FOLAC",
          schemaOrgTag: null,
          total: 0,
          hasRDI: false,
          daily: 0,
          unit: "µg",
        },
        {
          label: "Vitamin B12",
          tag: "VITB12",
          schemaOrgTag: null,
          total: 0,
          hasRDI: true,
          daily: 0,
          unit: "µg",
        },
        {
          label: "Vitamin D",
          tag: "VITD",
          schemaOrgTag: null,
          total: 0,
          hasRDI: true,
          daily: 0,
          unit: "µg",
        },
        {
          label: "Vitamin E",
          tag: "TOCPHA",
          schemaOrgTag: null,
          total: 11.61,
          hasRDI: true,
          daily: 77.4,
          unit: "mg",
        },
        {
          label: "Vitamin K",
          tag: "VITK1",
          schemaOrgTag: null,
          total: 46.764,
          hasRDI: true,
          daily: 38.970000000000006,
          unit: "µg",
        },
        {
          label: "Sugar alcohols",
          tag: "Sugar.alcohol",
          schemaOrgTag: null,
          total: 0,
          hasRDI: false,
          daily: 0,
          unit: "g",
        },
        {
          label: "Water",
          tag: "WATER",
          schemaOrgTag: null,
          total: 287.84213614716964,
          hasRDI: false,
          daily: 0,
          unit: "g",
        },
      ],
    },
    _links: {
      self: {
        title: "Self",
        href: "https://api.edamam.com/api/recipes/v2/5deb035300431c30319d1f77afdefa89?type=public&app_id=de511dc8&app_key=3f9639bae8563438d47729b156a7b78a",
      },
    },
  },
  {
    recipe: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_6c12ab2f1c225dc7414fc88c81809964",
      label: "Marlene’s Yorkshire Pudding",
      image:
        "https://edamam-product-images.s3.amazonaws.com/web-img/4b2/4b27fce9dfb489b705ac8cd3a5c91374.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e013a97d1703dd090bbec2533994bc79a16a45f1861b5858a4668867f25b864e",
      images: {
        THUMBNAIL: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/4b2/4b27fce9dfb489b705ac8cd3a5c91374-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=257b2bbe9f453cfb4694e7f8572780678c9a34baba93a679230c17cd2e384bd5",
          width: 100,
          height: 100,
        },
        SMALL: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/4b2/4b27fce9dfb489b705ac8cd3a5c91374-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e9a4ccca64dcf0c72be50e19194746dbcd1520b0f289ab338deb1321c010612b",
          width: 200,
          height: 200,
        },
        REGULAR: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/4b2/4b27fce9dfb489b705ac8cd3a5c91374.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e013a97d1703dd090bbec2533994bc79a16a45f1861b5858a4668867f25b864e",
          width: 300,
          height: 300,
        },
        LARGE: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/4b2/4b27fce9dfb489b705ac8cd3a5c91374-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=005d1e3c4ab5cd27c2a071ebeb80e172bc21d01b2c8bb2c61c7e28f91650e2a2",
          width: 600,
          height: 600,
        },
      },
      source: "Ruhlman",
      url: "http://ruhlman.com/2011/12/christmas-yorkshire-pudding/",
      shareAs:
        "http://www.edamam.com/recipe/marlene-s-yorkshire-pudding-6c12ab2f1c225dc7414fc88c81809964/-/alcohol-free/balanced",
      yield: 6,
      dietLabels: ["Balanced", "Low-Sodium"],
      healthLabels: [
        "Sugar-Conscious",
        "Low Potassium",
        "Kidney-Friendly",
        "Peanut-Free",
        "Tree-Nut-Free",
        "Soy-Free",
        "Fish-Free",
        "Shellfish-Free",
        "Pork-Free",
        "Crustacean-Free",
        "Celery-Free",
        "Sesame-Free",
        "Lupine-Free",
        "Mollusk-Free",
        "Alcohol-Free",
        "Sulfite-Free",
        "Kosher",
      ],
      cautions: [],
      ingredientLines: [
        "1 cup/140 grams all purpose flour",
        "1 teaspoon mustard powder",
        "4 or 5 large eggs, enough to make 1 cup",
        "1 cup/250 milliliters whole milk",
        "6 teaspoons vegetable oil or beef fat drippings",
      ],
      ingredients: [
        {
          text: "1 cup/140 grams all purpose flour",
          quantity: 140,
          measure: "gram",
          food: "all purpose flour",
          weight: 140,
          foodCategory: "grains",
          foodId: "food_ar3x97tbq9o9p6b6gzwj0am0c81l",
          image:
            "https://www.edamam.com/food-img/368/368077bbcab62f862a8c766a56ea5dd1.jpg",
        },
        {
          text: "1 teaspoon mustard powder",
          quantity: 1,
          measure: "teaspoon",
          food: "mustard powder",
          weight: 2,
          foodCategory: "Condiments and sauces",
          foodId: "food_b0xqxo3a93nsz8a6ppdilau4ujwt",
          image:
            "https://www.edamam.com/food-img/9ff/9ff9e6d04cbc71ff884f3212afa0adfd.jpg",
        },
        {
          text: "4 or 5 large eggs, enough to make 1 cup",
          quantity: 4.5,
          measure: "<unit>",
          food: "eggs",
          weight: 225,
          foodCategory: "Eggs",
          foodId: "food_bhpradua77pk16aipcvzeayg732r",
          image:
            "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg",
        },
        {
          text: "1 cup/250 milliliters whole milk",
          quantity: 250,
          measure: "milliliter",
          food: "whole milk",
          weight: 257.83192310155283,
          foodCategory: "Milk",
          foodId: "food_b49rs1kaw0jktabzkg2vvanvvsis",
          image:
            "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg",
        },
        {
          text: "6 teaspoons vegetable oil or beef fat drippings",
          quantity: 6,
          measure: "teaspoon",
          food: "vegetable oil",
          weight: 28.000000001893586,
          foodCategory: "Oils",
          foodId: "food_bt1mzi2ah2sfg8bv7no1qai83w8s",
          image:
            "https://www.edamam.com/food-img/6e5/6e51a63a6300a8ea1b4c4cc68dfaba33.jpg",
        },
      ],
      calories: 1246.3074731086865,
      totalWeight: 652.8319231034463,
      totalTime: 0,
      cuisineType: ["british"],
      mealType: ["lunch/dinner"],
      dishType: ["desserts"],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 1246.3074731086865,
          unit: "kcal",
        },
        FAT: {
          label: "Fat",
          quantity: 59.87383750269406,
          unit: "g",
        },
        FASAT: {
          label: "Saturated",
          quantity: 13.921925365967251,
          unit: "g",
        },
        FATRN: {
          label: "Trans",
          quantity: 0.3002600000145238,
          unit: "g",
        },
        FAMS: {
          label: "Monounsaturated",
          quantity: 31.05373521694782,
          unit: "g",
        },
        FAPU: {
          label: "Polyunsaturated",
          quantity: 10.369922250371793,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 121.39173230887457,
          unit: "g",
        },
        "CHOCDF.net": {
          label: "Carbohydrates (net)",
          quantity: 117.36773230887457,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 4.024000000000001,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars",
          quantity: 14.366812116628418,
          unit: "g",
        },
        "SUGAR.added": {
          label: "Sugars, added",
          quantity: 0,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 51.36530557769892,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 862.7831923101553,
          unit: "mg",
        },
        NA: {
          label: "Sodium",
          quantity: 433.4277269336677,
          unit: "mg",
        },
        CA: {
          label: "Calcium",
          quantity: 443.6700731047547,
          unit: "mg",
        },
        MG: {
          label: "Magnesium",
          quantity: 90.98319231015529,
          unit: "mg",
        },
        K: {
          label: "Potassium",
          quantity: 815.3981384940498,
          unit: "mg",
        },
        FE: {
          label: "Iron",
          quantity: 10.695049576930465,
          unit: "mg",
        },
        ZN: {
          label: "Zinc",
          quantity: 4.958078115475745,
          unit: "mg",
        },
        P: {
          label: "Phosphorus",
          quantity: 829.8388154053043,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 478.6426846267143,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 0.142,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 1.3237026846267146,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 2.1608059500416243,
          unit: "mg",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 8.758480411560381,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 0.5448594923165591,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 529.2815961550778,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate (food)",
          quantity: 162.48159615507765,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 215.60000000000002,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 3.162743653956988,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 7.851815000320187,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 9.070382346583889,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 1.9764957693046585,
          unit: "µg",
        },
        "Sugar.alcohol": {
          label: "Sugar alcohol",
          quantity: 0,
          unit: "g",
        },
        WATER: {
          label: "Water",
          quantity: 415.35817382939854,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 62.31537365543433,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 92.11359615799086,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 69.60962682983626,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 40.46391076962485,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 16.096000000000004,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 102.73061115539784,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 287.59439743671845,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 18.059488622236156,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 44.36700731047547,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 21.662664835751258,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 17.348896563703185,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 59.416942094058136,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 45.07343741341586,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 118.54840220075776,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 53.18252051407937,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 0.15777777777777777,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 110.3085570522262,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 166.21584231089417,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 54.74050257225238,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 41.91226863973531,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 132.32039903876944,
          unit: "%",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 131.78098558154116,
          unit: "%",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 52.34543333546791,
          unit: "%",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 60.46921564389259,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 1.6470798077538822,
          unit: "%",
        },
      },
      digest: [
        {
          label: "Fat",
          tag: "FAT",
          schemaOrgTag: "fatContent",
          total: 59.87383750269406,
          hasRDI: true,
          daily: 92.11359615799086,
          unit: "g",
          sub: [
            {
              label: "Saturated",
              tag: "FASAT",
              schemaOrgTag: "saturatedFatContent",
              total: 13.921925365967251,
              hasRDI: true,
              daily: 69.60962682983626,
              unit: "g",
            },
            {
              label: "Trans",
              tag: "FATRN",
              schemaOrgTag: "transFatContent",
              total: 0.3002600000145238,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Monounsaturated",
              tag: "FAMS",
              schemaOrgTag: null,
              total: 31.05373521694782,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Polyunsaturated",
              tag: "FAPU",
              schemaOrgTag: null,
              total: 10.369922250371793,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
          ],
        },
        {
          label: "Carbs",
          tag: "CHOCDF",
          schemaOrgTag: "carbohydrateContent",
          total: 121.39173230887457,
          hasRDI: true,
          daily: 40.46391076962485,
          unit: "g",
          sub: [
            {
              label: "Carbs (net)",
              tag: "CHOCDF.net",
              schemaOrgTag: null,
              total: 117.36773230887457,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Fiber",
              tag: "FIBTG",
              schemaOrgTag: "fiberContent",
              total: 4.024000000000001,
              hasRDI: true,
              daily: 16.096000000000004,
              unit: "g",
            },
            {
              label: "Sugars",
              tag: "SUGAR",
              schemaOrgTag: "sugarContent",
              total: 14.366812116628418,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Sugars, added",
              tag: "SUGAR.added",
              schemaOrgTag: null,
              total: 0,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
          ],
        },
        {
          label: "Protein",
          tag: "PROCNT",
          schemaOrgTag: "proteinContent",
          total: 51.36530557769892,
          hasRDI: true,
          daily: 102.73061115539784,
          unit: "g",
        },
        {
          label: "Cholesterol",
          tag: "CHOLE",
          schemaOrgTag: "cholesterolContent",
          total: 862.7831923101553,
          hasRDI: true,
          daily: 287.59439743671845,
          unit: "mg",
        },
        {
          label: "Sodium",
          tag: "NA",
          schemaOrgTag: "sodiumContent",
          total: 433.4277269336677,
          hasRDI: true,
          daily: 18.059488622236156,
          unit: "mg",
        },
        {
          label: "Calcium",
          tag: "CA",
          schemaOrgTag: null,
          total: 443.6700731047547,
          hasRDI: true,
          daily: 44.36700731047547,
          unit: "mg",
        },
        {
          label: "Magnesium",
          tag: "MG",
          schemaOrgTag: null,
          total: 90.98319231015529,
          hasRDI: true,
          daily: 21.662664835751258,
          unit: "mg",
        },
        {
          label: "Potassium",
          tag: "K",
          schemaOrgTag: null,
          total: 815.3981384940498,
          hasRDI: true,
          daily: 17.348896563703185,
          unit: "mg",
        },
        {
          label: "Iron",
          tag: "FE",
          schemaOrgTag: null,
          total: 10.695049576930465,
          hasRDI: true,
          daily: 59.416942094058136,
          unit: "mg",
        },
        {
          label: "Zinc",
          tag: "ZN",
          schemaOrgTag: null,
          total: 4.958078115475745,
          hasRDI: true,
          daily: 45.07343741341586,
          unit: "mg",
        },
        {
          label: "Phosphorus",
          tag: "P",
          schemaOrgTag: null,
          total: 829.8388154053043,
          hasRDI: true,
          daily: 118.54840220075776,
          unit: "mg",
        },
        {
          label: "Vitamin A",
          tag: "VITA_RAE",
          schemaOrgTag: null,
          total: 478.6426846267143,
          hasRDI: true,
          daily: 53.18252051407937,
          unit: "µg",
        },
        {
          label: "Vitamin C",
          tag: "VITC",
          schemaOrgTag: null,
          total: 0.142,
          hasRDI: true,
          daily: 0.15777777777777777,
          unit: "mg",
        },
        {
          label: "Thiamin (B1)",
          tag: "THIA",
          schemaOrgTag: null,
          total: 1.3237026846267146,
          hasRDI: true,
          daily: 110.3085570522262,
          unit: "mg",
        },
        {
          label: "Riboflavin (B2)",
          tag: "RIBF",
          schemaOrgTag: null,
          total: 2.1608059500416243,
          hasRDI: true,
          daily: 166.21584231089417,
          unit: "mg",
        },
        {
          label: "Niacin (B3)",
          tag: "NIA",
          schemaOrgTag: null,
          total: 8.758480411560381,
          hasRDI: true,
          daily: 54.74050257225238,
          unit: "mg",
        },
        {
          label: "Vitamin B6",
          tag: "VITB6A",
          schemaOrgTag: null,
          total: 0.5448594923165591,
          hasRDI: true,
          daily: 41.91226863973531,
          unit: "mg",
        },
        {
          label: "Folate equivalent (total)",
          tag: "FOLDFE",
          schemaOrgTag: null,
          total: 529.2815961550778,
          hasRDI: true,
          daily: 132.32039903876944,
          unit: "µg",
        },
        {
          label: "Folate (food)",
          tag: "FOLFD",
          schemaOrgTag: null,
          total: 162.48159615507765,
          hasRDI: false,
          daily: 0,
          unit: "µg",
        },
        {
          label: "Folic acid",
          tag: "FOLAC",
          schemaOrgTag: null,
          total: 215.60000000000002,
          hasRDI: false,
          daily: 0,
          unit: "µg",
        },
        {
          label: "Vitamin B12",
          tag: "VITB12",
          schemaOrgTag: null,
          total: 3.162743653956988,
          hasRDI: true,
          daily: 131.78098558154116,
          unit: "µg",
        },
        {
          label: "Vitamin D",
          tag: "VITD",
          schemaOrgTag: null,
          total: 7.851815000320187,
          hasRDI: true,
          daily: 52.34543333546791,
          unit: "µg",
        },
        {
          label: "Vitamin E",
          tag: "TOCPHA",
          schemaOrgTag: null,
          total: 9.070382346583889,
          hasRDI: true,
          daily: 60.46921564389259,
          unit: "mg",
        },
        {
          label: "Vitamin K",
          tag: "VITK1",
          schemaOrgTag: null,
          total: 1.9764957693046585,
          hasRDI: true,
          daily: 1.6470798077538822,
          unit: "µg",
        },
        {
          label: "Sugar alcohols",
          tag: "Sugar.alcohol",
          schemaOrgTag: null,
          total: 0,
          hasRDI: false,
          daily: 0,
          unit: "g",
        },
        {
          label: "Water",
          tag: "WATER",
          schemaOrgTag: null,
          total: 415.35817382939854,
          hasRDI: false,
          daily: 0,
          unit: "g",
        },
      ],
    },
    _links: {
      self: {
        title: "Self",
        href: "https://api.edamam.com/api/recipes/v2/6c12ab2f1c225dc7414fc88c81809964?type=public&app_id=de511dc8&app_key=3f9639bae8563438d47729b156a7b78a",
      },
    },
  },
  {
    recipe: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_7a17e0e0d25099c448d2381a719a80df",
      label: "Chinese Five Spice Powder",
      image:
        "https://edamam-product-images.s3.amazonaws.com/web-img/d15/d15eb0a51a9ee6c744ad11237dacb0dc.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=23beec3dc707ccccd6a2d51de1fc8dbc211fc0351ff25ab5b458c3e4e9ba8564",
      images: {
        THUMBNAIL: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/d15/d15eb0a51a9ee6c744ad11237dacb0dc-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=bd4ed26757b7efb9896ead1744a5c33de019a0d98a06886898b6ecc23c15ffaf",
          width: 100,
          height: 100,
        },
        SMALL: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/d15/d15eb0a51a9ee6c744ad11237dacb0dc-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2128e2b2ac05998d449b57c7b6a854a97d444f2b74df708733e11e7ee2d46ee5",
          width: 200,
          height: 200,
        },
        REGULAR: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/d15/d15eb0a51a9ee6c744ad11237dacb0dc.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=23beec3dc707ccccd6a2d51de1fc8dbc211fc0351ff25ab5b458c3e4e9ba8564",
          width: 300,
          height: 300,
        },
        LARGE: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/d15/d15eb0a51a9ee6c744ad11237dacb0dc-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b56e04bfa98688103d479cb510514046ee87368aad6912629a88cd20471722bf",
          width: 600,
          height: 600,
        },
      },
      source: "No Recipes",
      url: "http://norecipes.com/blog/2008/12/09/chinese-five-spice-powder/",
      shareAs:
        "http://www.edamam.com/recipe/chinese-five-spice-powder-7a17e0e0d25099c448d2381a719a80df/-/alcohol-free/balanced",
      yield: 2,
      dietLabels: ["Balanced", "Low-Sodium"],
      healthLabels: [
        "Sugar-Conscious",
        "Low Potassium",
        "Kidney-Friendly",
        "Keto-Friendly",
        "Vegan",
        "Vegetarian",
        "Pescatarian",
        "Paleo",
        "Mediterranean",
        "DASH",
        "Dairy-Free",
        "Gluten-Free",
        "Wheat-Free",
        "Egg-Free",
        "Peanut-Free",
        "Tree-Nut-Free",
        "Soy-Free",
        "Fish-Free",
        "Shellfish-Free",
        "Pork-Free",
        "Red-Meat-Free",
        "Crustacean-Free",
        "Celery-Free",
        "Mustard-Free",
        "Sesame-Free",
        "Lupine-Free",
        "Mollusk-Free",
        "Alcohol-Free",
        "No oil added",
        "Sulfite-Free",
        "FODMAP-Free",
        "Kosher",
      ],
      cautions: [],
      ingredientLines: [
        "3 pieces whole star anise",
        "20 cloves",
        "3″ long piece of Vietnamese cinnamon (or other Cassia bark)",
        "1 Tbs Sichuan pepper (husks only, the black seeds are gritty)",
        "1 tsp cumin",
        "1/4 tsp white peppercorns",
      ],
      ingredients: [
        {
          text: "3 pieces whole star anise",
          quantity: 3,
          measure: "piece",
          food: "star anise",
          weight: 6,
          foodCategory: "Condiments and sauces",
          foodId: "food_beyvheuancih87bwyqk6yb4av11q",
          image:
            "https://www.edamam.com/food-img/bea/bea10bb0afae1e498edadf0aa1be805e.jpg",
        },
        {
          text: "20 cloves",
          quantity: 20,
          measure: "<unit>",
          food: "cloves",
          weight: 3,
          foodCategory: "Condiments and sauces",
          foodId: "food_abb00nxbw761ggavcuto7b3mw1s0",
          image:
            "https://www.edamam.com/food-img/8bc/8bc63f9742815a245d37e5f346674ca4.jpg",
        },
        {
          text: "3″ long piece of Vietnamese cinnamon (or other Cassia bark)",
          quantity: 3,
          measure: "piece",
          food: "cinnamon",
          weight: 7.800000000000001,
          foodCategory: "Condiments and sauces",
          foodId: "food_atjxtznauw5zabaixm24xa787onz",
          image:
            "https://www.edamam.com/food-img/d4d/d4daa18b92c596a1c99c08537c38e65b.jpg",
        },
        {
          text: "1 Tbs Sichuan pepper (husks only, the black seeds are gritty)",
          quantity: 1,
          measure: "tablespoon",
          food: "Sichuan pepper",
          weight: 5.3,
          foodCategory: "Condiments and sauces",
          foodId: "food_beml4s1aonwfqhbjeb8ggb7li7j5",
          image:
            "https://www.edamam.com/food-img/374/3742b9434a0fb66a45e0dd6d227ba669.jpg",
        },
        {
          text: "1 tsp cumin",
          quantity: 1,
          measure: "teaspoon",
          food: "cumin",
          weight: 2.1,
          foodCategory: "Condiments and sauces",
          foodId: "food_a8jjbx4biqndasapojdb5by3e92e",
          image:
            "https://www.edamam.com/food-img/07e/07e2a4eb77ce46591033846504817d35.jpg",
        },
        {
          text: "1/4 tsp white peppercorns",
          quantity: 0.25,
          measure: "teaspoon",
          food: "white peppercorns",
          weight: 0.6,
          foodCategory: "Condiments and sauces",
          foodId: "food_a443px0bncpqa5avv80p3anrp26k",
          image:
            "https://www.edamam.com/food-img/4f0/4f0e35fe6c042996408b337fb550324a.jpg",
        },
      ],
      calories: 74.211,
      totalWeight: 24.800000000000004,
      totalTime: 0,
      cuisineType: ["chinese"],
      mealType: ["lunch/dinner"],
      dishType: ["condiments and sauces"],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 74.211,
          unit: "kcal",
        },
        FAT: {
          label: "Fat",
          quantity: 2.8364199999999995,
          unit: "g",
        },
        FASAT: {
          label: "Saturated",
          quantity: 0.389401,
          unit: "g",
        },
        FATRN: {
          label: "Trans",
          quantity: 0.00762,
          unit: "g",
        },
        FAMS: {
          label: "Monounsaturated",
          quantity: 1.093102,
          unit: "g",
        },
        FAPU: {
          label: "Polyunsaturated",
          quantity: 0.818649,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 15.595210000000003,
          unit: "g",
        },
        "CHOCDF.net": {
          label: "Carbohydrates (net)",
          quantity: 7.741110000000003,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 7.854100000000001,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars",
          quantity: 0.83593,
          unit: "g",
        },
        "SUGAR.added": {
          label: "Sugars, added",
          quantity: 0,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 2.61926,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 0,
          unit: "mg",
        },
        NA: {
          label: "Sodium",
          quantity: 15.197999999999999,
          unit: "mg",
        },
        CA: {
          label: "Calcium",
          quantity: 164.86100000000002,
          unit: "mg",
        },
        MG: {
          label: "Magnesium",
          quantity: 38.931999999999995,
          unit: "mg",
        },
        K: {
          label: "Potassium",
          quantity: 295.40599999999995,
          unit: "mg",
        },
        FE: {
          label: "Iron",
          quantity: 5.11428,
          unit: "mg",
        },
        ZN: {
          label: "Zinc",
          quantity: 0.76936,
          unit: "mg",
        },
        P: {
          label: "Phosphorus",
          quantity: 61.57599999999999,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 114.00699999999999,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 5.8993,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 0.05756,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 0.083528,
          unit: "mg",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 0.8928800000000001,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 0.20263899999999999,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 7.7059999999999995,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate (food)",
          quantity: 7.7059999999999995,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 0,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 0,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 0,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 2.0964799999999997,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 11.0569,
          unit: "µg",
        },
        "Sugar.alcohol": {
          label: "Sugar alcohol",
          quantity: 0,
          unit: "g",
        },
        WATER: {
          label: "Water",
          quantity: 2.35817,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 3.7105499999999996,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 4.363723076923076,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 1.947005,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 5.198403333333335,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 31.416400000000003,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 5.238519999999999,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 0,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 0.63325,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 16.4861,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 9.269523809523808,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 6.28523404255319,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 28.412666666666667,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 6.9941818181818185,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 8.796571428571427,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 12.667444444444444,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 6.554777777777779,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 4.796666666666667,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 6.425230769230769,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 5.580500000000001,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 15.587615384615384,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 1.9264999999999999,
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
          quantity: 13.97653333333333,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 9.214083333333333,
          unit: "%",
        },
      },
      digest: [
        {
          label: "Fat",
          tag: "FAT",
          schemaOrgTag: "fatContent",
          total: 2.8364199999999995,
          hasRDI: true,
          daily: 4.363723076923076,
          unit: "g",
          sub: [
            {
              label: "Saturated",
              tag: "FASAT",
              schemaOrgTag: "saturatedFatContent",
              total: 0.389401,
              hasRDI: true,
              daily: 1.947005,
              unit: "g",
            },
            {
              label: "Trans",
              tag: "FATRN",
              schemaOrgTag: "transFatContent",
              total: 0.00762,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Monounsaturated",
              tag: "FAMS",
              schemaOrgTag: null,
              total: 1.093102,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Polyunsaturated",
              tag: "FAPU",
              schemaOrgTag: null,
              total: 0.818649,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
          ],
        },
        {
          label: "Carbs",
          tag: "CHOCDF",
          schemaOrgTag: "carbohydrateContent",
          total: 15.595210000000003,
          hasRDI: true,
          daily: 5.198403333333335,
          unit: "g",
          sub: [
            {
              label: "Carbs (net)",
              tag: "CHOCDF.net",
              schemaOrgTag: null,
              total: 7.741110000000003,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Fiber",
              tag: "FIBTG",
              schemaOrgTag: "fiberContent",
              total: 7.854100000000001,
              hasRDI: true,
              daily: 31.416400000000003,
              unit: "g",
            },
            {
              label: "Sugars",
              tag: "SUGAR",
              schemaOrgTag: "sugarContent",
              total: 0.83593,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Sugars, added",
              tag: "SUGAR.added",
              schemaOrgTag: null,
              total: 0,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
          ],
        },
        {
          label: "Protein",
          tag: "PROCNT",
          schemaOrgTag: "proteinContent",
          total: 2.61926,
          hasRDI: true,
          daily: 5.238519999999999,
          unit: "g",
        },
        {
          label: "Cholesterol",
          tag: "CHOLE",
          schemaOrgTag: "cholesterolContent",
          total: 0,
          hasRDI: true,
          daily: 0,
          unit: "mg",
        },
        {
          label: "Sodium",
          tag: "NA",
          schemaOrgTag: "sodiumContent",
          total: 15.197999999999999,
          hasRDI: true,
          daily: 0.63325,
          unit: "mg",
        },
        {
          label: "Calcium",
          tag: "CA",
          schemaOrgTag: null,
          total: 164.86100000000002,
          hasRDI: true,
          daily: 16.4861,
          unit: "mg",
        },
        {
          label: "Magnesium",
          tag: "MG",
          schemaOrgTag: null,
          total: 38.931999999999995,
          hasRDI: true,
          daily: 9.269523809523808,
          unit: "mg",
        },
        {
          label: "Potassium",
          tag: "K",
          schemaOrgTag: null,
          total: 295.40599999999995,
          hasRDI: true,
          daily: 6.28523404255319,
          unit: "mg",
        },
        {
          label: "Iron",
          tag: "FE",
          schemaOrgTag: null,
          total: 5.11428,
          hasRDI: true,
          daily: 28.412666666666667,
          unit: "mg",
        },
        {
          label: "Zinc",
          tag: "ZN",
          schemaOrgTag: null,
          total: 0.76936,
          hasRDI: true,
          daily: 6.9941818181818185,
          unit: "mg",
        },
        {
          label: "Phosphorus",
          tag: "P",
          schemaOrgTag: null,
          total: 61.57599999999999,
          hasRDI: true,
          daily: 8.796571428571427,
          unit: "mg",
        },
        {
          label: "Vitamin A",
          tag: "VITA_RAE",
          schemaOrgTag: null,
          total: 114.00699999999999,
          hasRDI: true,
          daily: 12.667444444444444,
          unit: "µg",
        },
        {
          label: "Vitamin C",
          tag: "VITC",
          schemaOrgTag: null,
          total: 5.8993,
          hasRDI: true,
          daily: 6.554777777777779,
          unit: "mg",
        },
        {
          label: "Thiamin (B1)",
          tag: "THIA",
          schemaOrgTag: null,
          total: 0.05756,
          hasRDI: true,
          daily: 4.796666666666667,
          unit: "mg",
        },
        {
          label: "Riboflavin (B2)",
          tag: "RIBF",
          schemaOrgTag: null,
          total: 0.083528,
          hasRDI: true,
          daily: 6.425230769230769,
          unit: "mg",
        },
        {
          label: "Niacin (B3)",
          tag: "NIA",
          schemaOrgTag: null,
          total: 0.8928800000000001,
          hasRDI: true,
          daily: 5.580500000000001,
          unit: "mg",
        },
        {
          label: "Vitamin B6",
          tag: "VITB6A",
          schemaOrgTag: null,
          total: 0.20263899999999999,
          hasRDI: true,
          daily: 15.587615384615384,
          unit: "mg",
        },
        {
          label: "Folate equivalent (total)",
          tag: "FOLDFE",
          schemaOrgTag: null,
          total: 7.7059999999999995,
          hasRDI: true,
          daily: 1.9264999999999999,
          unit: "µg",
        },
        {
          label: "Folate (food)",
          tag: "FOLFD",
          schemaOrgTag: null,
          total: 7.7059999999999995,
          hasRDI: false,
          daily: 0,
          unit: "µg",
        },
        {
          label: "Folic acid",
          tag: "FOLAC",
          schemaOrgTag: null,
          total: 0,
          hasRDI: false,
          daily: 0,
          unit: "µg",
        },
        {
          label: "Vitamin B12",
          tag: "VITB12",
          schemaOrgTag: null,
          total: 0,
          hasRDI: true,
          daily: 0,
          unit: "µg",
        },
        {
          label: "Vitamin D",
          tag: "VITD",
          schemaOrgTag: null,
          total: 0,
          hasRDI: true,
          daily: 0,
          unit: "µg",
        },
        {
          label: "Vitamin E",
          tag: "TOCPHA",
          schemaOrgTag: null,
          total: 2.0964799999999997,
          hasRDI: true,
          daily: 13.97653333333333,
          unit: "mg",
        },
        {
          label: "Vitamin K",
          tag: "VITK1",
          schemaOrgTag: null,
          total: 11.0569,
          hasRDI: true,
          daily: 9.214083333333333,
          unit: "µg",
        },
        {
          label: "Sugar alcohols",
          tag: "Sugar.alcohol",
          schemaOrgTag: null,
          total: 0,
          hasRDI: false,
          daily: 0,
          unit: "g",
        },
        {
          label: "Water",
          tag: "WATER",
          schemaOrgTag: null,
          total: 2.35817,
          hasRDI: false,
          daily: 0,
          unit: "g",
        },
      ],
    },
    _links: {
      self: {
        title: "Self",
        href: "https://api.edamam.com/api/recipes/v2/7a17e0e0d25099c448d2381a719a80df?type=public&app_id=de511dc8&app_key=3f9639bae8563438d47729b156a7b78a",
      },
    },
  },
  {
    recipe: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_a883e3c25e0d7f593a99d5bc3353d354",
      label: "Fiadone",
      image:
        "https://edamam-product-images.s3.amazonaws.com/web-img/a27/a27ff257ebc50d9e7ca2d830a8132a80.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=7f446dce4c82ef07d41b3e199e3a2a63313e34daf49dc8d2aef27e61b005e2d5",
      images: {
        THUMBNAIL: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/a27/a27ff257ebc50d9e7ca2d830a8132a80-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=64a90dc57ba06c9353052f04a8bfc2a42af7e322d3712450a791e1fd4a7c60f9",
          width: 100,
          height: 100,
        },
        SMALL: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/a27/a27ff257ebc50d9e7ca2d830a8132a80-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1f41b3a0a28f560d5917ad9878f661b0be4e6060776cbd0cd0f4b2a7c103099b",
          width: 200,
          height: 200,
        },
        REGULAR: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/a27/a27ff257ebc50d9e7ca2d830a8132a80.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=37f57068b924701f3c56533c6ca319380231a9a1f2e9d0b509bcfdee4a7bc01d",
          width: 300,
          height: 300,
        },
        LARGE: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/a27/a27ff257ebc50d9e7ca2d830a8132a80-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=006eb3fd4df615f8baea508b2a6db5f3ebdf1f11713e02e2c6833485f95eff99",
          width: 600,
          height: 600,
        },
      },
      source: "Tartelette",
      url: "http://www.tarteletteblog.com/2010/11/gluten-free-fiadone-corsican-dessert.html",
      shareAs:
        "http://www.edamam.com/recipe/fiadone-a883e3c25e0d7f593a99d5bc3353d354/-/alcohol-free/balanced",
      yield: 6,
      dietLabels: ["Balanced", "Low-Sodium"],
      healthLabels: [
        "Low Potassium",
        "Kidney-Friendly",
        "Vegetarian",
        "Pescatarian",
        "Gluten-Free",
        "Wheat-Free",
        "Peanut-Free",
        "Tree-Nut-Free",
        "Soy-Free",
        "Fish-Free",
        "Shellfish-Free",
        "Pork-Free",
        "Red-Meat-Free",
        "Crustacean-Free",
        "Celery-Free",
        "Mustard-Free",
        "Sesame-Free",
        "Lupine-Free",
        "Mollusk-Free",
        "Alcohol-Free",
        "No oil added",
        "Kosher",
      ],
      cautions: ["Gluten", "Wheat", "Sulfites"],
      ingredientLines: [
        "1/2 cup sugar",
        "3 eggs",
        "zest of one lemon",
        "1 tablespoon cornstarch",
        "pinch of salt",
        "1 cup drained faisselle or ricotta cheese",
      ],
      ingredients: [
        {
          text: "1/2 cup sugar",
          quantity: 0.5,
          measure: "cup",
          food: "sugar",
          weight: 100,
          foodCategory: "sugars",
          foodId: "food_axi2ijobrk819yb0adceobnhm1c2",
          image:
            "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg",
        },
        {
          text: "3 eggs",
          quantity: 3,
          measure: "<unit>",
          food: "eggs",
          weight: 129,
          foodCategory: "Eggs",
          foodId: "food_bhpradua77pk16aipcvzeayg732r",
          image:
            "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg",
        },
        {
          text: "zest of one lemon",
          quantity: 1,
          measure: "<unit>",
          food: "lemon",
          weight: 58,
          foodCategory: "fruit",
          foodId: "food_a6uzc62astrxcgbtzyq59b6fncrr",
          image:
            "https://www.edamam.com/food-img/70a/70acba3d4c734d7c70ef4efeed85dc8f.jpg",
        },
        {
          text: "1 tablespoon cornstarch",
          quantity: 1,
          measure: "tablespoon",
          food: "cornstarch",
          weight: 7.999999999864745,
          foodCategory: "grains",
          foodId: "food_a6r17hrba37cqeabesko5a2gk233",
          image:
            "https://www.edamam.com/food-img/f9b/f9b74d9495b40c0aea955c37a1fc39dc.jpg",
        },
        {
          text: "pinch of salt",
          quantity: 1,
          measure: "pinch",
          food: "salt",
          weight: 0.380208333815447,
          foodCategory: "Condiments and sauces",
          foodId: "food_btxz81db72hwbra2pncvebzzzum9",
          image:
            "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg",
        },
        {
          text: "1 cup drained faisselle or ricotta cheese",
          quantity: 1,
          measure: "cup",
          food: "ricotta cheese",
          weight: 248,
          foodCategory: "Cheese",
          foodId: "food_ahhgiwga1i8qo9bcvoa6wbi3xybg",
          image:
            "https://www.edamam.com/food-img/fc4/fc42636b63848462aea5f5930c2b6268.jpg",
        },
      ],
      calories: 1050.2899999994847,
      totalWeight: 543.3802083336802,
      totalTime: 0,
      cuisineType: ["italian"],
      mealType: ["lunch/dinner"],
      dishType: ["desserts"],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 1050.2899999994847,
          unit: "kcal",
        },
        FAT: {
          label: "Fat",
          quantity: 44.636299999999935,
          unit: "g",
        },
        FASAT: {
          label: "Saturated",
          quantity: 24.627479999999984,
          unit: "g",
        },
        FATRN: {
          label: "Trans",
          quantity: 0.04902,
          unit: "g",
        },
        FAMS: {
          label: "Monounsaturated",
          quantity: 13.721439999999976,
          unit: "g",
        },
        FAPU: {
          label: "Polyunsaturated",
          quantity: 3.473609999999966,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 121.15519999987656,
          unit: "g",
        },
        "CHOCDF.net": {
          label: "Carbohydrates (net)",
          quantity: 119.4591999998778,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 1.6959999999987825,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars",
          quantity: 102.3969,
          unit: "g",
        },
        "SUGAR.added": {
          label: "Sugars, added",
          quantity: 99.8,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 44.785999999999646,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 606.36,
          unit: "mg",
        },
        NA: {
          label: "Sodium",
          quantity: 541.7411460201788,
          unit: "mg",
        },
        CA: {
          label: "Calcium",
          quantity: 601.931250000113,
          unit: "mg",
        },
        MG: {
          label: "Magnesium",
          quantity: 47.643802083334094,
          unit: "mg",
        },
        K: {
          label: "Potassium",
          quantity: 520.7304166667011,
          unit: "mg",
        },
        FE: {
          label: "Iron",
          quantity: 3.6367546875009555,
          unit: "mg",
        },
        ZN: {
          label: "Zinc",
          quantity: 4.590880208333735,
          unit: "mg",
        },
        P: {
          label: "Phosphorus",
          quantity: 657.5799999999824,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 504.58000000000004,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 30.74,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 0.10704,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 1.10373,
          unit: "mg",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 0.41267,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 0.37234,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 96.77000000000001,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate (food)",
          quantity: 96.77000000000001,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 0,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 1.9913000000000003,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 3.0760000000000005,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 1.7143000000000002,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 3.115,
          unit: "µg",
        },
        "Sugar.alcohol": {
          label: "Sugar alcohol",
          quantity: 0,
          unit: "g",
        },
        WATER: {
          label: "Water",
          quantity: 328.34426041665637,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 52.514499999974234,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 68.67123076923068,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 123.13739999999991,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 40.38506666662552,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 6.783999999995129,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 89.57199999999929,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 202.12,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 22.572547750840783,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 60.1931250000113,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 11.343762400793832,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 11.07937056737662,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 20.204192708338642,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 41.735274621215765,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 93.93999999999748,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 56.064444444444455,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 34.15555555555556,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 8.92,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 84.90230769230769,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 2.5791874999999997,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 28.641538461538463,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 24.192500000000006,
          unit: "%",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 82.97083333333335,
          unit: "%",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 20.506666666666668,
          unit: "%",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 11.428666666666667,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 2.595833333333333,
          unit: "%",
        },
      },
      digest: [
        {
          label: "Fat",
          tag: "FAT",
          schemaOrgTag: "fatContent",
          total: 44.636299999999935,
          hasRDI: true,
          daily: 68.67123076923068,
          unit: "g",
          sub: [
            {
              label: "Saturated",
              tag: "FASAT",
              schemaOrgTag: "saturatedFatContent",
              total: 24.627479999999984,
              hasRDI: true,
              daily: 123.13739999999991,
              unit: "g",
            },
            {
              label: "Trans",
              tag: "FATRN",
              schemaOrgTag: "transFatContent",
              total: 0.04902,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Monounsaturated",
              tag: "FAMS",
              schemaOrgTag: null,
              total: 13.721439999999976,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Polyunsaturated",
              tag: "FAPU",
              schemaOrgTag: null,
              total: 3.473609999999966,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
          ],
        },
        {
          label: "Carbs",
          tag: "CHOCDF",
          schemaOrgTag: "carbohydrateContent",
          total: 121.15519999987656,
          hasRDI: true,
          daily: 40.38506666662552,
          unit: "g",
          sub: [
            {
              label: "Carbs (net)",
              tag: "CHOCDF.net",
              schemaOrgTag: null,
              total: 119.4591999998778,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Fiber",
              tag: "FIBTG",
              schemaOrgTag: "fiberContent",
              total: 1.6959999999987825,
              hasRDI: true,
              daily: 6.783999999995129,
              unit: "g",
            },
            {
              label: "Sugars",
              tag: "SUGAR",
              schemaOrgTag: "sugarContent",
              total: 102.3969,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Sugars, added",
              tag: "SUGAR.added",
              schemaOrgTag: null,
              total: 99.8,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
          ],
        },
        {
          label: "Protein",
          tag: "PROCNT",
          schemaOrgTag: "proteinContent",
          total: 44.785999999999646,
          hasRDI: true,
          daily: 89.57199999999929,
          unit: "g",
        },
        {
          label: "Cholesterol",
          tag: "CHOLE",
          schemaOrgTag: "cholesterolContent",
          total: 606.36,
          hasRDI: true,
          daily: 202.12,
          unit: "mg",
        },
        {
          label: "Sodium",
          tag: "NA",
          schemaOrgTag: "sodiumContent",
          total: 541.7411460201788,
          hasRDI: true,
          daily: 22.572547750840783,
          unit: "mg",
        },
        {
          label: "Calcium",
          tag: "CA",
          schemaOrgTag: null,
          total: 601.931250000113,
          hasRDI: true,
          daily: 60.1931250000113,
          unit: "mg",
        },
        {
          label: "Magnesium",
          tag: "MG",
          schemaOrgTag: null,
          total: 47.643802083334094,
          hasRDI: true,
          daily: 11.343762400793832,
          unit: "mg",
        },
        {
          label: "Potassium",
          tag: "K",
          schemaOrgTag: null,
          total: 520.7304166667011,
          hasRDI: true,
          daily: 11.07937056737662,
          unit: "mg",
        },
        {
          label: "Iron",
          tag: "FE",
          schemaOrgTag: null,
          total: 3.6367546875009555,
          hasRDI: true,
          daily: 20.204192708338642,
          unit: "mg",
        },
        {
          label: "Zinc",
          tag: "ZN",
          schemaOrgTag: null,
          total: 4.590880208333735,
          hasRDI: true,
          daily: 41.735274621215765,
          unit: "mg",
        },
        {
          label: "Phosphorus",
          tag: "P",
          schemaOrgTag: null,
          total: 657.5799999999824,
          hasRDI: true,
          daily: 93.93999999999748,
          unit: "mg",
        },
        {
          label: "Vitamin A",
          tag: "VITA_RAE",
          schemaOrgTag: null,
          total: 504.58000000000004,
          hasRDI: true,
          daily: 56.064444444444455,
          unit: "µg",
        },
        {
          label: "Vitamin C",
          tag: "VITC",
          schemaOrgTag: null,
          total: 30.74,
          hasRDI: true,
          daily: 34.15555555555556,
          unit: "mg",
        },
        {
          label: "Thiamin (B1)",
          tag: "THIA",
          schemaOrgTag: null,
          total: 0.10704,
          hasRDI: true,
          daily: 8.92,
          unit: "mg",
        },
        {
          label: "Riboflavin (B2)",
          tag: "RIBF",
          schemaOrgTag: null,
          total: 1.10373,
          hasRDI: true,
          daily: 84.90230769230769,
          unit: "mg",
        },
        {
          label: "Niacin (B3)",
          tag: "NIA",
          schemaOrgTag: null,
          total: 0.41267,
          hasRDI: true,
          daily: 2.5791874999999997,
          unit: "mg",
        },
        {
          label: "Vitamin B6",
          tag: "VITB6A",
          schemaOrgTag: null,
          total: 0.37234,
          hasRDI: true,
          daily: 28.641538461538463,
          unit: "mg",
        },
        {
          label: "Folate equivalent (total)",
          tag: "FOLDFE",
          schemaOrgTag: null,
          total: 96.77000000000001,
          hasRDI: true,
          daily: 24.192500000000006,
          unit: "µg",
        },
        {
          label: "Folate (food)",
          tag: "FOLFD",
          schemaOrgTag: null,
          total: 96.77000000000001,
          hasRDI: false,
          daily: 0,
          unit: "µg",
        },
        {
          label: "Folic acid",
          tag: "FOLAC",
          schemaOrgTag: null,
          total: 0,
          hasRDI: false,
          daily: 0,
          unit: "µg",
        },
        {
          label: "Vitamin B12",
          tag: "VITB12",
          schemaOrgTag: null,
          total: 1.9913000000000003,
          hasRDI: true,
          daily: 82.97083333333335,
          unit: "µg",
        },
        {
          label: "Vitamin D",
          tag: "VITD",
          schemaOrgTag: null,
          total: 3.0760000000000005,
          hasRDI: true,
          daily: 20.506666666666668,
          unit: "µg",
        },
        {
          label: "Vitamin E",
          tag: "TOCPHA",
          schemaOrgTag: null,
          total: 1.7143000000000002,
          hasRDI: true,
          daily: 11.428666666666667,
          unit: "mg",
        },
        {
          label: "Vitamin K",
          tag: "VITK1",
          schemaOrgTag: null,
          total: 3.115,
          hasRDI: true,
          daily: 2.595833333333333,
          unit: "µg",
        },
        {
          label: "Sugar alcohols",
          tag: "Sugar.alcohol",
          schemaOrgTag: null,
          total: 0,
          hasRDI: false,
          daily: 0,
          unit: "g",
        },
        {
          label: "Water",
          tag: "WATER",
          schemaOrgTag: null,
          total: 328.34426041665637,
          hasRDI: false,
          daily: 0,
          unit: "g",
        },
      ],
    },
    _links: {
      self: {
        title: "Self",
        href: "https://api.edamam.com/api/recipes/v2/a883e3c25e0d7f593a99d5bc3353d354?type=public&app_id=de511dc8&app_key=3f9639bae8563438d47729b156a7b78a",
      },
    },
  },
  {
    recipe: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_80f9e9d70e7a31d7127c3a292770b896",
      label: "Wooly's Ice's Sea Salt Leche from 'New York a la Cart'",
      image:
        "https://edamam-product-images.s3.amazonaws.com/web-img/601/6011f8b5dbc61c0d1f6a1de059aff18e.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e2660c2e14ebf4d694dc2d8efbd2c10afef052d9e85dff3b481053ba370ef214",
      images: {
        THUMBNAIL: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/601/6011f8b5dbc61c0d1f6a1de059aff18e-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=903aa17930c163732259122b17580ca03270f1aa9867fee6da29039d806ebc24",
          width: 100,
          height: 100,
        },
        SMALL: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/601/6011f8b5dbc61c0d1f6a1de059aff18e-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a458a2a27753c7ff1601de59d77919709eaecefc9f582c80e5ac253c74d49ffa",
          width: 200,
          height: 200,
        },
        REGULAR: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/601/6011f8b5dbc61c0d1f6a1de059aff18e.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e2660c2e14ebf4d694dc2d8efbd2c10afef052d9e85dff3b481053ba370ef214",
          width: 300,
          height: 300,
        },
      },
      source: "Serious Eats",
      url: "http://www.seriouseats.com/recipes/2013/04/woolys-ices-sea-salt-leche-from-new-york-a-la.html",
      shareAs:
        "http://www.edamam.com/recipe/wooly-s-ice-s-sea-salt-leche-from-new-york-a-la-cart-80f9e9d70e7a31d7127c3a292770b896/-/alcohol-free/balanced",
      yield: 6,
      dietLabels: ["Balanced", "Low-Sodium"],
      healthLabels: [
        "Kidney-Friendly",
        "Vegetarian",
        "Pescatarian",
        "Mediterranean",
        "Gluten-Free",
        "Wheat-Free",
        "Egg-Free",
        "Peanut-Free",
        "Tree-Nut-Free",
        "Soy-Free",
        "Fish-Free",
        "Shellfish-Free",
        "Pork-Free",
        "Red-Meat-Free",
        "Crustacean-Free",
        "Celery-Free",
        "Mustard-Free",
        "Sesame-Free",
        "Lupine-Free",
        "Mollusk-Free",
        "Alcohol-Free",
        "No oil added",
        "Sulfite-Free",
        "Kosher",
      ],
      cautions: ["Sulfites"],
      ingredientLines: [
        "1 cup sweetened condensed milk",
        "2 tablespoons evaporated milk",
        "1 teaspoon sea salt",
      ],
      ingredients: [
        {
          text: "1 cup sweetened condensed milk",
          quantity: 1,
          measure: "cup",
          food: "sweetened condensed milk",
          weight: 306,
          foodCategory: "Milk",
          foodId: "food_a89byenbz1jssabxmx7i6aa77jz1",
          image:
            "https://www.edamam.com/food-img/bc9/bc97e9aa15ccef74dbad4d6267e30e3f.jpg",
        },
        {
          text: "2 tablespoons evaporated milk",
          quantity: 2,
          measure: "tablespoon",
          food: "evaporated milk",
          weight: 31.49999999946743,
          foodCategory: "Milk",
          foodId: "food_b5vvoi3bbh7uenae22mbjaz51y79",
          image:
            "https://www.edamam.com/food-img/07a/07a7a508fcf9a2f8ea0f34a493f76529.jpg",
        },
        {
          text: "1 teaspoon sea salt",
          quantity: 1,
          measure: "teaspoon",
          food: "sea salt",
          weight: 4.854166666912875,
          foodCategory: "Condiments and sauces",
          foodId: "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
          image:
            "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg",
        },
      ],
      calories: 1024.4699999992863,
      totalWeight: 338.436166726335,
      totalTime: 5,
      cuisineType: ["american"],
      mealType: ["lunch/dinner"],
      dishType: ["desserts"],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 1024.4699999992863,
          unit: "kcal",
        },
        FAT: {
          label: "Fat",
          quantity: 29.00339999995974,
          unit: "g",
        },
        FASAT: {
          label: "Saturated",
          quantity: 18.23332499997555,
          unit: "g",
        },
        FATRN: {
          label: "Trans",
          quantity: 0,
          unit: "g",
        },
        FAMS: {
          label: "Monounsaturated",
          quantity: 8.162144999987564,
          unit: "g",
        },
        FAPU: {
          label: "Polyunsaturated",
          quantity: 1.1083949999986953,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 169.62659999994654,
          unit: "g",
        },
        "CHOCDF.net": {
          label: "Carbohydrates (net)",
          quantity: 169.62659999994654,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 0,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars",
          quantity: 169.62659999994654,
          unit: "g",
        },
        "SUGAR.added": {
          label: "Sugars, added",
          quantity: 0,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 26.349749999963734,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 113.17499999984557,
          unit: "mg",
        },
        NA: {
          label: "Sodium",
          quantity: 784.8494999987615,
          unit: "mg",
        },
        CA: {
          label: "Calcium",
          quantity: 951.4796800130582,
          unit: "mg",
        },
        MG: {
          label: "Magnesium",
          quantity: 87.12936166714087,
          unit: "mg",
        },
        K: {
          label: "Potassium",
          quantity: 1230.7798933365357,
          unit: "mg",
        },
        FE: {
          label: "Iron",
          quantity: 0.6443393501976511,
          unit: "mg",
        },
        ZN: {
          label: "Zinc",
          quantity: 3.1198861667227673,
          unit: "mg",
        },
        P: {
          label: "Phosphorus",
          quantity: 838.1249999989191,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 246.91499999965384,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 8.554499999989881,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 0.2902049999997497,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 1.372499999998317,
          unit: "mg",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 0.7037099999989668,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 0.17180999999973373,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 36.179999999957396,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate (food)",
          quantity: 36.179999999957396,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 0,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 1.3967999999991478,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 1.2419999999893487,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 0.5336999999992544,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 1.993499999997337,
          unit: "µg",
        },
        "Sugar.alcohol": {
          label: "Sugar alcohol",
          quantity: 0,
          unit: "g",
        },
        WATER: {
          label: "Water",
          quantity: 106.43407233305942,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 51.22349999996432,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 44.620615384553446,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 91.16662499987775,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 56.542199999982174,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 0,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 52.69949999992747,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 37.72499999994852,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 32.7020624999484,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 95.14796800130583,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 20.74508611122402,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 26.186806241202884,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 3.5796630566536174,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 28.362601515661524,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 119.73214285698845,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 27.434999999961537,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 9.504999999988756,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 24.183749999979142,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 105.5769230767936,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 4.398187499993543,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 13.216153846133365,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 9.044999999989349,
          unit: "%",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 58.19999999996449,
          unit: "%",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 8.279999999928991,
          unit: "%",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 3.557999999995029,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 1.661249999997781,
          unit: "%",
        },
      },
      digest: [
        {
          label: "Fat",
          tag: "FAT",
          schemaOrgTag: "fatContent",
          total: 29.00339999995974,
          hasRDI: true,
          daily: 44.620615384553446,
          unit: "g",
          sub: [
            {
              label: "Saturated",
              tag: "FASAT",
              schemaOrgTag: "saturatedFatContent",
              total: 18.23332499997555,
              hasRDI: true,
              daily: 91.16662499987775,
              unit: "g",
            },
            {
              label: "Trans",
              tag: "FATRN",
              schemaOrgTag: "transFatContent",
              total: 0,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Monounsaturated",
              tag: "FAMS",
              schemaOrgTag: null,
              total: 8.162144999987564,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Polyunsaturated",
              tag: "FAPU",
              schemaOrgTag: null,
              total: 1.1083949999986953,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
          ],
        },
        {
          label: "Carbs",
          tag: "CHOCDF",
          schemaOrgTag: "carbohydrateContent",
          total: 169.62659999994654,
          hasRDI: true,
          daily: 56.542199999982174,
          unit: "g",
          sub: [
            {
              label: "Carbs (net)",
              tag: "CHOCDF.net",
              schemaOrgTag: null,
              total: 169.62659999994654,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Fiber",
              tag: "FIBTG",
              schemaOrgTag: "fiberContent",
              total: 0,
              hasRDI: true,
              daily: 0,
              unit: "g",
            },
            {
              label: "Sugars",
              tag: "SUGAR",
              schemaOrgTag: "sugarContent",
              total: 169.62659999994654,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Sugars, added",
              tag: "SUGAR.added",
              schemaOrgTag: null,
              total: 0,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
          ],
        },
        {
          label: "Protein",
          tag: "PROCNT",
          schemaOrgTag: "proteinContent",
          total: 26.349749999963734,
          hasRDI: true,
          daily: 52.69949999992747,
          unit: "g",
        },
        {
          label: "Cholesterol",
          tag: "CHOLE",
          schemaOrgTag: "cholesterolContent",
          total: 113.17499999984557,
          hasRDI: true,
          daily: 37.72499999994852,
          unit: "mg",
        },
        {
          label: "Sodium",
          tag: "NA",
          schemaOrgTag: "sodiumContent",
          total: 784.8494999987615,
          hasRDI: true,
          daily: 32.7020624999484,
          unit: "mg",
        },
        {
          label: "Calcium",
          tag: "CA",
          schemaOrgTag: null,
          total: 951.4796800130582,
          hasRDI: true,
          daily: 95.14796800130583,
          unit: "mg",
        },
        {
          label: "Magnesium",
          tag: "MG",
          schemaOrgTag: null,
          total: 87.12936166714087,
          hasRDI: true,
          daily: 20.74508611122402,
          unit: "mg",
        },
        {
          label: "Potassium",
          tag: "K",
          schemaOrgTag: null,
          total: 1230.7798933365357,
          hasRDI: true,
          daily: 26.186806241202884,
          unit: "mg",
        },
        {
          label: "Iron",
          tag: "FE",
          schemaOrgTag: null,
          total: 0.6443393501976511,
          hasRDI: true,
          daily: 3.5796630566536174,
          unit: "mg",
        },
        {
          label: "Zinc",
          tag: "ZN",
          schemaOrgTag: null,
          total: 3.1198861667227673,
          hasRDI: true,
          daily: 28.362601515661524,
          unit: "mg",
        },
        {
          label: "Phosphorus",
          tag: "P",
          schemaOrgTag: null,
          total: 838.1249999989191,
          hasRDI: true,
          daily: 119.73214285698845,
          unit: "mg",
        },
        {
          label: "Vitamin A",
          tag: "VITA_RAE",
          schemaOrgTag: null,
          total: 246.91499999965384,
          hasRDI: true,
          daily: 27.434999999961537,
          unit: "µg",
        },
        {
          label: "Vitamin C",
          tag: "VITC",
          schemaOrgTag: null,
          total: 8.554499999989881,
          hasRDI: true,
          daily: 9.504999999988756,
          unit: "mg",
        },
        {
          label: "Thiamin (B1)",
          tag: "THIA",
          schemaOrgTag: null,
          total: 0.2902049999997497,
          hasRDI: true,
          daily: 24.183749999979142,
          unit: "mg",
        },
        {
          label: "Riboflavin (B2)",
          tag: "RIBF",
          schemaOrgTag: null,
          total: 1.372499999998317,
          hasRDI: true,
          daily: 105.5769230767936,
          unit: "mg",
        },
        {
          label: "Niacin (B3)",
          tag: "NIA",
          schemaOrgTag: null,
          total: 0.7037099999989668,
          hasRDI: true,
          daily: 4.398187499993543,
          unit: "mg",
        },
        {
          label: "Vitamin B6",
          tag: "VITB6A",
          schemaOrgTag: null,
          total: 0.17180999999973373,
          hasRDI: true,
          daily: 13.216153846133365,
          unit: "mg",
        },
        {
          label: "Folate equivalent (total)",
          tag: "FOLDFE",
          schemaOrgTag: null,
          total: 36.179999999957396,
          hasRDI: true,
          daily: 9.044999999989349,
          unit: "µg",
        },
        {
          label: "Folate (food)",
          tag: "FOLFD",
          schemaOrgTag: null,
          total: 36.179999999957396,
          hasRDI: false,
          daily: 0,
          unit: "µg",
        },
        {
          label: "Folic acid",
          tag: "FOLAC",
          schemaOrgTag: null,
          total: 0,
          hasRDI: false,
          daily: 0,
          unit: "µg",
        },
        {
          label: "Vitamin B12",
          tag: "VITB12",
          schemaOrgTag: null,
          total: 1.3967999999991478,
          hasRDI: true,
          daily: 58.19999999996449,
          unit: "µg",
        },
        {
          label: "Vitamin D",
          tag: "VITD",
          schemaOrgTag: null,
          total: 1.2419999999893487,
          hasRDI: true,
          daily: 8.279999999928991,
          unit: "µg",
        },
        {
          label: "Vitamin E",
          tag: "TOCPHA",
          schemaOrgTag: null,
          total: 0.5336999999992544,
          hasRDI: true,
          daily: 3.557999999995029,
          unit: "mg",
        },
        {
          label: "Vitamin K",
          tag: "VITK1",
          schemaOrgTag: null,
          total: 1.993499999997337,
          hasRDI: true,
          daily: 1.661249999997781,
          unit: "µg",
        },
        {
          label: "Sugar alcohols",
          tag: "Sugar.alcohol",
          schemaOrgTag: null,
          total: 0,
          hasRDI: false,
          daily: 0,
          unit: "g",
        },
        {
          label: "Water",
          tag: "WATER",
          schemaOrgTag: null,
          total: 106.43407233305942,
          hasRDI: false,
          daily: 0,
          unit: "g",
        },
      ],
    },
    _links: {
      self: {
        title: "Self",
        href: "https://api.edamam.com/api/recipes/v2/80f9e9d70e7a31d7127c3a292770b896?type=public&app_id=de511dc8&app_key=3f9639bae8563438d47729b156a7b78a",
      },
    },
  },
  {
    recipe: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_74d1341ed563642ee4e2b98a35e64617",
      label: "Vibrant Tasty Green Bean recipes",
      image:
        "https://edamam-product-images.s3.amazonaws.com/web-img/d8f/d8fcbbd4710c82b083a1f49ac1e67a1d?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9376577a35b267e619d3993a6af1581df44b002813ea9ec03dc6d4ffa2144527",
      images: {
        THUMBNAIL: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/d8f/d8fcbbd4710c82b083a1f49ac1e67a1d-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a1f0b90ec21bc20f4e41207bb50e23d6d9c204416172d7ab119221258288b50e",
          width: 100,
          height: 100,
        },
        SMALL: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/d8f/d8fcbbd4710c82b083a1f49ac1e67a1d-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=514e5d0aec887547ed1ddbb997691e72c17879b0e61935c020cf9bc317b0795a",
          width: 200,
          height: 200,
        },
        REGULAR: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/d8f/d8fcbbd4710c82b083a1f49ac1e67a1d?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9376577a35b267e619d3993a6af1581df44b002813ea9ec03dc6d4ffa2144527",
          width: 300,
          height: 300,
        },
      },
      source: "101 Cookbooks",
      url: "http://www.101cookbooks.com/archives/vibrant-tasty-green-beans-recipe.html",
      shareAs:
        "http://www.edamam.com/recipe/vibrant-tasty-green-bean-recipes-74d1341ed563642ee4e2b98a35e64617/-/alcohol-free/balanced",
      yield: 6,
      dietLabels: ["Balanced"],
      healthLabels: [
        "Kidney-Friendly",
        "Vegan",
        "Vegetarian",
        "Pescatarian",
        "Paleo",
        "Mediterranean",
        "DASH",
        "Dairy-Free",
        "Gluten-Free",
        "Wheat-Free",
        "Egg-Free",
        "Peanut-Free",
        "Tree-Nut-Free",
        "Soy-Free",
        "Fish-Free",
        "Shellfish-Free",
        "Pork-Free",
        "Red-Meat-Free",
        "Crustacean-Free",
        "Celery-Free",
        "Mustard-Free",
        "Sesame-Free",
        "Lupine-Free",
        "Mollusk-Free",
        "Alcohol-Free",
        "Sulfite-Free",
        "Kosher",
        "Immuno-Supportive",
      ],
      cautions: [],
      ingredientLines: [
        "4 leeks, well washed, root end and tops trimmed, sliced lengthwise into quarters and then chopped into 1/2-inch segments (see photo in main post)",
        "1/3 cup fresh dill, well chopped",
        "3/4 pound green beans, tops and tails trimmed and cut into 1-inch segments",
        "extra-virgin olive oil",
        "fine sea salt",
      ],
      ingredients: [
        {
          text: "4 leeks, well washed, root end and tops trimmed, sliced lengthwise into quarters and then chopped into 1/2-inch segments (see photo in main post)",
          quantity: 4,
          measure: "<unit>",
          food: "leeks",
          weight: 356,
          foodCategory: "vegetables",
          foodId: "food_a27jevnb06c1m9ax7k41xbbcwcuo",
          image:
            "https://www.edamam.com/food-img/4ae/4ae9e09d029a28e0e2c64bdfdbf3f6ae.jpg",
        },
        {
          text: "1/3 cup fresh dill, well chopped",
          quantity: 0.3333333333333333,
          measure: "cup",
          food: "fresh dill",
          weight: 2.966666666666667,
          foodCategory: "Condiments and sauces",
          foodId: "food_avhhd2padkkzx8a9swnmlb1km3qb",
          image:
            "https://www.edamam.com/food-img/874/8740aacb8e1a348cd5eead1f0bb552d4.jpg",
        },
        {
          text: "3/4 pound green beans, tops and tails trimmed and cut into 1-inch segments",
          quantity: 0.75,
          measure: "pound",
          food: "green beans",
          weight: 340.1942775,
          foodCategory: "vegetables",
          foodId: "food_aceucvpau4a8v6atkx5eabxyoqdn",
          image:
            "https://www.edamam.com/food-img/891/89135f10639878a2360e6a33c9af3d91.jpg",
        },
        {
          text: "extra-virgin olive oil",
          quantity: 0,
          measure: null,
          food: "extra-virgin olive oil",
          weight: 9.508588840666667,
          foodCategory: "Oils",
          foodId: "food_b1d1icuad3iktrbqby0hiagafaz7",
          image:
            "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg",
        },
        {
          text: "fine sea salt",
          quantity: 0,
          measure: null,
          food: "fine sea salt",
          weight: 4.194965665000001,
          foodCategory: "Condiments and sauces",
          foodId: "food_btxz81db72hwbra2pncvebzzzum9",
          image:
            "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg",
        },
      ],
      calories: 407.95181804316,
      totalWeight: 712.6800220174072,
      totalTime: 25,
      cuisineType: ["american"],
      mealType: ["lunch/dinner"],
      dishType: ["main course"],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 407.95181804315996,
          unit: "kcal",
        },
        FAT: {
          label: "Fat",
          quantity: 11.358242917833334,
          unit: "g",
        },
        FASAT: {
          label: "Saturated",
          quantity: 1.6272230858692533,
          unit: "g",
        },
        FATRN: {
          label: "Trans",
          quantity: 0,
          unit: "g",
        },
        FAMS: {
          label: "Monounsaturated",
          quantity: 7.0096135984554735,
          unit: "g",
        },
        FAPU: {
          label: "Polyunsaturated",
          quantity: 1.9787866706116866,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 74.29380114175001,
          unit: "g",
        },
        "CHOCDF.net": {
          label: "Carbohydrates (net)",
          quantity: 58.63825564925,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 15.6555454925,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars",
          quantity: 24.974333446500005,
          unit: "g",
        },
        "SUGAR.added": {
          label: "Sugars, added",
          quantity: 0,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 11.668201944916667,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 0,
          unit: "mg",
        },
        NA: {
          label: "Sodium",
          quantity: 1647.9968256178936,
          unit: "mg",
        },
        CA: {
          label: "Calcium",
          quantity: 343.14015259249106,
          unit: "mg",
        },
        MG: {
          label: "Magnesium",
          quantity: 186.4003409317674,
          unit: "mg",
        },
        K: {
          label: "Potassium",
          quantity: 1380.9198505342124,
          unit: "mg",
        },
        FE: {
          label: "Iron",
          quantity: 11.241987102824313,
          unit: "mg",
        },
        ZN: {
          label: "Zinc",
          quantity: 1.2746734216767406,
          unit: "mg",
        },
        P: {
          label: "Phosphorus",
          quantity: 255.83182545,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 425.99933045833336,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 86.74536852166668,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 0.4942799742166667,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 0.46938338193333334,
          unit: "mg",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 3.967602663516667,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 1.3146422646083333,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 344.554111575,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate (food)",
          quantity: 344.554111575,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 0,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 0,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 0,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 6.034479036385667,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 222.03214644208134,
          unit: "µg",
        },
        "Sugar.alcohol": {
          label: "Sugar alcohol",
          quantity: 0,
          unit: "g",
        },
        WATER: {
          label: "Water",
          quantity: 605.3013424160201,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 20.397590902157997,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 17.474219873589742,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 8.136115429346265,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 24.764600380583335,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 62.62218197,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 23.336403889833335,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 0,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 68.66653440074556,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 34.3140152592491,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 44.38103355518271,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 29.38127341562154,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 62.45548390457951,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 11.587940197061279,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 36.54740363571428,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 47.33325893981482,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 96.38374280185187,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 41.18999785138889,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 36.106413994871794,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 24.79751664697917,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 101.12632804679488,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 86.13852789375,
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
          quantity: 40.229860242571114,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 185.02678870173446,
          unit: "%",
        },
      },
      digest: [
        {
          label: "Fat",
          tag: "FAT",
          schemaOrgTag: "fatContent",
          total: 11.358242917833334,
          hasRDI: true,
          daily: 17.474219873589742,
          unit: "g",
          sub: [
            {
              label: "Saturated",
              tag: "FASAT",
              schemaOrgTag: "saturatedFatContent",
              total: 1.6272230858692533,
              hasRDI: true,
              daily: 8.136115429346265,
              unit: "g",
            },
            {
              label: "Trans",
              tag: "FATRN",
              schemaOrgTag: "transFatContent",
              total: 0,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Monounsaturated",
              tag: "FAMS",
              schemaOrgTag: null,
              total: 7.0096135984554735,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Polyunsaturated",
              tag: "FAPU",
              schemaOrgTag: null,
              total: 1.9787866706116866,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
          ],
        },
        {
          label: "Carbs",
          tag: "CHOCDF",
          schemaOrgTag: "carbohydrateContent",
          total: 74.29380114175001,
          hasRDI: true,
          daily: 24.764600380583335,
          unit: "g",
          sub: [
            {
              label: "Carbs (net)",
              tag: "CHOCDF.net",
              schemaOrgTag: null,
              total: 58.63825564925,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Fiber",
              tag: "FIBTG",
              schemaOrgTag: "fiberContent",
              total: 15.6555454925,
              hasRDI: true,
              daily: 62.62218197,
              unit: "g",
            },
            {
              label: "Sugars",
              tag: "SUGAR",
              schemaOrgTag: "sugarContent",
              total: 24.974333446500005,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Sugars, added",
              tag: "SUGAR.added",
              schemaOrgTag: null,
              total: 0,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
          ],
        },
        {
          label: "Protein",
          tag: "PROCNT",
          schemaOrgTag: "proteinContent",
          total: 11.668201944916667,
          hasRDI: true,
          daily: 23.336403889833335,
          unit: "g",
        },
        {
          label: "Cholesterol",
          tag: "CHOLE",
          schemaOrgTag: "cholesterolContent",
          total: 0,
          hasRDI: true,
          daily: 0,
          unit: "mg",
        },
        {
          label: "Sodium",
          tag: "NA",
          schemaOrgTag: "sodiumContent",
          total: 1647.9968256178936,
          hasRDI: true,
          daily: 68.66653440074556,
          unit: "mg",
        },
        {
          label: "Calcium",
          tag: "CA",
          schemaOrgTag: null,
          total: 343.14015259249106,
          hasRDI: true,
          daily: 34.3140152592491,
          unit: "mg",
        },
        {
          label: "Magnesium",
          tag: "MG",
          schemaOrgTag: null,
          total: 186.4003409317674,
          hasRDI: true,
          daily: 44.38103355518271,
          unit: "mg",
        },
        {
          label: "Potassium",
          tag: "K",
          schemaOrgTag: null,
          total: 1380.9198505342124,
          hasRDI: true,
          daily: 29.38127341562154,
          unit: "mg",
        },
        {
          label: "Iron",
          tag: "FE",
          schemaOrgTag: null,
          total: 11.241987102824313,
          hasRDI: true,
          daily: 62.45548390457951,
          unit: "mg",
        },
        {
          label: "Zinc",
          tag: "ZN",
          schemaOrgTag: null,
          total: 1.2746734216767406,
          hasRDI: true,
          daily: 11.587940197061279,
          unit: "mg",
        },
        {
          label: "Phosphorus",
          tag: "P",
          schemaOrgTag: null,
          total: 255.83182545,
          hasRDI: true,
          daily: 36.54740363571428,
          unit: "mg",
        },
        {
          label: "Vitamin A",
          tag: "VITA_RAE",
          schemaOrgTag: null,
          total: 425.99933045833336,
          hasRDI: true,
          daily: 47.33325893981482,
          unit: "µg",
        },
        {
          label: "Vitamin C",
          tag: "VITC",
          schemaOrgTag: null,
          total: 86.74536852166668,
          hasRDI: true,
          daily: 96.38374280185187,
          unit: "mg",
        },
        {
          label: "Thiamin (B1)",
          tag: "THIA",
          schemaOrgTag: null,
          total: 0.4942799742166667,
          hasRDI: true,
          daily: 41.18999785138889,
          unit: "mg",
        },
        {
          label: "Riboflavin (B2)",
          tag: "RIBF",
          schemaOrgTag: null,
          total: 0.46938338193333334,
          hasRDI: true,
          daily: 36.106413994871794,
          unit: "mg",
        },
        {
          label: "Niacin (B3)",
          tag: "NIA",
          schemaOrgTag: null,
          total: 3.967602663516667,
          hasRDI: true,
          daily: 24.79751664697917,
          unit: "mg",
        },
        {
          label: "Vitamin B6",
          tag: "VITB6A",
          schemaOrgTag: null,
          total: 1.3146422646083333,
          hasRDI: true,
          daily: 101.12632804679488,
          unit: "mg",
        },
        {
          label: "Folate equivalent (total)",
          tag: "FOLDFE",
          schemaOrgTag: null,
          total: 344.554111575,
          hasRDI: true,
          daily: 86.13852789375,
          unit: "µg",
        },
        {
          label: "Folate (food)",
          tag: "FOLFD",
          schemaOrgTag: null,
          total: 344.554111575,
          hasRDI: false,
          daily: 0,
          unit: "µg",
        },
        {
          label: "Folic acid",
          tag: "FOLAC",
          schemaOrgTag: null,
          total: 0,
          hasRDI: false,
          daily: 0,
          unit: "µg",
        },
        {
          label: "Vitamin B12",
          tag: "VITB12",
          schemaOrgTag: null,
          total: 0,
          hasRDI: true,
          daily: 0,
          unit: "µg",
        },
        {
          label: "Vitamin D",
          tag: "VITD",
          schemaOrgTag: null,
          total: 0,
          hasRDI: true,
          daily: 0,
          unit: "µg",
        },
        {
          label: "Vitamin E",
          tag: "TOCPHA",
          schemaOrgTag: null,
          total: 6.034479036385667,
          hasRDI: true,
          daily: 40.229860242571114,
          unit: "mg",
        },
        {
          label: "Vitamin K",
          tag: "VITK1",
          schemaOrgTag: null,
          total: 222.03214644208134,
          hasRDI: true,
          daily: 185.02678870173446,
          unit: "µg",
        },
        {
          label: "Sugar alcohols",
          tag: "Sugar.alcohol",
          schemaOrgTag: null,
          total: 0,
          hasRDI: false,
          daily: 0,
          unit: "g",
        },
        {
          label: "Water",
          tag: "WATER",
          schemaOrgTag: null,
          total: 605.3013424160201,
          hasRDI: false,
          daily: 0,
          unit: "g",
        },
      ],
    },
    _links: {
      self: {
        title: "Self",
        href: "https://api.edamam.com/api/recipes/v2/74d1341ed563642ee4e2b98a35e64617?type=public&app_id=de511dc8&app_key=3f9639bae8563438d47729b156a7b78a",
      },
    },
  },
  {
    recipe: {
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_88c93d34a2f0c4a9ebf55c8d7c985458",
      label: "Boozy Baked French Toast",
      image:
        "https://edamam-product-images.s3.amazonaws.com/web-img/63e/63ec7db0604b55f154da12ebebd65eed.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2755261f3bd59fd3455cbcb73c5ce2bf0b275f4bd470b95380c5184c82972e2d",
      images: {
        THUMBNAIL: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/63e/63ec7db0604b55f154da12ebebd65eed-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6b73510616d3ae88b5f8742566baed0cf1280d3696b9d7807425f4431f00bf22",
          width: 100,
          height: 100,
        },
        SMALL: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/63e/63ec7db0604b55f154da12ebebd65eed-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6468065e0e67301bd69feab14f7e79708495f20ce52a3c6f3287399a6969ae06",
          width: 200,
          height: 200,
        },
        REGULAR: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/63e/63ec7db0604b55f154da12ebebd65eed.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2755261f3bd59fd3455cbcb73c5ce2bf0b275f4bd470b95380c5184c82972e2d",
          width: 300,
          height: 300,
        },
        LARGE: {
          url: "https://edamam-product-images.s3.amazonaws.com/web-img/63e/63ec7db0604b55f154da12ebebd65eed-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIE8DxlYh37WHsQK19p%2Fm3VfXbYKdruK7FMWBSsc6zVubAiEAwPZ0DTkt3nNSfNS3xCFkf1lilGeCVPGDu3til9alP4kqzAQIXxAAGgwxODcwMTcxNTA5ODYiDAkL7y2aeqWG3ke7SiqpBLqI5dq%2FBPsanAWaj%2FwK4%2FyFbBG6XNGzBKb7tAx8cviM8DwGg285IF1Sg1Vx7Hic37EDSat1brvsCGYl5CQq1TRYZuKbNLVq6O43UNQXOLtiJYziQuhMybWw1F5zUT%2B1nlpi2LYqsKABHoSEfTHS9GfbjAfQhp19ftk0AQqJHh6sQdpUb3zzM2VXgA6HifOMqU8CM%2Bs9LnMC5zlJHRNqN6JFmZsyUyDx6Kc898YMcR06hOwZXQjQwp%2BXJvVogyHIuAZajWelR6V3LxRTyUegpz8UF2wpq4op%2Fr%2FlsKZe37rJuqhxQ8biyLbyzWbVFWq1iSwb%2BYGirpPa%2FTQbNQ%2FWsDAnTSTSbMuAfuX6VCGkqoEzUHRXn353LG933Oqp%2FAlKdsk8%2FlquOUVrAFgDP8drv0xiTeGuCQNljj2iZO0I1TvyZf1gGSAhRJ1ygV9vNbVNZoPXe2ZqzJ6gp12vzr5KXI4avPXyoMKfpHa157x59HjRncL6D0cm7yy3bZrxPAfpDIyQR%2BvLXT6sCA%2Boo75t7PBa%2FV6lck14mrnseov1lzod3OBhA4xoMp%2Bh0EGhMOaA0y049t%2FXeCUEp6jQrw9KGcvP8j%2BUJyfE7nYHXBoWV5NHDVxlXoQ5Vi%2Fg9dkqvMKukduj05Qe4XevUddBu%2FmCzDJTVLJMDVCtljmw6xYenR%2FUCEsVxaHMCuBOa%2FJ75yS%2FPsxSFjdCneONmM%2F73AcXnVnv5rMu2Qw0WOww8LaJnwY6qQGsEzaX%2BQi0Y3BdoW6GnW3%2FtlILc6l8Z4g4VoaHAD0IhbcLFIFh6bPFhFMdMD%2B1XkL7Pn77tqgB801q3OuJobRUWjk18xGUayil8dRgfTEhevi2QTfh41lnVnrnBnobrRBk0V7ZG2EWQ8enh1AXtGdk4iiZD1eTzyilT12jaahgNM4PZaQ2eHTTUeWKEIoqeM%2Fc6zSJ2MNF5M5ZWqnSG4bcPsUXVSxLlHRf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230207T150741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOMC2ZVSB%2F20230207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=719abefcc9b61715b06df54a769c584bfa164eab1ae4a0c27c5c3f5d52074067",
          width: 600,
          height: 600,
        },
      },
      source: "Smitten Kitchen",
      url: "http://smittenkitchen.com/2006/12/new-years-day-2001/",
      shareAs:
        "http://www.edamam.com/recipe/boozy-baked-french-toast-88c93d34a2f0c4a9ebf55c8d7c985458/-/alcohol-free/balanced",
      yield: 6,
      dietLabels: ["Balanced"],
      healthLabels: [
        "Vegetarian",
        "Pescatarian",
        "Peanut-Free",
        "Tree-Nut-Free",
        "Soy-Free",
        "Fish-Free",
        "Shellfish-Free",
        "Pork-Free",
        "Red-Meat-Free",
        "Crustacean-Free",
        "Celery-Free",
        "Mustard-Free",
        "Sesame-Free",
        "Lupine-Free",
        "Mollusk-Free",
        "Alcohol-Free",
        "Kosher",
      ],
      cautions: ["Milk"],
      ingredientLines: [
        "1 loaf supermarket Challah bread in 1-inch slices, no need for the super-fancy stuff here",
        "3 cups whole milk",
        "3 eggs",
        "3 tablespoons sugar",
        "1/2 teaspoon salt",
      ],
      ingredients: [
        {
          text: "1 loaf supermarket Challah bread in 1-inch slices, no need for the super-fancy stuff here",
          quantity: 1,
          measure: "loaf",
          food: "Challah bread",
          weight: 480,
          foodCategory: "bread, rolls and tortillas",
          foodId: "food_aofn1i2b3381jvam2w2c6axj3a50",
          image:
            "https://www.edamam.com/food-img/5f6/5f64cc5bd5c3ddc3013ebe9a2e21b0c5.jpg",
        },
        {
          text: "3 cups whole milk",
          quantity: 3,
          measure: "cup",
          food: "whole milk",
          weight: 732,
          foodCategory: "Milk",
          foodId: "food_b49rs1kaw0jktabzkg2vvanvvsis",
          image:
            "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg",
        },
        {
          text: "3 eggs",
          quantity: 3,
          measure: "<unit>",
          food: "eggs",
          weight: 129,
          foodCategory: "Eggs",
          foodId: "food_bhpradua77pk16aipcvzeayg732r",
          image:
            "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg",
        },
        {
          text: "3 tablespoons sugar",
          quantity: 3,
          measure: "tablespoon",
          food: "sugar",
          weight: 37.4999999993661,
          foodCategory: "sugars",
          foodId: "food_axi2ijobrk819yb0adceobnhm1c2",
          image:
            "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg",
        },
        {
          text: "1/2 teaspoon salt",
          quantity: 0.5,
          measure: "teaspoon",
          food: "salt",
          weight: 3,
          foodCategory: "Condiments and sauces",
          foodId: "food_btxz81db72hwbra2pncvebzzzum9",
          image:
            "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg",
        },
      ],
      calories: 2153.714999997547,
      totalWeight: 1380.7791660554024,
      totalTime: 0,
      cuisineType: ["french"],
      mealType: ["breakfast"],
      dishType: ["desserts"],
      totalNutrients: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 2153.714999997547,
          unit: "kcal",
        },
        FAT: {
          label: "Fat",
          quantity: 64.8579,
          unit: "g",
        },
        FASAT: {
          label: "Saturated",
          quantity: 25.330740000000002,
          unit: "g",
        },
        FATRN: {
          label: "Trans",
          quantity: 0.04902,
          unit: "g",
        },
        FAMS: {
          label: "Monounsaturated",
          quantity: 21.71226,
          unit: "g",
        },
        FAPU: {
          label: "Polyunsaturated",
          quantity: 9.20139,
          unit: "g",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 302.99729999936625,
          unit: "g",
        },
        "CHOCDF.net": {
          label: "Carbohydrates (net)",
          quantity: 291.9572999993662,
          unit: "g",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 11.04,
          unit: "g",
        },
        SUGAR: {
          label: "Sugars",
          quantity: 83.41229999936738,
          unit: "g",
        },
        "SUGAR.added": {
          label: "Sugars, added",
          quantity: 37.42499999936737,
          unit: "g",
        },
        PROCNT: {
          label: "Protein",
          quantity: 84.8604,
          unit: "g",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 797.8799999999999,
          unit: "mg",
        },
        NA: {
          label: "Sodium",
          quantity: 3205.6741799985257,
          unit: "mg",
        },
        CA: {
          label: "Calcium",
          quantity: 1346.7219998534422,
          unit: "mg",
        },
        MG: {
          label: "Magnesium",
          quantity: 179.90279166056035,
          unit: "mg",
        },
        K: {
          label: "Potassium",
          quantity: 1697.19233328447,
          unit: "mg",
        },
        FE: {
          label: "Iron",
          quantity: 17.095371247984602,
          unit: "mg",
        },
        ZN: {
          label: "Zinc",
          quantity: 8.170529166055973,
          unit: "mg",
        },
        P: {
          label: "Phosphorus",
          quantity: 1379.1,
          unit: "mg",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 845.52,
          unit: "µg",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 0,
          unit: "mg",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 2.49072,
          unit: "mg",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 3.9265349999998795,
          unit: "mg",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 24.018629999999998,
          unit: "mg",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 0.79002,
          unit: "mg",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 721.23,
          unit: "µg",
        },
        FOLFD: {
          label: "Folate (food)",
          quantity: 433.23,
          unit: "µg",
        },
        FOLAC: {
          label: "Folic acid",
          quantity: 168,
          unit: "µg",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 4.9221,
          unit: "µg",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 14.015999999999998,
          unit: "µg",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 3.1149000000000004,
          unit: "mg",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 6.9030000000000005,
          unit: "µg",
        },
        "Sugar.alcohol": {
          label: "Sugar alcohol",
          quantity: 0,
          unit: "g",
        },
        WATER: {
          label: "Water",
          quantity: 909.9171583321117,
          unit: "g",
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: "Energy",
          quantity: 107.68574999987734,
          unit: "%",
        },
        FAT: {
          label: "Fat",
          quantity: 99.78138461538461,
          unit: "%",
        },
        FASAT: {
          label: "Saturated",
          quantity: 126.6537,
          unit: "%",
        },
        CHOCDF: {
          label: "Carbs",
          quantity: 100.99909999978875,
          unit: "%",
        },
        FIBTG: {
          label: "Fiber",
          quantity: 44.16,
          unit: "%",
        },
        PROCNT: {
          label: "Protein",
          quantity: 169.72079999999997,
          unit: "%",
        },
        CHOLE: {
          label: "Cholesterol",
          quantity: 265.96,
          unit: "%",
        },
        NA: {
          label: "Sodium",
          quantity: 133.56975749993856,
          unit: "%",
        },
        CA: {
          label: "Calcium",
          quantity: 134.67219998534424,
          unit: "%",
        },
        MG: {
          label: "Magnesium",
          quantity: 42.83399801441913,
          unit: "%",
        },
        K: {
          label: "Potassium",
          quantity: 36.11047517626532,
          unit: "%",
        },
        FE: {
          label: "Iron",
          quantity: 94.97428471102556,
          unit: "%",
        },
        ZN: {
          label: "Zinc",
          quantity: 74.27753787323611,
          unit: "%",
        },
        P: {
          label: "Phosphorus",
          quantity: 197.0142857142857,
          unit: "%",
        },
        VITA_RAE: {
          label: "Vitamin A",
          quantity: 93.94666666666667,
          unit: "%",
        },
        VITC: {
          label: "Vitamin C",
          quantity: 0,
          unit: "%",
        },
        THIA: {
          label: "Thiamin (B1)",
          quantity: 207.56,
          unit: "%",
        },
        RIBF: {
          label: "Riboflavin (B2)",
          quantity: 302.0411538461446,
          unit: "%",
        },
        NIA: {
          label: "Niacin (B3)",
          quantity: 150.1164375,
          unit: "%",
        },
        VITB6A: {
          label: "Vitamin B6",
          quantity: 60.770769230769226,
          unit: "%",
        },
        FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 180.3075,
          unit: "%",
        },
        VITB12: {
          label: "Vitamin B12",
          quantity: 205.08750000000003,
          unit: "%",
        },
        VITD: {
          label: "Vitamin D",
          quantity: 93.44,
          unit: "%",
        },
        TOCPHA: {
          label: "Vitamin E",
          quantity: 20.766000000000005,
          unit: "%",
        },
        VITK1: {
          label: "Vitamin K",
          quantity: 5.7525,
          unit: "%",
        },
      },
      digest: [
        {
          label: "Fat",
          tag: "FAT",
          schemaOrgTag: "fatContent",
          total: 64.8579,
          hasRDI: true,
          daily: 99.78138461538461,
          unit: "g",
          sub: [
            {
              label: "Saturated",
              tag: "FASAT",
              schemaOrgTag: "saturatedFatContent",
              total: 25.330740000000002,
              hasRDI: true,
              daily: 126.6537,
              unit: "g",
            },
            {
              label: "Trans",
              tag: "FATRN",
              schemaOrgTag: "transFatContent",
              total: 0.04902,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Monounsaturated",
              tag: "FAMS",
              schemaOrgTag: null,
              total: 21.71226,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Polyunsaturated",
              tag: "FAPU",
              schemaOrgTag: null,
              total: 9.20139,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
          ],
        },
        {
          label: "Carbs",
          tag: "CHOCDF",
          schemaOrgTag: "carbohydrateContent",
          total: 302.99729999936625,
          hasRDI: true,
          daily: 100.99909999978875,
          unit: "g",
          sub: [
            {
              label: "Carbs (net)",
              tag: "CHOCDF.net",
              schemaOrgTag: null,
              total: 291.9572999993662,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Fiber",
              tag: "FIBTG",
              schemaOrgTag: "fiberContent",
              total: 11.04,
              hasRDI: true,
              daily: 44.16,
              unit: "g",
            },
            {
              label: "Sugars",
              tag: "SUGAR",
              schemaOrgTag: "sugarContent",
              total: 83.41229999936738,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
            {
              label: "Sugars, added",
              tag: "SUGAR.added",
              schemaOrgTag: null,
              total: 37.42499999936737,
              hasRDI: false,
              daily: 0,
              unit: "g",
            },
          ],
        },
        {
          label: "Protein",
          tag: "PROCNT",
          schemaOrgTag: "proteinContent",
          total: 84.8604,
          hasRDI: true,
          daily: 169.72079999999997,
          unit: "g",
        },
        {
          label: "Cholesterol",
          tag: "CHOLE",
          schemaOrgTag: "cholesterolContent",
          total: 797.8799999999999,
          hasRDI: true,
          daily: 265.96,
          unit: "mg",
        },
        {
          label: "Sodium",
          tag: "NA",
          schemaOrgTag: "sodiumContent",
          total: 3205.6741799985257,
          hasRDI: true,
          daily: 133.56975749993856,
          unit: "mg",
        },
        {
          label: "Calcium",
          tag: "CA",
          schemaOrgTag: null,
          total: 1346.7219998534422,
          hasRDI: true,
          daily: 134.67219998534424,
          unit: "mg",
        },
        {
          label: "Magnesium",
          tag: "MG",
          schemaOrgTag: null,
          total: 179.90279166056035,
          hasRDI: true,
          daily: 42.83399801441913,
          unit: "mg",
        },
        {
          label: "Potassium",
          tag: "K",
          schemaOrgTag: null,
          total: 1697.19233328447,
          hasRDI: true,
          daily: 36.11047517626532,
          unit: "mg",
        },
        {
          label: "Iron",
          tag: "FE",
          schemaOrgTag: null,
          total: 17.095371247984602,
          hasRDI: true,
          daily: 94.97428471102556,
          unit: "mg",
        },
        {
          label: "Zinc",
          tag: "ZN",
          schemaOrgTag: null,
          total: 8.170529166055973,
          hasRDI: true,
          daily: 74.27753787323611,
          unit: "mg",
        },
        {
          label: "Phosphorus",
          tag: "P",
          schemaOrgTag: null,
          total: 1379.1,
          hasRDI: true,
          daily: 197.0142857142857,
          unit: "mg",
        },
        {
          label: "Vitamin A",
          tag: "VITA_RAE",
          schemaOrgTag: null,
          total: 845.52,
          hasRDI: true,
          daily: 93.94666666666667,
          unit: "µg",
        },
        {
          label: "Vitamin C",
          tag: "VITC",
          schemaOrgTag: null,
          total: 0,
          hasRDI: true,
          daily: 0,
          unit: "mg",
        },
        {
          label: "Thiamin (B1)",
          tag: "THIA",
          schemaOrgTag: null,
          total: 2.49072,
          hasRDI: true,
          daily: 207.56,
          unit: "mg",
        },
        {
          label: "Riboflavin (B2)",
          tag: "RIBF",
          schemaOrgTag: null,
          total: 3.9265349999998795,
          hasRDI: true,
          daily: 302.0411538461446,
          unit: "mg",
        },
        {
          label: "Niacin (B3)",
          tag: "NIA",
          schemaOrgTag: null,
          total: 24.018629999999998,
          hasRDI: true,
          daily: 150.1164375,
          unit: "mg",
        },
        {
          label: "Vitamin B6",
          tag: "VITB6A",
          schemaOrgTag: null,
          total: 0.79002,
          hasRDI: true,
          daily: 60.770769230769226,
          unit: "mg",
        },
        {
          label: "Folate equivalent (total)",
          tag: "FOLDFE",
          schemaOrgTag: null,
          total: 721.23,
          hasRDI: true,
          daily: 180.3075,
          unit: "µg",
        },
        {
          label: "Folate (food)",
          tag: "FOLFD",
          schemaOrgTag: null,
          total: 433.23,
          hasRDI: false,
          daily: 0,
          unit: "µg",
        },
        {
          label: "Folic acid",
          tag: "FOLAC",
          schemaOrgTag: null,
          total: 168,
          hasRDI: false,
          daily: 0,
          unit: "µg",
        },
        {
          label: "Vitamin B12",
          tag: "VITB12",
          schemaOrgTag: null,
          total: 4.9221,
          hasRDI: true,
          daily: 205.08750000000003,
          unit: "µg",
        },
        {
          label: "Vitamin D",
          tag: "VITD",
          schemaOrgTag: null,
          total: 14.015999999999998,
          hasRDI: true,
          daily: 93.44,
          unit: "µg",
        },
        {
          label: "Vitamin E",
          tag: "TOCPHA",
          schemaOrgTag: null,
          total: 3.1149000000000004,
          hasRDI: true,
          daily: 20.766000000000005,
          unit: "mg",
        },
        {
          label: "Vitamin K",
          tag: "VITK1",
          schemaOrgTag: null,
          total: 6.9030000000000005,
          hasRDI: true,
          daily: 5.7525,
          unit: "µg",
        },
        {
          label: "Sugar alcohols",
          tag: "Sugar.alcohol",
          schemaOrgTag: null,
          total: 0,
          hasRDI: false,
          daily: 0,
          unit: "g",
        },
        {
          label: "Water",
          tag: "WATER",
          schemaOrgTag: null,
          total: 909.9171583321117,
          hasRDI: false,
          daily: 0,
          unit: "g",
        },
      ],
    },
    _links: {
      self: {
        title: "Self",
        href: "https://api.edamam.com/api/recipes/v2/88c93d34a2f0c4a9ebf55c8d7c985458?type=public&app_id=de511dc8&app_key=3f9639bae8563438d47729b156a7b78a",
      },
    },
  },
];
// categories: ['All', 'Low Intensity', 'No Jumping', 'No Burpees', 'No Planks', 'Standing']
export const workoutVideosData: Video[] = [
  {
    id: 1,
    categories: ["All", "No Burpees", "No Planks"],
    title: "Abs in 2 Weeks",
    src: "https://www.youtube.com/watch?v=2pLT-olgUJs&ab_channel=ChloeTing",
    srcImg:
      "https://static.chloeting.com/videos/61bbdcdd017bbb985e15f8eb/28972560-5ed2-11ec-b99f-c33e6b9468db.jpeg",
    duration: 11,
  },
  {
    id: 2,
    categories: ["All", "No Burpees", "No Planks", "Standing"],
    title: "Do This Everyday to Lose Weight",
    src: "https://www.youtube.com/watch?v=2MoGxae-zyo&ab_channel=ChloeTing",
    srcImg:
      "https://static.chloeting.com/videos/61bbdc7e2cb3b78eb6ac2bba/efca6f80-5ed1-11ec-b182-df31ae6aab45.jpeg",
    duration: 14,
  },
  {
    id: 3,
    categories: ["All", "No Planks", "Standing"],
    title: "11 Line Abs",
    src: "https://www.youtube.com/watch?v=6TmQiugy_qw&feature=youtu.be",
    srcImg:
      "https://static.chloeting.com/videos/61bbd89dc3d293024898b84d/9ff668d0-5ecf-11ec-b8cd-2976cd667d03.jpeg",
    duration: 11,
  },
  {
    id: 4,
    categories: ["All", "Low Intensity"],
    title: "Warm Up",
    src: "https://www.youtube.com/watch?v=-p0PA9Zt8zk&feature=youtu.be&ab_channel=ChloeTing",
    srcImg:
      "https://static.chloeting.com/videos/61bbf59552c5c9bf0f2550eb/e43a1620-5ee0-11ec-9a04-3fd984621d67.jpeg",
    duration: 6,
  },
  {
    id: 5,
    categories: ["All", "No Jumping", "No Planks"],
    title: "Flat Belly Abs",
    src: "https://www.youtube.com/watch?v=UBnfm4s7CRA&feature=youtu.be&ab_channel=ChloeTing",
    srcImg:
      "https://static.chloeting.com/videos/61bbbbf0c3d293024898b838/8873f260-5ebe-11ec-9a04-3fd984621d67.jpeg",
    duration: 25,
  },
  {
    id: 6,
    categories: ["All", "Standing"],
    title: "Abs in 2 Weeks - 2020",
    src: "https://www.youtube.com/watch?v=h8ctkfSx6R0&feature=youtu.be&ab_channel=ChloeTing",
    srcImg:
      "https://static.chloeting.com/videos/61bc1877dff295b571b03e08/af196bc0-5ef5-11ec-b4e8-6545cdfc138f.jpeg",
    duration: 11,
  },
  {
    id: 7,
    categories: ["All", "No Jumping", "Standing"],
    title: "Tiny Waist Round Butt",
    src: "https://www.youtube.com/watch?v=cIuiQyfKBTg&feature=youtu.be&ab_channel=ChloeTing",
    srcImg:
      "https://static.chloeting.com/videos/61bbf3f62d47479a9df235a8/ed177c20-5edf-11ec-9a04-3fd984621d67.jpeg",
    duration: 16,
  },
  {
    id: 8,
    categories: ["All", "Low Intensity", "No Jumping", "No Burpees"],
    title: "Lean Arms Workout",
    src: "https://www.youtube.com/watch?v=j64BBgBGNIU&t=0s&ab_channel=ChloeTing",
    srcImg:
      "https://static.chloeting.com/videos/61bbdeaac3d293024898b867/3b4068b0-5ed3-11ec-b99f-c33e6b9468db.jpeg",
    duration: 11,
  },
];
