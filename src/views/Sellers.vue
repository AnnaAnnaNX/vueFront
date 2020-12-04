<template>
  <v-layout row wrap>
    <v-flex text-xs-center>
      <!-- header -->
      <h1 class="primary--text display-3 font-weight-medium my-3">Sellers</h1>
      <!-- main -->
      <!-- {{ sellers }} -->
      <table>
        <tr>
          <th>name</th>
          <th>phone</th>
          <th>products</th>
        </tr>
        <tr v-for="seller in sellers">
          <td>{{ seller.name }}</td>
          <td>{{ seller.phone }}</td>
          <td>{{ seller.products
             && seller.products
              .map((el) => (el.title))
              .join(', ')
            }}</td>
        </tr>
      </table>
      <!-- footer -->
      <!-- <footer-info></footer-info> -->
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions } from 'vuex'
import TodoItem from '@/components/TodoItem.vue'
import FooterInfo from '@/components/FooterInfo.vue'

export default {
  components: {
    FooterInfo
  },
  data () {
    return {
    }
  },
  computed: {
    sellers () {
      return this.$store.state.sellers
    },
  },
  beforeCreate () {
    // `1` is the ID of the book we want to fetch.
    this.$store.dispatch('fetchSellers')
  },
  methods: {
    ...mapActions([
      'toggleAll',
      'clearCompleted'
    ]),
    addTodo () {
      const text = this.newTodo.trim()
      if (text) {
        this.$store.dispatch('addTodo', text)
      }
      this.newTodo = ''
    }
  },
  filters: {
    capitalize: s => s.charAt(0).toUpperCase() + s.slice(1)
  }
}
</script>

<style lang="stylus">
h1
  opacity: 0.3
.v-text-field .v-input__slot
  padding: 0 !important
</style>
