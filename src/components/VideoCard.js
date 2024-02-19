const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  console.log(info);
  return (
    <div className="p-2 w-72">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
      <div>
        <div className="font-bold">{title}</div>
        <div>
          <span>{channelTitle}</span>
          <span> | {statistics.viewCount} views</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
