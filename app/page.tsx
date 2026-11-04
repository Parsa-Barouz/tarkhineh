import Branches from "./components/Branches";
import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import RestaurantMenu from "./components/RestaurantMenu";
import MoreInformation  from "./components/moreinformation";
import Footer  from "./components/Footer";
import BranchesPage from "./components/branches/BranchesPage";

export default function Home() {
  return (
    <main>
   

      {/* <Header/>
   <HeroSlider/>
   <RestaurantMenu/>
   <MoreInformation />
   <Branches/>
   <Footer/> */}
   <BranchesPage/>

    </main>
  );
}
