import Header from "../Header";
import HeroSlider from "../HeroSlider";
import Sliderproduct from "../branches/sliderproduct";

type TextTitlepropss = {
TextTitleprops:string;
};

export default function BranchesPage(){
return(
<>

 <Header/>

   <HeroSlider/>

   <div className="container mx-auto max-w-[1700px] px-4">

<Sliderproduct TextTitleprops = "پیشنهاد ویژه "/>
<Sliderproduct TextTitleprops = "غذای محبوب"/>
<Sliderproduct TextTitleprops = "غذای غیر ایرانی "/>
   </div>
</>
   

)



}