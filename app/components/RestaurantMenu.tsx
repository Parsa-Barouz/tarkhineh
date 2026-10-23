export default function RestaurantMenu() {
  return (
    <section className="w-full bg-white px-6 py-10" dir="rtl">
      <h3 className="mb-12 text-center text-2xl font-bold text-gray-800">
        منوی رستوران
      </h3>

      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4">
   
        <div className="relative flex h-[210px] items-end justify-center">
          <div className="absolute bottom-5 h-24 w-full rounded-md bg-green-800 shadow-md" />

          <img
            src="/Images/drink.png"
            alt="نوشیدنی"
            className="absolute bottom-14 z-10 h-[180px] w-auto object-contain"
          />

          <button className="absolute bottom-0 z-20 min-w-28 rounded-sm bg-white px-5 py-2 text-sm shadow-md">
            نوشیدنی
          </button>
        </div>

      
        <div className="relative flex h-[210px] items-end justify-center">
          <div className="absolute bottom-5 h-24 w-full rounded-md bg-green-800 shadow-md" />

          <img
            src="/Images/dessert.png"
            alt="دسر"
            className="absolute bottom-14 z-10 h-[155px] w-[155px] rounded-full object-cover"
          />

          <button className="absolute bottom-0 z-20 min-w-28 rounded-sm bg-white px-5 py-2 text-sm shadow-md">
            دسر
          </button>
        </div>

    
        <div className="relative flex h-[210px] items-end justify-center">
          <div className="absolute bottom-5 h-24 w-full rounded-md bg-green-800 shadow-md" />

          <img
            src="/Images/appetizer.png"
            alt="پیش‌غذا"
            className="absolute bottom-14 z-10 h-[155px] w-[155px] rounded-full object-cover"
          />

          <button className="absolute bottom-0 z-20 min-w-28 rounded-sm bg-white px-5 py-2 text-sm shadow-md">
            پیش‌غذا
          </button>
        </div>

       
        <div className="relative flex h-[210px] items-end justify-center">
          <div className="absolute bottom-5 h-24 w-full rounded-md bg-green-800 shadow-md" />

          <img
            src="/Images/Main-food.png"
            alt="غذای اصلی"
            className="absolute bottom-14 z-10 h-[155px] w-[155px] rounded-full object-cover"
          />

          <button className="absolute bottom-0 z-20 min-w-28 rounded-sm bg-white px-5 py-2 text-sm shadow-md">
            غذای اصلی
          </button>
        </div>
      </div>
    </section>
  );
}