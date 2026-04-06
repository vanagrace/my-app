import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "页面未找到",
  description: "你访问的页面不存在或已被移动。",
};

export default function NotFound() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 px-6 py-24 font-sans dark:bg-black">
      <main className="flex w-full max-w-lg flex-col items-center gap-8 text-center">
        <p className="text-8xl font-semibold tabular-nums tracking-tighter text-zinc-200 dark:text-zinc-800 sm:text-9xl">
          404
        </p>
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50 sm:text-3xl">
            页面未找到
          </h1>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
            该地址可能没有对应页面，或链接已失效。请检查网址是否正确，或返回首页继续浏览。
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
          >
            返回首页
          </Link>
          <Link
            href="/about"
            className="inline-flex h-11 items-center justify-center rounded-full border border-solid border-black/[.08] px-6 text-sm font-medium transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
          >
            关于 Next.js
          </Link>
        </div>
      </main>
    </div>
  );
}
