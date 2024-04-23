import { _ as __nuxt_component_0 } from "./nuxt-link-P6SDANQl.js";
import { ref, watch, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _imports_0, a as _imports_1 } from "./category-BvcUxaqD.js";
import { useRoute } from "vue-router";
import { S as SearchData } from "./SearchData-B2LtcG4z.js";
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
    const route = useRoute();
    const ads = ref([]);
    const loadedImages = ref({});
    async function loadData() {
      const getAdsURL = "https://buy-sell-api.onrender.com/api/search";
      const adName = route.query.adName || "";
      const categoryName = route.query.categoryName || "";
      const cityName = route.query.cityName || "";
      const minPrice = route.query.minPrice || "";
      const maxPrice = route.query.maxPrice || "";
      const sortBy = route.query.sortBy || "default";
      const url = new URL(getAdsURL);
      url.searchParams.append("adName", adName);
      url.searchParams.append("categoryName", categoryName);
      url.searchParams.append("cityName", cityName);
      url.searchParams.append("minPrice", minPrice);
      url.searchParams.append("maxPrice", maxPrice);
      url.searchParams.append("sortBy", sortBy);
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          ads.value = data;
          for (const ad of ads.value) {
            loadImage(ad.id);
          }
        } else {
          console.error("Помилка при отриманні даних");
        }
      } catch (error) {
        console.error("Помилка при виконанні запиту:", error);
      }
    }
    async function loadImage(idAd) {
      try {
        const referalImg = "https://buy-sell-api.onrender.com/api/search/preview/";
        const url = referalImg + idAd;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to load image");
        }
        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);
        loadedImages.value[idAd] = imageUrl;
      } catch (error) {
        console.error("Error loading image:", error);
      }
    }
    watch(
      () => route.query,
      () => {
        loadData();
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-200 min-h-screen p-8" }, _attrs))} data-v-57106c34>`);
      _push(ssrRenderComponent(unref(SearchData), null, null, _parent));
      if (ads.value.length > 0) {
        _push(`<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-v-57106c34><h2 class="big-center-text mb-4" data-v-57106c34>Результати пошуку:</h2><ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" data-v-57106c34><!--[-->`);
        ssrRenderList(ads.value, (ad) => {
          _push(`<li class="bg-white rounded-lg shadow-md overflow-hidden min-w-0 min-h-0" data-v-57106c34>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/search/${ad.id}`,
            class: "block"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="aspect-w-1 aspect-h-1" data-v-57106c34${_scopeId}>`);
                if (loadedImages.value[ad.id]) {
                  _push2(`<img${ssrRenderAttr("src", loadedImages.value[ad.id])} class="thumb" alt="Image" data-v-57106c34${_scopeId}>`);
                } else {
                  _push2(`<div class="bg-gray-300 flex items-center justify-center text-gray-600" data-v-57106c34${_scopeId}>Завантаження зображення...</div>`);
                }
                _push2(`</div><div class="p-4" data-v-57106c34${_scopeId}><h3 class="text-lg font-semibold truncate mb-2" data-v-57106c34${_scopeId}>${ssrInterpolate(ad.name)}</h3><div class="flex items-center" data-v-57106c34${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="Місто" class="mr-2 inline-block h-4 w-4" data-v-57106c34${_scopeId}><p data-v-57106c34${_scopeId}>${ssrInterpolate(ad.city.name)}</p></div><div class="flex items-center" data-v-57106c34${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="Категорія" class="mr-2 inline-block h-4 w-4" data-v-57106c34${_scopeId}><p data-v-57106c34${_scopeId}>${ssrInterpolate(ad.category.name)}</p></div><hr class="my-4 border-t border-gray-300" data-v-57106c34${_scopeId}><p class="font-bold text-xl my-4" data-v-57106c34${_scopeId}>${ssrInterpolate(ad.price)} грн</p></div>`);
              } else {
                return [
                  createVNode("div", { class: "aspect-w-1 aspect-h-1" }, [
                    loadedImages.value[ad.id] ? (openBlock(), createBlock("img", {
                      key: 0,
                      src: loadedImages.value[ad.id],
                      class: "thumb",
                      alt: "Image"
                    }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "bg-gray-300 flex items-center justify-center text-gray-600"
                    }, "Завантаження зображення..."))
                  ]),
                  createVNode("div", { class: "p-4" }, [
                    createVNode("h3", { class: "text-lg font-semibold truncate mb-2" }, toDisplayString(ad.name), 1),
                    createVNode("div", { class: "flex items-center" }, [
                      createVNode("img", {
                        src: _imports_0,
                        alt: "Місто",
                        class: "mr-2 inline-block h-4 w-4"
                      }),
                      createVNode("p", null, toDisplayString(ad.city.name), 1)
                    ]),
                    createVNode("div", { class: "flex items-center" }, [
                      createVNode("img", {
                        src: _imports_1,
                        alt: "Категорія",
                        class: "mr-2 inline-block h-4 w-4"
                      }),
                      createVNode("p", null, toDisplayString(ad.category.name), 1)
                    ]),
                    createVNode("hr", { class: "my-4 border-t border-gray-300" }),
                    createVNode("p", { class: "font-bold text-xl my-4" }, toDisplayString(ad.price) + " грн", 1)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<p class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-4xl font-bold my-4" data-v-57106c34>Немає результатів пошуку</p>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/search/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-57106c34"]]);
export {
  index as default
};
//# sourceMappingURL=index-DE6qch4k.js.map
