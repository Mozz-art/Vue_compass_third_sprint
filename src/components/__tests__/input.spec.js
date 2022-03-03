import { shallowMount } from "@vue/test-utils";
import Input from "@/components/input/index.vue";

describe("Input component", () => {
  test("Test-02", () => {
    const wrapper = shallowMount(Input);

    expect(wrapper.contains('div')).toBe(true);
  });
});