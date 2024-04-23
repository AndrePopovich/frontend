<template>
    <div class="bg-gray-300">
        <div class="bg-gray-300 rounded-lg shadow-lg p-8 mx-auto">
            <form @submit.prevent="searchAds" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <!-- Поле введення "Що шукаєте?" -->
                <div class="flex flex-col relative">
                    <input type="text" id="adName" placeholder="Що шукаєте?" v-model="adName" class="custom-input">
                    <!-- Підсвічування знизу -->
                    <div class="highlight-border"></div>
                </div>
                <!-- Поле введення "Виберіть категорію" -->
                <div class="flex flex-col relative">
                    <input list="categories" id="selectedCategory" placeholder="Виберіть категорію"
                        v-model="selectedCategory" class="custom-input">
                    <!-- Підсвічування знизу -->
                    <div class="highlight-border"></div>
                    <datalist id="categories">
                        <option v-for="category in categories" :key="category.id" :value="category.name">{{
                category.name }}</option>
                    </datalist>
                </div>
                <!-- Поле введення "Виберіть місто" -->
                <div class="flex flex-col relative">
                    <input list="cities" id="selectedCity" placeholder="Виберіть місто" v-model="selectedCity"
                        class="custom-input">
                    <!-- Підсвічування знизу -->
                    <div class="highlight-border"></div>
                    <datalist id="cities">
                        <option v-for="city in cities" :key="city.id" :value="city.name">{{ city.name }}</option>
                    </datalist>
                </div>
                <!-- Поле введення "Мінімальна ціна" -->
                <div class="flex flex-col relative">
                    <input type="number" placeholder="Мінімальна ціна" id="minPrice" v-model.number="minPrice" min="0"
                        max="1000000" class="custom-input">
                    <!-- Підсвічування знизу -->
                    <div class="highlight-border"></div>
                </div>
                <!-- Поле введення "Максимальна ціна" -->
                <div class="flex flex-col relative">
                    <input type="number" placeholder="Максимальна ціна" id="maxPrice" v-model.number="maxPrice" min="0"
                        max="1000000" class="custom-input">
                    <!-- Підсвічування знизу -->
                    <div class="highlight-border"></div>
                </div>
                <!-- Поле вибору "Сортувати за" -->
                <div class="flex flex-col relative">
                    <select id="sortBy" v-model="sortBy" class="custom-input">
                        <option value="default">За замовчуванням</option>
                        <option value="priceAsc">Ціна (зростанням)</option>
                        <option value="priceDesc">Ціна (спаданням)</option>
                        <option value="dateAsc">Дата (зростанням)</option>
                        <option value="dateDesc">Дата (спаданням)</option>
                    </select>
                    <!-- Підсвічування знизу -->
                    <div class="highlight-border"></div>
                </div>
                <!-- Кнопка "Знайти оголошення" -->
                <div class="col-span-full flex justify-center">
                    <button type="submit" class="btn-admin w-64">Знайти оголошення</button>
                </div>
            </form>
        </div>
    </div>
</template>


<script setup>
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';

const router = useRouter();
const adName = ref('');
const minPrice = ref(null);
const maxPrice = ref(null);
const sortBy = ref('default');
const categories = ref([]);
const cities = ref([]);
const selectedCategory = ref(null); // Зберігаємо лише ідентифікатор категорії
const selectedCity = ref(null); // Зберігаємо лише ідентифікатор міста

const searchAds = async () => {
    // Отримуємо значення змінних з компоненту
    const name = adName.value; // Отримуємо значення ім'я оголошення
    const category = selectedCategory.value;
    const city = selectedCity.value;
    const min = minPrice.value;
    const max = maxPrice.value;
    const sort = sortBy.value;

    // Встановлюємо значення в localStorage
    localStorage.setItem('adName', name);
    localStorage.setItem('categoryName', category);
    localStorage.setItem('cityName', city);
    localStorage.setItem('minPrice', min);
    localStorage.setItem('maxPrice', max);
    localStorage.setItem('sortBy', sort);

    if (router.currentRoute.value.path === '/search') {
        // Якщо ми вже на сторінці пошуку, оновлюємо параметри запиту
        router.replace({
            query: {
                adName: name, // Додаємо ім'я оголошення до об'єкта запиту
                categoryName: category,
                cityName: city,
                minPrice: min,
                maxPrice: max,
                sortBy: sort
            }
        });
    } else {
        // Якщо ми не на сторінці пошуку, переходимо на неї з новими параметрами
        router.push({
            path: '/search',
            query: {
                adName: name, // Додаємо ім'я оголошення до об'єкта запиту
                categoryName: category,
                cityName: city,
                minPrice: min,
                maxPrice: max,
                sortBy: sort
            }
        });
    }
}


async function loadData() {
    const categoriesResponse = await fetch('https://buy-sell-api.onrender.com/api/search/categories');
    const citiesResponse = await fetch('https://buy-sell-api.onrender.com/api/search/cities');

    categories.value = await categoriesResponse.json();
    cities.value = await citiesResponse.json();
}
onMounted(() => {
    loadData();

    // Перевірка значень у localStorage перед їхнім використанням
    /*const categoryName = localStorage.getItem('categoryName');
    selectedCategory.value = categoryName !== null ? categoryName : '';

    const cityName = localStorage.getItem('cityName');
    selectedCity.value = cityName !== null ? cityName : '';

    const storedMinPrice = localStorage.getItem('minPrice');
    minPrice.value = storedMinPrice !== null ? parseFloat(storedMinPrice) : null;

    const storedMaxPrice = localStorage.getItem('maxPrice');
    maxPrice.value = storedMaxPrice !== null ? parseFloat(storedMaxPrice) : null;

           const storedSortBy = localStorage.getItem('sortBy');
           sortBy.value = storedSortBy !== null ? storedSortBy : 'default';*/
});

</script>

<style scoped>
.custom-input {
    padding: 5px;
    border-radius: 5px;
    border: 1px solid transparent;
    transition: border-color 0.3s ease-in-out;
    /* Плавний перехід для бордера */
    position: relative;
}

.custom-input:focus {
    border-color: transparent;
    /* Транспарентний бордер при фокусі */
    outline: none;
    /* Видалення контурів */
}

.highlight-border {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #8a2be2;
    /* Фіолетовий колір підсвічування */
    transition: height 0.3s ease-in-out;
    /* Плавний перехід для висоти */
    pointer-events: none;
    /* Вимкнення можливості взаємодії з елементом */
}

.custom-input:focus+.highlight-border {
    height: 4px;
    /* Збільшення висоти при фокусі */
}
</style>
