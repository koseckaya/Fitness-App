import 'CompletedChallenges.scss';
import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useUserData } from '../Preferences';
import { ProgramCard } from '../ProgramCard';
import { UserContext } from '../utils/contexts';

export type Props = {
    className?: string;
    title?: string;
    image?: string;
    url?: string;
    days?: number;
    time?: number[];
};

export const CompletedChallenges = () => {

  const { currentUser } = useContext(UserContext);
  const userData = useUserData(currentUser);

  return (
    <div className='programs-container'>
      {filteredPrograms.length !== 0 ? (
        filteredPrograms.map((i) => <ProgramCard title={i.title}
          image={i.imageUrl1} url={i.path} days={i.days}
          time={i.time} type={i.type} equip={i.equip} key={i.id } />
          )
      ) : <p>Start Workout Programs</p> }
     </div>
  );
}


const smallProgrammCard: FC<Props> = ({ title, image, url, days, time,}: Props) => {
  return (
    <Link to={'/programs' + url}>
      <div className="side__image">
        <img className="side__img" src={image} alt={title}/>
        <span className="side__duration">{days} days </span>
        { time ? <span className="side__minutes"> {time[0]}-{time[1]} min/day </span> : null}
      </div>
    </Link>
  );
}