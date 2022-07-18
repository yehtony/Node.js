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
                    <button onClick={() => changeIcon()}><label htmlFor="leftbarboard" className='labelleftbar board'><IoIosArrowDropdownCircle className='icon' />Board</label></button>
                    :
                    <button onClick={() => changeIcon()}><label htmlFor="leftbarboard" className='labelleftbar board'><IoIosArrowDropup className='icon' />Board</label></button>}

                <input type="checkbox" id="leftbarboard"></input>
                <table className="leftbartable">
                    <tbody>
                        {board.map((item) => {
                            const { id, board } = item;
                            return (
                                <tr className="leftbar board" key={id}><td>{board}</td></tr>
                            )
                        })}
                    </tbody>
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