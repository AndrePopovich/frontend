import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { _ as _imports_0, a as _imports_1 } from "./category-BvcUxaqD.js";
import { useRoute } from "vue-router";
import { _ as _export_sfc } from "../server.mjs";
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
import "ufo";
import "devalue";
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute().params;
    const ad = ref(null);
    const date = ref("");
    const imageUrls = ref([]);
    const currentIndex = ref(0);
    ref(false);
    const numberPhone = ref("Показати номер");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-400 min-h-screen" }, _attrs))} data-v-7f9fb389><div class="w-full bg-white" data-v-7f9fb389><div class="container mx-auto p-4 pt-6" data-v-7f9fb389><button class="btn-admin" data-v-7f9fb389>Повернутись назад</button></div></div><div class="bg-gray-200 container mx-auto p-4 py-8" data-v-7f9fb389>`);
      if (ad.value) {
        _push(`<div data-v-7f9fb389><hr class="my-4 border-t border-gray-400" data-v-7f9fb389><div class="mt-4 flex flex-col lg:flex-row lg:justify-between items-center" data-v-7f9fb389><div class="flex-shrink-0 mb-4 lg:mb-0 mx-auto" data-v-7f9fb389><img${ssrRenderAttr("src", imageUrls.value[currentIndex.value])}${ssrRenderAttr("alt", `Image ${currentIndex.value + 1}`)} class="thumb" data-v-7f9fb389><div class="flex justify-center mt-4" data-v-7f9fb389><button${ssrIncludeBooleanAttr(currentIndex.value === 0) ? " disabled" : ""} class="${ssrRenderClass([{ "opacity-50": currentIndex.value === 0 }, "mr-2 p-2 bg-gray-100 rounded dark:bg-gray-800 dark:text-gray-400 w-16"])}" data-v-7f9fb389><b data-v-7f9fb389>&lt;</b></button><button${ssrIncludeBooleanAttr(currentIndex.value === imageUrls.value.length - 1) ? " disabled" : ""} class="${ssrRenderClass([{ "opacity-50": currentIndex.value === imageUrls.value.length - 1 }, "p-2 bg-gray-100 rounded dark:bg-gray-800 dark:text-gray-400 w-16"])}" data-v-7f9fb389><b data-v-7f9fb389>&gt;</b></button></div></div><div class="text-lg w-full lg:w-2/5 lg:mx-10 bg-white rounded-lg shadow-md p-8" data-v-7f9fb389><p class="font-bold text-2xl" style="${ssrRenderStyle({ "word-wrap": "break-word" })}" data-v-7f9fb389>${ssrInterpolate(ad.value.name)}</p><p class="text-gray-700 font-bold text-2xl mt-2" style="${ssrRenderStyle({ "word-wrap": "break-word" })}" data-v-7f9fb389>${ssrInterpolate(ad.value.price)} грн</p><hr class="my-4 border-t border-gray-300" data-v-7f9fb389><div class="flex items-center mt-4" data-v-7f9fb389><img${ssrRenderAttr("src", _imports_0)} alt="Location" class="w-4 h-4 mr-1" data-v-7f9fb389><p class="text-gray-700" data-v-7f9fb389>${ssrInterpolate(ad.value.city.name)}</p></div><div class="flex items-center mt-1" data-v-7f9fb389><img${ssrRenderAttr("src", _imports_1)} alt="Category" class="w-4 h-4 mr-1" data-v-7f9fb389><p class="text-gray-700" data-v-7f9fb389>${ssrInterpolate(ad.value.category.name)}</p></div><p class="text-purple-900 mt-2" data-v-7f9fb389>Автор: ${ssrInterpolate(ad.value.user.firstName)} ${ssrInterpolate(ad.value.user.lastName)}</p><div class="text-center mt-8" data-v-7f9fb389><button class="btn-admin rounded mt-2 w-full lg:block" data-v-7f9fb389>${ssrInterpolate(numberPhone.value)}</button><hr class="my-4 border-t border-gray-300" data-v-7f9fb389><p class="text-sm text-gray-500 mt-4" data-v-7f9fb389>Дата створення: ${ssrInterpolate(date.value)}</p></div></div></div><hr class="my-4 border-t border-gray-400" data-v-7f9fb389><div class="bg-white rounded-lg shadow-md p-4 pt-8 block-size" data-v-7f9fb389><p class="font-bold text-xl text-center" data-v-7f9fb389>Опис</p><hr class="my-4 border-t border-gray-400" data-v-7f9fb389><p style="${ssrRenderStyle({ "word-wrap": "break-word" })}" data-v-7f9fb389>${ssrInterpolate(ad.value.description)}</p></div></div>`);
      } else {
        _push(`<div data-v-7f9fb389><p data-v-7f9fb389>Завантаження даних...</p></div>`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/search/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7f9fb389"]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_-a3365v1l.js.map
