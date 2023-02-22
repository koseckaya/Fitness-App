import "./CompletedChallenges.scss";
import { User } from "firebase/auth";
import { FC, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../utils/contexts";
import { getUserDocFromAuth } from "../utils/firebase/firebase";
import { programs } from "../../data";
import { Review } from "../Review";

export type Props = {
  className?: string;
  title?: string;
  image?: string;
  url?: string;
  days?: number;
  time?: number[];
  startedDays: number[];
};

export const CompletedChallenges = () => {
  const { currentUser } = useContext(UserContext);
  const userData = useUserChallenges(currentUser);

  const getProgram = (key: string) => {
    const id = Number(key);
    return programs[id - 1];
  };

  return (
    <div className="small-programs_container">
      {userData?.length ? (
        userData.map((item) => (
          <SmallProgramCard
            title={getProgram(item[0]).title}
            image={getProgram(item[0]).imageUrl2}
            url={getProgram(item[0]).path}
            days={getProgram(item[0]).days}
            time={getProgram(item[0]).time}
            key={getProgram(item[0]).id}
            startedDays={item[1]}
          />
        ))
      ) : (
        <p>Start Workout Programs</p>
      )}
    </div>
  );
};

const SmallProgramCard: FC<Props> = ({
  title,
  image,
  url,
  days,
  time,
  startedDays,
}: Props) => {
  return (
    <div className="small-programs__card">
      <Link to={"/programs" + url}>
        <div className="side__image">
          <img className="side__img" src={image} alt={title} />
          <span className="side__duration">{days} days </span>
          {time ? (
            <span className="side__minutes">
              {" "}
              {time[0]}-{time[1]} min/day{" "}
            </span>
          ) : null}
        </div>
      </Link>
      <div className="small-programs__info">
        {startedDays.length === days
          ? 'Completed Challenge'
          : `Completed days ${startedDays.length} / ${days}`}
      </div>
      <div>
        {startedDays.length === days ? <Review /> : ''}
      </div>
    </div>
  );
};

export function useUserChallenges(currentUser: User | null) {
  const [data, setUserChallenges] = useState<[string, number[]][] | null>(null);

  useEffect(() => {
    async function startFetching() {
      setUserChallenges(null);
      try {
        if (!currentUser) return;
        const result = await getUserDocFromAuth(currentUser);
        if (!ignore && result) {
          const challenges = result.challenges;
          if (challenges) {
            const startedChallenges = challenges
              ? Object.entries(challenges)
              : [];
            setUserChallenges(startedChallenges);
          }
        }
      } catch (error) {
        if (error instanceof Error) {
          console.log("Error with get user challenges", error.code);
        }
      }
    }

    let ignore = false;
    startFetching();
    return () => {
      ignore = true;
    };
  }, [currentUser]);

  return data;
}
