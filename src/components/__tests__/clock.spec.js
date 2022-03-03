import { shallowMount } from "@vue/test-utils";
import clock from "@/components/clock/index.vue";

describe("Clock component", () => {
  test("Test-01", () => {
    const wrapper = shallowMount(clock);

    expect(wrapper.contains('div')).toBe(true);
  });
});