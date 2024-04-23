import { _ as __nuxt_component_0 } from './nuxt-link-P6SDANQl.mjs';
import { ref, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
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
    const profile = ref(null);
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-900 h-screen flex items-center justify-center" }, _attrs))}><div class="bg-white p-8 rounded-lg shadow-lg mx-auto"><h1 class="text-3xl text-center font-bold mb-4">\u041C\u0456\u0439 \u043F\u0440\u043E\u0444\u0456\u043B\u044C</h1>`);
      if (profile.value) {
        _push(`<div class="text-center"><p class="font-semibold">ID: ${ssrInterpolate(profile.value.id)}</p><p class="font-semibold">\u0406\u043C&#39;\u044F: ${ssrInterpolate(profile.value.firstname)}</p><p class="font-semibold">\u0424\u0430\u043C\u0456\u043B\u0456\u044F: ${ssrInterpolate(profile.value.lastname)}</p><p class="font-semibold">Email: ${ssrInterpolate(profile.value.email)}</p><p class="font-semibold">\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443: ${ssrInterpolate(profile.value.phone)}</p><p class="font-semibold">\u0414\u0430\u0442\u0430 \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u0457: ${ssrInterpolate(profile.value.dateOfRegistration)}</p><div class="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between pt-2">`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: "/",
          class: "btn-admin mt-4 md:mt-0 md:mr-4"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u0413\u043E\u043B\u043E\u0432\u043D\u0430 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0430`);
            } else {
              return [
                createTextVNode("\u0413\u043E\u043B\u043E\u0432\u043D\u0430 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0430")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<button class="red-button mt-2 md:mt-0">\u0412\u0438\u0439\u0442\u0438 \u0437 \u0430\u043A\u0430\u0443\u043D\u0442\u0443</button></div></div>`);
      } else {
        _push(`<div class="text-center mt-8"><p class="text-xl font-semibold mb-4">\u0412\u0438 \u043D\u0435 \u0432\u0432\u0456\u0439\u0448\u043B\u0438 \u0432 \u043F\u0440\u043E\u0444\u0456\u043B\u044C</p>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: "/auth/",
          class: "btn-admin"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u0412\u0432\u0456\u0439\u0442\u0438`);
            } else {
              return [
                createTextVNode("\u0412\u0432\u0456\u0439\u0442\u0438")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/user/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BJ2AZK4E.mjs.map
