import { _ as __nuxt_component_0 } from './nuxt-link-P6SDANQl.mjs';
import { ref, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './ListData-BsN6Rn4h.mjs';
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
const apiUrlEdit = "https://buy-sell-api.onrender.com/api/admin/cities/";
const pathToEdit = "/profile/admin/cities/edit";
const apiUrlDelete = "https://buy-sell-api.onrender.com/api/admin/cities/";
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
          to: "/profile/admin/cities/add"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u0414\u043E\u0434\u0430\u0442\u0438 \u043C\u0456\u0441\u0442\u043E`);
            } else {
              return [
                createTextVNode("\u0414\u043E\u0434\u0430\u0442\u0438 \u043C\u0456\u0441\u0442\u043E")
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
          nameObject: "\u041C\u0456\u0441\u0442",
          nameObjectText: "\u041C\u0456\u0441\u0442\u0430"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div><p>\u0423 \u0432\u0430\u0441 \u043D\u0435\u043C\u0430\u0454 \u043F\u0440\u0430\u0432</p></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/admin/cities/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BMr2ZRIV.mjs.map
