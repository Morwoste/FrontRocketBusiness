import Container from "../components/Container";
import About from "../components/About";
import Nav from "../components/Nav";
import ContainerWide from "../components/ContainerWide";
import CheckUp from "../components/CheckUp";
import Footer from "../components/Footer";

import {
    wrapper,
    main_background,
    header_title} from '../styles/index.module.css'
import {nav_wrapper} from '../components/Nav/Nav.module.css'
import {footer_media_wrapper} from '../components/ContainerWide/ContainerWide.module.css'
import {container, checkUp_wrapper} from  "../styles/index.module.css"

const Main = ({checkups, checksCount}) => (
        <div className={container}>
            <Container>
                <About/>
            </Container>
            <div className={nav_wrapper} >
                <Container>
                    <Nav/>
                </Container>
            </div>
            <ContainerWide height={"533px"}>
                <Container>
                    <div className={wrapper}>
                        <h3 className={header_title}>Многопрофильная клиника для детей и взрослых</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </p>
                    </div>
                </Container>
                <div className={main_background}/>
            </ContainerWide>
            <Container >
                <CheckUp checkups={checkups} checksCount={checksCount}/>
            </Container>
            <ContainerWide color={"#08664F"} height={"144px"}>
                <div className={footer_media_wrapper}>
                    <Container>
                        <Footer/>
                    </Container>
                </div>
            </ContainerWide>
        </div>
    );

export const getServerSideProps = async () => {
    const resChecks = await fetch('http://rocket-business/checkups');
    const checkups = await resChecks.json();
    const resChecksCount = await fetch('http://rocket-business/getCheckUpsCount');
    const checksCount = await resChecksCount.json();
    return {
        props: {checkups,checksCount}
    }
}

export default Main;