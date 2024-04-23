<template>
    <div class="bg-gray-200 min-h-screen p-8">
        <div v-if="profile" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col sm:flex-row justify-between items-center mb-4">
                <h1 class="big-center-text lg:mb-0 lg:mr-4">Мої оголошення</h1>
                <nuxt-link to="/profile/user/ads/add" class="green-button">Додати оголошення</nuxt-link>
            </div>



            <div v-if="profile.ads.length > 0"
                class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div v-for="ad in profile.ads" :key="ad.id"
                    class="bg-white rounded-lg shadow-md overflow-hidden min-w-0 min-h-0">
                    <div class="aspect-w-1 aspect-h-1">
                        <div v-if="ad.previewImageId">
                            <img class="thumb" v-if="loadedImages[ad.previewImageId]"
                                :src="loadedImages[ad.previewImageId]" alt="Image">
                        </div>
                    </div>
                    <div class="p-4">
                        <h3 class="text-lg font-semibold truncate mb-2">{{ ad.name }}</h3>
                        <div class="flex items-center">
                            <img src="/img/card/location.png" alt="Місто" class="mr-2 inline-block h-4 w-4">
                            <p>{{ ad.city.name }}</p>
                        </div>
                        <div class="flex items-center">
                            <img src="/img/card/category.png" alt="Категорія" class="mr-2 inline-block h-4 w-4">
                            <p>{{ ad.category.name }}</p>
                        </div>
                        <hr class="my-4 border-t border-gray-300">
                        <p class="font-bold text-xl my-4">{{ ad.price }} грн</p>
                        <div class="mt-4">
                            <button @click.prevent="editAd(ad.id)" class="orange-button w-full mb-2">Редагувати</button>
                            <button @click.prevent="deleteAd(ad.id)" class="red-button w-full">Видалити</button>
                        </div>
                    </div>
                </div>
            </div>

            <div v-else>
                <p>У Вас все ще немає оголошень, додайте їх.</p>
            </div>
        </div>
        <div v-else class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center h-full">
            <p class="text-lg mb-4">Ви не ввійшли в профіль</p>
            <nuxt-link to="/auth/" class="btn-admin">Ввійти</nuxt-link>
        </div>
    </div>
</template>



<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue';
import { onMounted } from 'vue';
import { getProfileFromLocalStorage, isAuthenticated, saveProfile, fetchWithToken, setEditObjectInLocalStorage, getEditObjectFromLocalStorage } from '/utils/auth.js';

const profile = ref(null);
const router = useRouter();
const referalImg = 'https://buy-sell-api.onrender.com/api/user/image/';
const loadedImages = ref({});

const editAd = async (idAd) => {
    const object = {
        id: idAd
    }
    setEditObjectInLocalStorage(object);
    console.log(getEditObjectFromLocalStorage().id)
    router.push('/profile/user/ads/edit');
}
const deleteAd = async (idAd) => {
    const deleteObject = {
        id: idAd
    }
    const deleteURL = 'https://buy-sell-api.onrender.com/api/user/ads/' + idAd;
    const response = await fetchWithToken(deleteURL, {
        method: 'DELETE',
        body: JSON.stringify(deleteObject)
    })
    if (response.ok) {
        console.log("Успішно видалено!!!")

        await saveProfile();
        await loadData();
        router.push('/profile/user/ads');
    }
}

const loadImage = async (imageId) => {
    try {

        const url = referalImg + imageId;
        const response = await fetchWithToken(url);
        if (!response.ok) {
            throw new Error('Failed to load image');
        }
        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);
        loadedImages.value[imageId] = imageUrl;
    } catch (error) {
        console.error('Error loading image:', error);
    }
}
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
    saveProfile();
    loadData();
    for (const ad of profile.value.ads) {
        loadImage(ad.previewImageId);
    }
});
</script>

<style scoped>
.thumb {
    width: 100%;
    height: 200px;
    /* або будь-яка фіксована висота */
    margin: 0 auto;
    overflow: hidden;
    /* Додаємо обрізання контенту */
}
</style>
