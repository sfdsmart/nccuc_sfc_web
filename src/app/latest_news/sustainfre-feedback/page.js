import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "免費一次永續報告書判讀服務公告",
  description:
    "SustainFRE 系統發表會現場回饋問卷：政大永續財務決策研究中心（SFC）提供填答單位免費一次永續報告書 AI 判讀服務，協助檢視 ESG 永續資訊揭露。",
  path: "/latest_news/sustainfre-feedback",
  keywords: ["永續報告書判讀", "免費", "SustainFRE", "ESG"],
});


const awardees = [
  "新光人壽保險股份有限公司",
  "中國信託產物保險股份有限公司",
  "遠雄建設事業股份有限公司",
  "群泰聯合會計師事務所",
  "元植管理顧問有限公司",
  "恆耀永續有限公司",
  "金寶電子工業股份有限公司",
  "茂菱企業股份有限公司",
  "Garmin Corporation",
  "勤美股份有限公司",
  "益實實業股份有限公司",
  "廣積科技股份有限公司",
  "元智大學",
  "國立彰化師範大學",
  "台灣淨零路徑社會科學推動計畫",
  "臺灣期貨交易所股份有限公司",
  "臺灣集中保管結算所",
];

export default function SustainFreFeedbackPage() {
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
          0911 SustainFRE 系統發表會，現場回饋問卷：免費一次永續報告書判讀服務公告
        </h1>
        <p className="text-sm lg:text-base text-gray-500 mb-6 lg:mb-8">
          發佈日期：2026/09/29　｜　發布單位：本中心
        </p>

        <div
          className="space-y-4 lg:space-y-5 leading-relaxed lg:leading-8 text-gray-700 text-base lg:text-lg"
          style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
        >
          <p className="text-justify">
            感謝來賓熱烈參與本中心 9 月 11 日於政大公企中心舉辦之「
            <Link
              href="/latest_news/sustainfre-launch"
              className="text-emerald-700 underline underline-offset-2 hover:text-emerald-900"
            >
              SustainFRE 永續財務資訊揭露智慧判讀系統發表會
            </Link>
            」。現場回饋問卷，經審查後，在此恭喜以下單位獲得免費一次
            <span className="font-semibold text-gray-900">
              SustainFRE 系統-永續報告書判讀服務
            </span>
            。
          </p>
        </div>

        <div className="mt-6 lg:mt-8 overflow-hidden rounded-lg border border-gray-200 shadow-sm">
          <div
            className="bg-emerald-50 px-4 py-3 lg:px-5 text-base lg:text-lg font-semibold text-emerald-800 border-b border-gray-200"
            style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
          >
            公司/單位名稱
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 bg-white">
            {awardees.map((name) => (
              <li
                key={name}
                className="px-4 py-3 lg:px-5 text-gray-800 text-base lg:text-lg border-b border-gray-100"
                style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
