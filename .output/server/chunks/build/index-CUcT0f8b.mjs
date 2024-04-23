import { _ as __nuxt_component_0 } from './nuxt-link-P6SDANQl.mjs';
import { ref, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0, a as _imports_1 } from './category-BvcUxaqD.mjs';
import { useRouter } from 'vue-router';
import { _ as _export_sfc } from './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const profile = ref(null);
    useRouter();
    const loadedImages = ref({});
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-200 min-h-screen p-8" }, _attrs))} data-v-97cb30a9>`);
      if (profile.value) {
        _push(`<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-v-97cb30a9><div class="flex flex-col sm:flex-row justify-between items-center mb-4" data-v-97cb30a9><h1 class="big-center-text lg:mb-0 lg:mr-4" data-v-97cb30a9>\u041C\u043E\u0457 \u043E\u0433\u043E\u043B\u043E\u0448\u0435\u043D\u043D\u044F</h1>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: "/profile/user/ads/add",
          class: "green-button"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u0414\u043E\u0434\u0430\u0442\u0438 \u043E\u0433\u043E\u043B\u043E\u0448\u0435\u043D\u043D\u044F`);
            } else {
              return [
                createTextVNode("\u0414\u043E\u0434\u0430\u0442\u0438 \u043E\u0433\u043E\u043B\u043E\u0448\u0435\u043D\u043D\u044F")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
        if (profile.value.ads.length > 0) {
          _push(`<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" data-v-97cb30a9><!--[-->`);
          ssrRenderList(profile.value.ads, (ad) => {
            _push(`<div class="bg-white rounded-lg shadow-md overflow-hidden min-w-0 min-h-0" data-v-97cb30a9><div class="aspect-w-1 aspect-h-1" data-v-97cb30a9>`);
            if (ad.previewImageId) {
              _push(`<div data-v-97cb30a9>`);
              if (loadedImages.value[ad.previewImageId]) {
                _push(`<img class="thumb"${ssrRenderAttr("src", loadedImages.value[ad.previewImageId])} alt="Image" data-v-97cb30a9>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div><div class="p-4" data-v-97cb30a9><h3 class="text-lg font-semibold truncate mb-2" data-v-97cb30a9>${ssrInterpolate(ad.name)}</h3><div class="flex items-center" data-v-97cb30a9><img${ssrRenderAttr("src", _imports_0)} alt="\u041C\u0456\u0441\u0442\u043E" class="mr-2 inline-block h-4 w-4" data-v-97cb30a9><p data-v-97cb30a9>${ssrInterpolate(ad.city.name)}</p></div><div class="flex items-center" data-v-97cb30a9><img${ssrRenderAttr("src", _imports_1)} alt="\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044F" class="mr-2 inline-block h-4 w-4" data-v-97cb30a9><p data-v-97cb30a9>${ssrInterpolate(ad.category.name)}</p></div><hr class="my-4 border-t border-gray-300" data-v-97cb30a9><p class="font-bold text-xl my-4" data-v-97cb30a9>${ssrInterpolate(ad.price)} \u0433\u0440\u043D</p><div class="mt-4" data-v-97cb30a9><button class="orange-button w-full mb-2" data-v-97cb30a9>\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438</button><button class="red-button w-full" data-v-97cb30a9>\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438</button></div></div></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<div data-v-97cb30a9><p data-v-97cb30a9>\u0423 \u0412\u0430\u0441 \u0432\u0441\u0435 \u0449\u0435 \u043D\u0435\u043C\u0430\u0454 \u043E\u0433\u043E\u043B\u043E\u0448\u0435\u043D\u044C, \u0434\u043E\u0434\u0430\u0439\u0442\u0435 \u0457\u0445.</p></div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center h-full" data-v-97cb30a9><p class="text-lg mb-4" data-v-97cb30a9>\u0412\u0438 \u043D\u0435 \u0432\u0432\u0456\u0439\u0448\u043B\u0438 \u0432 \u043F\u0440\u043E\u0444\u0456\u043B\u044C</p>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: "/auth/",
          class: "btn-admin"
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
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/user/ads/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-97cb30a9"]]);

export { index as default };
//# sourceMappingURL=index-CUcT0f8b.mjs.map
