const tweets = (tweets =[], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'FETCH_GLOBAL':
            console.log(action.payload.tweets);
            return action.payload.tweets;
        case 'CREATE':
            return [...tweets,action.payload];
        default:
            return tweets;
    }
}

export default tweets;