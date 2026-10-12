import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "聯絡我們",
  description:
    "聯絡國立政治大學商學院永續財務決策研究中心（政大永續財務中心，NCCU SFC），洽詢永續財務研究合作、ESG 與永續報告書判讀服務。",
  path: "/about/contact",
  keywords: ["聯絡我們", "永續報告書判讀", "合作洽詢"],
});

export default function AboutContactPage() {
  return (
    <main className="flex flex-col items-center justify-start px-6 lg:px-16 py-8 lg:py-12">
      <section className="w-full max-w-5xl">
        <h1
          className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 lg:mb-6"
          style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
        >
          聯絡我們
        </h1>

        <p
          className="leading-relaxed lg:leading-8 text-gray-700 text-justify text-base lg:text-lg"
          style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
        >
          聯絡中心：彭青惠 經理 <br />
          電話：02-29393091*81108 <br />
          E-MAIL：135360@nccu.edu.tw <br />
          中心地址：11605 台北市文山區指南路二段64號(政大商學院8樓81108室) <br />

        </p>
      </section>
    </main>
  );
}

