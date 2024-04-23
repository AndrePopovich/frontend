<template>
    <div class="bg-gray-200 min-h-screen p-8">
        <SearchData />
        <div v-if="ads.length > 0" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="big-center-text mb-4">Результати пошуку:</h2>
            <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <li v-for="ad in ads" :key="ad.id"
                    class="bg-white rounded-lg shadow-md overflow-hidden min-w-0 min-h-0">
                    <NuxtLink :to="`/search/${ad.id}`" class="block">
                        <div class="aspect-w-1 aspect-h-1">
                            <img v-if="loadedImages[ad.id]" :src="loadedImages[ad.id]" class="thumb" alt="Image">
                            <div v-else class="bg-gray-300 flex items-center justify-center text-gray-600">Завантаження
                                зображення...</div>
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
                        </div>


                    </NuxtLink>
                </li>
            </ul>
        </div>
        <p v-else class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-4xl font-bold my-4">Немає результатів
            пошуку</p>


    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

import SearchData from '/components/search/SearchData';
const route = useRoute();
const ads = ref([]);
const loadedImages = ref({});

async function loadData() {
    const getAdsURL = 'https://buy-sell-api.onrender.com/api/search';
    const adName = route.query.adName || '';
    const categoryName = route.query.categoryName || '';
    const cityName = route.query.cityName || '';
    const minPrice = route.query.minPrice || '';
    const maxPrice = route.query.maxPrice || '';
    const sortBy = route.query.sortBy || 'default';

    // Побудова URL-адреси з параметрами запиту
    const url = new URL(getAdsURL);
    url.searchParams.append('adName', adName);
    url.searchParams.append('categoryName', categoryName);
    url.searchParams.append('cityName', cityName);
    url.searchParams.append('minPrice', minPrice);
    url.searchParams.append('maxPrice', maxPrice);
    url.searchParams.append('sortBy', sortBy);

    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            ads.value = data;
            // Після завантаження даних викликаємо loadImage для кожного оголошення
            for (const ad of ads.value) {
                loadImage(ad.id);
            }
        } else {
            console.error('Помилка при отриманні даних');
        }
    } catch (error) {
        console.error('Помилка при виконанні запиту:', error);
    }
}

// Функція завантаження зображення для конкретного оголошення
async function loadImage(idAd) {
    try {
        const referalImg = 'https://buy-sell-api.onrender.com/api/search/preview/';
        const url = referalImg + idAd;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to load image');
        }
        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);
        loadedImages.value[idAd] = imageUrl;
    } catch (error) {
        console.error('Error loading image:', error);
    }
}

// Викликаємо loadData при старті компонента та при зміні параметрів запиту
onMounted(() => {
    loadData();
    for (const ad of ads.value) {
        loadImage(ad.id);
    }
});
watch(
    () => route.query,
    () => {
        loadData();
    }
);

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
