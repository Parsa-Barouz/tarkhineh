
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Branches() {
  return (
    <>
      <h3 className="mt-10 text-center text-xl font-bold sm:mt-15 sm:text-2xl">
        ترخینه گردی
      </h3>

      <div className="moreBranche my-10 grid grid-cols-1 gap-5 px-4 sm:my-15 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:px-6">

  
        <div className="vanak">
          <Card className="relative mx-auto w-full max-w-sm pt-0">
            <img
              src="/Images/Branches-Image.png"
              alt="شعبه اکباتان"
              className="aspect-video w-full rounded-t-xl object-cover"
            />
            <CardHeader>
              <CardTitle className="text-base sm:text-lg">
                شعبه اکباتان
              </CardTitle>
              <CardDescription className="text-sm leading-6">
                شهرک اکباتان فاز 3 مجتمع تجاری کوروش طبقه نهم
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="w-full cursor-pointer rounded-lg border border-green-700 bg-white px-4 py-2 text-sm text-green-700 transition-colors hover:bg-green-50">
                تماشای شعبه
              </Button>
            </CardFooter>
          </Card>
        </div>

 
        <div className="aghdasieh">
          <Card className="relative mx-auto w-full max-w-sm pt-0">
            <img
              src="/Images/Branches-1Image.png"
              alt="شعبه اقدسیه"
              className="aspect-video w-full rounded-t-xl object-cover"
            />
            <CardHeader>
              <CardTitle className="text-base sm:text-lg">
                شعبه اقدسیه
              </CardTitle>
              <CardDescription className="text-sm leading-6">
                خیابان اقدسیه نرسیده به میدان خیام پلاک 9
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="w-full cursor-pointer rounded-lg border border-green-700 bg-white px-4 py-2 text-sm text-green-700 transition-colors hover:bg-green-50">
                تماشای شعبه
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="chalos">
          <Card className="relative mx-auto w-full max-w-sm pt-0">
            <img
              src="/Images/Branches-1Image.png"
              alt="شعبه ونک"
              className="aspect-video w-full rounded-t-xl object-cover"
            />
            <CardHeader>
              <CardTitle className="text-base sm:text-lg">
                شعبه ونک
              </CardTitle>
              <CardDescription className="text-sm leading-6">
                میدان ونک خیابان فردوسی نبش کوچه نیلوفر پلاک 24
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="w-full cursor-pointer rounded-lg border border-green-700 bg-white px-4 py-2 text-sm text-green-700 transition-colors hover:bg-green-50">
                تماشای شعبه
              </Button>
            </CardFooter>
          </Card>
        </div>

 
        <div className="akbatan">
          <Card className="relative mx-auto w-full max-w-sm pt-0">
            <img
              src="/Images/Branches-Image.png"
              alt="شعبه چالوس"
              className="aspect-video w-full rounded-t-xl object-cover"
            />
            <CardHeader>
              <CardTitle className="text-base sm:text-lg">
                شعبه چالوس
              </CardTitle>
              <CardDescription className="text-sm leading-6">
                چالوس خیابان 17 شهریور بعد کوچه کوروش جنب داروخانه
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="w-full cursor-pointer rounded-lg border border-green-700 bg-white px-4 py-2 text-sm text-green-700 transition-colors hover:bg-green-50">
                تماشای شعبه
              </Button>
            </CardFooter>
          </Card>
        </div>

      </div>
    </>
  );
}
