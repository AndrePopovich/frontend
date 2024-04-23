import { ref, mergeProps, unref, useSSRContext } from "vue";
import { g as getEditObjectFromLocalStorage, _ as _sfc_main$1 } from "./EditData-Cr1JfTL8.js";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
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
const backUrl = "/profile/admin/categories";
const _sfc_main = {
  __name: "edit",
  __ssrInlineRender: true,
  setup(__props) {
    const editObject = getEditObjectFromLocalStorage();
    const object = {
      id: editObject.id,
      name: editObject.name
    };
    const apiUrlEdit = editObject.apiUrlEdit;
    const profile = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-900 h-screen flex items-center justify-center" }, _attrs))}>`);
      if (unref(profile) && unref(profile).role === "ADMIN") {
        _push(`<div class="max-w-xl mx-auto">`);
        _push(ssrRenderComponent(unref(_sfc_main$1), {
          backUrl,
          object,
          apiUrlEdit: unref(apiUrlEdit),
          objectName: "кагегорію"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="text-white"><p>У вас немає прав</p></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/admin/categories/edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=edit-CQADzybI.js.map
