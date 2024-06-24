import Carousel from "../../components/carousel/Carousel";
import HomeCarousel from "../../components/carousel/HomeCarousel";
import Wrapper from "../../components/container/Wrapper";
import video from "../../../assets/images/ella-vid1.mp4"
import { brandData } from "./brandData";

const Home = () => {
    return (
        <div className="flex flex-col gap-10">
            
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