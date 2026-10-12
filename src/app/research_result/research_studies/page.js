import { thesesByYear } from './study';
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "永續財務研究",
  description:
    "政大永續財務決策研究中心（SFC）永續財務研究成果，涵蓋永續資訊揭露、氣候風險、ESG、永續金融與企業轉型等學術論文與研究計畫。",
  path: "/research_result/research_studies",
  keywords: ["永續財務研究", "學術論文", "氣候風險", "ESG"],
});


export default function ResearchStudiesPage() {
  return (
    <main className="flex flex-col items-center justify-start px-6 lg:px-16 py-8 lg:py-12">
      <section className="w-full max-w-5xl">
        <h1
          className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6 lg:mb-8"
          style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
        >
          永續財務研究 
        </h1>

        <div className="space-y-8 pl-4">
          {thesesByYear.map(({ year, theses }) => (
            <div key={year}>
              <h2
                className="text-lg lg:text-[22px] font-semibold text-gray-800 mb-3 border-b border-gray-300 pb-2"
                style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
              >
                {year} 年
              </h2>

              {theses.length === 0 ? (
                <p
                  className="text-gray-500 text-base lg:text-lg pl-12"
                  style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
                >
                  （待補充）
                </p>
              ) : (
                <ol className="list-decimal list-outside space-y-3 pl-12">
                  {theses.map(({ title, href }, idx) => (
                    <li
                      key={idx}
                      className="text-base lg:text-lg leading-relaxed lg:leading-8 text-gray-700 pl-1"
                      style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
                    >
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-emerald-700 hover:underline transition-colors"
                      >
                        {title}
                      </a>
                    </li>
                  ))}
                </ol>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
