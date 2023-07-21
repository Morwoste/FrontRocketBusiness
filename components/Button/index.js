import {button, button_filled} from './Button.module.css'

const Button = ({text, type}) => (
    <button className={type ? button_filled : button}>
        {text}
    </button>
);

export default Button;
