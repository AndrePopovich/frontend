<template>
    <div class="bg-gray-900 h-screen flex items-center justify-center">
        <div class="bg-white p-8 rounded-lg shadow-lg mx-4">
            <div v-if="profile && profile.role === 'ADMIN'">
                <h1 class="text-3xl font-bold mb-4">Це сторінка адміністратора</h1>
                <p class="mb-4">Вітаємо вас, шановний адміністратор - {{ profile.firstname }}</p>
                <div class="space-y-4">
                    <nuxt-link to="/profile/admin/cities" class="block btn-admin">
                        Редагувати міста
                    </nuxt-link>
                    <nuxt-link to="/profile/admin/categories" class="block btn-admin">
                        Редагувати категорії
                    </nuxt-link>
                    <nuxt-link to="/profile/admin/users" class="block btn-admin">
                        Переглянути користувачів
                    </nuxt-link>
                </div>
            </div>
            <div v-else>
                <h1 class="text-3xl font-bold">В вас немає прав</h1>
            </div>
        </div>
    </div>
</template>

<script setup>
import { getProfileFromLocalStorage, isAuthenticated } from '/utils/auth.js';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter();
const profile = ref(null);

async function loadData() {
    const fetchedProfile = getProfileFromLocalStorage();
    if (fetchedProfile) {
        profile.value = fetchedProfile;
    }
}

onMounted(() => {
    if (!isAuthenticated()) {
        router.push('/auth/');
    }
    loadData();
});
definePageMeta({
    layout: 'admin'
})
</script>

<style scoped></style>
