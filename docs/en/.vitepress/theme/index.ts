import axios from 'axios';
import { onMounted, ref } from 'vue';
import { EnhanceAppContext } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import mediumZoom, { Zoom } from 'medium-zoom';
import './custom.css';
import ListBoxContainer from './components/ListBoxContainer.vue';
import ListBox from './components/ListBox.vue';
import ACImage from './components/ACImage.vue';

const zoom = ref<Zoom | null>(null);

export default {
  ...DefaultTheme,
  enhanceApp(ctx: EnhanceAppContext) {
    DefaultTheme.enhanceApp(ctx)

    ctx.app.provide('medium-zoom', zoom);

    ctx.app.component('ListBoxContainer', ListBoxContainer);
    ctx.app.component('ListBox', ListBox);
    ctx.app.component('ACImage', ACImage);
  },
  setup() {
    onMounted(async () => {
      zoom.value = mediumZoom();

      try {
        const { status, data } = await axios.get('https://api.aircode.io/api/v1/user', {
          withCredentials: true,
        });
        if (status === 200 && data) {
          const { name, email, createdAt, plan } = data.data;
          const createdAtTimeStamp = Math.floor((new Date(createdAt)).valueOf() / 1000)
          // @ts-ignore
          window.Intercom('boot', {
            api_base: 'https://api-iam.intercom.io',
            app_id: 'lmbk1g3e',
            name, // Full name
            email, // Email address
            created_at: `${createdAtTimeStamp}`, // Signup date as a Unix timestamp
            premium_customer: plan === 'professional' || 'team' ? true : false,
          });
        } else {
          // @ts-ignore
          window.Intercom('boot', {
            api_base: 'https://api-iam.intercom.io',
            app_id: 'lmbk1g3e',
            premium_customer: false,
          });
        }
      } catch (error) {
        // @ts-ignore
        window.Intercom('boot', {
          api_base: 'https://api-iam.intercom.io',
          app_id: 'lmbk1g3e',
          premium_customer: false,
        });
      }
    });
  },
};
