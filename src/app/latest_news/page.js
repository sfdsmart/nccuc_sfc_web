import Image from "next/image";

export default function AboutContactPage() {
  return (
    <main className="flex flex-col items-center justify-start px-6 lg:px-16 py-8 lg:py-12">
      <section className="w-full max-w-5xl">
        <h1
          className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 lg:mb-6"
          style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
        >
          相關活動
        </h1>

        <div
          className="space-y-4 lg:space-y-5 leading-relaxed lg:leading-8 text-gray-700 text-base lg:text-lg"
          style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
        >
          <p className="text-justify">
            政治大學永續中心暨政治大學商學院永續財務決策研究中心將於
            <span className="font-semibold text-gray-900">
              2026/9/11(五) 14:00–17:00
            </span>
            在政大公企中心發表
          </p>

          <p className="text-lg lg:text-xl font-bold text-emerald-700 text-center py-2">
            【永續財務資訊揭露智慧判讀系統-SustainFRE】
          </p>

          <p className="text-justify">
            由商學院永續財務決策研究中心團隊開發，本系統透過 AI
            模型、客觀地進行量化與質化分析企業的永續相關資訊，辨識其符合及不符合國際揭露標準之處。得以：
          </p>

          <ul className="space-y-2 pl-1 sm:pl-2">
            <li className="flex gap-2">
              <span className="text-emerald-600 font-bold">•</span>
              <span>協助企業快速判斷永續揭露品質、進一步檢視並調整企業永續政策及行動</span>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-600 font-bold">•</span>
              <span>協助銀行及投資人降低授信/投資風險</span>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-600 font-bold">•</span>
              <span>協助利害關係人評估企業永續實質行動</span>
            </li>
          </ul>

          <p className="text-justify">
            會中將展演【SustainFRE】之實際應用，亦邀請企業分享、並進行專家學者座談，歡迎報名參加。
          </p>

          <p className="flex flex-wrap items-baseline gap-1">
            <span className="font-semibold">報名連結：</span>
            <a
              href="https://forms.gle/Pgjhyj2sqSMesmX39"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline break-all hover:text-blue-800"
            >
              https://forms.gle/Pgjhyj2sqSMesmX39
            </a>
          </p>

          <p className="rounded-lg bg-amber-50 border border-amber-200 px-4 py-2 text-amber-800 text-sm lg:text-base">
            （名額限量90名，通過審核者將寄發邀請通知）
          </p>

          <p className="font-semibold text-gray-900">
            【發表會】相關資訊請參考下方文件
          </p>
        </div>

        <div className="mt-6 lg:mt-8 flex justify-center">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none">
            <Image
              src="/latest_news/A1-0805ver.jpg"
              alt="TCFD永續財務資訊揭露智慧判讀系統發表會海報"
              width={3179}
              height={4494}
              sizes="(max-width: 640px) 320px, (max-width: 768px) 384px, (max-width: 1024px) 448px, 900px"
              quality={90}
              className="w-full h-auto rounded-lg shadow-md border border-gray-100"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
