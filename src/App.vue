<template> 
          <div>
            <router-view name="page-header"></router-view>
            <router-view />
            <router-view  name="page-footer"></router-view>
          </div>
        
</template>

<script>

export default {
  name: "App",
  components: {
    
  }
};
</script>
<style>

</style>
