<template>
        <div class="card" style="width: 20rem;">
        <img class="card-img-top" :src="img" :alt="attrib">
        <div class="card-body">
            <p class="card-text">{{name}}</p>
        </div>
</div>
    
</template>
<script>
export default {
    name:'Photos',
    props:['img', 'name','attrib']
    
}
</script>
<style scoped>

</style>