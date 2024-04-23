import { _ as __nuxt_component_0 } from './nuxt-link-P6SDANQl.mjs';
import { ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { useRouter } from 'vue-router';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import './server.mjs';
import 'unhead';
import '@unhead/shared';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const profile = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-900 h-screen flex items-center justify-center" }, _attrs))}><div class="bg-white p-8 rounded-lg shadow-lg mx-4">`);
      if (unref(profile) && unref(profile).role === "ADMIN") {
        _push(`<div><h1 class="text-3xl font-bold mb-4">\u0426\u0435 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0430 \u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430</h1><p class="mb-4">\u0412\u0456\u0442\u0430\u0454\u043C\u043E \u0432\u0430\u0441, \u0448\u0430\u043D\u043E\u0432\u043D\u0438\u0439 \u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440 - ${ssrInterpolate(unref(profile).firstname)}</p><div class="space-y-4">`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: "/profile/admin/cities",
          class: "block btn-admin"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u043C\u0456\u0441\u0442\u0430 `);
            } else {
              return [
                createTextVNode(" \u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u043C\u0456\u0441\u0442\u0430 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: "/profile/admin/categories",
          class: "block btn-admin"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457 `);
            } else {
              return [
                createTextVNode(" \u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: "/profile/admin/users",
          class: "block btn-admin"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u041F\u0435\u0440\u0435\u0433\u043B\u044F\u043D\u0443\u0442\u0438 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456\u0432 `);
            } else {
              return [
                createTextVNode(" \u041F\u0435\u0440\u0435\u0433\u043B\u044F\u043D\u0443\u0442\u0438 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456\u0432 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<div><h1 class="text-3xl font-bold">\u0412 \u0432\u0430\u0441 \u043D\u0435\u043C\u0430\u0454 \u043F\u0440\u0430\u0432</h1></div>`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/admin/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-pB_BBgoH.mjs.map
