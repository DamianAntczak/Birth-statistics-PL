<script setup lang="ts">

import SelectHospital from "./SelectHospital.vue";
import LineChart from "./LineChart.vue";
import SelectStatsType from "./SelectStatsType.vue";
import {ref} from "vue";

const statsType = ref()
const hospitalId = ref()

function onStatsTypeChanged(event: any) {
  statsType.value = event
}

function onHospitalIdChanged(event: any) {
  hospitalId.value = event
}

</script>

<template>
  <n-grid :cols="24" :x-gap="8">
    <n-gi :span="6" :span-md="0">
    </n-gi>
    <n-gi :span="12" :span-md="24">
      <div class="content-container">

        <n-page-header title="Statystyki porodów dla szpitali"
                       subtitle="na podstawie z danych NFZ*"
        >
          <template #avatar>
            <n-avatar
                src="/birth-statistics-pl/favicon.svg"
            />
          </template>
        </n-page-header>
        <n-divider/>
        <SelectHospital
            @hospitalIdChanged="onHospitalIdChanged($event)"
            :stats-type="statsType"
        />
        <n-flex justify="center">
          <SelectStatsType
              @statsTypeChanged="onStatsTypeChanged($event)"/>
        </n-flex>
        <n-divider/>
        <LineChart
            :hospital-id="hospitalId"
            :stats-type="statsType"/>
        <n-ellipsis style="margin-top: 10px">
          *Dane pochodzą z portalu <a
            href="https://ezdrowie.gov.pl/portal/home/badania-i-dane/zdrowe-dane/monitorowanie/porody-opieka-okoloporodowa">https://ezdrowie.gov.pl</a><br/>
          W przypadku roku 2025 dane podane są dla I półrocza
        </n-ellipsis>
      </div>
    </n-gi>
    <n-gi :span="6" :span-md="0">
    </n-gi>
  </n-grid>
</template>

<style scoped>
div.content-container {
  margin-top: 30px;
}
</style>