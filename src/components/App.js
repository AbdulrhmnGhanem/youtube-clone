import React from  'react';

import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import youtube from "../api/youtube";

class App extends React.Component{

    state = {videos: []};

    onTermSubmit = async (term) => {
        const response = await youtube.get('/', {params: {q: term}});
        this.setState({videos: response.data.items})
    };

    render() {
        return(
            <div className={"ui container"}>
                <SearchBar onTermSubmit={this.onTermSubmit}/>
                <VideoList videos={this.state.videos}/>
            </div>
        )
    }
}

export default App;