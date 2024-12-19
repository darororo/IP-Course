<template>
    <section class="body">
        <div class="section-menu">
            <router-link :to="`/page/${$route.params.pageNumber}/section/1`">Section 1</router-link>
            <router-link :to="`/page/${$route.params.pageNumber}/section/2`">Section 2</router-link>
            <router-link :to="`/page/${$route.params.pageNumber}/section/3`">Section 3</router-link>
        </div>

        <div class="content">
            
            Welcome to Page {{ $route.params.pageNumber }}
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