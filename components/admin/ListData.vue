<template>
    <div class="bg-gray-900 min-h-screen flex justify-center p-4">
        <div>
            <h2 class="text-2xl font-bold text-center text-white mb-4">{{ props.nameObjectText }}</h2>
            <div v-if="objects && objects.length > 0"
                class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                <div v-for="(object, index) in objects" :key="index"
                    class="bg-white rounded-lg shadow-lg p-6 text-center">
                    <p class="font-bold">{{ object.name }}</p>
                    <div class="mt-4">
                        <button @click.prevent="editObject(object)"
                            class="orange-button w-full mb-2">Редагувати</button>
                        <button @click.prevent="deleteObject(object)" class="red-button w-full">Видалити</button>
                    </div>
                </div>
            </div>
            <div v-else>
                <p class="big-center-text text-white">{{ props.nameObjectText }} не знайдено</p>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { fetchWithToken, setEditObjectInLocalStorage } from '/utils/auth.js';
import { useRouter } from 'vue-router';
const router = useRouter();

const props = defineProps({
    apiUrl: {
        type: String,
        required: true
    },
    apiUrlEdit: {
        type: String,
        required: true
    },
    pathToEdit: {
        type: String,
        required: true
    },
    apiUrlDelete: {
        type: String,
        required: true
    }
    ,
    nameObject: {
        type: String,
        required: true
    },
    nameObjectText: {
        type: String,
        required: true
    }
});
const objects = ref(null);

async function loadData() {
    try {
        const response = await fetchWithToken(props.apiUrl);
        console.log('Отримані дані:', response);
        if (response.ok) {
            const data = await response.json();
            console.log(props.nameObject, data)
            objects.value = data;
        }
        console.log('RESPONSE: ', objects.value)
    } catch (error) {
        console.error('Помилка завантаження даних:', error);
    }
}
const editObject = async (object) => {
    try {
        const apiUrlEditForBackend = props.apiUrlEdit + object.id
        const editObject = {
            id: object.id,
            name: object.name,
            apiUrlEdit: apiUrlEditForBackend
        }
        setEditObjectInLocalStorage(editObject);
        router.push(props.pathToEdit);
    } catch (error) {
        console.error('Помилка при зміні сторінки:', error);
    }
}
const deleteObject = async (object) => {
    try {
        const apiUrlDeleteWithId = props.apiUrlDelete + object.id;
        const deleteObject = {
            id: object.id
        }
        await fetchWithToken(apiUrlDeleteWithId, {
            method: 'DELETE',
            body: JSON.stringify(deleteObject)
        })
        loadData();
    } catch (error) {
        console.error('Помилка при зміні сторінки:', error);
    }
}

onMounted(() => {
    loadData();
});
</script>

<style scoped></style>
