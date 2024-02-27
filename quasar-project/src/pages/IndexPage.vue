<template>
  <q-page class="row items-center justify-evenly">
    <q-btn label="click" @click="openDialog" />
    <progress-modal v-model="isOpen" :progress="progress" />
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import ProgressModal from 'components/ProgressModal.vue';

const isOpen = ref(false);

const progress = ref(0);
const data = ref(null);
async function getData() {
  try {
    const response = await axios.get('http://localhost:3000/mock-server', {
      onDownloadProgress: (progressEvent) => {
        const percentage = (progressEvent.progress ?? 0) * 100;
        const formattedPercentage = percentage.toFixed(2);

        progress.value = Number(formattedPercentage);
        console.log(progress.value);
      },
    });
    data.value = response.data;
  } catch (e) {
    console.error(e);
  }
}

async function openDialog() {
  isOpen.value = true;
  await getData();
}
</script>
