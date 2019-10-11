import axios from "axios"

export default {
    actions: {
        async fetchEndpoitn(ctx, endpoint) {
            try {
                let webApiUrl = `https://the-one-api.herokuapp.com/v1/${endpoint}`;
                let tokenStr = 'fnqrQ4Qm4DuTBMcCZSMs';
                const { data: { docs } } = await axios.get(webApiUrl, { headers: { "Authorization": `Bearer ${tokenStr}` } });
                console.log(docs);
                ctx.commit('updateBooks', docs)
            } catch (e) {
                console.log(e.message);
            }
                return Promise.resolve()
        },
        async fetchBookById(id) {
            try {
                let webApiUrl = `https://the-one-api.herokuapp.com/v1/book/${id}/chapter`;
                let tokenStr = 'fnqrQ4Qm4DuTBMcCZSMs';
                const res = await axios.get(webApiUrl, { headers: { "Authorization": `Bearer ${tokenStr}` } });
                console.log(res)
            } catch {
                console.log(e.message)
            }
            return Promise.resolve()
        }
    },
    mutations: {
        updateBooks(state, books) {
            state.books = books
        }
    },
    state: {
        books: []
    },
    getters: {
        allBooks: state => state.books,
        bookById(state) {
            return bookId => {
                return state.books.find(book => book._id === bookId)
            }
        }
    }
}