import React from "react"
import SearchBar from "./SearchBar"
import youtube from "../apis/youtube"
import VideoList from "./VideoList"
import VideoDetail from "./VideoDetail"
import Spinner from "./Spinner"

class App extends React.Component{
    state = { videos: [] , selectedVideo: null }

    componentDidMount(){
        this.onTermSubmit("React Tutorials")
    }

    onTermSubmit = async (term)=>{
        const response = await youtube.get("/search", {
            params:{
                q: term
            }
        })
        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }

    onVideoSelect = (video)=>{
        this.setState({ selectedVideo: video })
    }

    render(){
        if (this.state.videos.length === 0){
            return (
                <div>
                    <Spinner />
                </div>
            )
        }
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/> 
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div> 
            </div> 
            
        )
    }
    
}

export default App