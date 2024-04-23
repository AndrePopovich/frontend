import { b as buildAssetsURL } from '../routes/renderer.mjs';
import { mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { S as SearchData } from './SearchData-B2LtcG4z.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import './server.mjs';

const _imports_0 = "" + buildAssetsURL("logo.DAJUZXva.png");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-200 min-h-screen px-8" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(SearchData), null, null, _parent));
      _push(`<div class="bg-white rounded-lg shadow-lg px-8 py-6 mx-auto max-w-2xl mt-8"><h2 class="text-3xl font-bold mb-4 text-center">\u041F\u0440\u043E BuySell</h2><p class="text-lg text-gray-700 leading-relaxed"> BuySell - \u0412\u0430\u0448 \u0456\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043C\u0430\u0439\u0434\u0430\u043D\u0447\u0438\u043A \u0434\u043B\u044F \u043A\u0443\u043F\u0456\u0432\u043B\u0456 \u0442\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0443. </p><h3 class="text-xl font-semibold mt-6 mb-3">\u0429\u043E \u0442\u0430\u043A\u0435 BuySell?</h3><p class="text-lg text-gray-700 leading-relaxed"> BuySell - \u0446\u0435 \u043E\u043D\u043B\u0430\u0439\u043D-\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430, \u044F\u043A\u0430 \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0443\u0454 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456\u0432 \u043C\u043E\u0436\u043B\u0438\u0432\u0456\u0441\u0442\u044E \u043A\u0443\u043F\u0443\u0432\u0430\u0442\u0438 \u0456 \u043F\u0440\u043E\u0434\u0430\u0432\u0430\u0442\u0438 \u0440\u0456\u0437\u043D\u043E\u043C\u0430\u043D\u0456\u0442\u043D\u0456 \u0442\u043E\u0432\u0430\u0440\u0438 \u0442\u0430 \u043F\u043E\u0441\u043B\u0443\u0433\u0438. \u041D\u0435\u0437\u0430\u043B\u0435\u0436\u043D\u043E \u0432\u0456\u0434 \u0442\u043E\u0433\u043E, \u0447\u0438 \u0432\u0438 \u0448\u0443\u043A\u0430\u0454\u0442\u0435 \u043D\u043E\u0432\u0438\u0439 \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D, \u0432\u0456\u0434\u043F\u043E\u0447\u0438\u043D\u043E\u043A \u0443 \u0432\u0438\u0448\u0443\u043A\u0430\u043D\u043E\u043C\u0443 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u0456 \u0430\u0431\u043E \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0456\u043B\u044C, BuySell \u043C\u0430\u0454 \u0432\u0441\u0435, \u0449\u043E \u0432\u0430\u043C \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u043E. </p><div class="flex justify-center my-4"><img${ssrRenderAttr("src", _imports_0)} alt="logo" class="rounded-lg border border-gray-300 shadow-lg mx-auto w-full max-w-lg"></div><h3 class="text-xl font-semibold mt-6 mb-3">\u0427\u043E\u043C\u0443 \u043E\u0431\u0438\u0440\u0430\u0442\u0438 BuySell?</h3><ul class="list-disc pl-6"><li class="text-lg text-gray-700 leading-relaxed">\u0428\u0438\u0440\u043E\u043A\u0438\u0439 \u0432\u0438\u0431\u0456\u0440: \u0417\u0430\u0432\u0434\u044F\u043A\u0438 \u0448\u0438\u0440\u043E\u043A\u043E\u043C\u0443 \u0430\u0441\u043E\u0440\u0442\u0438\u043C\u0435\u043D\u0442\u0443 \u0442\u043E\u0432\u0430\u0440\u0456\u0432 \u0442\u0430 \u043F\u043E\u0441\u043B\u0443\u0433, \u0432\u0438 \u0437\u043C\u043E\u0436\u0435\u0442\u0435 \u0437\u043D\u0430\u0439\u0442\u0438 \u0432\u0441\u0435, \u0449\u043E \u0432\u0430\u043C \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u043E, \u043D\u0430 \u043E\u0434\u043D\u043E\u043C\u0443 \u043C\u0430\u0439\u0434\u0430\u043D\u0447\u0438\u043A\u0443.</li><li class="text-lg text-gray-700 leading-relaxed">\u041F\u0440\u043E\u0441\u0442\u0438\u0439 \u0443 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u0456: \u0406\u043D\u0442\u0443\u0457\u0442\u0438\u0432\u043D\u043E \u0437\u0440\u043E\u0437\u0443\u043C\u0456\u043B\u0438\u0439 \u0456\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441 BuySell \u0440\u043E\u0431\u0438\u0442\u044C \u043F\u0440\u043E\u0446\u0435\u0441 \u043A\u0443\u043F\u0456\u0432\u043B\u0456 \u0442\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0443 \u043B\u0435\u0433\u043A\u0438\u043C \u0456 \u043F\u0440\u0438\u0454\u043C\u043D\u0438\u043C.</li><li class="text-lg text-gray-700 leading-relaxed">\u0411\u0435\u0437\u043F\u0435\u043A\u0430: BuySell \u0432\u0436\u0438\u0432\u0430\u0454 \u0432\u0441\u0456\u0445 \u0437\u0430\u0445\u043E\u0434\u0456\u0432 \u0434\u043B\u044F \u0437\u0430\u0445\u0438\u0441\u0442\u0443 \u0432\u0430\u0448\u043E\u0457 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456 \u0442\u0430 \u0431\u0435\u0437\u043F\u0435\u043A\u0438 \u043F\u043B\u0430\u0442\u0435\u0436\u0456\u0432.</li><li class="text-lg text-gray-700 leading-relaxed">\u041A\u043E\u043C\u0443\u043D\u0456\u0442\u0435\u0442\u043D\u0456\u0441\u0442\u044C: \u0421\u043F\u0456\u043B\u044C\u043D\u043E\u0442\u0430 BuySell \u043F\u043E\u0441\u0442\u0456\u0439\u043D\u043E \u0437\u0440\u043E\u0441\u0442\u0430\u0454, \u0434\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0447\u0438 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430\u043C \u043E\u0431\u043C\u0456\u043D\u044E\u0432\u0430\u0442\u0438\u0441\u044F \u0434\u043E\u0441\u0432\u0456\u0434\u043E\u043C \u0442\u0430 \u043F\u043E\u0440\u0430\u0434\u0430\u043C\u0438.</li></ul><h3 class="text-xl font-semibold mt-6 mb-3">\u042F\u043A \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0442\u0438\u0441\u044F BuySell?</h3><ol class="list-decimal pl-6"><li class="text-lg text-gray-700 leading-relaxed">\u041F\u043E\u0448\u0443\u043A: \u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043A\u043B\u044E\u0447\u043E\u0432\u0435 \u0441\u043B\u043E\u0432\u043E \u0443 \u0440\u044F\u0434\u043E\u043A \u043F\u043E\u0448\u0443\u043A\u0443 \u0430\u0431\u043E \u0441\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u0439\u0442\u0435\u0441\u044F \u0444\u0456\u043B\u044C\u0442\u0440\u0430\u043C\u0438 \u0434\u043B\u044F \u0437\u043D\u0430\u0445\u043E\u0434\u0436\u0435\u043D\u043D\u044F \u0442\u043E\u0432\u0430\u0440\u0456\u0432 \u0442\u0430 \u043F\u043E\u0441\u043B\u0443\u0433, \u044F\u043A\u0456 \u0432\u0430\u0441 \u0446\u0456\u043A\u0430\u0432\u043B\u044F\u0442\u044C.</li><li class="text-lg text-gray-700 leading-relaxed">\u041F\u043E\u0434\u0430\u043D\u043D\u044F \u043E\u0433\u043E\u043B\u043E\u0448\u0435\u043D\u043D\u044F: \u042F\u043A\u0449\u043E \u0432\u0438 \u0445\u043E\u0447\u0435\u0442\u0435 \u043F\u0440\u043E\u0434\u0430\u0442\u0438 \u0449\u043E\u0441\u044C, \u043F\u0440\u043E\u0441\u0442\u043E \u043D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u043A\u043D\u043E\u043F\u043A\u0443 &quot;\u041F\u043E\u0434\u0430\u0442\u0438 \u043E\u0433\u043E\u043B\u043E\u0448\u0435\u043D\u043D\u044F&quot; \u0456 \u0434\u043E\u0434\u0430\u0439\u0442\u0435 \u0432\u0441\u044E \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u0443 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E.</li><li class="text-lg text-gray-700 leading-relaxed">\u041A\u043E\u043D\u0442\u0430\u043A\u0442 \u0437 \u043F\u0440\u043E\u0434\u0430\u0432\u0446\u0435\u043C: \u0417\u043D\u0430\u0439\u0448\u043B\u0438 \u0442\u043E\u0432\u0430\u0440 \u0447\u0438 \u043F\u043E\u0441\u043B\u0443\u0433\u0443, \u044F\u043A\u0430 \u0432\u0430\u0441 \u0437\u0430\u0446\u0456\u043A\u0430\u0432\u0438\u043B\u0430? \u0417\u0432&#39;\u044F\u0436\u0456\u0442\u044C\u0441\u044F \u0437 \u043F\u0440\u043E\u0434\u0430\u0432\u0446\u0435\u043C \u0431\u0435\u0437\u043F\u043E\u0441\u0435\u0440\u0435\u0434\u043D\u044C\u043E \u0447\u0435\u0440\u0435\u0437 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0443 BuySell \u0434\u043B\u044F \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043D\u044F \u0434\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u043E\u0457 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457 \u0430\u0431\u043E \u043E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u0457 \u0437\u0443\u0441\u0442\u0440\u0456\u0447\u0456.</li></ol><p class="text-lg text-gray-700 leading-relaxed mt-6"> \u041F\u0440\u0438\u0454\u0434\u043D\u0443\u0439\u0442\u0435\u0441\u044C \u0434\u043E BuySell \u0432\u0436\u0435 \u0441\u044C\u043E\u0433\u043E\u0434\u043D\u0456 \u0442\u0430 \u0440\u043E\u0437\u043F\u043E\u0447\u043D\u0456\u0442\u044C \u0443\u0441\u043F\u0456\u0448\u043D\u0456 \u0443\u0433\u043E\u0434\u0438! </p><p class="text-lg text-gray-700 leading-relaxed mt-6"> \u0426\u0435 \u043B\u0438\u0448\u0435 \u043D\u0435\u0432\u0435\u043B\u0438\u0447\u043A\u0438\u0439 \u043E\u0433\u043B\u044F\u0434 BuySell, \u0430\u043B\u0435 \u0446\u044F \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u043C\u0430\u0454 \u043D\u0430\u0431\u0430\u0433\u0430\u0442\u043E \u0431\u0456\u043B\u044C\u0448\u0435 \u0434\u043B\u044F \u043F\u0440\u043E\u043F\u043E\u0437\u0438\u0446\u0456\u0457. \u041D\u0430\u0441\u043E\u043B\u043E\u0434\u0436\u0443\u0439\u0442\u0435\u0441\u044F \u043F\u043E\u043A\u0443\u043F\u043A\u0430\u043C\u0438 \u0442\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0430\u043C\u0438 \u043D\u0430 BuySell! </p></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CAYkh6u1.mjs.map
