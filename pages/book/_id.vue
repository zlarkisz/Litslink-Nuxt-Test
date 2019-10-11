<template>
    <v-container>
        <v-layout>
            <v-flex d-flex flex-column justify-center align-center>
                <h1 class="book--title">Title of the book: "{{book.name}}"</h1>
                <v-btn color="primary" large dark width="150">
                    All chapters
                </v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    props: ['id'],
    computed: {
        book() {
            const id = this.id;
            return this.$store.getters.bookById(id)
        }
    },
    methods: {
        ...mapActions({
            fetchBookById: 'fetchBookById'
        })
    },
    async mounted() {
        const id = `5cf5805fb53e011a64671582`;
        // const id = window.location.href.split('/').pop();
        this.fetchBookById(id)
    }
}
</script>

<style scoped>
    .book--title {
        margin-top: 20% !important;
    }
</style>