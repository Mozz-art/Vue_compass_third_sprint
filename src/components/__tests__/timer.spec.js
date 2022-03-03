import { shallowMount } from "@vue/test-utils";
import timer from "@/components/timer/index.vue";

describe("Timer component", () => {
  test("Test-04", () => {
    const wrapper = shallowMount(timer);

    expect(wrapper.contains('div')).toBe(true);
  });
});