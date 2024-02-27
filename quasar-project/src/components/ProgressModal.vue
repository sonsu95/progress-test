<template>
  <q-dialog>
    <div class="flex justify-center">
      <div class="flex column items-center">
        <q-circular-progress
          :value="progress"
          size="50px"
          color="orange"
          class="q-ma-md"
        />
        <div>
          <pre>{{ progress }}%</pre>
        </div>
      </div>
    </div>
  </q-dialog>
</template>

<script setup lang="ts">
interface Props {
  progress: number;
}
defineProps<Props>();
</script>

<style scoped>

</style>
