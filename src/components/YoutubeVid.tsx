
function YoutubeVid({ url }: { url: string }) {
    return (
        <iframe
            className="w-full h-full"
            src={url}
            title="Jazz Jackrabbit 2 - Fan Remake Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
        </iframe>
    )
}

export default YoutubeVid
