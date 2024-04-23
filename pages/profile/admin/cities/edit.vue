<template>
    <div class="bg-gray-900 h-screen flex items-center justify-center">
        <div class="max-w-xl mx-auto">
            <EditData :backUrl="backUrl" :object="object" :apiUrlEdit="apiUrlEdit" objectName="місто" />
        </div>
    </div>
</template>

<script setup>
import EditData from '/components/admin/EditData';
import { getEditObjectFromLocalStorage } from '/utils/auth.js';
const editObject = getEditObjectFromLocalStorage();
const object = {
    id: editObject.id,
    name: editObject.name
}
const apiUrlEdit = editObject.apiUrlEdit;
const backUrl = '/profile/admin/cities';
definePageMeta({
    layout: 'admin'
})
</script>

<style scoped></style>
