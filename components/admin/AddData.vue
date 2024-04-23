<template>
    <div class="bg-white p-8 rounded-lg shadow-lg mx-4">
        <h2 class="text-center text-xl font-semibold mb-4">Додати {{ objectName }}</h2>
        <form class="space-y-4">
            <input type="text" v-model="dataName" placeholder="Введіть назву"
                class="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
            <button @click.prevent="addData" class="green-button block mx-auto">Додати {{ objectName }}</button>
            <nuxt-link :to="backUrl" class="block btn-admin">
                Назад
            </nuxt-link>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { fetchWithToken } from '/utils/auth.js';
import { useRouter } from 'vue-router';
const router = useRouter();
const props = defineProps({
    apiUrl: {
        type: String,
        required: true
    },
    objectName: {
        type: String,
        required: true
    },
    backUrl: {
        type: String,
        required: true
    }
});

console.log(props.apiUrl)

const dataName = ref('');

/*async function addData() {
    const requestData = {
        name: dataName.value // Припускаючи, що dataName.value містить необхідну структуру даних
    };
    console.log(JSON.stringify(requestData))
    fetchWithToken(props.apiUrl, {
        method: 'POST',
        body: JSON.stringify(requestData)
    });
    router.push(props.backUrl);
}*/
async function addData() {
    const requestData = {
        name: dataName.value // Припускаючи, що dataName.value містить необхідну структуру даних
    };

    try {
        await fetchWithToken(props.apiUrl, {
            method: 'POST',
            body: JSON.stringify(requestData)
        });
        router.push(props.backUrl);
    } catch (error) {
        console.error('Помилка при додаванні даних:', error);
    }
}


</script>

<style scoped></style>
