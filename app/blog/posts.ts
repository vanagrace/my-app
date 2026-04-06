/**
 * 封面图来自 Unsplash（https://unsplash.com/license），可免费用于演示与产品。
 */
export const blogPosts = [
  {
    slug: "what-is-nextjs",
    title: "Next.js 是什么？为什么选择它",
    description:
      "从 React 到全栈：了解 Next.js 的定位、渲染方式以及它如何简化现代 Web 开发。",
    date: "2026-04-01",
    coverImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "办公桌上的笔记本电脑与显示器，展示代码开发场景",
  },
  {
    slug: "app-router-basics",
    title: "App Router 入门：页面、布局与导航",
    description:
      "用文件系统定义路由，掌握 layout、page 与 next/link 的基本用法。",
    date: "2026-04-05",
    coverImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "笔记本屏幕上的编程代码与编辑器界面",
  },
] as const;

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
