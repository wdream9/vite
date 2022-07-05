const express = require('express')
const fs = require('fs')
const path = require('path')
const { createServer: createViteServer } = require('vite')

/**
 * 安装一下nodemon
 * 以中间件模式创建vite应用，就会禁用vite自带的html应用服务器的逻辑，并让上级服务接管整个服务的控制
 */
async function createServer() {
    const app = express();
    // 继续使用vite自带的html服务器
    const vite = await createViteServer({
        server: {
            middlewareMode: 'ssr'
        }
    })
    // app创建client实例
    app.use(vite.middlewares)
    app.use("*", async (req, res) => {
        const url = req.originalUrl
        console.log(url)
        try {
            let template = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8')
            template = await vite.transformIndexHtml(url, template)
            const { render } = await vite.ssrLoadModule('./src/entry-server.js')
            const appHtml = await render(url)
            console.log(appHtml)
            res
                .status(200)
                .set({
                    "content-type": "text/html"
                })
                .end()
        } catch (e) {
            vite.ssrFixStacktrace(e)
            console.error(e)
            res.status(500).end(e.message)
        }
        res.end()
    })
    app.listen(3000)
}
createServer()
/**
 * ReferenceError: window is not defined
 */