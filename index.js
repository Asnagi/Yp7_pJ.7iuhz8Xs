export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // 简单的路由示例
    if (url.pathname === "/") {
      return new Response("Hello from Cloudflare Worker! 🚀", {
        headers: { "content-type": "text/plain; charset=utf-8" },
      });
    }

    if (url.pathname === "/api/time") {
      return new Response(
        JSON.stringify({
          ok: true,
          now: new Date().toISOString(),
        }),
        {
          headers: { "content-type": "application/json; charset=utf-8" },
        }
      );
    }

    // 默认返回 404
    return new Response("Not Found", {
      status: 404,
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  },
};
