import { _ as __nuxt_component_0 } from "./nuxt-link-P6SDANQl.js";
import { ref, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { useRouter } from "vue-router";
import "ufo";
import "../server.mjs";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "radix3";
import "defu";
import "klona";
import "devalue";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const profile = ref(null);
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-900 h-screen flex items-center justify-center" }, _attrs))}><div class="bg-white p-8 rounded-lg shadow-lg mx-auto"><h1 class="text-3xl text-center font-bold mb-4">Мій профіль</h1>`);
      if (profile.value) {
        _push(`<div class="text-center"><p class="font-semibold">ID: ${ssrInterpolate(profile.value.id)}</p><p class="font-semibold">Ім&#39;я: ${ssrInterpolate(profile.value.firstname)}</p><p class="font-semibold">Фамілія: ${ssrInterpolate(profile.value.lastname)}</p><p class="font-semibold">Email: ${ssrInterpolate(profile.value.email)}</p><p class="font-semibold">Номер телефону: ${ssrInterpolate(profile.value.phone)}</p><p class="font-semibold">Дата реєстрації: ${ssrInterpolate(profile.value.dateOfRegistration)}</p><div class="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between pt-2">`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: "/",
          class: "btn-admin mt-4 md:mt-0 md:mr-4"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Головна сторінка`);
            } else {
              return [
                createTextVNode("Головна сторінка")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<button class="red-button mt-2 md:mt-0">Вийти з акаунту</button></div></div>`);
      } else {
        _push(`<div class="text-center mt-8"><p class="text-xl font-semibold mb-4">Ви не ввійшли в профіль</p>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: "/auth/",
          class: "btn-admin"
        }, {
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
export {
  _sfc_main as default
};
//# sourceMappingURL=index-BJ2AZK4E.js.map
