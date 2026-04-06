import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPostBySlug } from "../posts";

export const metadata: Metadata = {
  title: "Next.js 是什么？为什么选择它",
  description:
    "从 React 到全栈：了解 Next.js 的定位、渲染方式以及它如何简化现代 Web 开发。",
};

export default function WhatIsNextjsPost() {
  const post = getBlogPostBySlug("what-is-nextjs");
  if (!post) notFound();

  return (
    <div className="flex flex-col flex-1 items-center bg-white font-sans dark:bg-black">
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
            dateTime="2026-04-01"
            className="text-sm text-zinc-500 dark:text-zinc-400"
          >
            2026-04-01
          </time>
          <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50 sm:text-4xl">
            Next.js 是什么？为什么选择它
          </h1>
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            一篇面向初学者的概览：把 Next.js 放在 React 生态里理解，更容易决定它是否适合你的项目。
          </p>
        </header>

        <div className="flex flex-col gap-6 text-base leading-7 text-zinc-700 dark:text-zinc-300">
          <p>
            <strong className="font-medium text-zinc-900 dark:text-zinc-100">
              Next.js
            </strong>{" "}
            是在 React 之上的全栈框架。你仍然编写组件与状态，但路由、数据获取、渲染时机和部署相关能力由框架统一提供，减少自己拼脚手架的时间。
          </p>
          <p>
            与「只用 React 做 SPA」相比，Next.js
            更强调<strong className="font-medium text-zinc-900 dark:text-zinc-100">
              按路由选择渲染方式
            </strong>
            ：例如静态生成适合内容站，服务端渲染适合强依赖请求头或实时数据的页面，按需组合即可。
          </p>
          <p>
            若你的团队已经熟悉 React，Next.js
            能较快上手；若项目需要 SEO、首屏性能或同仓库内完成
            API/服务端逻辑，它通常是务实默认选项之一。
          </p>
        </div>
      </article>
    </div>
  );
}
