import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AddData-DTqZNpB5.js";
import "./nuxt-link-P6SDANQl.js";
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
const backUrl = "/profile/admin/categories";
const _sfc_main = {
  __name: "add",
  __ssrInlineRender: true,
  setup(__props) {
    const profile = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-900 h-screen flex items-center justify-center" }, _attrs))}>`);
      if (unref(profile) && unref(profile).role === "ADMIN") {
        _push(`<div class="max-w-xl mx-auto">`);
        _push(ssrRenderComponent(unref(_sfc_main$1), {
          apiUrl,
          objectName: "категорію",
          backUrl
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/admin/categories/add.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=add-Ck9ubpau.js.map
