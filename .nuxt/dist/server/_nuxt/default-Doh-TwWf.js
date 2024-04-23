import { _ as __nuxt_component_0 } from "./nuxt-link-P6SDANQl.js";
import { ref, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderSlot } from "vue/server-renderer";
import { _ as _imports_0 } from "./profile-image-CtTr5EG7.js";
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
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const loading = ref(true);
    const authenticate = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-d03084ae><nav class="purple flex items-center justify-between p-4 fixed w-maxpurple flex items-center justify-between p-4 fixed w-full top-0 z-50" data-v-d03084ae><div data-v-d03084ae>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/",
        class: "text-white text-2xl font-bold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`BuySell`);
          } else {
            return [
              createTextVNode("BuySell")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><ul data-v-d03084ae><li data-v-d03084ae>`);
      if (loading.value) {
        _push(`<div data-v-d03084ae> Завантаження... </div>`);
      } else {
        _push(`<div data-v-d03084ae>`);
        if (authenticate.value) {
          _push(`<div class="flex gap-8" data-v-d03084ae>`);
          _push(ssrRenderComponent(_component_nuxt_link, {
            class: "white-button",
            to: "/profile/user/ads"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Мої оголошення`);
              } else {
                return [
                  createTextVNode("Мої оголошення")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_nuxt_link, { to: "/profile/user/" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Мій профіль" title="Мій профіль" class="h-9 w-9" data-v-d03084ae${_scopeId}>`);
              } else {
                return [
                  createVNode("img", {
                    src: _imports_0,
                    alt: "Мій профіль",
                    title: "Мій профіль",
                    class: "h-9 w-9"
                  })
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<div class="flex gap-8" data-v-d03084ae>`);
          _push(ssrRenderComponent(_component_nuxt_link, {
            to: "/auth/",
            class: "block black-button"
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
          _push(ssrRenderComponent(_component_nuxt_link, {
            class: "block white-button",
            to: "/auth/registration"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Реєстрація`);
              } else {
                return [
                  createTextVNode("Реєстрація")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        }
        _push(`</div>`);
      }
      _push(`</li></ul></nav><div class="mt-16" data-v-d03084ae>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d03084ae"]]);
export {
  _default as default
};
//# sourceMappingURL=default-Doh-TwWf.js.map
