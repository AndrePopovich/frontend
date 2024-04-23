<template>
    <div class="bg-gray-200 min-h-screen px-8">
        <SearchData />
        <div class="bg-white rounded-lg shadow-lg px-8 py-6 mx-auto max-w-2xl mt-8">
            <h2 class="text-3xl font-bold mb-4 text-center">Про BuySell</h2>
            <p class="text-lg text-gray-700 leading-relaxed">
                BuySell - Ваш інтернет-майданчик для купівлі та продажу.
            </p>
            <h3 class="text-xl font-semibold mt-6 mb-3">Що таке BuySell?</h3>
            <p class="text-lg text-gray-700 leading-relaxed">
                BuySell - це онлайн-платформа, яка забезпечує користувачів можливістю купувати і продавати різноманітні
                товари та послуги.
                Незалежно від того, чи ви шукаєте новий смартфон, відпочинок у вишуканому ресторані або автомобіль,
                BuySell має все, що вам потрібно.
            </p>
            <div class="flex justify-center my-4">
                <img src="/img/logo.png" alt="logo"
                    class="rounded-lg border border-gray-300 shadow-lg mx-auto w-full max-w-lg">
            </div>



            <h3 class="text-xl font-semibold mt-6 mb-3">Чому обирати BuySell?</h3>
            <ul class="list-disc pl-6">
                <li class="text-lg text-gray-700 leading-relaxed">Широкий вибір: Завдяки широкому асортименту товарів та
                    послуг, ви зможете знайти все, що вам потрібно, на одному майданчику.</li>
                <li class="text-lg text-gray-700 leading-relaxed">Простий у використанні: Інтуїтивно зрозумілий
                    інтерфейс BuySell робить процес купівлі та продажу легким і приємним.</li>
                <li class="text-lg text-gray-700 leading-relaxed">Безпека: BuySell вживає всіх заходів для захисту вашої
                    конфіденційності та безпеки платежів.</li>
                <li class="text-lg text-gray-700 leading-relaxed">Комунітетність: Спільнота BuySell постійно зростає,
                    дозволяючи користувачам обмінюватися досвідом та порадами.</li>
            </ul>
            <h3 class="text-xl font-semibold mt-6 mb-3">Як користуватися BuySell?</h3>
            <ol class="list-decimal pl-6">
                <li class="text-lg text-gray-700 leading-relaxed">Пошук: Введіть ключове слово у рядок пошуку або
                    скористайтеся фільтрами для знаходження товарів та послуг, які вас цікавлять.</li>
                <li class="text-lg text-gray-700 leading-relaxed">Подання оголошення: Якщо ви хочете продати щось,
                    просто натисніть кнопку "Подати оголошення" і додайте всю необхідну інформацію.</li>
                <li class="text-lg text-gray-700 leading-relaxed">Контакт з продавцем: Знайшли товар чи послугу, яка вас
                    зацікавила? Зв'яжіться з продавцем безпосередньо через платформу BuySell для отримання додаткової
                    інформації або організації зустрічі.</li>
            </ol>
            <p class="text-lg text-gray-700 leading-relaxed mt-6">
                Приєднуйтесь до BuySell вже сьогодні та розпочніть успішні угоди!
            </p>
            <p class="text-lg text-gray-700 leading-relaxed mt-6">
                Це лише невеличкий огляд BuySell, але ця платформа має набагато більше для пропозиції. Насолоджуйтеся
                покупками та продажами на BuySell!
            </p>
        </div>
    </div>
</template>



<script setup>
import SearchData from '/components/search/SearchData';
</script>

<style scoped></style>
