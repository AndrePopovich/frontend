<template>
    <div class="bg-white p-8 rounded-lg shadow-lg mx-4">
        <div v-if="object">
            <h2 class="text-center text-xl font-semibold mb-4">Редагувати {{ objectName }}</h2>
            <input type="text" v-model="nameObject" placeholder="Введіть назву"
                class="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
            <button @click.prevent="editData" class="green-button block mx-auto mt-4">Змінити назву {{ objectName
                }}</button>
            <nuxt-link :to="backUrl" class="block btn-admin mt-4">
                Назад
            </nuxt-link>
        </div>
        <div v-else>
            <p>Помилка!!!</p>
            <nuxt-link :to="backUrl" class="btn-admin mt-4">Повернутись назад</nuxt-link>
        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue';
import { fetchWithToken } from '/utils/auth.js';
import { useRouter } from 'vue-router';
const router = useRouter();
const props = defineProps({
    object: {
        type: Object,
        required: true
    },
    apiUrlEdit: {
        type: String,
        required: true
    },
    backUrl: {
        type: String,
        required: true
    },
    objectName: {
        type: String,
        required: true
    }
})
const nameObject = ref(props.object.name)

const editData = async (object) => {
    const requestData = {
        id: props.object.id,
        name: nameObject.value,
    }
    console.log('REQUEST: ', JSON.stringify(requestData))
    fetchWithToken(props.apiUrlEdit, {
        method: 'PUT',
        body: JSON.stringify(requestData)
    });
    await localStorage.removeItem('editObject');
    router.push(props.backUrl);
}
</script>

<style scoped></style>
