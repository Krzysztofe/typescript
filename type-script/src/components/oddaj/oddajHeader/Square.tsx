import {FC} from 'react'

interface Props{
    number:number;
    text: string
    counter: number
}

const Square:FC<Props>= ({number, text, counter}) => {

    return (
        <>
            <div className='square square--BacgroundColor'>
                <div className="square__rectangle">
                    <h3 className='square__h3'>
                        {number}
                    </h3>
                    <p className='square__p'>
                        {text}
                    </p>
                </div>
            </div>
        </>
    );
};

export default Square;


// <div className={`square ${counter >= number &&
// 'square--BacgroundColor'}`}>
//     <div className="square__rectangle">
//         <h3 className='square__h3'>
//             {number}
//         </h3>
//         <p className='square__p'>
//             {text}
//         </p>
//     </div>
// </div>