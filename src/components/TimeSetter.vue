<script setup lang="ts">
import { computed, ref } from 'vue'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc)
dayjs.extend(timezone)

const dateOnly = ref(Date.now())
const timezoneValue = ref("Asia/Tokyo")
const timeZoneOption = [
    {
        label: "日本时间",
        value: "Asia/Tokyo"
    },
    {
        label: "中国时间",
        value: "Asia/Shanghai"
    }
]
const ampm = [
    {
        label: "-",
        value: 0
    }, {
        label: "am・午前",
        value: 1
    }, {
        label: "pm・午後",
        value: 2
    }, {
        label: "朝",
        value: 3
    }, {
        label: "よる・夜",
        value: 4
    }, {
        label: "深夜",
        value: 5
    }
]
const am = ref(0)
const hour = ref(0)
const minute = ref(0)

const displaytime = computed(() => {
    let dateTime = dayjs(dateOnly.value).tz(timezoneValue.value, true)
    let hourNumber = hour.value
    if (am.value == 2) {
        hourNumber += 12
    }
    if (am.value > 3) {
        dateTime = dateTime.add(1, 'day')
    }
    dateTime = dateTime.hour(hourNumber)
    dateTime = dateTime.minute(minute.value)
    return dateTime
})

const isDayoff = dayjs().day() == 0 || dayjs().day() == 6 || dayjs().hour() < 10 || dayjs().hour() > 19;

</script>

<template>
    <n-space vertical>
        <n-tag v-if="isDayoff" type="error">
            非工作时间，禁止内卷
        </n-tag>
        <n-space>
            <div style="width:12em">
                <n-date-picker v-model:value="dateOnly" type="date" />
            </div>
            <div style="width:8em">
                <n-select v-model:value="timezoneValue" :options="timeZoneOption" />
            </div>
            <div style="width:8em">
                <n-select v-model:value="am" :options="ampm" />
            </div>
            <div style="width:8em">
                <n-input-number placeholder="Hour" v-model:value="hour" :min="0" :max="29" />
            </div>
            <div style="width:8em">
                <n-input-number placeholder="Minute" v-model:value="minute" :min="0" :max="59" />
            </div>
        </n-space>

        <n-space vertical>
            <n-table striped>
                <thead>
                    <tr>
                        <th>地区</th>
                        <th>时间</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>韩国、日本、印尼东部</td>
                        <td>{{displaytime.tz('Asia/Tokyo').format('YYYY-MM-DD HH:mm [UTC] Z')}}</td>
                    </tr>
                    <tr>
                        <td>中国、俄罗斯、蒙古东部、新加坡、马来西亚、文莱、印尼中部、菲律宾</td>
                        <td>{{displaytime.tz('Asia/Shanghai').format('YYYY-MM-DD HH:mm [UTC] Z')}}</td>
                    </tr>
                    <tr>
                        <td>柬埔寨、印尼西部、老挝、泰国、越南、蒙古西部</td>
                        <td>{{displaytime.tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm [UTC] Z')}}</td>
                    </tr>
                    <tr>
                        <td>缅甸</td>
                        <td>{{displaytime.tz('Asia/Yangon').format('YYYY-MM-DD HH:mm [UTC] Z')}}</td>
                    </tr>
                    <tr>
                        <td>孟加拉国、不丹</td>
                        <td>{{displaytime.tz('Asia/Dhaka').format('YYYY-MM-DD HH:mm [UTC] Z')}}</td>
                    </tr>
                    <tr>
                        <td>尼泊尔</td>
                        <td>{{displaytime.tz('Asia/Kathmandu').format('YYYY-MM-DD HH:mm [UTC] Z')}}</td>
                    </tr>
                    <tr>
                        <td>印度、斯里兰卡</td>
                        <td>{{displaytime.tz('Asia/Kolkata').format('YYYY-MM-DD HH:mm [UTC] Z')}}</td>
                    </tr>
                    <tr>
                        <td>UTC标准时</td>
                        <td>{{displaytime.tz('Etc/UTC').format('YYYY-MM-DD HH:mm [UTC] Z')}}</td>
                    </tr>
                </tbody>
            </n-table>
        </n-space>
    </n-space>
</template>