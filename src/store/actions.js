/* eslint-disable no-console */
import {
    fetchNewsList, 
    fetchJobsList, 
    fetchAskList, 
    fetchUserInfo,
    fetchItemInfo,
} from '../api/index.js';

export default {
   
        FETCH_NEWS(context){
            fetchNewsList()
                .then(response => {
                    console.log(response.data);
                    context.commit('SET_NEWS', response.data);                
            })
            .catch(error => {
                console.log(error);
            })
        },
        FETCH_JOBS({commit}){
            fetchJobsList()
                .then(({data}) => {
                    console.log(data);
                    commit('SET_JOBS', data);                
            })
            .catch(error => {
                console.log(error);
            })
        } ,
        FETCH_ASK({commit}){
            fetchAskList()
                .then(({data}) => {                    
                    console.log(data);
                    commit('SET_ASK', data);                
            })
            .catch(error => {
                console.log(error);
            })
        },
        FETCH_USER({commit}, name){
            fetchUserInfo(name)
                .then(({data}) => {                    
                    console.log(data);
                    commit('SET_USER', data);                
            })
            .catch(error => {
                console.log(error);
            })
        },
        FETCH_ITEM({commit}, name){
            fetchItemInfo(name)
                .then(({data}) => {                    
                    console.log(data);
                    commit('SET_ITEM', data);                
            })
            .catch(error => {
                console.log(error);
            })
        }    
        
        
    
}