import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import footballvideo from '../../../assets/video/football.mp4';
import './VideolivePc.css';

const VideoLivePc = ({ data }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const m3u8Url = typeof data === 'string' ? data : data[1]?.cdnlink;
    const handleUserInteraction = () => {
        if (videoRef.current && !isPlaying) {
            videoRef.current.muted = false;
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    useEffect(() => {
        const video = videoRef.current;

        if (video && m3u8Url) {
            // Check if the URL ends with .mp4
            if (m3u8Url.endsWith('.mp4')) {
                // Set the video source directly to the MP4 URL
                video.src = m3u8Url;
                video.muted = false;
                video.play().catch(() => {
                    console.log("autoplay bị chặn");
                });
            } else if (Hls.isSupported()) {
                // If HLS is supported, use it for .m3u8 streams
                const hls = new Hls();
                hls.loadSource(m3u8Url);
                hls.attachMedia(video);

                hls.on(Hls.Events.MANIFEST_PARSED, function () {
                    video.muted = false;
                    video.play().catch(() => {
                       
                    });
                });

                return () => hls.destroy();
            } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                // Fallback for iOS devices that support HLS natively
                video.src = m3u8Url;
                video.muted = false;
                video.play().catch(() => {
                   
                });
            } else {
                // If none of the above, fallback to the default MP4 video
                video.src = footballvideo;
                video.muted = false;
                video.play().catch(() => {
                   
                });
            }
        }
    }, [m3u8Url]);

    return (
        <div>
            <video
                ref={videoRef}
                // controls
                playsInline
                autoPlay
                muted
                width="100%"
                height="460px"
                className="custom-video_Pc"
                // onClick={handleUserInteraction}
                // onPlay={() => setIsPlaying(true)}
                // onPause={() => setIsPlaying(false)}
            >
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoLivePc;
