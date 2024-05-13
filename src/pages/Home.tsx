import { HelmetProvider } from "react-helmet-async";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BottomNavbar from "../components/DrawerNav/BottomNavbar";
import City from "../components/city/City";
import Navbar from "@/components/navbar/Navbar";

export const Home = () => {
    const images = [
        "/assets/img/c6.jpg",
        "/assets/img/c2.jpg",
        "/assets/img/c3.jpg",
        "/assets/img/c4.jpg",
        "/assets/img/c1.jpg"
    ];

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <HelmetProvider>
            <Navbar />
            <div className="w-full p-2 my-4">
            <Carousel
                responsive={responsive}
                autoPlay={true}
                infinite={true}
                autoPlaySpeed={2000} // Adjust the speed as needed
                arrows={false}
                showDots={true}
                
            >
                {images.map((image, index) => (
                    <img className="rounded-xl" key={index} src={image} alt={`image-${index}`} style={{ width: '100%', height: '180px' }} />
                ))}
            </Carousel>
            </div>
            <City />
            <BottomNavbar />
        </HelmetProvider>
    );
};
