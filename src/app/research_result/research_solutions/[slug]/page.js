import Link from "next/link";
import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/seo";
import SlideGallery from "@/components/SlideGallery";
import { applicationStudies } from "../slides";

export const dynamicParams = false;

export function generateStaticParams() {
  return applicationStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = applicationStudies.find((s) => s.slug === slug);
  if (!study) return {};
  return pageMetadata({
    title: study.title,
    description: study.description,
    path: `/research_result/research_solutions/${slug}`,
    keywords: ["SustainFRE", "系統應用研究", ...study.keywords],
  });
}


export default async function ApplicationStudyPage({ params }) {
  const { slug } = await params;
  const study = applicationStudies.find((s) => s.slug === slug);
  if (!study) notFound();

  return (
    <main className="flex flex-col items-center justify-start px-6 lg:px-16 py-8 lg:py-12">
      <section className="w-full max-w-5xl">
        <Link
          href="/research_result/research_solutions"
          className="inline-flex items-center gap-1 text-sm lg:text-base text-emerald-700 hover:text-emerald-900 mb-4 lg:mb-6"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          返回永續財務資訊揭露智慧判讀系統
        </Link>

        <p className="text-sm lg:text-base text-emerald-700 font-semibold tracking-wider mb-2">
          系統應用研究
        </p>

        <h1
          className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6 lg:mb-8 pb-3 border-b border-emerald-100"
          style={{ fontFamily: "'KaiTi', '標楷體', serif" }}
        >
          {study.title}
        </h1>

        <SlideGallery slides={study.slides} />
      </section>
    </main>
  );
}
