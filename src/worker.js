/**
 * Cipher Pine — static site served by Cloudflare Workers Assets.
 *
 * This Worker exists only so that `wrangler deploy` has a `main` entry
 * point — every request is forwarded to the ASSETS binding which serves
 * files directly from the repo. No JS runs per request unless we change
 * this file later (auth, redirects, headers, etc.).
 */
export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};
