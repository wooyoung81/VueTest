import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'

Vue.use(VueRouter);

export const router = new VueRouter({
    mode : 'history', // url # 없애기 
    routes : [
        {
            // path : url 주소 
            path : '/',
            // component : url 주소로 갔을 때 표시될 컴포넌트 
            redirect : '/news',
        },
        {
            // path : url 주소 
            path : '/news',
            // component : url 주소로 갔을 때 표시될 컴포넌트 
            component : NewsView,
        },
        {
            path : '/ask',
            component : AskView,
        },
        {
            path : '/jobs',
            component : JobsView,
        },
        {
            path : '/user/:id',
            component : UserView,
        },
        {
            path : '/item/:id',
            component : ItemView,
        },
    ]
});


