import { Book, Search, Clock, Tag } from "lucide-react"
import { allTutorials } from "@/data/tutorials"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function TutorialsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full">
              <Book className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-6">教程中心</h1>
          <p className="text-xl text-muted-foreground mb-8">
            从入门到精通，全面掌握 Claude Code 和 Open Code 的使用技巧
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="搜索教程..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Tag className="h-5 w-5" />
                入门教程
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {allTutorials
                  .filter(t => t.category === "beginner")
                  .map((tutorial) => (
                    <Card key={tutorial.slug} className="p-6 hover:shadow-lg transition-shadow border hover:border-primary/50">
                      <Link href={`/tutorials/${tutorial.slug}`}>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                              {tutorial.tool}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {tutorial.duration}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold">{tutorial.title}</h3>
                          <p className="text-muted-foreground">{tutorial.description}</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            {tutorial.readTime} 分钟阅读
                          </div>
                        </div>
                      </Link>
                    </Card>
                  ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Tag className="h-5 w-5" />
                进阶教程
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {allTutorials
                  .filter(t => t.category === "advanced")
                  .map((tutorial) => (
                    <Card key={tutorial.slug} className="p-6 hover:shadow-lg transition-shadow border hover:border-primary/50">
                      <Link href={`/tutorials/${tutorial.slug}`}>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                              {tutorial.tool}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {tutorial.duration}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold">{tutorial.title}</h3>
                          <p className="text-muted-foreground">{tutorial.description}</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            {tutorial.readTime} 分钟阅读
                          </div>
                        </div>
                      </Link>
                    </Card>
                  ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Tag className="h-5 w-5" />
                实战案例
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {allTutorials
                  .filter(t => t.category === "practical")
                  .map((tutorial) => (
                    <Card key={tutorial.slug} className="p-6 hover:shadow-lg transition-shadow border hover:border-primary/50">
                      <Link href={`/tutorials/${tutorial.slug}`}>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                              {tutorial.tool}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {tutorial.duration}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold">{tutorial.title}</h3>
                          <p className="text-muted-foreground">{tutorial.description}</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            {tutorial.readTime} 分钟阅读
                          </div>
                        </div>
                      </Link>
                    </Card>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
