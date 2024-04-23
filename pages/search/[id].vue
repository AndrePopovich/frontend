<template>
    <div class="bg-gray-400 min-h-screen">
        <div class="w-full bg-white">
            <div class="container mx-auto p-4 pt-6">
                <button @click="goBack" class="btn-admin">Повернутись назад</button>
            </div>
        </div>

        <div class="bg-gray-200 container mx-auto p-4 py-8">
            <div v-if="ad">
                <hr class="my-4 border-t border-gray-400">
                <div class="mt-4 flex flex-col lg:flex-row lg:justify-between items-center">
                    <!-- Фотографія зліва -->
                    <div class="flex-shrink-0 mb-4 lg:mb-0 mx-auto">
                        <img :src="imageUrls[currentIndex]" :alt="`Image ${currentIndex + 1}`" class="thumb ">
                        <div class="flex justify-center mt-4">
                            <button @click="prevImage" :disabled="currentIndex === 0"
                                :class="{ 'opacity-50': currentIndex === 0 }"
                                class="mr-2 p-2 bg-gray-100 rounded dark:bg-gray-800 dark:text-gray-400 w-16"><b>&lt;</b></button>
                            <button @click="nextImage" :disabled="currentIndex === imageUrls.length - 1"
                                :class="{ 'opacity-50': currentIndex === imageUrls.length - 1 }"
                                class="p-2 bg-gray-100 rounded dark:bg-gray-800 dark:text-gray-400 w-16"><b>&gt;</b></button>
                        </div>
                    </div>
                    <!-- Інформаційна панель справа -->
                    <div class="text-lg w-full lg:w-2/5 lg:mx-10 bg-white rounded-lg shadow-md p-8">
                        <p class="font-bold text-2xl" style="word-wrap: break-word;">{{ ad.name }}</p>
                        <p class="text-gray-700 font-bold text-2xl mt-2" style="word-wrap: break-word;">{{ ad.price }}
                            грн</p>
                        <hr class="my-4 border-t border-gray-300">
                        <div class="flex items-center mt-4">
                            <img src="/img/card/location.png" alt="Location" class="w-4 h-4 mr-1">
                            <p class="text-gray-700">{{ ad.city.name }}</p>
                        </div>
                        <div class="flex items-center mt-1">
                            <img src="/img/card/category.png" alt="Category" class="w-4 h-4 mr-1">
                            <p class="text-gray-700">{{ ad.category.name }}</p>
                        </div>
                        <p class="text-purple-900 mt-2">Автор: {{ ad.user.firstName }} {{ ad.user.lastName }}</p>

                        <div class="text-center mt-8">
                            <button @click="showPhoneNumber" class="btn-admin rounded mt-2 w-full lg:block">{{
                    numberPhone }}</button>
                            <hr class="my-4 border-t border-gray-300">
                            <p class="text-sm text-gray-500 mt-4">Дата створення: {{ date }}</p>
                        </div>



                    </div>



                </div>
                <hr class="my-4 border-t border-gray-400">
                <div class="bg-white rounded-lg shadow-md p-4 pt-8 block-size">
                    <p class="font-bold text-xl text-center">Опис</p>
                    <hr class="my-4 border-t border-gray-400">
                    <p style="word-wrap: break-word;">{{ ad.description }}</p>
                </div>



            </div>
            <div v-else>
                <p>Завантаження даних...</p>
            </div>
        </div>
    </div>
</template>





<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const { id } = useRoute().params;
const ad = ref(null);
const date = ref('');
const imageUrls = ref([]);
const currentIndex = ref(0);
const showPhone = ref(false);
const numberPhone = ref('Показати номер');

async function loadData() {
    const getAdByIdURL = 'https://buy-sell-api.onrender.com/api/search/ad/' + id;
    try {
        const response = await fetch(getAdByIdURL);
        if (response.ok) {
            const data = await response.json();
            ad.value = data;
            date.value = await dataFormater(ad.value.dateOfCreated);;
            await getPhotos(id, 'https://buy-sell-api.onrender.com/api/search/ads-images/');
        } else {
            console.error('Помилка при отриманні даних');
        }
    } catch (error) {
        console.error('Помилка при виконанні запиту:', error);
    }
}

async function getPhotos(idAd, referalURL) {
    try {
        referalURL = referalURL + idAd;
        const response = await fetch(referalURL);
        const images = await response.json();
        for (const image of images) {
            const imageUrl = 'https://buy-sell-api.onrender.com/api/search/image/' + image.id;
            const responseImage = await fetch(imageUrl);
            const blob = await responseImage.blob();
            const imageUrlObject = URL.createObjectURL(blob);
            imageUrls.value.push(imageUrlObject);
        }
    } catch (error) {
        console.error('Error fetching photo:', error);
    }
}
async function dataFormater() {
    // Вхідна дата
    const dateString = '2024-04-18T17:18:06.704567';

    // Створення об'єкта Date з рядка
    const dateObject = new Date(dateString);

    // Форматування дати за допомогою методів Date
    const formattedDate = `${dateObject.getDate()}.${dateObject.getMonth() + 1}.${dateObject.getFullYear()}`;

    // Форматування часу за допомогою методів Date
    const formattedTime = `${dateObject.getHours()}:${dateObject.getMinutes()}`;

    // Кінцеве форматоване значення
    const formattedDateTime = `${formattedDate} ${formattedTime}`;

    return formattedDateTime; // Виведе: Дата створення: 18.4.2024 17:18
}
// Функція для перегортування фото
function nextImage() {
    currentIndex.value = (currentIndex.value + 1);
}

function prevImage() {
    currentIndex.value = (currentIndex.value - 1);
}

// Функція для показу номера телефону
function showPhoneNumber() {
    showPhone.value = true;
    numberPhone.value = '+38' + ad.value.user.phone;
}
function goBack() {
    window.history.back();
}
onMounted(() => {
    loadData();
});
</script>

<style scoped>
.thumb {
    max-width: 500px;
    max-height: 400px;
}

.block-size {
    min-height: 150px;
}
</style>
