
export default function Footer() {
  return (
    <footer>
      <div className="footer bg-[url('/Images/Footer.png')] bg-cover bg-center text-white">
        <div className="grid grid-cols-1 gap-8 px-6 py-8 md:grid-cols-2">

          <div className="left flex flex-col gap-4">

            <form className="flex items-start gap-3">
              <label className="w-28 shrink-0 pt-2 text-sm">
                پیام به ترخینه
              </label>

              <div className="flex flex-1 flex-col gap-2">
                <input
                  type="text"
                  placeholder="نام و نام خانوادگی"
                  className="w-full rounded-md border border-white/30 bg-black/10 px-3 py-2 text-right text-xs outline-none placeholder:text-white/70 focus:border-white"
                />
                <input
                  type="email"
                  placeholder="آدرس ایمیل"
                  className="w-full rounded-md border border-white/30 bg-black/10 px-3 py-2 text-right text-xs outline-none placeholder:text-white/70 focus:border-white"
                />
              </div>
            </form>

            <form className="flex items-start gap-3">
              <label className="w-28 shrink-0 pt-2 text-sm">
                عضویت در خبرنامه
              </label>

              <div className="flex min-w-0 flex-1 gap-2">
                <input
                  type="email"
                  placeholder="ایمیل شما"
                  className="min-w-0 flex-1 rounded-md border border-white/30 bg-black/10 px-3 py-2 text-right text-xs outline-none placeholder:text-white/70 focus:border-white"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-md border border-white/40 px-3 py-2 text-xs transition hover:bg-white/10"
                >
                  عضویت
                </button>
              </div>
            </form>

            <form className="flex items-start gap-3">
              <label className="w-28 shrink-0 pt-2 text-sm">
                ارسال پیام
              </label>

              <div className="flex flex-1 flex-col items-start gap-2">
                <textarea
                  rows={2}
                  placeholder="متن پیام شما"
                  className="w-full resize-none rounded-md border border-white/30 bg-black/10 px-3 py-2 text-right text-xs outline-none placeholder:text-white/70 focus:border-white"
                />
                <button
                  type="submit"
                  className="rounded-md border border-white/40 px-5 py-2 text-xs transition hover:bg-white/10"
                >
                  ارسال پیام
                </button>
              </div>
            </form>

          </div>
          <div className="right">
            <div className="list flex justify-evenly gap-8">

              <div>
                <h3 className="mb-4 text-sm font-bold">
                  دسترسی آسان
                </h3>
                <ul className="flex flex-col gap-3 text-xs text-white/80">
                  <li>
                    <a href="#" className="transition hover:text-white">
                      پرسش‌های متداول
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition hover:text-white">
                      قوانین ترخینه
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition hover:text-white">
                      حریم خصوصی
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-4 text-sm font-bold">
                  شعبه‌های ترخینه
                </h3>
                <ul className="flex flex-col gap-3 text-xs text-white/80">
                  <li>
                    <a href="#" className="transition hover:text-white">
                      شعبه اکباتان
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition hover:text-white">
                      شعبه چالوس
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition hover:text-white">
                      شعبه اقدسیه
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition hover:text-white">
                      شعبه ونک
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
