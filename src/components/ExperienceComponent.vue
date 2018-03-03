<template>
    <v-card dark color="grey darken-4" class="elevation-10">
        <v-card-title primary-title>
            <div class="headline ml-2">Work History</div>
        </v-card-title>
        <v-divider class="mb-2"></v-divider>
            <v-expansion-panel inset>
                <v-expansion-panel-content ripple v-for="(item, index) in jobs" :key="index" class="mb-1 mt-1 elevation-10">
                    <div slot="header">
                        <div class="headline">{{item.title}} - {{item.employer}}</div>
                        <p class="ml-2">{{item.summary}}</p>
                    </div>
                    <v-divider v-if="item.accomplishments.length"></v-divider>
                    <v-card>
                        <v-card-title>
                            <div class="title">Accomplishments</div>
                        </v-card-title>
                        <v-card-text>
                            <div v-if="item.accomplishments.length" class="ml-4">
                                <template v-for="(text, index) in item.accomplishments">
                                    <div class="subheading mb-2" :key="index">
                                        <v-icon class="mx-2" :key="index">memory</v-icon>{{text}}
                                    </div>
                                </template>
                            </div>
                        </v-card-text>
                    </v-card>
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
                    accomplishments: ['Help to identify and debug issues within a CUDA parallel c++ module.', 'Gained experience effectively collaborating with a team.']
                },
                {
                    title: 'Desktop Support Temp',
                    employer: 'University of Michigan',
                    summary: 'Worked to deliver simple solutions to complex problems to our customers throughout the university using ServiceNow, a ticket-based reporting system.',
                    accomplishments: ['Utilized BlueCat network manager to control network secturiy across different campus networks.',
                                      'Built and configured Linux, Mac, and PC systems with automated deployment tools.'
                                     ]
                },
                {
                    title: 'Web Development Intern',
                    employer: 'University of Michigan Health System',
                    summary: 'Played a major role in the architecture, design, and implementation of a modern single-page application using Typescript, C# .NET, and PL/SQL.',
                    accomplishments: ['Converted depreciating Coldfusion web application to a modern, responsive webapp using Vue.js, Typescript, jQuery and ASMX webservices.',
                                        'Developed webapp to serve as an internal customer interface for the Oracle database at the UMich Health Systems Data Warehouse.',
                                     ]
                }
            ]
        };
    }
}
</script>

<style lang="scss" scoped>
  
</style>
