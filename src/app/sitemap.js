import { SITE_URL } from "@/lib/seo";

// 新增頁面時，記得在這裡加上路徑
const routes = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/about/center", priority: 0.9, changeFrequency: "monthly" },
  { path: "/about/director", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about/team", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about/contact", priority: 0.7, changeFrequency: "yearly" },
  { path: "/latest_news", priority: 0.9, changeFrequency: "weekly" },
  { path: "/latest_news/sustainfre-launch", priority: 0.6, changeFrequency: "yearly" },
  { path: "/latest_news/sustainfre-feedback", priority: 0.8, changeFrequency: "monthly" },
  { path: "/finance_information/news", priority: 0.7, changeFrequency: "weekly" },
  { path: "/finance_information/relevant_regulations", priority: 0.6, changeFrequency: "monthly" },
  { path: "/research_result/research_studies", priority: 0.8, changeFrequency: "monthly" },
  { path: "/research_result/research_solutions", priority: 0.9, changeFrequency: "monthly" },
  { path: "/related_links", priority: 0.5, changeFrequency: "yearly" },
];

export default function sitemap() {
  const lastModified = new Date();
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
