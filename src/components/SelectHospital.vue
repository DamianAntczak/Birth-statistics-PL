<script setup lang="ts">
import {ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";

const options = [
  {label: 'Specjalistyczny Zespół Opieki Zdrowotnej Nad Matką i Dzieckiem w Poznaniu', value: '150003180'},
  {
    label: 'Ginekologiczno-Położniczy Szpital Kliniczny Uniwersytetu Medycznego im. Karola Marcinkowskiego w Poznaniu',
    value: '150000001'
  },
  {label: 'Szpital Miejski im. Franciszka Raszei', value: '150000072'},
  {label: 'Szpital Wojewódzki w Poznaniu', value: '150000038'}
]

const router = useRouter();
const route = useRoute();

const hospitalId = ref();

const props = defineProps<{
  statsType?: string
}>()

const emit = defineEmits({hospitalIdChanged: (_value: string) => true})

function hospitalIdChanged(value: any) {
  emit('hospitalIdChanged', value)
}

watch(hospitalId, (_newValue) => {
  if(props.statsType !== undefined) {
    router.push({name: 'StatsDetail', params: {hospitalId: _newValue, statsType: props.statsType}})
  } else {
    router.push({name: 'StatsHospital', params: {hospitalId: _newValue}})
  }
});

watch(() => route.params.hospitalId, (newValue) => {
  if (newValue && hospitalId.value !== newValue) {
    hospitalId.value = newValue.toString();
    hospitalIdChanged(hospitalId.value)
  }
}, { immediate: true });

</script>

<template>
  <n-form-item label="Szpital" label-placement="left" style="width: 100%">
    <n-select name="hospitals" id="hospitals"
              :options="options"
              placeholder="Wybierz szpital"
              v-model:value="hospitalId"
              @update:value="hospitalIdChanged"
    />
  </n-form-item>
</template>

<style scoped>

</style>