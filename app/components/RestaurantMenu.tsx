
export default function RestaurantMenu() {
  return (
    <section className="w-full bg-white px-4 py-8 sm:px-6 sm:py-10" dir="rtl">
      <h3 className="mb-8 text-center text-xl font-bold text-gray-800 sm:mb-12 sm:text-2xl">
        منوی رستوران
      </h3>

      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5 sm:gap-y-12 md:grid-cols-4">

 
        <div className="relative flex h-[170px] items-end justify-center sm:h-[210px]">
          <div className="absolute bottom-4 h-20 w-full rounded-md bg-green-800 shadow-md sm:bottom-5 sm:h-24" />

          <img
            src="/Images/drink.png"
            alt="نوشیدنی"
            className="absolute bottom-12 z-10 h-[135px] w-auto object-contain sm:bottom-14 sm:h-[180px]"
          />

          <button className="absolute bottom-0 z-20 min-w-24 rounded-sm bg-white px-4 py-2 text-xs shadow-md sm:min-w-28 sm:px-5 sm:text-sm">
            نوشیدنی
          </button>
        </div>

        
        <div className="relative flex h-[170px] items-end justify-center sm:h-[210px]">
          <div className="absolute bottom-4 h-20 w-full rounded-md bg-green-800 shadow-md sm:bottom-5 sm:h-24" />

          <img
            src="/Images/dessert.png"
            alt="دسر"
            className="absolute bottom-12 z-10 h-[125px] w-[125px] rounded-full object-cover sm:bottom-14 sm:h-[155px] sm:w-[155px]"
          />

          <button className="absolute bottom-0 z-20 min-w-24 rounded-sm bg-white px-4 py-2 text-xs shadow-md sm:min-w-28 sm:px-5 sm:text-sm">
            دسر
          </button>
        </div>

   
        <div className="relative flex h-[170px] items-end justify-center sm:h-[210px]">
          <div className="absolute bottom-4 h-20 w-full rounded-md bg-green-800 shadow-md sm:bottom-5 sm:h-24" />

          <img
            src="/Images/appetizer.png"
            alt="پیش‌غذا"
            className="absolute bottom-12 z-10 h-[125px] w-[125px] rounded-full object-cover sm:bottom-14 sm:h-[155px] sm:w-[155px]"
          />

          <button className="absolute bottom-0 z-20 min-w-24 rounded-sm bg-white px-4 py-2 text-xs shadow-md sm:min-w-28 sm:px-5 sm:text-sm">
            پیش‌غذا
          </button>
        </div>

      
        <div className="relative flex h-[170px] items-end justify-center sm:h-[210px]">
          <div className="absolute bottom-4 h-20 w-full rounded-md bg-green-800 shadow-md sm:bottom-5 sm:h-24" />

          <img
            src="/Images/Main-food.png"
            alt="غذای اصلی"
            className="absolute bottom-12 z-10 h-[125px] w-[125px] rounded-full object-cover sm:bottom-14 sm:h-[155px] sm:w-[155px]"
          />

          <button className="absolute bottom-0 z-20 min-w-24 rounded-sm bg-white px-4 py-2 text-xs shadow-md sm:min-w-28 sm:px-5 sm:text-sm">
            غذای اصلی
          </button>
        </div>

      </div>
    </section>
  );
}
