const nav = require('./navbar/nav.js')
const sidebar = require('./navbar/index')
console.log(sidebar)

module.exports = {
    title: 'MicroDevelopment - 微开发',
    description: '基于微服务思想，融合模块化方式，衍生的一种新型开发方式。',
    base: '/',
    dest: './dist/',
    port: '6006',
    markdown: {
        lineNumbers: true,
        // externalLinks: {
        //     target: '_blank',
        //     // rel: 'noopener noreferrer'
        // }
    },
    themeConfig: {
        smoothScroll: true,
        editLinks: true,
        editLinkText: '来一起改善此页面！',
        repo: 'micro-development',
        lastUpdated: '最后更新时间',
        nav,
        sidebar: 'auto'
        // sidebar
    }
}
