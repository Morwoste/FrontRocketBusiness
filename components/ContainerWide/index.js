import {container} from "./ContainerWide.module.css";

const ContainerWide = ({children, color, height}) => (
        <>
            <div className={container}>
                {children}
            </div>
            <style jsx>
                {`
                    .${container} {
                        background: ${color};
                        height: ${height};
                    }
                `}
            </style>
        </>
    );

export default ContainerWide;