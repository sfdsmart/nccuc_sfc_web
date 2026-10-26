// SustainFRE 研究成果簡報（來源：研究成果-網頁發布.pdf，以 1920x1080 匯出）
const slide = (page, alt) => ({ src: `/research_solutions/slides/p${page}.jpg`, alt });

export const introSlides = [
  slide("03", "SustainFRE系統介紹：檢視分析揭露建議、人工判讀報告書、討論確保正確性、訓練AI大型語言模型、檢驗調校模型"),
  slide("04", "TCFD 與 IFRS S1／S2 介紹"),
  slide("05", "TCFD與IFRS S2揭露內容AI判讀框架"),
];

// 新增研究時，記得在 src/app/sitemap.js 加上對應路徑
export const applicationStudies = [
  {
    slug: "financial-industry-disclosure",
    title: "銀行及金融業揭露及未來報酬率關聯性分析",
    description:
      "以 SustainFRE 分析 2021~2025 年金融業 TCFD 揭露比例與趨勢，並檢驗銀行 TCFD 揭露程度及其變動與未來累積異常報酬（BHAR）之關聯性。",
    keywords: ["TCFD", "金融業", "銀行", "BHAR", "揭露比例"],
    slides: [
      slide("07", "2021~2025金融業TCFD揭露比例研究結果"),
      slide("08", "銀行TCFD總揭露比例與未來報酬率關聯性分析"),
      slide("09", "銀行TCFD總揭露變動與未來報酬率關聯性分析"),
      slide("10", "銀行TCFD四大面向揭露變動與未來報酬率關聯性分析"),
    ],
  },
  {
    slug: "s2-disclosure-large-capital",
    title: "鋼鐵、水泥業、其他產業資本額達100億以上者S2 揭露比例",
    description:
      "以 SustainFRE 判讀鋼鐵、水泥業及資本額達 100 億以上企業之 IFRS S2 揭露比例，並分析 S2 相關資訊揭露落差與挑戰。",
    keywords: ["IFRS S2", "鋼鐵", "水泥", "揭露比例", "揭露落差"],
    slides: [
      slide("12", "鋼鐵、水泥業、其他產業資本額達100億以上者S2 揭露比例"),
      slide("13", "S2相關資訊揭露落差與挑戰"),
    ],
  },
  {
    slug: "semiconductor-supply-chain",
    title: "半導體供應鏈TCFD、S2揭露(以2025年ESG報告書為例)與ESG評等之關聯性分析",
    description:
      "以 SustainFRE 判讀 2025 年半導體供應鏈企業 ESG 報告書之 TCFD 與 IFRS S2 揭露比例，並分析其與各 ESG 評等之關聯性。",
    keywords: ["半導體供應鏈", "TCFD", "IFRS S2", "ESG評等"],
    slides: [
      slide("15", "半導體供應鏈TCFD/S2揭露比例成果-以2025年ESG報告書為例"),
      slide("16", "半導體供應鏈TCFD/S2判讀結果與ESG評等之關聯性"),
    ],
  },
];
