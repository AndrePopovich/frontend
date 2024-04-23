<template>
    <div>
        <nav class="navbar">
            <nuxt-link to="/" class="logo">BuySell</nuxt-link>
        </nav>
        <slot />
    </div>
</template>

<script setup>
</script>

<style scoped>
.navbar {
    background-color: #fff;
    /* Білий фон */
    padding: 1rem;
    /* Додатковий відступ для кращого вигляду */
}

.logo {
    color: #c222ac;
    /* Фіолетовий колір */
    font-weight: bold;
    /* Жирний шрифт */
    font-size: 1.5rem;
    /* Розмір шрифту */
}
</style>
