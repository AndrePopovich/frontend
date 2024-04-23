import { _ as __nuxt_component_0 } from "./nuxt-link-P6SDANQl.js";
import { ref, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./ListData-BsN6Rn4h.js";
import "ufo";
import "../server.mjs";
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
const apiUrl = "https://buy-sell-api.onrender.com/api/admin/categories";
const apiUrlEdit = "https://buy-sell-api.onrender.com/api/admin/categories/";
const pathToEdit = "/profile/admin/categories/edit";
const apiUrlDelete = "https://buy-sell-api.onrender.com/api/admin/categories/";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const profile = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(profile) && unref(profile).role === "ADMIN") {
        _push(`<div class="pt-4">`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          class: "green-button w-40 mx-auto block",
          to: "/profile/admin/categories/add"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Додати категорію`);
            } else {
              return [
                createTextVNode("Додати категорію")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(_sfc_main$1), {
          apiUrl,
          apiUrlEdit,
          pathToEdit,
          apiUrlDelete,
          nameObject: "Категорій",
          nameObjectText: "Категорії"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div><p>У вас немає прав</p></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/admin/categories/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-Di1k6nZJ.js.map
