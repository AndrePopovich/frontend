<template>
    <div
        class="bg-gradient-to-b from-purple-900 to-purple-300 min-h-screen flex flex-col justify-center items-center px-4">
        <h1 class="text-4xl font-bold text-white mb-8">Вітаємо Вас в BuySell</h1>
        <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <form @submit.prevent="handleLogin" class="space-y-4">
                <div class="flex flex-col space-y-4">
                    <div class="flex flex-col">
                        <input type="text" v-model="email" autocomplete="email" required
                            placeholder="Введіть електронну пошту" class="input">
                        <span v-if="emailError" class="text-red-500 text-xs">{{ emailError }}</span>
                    </div>
                    <div class="flex flex-col">
                        <input type="password" v-model="password" required placeholder="Введіть пароль" class="input">
                        <span v-if="passwordError" class="text-red-500 text-xs">{{ passwordError }}</span>
                    </div>
                </div>
                <button type="submit"
                    class="btn bg-purple-800 text-white hover:bg-purple-900 w-full mt-4">Увійти</button>
            </form>
            <nuxt-link to="/auth/registration/" class="text-center block mt-4 text-blue-600">В мене немає
                акаунту</nuxt-link>
        </div>


    </div>
</template>

<script setup>
import { ref } from 'vue';
import { setTokenInLocalStorage, setProfileInLocalStorage } from '/utils/auth.js';
import { useRouter } from 'vue-router';

const referal = 'https://buy-sell-api.onrender.com/api/auth/authenticate';
const email = ref('');
const password = ref('');
const router = useRouter();
const emailError = ref('');
const passwordError = ref('');

const handleLogin = async () => {
    clearErrors();
    const isValid = validateForm();
    if (isValid) {
        try {
            const formBody = {
                email: email.value,
                password: password.value,
            };

            const response = await fetch(referal, {
                credentials: 'include',
                method: 'POST',
                body: JSON.stringify(formBody),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const { token } = await response.json();
                setTokenInLocalStorage(token);
                console.log('Успішно отримано та збережено JWT токен:', token);

                saveProfile();
                router.push('/');

            } else {
                emailError.value = "Невірні дані!";
                passwordError.value = "Невірні дані!";
                console.error('Помилка при отриманні токена:', response.statusText);
            }
        } catch (error) {
            emailError.value = "Невірні дані!";
            passwordError.value = "Невірні дані!";
            console.error('Помилка при реєстрації або авторизації користувача:', error);
        }
    }
};

async function saveProfile() {
    const response = await fetchWithToken('https://buy-sell-api.onrender.com/api/user/profile');
    if (response.ok) {
        const profile = await response.json();
        setProfileInLocalStorage(profile);
        console.log('Успішно збережено профіль:', profile);
    } else {
        console.error('Помилка при збережені акаунта:', response.statusText);
    }
}

async function validateForm() {
    let isValid = true;
    if (!email.value.includes('@')) {
        emailError.value = 'Введіть коректну електронну адресу';
        isValid = false;
    }
    if (password.value.length < 4) {
        passwordError.value = 'Пароль повинен містити принаймні 4 символів';
        isValid = false;
    }
    return isValid;
}

function clearErrors() {
    emailError.value = '';
    passwordError.value = '';
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
