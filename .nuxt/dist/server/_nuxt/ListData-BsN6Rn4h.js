import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { useRouter } from "vue-router";
const _sfc_main = {
  __name: "ListData",
  __ssrInlineRender: true,
  props: {
    apiUrl: {
      type: String,
      required: true
    },
    apiUrlEdit: {
      type: String,
      required: true
    },
    pathToEdit: {
      type: String,
      required: true
    },
    apiUrlDelete: {
      type: String,
      required: true
    },
    nameObject: {
      type: String,
      required: true
    },
    nameObjectText: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    useRouter();
    const props = __props;
    const objects = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-900 min-h-screen flex justify-center p-4" }, _attrs))}><div><h2 class="text-2xl font-bold text-center text-white mb-4">${ssrInterpolate(props.nameObjectText)}</h2>`);
      if (objects.value && objects.value.length > 0) {
        _push(`<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5"><!--[-->`);
        ssrRenderList(objects.value, (object, index) => {
          _push(`<div class="bg-white rounded-lg shadow-lg p-6 text-center"><p class="font-bold">${ssrInterpolate(object.name)}</p><div class="mt-4"><button class="orange-button w-full mb-2">Редагувати</button><button class="red-button w-full">Видалити</button></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div><p class="big-center-text text-white">${ssrInterpolate(props.nameObjectText)} не знайдено</p></div>`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/ListData.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=ListData-BsN6Rn4h.js.map
