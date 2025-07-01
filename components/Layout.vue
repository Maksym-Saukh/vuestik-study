<script setup lang="ts">
import { ref, computed } from 'vue';
import { useBreakpoint } from 'vuestic-ui';
import Slider from './Slider.vue';
import Send from './Send.vue';
import Module_0_1 from './Module_0_1.vue';
import Module_0_2 from './Module_0_2.vue';
import Module_1_1 from './Module_1_1.vue';
import Module_1_2 from './Module_1_2.vue';
import Module_1_3 from './Module_1_3.vue';
import Module_1_4 from './Module_1_4.vue';
import Module_2_1 from './Module_2_1.vue';
import Module_2_2 from './Module_2_2.vue';
import Module_2_3 from './Module_2_3.vue';
import Module_2_4 from './Module_2_4.vue';
import Module_3_1 from './Module_3_1.vue';
import Module_3_2 from './Module_3_2.vue';
import Module_3_3 from './Module_3_3.vue';
import Module_3_4 from './Module_3_4.vue';
import Module_4_1 from './Module_4_1.vue';
import Module_4_2 from './Module_4_2.vue';
import Module_4_3 from './Module_4_3.vue';
import Module_4_4 from './Module_4_4.vue';
import Module_4_5 from './Module_4_5.vue';
import Module_4_6 from './Module_4_6.vue';
import Module_4_7 from './Module_4_7.vue';
import Module_5_1 from './Module_5_1.vue';
import Module_5_2 from './Module_5_2.vue';
import Module_5_3 from './Module_5_3.vue';
import Module_6_1 from './Module_6_1.vue';
import Module_6_2 from './Module_6_2.vue';
import Module_6_3 from './Module_6_3.vue';
import Module_6_4 from './Module_6_4.vue';
import Module_7_1 from './Module_7_1.vue';
import Module_7_2 from './Module_7_2.vue';
import Module_7_3 from './Module_7_3.vue';
import Module_7_4 from './Module_7_4.vue';

type MenuItem = {
  title: 'Slider' | 'Send' | 'Messages' | 'Module 0 (Introduction)'| '0.1 What is Vuestic UI'| '0.2 Comparison with other UI frameworks'| 'Module 1 (Installation and Project Setup)' 
  |'1.1 Creating a project using create-vuestic'|'1.2 Manual Vuestic UI installation in Vue project'|'1.3 Structure of the created project'| '1.4 Configuring Vuestic in main.ts'| 'Module 2 (Basic Components)'
  |'2.1 VaButton — Buttons'|'2.2 VaInput — Input Fields'|'2.3 VaSelect, VaCheckbox, VaSwitch'|'2.4 VaCard, VaBadge, VaIcon'|'Module 3 (Forms and Validation)'|'3.1 VaForm and Basic Validation'|'3.2 Validation Rules: required, custom'
  |'3.3 Displaying Errors (error-messages)'|'3.4 Submit Handling'|'Module 4 (VaDataTable Tables)'|'4.1 Displaying Arrays in Table'|'4.2 Sorting, Filtering, Searching'|'4.3 Pagination'|'4.4 Custom Column Templates'
  |'4.5 Dynamic Data and API'|'4.6 Interactive Tables (buttons, events)'|'4.7 Empty States, VaSkeleton, Loading'|'Module 5 (Layout and Page Structure)'|'5.1 VaLayout, VaSidebar, VaNavbar'|'5.2 VaPage, VaTabs, VaDrawer'
  |'5.3 Building Responsive UI'|'Module 6 (Themes and CSS Variables)'|'6.1 Working with Vuestic CSS Variables'|'6.2 Changing Colors (primary, secondary...)'|'6.3 Creating a Custom Theme'
  |'6.4 Switching Between Dark/Light Mode'|'Module 7 (Configuration and Global Settings)'|'7.1 createVuestic() — Component Configuration'|'7.2 Global Components'|'7.3 Setting Default Parameters'
  |'7.4 Using Vuestic Plugins (notifications, modals)';
  icon: string;
  children?: MenuItem[];
};

type ActiveElement = 'Slider' | 'Send'| '0.1 What is Vuestic UI'| '0.2 Comparison with other UI frameworks' 
  |'1.1 Creating a project using create-vuestic'|'1.2 Manual Vuestic UI installation in Vue project'|'1.3 Structure of the created project'| '1.4 Configuring Vuestic in main.ts'
  |'2.1 VaButton — Buttons'|'2.2 VaInput — Input Fields'|'2.3 VaSelect, VaCheckbox, VaSwitch'|'2.4 VaCard, VaBadge, VaIcon'|'3.1 VaForm and Basic Validation'|'3.2 Validation Rules: required, custom'
  |'3.3 Displaying Errors (error-messages)'|'3.4 Submit Handling'|'4.1 Displaying Arrays in Table'|'4.2 Sorting, Filtering, Searching'|'4.3 Pagination'|'4.4 Custom Column Templates'
  |'4.5 Dynamic Data and API'|'4.6 Interactive Tables (buttons, events)'|'4.7 Empty States, VaSkeleton, Loading'|'5.1 VaLayout, VaSidebar, VaNavbar'|'5.2 VaPage, VaTabs, VaDrawer'
  |'5.3 Building Responsive UI'|'6.1 Working with Vuestic CSS Variables'|'6.2 Changing Colors (primary, secondary...)'|'6.3 Creating a Custom Theme'
  |'6.4 Switching Between Dark/Light Mode'|'7.1 createVuestic() — Component Configuration'|'7.2 Global Components'|'7.3 Setting Default Parameters'
  |'7.4 Using Vuestic Plugins (notifications, modals)';

const showSidebar = ref(true);
const breakpoints = useBreakpoint();
const activeElement = ref<ActiveElement>('0.1 What is Vuestic UI');

const items: MenuItem[] = [
  { title: 'Module 0 (Introduction)', icon: 'mail', children: [
    { title: '0.1 What is Vuestic UI', icon: 'drafts' },
    { title: '0.2 Comparison with other UI frameworks', icon: 'drafts' },
  ] },
  { title: 'Module 1 (Installation and Project Setup)', icon: 'mail', children: [
    { title: '1.1 Creating a project using create-vuestic', icon: 'drafts' },
    { title: '1.2 Manual Vuestic UI installation in Vue project', icon: 'drafts' },
    { title: '1.3 Structure of the created project', icon: 'drafts' },
    { title: '1.4 Configuring Vuestic in main.ts', icon: 'drafts' },
  ] },
  { title: 'Module 2 (Basic Components)', icon: 'mail', children: [
    { title: '2.1 VaButton — Buttons', icon: 'drafts' },
    { title: '2.2 VaInput — Input Fields', icon: 'drafts' },
    { title: '2.3 VaSelect, VaCheckbox, VaSwitch', icon: 'drafts' },
    { title: '2.4 VaCard, VaBadge, VaIcon', icon: 'drafts' },
  ] },
  { title: 'Module 3 (Forms and Validation)', icon: 'mail', children: [
    { title: '3.1 VaForm and Basic Validation', icon: 'drafts' },
    { title: '3.2 Validation Rules: required, custom', icon: 'drafts' },
    { title: '3.3 Displaying Errors (error-messages)', icon: 'drafts' },
    { title: '3.4 Submit Handling', icon: 'drafts' },
  ] },
  { title: 'Module 4 (VaDataTable Tables)', icon: 'mail', children: [
    { title: '4.1 Displaying Arrays in Table', icon: 'drafts' },
    { title: '4.2 Sorting, Filtering, Searching', icon: 'drafts' },
    { title: '4.3 Pagination', icon: 'drafts' },
    { title: '4.4 Custom Column Templates', icon: 'drafts' },
    { title: '4.5 Dynamic Data and API', icon: 'drafts' },
    { title: '4.6 Interactive Tables (buttons, events)', icon: 'drafts' },
    { title: '4.7 Empty States, VaSkeleton, Loading', icon: 'drafts' },
  ] },
  { title: 'Module 5 (Layout and Page Structure)', icon: 'mail', children: [
    { title: '5.1 VaLayout, VaSidebar, VaNavbar', icon: 'drafts' },
    { title: '5.2 VaPage, VaTabs, VaDrawer', icon: 'drafts' },
    { title: '5.3 Building Responsive UI', icon: 'drafts' },
  ] },
  { title: 'Module 6 (Themes and CSS Variables)', icon: 'mail', children: [
    { title: '6.1 Working with Vuestic CSS Variables', icon: 'drafts' },
    { title: '6.2 Changing Colors (primary, secondary...)', icon: 'drafts' },
    { title: '6.3 Creating a Custom Theme', icon: 'drafts' },
    { title: '6.4 Switching Between Dark/Light Mode', icon: 'drafts' },
  ] },
  { title: 'Module 7 (Configuration and Global Settings)', icon: 'mail', children: [
    { title: '7.1 createVuestic() — Component Configuration', icon: 'drafts' },
    { title: '7.2 Global Components', icon: 'drafts' },
    { title: '7.3 Setting Default Parameters', icon: 'drafts' },
    { title: '7.4 Using Vuestic Plugins (notifications, modals)', icon: 'drafts' },
  ] },
];


const componentMap = {
  'Slider': Slider,
  'Send': Send,
  '0.1 What is Vuestic UI': Module_0_1,
  '0.2 Comparison with other UI frameworks': Module_0_2,
  '1.1 Creating a project using create-vuestic': Module_1_1,
  '1.2 Manual Vuestic UI installation in Vue project': Module_1_2,
  '1.3 Structure of the created project': Module_1_3,
  '1.4 Configuring Vuestic in main.ts': Module_1_4,
  '2.1 VaButton — Buttons': Module_2_1,
  '2.2 VaInput — Input Fields': Module_2_2,
  '2.3 VaSelect, VaCheckbox, VaSwitch': Module_2_3,
  '2.4 VaCard, VaBadge, VaIcon': Module_2_4,
  '3.1 VaForm and Basic Validation': Module_3_1,
  '3.2 Validation Rules: required, custom': Module_3_2,
  '3.3 Displaying Errors (error-messages)': Module_3_3,
  '3.4 Submit Handling': Module_3_4,
  '4.1 Displaying Arrays in Table': Module_4_1,
  '4.2 Sorting, Filtering, Searching': Module_4_2,
  '4.3 Pagination': Module_4_3,
  '4.4 Custom Column Templates': Module_4_4,
  '4.5 Dynamic Data and API': Module_4_5,
  '4.6 Interactive Tables (buttons, events)': Module_4_6,
  '4.7 Empty States, VaSkeleton, Loading': Module_4_7,
  '5.1 VaLayout, VaSidebar, VaNavbar': Module_5_1,
  '5.2 VaPage, VaTabs, VaDrawer': Module_5_2,
  '5.3 Building Responsive UI': Module_5_3,
  '6.1 Working with Vuestic CSS Variables': Module_6_1,
  '6.2 Changing Colors (primary, secondary...)': Module_6_2,
  '6.3 Creating a Custom Theme': Module_6_3,
  '6.4 Switching Between Dark/Light Mode': Module_6_4,
  '7.1 createVuestic() — Component Configuration': Module_7_1,
  '7.2 Global Components': Module_7_2,
  '7.3 Setting Default Parameters': Module_7_3,
  '7.4 Using Vuestic Plugins (notifications, modals)': Module_7_4,

} as const;

const currentComponent = computed(() => {
  return componentMap[activeElement.value];
});
</script>

<template>
  <VaLayout 
    style="height: 100vh; overflow: hidden;"
    
    :left="{ absolute: breakpoints.smDown }"
  >
    <template #top>
      <VaNavbar color="primary" class="py-2 fixed-navbar">
        <template #left>
          <VaButton :icon="showSidebar ? 'menu_open' : 'menu'" @click="showSidebar = !showSidebar" />
        </template>
        <template #center>
          <VaNavbarItem class="font-bold text-lg">
            LOGO
          </VaNavbarItem>
        </template>
      </VaNavbar>
    </template>

    <template #left>
      <VaSidebar v-model="showSidebar" 
      width="25rem"
      class="fixed-sidebar"
      >
        <VaAccordion>
        <template v-for="item in items">
          <VaCollapse
            v-if="item.children"
            :key="item.title + 'collapse'"
            body-color="#00000022"
          >
            <template #header="{ value: isCollapsed }">
              <VaSidebarItem :active="item.children.some((child) => child.title === activeElement)">
                <VaSidebarItemContent>
                  <VaIcon :name="item.icon" />
                  <VaSidebarItemTitle>{{ item.title }}</VaSidebarItemTitle>
                  <VaSpacer />
                  <VaIcon :name="isCollapsed ? 'va-arrow-up' : 'va-arrow-down'" />
                </VaSidebarItemContent>
              </VaSidebarItem>
            </template>

            <template #body>
              <VaSidebarItem
                v-for="child in item.children"
                :key="child.title"
                :active="child.title === activeElement"
                @click="activeElement = child.title as ActiveElement"
              >
                <VaSidebarItemContent>
                  <VaIcon :name="child.icon" />
                  <VaSidebarItemTitle>{{ child.title }}</VaSidebarItemTitle>
                </VaSidebarItemContent>
              </VaSidebarItem>
            </template>
          </VaCollapse>

          <VaSidebarItem
            v-else
            :key="item.title + 'item'"
            :active="item.title === activeElement"
            @click="activeElement = item.title as ActiveElement"
          >
            <VaSidebarItemContent>
              <VaIcon :name="item.icon" />
              <VaSidebarItemTitle>{{ item.title }}</VaSidebarItemTitle>
            </VaSidebarItemContent>
          </VaSidebarItem>
        </template>
      </VaAccordion>

      <VaSpacer />

      <!-- <VaSidebarItem
        :active="'Settings' === activeElement"
        @click="activeElement = 'Settings'"
      >
        <VaSidebarItemContent>
          <VaIcon name="settings" />
          <VaSidebarItemTitle>Settings</VaSidebarItemTitle>
        </VaSidebarItemContent>
      </VaSidebarItem> -->

        
      </VaSidebar>
    </template>

    <template #content>
      <main class="p-4 content-wrapper">
        <component :is="currentComponent" />

    </main>
    </template>
  </VaLayout>
</template>

<style>
main{
   padding: 40px 25%; 

}
.fixed-navbar {
  position: sticky;
  top: 0;
  z-index: 100;
}

.fixed-sidebar {
  position: fixed;
  top: 64px; /* Висота навігаційної панелі */
  bottom: 0;
  left: 0;
  z-index: 99;
  overflow-y: auto;
}

.content-wrapper {
   
  
  padding: 40px 27%;
  height: 91%;
  overflow-y: auto;
}






</style>

