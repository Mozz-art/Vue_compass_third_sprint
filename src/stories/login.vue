<script>
import './BoxLoginStyle.css';
import MyButton from './Button.vue';

export default {
  name: 'Login',

  components: { MyButton },

  props: {
    user: {
      type: Object,
    },
  },

  methods: {
    onLogin() {
      this.$emit('onLogin');
    },
    onLogout() {
      this.$emit('onLogout');
    },
    onCreateAccount() {
      this.$emit('onCreateAccount');
    },
  },
};
</script>