import { Router } from 'express'
import { createProxyMiddleware } from 'http-proxy-middleware'
import requestAmazonPage from './requestAmazonPage'
const router = Router()

router.use(requestAmazonPage)

router.use(
  '/',
  createProxyMiddleware({
    target: 'https://api.openai.com',
    changeOrigin: true,
    onProxyReq: (proxyReq, req, res) => {
      // 移除 'x-forwarded-for' 和 'x-real-ip' 头，以确保不传递原始客户端 IP 地址等信息
      proxyReq.removeHeader('x-forwarded-for')
      proxyReq.removeHeader('x-real-ip')
    },
    onProxyRes: function (proxyRes, req, res) {
      proxyRes.headers['Access-Control-Allow-Origin'] = '*'
    },
  })
)

export default router
