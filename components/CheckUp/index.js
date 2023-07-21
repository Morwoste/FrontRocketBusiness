import {useState} from "react";

import Button from "../Button";
import {
    block,
    wrapper,
    card_image,
    card_text,
    button_wrapper,
    card_title,
    card_old_price,
    card_price,
    card_check,
    pagiArrow,
    pagiWrapper,
    pagiBlock,
    pagiActive} from "./CheckUp.module.css"
import {LeftArrow, RightArrow} from "../../public/svgs";

const CheckUp = ({checkups, checksCount}) => {
    const [pagi, setPagi] = useState(1);

    return (
        <div className={wrapper}>
            <div className={block}>
                <div className={card_text}>
                    <div className={card_title} >
                        {checkups[pagi-1].title}
                    </div>
                    <ul>
                        {
                            checkups[pagi-1].text.split('.').map(check => (
                                <li className={card_check}>{check}</li>
                            ))
                        }
                    </ul>
                    <p className={card_price}>Всего {checkups[pagi-1].price}
                        <span className={card_old_price}>{checkups[pagi-1].old_price}</span>
                    </p>
                    <div className={button_wrapper}>
                        <Button text={"Записаться"} type={'filled'}/>
                        <Button text={"Подробнее"}/>
                    </div>
                </div>
                <div className={card_image}/>
            </div>
            <div className={pagiWrapper}>
                <LeftArrow className={pagiArrow} onClick={()=>prevPagi(pagi, setPagi)}/>
                    <span className={pagiBlock}>
                        <span className={pagiActive}>{pagi}</span>/{checksCount}
                    </span>
                <RightArrow className={pagiArrow} onClick={()=>nextPagi(pagi, setPagi, checksCount)}/>
            </div>
        </div>
    );
};

const prevPagi = (pagi, setPagi) => {
    if(pagi > 1){
        pagi -=1
        setPagi(pagi)
    }
}
const nextPagi = (pagi, setPagi, checksCount) => {
    if(pagi < checksCount){
        pagi +=1
        setPagi(pagi)
    }
}

export default CheckUp;