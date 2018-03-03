<template>
    <v-card dark color="grey darken-4" class="elevation-10" ripple>
        <v-card-title primary-title>
            <div class="headline ml-2">Work History</div>
        </v-card-title>
        <v-divider class="mb-2"></v-divider>
            <v-expansion-panel popout>
                <v-expansion-panel-content v-for="(item, index) in jobs" :key="index" >
                    <div slot="header">
                        <div class="headline">{{item.title}}</div>
                        <p>{{item.summary}}</p>
                    </div>
                </v-expansion-panel-content>
            </v-expansion-panel>
    </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ExperienceComponent extends Vue {
    data() {
        return {
            jobs: [
                {
                    title: 'Research Assistant',
                    employer: 'Undergradute Research Opportunities at University of Michigan',
                    summary: 'Helped to test software by identifying bugs, collaborated on large sets of data with peers.',

                },
                {
                    title: 'Desktop Support Temp',
                    employer: 'University of Michigan',
                    summary: 'Worked with a close-knit team to solve users’ issues with both Mac and Windows based systems within ServiceNow, a ticket-based reporting system.',

                },
                {
                    title: 'Web Development Intern',
                    employer: 'University of Michigan Health System',
                    summary: 'Played a major role in the architecture, design, and implementation of a modern single-page application using Typescript, C# .NET, and PL/SQL.',

                }
            ]
        };
    }
}
</script>

<style lang="scss" scoped>
  
</style>
