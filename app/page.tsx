import Image from "next/image";
import PopularSection from "./components/Section/PopularSection";
import OnGoingSection from "./components/Section/OnGoingSection";
import AllComicSection from "./components/Section/AllComicSection";

export default function Home() {
  return (
    <div  className="container mx-auto min-h-screen py-10">
      <PopularSection />
      <OnGoingSection />
      <AllComicSection />
    </div>
  )
}
