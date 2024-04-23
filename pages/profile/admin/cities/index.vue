<template>
    <div>
        <div v-if="profile && profile.role === 'ADMIN'" class="pt-4">
            <nuxt-link class="green-button w-40 mx-auto block" to="/profile/admin/cities/add">Додати
                місто</nuxt-link>
            <ListData :apiUrl="apiUrl" :apiUrlEdit="apiUrlEdit" :pathToEdit="pathToEdit" :apiUrlDelete="apiUrlDelete"
                nameObject="Міст" nameObjectText="Міста" />
        </div>
        <div v-else>
            <p>У вас немає прав</p>
        </div>

    </div>
</template>

<script setup>
import ListData from '/components/admin/ListData';
const apiUrl = 'https://buy-sell-api.onrender.com/api/admin/cities';
const apiUrlEdit = 'https://buy-sell-api.onrender.com/api/admin/cities/';
const pathToEdit = '/profile/admin/cities/edit';
const apiUrlDelete = 'https://buy-sell-api.onrender.com/api/admin/cities/';

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
