import Button from "../Button";

import {wrapper, contact_block, left_block, phone_icon, right_block, about_logo, address, icon, phone, text_light} from './About.module.css'
import {display_none} from '../About/About.module.css'
import {Marker, Whatsapp} from "../../public/svgs";

const About = () => (
        <div className={wrapper}>
            <div className={left_block}>
                <p className={about_logo}>LOGO</p>
            </div>
            <div className={right_block}>
                <div className={address}>
                    <Marker className={icon}/>
                    <p>
                        Ростов-на-Дону
                        <br/>
                        <span className={text_light}>ул. Ленина,2Б</span>
                    </p>
                </div>
                <div className={contact_block}>
                    <Whatsapp className={phone_icon}  style={{'font-size': '60px'}}/>
                    <p className={phone}>+7(863)000 00 00</p>
                    <div className={display_none}>
                        <Button text={"Записаться на прием"} type={true}/>
                    </div>
                </div>
            </div>
        </div>
    );

export default About;