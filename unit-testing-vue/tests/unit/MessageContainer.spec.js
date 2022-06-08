import MessageContainer from '@/components/MessageContainer';
import { mount } from '@vue/test-utils';

describe('MessageContainer', () => {
  it('Wraps MessageDisplay component', () => {
    const msg = 'Hello from the db!';
    const wrapper = mount(MessageContainer, {
      global: {
        stubs: {
          MessageDisplay: {
            template: `<p data-testid="message">${msg}</p>`,
          },
        },
      },
    });

    const message = wrapper.find('[data-testid="message"]').text();
    expect(message).toEqual(msg);
  });
});
