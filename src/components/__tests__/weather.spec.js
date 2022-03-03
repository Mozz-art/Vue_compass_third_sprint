import { shallowMount } from "@vue/test-utils";
import Weather from "@/components/weather/index.vue";

describe("Weather component", () => {
  test("Test-06", () => {
    const wrapper = shallowMount(Weather);

    expect(wrapper.contains('div')).toBe(true);
  });
});