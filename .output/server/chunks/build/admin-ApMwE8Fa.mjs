import { _ as __nuxt_component_0 } from './nuxt-link-P6SDANQl.mjs';
import { ref, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _imports_0 } from './profile-image-CtTr5EG7.mjs';
import { _ as _export_sfc } from './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {
  __name: "admin",
  __ssrInlineRender: true,
  setup(__props) {
    const loading = ref(true);
    const authenticate = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-4765d9f1><nav class="purple flex items-center justify-between p-4 fixed w-maxpurple flex items-center justify-between p-4 fixed w-full top-0 z-50" data-v-4765d9f1><div data-v-4765d9f1>`);
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
      _push(`</div><ul data-v-4765d9f1><li data-v-4765d9f1>`);
      if (loading.value) {
        _push(`<div data-v-4765d9f1> \u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F... </div>`);
      } else {
        _push(`<div data-v-4765d9f1>`);
        if (authenticate.value) {
          _push(`<div class="flex gap-8" data-v-4765d9f1>`);
          _push(ssrRenderComponent(_component_nuxt_link, {
            class: "black-button",
            to: "/profile/admin/"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`\u0410\u0434\u043C\u0456\u043D \u043F\u0430\u043D\u0435\u043B\u044C`);
              } else {
                return [
                  createTextVNode("\u0410\u0434\u043C\u0456\u043D \u043F\u0430\u043D\u0435\u043B\u044C")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_nuxt_link, {
            class: "white-button",
            to: "/profile/user/ads"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`\u041C\u043E\u0457 \u043E\u0433\u043E\u043B\u043E\u0448\u0435\u043D\u043D\u044F`);
              } else {
                return [
                  createTextVNode("\u041C\u043E\u0457 \u043E\u0433\u043E\u043B\u043E\u0448\u0435\u043D\u043D\u044F")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_nuxt_link, { to: "/profile/user/" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="\u041C\u0456\u0439 \u043F\u0440\u043E\u0444\u0456\u043B\u044C" title="\u041C\u0456\u0439 \u043F\u0440\u043E\u0444\u0456\u043B\u044C" class="h-9 w-9" data-v-4765d9f1${_scopeId}>`);
              } else {
                return [
                  createVNode("img", {
                    src: _imports_0,
                    alt: "\u041C\u0456\u0439 \u043F\u0440\u043E\u0444\u0456\u043B\u044C",
                    title: "\u041C\u0456\u0439 \u043F\u0440\u043E\u0444\u0456\u043B\u044C",
                    class: "h-9 w-9"
                  })
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<div class="flex gap-8" data-v-4765d9f1>`);
          _push(ssrRenderComponent(_component_nuxt_link, {
            to: "/auth/",
            class: "block black-button"
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
          _push(ssrRenderComponent(_component_nuxt_link, {
            class: "block white-button",
            to: "/auth/registration"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F`);
              } else {
                return [
                  createTextVNode("\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        }
        _push(`</div>`);
      }
      _push(`</li></ul></nav><div class="mt-16" data-v-4765d9f1>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/admin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const admin = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4765d9f1"]]);

export { admin as default };
//# sourceMappingURL=admin-ApMwE8Fa.mjs.map
