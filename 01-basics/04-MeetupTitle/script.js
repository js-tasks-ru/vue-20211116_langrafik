const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const Meetups = defineComponent({
  data: () => ({
    meetupId: 1,
    meetupTitle: 'Loading ... ',
  }),
  watch: {
    meetupId: {
      immediate: true,
      async handler(newValue) {
        const { title } = await fetchMeetupById(newValue);
        this.meetupTitle = title;
      },
    },
  },
});

createApp(Meetups).mount('#app');
