import {container, link} from './Nav.module.css'

const Nav = () => (
        <div className={container}>
            <p className={link}>О клинике</p>
            <p className={link}>Услуги</p>
            <p className={link}>Специалисты</p>
            <p className={link}>Цены</p>
            <p className={link}>Контакты</p>
        </div>
    );

export default Nav;