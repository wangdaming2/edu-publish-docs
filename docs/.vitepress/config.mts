import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "EDU-PUBLISH",
  description: "通用高校通知聚合站技术文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '演示站', link: 'https://example.edu.cn' },
      { text: 'GitHub', link: 'https://github.com/guiguisocute/EDU-PUBLISH' }
    ],

    sidebar: [
      {
        text: '项目简介',
        collapsed: false,
        items: [
          { text: '什么是 EDU-PUBLISH', link: '/intro/' },
          { text: '整体架构', link: '/intro/architecture' },
          { text: '快速开始', link: '/intro/deploy' }
        ]
      },
      {
        text: '核心环节',
        collapsed: false,
        items: [
          { text: '步骤1：消息桥接', link: '/use/bridge' },
          { text: '步骤2：Agent 内容生产', link: '/use/agent' },
          { text: '步骤3：站点部署', link: '/use/deploy-site' }
        ]
      },
      {
        text: '配置指南',
        collapsed: false,
        items: [
          { text: '站点品牌 (site.yaml)', link: '/config/site' },
          { text: '订阅源 (subscriptions.yaml)', link: '/config/subscriptions' },
          { text: '功能开关 (widgets.yaml)', link: '/config/widgets' }
        ]
      },
      {
        text: '开发者',
        collapsed: false,
        items: [
          { text: '开发环境准备', link: '/dev/' },
          { text: '手动部署流程', link: '/dev/manual' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/guiguisocute/EDU-PUBLISH' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026-present'
    }
  }
})
