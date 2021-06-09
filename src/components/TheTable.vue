<template>
  <table class="tableWrapper ">
    <tr v-for="item in this.header"
        :key="item.id">
      <th class="w-80 cursor-pointer" @click="sortHandle">
        {{item.name}}
      </th>
      <th  class="cursor-pointer" @click="sortHandle">
        {{item.tel}}
      </th>
    </tr>
    <NestedTable
      v-for="item in userList"
      :users="item"
      :label="'name'"
      :key="item.id"/>
  </table>
</template>

<script>
import { mapGetters } from 'vuex';
import NestedTable from './NestedTable.vue';
import users from '../assets/users';

export default {
  name: 'TheTable',
  components: {
    NestedTable,
  },
  computed: {
    ...mapGetters({
      userList: 'Users',
    }),
  },
  data() {
    return {
      open: true,
      header: [{
        name: 'Имя',
        tel: 'Телефон',
        sortToggle: false,
      }],
    };
  },
  methods: {
    sortHandle() {
      if (!this.sortToggle) {
        users.sort((prev, next) => (prev.name.toLowerCase()
        > next.name.toLowerCase() ? 1 : -1));
        this.sortToggle = true;
      } else {
        users.sort((prev, next) => (prev.name.toLowerCase()
        < next.name.toLowerCase() ? 1 : -1));
        this.sortToggle = false;
      }
    },
  },
};
</script>

<style scoped>

</style>
