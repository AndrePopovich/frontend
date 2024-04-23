<template>
    <div class="bg-gray-900 h-screen flex items-center justify-center">
        <div class="bg-white p-8 rounded-lg shadow-lg mx-auto">
            <h1 class="text-3xl text-center font-bold mb-4">Мій профіль</h1>
            <div v-if="profile" class="text-center">
                <p class="font-semibold">ID: {{ profile.id }}</p>
                <p class="font-semibold">Ім'я: {{ profile.firstname }}</p>
                <p class="font-semibold">Фамілія: {{ profile.lastname }}</p>
                <p class="font-semibold">Email: {{ profile.email }}</p>
                <p class="font-semibold">Номер телефону: {{ profile.phone }}</p>
                <p class="font-semibold">Дата реєстрації: {{ profile.dateOfRegistration }}</p>
                <div
                    class="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between pt-2">
                    <nuxt-link to="/" class="btn-admin mt-4 md:mt-0 md:mr-4">Головна сторінка</nuxt-link>
                    <button @click.prevent="logout" class="red-button mt-2 md:mt-0">Вийти з акаунту</button>
                </div>
            </div>
            <div v-else class="text-center mt-8">
                <p class="text-xl font-semibold mb-4">Ви не ввійшли в профіль</p>
                <nuxt-link to="/auth/" class="btn-admin">Ввійти</nuxt-link>
            </div>
        </div>
    </div>
</template>




<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue';
import { getProfileFromLocalStorage, isAuthenticated } from '/utils/auth.js';
import { onMounted } from 'vue';

const profile = ref(null);
const router = useRouter();

async function loadData() {
    const fetchedProfile = getProfileFromLocalStorage();
    if (fetchedProfile) {
        profile.value = fetchedProfile;
    }
}

async function logout() {
    try {
        await router.push('/auth/');
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('profile');
    } catch (error) {
        console.error('Помилка при виході:', error);
    }
}

onMounted(() => {
    if (!isAuthenticated()) {
        router.push('/auth/');
    }
    loadData();
});
</script>

<style scoped></style>
