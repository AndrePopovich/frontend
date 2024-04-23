import { _ as __nuxt_component_0 } from './nuxt-link-P6SDANQl.mjs';
import { ref, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { useRouter } from 'vue-router';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const email = ref("");
    const password = ref("");
    useRouter();
    const emailError = ref("");
    const passwordError = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gradient-to-b from-purple-900 to-purple-300 min-h-screen flex flex-col justify-center items-center px-4" }, _attrs))} data-v-17aac432><h1 class="text-4xl font-bold text-white mb-8" data-v-17aac432>\u0412\u0456\u0442\u0430\u0454\u043C\u043E \u0412\u0430\u0441 \u0432 BuySell</h1><div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md" data-v-17aac432><form class="space-y-4" data-v-17aac432><div class="flex flex-col space-y-4" data-v-17aac432><div class="flex flex-col" data-v-17aac432><input type="text"${ssrRenderAttr("value", email.value)} autocomplete="email" required placeholder="\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443 \u043F\u043E\u0448\u0442\u0443" class="input" data-v-17aac432>`);
      if (emailError.value) {
        _push(`<span class="text-red-500 text-xs" data-v-17aac432>${ssrInterpolate(emailError.value)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex flex-col" data-v-17aac432><input type="password"${ssrRenderAttr("value", password.value)} required placeholder="\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C" class="input" data-v-17aac432>`);
      if (passwordError.value) {
        _push(`<span class="text-red-500 text-xs" data-v-17aac432>${ssrInterpolate(passwordError.value)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><button type="submit" class="btn bg-purple-800 text-white hover:bg-purple-900 w-full mt-4" data-v-17aac432>\u0423\u0432\u0456\u0439\u0442\u0438</button></form>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/auth/registration/",
        class: "text-center block mt-4 text-blue-600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0412 \u043C\u0435\u043D\u0435 \u043D\u0435\u043C\u0430\u0454 \u0430\u043A\u0430\u0443\u043D\u0442\u0443`);
          } else {
            return [
              createTextVNode("\u0412 \u043C\u0435\u043D\u0435 \u043D\u0435\u043C\u0430\u0454 \u0430\u043A\u0430\u0443\u043D\u0442\u0443")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-17aac432"]]);

export { index as default };
//# sourceMappingURL=index-8Z2YEKvj.mjs.map
