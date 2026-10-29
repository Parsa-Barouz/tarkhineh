

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Branches(){

return(

<>

<h3 className=" flex justify-center mt-15 text-2xl font-bold">ترخینه گردی</h3>

<div className="moreBranche grid grid-cols-4 my-15 ">



<div className="vanak ">
    <Card className="  relative mx-auto w-full max-w-sm pt-0">
      <div className=" absolute inset-0 z-30 aspect-video " />
    <img
        src="Images/Branches-Image.png"
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover "
      />
      <CardHeader>
        <CardAction>
          {/* <Badge variant="secondary">شعبه اکباتان</Badge> */}
        </CardAction>
        <CardTitle>شعبه اکباتان</CardTitle>
        <CardDescription>
        شهرک اکباتان فاز 3 مجتمع تجاری کوروش طبقه نهم
        </CardDescription>
      </CardHeader>
      <CardFooter>
               <Button className="w-full cursor-pointer rounded-lg border border-green-700 bg-white px-4 py-2 text-sm text-green-700 transition-colors hover:bg-green-50">تماشای شعبه </Button>

      </CardFooter>
    </Card>
</div>


<div className="aghdasieh">
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video" />
     <img
        src="Images/Branches-1Image.png"
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover "
      />
      <CardHeader>
        <CardAction>
          {/* <Badge variant="secondary">شعبه اقدسیه </Badge> */}
        </CardAction>
        <CardTitle>شعبه اقدسیه</CardTitle>
        <CardDescription>
     خیابان اقدسیه نرسیده به میدان خیام پلاک 9
        </CardDescription>
      </CardHeader>
      <CardFooter>
             <Button className="w-full cursor-pointer rounded-lg border border-green-700 bg-white px-4 py-2 text-sm text-green-700 transition-colors hover:bg-green-50">تماشای شعبه </Button>

      </CardFooter>
    </Card>
</div>



<div className="chalos">
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video"/>
      <img
        src="Images/Branches-1Image.png"
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover "
      />
      <CardHeader>
        <CardAction>
          {/* <Badge variant="secondary">شعبه ونک</Badge> */}
        </CardAction>
        <CardTitle>شعبه ونک</CardTitle>
        <CardDescription>
      میدان ونک خیابان فردوسی نبش کوچه نیلوفر پلاک 24
        </CardDescription>
      </CardHeader>
      <CardFooter>
              <Button className="w-full cursor-pointer rounded-lg border border-green-700 bg-white px-4 py-2 text-sm text-green-700 transition-colors hover:bg-green-50">تماشای شعبه </Button>

      </CardFooter>
    </Card>
</div>



<div className="akbatan">
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video" />
      <img
        src="Images/Branches-Image.png"
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover "
      />
      <CardHeader>
        <CardAction>
          {/* <Badge variant="secondary">شعبه چالوس</Badge> */}
        </CardAction>
        <CardTitle>شعبه چالوس</CardTitle>
        <CardDescription>
        چالوس خیابان 17 شهریور بعد کوچه کوروش جنب داروخانه 
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full cursor-pointer rounded-lg border border-green-700 bg-white px-4 py-2 text-sm text-green-700 transition-colors hover:bg-green-50">تماشای شعبه </Button>
      </CardFooter>
    </Card>
</div>
</div>

</>

)


}

