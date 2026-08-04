import Image from "next/image";

export default function ResearchSolutionsPage() {
  return (
    <main className="flex flex-col items-center justify-start px-6 lg:px-16 py-8 lg:py-12">
      <section className="w-full max-w-5xl">

        <h1
          className="text-2xl lg:text-3xl font-bold text-gray-800 mb-3 lg:mb-6"
          style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
        >
          永續財務資訊揭露智慧判讀系統 
        </h1>

        <p className="text-sm sm:text-base lg:text-lg text-emerald-700 font-semibold tracking-wider uppercase mb-6 lg:mb-8 pb-2 border-b border-emerald-100">
          Sustainable Finance Reporting Evaluation
        </p>

        {/* 第一張圖 */}
        <div className="w-full mb-8 flex justify-center">
          <Image
            src="/research_solutions/sustainFRE LOGO.png"
            alt="永續財務資訊揭露智慧判讀系統"
            width={4036}
            height={1091}
            sizes="(max-width: 768px) 90vw, 700px"
            className="w-full max-w-md sm:max-w-xl lg:max-w-2xl h-auto"
          />
        </div>

        {/* Introduction */}
        <h2
          className="text-xl lg:text-xl font-bold text-gray-800 mb-3"
          style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
        >
          Introduction
        </h2>

        <p
          className="leading-relaxed lg:leading-8 text-gray-700 text-justify text-base lg:text-lg mb-4"
          style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
        >
          SustainFRE由商學院永續財務決策研究中心團隊開發，本系統使用 AI
          模型、客觀地進行量化與質化分析企業的永續相關資訊。協助使用者能快速辨識其符合及不符合國際揭露標準之處。本系統可協助及應用在：
        </p>

        <ol
          className="space-y-3 mb-8"
          style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
        >
          {[
            '上市櫃公司對其永續財務資訊揭露的自我評量。',
            '提升企業輔導、報告審閱及品質管理效率。',
            '永續顧問服務業提升企業輔導、報告審閱及品質管理效率。',
            '第三方確認機構提升報告及一致性審閱結果。',
            '金融機構及資本市場投資人對上市櫃公司的永續評價與授信、投資決定。',
            '作為資料庫或永續評比(公司)判讀使用。',
          ].map((text, i) => (
            <li key={i} className="flex gap-3 leading-relaxed lg:leading-8 text-gray-700 text-base lg:text-lg">
              <span className="flex-none flex items-center justify-center w-6 h-6 lg:w-7 lg:h-7 rounded-full bg-emerald-600 text-white text-xs lg:text-sm font-semibold mt-0.5">
                {i + 1}
              </span>
              <span className="text-justify">{text}</span>
            </li>
          ))}
        </ol>

        {/* 第二張圖 
        <div className="w-full mb-0 flex justify-center">
          <Image
            src="/research_solutions/flow.jpg"
            alt="實施應用流程圖"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "80%", height: "auto" }}
          />
        </div>
        <p
          className="text-center text-gray-500 text-sm lg:text-base"
          style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
        >
          Sustainability-related Financial Disclosure – Smart Evaluation System 實施應用流程圖
        </p> */}

      </section>
    </main>
  );
}