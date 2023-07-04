import axios from 'axios';
import { onMounted, ref } from 'vue';
import { EnhanceAppContext } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import mediumZoom, { Zoom } from 'medium-zoom';
import mixpanel from 'mixpanel-browser';
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

      // Initialize Intercom
      // @ts-ignore
      window.Intercom('boot', {
        api_base: 'https://api-iam.intercom.io',
        app_id: 'lmbk1g3e',
      });

      // Initialize Mixpanel
      mixpanel.init(
        'd0cc6ae22c50cef4b54d69f65d827f97',
        {
          debug: import.meta.env.DEV,
          track_pageview: true,
          persistence: 'localStorage',
        },
      );
      // @ts-ignore
      mixpanel.register_once({ 'Browser Language': navigator.language || navigator.userLanguage });

      try {
        const { status, data } = await axios.get('https://api.aircode.io/api/v1/user', {
          withCredentials: true,
        });
        if (status === 200 && data) {
          const { uid, name, email, createdAt, plan } = data.data;
          const createdAtTimeStamp = Math.floor((new Date(createdAt)).valueOf() / 1000)

          // Set uid to GA
          // @ts-ignore
          gtag('set', {
            user_id: `${uid}`,
          });

          // Identify a user to Mixpanel
          mixpanel.identify(`${uid}`);
          mixpanel.people.set({
            '$name': name,
            '$email': email,
            'Plan': plan,
          });

          // @ts-ignore
          mixpanel.people.set_once({ 'Browser Language': navigator.language || navigator.userLanguage });

          // Update Intercom with user info
          // @ts-ignore
          window.Intercom('update', {
            name, // Full name
            email, // Email address
            user_id: `${uid}`, // User ID
            created_at: createdAtTimeStamp, // Signup date as a Unix timestamp
            premium_customer: plan === 'professional' || plan === 'team',
          });

        }
      } catch (error) {
        // do nothing
      }
    });
  },
};
