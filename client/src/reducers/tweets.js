const tweets = (tweets =[], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...tweets,action.payload];
        default:
            return tweets;
    }
}

export default tweets;