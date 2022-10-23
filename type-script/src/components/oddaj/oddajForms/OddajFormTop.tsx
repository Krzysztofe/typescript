import {FC} from 'react'

interface Props{
    text:string[]
}

const OddajFormTop:FC<Props> = ({text}) => {
    return (
        <>
            <p className='oddajFormTop__p'>{text[0]}</p>
            <h2 className='oddajFormTop__h2'>{text[1]}</h2>

        </>
    );
};

export default OddajFormTop;