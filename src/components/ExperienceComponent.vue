<template>
    <v-card dark color="grey darken-4" class="elevation-10" ripple>
        <v-card-title primary-title>
            <div class="headline ml-2">Work History</div>
        </v-card-title>
    </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ExperienceComponent extends Vue {
    data() {
        return {
            jobs: {
                title: 'Desktop Support Temp',
            },
        };
    }
}
</script>

<style lang="scss" scoped>
  
</style>
