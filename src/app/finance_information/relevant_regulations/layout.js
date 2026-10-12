import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "永續財務相關法規",
  description:
    "政大永續財務決策研究中心（SFC）彙整永續財務相關法規，包括 IFRS S1、S2 永續揭露準則、GRI、TCFD、歐盟 CSRD 與分類標準，以及臺灣上市櫃公司永續報告書編製等國內外 ESG 規範。",
  path: "/finance_information/relevant_regulations",
  keywords: ["永續財務法規", "IFRS S1 S2", "永續報告書", "ESG揭露"],
});

export default function RelevantRegulationsLayout({ children }) {
  return children;
}
