const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 w-72 group">
      <div className="overflow-hidden rounded-lg">
        <img
          className=" group-hover:scale-105 transition-all duration-300"
          src={thumbnails.medium.url}
          alt="thumbnail"
        />
      </div>
      <div>
        <div className="font-bold">{title}</div>
        <div>
          <span className="">{channelTitle}</span>
          <span>
            ﹒
            {statistics.viewCount > 1000
              ? Math.floor(statistics.viewCount / 1000) + "k "
              : statistics.viewCount}
            views
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
