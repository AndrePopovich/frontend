<template>
    <div>
        <nav
            class="purple flex items-center justify-between p-4 fixed w-maxpurple flex items-center justify-between p-4 fixed w-full top-0 z-50">
            <div>
                <nuxt-link to="/" class="text-white text-2xl font-bold">BuySell</nuxt-link>
            </div>
            <ul>
                <li>
                    <div v-if="loading">
                        Завантаження...
                    </div>
                    <div v-else>
                        <div v-if="authenticate" class="flex gap-8">
                            <nuxt-link class="white-button" to="/profile/user/ads">Мої оголошення</nuxt-link>
                            <nuxt-link to="/profile/user/">
                                <img src="/img/navbar/profile-image.png" alt="Мій профіль" title="Мій профіль"
                                    class="h-9 w-9">
                            </nuxt-link>
                        </div>

                        <div v-else class="flex gap-8">
                            <nuxt-link to="/auth/" class="block black-button">Ввійти</nuxt-link>
                            <nuxt-link class="block white-button" to="/auth/registration">Реєстрація</nuxt-link>
                        </div>

                    </div>
                </li>
            </ul>
        </nav>

        <div class="mt-16"> <!-- Додайте зсув, щоб уникнути перекривання контенту -->
            <slot />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const loading = ref(true);
const authenticate = ref(false); // Ваша логіка для перевірки аутентифікації


async function loadData() {
    try {
        authenticate.value = await isAuthenticated();
    } finally {
        loading.value = false;
    }
}

onMounted(() => {
    loadData();
});
</script>

<style scoped>
.purple {
    background-color: #6B46C1;
    /* Використовуємо колір Purple з Tailwind CSS */
}
</style>
