import Header from "../Header";
import HeroSlider from "../HeroSlider";
import Sliderproduct from "../branches/sliderproduct";

export default function BranchesPage(){
return(
<>

 <Header/>

   <HeroSlider/>

   <div className="container mx-auto max-w-[1700px] px-4">

<Sliderproduct/>
<Sliderproduct/>
<Sliderproduct/>
   </div>
</>
   

)



}