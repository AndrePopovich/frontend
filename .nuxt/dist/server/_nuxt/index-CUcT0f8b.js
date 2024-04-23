import { _ as __nuxt_component_0 } from "./nuxt-link-P6SDANQl.js";
import { ref, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _imports_0, a as _imports_1 } from "./category-BvcUxaqD.js";
import { useRouter } from "vue-router";
import { _ as _export_sfc } from "../server.mjs";
import "ufo";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "radix3";
import "defu";
import "klona";
import "devalue";
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
        _push(`<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-v-97cb30a9><div class="flex flex-col sm:flex-row justify-between items-center mb-4" data-v-97cb30a9><h1 class="big-center-text lg:mb-0 lg:mr-4" data-v-97cb30a9>Мої оголошення</h1>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: "/profile/user/ads/add",
          class: "green-button"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Додати оголошення`);
            } else {
              return [
                createTextVNode("Додати оголошення")
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
            _push(`</div><div class="p-4" data-v-97cb30a9><h3 class="text-lg font-semibold truncate mb-2" data-v-97cb30a9>${ssrInterpolate(ad.name)}</h3><div class="flex items-center" data-v-97cb30a9><img${ssrRenderAttr("src", _imports_0)} alt="Місто" class="mr-2 inline-block h-4 w-4" data-v-97cb30a9><p data-v-97cb30a9>${ssrInterpolate(ad.city.name)}</p></div><div class="flex items-center" data-v-97cb30a9><img${ssrRenderAttr("src", _imports_1)} alt="Категорія" class="mr-2 inline-block h-4 w-4" data-v-97cb30a9><p data-v-97cb30a9>${ssrInterpolate(ad.category.name)}</p></div><hr class="my-4 border-t border-gray-300" data-v-97cb30a9><p class="font-bold text-xl my-4" data-v-97cb30a9>${ssrInterpolate(ad.price)} грн</p><div class="mt-4" data-v-97cb30a9><button class="orange-button w-full mb-2" data-v-97cb30a9>Редагувати</button><button class="red-button w-full" data-v-97cb30a9>Видалити</button></div></div></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<div data-v-97cb30a9><p data-v-97cb30a9>У Вас все ще немає оголошень, додайте їх.</p></div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center h-full" data-v-97cb30a9><p class="text-lg mb-4" data-v-97cb30a9>Ви не ввійшли в профіль</p>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: "/auth/",
          class: "btn-admin"
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
export {
  index as default
};
//# sourceMappingURL=index-CUcT0f8b.js.map
