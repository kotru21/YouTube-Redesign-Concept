export default function VideoList() {
  const recommendedVideos = [
    {
      id: 1,
      title: "Как создать редизайн YouTube за 24 часа",
      thumbnail: "https://placehold.co/600x400/red/white",
      channel: "Design Masters",
      views: "124K",
      date: "3 дня назад",
      duration: "12:45",
    },
    {
      id: 2,
      title: "React Hooks - полное руководство для начинающих",
      thumbnail: "https://placehold.co/600x400/blue/white",
      channel: "JS Masters",
      views: "85K",
      date: "1 неделю назад",
      duration: "18:22",
    },
    {
      id: 3,
      title: "CSS Grid vs Flexbox - когда что использовать?",
      thumbnail: "https://placehold.co/600x400/green/white",
      channel: "CSS Ninja",
      views: "42K",
      date: "2 недели назад",
      duration: "10:15",
    },
    {
      id: 4,
      title: "Секреты продуктивности разработчика",
      thumbnail: "https://placehold.co/600x400/purple/white",
      channel: "Dev Productivity",
      views: "102K",
      date: "1 месяц назад",
      duration: "15:30",
    },
    {
      id: 5,
      title: "Полное руководство по анимациям в веб-разработке",
      thumbnail: "https://placehold.co/600x400/orange/white",
      channel: "Animation Master",
      views: "55K",
      date: "3 недели назад",
      duration: "20:18",
    },
    {
      id: 6,
      title: "Полное руководство по анимациям в веб-разработке",
      thumbnail: "https://placehold.co/600x400/orange/white",
      channel: "Animation Master",
      views: "55K",
      date: "3 недели назад",
      duration: "20:18",
    },
    {
      id: 5,
      title: "Полное руководство по анимациям в веб-разработке",
      thumbnail: "https://placehold.co/600x400/orange/white",
      channel: "Animation Master",
      views: "55K",
      date: "3 недели назад",
      duration: "20:18",
    },
  ];

  return (
    <div className="video-list">
      <h3 className="video-list-title">Рекомендованные видео</h3>
      <div className="video-list-container">
        {recommendedVideos.map((video) => (
          <div key={video.id} className="recommended-video">
            <div className="recommended-thumbnail">
              <img src={video.thumbnail} alt={video.title} />
              <span className="duration">{video.duration}</span>
            </div>
            <div className="recommended-info">
              <h4 className="recommended-title">{video.title}</h4>
              <p className="recommended-channel">{video.channel}</p>
              <p className="recommended-stats">
                {video.views} просмотров • {video.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
