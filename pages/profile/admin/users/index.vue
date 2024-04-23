<template>
    <div class="bg-gray-900 h-screen p-5">
        <h1 class="big-center-text white">Користувачі</h1>
        <div v-if="users" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="user in users" :key="user.id" class="bg-white rounded-lg shadow-lg p-6">
                <div>
                    <p class="font-semibold text-center">ID: {{ user.id }}</p>
                    <p class="font-semibold">Ім'я: {{ user.firstName }}</p>
                    <p class="font-semibold">Прізвище: {{ user.lastName }}</p>
                    <p class="font-semibold">Електрона пошта: {{ user.email }}</p>
                    <p class="font-semibold">Номер телефону: {{ user.phone }}</p>
                    <p class="font-semibold">Дата реєстрації: {{ user.dateOfRegistration }}</p>
                </div>
                <div v-if="user.id !== myId" class="mt-4">
                    <button @click.prevent="deleteUser(user.id)" class="red-button">Видалити</button>
                </div>
                <div v-else class="mt-4">
                    <p class="font-semibold">Це адмін</p>
                </div>
            </div>

        </div>
        <div v-else>
            <p>Ви не ввійшли в акаунт</p>
            <nuxt-link to="/auth/">Ввійти</nuxt-link>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'; // Імпортуємо ref для створення реактивної змінної
import { fetchWithToken, getMyId } from '/utils/auth.js';

// Створюємо реактивну змінну для даних користувача
const users = ref([]);
const myId = ref(null);
const deleteUser = async (id) => {
    try {
        const apiUrlDeleteWithId = 'https://buy-sell-api.onrender.com/api/admin/users/' + id;
        await fetchWithToken(apiUrlDeleteWithId, {
            method: 'DELETE'
        })
        console.log("Видалено!!!")
        await loadData();
    } catch (error) {
        console.error('Помилка при зміні сторінки:', error);
    }
}
// Функція для отримання даних користувача та оновлення userData
async function loadData() {
    try {
        myId.value = getMyId();
        const response = await fetchWithToken('https://buy-sell-api.onrender.com/api/admin/users');
        console.log('Отримані дані:', response);
        if (response.ok) {
            const data = await response.json(); // Отримуємо дані у форматі JSON
            console.log('Дані користувача:', data);
            console.log('My Id:', myId.value);
            users.value = data; // Оновлюємо значення userData
        } else {
            console.error('Помилка при отриманні даних:', response.statusText);
        }
    } catch (error) {
        console.error('Помилка при отриманні даних:', error);
    }
}

onMounted(() => {
    loadData();
})
definePageMeta({
    layout: 'admin'
})
</script>

<style scoped>
.white {
    color: white;
}
</style>
