<template>
    <v-container>
        <v-layout>
            <v-flex>
                <h1>BOOKS</h1>
                <v-card
                    class="mx-auto"
                    max-width="344"
                    v-for="(book, i) in allBooks"
                    :key="i"
                    @click="goToBook(book._id)"
                >
                    <v-card-text>
                        <div class="display-1 text--primary">{{ book.name }}</div>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    computed: {
        ...mapGetters({
            allBooks: 'allBooks'
        })
    },
    methods: {
        ...mapActions({
            fetchEndpoitn: 'fetchEndpoitn'
        }),
        goToBook(id) {
            this.$router.push(`/book/${id}`)
        }
    },
    async mounted() {
        this.fetchEndpoitn('book')
    },
}
</script>

<style lang="scss" scoped>
h1 {
    text-align: center;
}
    .v-card {
        margin-bottom: 15px !important;
    }
</style>