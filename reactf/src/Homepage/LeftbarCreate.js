import './Leftbar.scss';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { IoIosArrowDropdownCircle, IoIosArrowDropup, IoIosAdd } from "react-icons/io";

const LeftbarCreate = ({ createboard }) => {
    const [board, setboard] = useState("");
    const [icon, setIcon] = useState("IoIosArrowDropdownCircle");
    const changeInput = (e) => {
        setboard(e.target.value)
    }
    const changeIcon = () => {
        if (icon === "IoIosArrowDropdownCircle")
            setIcon("IoIosArrowDropup")
        else
            setIcon("IoIosArrowDropdownCircle")
    }
    const setBoard = () => {
        createboard((prev) => {
            return [...prev, { id: nanoid(), board: board }]
        })
    }
    const expandList = () => {
        return (
            <div>
                {icon === "IoIosArrowDropdownCircle" ?
                    <button onClick={() => changeIcon()}><label htmlFor="leftbarcreate" className='labelleftbar create'><IoIosArrowDropdownCircle className='icon' />Create</label></button>
                    :
                    <button onClick={() => changeIcon()}><label htmlFor="leftbarcreate" className='labelleftbar create'><IoIosArrowDropup className='icon' />Create</label></button>}

                <input type="checkbox" id="leftbarcreate"></input>
                <table className="leftbartable">
                    <tbody>
                        <tr className="leftbar create"><td><input type='text' value={board} onChange={changeInput} /></td><td><IoIosAdd className='icon add' onClick={setBoard}></IoIosAdd></td></tr>
                    </tbody>
                </table>
            </div >
        )
    }
    return (
        <div>
            {/* <button>Create<IoIosArrowDropdownCircle className='icon ic1'></IoIosArrowDropdownCircle></button>
            <input type='text' className='inputboard'></input> */}
            {expandList()}
        </div>
    )
}

export default LeftbarCreate;