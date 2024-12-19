<template>
    <section class="body">
        <div class="content">
            
            Welcome to Page {{ $route.params.pageNumber }}

            <RouterView/>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        pageNumber: Number,
    }
}
</script>

<style scoped>

</style>