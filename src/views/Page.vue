<template>
    <section class="body">
        <div class="content">
            
            Welcome to Page {{ $route.params.pageNumber }}
            <RouterView/>
            <hr>
            <p v-show="haveMessage">
                Message from Page {{ store.lastPage }} : {{ getMessage }}
            </p>
        </div>
    </section>
</template>

<script>
import { useMessageStore } from '@/store/messageStore';

export default {
    setup() {
        const store = useMessageStore();
        return {
            store,
        }
    },
    props: {
        pageNumber: Number,
    },

    computed: {
        getMessage() {
            const fromPage = this.store.lastPage;
            const message = this.store.pages[fromPage];
            if(message) {
                return message;
            }
            return "";
        },

        haveMessage() {
            const fromPage = this.store.lastPage;

            if(this.$route.params.pageNumber === fromPage) {
                return false;
            }

            if(this.store.pages[fromPage]) {
                return true;
            }

            return false;
        }
    }
}
</script>

<style scoped>

</style>