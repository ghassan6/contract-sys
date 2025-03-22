import Slider from "./Slider";
import Counter from "./Counter";
import Benefits from "./Benefits";
import AboutBanner from "./AboutBanner";
import Youtube from "./Youtube";

export default function Home() {
    return (
        <div>
            <Slider />
            <Counter />
            <AboutBanner />
            <Benefits />
            {/* <Youtube /> */}
            
        </div>
    )
}