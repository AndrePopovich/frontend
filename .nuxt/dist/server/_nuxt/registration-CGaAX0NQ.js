import { _ as __nuxt_component_0 } from "./nuxt-link-P6SDANQl.js";
import { ref, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import "destr";
import "klona";
import "hookable";
import { useRouter } from "vue-router";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ufo";
import "#internal/nitro";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "radix3";
import "defu";
import "devalue";
const _sfc_main = {
  __name: "registration",
  __ssrInlineRender: true,
  setup(__props) {
    const firstname = ref("");
    const lastname = ref("");
    const email = ref("");
    const phone = ref("");
    const password = ref("");
    const repeatPassword = ref("");
    useRouter();
    const firstNameError = ref("");
    const lastNameError = ref("");
    const emailError = ref("");
    const phoneError = ref("");
    const passwordError = ref("");
    const repeatPasswordError = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gradient-to-b from-purple-900 to-purple-700 min-h-screen flex flex-col justify-center items-center px-4" }, _attrs))} data-v-44f3d446><h1 class="text-4xl font-bold text-white mb-8" data-v-44f3d446>Вітаємо Вас в BuySell</h1><div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md" data-v-44f3d446><form class="space-y-4" data-v-44f3d446><div class="flex flex-col" data-v-44f3d446><input type="text"${ssrRenderAttr("value", firstname.value)} placeholder="Введіть ім&#39;я" required class="input" data-v-44f3d446>`);
      if (firstNameError.value) {
        _push(`<span class="text-red-500 text-xs" data-v-44f3d446>${ssrInterpolate(firstNameError.value)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex flex-col" data-v-44f3d446><input type="text"${ssrRenderAttr("value", lastname.value)} placeholder="Введіть Фамілію" required class="input" data-v-44f3d446>`);
      if (lastNameError.value) {
        _push(`<span class="text-red-500 text-xs" data-v-44f3d446>${ssrInterpolate(lastNameError.value)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex flex-col" data-v-44f3d446><input type="text"${ssrRenderAttr("value", email.value)} autocomplete="email" placeholder="Введіть електронну пошту" required class="input" data-v-44f3d446>`);
      if (emailError.value) {
        _push(`<span class="text-red-500 text-xs" data-v-44f3d446>${ssrInterpolate(emailError.value)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex flex-col" data-v-44f3d446><input type="text"${ssrRenderAttr("value", phone.value)} placeholder="Введіть номер телефону" required class="input" data-v-44f3d446>`);
      if (phoneError.value) {
        _push(`<span class="text-red-500 text-xs" data-v-44f3d446>${ssrInterpolate(phoneError.value)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex flex-col" data-v-44f3d446><input type="password"${ssrRenderAttr("value", password.value)} placeholder="Введіть пароль" required class="input" data-v-44f3d446>`);
      if (passwordError.value) {
        _push(`<span class="text-red-500 text-xs" data-v-44f3d446>${ssrInterpolate(passwordError.value)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex flex-col" data-v-44f3d446><input type="password"${ssrRenderAttr("value", repeatPassword.value)} placeholder="Повторіть пароль" required class="input" data-v-44f3d446>`);
      if (repeatPasswordError.value) {
        _push(`<span class="text-red-500 text-xs" data-v-44f3d446>${ssrInterpolate(repeatPasswordError.value)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><button type="submit" class="btn bg-purple-500 text-white hover:bg-purple-600 w-full" data-v-44f3d446>Створити новий акаунт</button></form>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/auth/",
        class: "text-center block mt-4 text-blue-600"
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
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/registration.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const registration = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-44f3d446"]]);
export {
  registration as default
};
//# sourceMappingURL=registration-CGaAX0NQ.js.map
