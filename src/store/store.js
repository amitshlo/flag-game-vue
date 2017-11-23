import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: { 
        usersLocation: []
    },
    getters: {
        getUsersLocation: state => state.usersLocation
    },
    mutations: {
        createUser: (state, args) => {
            state.usersLocation.push(args)
        },
        editUser: (state, args) => {
            state = state.usersLocation.map((user) => {
                if (user.color === args.color){
                    return args
                }
                return user
            })
        }
    }
});
