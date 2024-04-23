<template>
    <div class="bg-gray-900 h-screen flex items-center justify-center">
        <div v-if="profile && profile.role === 'ADMIN'" class="max-w-xl mx-auto">
            <EditData :backUrl="backUrl" :object="object" :apiUrlEdit="apiUrlEdit" objectName="кагегорію" />
        </div>
        <div v-else class="text-white">
            <p>У вас немає прав</p>
        </div>
    </div>
</template>


<script setup>
import EditData from '/components/admin/EditData';
import { getEditObjectFromLocalStorage } from '/utils/auth.js';
const editObject = getEditObjectFromLocalStorage();
const object = {
    id: editObject.id,
    name: editObject.name
}
const apiUrlEdit = editObject.apiUrlEdit;
const backUrl = '/profile/admin/categories';
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
