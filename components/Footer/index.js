import {wrapper, logo, nav, media_wrapper, nav_item, icon, icons} from './Footer.module.css'
import {Instagram, Telegram, Whatsapp} from "../../public/svgs";

const Footer = () => (
        <div className={wrapper}>
            <div className={media_wrapper}>
                <p className={logo}>LOGO</p>
                <ul className={nav}>
                    <li className={nav_item}>О клинике</li>
                    <li className={nav_item}>Услуги</li>
                    <li className={nav_item}>Специалисты</li>
                    <li className={nav_item}>Цены</li>
                    <li className={nav_item}>Контакты</li>
                </ul>
            </div>
            <div className={icons}>
                <Instagram className={icon}/>
                <Telegram className={icon}/>
                <Whatsapp className={icon}/>
            </div>
        </div>
    );

export default Footer;