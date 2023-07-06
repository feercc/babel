import { defaultTheme, defineUserConfig } from 'vuepress'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { sidebar } from './configs/index'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '深入浅出babel',
  description: 'babel中文，教程文档，手写babel插件',
  base: '/babel/',
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.png' }]
  ],
  theme: defaultTheme({
    sidebar,
    repo: 'https://github.com/feercc/babel',
    docsRepo: 'https://github.com/feercc/babel',
    docsBranch: 'main',
    docsDir: 'docs',
    editLinkPattern: ':repo/edit/:branch/:path',
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdatedText: '上次更新',
    contributors: false,
    contributorsText: '贡献者',
    tip: '提示',
    warning: '注意',
    danger: '警告',
    notFound: [
      '这里什么都没有',
      '我们怎么到这来了？',
      '这是一个 404 页面',
      '看起来我们进入了错误的链接',
    ],
    backToHome: '返回首页',
    // a11y
    openInNewWindow: '在新窗口打开',
    toggleColorMode: '切换颜色模式',
    toggleSidebar: '切换侧边栏',
  }),
  plugins: [
    backToTopPlugin(),
    docsearchPlugin({
      // 配置
      apiKey: '82a1fe9de8233bc285d11f8375fd30a0',
      indexName: 'feer',
      appId: 'WMX9Z93J50',
      placeholder: '搜索文档'
    }),
    googleAnalyticsPlugin({
      // 配置项
      id: 'G-Q6MTFEY5YY'
    })
  ]
})
