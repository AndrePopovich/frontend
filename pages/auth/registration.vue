<template>
    <div
        class="bg-gradient-to-b from-purple-900 to-purple-700 min-h-screen flex flex-col justify-center items-center px-4">
        <h1 class="text-4xl font-bold text-white mb-8">Вітаємо Вас в BuySell</h1>
        <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <form @submit.prevent="registerUser" class="space-y-4">
                <div class="flex flex-col">
                    <input type="text" v-model="firstname" placeholder="Введіть ім'я" required class="input">
                    <span v-if="firstNameError" class="text-red-500 text-xs">{{ firstNameError }}</span>
                </div>
                <div class="flex flex-col">
                    <input type="text" v-model="lastname" placeholder="Введіть Фамілію" required class="input">
                    <span v-if="lastNameError" class="text-red-500 text-xs">{{ lastNameError }}</span>
                </div>
                <div class="flex flex-col">
                    <input type="text" v-model="email" autocomplete="email" placeholder="Введіть електронну пошту"
                        required class="input">
                    <span v-if="emailError" class="text-red-500 text-xs">{{ emailError }}</span>
                </div>
                <div class="flex flex-col">
                    <input type="text" v-model="phone" placeholder="Введіть номер телефону" required class="input">
                    <span v-if="phoneError" class="text-red-500 text-xs">{{ phoneError }}</span>
                </div>
                <div class="flex flex-col">
                    <input type="password" v-model="password" placeholder="Введіть пароль" required class="input">
                    <span v-if="passwordError" class="text-red-500 text-xs">{{ passwordError }}</span>
                </div>
                <div class="flex flex-col">
                    <input type="password" v-model="repeatPassword" placeholder="Повторіть пароль" required
                        class="input">
                    <span v-if="repeatPasswordError" class="text-red-500 text-xs">{{ repeatPasswordError }}</span>
                </div>
                <button type="submit" class="btn bg-purple-500 text-white hover:bg-purple-600 w-full">Створити новий
                    акаунт</button>

            </form>
            <nuxt-link to="/auth/" class="text-center block mt-4 text-blue-600">Ввійти</nuxt-link>
        </div>
    </div>
</template>





<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const firstname = ref('');
const lastname = ref('');
const email = ref('');
const phone = ref('');
const password = ref('');
const repeatPassword = ref('');
const router = useRouter();
const referal = 'https://buy-sell-api.onrender.com/api/auth/register'
const firstNameError = ref('');
const lastNameError = ref('');
const emailError = ref('');
const phoneError = ref('');
const passwordError = ref('');
const repeatPasswordError = ref('');

const registerUser = async () => {
    const isValid = await validationData();
    const isExist = await isExistUser(email.value);
    console.log("isValid: ", isValid)
    console.log("isExist: ", !isExist)
    if (isValid) {
        if (!isExist) {
            try {
                const token = useCookie('XSRF-TOKEN');
                const formBody = {
                    firstname: firstname.value,
                    lastname: lastname.value,
                    email: email.value,
                    password: password.value,
                    phone: phone.value,
                };
                const headers = new Headers({
                    'X-XSRF-TOKEN': token.value
                });
                const tokenJWT = await useFetch(referal, {
                    credentials: 'include',
                    method: 'POST',
                    body: JSON.stringify(formBody),
                    headers
                });
                console.log(tokenJWT)
                router.push('/auth/');
            } catch (error) {
                console.error('Помилка при реєстрації користувача:', error.message);
            }
        } else {
            emailError.value = "Така пошта вже існує!!!"
        }

    } else {
        console.log("Невірні дані!")
    }
}

async function validationData() {
    clearErrors();
    let isValid = true;
    if (firstname.value.length < 3 || firstname.value.length > 20) {
        firstNameError.value = 'Ім\'я повинно містити від 3 до 20 символів';
        isValid = false;
    }
    if (lastname.value.length < 3 || lastname.value.length > 20) {
        lastNameError.value = 'Фамілія повинна містити від 3 до 20 символів';
        isValid = false;
    }
    if (!email.value.includes('@')) {
        emailError.value = 'Введіть коректну електронну адресу';
        isValid = false;
    }
    if (phone.value.length !== 10) {
        phoneError.value = 'Номер телефону повинен містити 10 символів';
        isValid = false;
    }
    if (password.value.length < 3 || password.value.length > 20) {
        passwordError.value = 'Пароль повинен містити від 3 до 20 символів';
        isValid = false;
    }
    if (password.value !== repeatPassword.value) {
        repeatPasswordError.value = 'Паролі не співпадають';
        isValid = false;
    }
    return isValid;
}
async function isExistUser(userEmail) {
    const isExistUserUrl = 'https://buy-sell-api.onrender.com/api/auth/is-exist/' + userEmail;
    try {
        const response = await fetch(isExistUserUrl);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data; // Ось тут змінено
    } catch (error) {
        console.error('Error:', error);
        return true;
    }
}



function clearErrors() {
    firstNameError.value = '';
    lastNameError.value = '';
    emailError.value = '';
    phoneError.value = '';
    passwordError.value = '';
    repeatPasswordError.value = '';
}
definePageMeta({
    layout: 'login'
})
</script>

<style scoped>
.input {
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    padding: 0.5rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.btn {
    background-color: #c222ac;
    color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    transition: background-color 0.15s ease-in-out;
}

.btn:hover {
    background-color: #6c1d6c;
}
</style>
