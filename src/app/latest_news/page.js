import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "最新消息",
  description:
    "政大永續財務決策研究中心（SFC）最新消息與活動新聞，包含 SustainFRE 永續報告書 AI 判讀系統發表會、媒體報導與 ESG 永續財務活動資訊。",
  path: "/latest_news",
  keywords: ["最新消息", "活動新聞", "SustainFRE", "永續報告書"],
});

const eventNews = [
  {
    date: "2026/09/17",
    source: "天下雜誌",
    title: "永續報告書愈寫愈厚，誰能協助看懂報告?政大用AI破解「資訊焦慮」。",
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
    date: "2026/09/29",
    source: "本中心",
    title:
      "0911 SustainFRE 系統發表會，現場回饋問卷：免費一次永續報告書判讀服務公告",
    href: "/latest_news/sustainfre-feedback",
  },
  {
    date: "2026/08/04",
    source: "本中心",
    title: "永續財務資訊揭露智慧判讀系統-SustainFRE 發表會",
    href: "/latest_news/sustainfre-launch",
  },
];

export default function AboutContactPage() {
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
          {meetingEvents.map((event) => (
            <li key={event.href}>
              <a
                href={event.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 rounded-lg border border-gray-200 bg-white px-4 py-3 lg:px-5 lg:py-4 shadow-sm transition-colors hover:border-emerald-300 hover:bg-emerald-50"
              >
                <span
                  className="shrink-0 text-sm lg:text-base font-semibold text-emerald-700 sm:w-28"
                  style={{ fontFamily: "'Times New Roman', Times, serif" }}
                >
                  {event.date}
                </span>
                <span className="flex-1 text-gray-800 text-base lg:text-lg" style={{ fontFamily: "'KaiTi', '標楷體', serif" }}>
                  {event.title}
                </span>
                <span className="shrink-0 text-xs lg:text-sm text-gray-500 whitespace-nowrap">
                  {event.source}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
