import { _ as __nuxt_component_0 } from './nuxt-link-P6SDANQl.mjs';
import { ref, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { useRouter } from 'vue-router';

const getEditObjectFromLocalStorage = () => {
  const editObjectString = localStorage.getItem("editObject");
  return JSON.parse(editObjectString);
};
const _sfc_main = {
  __name: "EditData",
  __ssrInlineRender: true,
  props: {
    object: {
      type: Object,
      required: true
    },
    apiUrlEdit: {
      type: String,
      required: true
    },
    backUrl: {
      type: String,
      required: true
    },
    objectName: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    useRouter();
    const props = __props;
    const nameObject = ref(props.object.name);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white p-8 rounded-lg shadow-lg mx-4" }, _attrs))}>`);
      if (__props.object) {
        _push(`<div><h2 class="text-center text-xl font-semibold mb-4">\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 ${ssrInterpolate(__props.objectName)}</h2><input type="text"${ssrRenderAttr("value", nameObject.value)} placeholder="\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043D\u0430\u0437\u0432\u0443" class="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"><button class="green-button block mx-auto mt-4">\u0417\u043C\u0456\u043D\u0438\u0442\u0438 \u043D\u0430\u0437\u0432\u0443 ${ssrInterpolate(__props.objectName)}</button>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: __props.backUrl,
          class: "block btn-admin mt-4"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u041D\u0430\u0437\u0430\u0434 `);
            } else {
              return [
                createTextVNode(" \u041D\u0430\u0437\u0430\u0434 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div><p>\u041F\u043E\u043C\u0438\u043B\u043A\u0430!!!</p>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: __props.backUrl,
          class: "btn-admin mt-4"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u0438\u0441\u044C \u043D\u0430\u0437\u0430\u0434`);
            } else {
              return [
                createTextVNode("\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u0438\u0441\u044C \u043D\u0430\u0437\u0430\u0434")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/EditData.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _, getEditObjectFromLocalStorage as g };
//# sourceMappingURL=EditData-Cr1JfTL8.mjs.map
