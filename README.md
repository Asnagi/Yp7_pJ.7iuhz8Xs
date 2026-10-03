# Cloudflare Worker

一个最简可部署的 Cloudflare Worker 示例。

## 本地开发

```bash
npm install
npx wrangler dev
```

## 部署

```bash
npx wrangler deploy
```

## 路由

- `/`          → 返回 Hello 文本
- `/api/time`  → 返回当前时间 JSON
