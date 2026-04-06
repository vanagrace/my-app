import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPostBySlug } from "../posts";

export const metadata: Metadata = {
  title: "App Router 入门：页面、布局与导航",
  description:
    "用文件系统定义路由，掌握 layout、page 与 next/link 的基本用法。",
};

export default function AppRouterBasicsPost() {
  const post = getBlogPostBySlug("app-router-basics");
  if (!post) notFound();

  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
      <article className="flex w-full max-w-3xl flex-1 flex-col gap-8 px-6 py-16 sm:px-8 sm:py-24">
        <header className="flex flex-col gap-4 border-b border-zinc-200 pb-8 dark:border-zinc-800">
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            <Link
              href="/blog"
              className="text-zinc-950 underline-offset-4 hover:underline dark:text-zinc-50"
            >
              ← 博客列表
            </Link>
          </p>
          <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-zinc-200 dark:bg-zinc-800">
            <Image
              src={post.coverImage}
              alt={post.coverAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 672px"
              priority
            />
          </div>
          <time
            dateTime="2026-04-05"
            className="text-sm text-zinc-500 dark:text-zinc-400"
          >
            2026-04-05
          </time>
          <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50 sm:text-4xl">
            App Router 入门：页面、布局与导航
          </h1>
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            App Router 用文件夹表达 URL 结构；弄清{" "}
            <code className="rounded bg-zinc-200 px-1.5 py-0.5 font-mono text-sm dark:bg-zinc-800">
              page
            </code>{" "}
            与{" "}
            <code className="rounded bg-zinc-200 px-1.5 py-0.5 font-mono text-sm dark:bg-zinc-800">
              layout
            </code>{" "}
            的分工后，新增页面会非常直观。
          </p>
        </header>

        <div className="flex flex-col gap-6 text-base leading-7 text-zinc-700 dark:text-zinc-300">
          <p>
            在{" "}
            <code className="rounded bg-zinc-200 px-1.5 py-0.5 font-mono text-sm dark:bg-zinc-800">
              app
            </code>{" "}
            目录下，每个路由段对应一个文件夹；在该段中放置{" "}
            <code className="rounded bg-zinc-200 px-1.5 py-0.5 font-mono text-sm dark:bg-zinc-800">
              page.tsx
            </code>{" "}
            即可对外提供该路径的 UI。例如{" "}
            <code className="rounded bg-zinc-200 px-1.5 py-0.5 font-mono text-sm dark:bg-zinc-800">
              app/blog/page.tsx
            </code>{" "}
            对应{" "}
            <code className="rounded bg-zinc-200 px-1.5 py-0.5 font-mono text-sm dark:bg-zinc-800">
              /blog
            </code>
            。
          </p>
          <p>
            <code className="rounded bg-zinc-200 px-1.5 py-0.5 font-mono text-sm dark:bg-zinc-800">
              layout.tsx
            </code>{" "}
            包裹同段及子段的页面，适合放导航、字体与全局结构；子布局会嵌套在父布局之内，形成清晰的组件树。
          </p>
          <p>
            站内跳转请优先使用{" "}
            <code className="rounded bg-zinc-200 px-1.5 py-0.5 font-mono text-sm dark:bg-zinc-800">
              next/link
            </code>
            ，以便客户端导航与预取；外链仍用原生{" "}
            <code className="rounded bg-zinc-200 px-1.5 py-0.5 font-mono text-sm dark:bg-zinc-800">
              a
            </code>{" "}
            标签，并视情况加上{" "}
            <code className="rounded bg-zinc-200 px-1.5 py-0.5 font-mono text-sm dark:bg-zinc-800">
              target=&quot;_blank&quot;
            </code>{" "}
            与{" "}
            <code className="rounded bg-zinc-200 px-1.5 py-0.5 font-mono text-sm dark:bg-zinc-800">
              rel=&quot;noopener noreferrer&quot;
            </code>
            。
          </p>
        </div>
      </article>
    </div>
  );
}
