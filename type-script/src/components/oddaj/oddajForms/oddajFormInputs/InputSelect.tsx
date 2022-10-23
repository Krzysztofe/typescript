import {useState, FC} from "react";
import IInputsValue from '../../oddajContext/GlobalContextProv'


interface Props {
    array: number[] | string []
    textLabel: string
    inputsValueSelect:  string | number
    handleSelect: (item: string | number) => void
}

const InputSelect: FC<Props> = ({
                                    array,
                                    textLabel,
                                    inputsValueSelect,
                                    handleSelect
                                }) => {

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(state => !state)
    }

    return (
        <div className='select__container'>

            <label className='selec__label'>
                {textLabel}
            </label>

            <div className='select__options'>

                <div onClick={handleOpen}
                     className="select__top">
                    {inputsValueSelect}
                    <div className={open ? 'select__arrow--up' : 'select__arrow'}></div>
                </div>

                {open &&
                    <>
                        {array.map(item => {
                            return <div key={item}
                                        className="select__option"
                                        onClick={e => {
                                            handleSelect(item)
                                            handleOpen()
                                        }}>
                                {item}
                            </div>
                        })
                        }
                    </>
                }

            </div>
        </div>
    );
};


export default InputSelect;