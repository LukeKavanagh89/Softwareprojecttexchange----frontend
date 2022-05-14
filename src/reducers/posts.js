import { FETCH_ALL, UPDATE, DELETE, CREATE } from "../const/actTypes";
export default (posts = [] ,action) =>{
    if(action.type = 'CREATE'){

        //Implemeting the logic 
        switch (action.type) {
            case DELETE:
                return posts.filter((post) => post._id = action.payload);

            case UPDATE:
                return posts.map((post) => post.id === action.payload._id ? action.payload : post); 
            
            case FETCH_ALL:
                return action.payload;
            case CREATE:
                return [...posts, action.payload];
                
            default:
             return posts; 
        }

    }
}