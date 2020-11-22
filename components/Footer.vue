<template>
<div class="outer-footer">
        <div class="footer bg-light">
        <h4>this is the footer</h4>


    </div>
    <div class="light-footer">
        <ul>
            <li><a href="http://" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        </ul>
        <ul>
            <li><a href="http://" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
        </ul>
        <ul>
            <li><a href="http://" target="_blank" rel="noopener noreferrer">Youtube</a></li>
        </ul>
        <ul>
            <li><a href="http://" target="_blank" rel="noopener noreferrer">Github</a></li>
        </ul>

    </div>

</div>

</template>
<script>
export default {
    
}
</script>
<style scoped>
.footer{
    width: 1120px;
    margin: 0 auto;
    padding: 0;
    border: 0;
}
.light-footer{
    background: rgb(18, 14, 22);
    height: 5vh;
    width: 100%;
    display: flex;
    justify-content: center;
}
ul{
    list-style: none;
    padding-top: 0.7rem;
}
ul li a{
    text-decoration: none;
}

</style>