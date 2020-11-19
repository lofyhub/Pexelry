<template>
        <div class="card" style="width: 25rem;">
        <img class="card-img-top" :src="img" :alt="attrib" style="height: 20rem;">
        <div class="card-body">
            <span><img class="img-rounded img-responsive" :src="imgcap" :alt="attrib"></span><p class="card-text">{{name}}</p>
            
        </div>
        </div>
    
</template>
<script>
export default {
    name:'Photos',
    props:['img', 'name','attrib', 'imgcap']
    
}
</script>
<style scoped>
.card{
    margin: 5px 2px;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    height: 25rem;
}
.img-rounded{
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    padding: 0;
    margin: 0;
}
p{
    display: inline-block;
    padding-left: 25px;
}

</style>