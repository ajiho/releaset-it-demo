# alpha

aafffdddsa
✅ 方案二：命令行直接指定版本（最精准）
npx release-it 1.2.3-alpha.1

或：

npx release-it --preRelease=alpha

生成：

1.2.3 → 1.2.4-alpha.0

✅ 方案三：专门做 pre-release 工作流（进阶）
"preRelease": "alpha"

然后：

npx release-it --preRelease

适合：

alpha / beta / rc 多阶段发布

CI 控制

四、你想要的「alpha.1」该怎么发？（示例）
情况 1：第一次 alpha
npx release-it --preRelease=alpha

结果：

1.2.3 → 1.2.4-alpha.0

情况 2：继续 alpha
npx release-it --preRelease

结果：

1.2.4-alpha.0 → 1.2.4-alpha.1

情况 3：完全自定义
npx release-it 1.2.3-alpha.1

a
