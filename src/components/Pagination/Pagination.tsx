import { FC, ComponentProps } from 'react';
import './Pagination.scss';

export type Props = {
    className?: string;
    pageNum?: number;

};


        
const Pagination: FC<Props> = ({ className, pageNum }: Props) => (
    <div className='pagination'>
        {pageNum }
        
    </div>
);

export default Pagination;
