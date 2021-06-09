<template>
  <div>
    <div>
      <button
        class="
       text-white
       rounded
       font-semibold
       shadow-lg
       bg-blue-400
       px-5
       hover:bg-blue-500
       outline-none
       focus:outline-none
       py-4"
        @click="toggleModal = !toggleModal">
        Добавить
      </button>
      <div
        class="
      fixed overflow-x-hidden
      overflow-y-auto
      inset-0
      flex
      justify-center
      items-center
      z-50"
        v-if="toggleModal"
      >
        <div
          class="
      relative
      mx-auto
      w-96
      ">
          <div class="bg-white w-full rounded shadow-2xl flex flex-col ">
            <div class="flex justify-between">
              <span class="font-semibold p-5 mt-2">
                Добавление пользователя
              </span>
              <button
                class="p-4 outline-none focus:outline-none"
                @click="toggleModal = !toggleModal"
              >
                X
              </button>
            </div>
            <div class="flex justify-between w-auto flex-col">
              <div class="px-6 py-2 text-left flex items-center justify-between">
                <span class="font-light mr-5">
                  Имя
                </span>
                <input class="
                 bg-gray-200
                 border-2 border-gray-100
                 focus:outline-none
                 bg-gray-100 block py-2 px-4 rounded-lg
                 focus:border-gray-300 "
                v-model="newUserForm['name']"
                />
              </div>
              <div class="px-6 py-2 text-left flex items-center justify-between">
                <span class="font-light mr-5">
                  Телефон
                </span>
                <input
                  class="
                 bg-gray-200
                 border-2 border-gray-100
                 focus:outline-none
                 bg-gray-100 block py-2 px-4 rounded-lg
                 focus:border-gray-300 "
                  v-model="newUserForm.tel"
                />
              </div>
              <div class="px-6 py-2 text-left flex items-center justify-between">
                <span class="font-light mr-5">
                  Начальник
                </span>
                <select
                  v-model="userSelect"
                  class="
                 bg-gray-200
                 border-2 border-gray-100
                 focus:outline-none
                 bg-gray-100 block py-2 px-4 rounded-lg
                 focus:border-gray-300 w-3/5">
                  <option
                  v-for="item in bosses"
                  :key="item.id"
                  >
                    <span>{{item.name}}</span>
                  </option>
                </select>
              </div>
            </div>
            <button
              class="
       rounded bg-pink-400
       hover:bg-pink-500
       outline-none
       font-semibold
       focus:outline-none
       shadow-lg
       text-white px-5 py-2 ml-6 mt-1 w-1/2 mb-5"
            @click="addUser"
            >
              Сохранить
            </button>
          </div>
        </div>
      </div>
      <div
        v-if="toggleModal"
        class="absolute inset-0 opacity-25 bg-black z-40"
      >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'modalForm',
  computed: {
    ...mapGetters({
      userList: 'Users',
      newUserForm: 'NewUserForm',
    }),
  },
  data() {
    return {
      toggleModal: false,
      userSelect: '',
      bosses: [],
      test: this.$store.state.userList,
    };
  },
  methods: {
    bossList(users) {
      for (let i = 0; i < users.length; i += 1) {
        this.bosses.push(users[i]);
        if (users[i].children) {
          this.bossList(users[i].children);
        }
      }
    },
    addUser() {
      this.toggleModal = false;
      this.$store.dispatch('POST_ADD_USER', this.userSelect);
      this.userSelect = '';
      this.bosses = [];
      this.bossList(this.userList);
    },
  },
  mounted() {
    this.bossList(this.userList);
  },
};
</script>

<style scoped>

</style>
