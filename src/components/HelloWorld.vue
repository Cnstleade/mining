<template>
  <div class="container c1">
    nihao 
    <div class="c2">
      aa
      {{name}}
      {{ss}}
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },    
  computed: {
        ...mapGetters([
            'name',
            'ss'
        ])
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .c1{
    color:red;
    .c2{
      color:green
    }
  }
</style>
