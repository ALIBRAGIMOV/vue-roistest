<template>
  <div id="app">
    <modal-form class="ml-12 mb-12"/>
    <the-table/>
  </div>
</template>

<script>
import TheTable from './components/TheTable.vue';
import ModalForm from './components/ModalForm.vue';

export default {
  name: 'App',
  components: {
    ModalForm,
    TheTable,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.tableWrapper{

  display: flex;
  flex-flow: column wrap;
}

</style>
