<script setup lang="ts">
import { ref, computed } from 'vue';
import { useBreakpoint } from 'vuestic-ui';
import Slider from './Slider.vue';
import Send from './Send.vue';

type MenuItem = {
  title: 'Slider' | 'Send' | 'Messages';
  icon: string;
  children?: MenuItem[];
};

type ActiveElement = 'Slider' | 'Send';

const showSidebar = ref(true);
const breakpoints = useBreakpoint();
const activeElement = ref<ActiveElement>('Slider');

const items: MenuItem[] = [
  { title: 'Slider', icon: 'dashboard' },
  { 
    title: 'Messages', 
    icon: 'mail', 
    children: [
      { title: 'Send', icon: 'send' }, 
    ] 
  },
];

const componentMap = {
  'Slider': Slider,
  'Send': Send,
} as const;

const currentComponent = computed(() => {
  return componentMap[activeElement.value];
});
</script>

<template>
  <VaLayout 
    style="height: 100vh"
    :left="{ absolute: breakpoints.smDown }"
  >
    <template #top>
      <VaNavbar color="primary" class="py-2">
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
      <VaSidebar v-model="showSidebar">
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
      <main class="p-4">
        <component :is="currentComponent" />

    </main>
    </template>
  </VaLayout>
</template>

<style>
main{
  padding: 40px;
}
</style>

