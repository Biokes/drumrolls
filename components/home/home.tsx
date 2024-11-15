import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/hero";
import Shortlet from "@/components/home/shortlets";
import StoryBoard from "@/components/home/StoryComp";

export default function Home(){
    return (
        <div>

            <Navbar/>
            <Hero/>
            <Shortlet/>
            <StoryBoard/>

        </div>
    )
}