import Carousel from "../../components/carousel/Carousel";
import HomeCarousel from "../../components/carousel/HomeCarousel";
import Wrapper from "../../components/container/Wrapper";
import video from "../../../assets/images/ella-vid1.mp4"
import { brandData } from "./brandData";
import { useSelector } from "react-redux";
import PopupModal from "../../components/popups/PopupModal";

const Home = () => {

    const user = useSelector((state) => {
        return state.user;
    });

    return (
        <div className="flex flex-col gap-10">
            <PopupModal/>
            <HomeCarousel />
            <Wrapper items={brandData}/>
            <video autoPlay muted loop className="mx-auto w-11/12" style={{height:'550px'}}>
                <source src={video} type="video/mp4"></source>
            </video>
            <Carousel />
            <Carousel />
            <Carousel />
            
     
        </div>
    );
};

export default Home;