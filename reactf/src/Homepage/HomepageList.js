import './Leftbar.scss';
import { useState } from 'react';
import { IoIosArrowDropdownCircle, IoIosArrowDropup } from "react-icons/io";

const HomepageList = ({ board }) => {
    const [icon, setIcon] = useState("IoIosArrowDropdownCircle");
    const changeicon = () => {
        if (icon === "IoIosArrowDropdownCircle")
            setIcon("IoIosArrowDropup")
        else
            setIcon("IoIosArrowDropdownCircle")
    }
    const Icon = () => {
        return (
            icon === "IoIosArrowDropdownCircle" ?
                <div className="leftbar">
                    <button onClick={() => changeicon()}><label for="boardlist" className='labelboardlist'>Board<IoIosArrowDropdownCircle className='icon ic1'></IoIosArrowDropdownCircle></label></button>
                    <input type="checkbox" id="boardlist"></input>
                    <table>
                        {board.map((item) => {
                            const { id, board } = item;
                            return (
                                <tr className="boardlisttr">{board}</tr>
                            )
                        })}
                    </table>
                </div >
                :
                <div className="leftbar">
                    <button onClick={() => changeicon()}><label for="boardlist" className='labelboardlist'>Board<IoIosArrowDropup className='icon ic1'></IoIosArrowDropup></label></button>
                    <input type="checkbox" id="boardlist"></input>
                    <table>
                        {board.map((item) => {
                            const { id, board } = item;
                            return (
                                <tr className="boardlisttr">{board}</tr>
                            )
                        })}
                    </table>
                </div >)
    }
    return (
        <div>
            {Icon()}
        </div>
    )
}

export default HomepageList;