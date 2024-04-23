import { _ as __nuxt_component_0 } from "./nuxt-link-P6SDANQl.js";
import { ref, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ufo";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "klona";
import "devalue";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const users = ref([]);
    const myId = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-900 h-screen p-5" }, _attrs))} data-v-04385bfb><h1 class="big-center-text white" data-v-04385bfb>Користувачі</h1>`);
      if (users.value) {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-v-04385bfb><!--[-->`);
        ssrRenderList(users.value, (user) => {
          _push(`<div class="bg-white rounded-lg shadow-lg p-6" data-v-04385bfb><div data-v-04385bfb><p class="font-semibold text-center" data-v-04385bfb>ID: ${ssrInterpolate(user.id)}</p><p class="font-semibold" data-v-04385bfb>Ім&#39;я: ${ssrInterpolate(user.firstName)}</p><p class="font-semibold" data-v-04385bfb>Прізвище: ${ssrInterpolate(user.lastName)}</p><p class="font-semibold" data-v-04385bfb>Електрона пошта: ${ssrInterpolate(user.email)}</p><p class="font-semibold" data-v-04385bfb>Номер телефону: ${ssrInterpolate(user.phone)}</p><p class="font-semibold" data-v-04385bfb>Дата реєстрації: ${ssrInterpolate(user.dateOfRegistration)}</p></div>`);
          if (user.id !== myId.value) {
            _push(`<div class="mt-4" data-v-04385bfb><button class="red-button" data-v-04385bfb>Видалити</button></div>`);
          } else {
            _push(`<div class="mt-4" data-v-04385bfb><p class="font-semibold" data-v-04385bfb>Це адмін</p></div>`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div data-v-04385bfb><p data-v-04385bfb>Ви не ввійшли в акаунт</p>`);
        _push(ssrRenderComponent(_component_nuxt_link, { to: "/auth/" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Ввійти`);
            } else {
              return [
                createTextVNode("Ввійти")
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
export {
  index as default
};
//# sourceMappingURL=index-IVXMe80a.js.map
