class StubAPI {
    constructor() {
        this.favoriteMovies = [];
        this.watchList = [];
        this.follows = [];
    }

    add(movie) {
        this.favoriteMovies.push(movie);
    }

    addWatchList(movie){
        this.watchList.push(movie);
    }
    addFollows(person){
        this.follows.push(person);
    }

    unfollow(person){
        for(var i = 0; i<this.follows.length;i++){
            if(this.follows[i].id === person.id){
                this.follows.splice(i,1);
            }
        }
    }

    getAll() {
        return this.favoriteMovies;
    }
    
    getAllWatchList(){
        return this.watchList;
    }

    getAllFollows(){
        return this.follows;
    }

    
}

export default new StubAPI();