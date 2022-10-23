import React, {useContext, FC} from 'react';
import {GlobalContext} from "../../oddajContext/GlobalContextProv";

interface Props {
    label: string;
    name: string;
    value: string;
    type: string
}

const InputText: FC<Props> = ({
                                  label,
                                  name,
                                  value,
                                  type
                              }) => {

    const {handleChange} = useContext(GlobalContext)

    return (
        <div className='form4__inputContainer'>
            <label className='form4__label'>{label}</label>
            <input type={type} name={name}
                   value={value}
                   onChange={handleChange}
                   className='form4__input'/>
        </div>
    );
};

export default InputText;