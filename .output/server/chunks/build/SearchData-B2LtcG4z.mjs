import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { _ as _export_sfc } from './server.mjs';

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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-300" }, _attrs))} data-v-c62feb46><div class="bg-gray-300 rounded-lg shadow-lg p-8 mx-auto" data-v-c62feb46><form class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" data-v-c62feb46><div class="flex flex-col relative" data-v-c62feb46><input type="text" id="adName" placeholder="\u0429\u043E \u0448\u0443\u043A\u0430\u0454\u0442\u0435?"${ssrRenderAttr("value", adName.value)} class="custom-input" data-v-c62feb46><div class="highlight-border" data-v-c62feb46></div></div><div class="flex flex-col relative" data-v-c62feb46><input list="categories" id="selectedCategory" placeholder="\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044E"${ssrRenderAttr("value", selectedCategory.value)} class="custom-input" data-v-c62feb46><div class="highlight-border" data-v-c62feb46></div><datalist id="categories" data-v-c62feb46><!--[-->`);
      ssrRenderList(categories.value, (category) => {
        _push(`<option${ssrRenderAttr("value", category.name)} data-v-c62feb46>${ssrInterpolate(category.name)}</option>`);
      });
      _push(`<!--]--></datalist></div><div class="flex flex-col relative" data-v-c62feb46><input list="cities" id="selectedCity" placeholder="\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044C \u043C\u0456\u0441\u0442\u043E"${ssrRenderAttr("value", selectedCity.value)} class="custom-input" data-v-c62feb46><div class="highlight-border" data-v-c62feb46></div><datalist id="cities" data-v-c62feb46><!--[-->`);
      ssrRenderList(cities.value, (city) => {
        _push(`<option${ssrRenderAttr("value", city.name)} data-v-c62feb46>${ssrInterpolate(city.name)}</option>`);
      });
      _push(`<!--]--></datalist></div><div class="flex flex-col relative" data-v-c62feb46><input type="number" placeholder="\u041C\u0456\u043D\u0456\u043C\u0430\u043B\u044C\u043D\u0430 \u0446\u0456\u043D\u0430" id="minPrice"${ssrRenderAttr("value", minPrice.value)} min="0" max="1000000" class="custom-input" data-v-c62feb46><div class="highlight-border" data-v-c62feb46></div></div><div class="flex flex-col relative" data-v-c62feb46><input type="number" placeholder="\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430 \u0446\u0456\u043D\u0430" id="maxPrice"${ssrRenderAttr("value", maxPrice.value)} min="0" max="1000000" class="custom-input" data-v-c62feb46><div class="highlight-border" data-v-c62feb46></div></div><div class="flex flex-col relative" data-v-c62feb46><select id="sortBy" class="custom-input" data-v-c62feb46><option value="default" data-v-c62feb46${ssrIncludeBooleanAttr(Array.isArray(sortBy.value) ? ssrLooseContain(sortBy.value, "default") : ssrLooseEqual(sortBy.value, "default")) ? " selected" : ""}>\u0417\u0430 \u0437\u0430\u043C\u043E\u0432\u0447\u0443\u0432\u0430\u043D\u043D\u044F\u043C</option><option value="priceAsc" data-v-c62feb46${ssrIncludeBooleanAttr(Array.isArray(sortBy.value) ? ssrLooseContain(sortBy.value, "priceAsc") : ssrLooseEqual(sortBy.value, "priceAsc")) ? " selected" : ""}>\u0426\u0456\u043D\u0430 (\u0437\u0440\u043E\u0441\u0442\u0430\u043D\u043D\u044F\u043C)</option><option value="priceDesc" data-v-c62feb46${ssrIncludeBooleanAttr(Array.isArray(sortBy.value) ? ssrLooseContain(sortBy.value, "priceDesc") : ssrLooseEqual(sortBy.value, "priceDesc")) ? " selected" : ""}>\u0426\u0456\u043D\u0430 (\u0441\u043F\u0430\u0434\u0430\u043D\u043D\u044F\u043C)</option><option value="dateAsc" data-v-c62feb46${ssrIncludeBooleanAttr(Array.isArray(sortBy.value) ? ssrLooseContain(sortBy.value, "dateAsc") : ssrLooseEqual(sortBy.value, "dateAsc")) ? " selected" : ""}>\u0414\u0430\u0442\u0430 (\u0437\u0440\u043E\u0441\u0442\u0430\u043D\u043D\u044F\u043C)</option><option value="dateDesc" data-v-c62feb46${ssrIncludeBooleanAttr(Array.isArray(sortBy.value) ? ssrLooseContain(sortBy.value, "dateDesc") : ssrLooseEqual(sortBy.value, "dateDesc")) ? " selected" : ""}>\u0414\u0430\u0442\u0430 (\u0441\u043F\u0430\u0434\u0430\u043D\u043D\u044F\u043C)</option></select><div class="highlight-border" data-v-c62feb46></div></div><div class="col-span-full flex justify-center" data-v-c62feb46><button type="submit" class="btn-admin w-64" data-v-c62feb46>\u0417\u043D\u0430\u0439\u0442\u0438 \u043E\u0433\u043E\u043B\u043E\u0448\u0435\u043D\u043D\u044F</button></div></form></div></div>`);
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

export { SearchData as S };
//# sourceMappingURL=SearchData-B2LtcG4z.mjs.map
