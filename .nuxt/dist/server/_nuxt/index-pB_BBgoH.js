import { _ as __nuxt_component_0 } from "./nuxt-link-P6SDANQl.js";
import { ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { useRouter } from "vue-router";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
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
    useRouter();
    const profile = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-900 h-screen flex items-center justify-center" }, _attrs))}><div class="bg-white p-8 rounded-lg shadow-lg mx-4">`);
      if (unref(profile) && unref(profile).role === "ADMIN") {
        _push(`<div><h1 class="text-3xl font-bold mb-4">Це сторінка адміністратора</h1><p class="mb-4">Вітаємо вас, шановний адміністратор - ${ssrInterpolate(unref(profile).firstname)}</p><div class="space-y-4">`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: "/profile/admin/cities",
          class: "block btn-admin"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Редагувати міста `);
            } else {
              return [
                createTextVNode(" Редагувати міста ")
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
              _push2(` Редагувати категорії `);
            } else {
              return [
                createTextVNode(" Редагувати категорії ")
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
              _push2(` Переглянути користувачів `);
            } else {
              return [
                createTextVNode(" Переглянути користувачів ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<div><h1 class="text-3xl font-bold">В вас немає прав</h1></div>`);
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
export {
  _sfc_main as default
};
//# sourceMappingURL=index-pB_BBgoH.js.map
