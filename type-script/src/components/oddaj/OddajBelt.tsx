import {FC} from 'react'

interface Props{
    text: string
}

const Belt:FC<Props> = ({text}) => {

    return (
        <section className='wrapper wrapper--belt'>
            <p className= 'belt__h2'>ważne!</p>
            <p className="belt__p">{text}</p>
        </section>
    );
};

export default Belt;