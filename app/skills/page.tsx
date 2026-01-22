import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { featuredSkills, allSkills, skillCategories } from "@/data/skills"
import { Download, Star, TrendingUp, Box, Code, Palette, Shield, Rocket, Database, Cpu, FileText } from "lucide-react"
import Link from "next/link"

const categoryIcons: Record<string, React.ReactNode> = {
  "全部": <Box className="h-5 w-5" />,
  "开发工具": <Code className="h-5 w-5" />,
  "UI/UX": <Palette className="h-5 w-5" />,
  "测试": <TrendingUp className="h-5 w-5" />,
  "文档": <FileText className="h-5 w-5" />,
  "安全": <Shield className="h-5 w-5" />,
  "部署": <Rocket className="h-5 w-5" />,
  "框架集成": <Code className="h-5 w-5" />,
  "数据处理": <Database className="h-5 w-5" />,
  "AI/ML": <Cpu className="h-5 w-5" />,
}

function formatInstalls(num: number): string {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K"
  }
  return num.toString()
}

export default function SkillsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="mb-6 flex justify-center gap-2">
          <Badge variant="secondary" className="text-sm">
            <Star className="h-3 w-3 mr-1" />
            开放生态系统
          </Badge>
          <Badge variant="outline" className="text-sm">
            <Download className="h-3 w-3 mr-1" />
            一键安装
          </Badge>
        </div>
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Agent Skills 目录
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Skills 是 AI Agent 的可复用能力模块。使用单个命令即可安装，
          为你的 Agent 增强程序化知识访问能力。
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category) => (
            <Badge
              key={category}
              variant="outline"
              className="cursor-pointer hover:bg-primary/10 hover:border-primary transition-colors px-4 py-2"
            >
              {categoryIcons[category]}
              <span className="ml-2">{category}</span>
            </Badge>
          ))}
        </div>

        {/* Install Command */}
        <Card className="max-w-2xl mx-auto bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <code className="text-lg font-mono">
              $ npx skills add &lt;owner/repo&gt;
            </code>
            <p className="text-sm text-muted-foreground mt-3">
              使用 Claude Code、OpenCode 或其他支持的 Agent 安装 Skills
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Featured Skills */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <Star className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold">精选 Skills</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredSkills.map((skill) => (
            <Card key={skill.id} className="hover:shadow-lg hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{skill.name}</CardTitle>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {skill.description}
                    </p>
                  </div>
                  <Badge variant="secondary" className="ml-2 shrink-0">
                    <Star className="h-3 w-3 mr-1" />
                    精选
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm mb-4">
                  <div className="flex items-center gap-2">
                    <Download className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">{formatInstalls(skill.installs)}</span>
                    <span className="text-muted-foreground">安装</span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {skill.category}
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {skill.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {skill.tags.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{skill.tags.length - 3}
                    </Badge>
                  )}
                </div>
                <Button className="w-full" size="sm" asChild>
                  <Link href={`https://github.com/${skill.owner}/${skill.repo}`} target="_blank" rel="noopener noreferrer">
                    查看详情
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* All Skills */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <Box className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold">所有 Skills</h2>
          <Badge variant="secondary" className="ml-2">
            {allSkills.length} 个 Skills
          </Badge>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allSkills.map((skill) => (
            <Card key={skill.id} className="hover:shadow-lg hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <CardTitle className="text-lg mb-2">{skill.name}</CardTitle>
                  {skill.featured && (
                    <Badge variant="secondary" className="shrink-0">
                      <Star className="h-3 w-3 mr-1" />
                      精选
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {skill.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm mb-4">
                  <div className="flex items-center gap-2">
                    <Download className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">{formatInstalls(skill.installs)}</span>
                    <span className="text-muted-foreground">安装</span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {skill.category}
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {skill.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {skill.tags.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{skill.tags.length - 3}
                    </Badge>
                  )}
                </div>
                <Button className="w-full" size="sm" variant={skill.featured ? "default" : "outline"} asChild>
                  <Link href={`https://github.com/${skill.owner}/${skill.repo}`} target="_blank" rel="noopener noreferrer">
                    查看详情
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-16 text-center">
        <Card className="max-w-3xl mx-auto bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
          <CardContent className="pt-8 pb-8">
            <h3 className="text-2xl font-bold mb-4">创建你自己的 Skill</h3>
            <p className="text-muted-foreground mb-6">
              贡献你的知识到社区，帮助开发者更高效地使用 AI Agents。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="https://github.com/anthropics/skills" target="_blank" rel="noopener noreferrer">
                  查看官方文档
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="https://github.com/anthropics/skills/tree/main/skill-creator" target="_blank" rel="noopener noreferrer">
                  使用 Skill Creator
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
