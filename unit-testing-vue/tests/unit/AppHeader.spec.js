import AppHeader from '@/components/AppHeader.vue';
import { mount } from '@vue/test-utils';

describe('AppHeader', () => {
  test('If user is not logged in, do not show logout button', () => {
    const wrapper = mount(AppHeader);
    const visibility = wrapper.find('button').isVisible();
    expect(visibility).toBe(false);
  });

  test('If user is logged in, show logout button', async () => {
    const wrapper = mount(AppHeader);
    // await allows for render to occur
    await wrapper.setData({ loggedIn: true });
    const visibility = wrapper.find('button').isVisible();
    expect(visibility).toBe(true);
  });
});
