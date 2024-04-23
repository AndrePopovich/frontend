import { _ as __nuxt_component_0 } from './nuxt-link-P6SDANQl.mjs';
import { ref, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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
import 'vue-router';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const users = ref([]);
    const myId = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-900 h-screen p-5" }, _attrs))} data-v-04385bfb><h1 class="big-center-text white" data-v-04385bfb>\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456</h1>`);
      if (users.value) {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-v-04385bfb><!--[-->`);
        ssrRenderList(users.value, (user) => {
          _push(`<div class="bg-white rounded-lg shadow-lg p-6" data-v-04385bfb><div data-v-04385bfb><p class="font-semibold text-center" data-v-04385bfb>ID: ${ssrInterpolate(user.id)}</p><p class="font-semibold" data-v-04385bfb>\u0406\u043C&#39;\u044F: ${ssrInterpolate(user.firstName)}</p><p class="font-semibold" data-v-04385bfb>\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435: ${ssrInterpolate(user.lastName)}</p><p class="font-semibold" data-v-04385bfb>\u0415\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0430 \u043F\u043E\u0448\u0442\u0430: ${ssrInterpolate(user.email)}</p><p class="font-semibold" data-v-04385bfb>\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443: ${ssrInterpolate(user.phone)}</p><p class="font-semibold" data-v-04385bfb>\u0414\u0430\u0442\u0430 \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u0457: ${ssrInterpolate(user.dateOfRegistration)}</p></div>`);
          if (user.id !== myId.value) {
            _push(`<div class="mt-4" data-v-04385bfb><button class="red-button" data-v-04385bfb>\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438</button></div>`);
          } else {
            _push(`<div class="mt-4" data-v-04385bfb><p class="font-semibold" data-v-04385bfb>\u0426\u0435 \u0430\u0434\u043C\u0456\u043D</p></div>`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div data-v-04385bfb><p data-v-04385bfb>\u0412\u0438 \u043D\u0435 \u0432\u0432\u0456\u0439\u0448\u043B\u0438 \u0432 \u0430\u043A\u0430\u0443\u043D\u0442</p>`);
        _push(ssrRenderComponent(_component_nuxt_link, { to: "/auth/" }, {
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
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/admin/users/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-04385bfb"]]);

export { index as default };
//# sourceMappingURL=index-IVXMe80a.mjs.map
