import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './AddData-DTqZNpB5.mjs';
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

const apiUrl = "https://buy-sell-api.onrender.com/api/admin/cities";
const backUrl = "/profile/admin/cities";
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
          objectName: "\u043C\u0456\u0441\u0442\u043E",
          backUrl
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="text-white"><p>\u0423 \u0432\u0430\u0441 \u043D\u0435\u043C\u0430\u0454 \u043F\u0440\u0430\u0432</p></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/admin/cities/add.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=add-CUJJ7792.mjs.map
