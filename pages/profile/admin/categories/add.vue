<template>
    <div class="bg-gray-900 h-screen flex items-center justify-center">
        <div v-if="profile && profile.role === 'ADMIN'" class="max-w-xl mx-auto">
            <AppData :apiUrl="apiUrl" objectName="категорію" :backUrl="backUrl" />
        </div>
        <div v-else>
            <p>У вас немає прав</p>
        </div>
    </div>
</template>

<script setup>
import AppData from '/components/admin/AddData';
const apiUrl = 'https://buy-sell-api.onrender.com/api/admin/categories';
const backUrl = '/profile/admin/categories';

import { getProfileFromLocalStorage } from '/utils/auth.js';
import { onMounted } from 'vue';

const profile = ref(null);

async function loadData() {
    const fetchedProfile = getProfileFromLocalStorage();
    if (fetchedProfile) {
        profile.value = fetchedProfile;
    }
}

onMounted(() => {
    loadData();
});
definePageMeta({
    layout: 'admin'
})
</script>

<style scoped></style>
