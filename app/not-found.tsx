import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">页面未找到</h2>
        <p className="text-muted-foreground mb-8">
          抱歉，您访问的页面不存在或已被移动。
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <Link href="/">返回首页</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/claude-code">Claude Code</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/open-code">Open Code</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
