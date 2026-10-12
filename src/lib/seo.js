export const SITE_URL = "https://nccuc-sfc-web.vercel.app";
export const SITE_NAME = "國立政治大學商學院永續財務決策研究中心";
export const SITE_SHORT_NAME = "政大永續財務決策研究中心";

export const OG_IMAGE = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: `${SITE_NAME}（NCCU Commerce Sustainable Finance Center, SFC）`,
};

// 產生各頁 metadata。Next.js 的 openGraph 是整個物件覆寫，所以每頁都要帶完整的 openGraph 設定
export function pageMetadata({ title, description, path, keywords = [] }) {
  const fullTitle = `${title}｜${SITE_SHORT_NAME}`;
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "zh_TW",
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      url: path,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
