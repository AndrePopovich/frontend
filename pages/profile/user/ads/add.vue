<template>
    <div class="bg-gradient-to-b from-gray-200 to-gray-100 min-h-screen py-8 px-4">
        <form @submit.prevent="submitForm" enctype="multipart/form-data" method="post"
            class="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
            <div class="mb-4">
                <p class="big-center-text">Створіть оголошення</p>
            </div>
            <div class="mb-4">
                <input type="text" placeholder="Введіть назву" v-model="name" class="input-field" minlength="10"
                    maxlength="100">
                <span v-if="nameError" class="text-red-500 text-xs">{{ nameError }}</span>
            </div>
            <div class="mb-4">
                <textarea placeholder="Опишіть оголошення" v-model="description" class="input-field-textarea"
                    minlength="10" maxlength="300"></textarea>
                <span v-if="descriptionError" class="text-red-500 text-xs">{{ descriptionError }}</span>
            </div>

            <div class="mb-4">
                <input list="categories" v-model="selectedCategory" placeholder="Виберіть категорію"
                    class="input-field">
                <datalist id="categories">
                    <option v-for="category in categories" :key="category.id" :value="category.name">{{ category.name }}
                    </option>
                </datalist>
                <span v-if="selectedCategoryError" class="text-red-500 text-xs">{{ selectedCategoryError }}</span>
            </div>
            <div class="mb-4">
                <input list="cities" v-model="selectedCity" placeholder="Виберіть місто" class="input-field">
                <datalist id="cities">
                    <option v-for="city in cities" :key="city.id" :value="city.name">{{ city.name }}</option>
                </datalist>
                <span v-if="selectedCityError" class="text-red-500 text-xs">{{ selectedCityError }}</span>
            </div>
            <div class="mb-4">
                <input type="number" placeholder="Введіть ціну" v-model.number="price" min="0" class="input-field">
                <span v-if="priceError" class="text-red-500 text-xs">{{ priceError }}</span>
            </div>

            <span v-if="imagesError" class="text-red-500 text-xs text-center">{{ imagesError }}</span>
            <div class="mb-8">
                <input type="file" @change="handleFileUpload($event, 0)" accept="image/png, image/jpeg"
                    class="input-field">
                <img v-if="files[0] && filePreviews[0]" :src="filePreviews[0]" class="image rounded-center"
                    alt="Додайте фото 1">
            </div>
            <div class="mb-8">
                <input type="file" @change="handleFileUpload($event, 1)" accept="image/png, image/jpeg"
                    class="input-field">
                <img v-if="files[1] && filePreviews[1]" :src="filePreviews[1]" class="image rounded-center"
                    alt="Додайте фото 2">
            </div>
            <div class="mb-8">
                <input type="file" @change="handleFileUpload($event, 2)" accept="image/png, image/jpeg"
                    class="input-field">
                <img v-if="files[2] && filePreviews[2]" :src="filePreviews[2]" class="image rounded-center"
                    alt="Додайте фото 3">
            </div>
            <div class="mb-8">
                <input type="file" @change="handleFileUpload($event, 3)" accept="image/png, image/jpeg"
                    class="input-field">
                <img v-if="files[3] && filePreviews[3]" :src="filePreviews[3]" class="image rounded-center"
                    alt="Додайте фото 4">
            </div>
            <div class="flex justify-between items-center mb-8">
                <nuxt-link to="/profile/user/ads" class="red-button">Назад</nuxt-link>
                <button type="submit" class="btn-admin">Подати оголошення</button>
            </div>

        </form>
    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import { fetchWithToken, isAuthenticated, getProfileFromLocalStorage, getTokenFromLocalStorage, saveProfile } from '/utils/auth.js';
import { useRouter } from 'vue-router'

// Остаточний URL для запитів
const referal = 'https://buy-sell-api.onrender.com/api/user/ads';
const router = useRouter();
// Змінні для зберігання даних форми
const name = ref("");
const description = ref("");
const user = ref(null);
const selectedCategory = ref(null); // Зберігаємо лише ідентифікатор категорії
const selectedCity = ref(null); // Зберігаємо лише ідентифікатор міста
const price = ref(0);
const views = ref(0);
const files = ref([]);
const categories = ref([]);
const cities = ref([]);
const token = ref(null);

//Errors
const nameError = ref('');
const descriptionError = ref('');
const selectedCategoryError = ref(null);
const selectedCityError = ref(null);
const priceError = ref(0);
const imagesError = ref('');

const filePreviews = ref([])
const handleFileUpload = (event, id) => {
    const filesEvent = event.target.files; // Отримати список файлів з об'єкта event
    if (filesEvent && filesEvent.length > 0) { // Перевірити, чи містить files файли
        const file = filesEvent[0];
        if (file.type === 'image/png' || file.type === 'image/jpeg') {
            const blob = new Blob([file], { type: file.type });
            filePreviews.value[id] = URL.createObjectURL(blob);
            files.value[id] = file;
            imagesError.value = '';
        } else {
            imagesError.value = 'Неприпустимий тип файлу!';
            // Очистити значення у списку файлів та прев'ю
            filePreviews.value[id] = null;
            files.value[id] = null;
            // Очистити поле вибору файлу
            event.target.value = null;
        }
    }
    files.value.forEach(file => {
        console.log(file);
    });
}


// Функція для завантаження даних
async function loadData() {
    token.value = await getTokenFromLocalStorage();
    user.value = getProfileFromLocalStorage();

    const categoriesResponse = await fetchWithToken('https://buy-sell-api.onrender.com/api/user/ads/categories');
    const citiesResponse = await fetchWithToken('https://buy-sell-api.onrender.com/api/user/ads/cities');

    categories.value = await categoriesResponse.json();
    cities.value = await citiesResponse.json();
}

const findCityIdByName = (cityName) => {
    const city = cities.value.find(city => city.name === cityName);
    return city ? city.id : null;
}
const findCategoryIdByName = (categoryName) => {
    const category = categories.value.find(category => category.name === categoryName);
    return category ? category.id : null;
}

const submitForm = async () => {
    await clearErrors();
    const isValid = await validateForm();
    if (isValid) {
        const formData = new FormData();
        formData.append('name', name.value);
        formData.append('description', description.value);
        formData.append('user', user.value.id);
        formData.append('category', findCategoryIdByName(selectedCategory.value));
        formData.append('city', findCityIdByName(selectedCity.value));
        formData.append('price', price.value);
        formData.append('views', views.value);
        files.value.forEach((file, index) => {
            formData.append(`file${index + 1}`, file);
        });

        const hasName = formData.has('name');
        console.log('Дані з іменем "name" існують:', hasName); // Виведе: true
        // Додаємо файл до formData
        //formData.append('file', file.value);

        try {
            const response = await fetch(referal, {
                method: 'POST',
                body: formData,
                headers: {
                    Authorization: `Bearer ${token.value}`
                }
            });
            if (response.ok) {
                console.log('Ad added successfully');
                await saveProfile();
                router.push('/profile/user/ads');
            } else {
                console.error('Failed to add ad');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

}
async function validateForm() {
    if (name.value.length < 10 || name.value.length > 100) {
        nameError.value = "Ім'я повинно містити від 10 до 100 символів!";
        return false;
    }
    if (description.value.length < 10 || description.value.length > 500) {
        descriptionError.value = "Опис повинен містити від 10 до 500 символів!";
        return false;
    }
    if (selectedCategory.value === null) {
        selectedCategoryError.value = "Виберіть категорію!";
        return false;
    }
    const isExistCategory = await isExistName(selectedCategory.value.trim(), categories.value);
    if (!isExistCategory) {
        selectedCategoryError.value = "Такої категорії немає!";
        return false;
    }

    if (selectedCity.value === null) {
        selectedCityError.value = "Виберіть місто!";
        return false;
    }
    const isExistCity = await isExistName(selectedCity.value.trim(), cities.value);
    if (!isExistCity) {
        selectedCityError.value = "Такого міста немає!";
        return false;
    }

    const priceValue = parseFloat(price.value);
    if (isNaN(priceValue) || priceValue < 1 || priceValue > 1000000) {
        priceError.value = "Ціна повинна бути числом від 1 до 1000000!";
        return false;
    }

    if (!files.value.some(file => file !== null)) {
        imagesError.value = "Додайте хочаб одне фото!";
        return false;
    }


    return true;
}

async function clearErrors() {
    nameError.value = '';
    descriptionError.value = '';
    selectedCategoryError.value = '';
    selectedCityError.value = '';
    priceError.value = '';
    imagesError.value = '';
}
async function isExistName(name, array) {
    for (const object of array) {
        if (typeof object.name === 'string' && object.name === name) {
            return true;
        }
    }
    return false;
}



// Завантажуємо дані при монтуванні компонента
onMounted(() => {
    if (!isAuthenticated()) {
        router.push('/auth/');
    }
    loadData();
});
</script>

<style scoped></style>
