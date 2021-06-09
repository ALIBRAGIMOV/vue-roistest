<template>
  <div>
    <table class="">
      <tr>
        <td class="w-80 text-center border">
          <button
            class="
            p-0 w-6 h-7
            openButton
            outline-none
            focus:outline-none
            "
            @click="openHandler"
            v-show="label !== 'tel' && users.children.length > 0">
            +
          </button>
          <span class="text-lg">{{users.name}}</span>
        </td>
        <td class="text-lg w-96 border">
          <span>{{users.tel}}</span>
        </td>
      </tr>
    </table>
    <ul v-show="users.children && open">
      <NestedTable v-for="child in users.children"
                   class="ml-3"
                   v-bind:users="child"
                   :key="child.id"
                   :label="label"
      />
    </ul>
  </div>
</template>

<script>

export default {
  name: 'NestedTable',
  props: {
    users: Object,
    label: String,
  },
  data() {
    return {
      open: false,
    };
  },
  methods: {
    openHandler() {
      this.open = this.open !== true;
    },
  },
};
</script>

<style scoped>
.openButton {
  background-image: url("../assets/addIcon.svg");
  background-position: left center;
  background-repeat: no-repeat;
}
</style>
