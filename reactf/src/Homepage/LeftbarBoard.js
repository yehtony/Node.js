import './Leftbar.scss';
import { useState } from 'react';
import { IoIosArrowDropdownCircle, IoIosArrowDropup } from "react-icons/io";

const LeftbarBoard = ({ board }) => {
    const [icon, setIcon] = useState("IoIosArrowDropdownCircle");
    const changeIcon = () => {
        if (icon === "IoIosArrowDropdownCircle")
            setIcon("IoIosArrowDropup")
        else
            setIcon("IoIosArrowDropdownCircle")
    }
    const expandList = () => {
        return (
            <div>
                {icon === "IoIosArrowDropdownCircle" ?
                    <button onClick={() => changeIcon()}><label for="leftbarboard" className='labelleftbar board'><IoIosArrowDropdownCircle className='icon'/>Board</label></button>
                    :
                    <button onClick={() => changeIcon()}><label for="leftbarboard" className='labelleftbar board'><IoIosArrowDropup className='icon'/>Board</label></button>}

                <input type="checkbox" id="leftbarboard"></input>
                <table className="leftbartable">
                    {board.map((item) => {
                        const { id, board } = item;
                        return (
                            <tr className="leftbar board"><td>{board}</td></tr>
                        )
                    })}
                </table>
            </div >
        )
    }
    return (
        <div>
            {expandList()}
        </div>
    )
}

export default LeftbarBoard;