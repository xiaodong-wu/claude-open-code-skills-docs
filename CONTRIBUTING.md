# 贡献指南

感谢您对 Claude Code & Open Code 教程项目的关注！我们欢迎任何形式的贡献。

## 如何贡献

### 报告问题

如果您发现了 bug 或有功能建议：

1. 检查 [Issues](https://github.com/your-username/claude-open-code-docs/issues) 中是否已存在相同问题
2. 如果没有，创建新的 Issue，详细描述问题或建议
3. 对于 bug，请提供复现步骤和环境信息

### 提交代码

1. **Fork 项目**
   ```bash
   # 在 GitHub 上点击 Fork 按钮
   git clone https://github.com/your-username/claude-open-code-docs.git
   cd claude-open-code-docs
   ```

2. **创建分支**
   ```bash
   git checkout -b feature/your-feature-name
   # 或
   git checkout -b fix/your-bug-fix
   ```

3. **进行修改**
   - 遵循现有代码风格
   - 添加必要的注释
   - 确保类型检查通过：`npm run type-check`
   - 运行 lint：`npm run lint`

4. **提交更改**
   ```bash
   git add .
   git commit -m "feat: 添加新功能描述"
   # 或
   git commit -m "fix: 修复问题描述"
   ```

5. **推送并创建 PR**
   ```bash
   git push origin feature/your-feature-name
   ```
   - 在 GitHub 上创建 Pull Request
   - 详细描述您的更改
   - 等待代码审查

## 添加新教程

1. 在 `data/tutorials.ts` 中添加教程元数据
2. 在 `app/tutorials/[slug]/` 中创建对应的教程页面
3. 确保教程内容准确、易懂
4. 添加代码示例和截图（如适用）

## 添加新 Skill

1. 在 `data/skills.ts` 中添加 Skill 信息
2. 确保 GitHub 仓库链接有效
3. 添加适当的分类和标签

## 代码规范

### TypeScript

- 使用 TypeScript 严格模式
- 为函数和组件添加类型注解
- 避免使用 `any` 类型

### 命名规范

- 组件：PascalCase（如 `Button.tsx`）
- 工具函数：camelCase（如 `formatDate.ts`）
- 常量：UPPER_SNAKE_CASE（如 `MAX_COUNT`）
- 文件夹：kebab-case（如 `api-docs/`）

### 提交信息

使用语义化提交信息：

- `feat:` 新功能
- `fix:` Bug 修复
- `docs:` 文档更新
- `style:` 代码格式（不影响功能）
- `refactor:` 代码重构
- `test:` 添加测试
- `chore:` 构建过程或辅助工具变动

示例：
```
feat: 添加搜索功能
fix: 修复移动端导航栏问题
docs: 更新部署指南
```

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 类型检查
npm run type-check

# 代码检查
npm run lint

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 开发环境要求

- Node.js 20.11.1 或更高版本
- npm 或 yarn 或 pnpm

## 获取帮助

- 查看 [README.md](./README.md)
- 查看 [文档](https://claude-open-code-skills-docs.pages.dev)
- 提交 [Issue](https://github.com/your-username/claude-open-code-docs/issues)

## 行为准则

- 尊重所有贡献者
- 欢迎不同观点和建设性反馈
- 避免使用冒犯性语言
- 专注于项目改进

## 许可证

提交代码即表示您同意您的贡献将根据项目的 [MIT 许可证](./LICENSE) 进行许可。

---

再次感谢您的贡献！🎉
