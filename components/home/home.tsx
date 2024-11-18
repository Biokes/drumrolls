'use client'
import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/hero";
import Shortlet from "@/components/home/shortlets";
import StoryBoard from "@/components/home/StoryComp";
import Footer from "@/components/home/footer";
import GMap from "@/components/home/map";

export default function Home(){
    return (
        <div>

            <Navbar/>
            <Hero/>
            <Shortlet/>
            <StoryBoard/>
            <GMap/>
            <Footer/>
        </div>
    )
}