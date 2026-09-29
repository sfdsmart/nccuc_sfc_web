import Image from "next/image";
import Link from "next/link";

export default function SustainFreLaunchEventPage() {
  return (
    <main className="flex flex-col items-center justify-start px-6 lg:px-16 py-8 lg:py-12">
      <section className="w-full max-w-5xl">
        <Link
          href="/latest_news"
          className="inline-flex items-center gap-1 text-sm lg:text-base text-emerald-700 hover:text-emerald-900 mb-4 lg:mb-6"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          返回最新消息
        </Link>

        <h1
          className="text-2xl lg:text-3xl font-bold text-gray-800 mb-1"
          style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
        >
          永續財務資訊揭露智慧判讀系統-SustainFRE 發表會
        </h1>
        <p className="text-sm lg:text-base text-gray-500 mb-6 lg:mb-8">
          發佈日期：2026/08/04　｜　發布單位：本中心
        </p>

        <div
          className="space-y-4 lg:space-y-5 leading-relaxed lg:leading-8 text-gray-700 text-base lg:text-lg"
          style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
        >
          <p className="text-justify">
            政治大學永續中心暨政治大學商學院永續財務決策研究中心於
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
            會中展演了【SustainFRE】之實際應用，並邀請企業分享、進行專家學者座談，活動已於當日圓滿完成。
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
