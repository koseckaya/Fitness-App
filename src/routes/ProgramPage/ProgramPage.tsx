import { FC, useState, useCallback } from 'react';
import './ProgramPage.scss';
import { useParams } from "react-router-dom";
import { programs, Programs } from '../../data';
import { Container } from '../../components/Container';

export type Props = {
    className?: string;

};



const ProgramPage: FC<Props> = ({ className }: Props) => {
    let { programId } = useParams();
    const program: Programs = programs.filter(prog => prog.path === '/' + programId)[0]

    const [week, setWeek] = useState(1);

    const countWeek = Math.ceil(program.days / 7)
    const filterWeeks =[]
    for (let i = 1; i <= countWeek; i++) {
        filterWeeks.push({value: `Week ${i}`, key: i})
    }
    filterWeeks.push({ value: `View All`, key: 0 })
    
    const handleWeekClick = useCallback(
        (e: any) => {
            const target = e.target
            console.log('target', target.dataset.week);
        setWeek(+target.dataset.week)
      },
      [setWeek],)
    

    return (
        <Container>
            <div className='program-page'>
                <div className='program-page__side'>
                    <div className='side__image'>
                        <img className='side__img' src={program.imageUrl2} alt={program.title} />
                        <span className='side__duration'>{program.days} days</span>
                        <span className='side__minutes'>{program.time[0]}-{program.time[1]} min/day</span>
                    </div>
                    <div className='side__type'>{program.type.join(', ')}</div>
                    <div className='side__equip'>{program.equip.join(', ')}</div>
                    <div className='side__title'>DETAILS</div>
                    <div className='side__desc'>{program.description}</div>
                </div>

                <div className='program-page__main'>
                    <h3>{program.title}</h3> 
                    <div className='schedule'>
                        <div className="schedule__head">
                        <div className="schedule__title">Full Schedule List View</div>
                        <div className="schedule__weeks">
                            
                                {filterWeeks.map(i => {
                                    const classActive = week === i.key ? "active" : '';
                                    return <span className={`schedule__week ${classActive}` } key={i.key}
                                           onClick={handleWeekClick}
                                           data-week={i.key}>{i.value}
                                       </span>  
                                   
                                })
                            }
                            
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
            
            
        </Container>
        


    )
    
}


export default ProgramPage;
