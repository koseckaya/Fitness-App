import { FC, useState, useCallback, useContext, useMemo } from "react";
import "./ProgramPage.scss";
import { useParams } from "react-router-dom";
import { programByDays, programs, Programs } from "../../data";
import { Container } from "../../components/Container";
import { DayProgram } from "../../components/DayProgram";
import { UserContext } from "./../../components/utils/contexts/UserContext";

export type Props = {
    className?: string;
};

const ProgramPage: FC<Props> = ({ className }: Props) => {
    let { programId } = useParams();
    const program: Programs = programs.filter(
        (prog) => prog.path === "/" + programId
    )[0];

    const [week, setWeek] = useState(1);
    const [isProgramActive, setIsProgramActive] = useState(false);

    const countWeek = Math.ceil(program.days / 7);
    const filterWeeks = [];
    for (let i = 1; i <= countWeek; i++) {
        filterWeeks.push({ value: `Week ${i}`, key: i });
    }
    filterWeeks.push({ value: `View All`, key: 0 });

    const handleWeekClick = useCallback(
        (e: any) => {
            const target = e.target;
            setWeek(+target.dataset.week);
        },
        [setWeek]
    );

    const dailyProgram = programByDays.filter(
        (prog) => prog.programId === program.id
    )[0];

    let daysData = [];
    if (week === 0) {
        daysData = dailyProgram.days;
    } else {
        const startDay = (week - 1) * 7;
        const endDay = startDay + 7;
        daysData = dailyProgram.days.slice(startDay, endDay);
    }

    const { currentUser } = useContext(UserContext);
    const isUserAuthorized = useMemo(() => {
        const isAuthorize = currentUser?.email ? true : false;
        return isAuthorize;
    }, [currentUser]);

    let classChallenge = "button start__btn ";
    let textChallenge = "";
    if (!isUserAuthorized) {
        // classChallenge += 'start__error'
         textChallenge = 'Should Sign in to Start'
        
    } else if (isProgramActive) {
        classChallenge += "start__active";
        textChallenge = "Challenge is active";
    } else {
        classChallenge += "";
        textChallenge = "Start Challenge";
    }
    console.log("isUserAuthorized", isUserAuthorized);

    const handleStartProgram = useCallback(() => {
            isProgramActive
                ? setIsProgramActive(false)
                : setIsProgramActive(true);
        
        // send data to profile
    }, [setIsProgramActive, isProgramActive]);



    return (
        <Container>
            <div className="program-page">
                <div className="program-page__side">
                    <div className="side__image">
                        <img
                            className="side__img"
                            src={program.imageUrl2}
                            alt={program.title}
                        />
                        <span className="side__duration">
                            {program.days} days
                        </span>
                        <span className="side__minutes">
                            {program.time[0]}-{program.time[1]} min/day
                        </span>
                    </div>
                    <div className="side__type">{program.type.join(", ")}</div>
                    <div className="side__equip">
                        {program.equip.join(", ")}
                    </div>
                    <div className="side__title">DETAILS</div>
                    <div className="side__desc">{program.description}</div>
                    <div className="side__start">
                        <div className="start__title">Start This Challenge</div>
                        <div className="start__desc">
                            When you start a challenge you can see your progress
                            in your personal account
                        </div>
                        <div
                            className={classChallenge}
                            onClick={isUserAuthorized ? handleStartProgram : undefined}
                        >{textChallenge}</div>
                    </div>
                </div>

                <div className="program-page__main">
                    <h3>{program.title}</h3>
                    <div className="schedule">
                        <div className="schedule__head">
                            <div className="schedule__title">
                                Full Schedule List View
                            </div>
                            <div className="schedule__weeks">
                                {filterWeeks.map((i, indx) => {
<<<<<<< HEAD
                                    const classActive = (week === i.key) ? "active" : '';
                                    return <span className={`schedule__week ${classActive}`}
                                        onClick={handleWeekClick}
                                        data-week={i.key} key={indx}>{
                                            i.value}
                                       </span>  
                                })
                            }
=======
                                    const classActive =
                                        week === i.key ? "active" : "";
                                    return (
                                        <span
                                            className={`schedule__week ${classActive}`}
                                            onClick={handleWeekClick}
                                            data-week={i.key}
                                            key={indx}
                                        >
                                            {i.value}
                                        </span>
                                    );
                                })}
>>>>>>> ed26325eb4712738369d9593ddc19dedb0767359
                            </div>
                        </div>
                        <div>
                            {daysData.map((day) => {
                                return (
                                    <DayProgram
                                        day={day.dayNum}
                                        videos={day.videos}
                                        key={day.dayNum}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ProgramPage;
