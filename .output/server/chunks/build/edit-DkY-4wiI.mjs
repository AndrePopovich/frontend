import { mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { g as getEditObjectFromLocalStorage, _ as _sfc_main$1 } from './EditData-Cr1JfTL8.mjs';
import './nuxt-link-P6SDANQl.mjs';
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
import 'vue-router';

const backUrl = "/profile/admin/cities";
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-900 h-screen flex items-center justify-center" }, _attrs))}><div class="max-w-xl mx-auto">`);
      _push(ssrRenderComponent(unref(_sfc_main$1), {
        backUrl,
        object,
        apiUrlEdit: unref(apiUrlEdit),
        objectName: "\u043C\u0456\u0441\u0442\u043E"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/admin/cities/edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=edit-DkY-4wiI.mjs.map
