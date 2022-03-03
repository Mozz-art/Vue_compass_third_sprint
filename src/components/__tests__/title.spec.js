import { shallowMount } from "@vue/test-utils";
import Title from "@/components/textContent/title/index.vue";

describe("Title component", () => {
  test("Test-05", () => {
    const wrapper = shallowMount(Title);

    expect(wrapper.contains('h1')).toBe(true);
  });
});