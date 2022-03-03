import { shallowMount } from "@vue/test-utils";
import Text from "@/components/textContent/text/index.vue";

describe("Text component", () => {
  test("Test-03", () => {
    const wrapper = shallowMount(Text);

    expect(wrapper.contains('p')).toBe(true);
  });
});