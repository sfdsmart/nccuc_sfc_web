"use client";

import Image from "next/image";
import { useState } from "react";

const eventNews = [
  {
    date: "2026/09/17",
    source: "天下雜誌",
    title: "永續財務資訊揭露智慧判讀系統SustainFRE 發表會相關報導",
    href: "https://www.cw.com.tw/article/5142939",
  },
  {
    date: "2026/09/14",
    source: "經濟日報",
    title: "政大SustainFRE亮相 AI助攻永續財務決策",
    href: "https://money.udn.com/money/story/5723/9753215",
  },
  {
    date: "2026/09/11",
    source: "政大企業永續管理研究中心",
    title:
      "政大商學院領航綠色金融科技新里程，發表「永續財務資訊揭露智慧判讀系統」SustainFRE",
    href: "https://cbs.nccu.edu.tw/zh-tw/news/zheng-da-shang-xue-yuan-ling-hanglse-jin-rong-ke-ji-xin-li-cheng-fa-biao-yong-xu-cai-wu-zi-xun-jie-lu-zhi-hui-pan-du-xi-tong-sustainfre",
  },
];

const meetingEvents = [
  {
    date: "2026/08/04",
    source: "本中心",
    title: "永續財務資訊揭露智慧判讀系統-SustainFRE 發表會",
  },
];

export default function AboutContactPage() {
  const [expanded, setExpanded] = useState(null);

  const toggleExpanded = (index) => {
    setExpanded((prev) => (prev === index ? null : index));
  };

  return (
    <main className="flex flex-col items-center justify-start px-6 lg:px-16 py-8 lg:py-12">
      <section className="w-full max-w-5xl">
        <h1
          className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 lg:mb-6"
          style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
        >
          活動新聞
        </h1>

        <ul className="space-y-3 lg:space-y-4 mb-10 lg:mb-14">
          {eventNews.map((news) => (
            <li key={news.href}>
              <a
                href={news.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 rounded-lg border border-gray-200 bg-white px-4 py-3 lg:px-5 lg:py-4 shadow-sm transition-colors hover:border-emerald-300 hover:bg-emerald-50"
              >
                <span
                  className="shrink-0 text-sm lg:text-base font-semibold text-emerald-700 sm:w-28"
                  style={{ fontFamily: "'Times New Roman', Times, serif" }}
                >
                  {news.date}
                </span>
                <span className="flex-1 text-gray-800 text-base lg:text-lg" style={{ fontFamily: "'KaiTi', '標楷體', serif" }}>
                  {news.title}
                </span>
                <span className="shrink-0 text-xs lg:text-sm text-gray-500 whitespace-nowrap">
                  {news.source}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <h1
          className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 lg:mb-6"
          style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
        >
          會議活動
        </h1>

        <ul className="space-y-3 lg:space-y-4">
          {meetingEvents.map((event, index) => {
            const isOpen = expanded === index;
            return (
              <li
                key={event.title}
                className="rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleExpanded(index)}
                  aria-expanded={isOpen}
                  className="w-full flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 px-4 py-3 lg:px-5 lg:py-4 text-left transition-colors hover:bg-emerald-50"
                >
                  <span
                    className="shrink-0 text-sm lg:text-base font-semibold text-emerald-700 sm:w-28"
                    style={{ fontFamily: "'Times New Roman', Times, serif" }}
                  >
                    {event.date}
                  </span>
                  <span
                    className="flex-1 text-gray-800 text-base lg:text-lg"
                    style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
                  >
                    {event.title}
                  </span>
                  <span className="shrink-0 flex items-center gap-3">
                    <span className="text-xs lg:text-sm text-gray-500 whitespace-nowrap">
                      {event.source}
                    </span>
                    <svg
                      className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 lg:px-5 lg:pb-6 pt-1 border-t border-gray-100">
                    <div
                      className="space-y-4 lg:space-y-5 leading-relaxed lg:leading-8 text-gray-700 text-base lg:text-lg pt-4"
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
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
