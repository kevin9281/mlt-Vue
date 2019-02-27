<template>
  <div class="header">
    <div class='wel'>{{uname}}:这是头部组件</div>
  </div>
</template>

<script>
export default {
  data(){return{
      uname:'lyy',
  }},
  methods:{

  },
  props: {
    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wel{
  width:300px;
  height:300px;
  border: 1px solid red
}
</style>
