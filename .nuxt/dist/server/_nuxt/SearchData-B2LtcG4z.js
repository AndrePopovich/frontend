import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { useRouter } from "vue-router";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {
  __name: "SearchData",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const adName = ref("");
    const minPrice = ref(null);
    const maxPrice = ref(null);
    const sortBy = ref("default");
    const categories = ref([]);
    const cities = ref([]);
    const selectedCategory = ref(null);
    const selectedCity = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-300" }, _attrs))} data-v-c62feb46><div class="bg-gray-300 rounded-lg shadow-lg p-8 mx-auto" data-v-c62feb46><form class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" data-v-c62feb46><div class="flex flex-col relative" data-v-c62feb46><input type="text" id="adName" placeholder="Що шукаєте?"${ssrRenderAttr("value", adName.value)} class="custom-input" data-v-c62feb46><div class="highlight-border" data-v-c62feb46></div></div><div class="flex flex-col relative" data-v-c62feb46><input list="categories" id="selectedCategory" placeholder="Виберіть категорію"${ssrRenderAttr("value", selectedCategory.value)} class="custom-input" data-v-c62feb46><div class="highlight-border" data-v-c62feb46></div><datalist id="categories" data-v-c62feb46><!--[-->`);
      ssrRenderList(categories.value, (category) => {
        _push(`<option${ssrRenderAttr("value", category.name)} data-v-c62feb46>${ssrInterpolate(category.name)}</option>`);
      });
      _push(`<!--]--></datalist></div><div class="flex flex-col relative" data-v-c62feb46><input list="cities" id="selectedCity" placeholder="Виберіть місто"${ssrRenderAttr("value", selectedCity.value)} class="custom-input" data-v-c62feb46><div class="highlight-border" data-v-c62feb46></div><datalist id="cities" data-v-c62feb46><!--[-->`);
      ssrRenderList(cities.value, (city) => {
        _push(`<option${ssrRenderAttr("value", city.name)} data-v-c62feb46>${ssrInterpolate(city.name)}</option>`);
      });
      _push(`<!--]--></datalist></div><div class="flex flex-col relative" data-v-c62feb46><input type="number" placeholder="Мінімальна ціна" id="minPrice"${ssrRenderAttr("value", minPrice.value)} min="0" max="1000000" class="custom-input" data-v-c62feb46><div class="highlight-border" data-v-c62feb46></div></div><div class="flex flex-col relative" data-v-c62feb46><input type="number" placeholder="Максимальна ціна" id="maxPrice"${ssrRenderAttr("value", maxPrice.value)} min="0" max="1000000" class="custom-input" data-v-c62feb46><div class="highlight-border" data-v-c62feb46></div></div><div class="flex flex-col relative" data-v-c62feb46><select id="sortBy" class="custom-input" data-v-c62feb46><option value="default" data-v-c62feb46${ssrIncludeBooleanAttr(Array.isArray(sortBy.value) ? ssrLooseContain(sortBy.value, "default") : ssrLooseEqual(sortBy.value, "default")) ? " selected" : ""}>За замовчуванням</option><option value="priceAsc" data-v-c62feb46${ssrIncludeBooleanAttr(Array.isArray(sortBy.value) ? ssrLooseContain(sortBy.value, "priceAsc") : ssrLooseEqual(sortBy.value, "priceAsc")) ? " selected" : ""}>Ціна (зростанням)</option><option value="priceDesc" data-v-c62feb46${ssrIncludeBooleanAttr(Array.isArray(sortBy.value) ? ssrLooseContain(sortBy.value, "priceDesc") : ssrLooseEqual(sortBy.value, "priceDesc")) ? " selected" : ""}>Ціна (спаданням)</option><option value="dateAsc" data-v-c62feb46${ssrIncludeBooleanAttr(Array.isArray(sortBy.value) ? ssrLooseContain(sortBy.value, "dateAsc") : ssrLooseEqual(sortBy.value, "dateAsc")) ? " selected" : ""}>Дата (зростанням)</option><option value="dateDesc" data-v-c62feb46${ssrIncludeBooleanAttr(Array.isArray(sortBy.value) ? ssrLooseContain(sortBy.value, "dateDesc") : ssrLooseEqual(sortBy.value, "dateDesc")) ? " selected" : ""}>Дата (спаданням)</option></select><div class="highlight-border" data-v-c62feb46></div></div><div class="col-span-full flex justify-center" data-v-c62feb46><button type="submit" class="btn-admin w-64" data-v-c62feb46>Знайти оголошення</button></div></form></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/search/SearchData.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SearchData = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c62feb46"]]);
export {
  SearchData as S
};
//# sourceMappingURL=SearchData-B2LtcG4z.js.map
