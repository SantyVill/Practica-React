import React, { Component } from 'react';
import { TwitterFollowCard } from './TwitterFollowCard';

class App extends Component {
    render() {
        return (
            <>
                <TwitterFollowCard userName={"midudev"} name={"Santiago Villagra"} isFollowing={true} />
                <TwitterFollowCard userName={"Santiago"} name={"Enzo Villagra"} isFollowing={true} />
                <TwitterFollowCard userName={"mauri"} name={"Mauricio Villagra"} isFollowing={false} />
            </>
        );
    }
}

export default App;
