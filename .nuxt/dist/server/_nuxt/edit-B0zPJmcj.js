import { _ as __nuxt_component_0 } from "./nuxt-link-P6SDANQl.js";
import { ref, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { useRouter } from "vue-router";
import "ufo";
import "../server.mjs";
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
  __name: "edit",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    ref(null);
    ref(null);
    ref(null);
    const name = ref(null);
    const description = ref(null);
    ref(null);
    const selectedCategory = ref(null);
    const selectedCity = ref(null);
    const price = ref(null);
    const categories = ref([]);
    const cities = ref([]);
    ref(null);
    ref(null);
    const files = ref([]);
    const filePreviews = ref([]);
    const nameError = ref("");
    const descriptionError = ref("");
    const selectedCategoryError = ref(null);
    const selectedCityError = ref(null);
    const priceError = ref(0);
    ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gradient-to-b from-gray-200 to-gray-100 min-h-screen py-8 px-4" }, _attrs))}><form enctype="multipart/form-data" method="post" class="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md"><div class="mb-4"><p class="big-center-text">Редагування оголошення</p></div><div class="mb-4"><input type="text" placeholder="Введіть назву"${ssrRenderAttr("value", name.value)} class="input-field" minlength="10" maxlength="100">`);
      if (nameError.value) {
        _push(`<span class="text-red-500 text-xs">${ssrInterpolate(nameError.value)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-4"><textarea placeholder="Опишіть оголошення" class="input-field-textarea" minlength="10" maxlength="300">${ssrInterpolate(description.value)}</textarea>`);
      if (descriptionError.value) {
        _push(`<span class="text-red-500 text-xs">${ssrInterpolate(descriptionError.value)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-4"><input list="categories"${ssrRenderAttr("value", selectedCategory.value)} placeholder="Виберіть категорію" class="input-field"><datalist id="categories"><!--[-->`);
      ssrRenderList(categories.value, (category) => {
        _push(`<option${ssrRenderAttr("value", category.name)}>${ssrInterpolate(category.name)}</option>`);
      });
      _push(`<!--]--></datalist>`);
      if (selectedCategoryError.value) {
        _push(`<span class="text-red-500 text-xs">${ssrInterpolate(selectedCategoryError.value)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-4"><input list="cities"${ssrRenderAttr("value", selectedCity.value)} placeholder="Виберіть місто" class="input-field"><datalist id="cities"><!--[-->`);
      ssrRenderList(cities.value, (city) => {
        _push(`<option${ssrRenderAttr("value", city.name)}>${ssrInterpolate(city.name)}</option>`);
      });
      _push(`<!--]--></datalist>`);
      if (selectedCityError.value) {
        _push(`<span class="text-red-500 text-xs">${ssrInterpolate(selectedCityError.value)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-4"><input type="number" placeholder="Введіть ціну"${ssrRenderAttr("value", price.value)} min="0" class="input-field">`);
      if (priceError.value) {
        _push(`<span class="text-red-500 text-xs">${ssrInterpolate(priceError.value)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-8"><input type="file" accept="image/png, image/jpeg" class="input-field">`);
      if (files.value[0] && filePreviews.value[0]) {
        _push(`<img${ssrRenderAttr("src", filePreviews.value[0])} class="image rounded-center" alt="Додайте фото 1">`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-8"><input type="file" accept="image/png, image/jpeg" class="input-field">`);
      if (files.value[1] && filePreviews.value[1]) {
        _push(`<img${ssrRenderAttr("src", filePreviews.value[1])} class="image rounded-center" alt="Додайте фото 2">`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-8"><input type="file" accept="image/png, image/jpeg" class="input-field">`);
      if (files.value[2] && filePreviews.value[2]) {
        _push(`<img${ssrRenderAttr("src", filePreviews.value[2])} class="image rounded-center" alt="Додайте фото 3">`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-8"><input type="file" accept="image/png, image/jpeg" class="input-field">`);
      if (files.value[3] && filePreviews.value[3]) {
        _push(`<img${ssrRenderAttr("src", filePreviews.value[3])} class="image rounded-center" alt="Додайте фото 4">`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex justify-between items-center mb-8">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/profile/user/ads",
        class: "red-button"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Назад`);
          } else {
            return [
              createTextVNode("Назад")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button type="submit" class="btn-admin">Змінити оголошення</button></div></form></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/user/ads/edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=edit-B0zPJmcj.js.map
