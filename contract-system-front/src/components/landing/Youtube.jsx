import React, {useState, useEffect} from "react";
import axios from "axios";


export default function Youtube() { 
    
const APIKey = "AIzaSyBk_VgvKLnFSCVK7xxHOGr-J8KvhJ_MA8w";    

const [video, setVideo] = useState([]);

useEffect(() => {
        const random = Math.floor(Math.random() * 5);

        axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=contract-systems&key=${APIKey}`)
        .then((response) => {
            setVideo(response.data.items[random]);
            console.log(response.data.items[random]);
        })
        .catch((error) => {
            console.log(error);
        })
        
    }, [])


    return (
        <>
        <div style={{ backgroundColor: "#f5f5f5", padding: "20px" }}>

            <div className="container" >
                <h2 className="text-center ">Learn more about CMS</h2>
            {video.id && video.snippet ? (
                <iframe
                    width="90%"
                    height="515"
                    src={`https://www.youtube.com/embed/${video.id.videoId}`} // Embed YouTube video using videoId
                    title={video.snippet.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            ) : (
                <iframe
                    width="90%"
                    height="515"
                    src="https://www.youtube.com/embed/Npt0sYneOfs" // Static fallback video
                    title="Static Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            )}
            </div>
        </div>

        </>
    )

}