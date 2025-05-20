export default function VideoList() {
  const recommendedVideos = [
    {
      id: 1,
      title: "How to Redesign YouTube in 24 Hours",
      thumbnail: "https://placehold.co/600x400/red/white",
      channel: "Design Masters",
      views: "124K",
      date: "3 days ago",
      duration: "12:45",
    },
    {
      id: 2,
      title: "React Hooks - Complete Guide for Beginners",
      thumbnail: "https://placehold.co/600x400/blue/white",
      channel: "JS Masters",
      views: "85K",
      date: "1 week ago",
      duration: "18:22",
    },
    {
      id: 3,
      title: "CSS Grid vs Flexbox - When to Use Each?",
      thumbnail: "https://placehold.co/600x400/green/white",
      channel: "CSS Ninja",
      views: "42K",
      date: "2 weeks ago",
      duration: "10:15",
    },
    {
      id: 4,
      title: "Developer Productivity Secrets Revealed",
      thumbnail: "https://placehold.co/600x400/purple/white",
      channel: "Dev Productivity",
      views: "102K",
      date: "1 month ago",
      duration: "15:30",
    },
    {
      id: 5,
      title: "Web Animation Masterclass - From Basics to Advanced",
      thumbnail: "https://placehold.co/600x400/orange/white",
      channel: "Animation Master",
      views: "55K",
      date: "3 weeks ago",
      duration: "20:18",
    },
    {
      id: 6,
      title: "Building a Full-Stack App with Next.js and Firebase",
      thumbnail: "https://placehold.co/600x400/teal/white",
      channel: "Full Stack Heroes",
      views: "78K",
      date: "5 days ago",
      duration: "32:47",
    },
    {
      id: 7,
      title: "UI/UX Design Trends for 2023",
      thumbnail: "https://placehold.co/600x400/pink/white",
      channel: "UX Collective",
      views: "63K",
      date: "2 months ago",
      duration: "14:52",
    },
    {
      id: 8,
      title: "Responsive Design - Mobile First Approach",
      thumbnail: "https://placehold.co/600x400/brown/white",
      channel: "Responsive Guru",
      views: "91K",
      date: "3 weeks ago",
      duration: "17:33",
    },
    {
      id: 9,
      title: "TypeScript for React Developers",
      thumbnail: "https://placehold.co/600x400/gray/white",
      channel: "TypeScript Pro",
      views: "112K",
      date: "1 month ago",
      duration: "25:14",
    },
    {
      id: 10,
      title: "Build a YouTube Clone with React & Firebase",
      thumbnail: "https://placehold.co/600x400/navy/white",
      channel: "Clone Builders",
      views: "143K",
      date: "2 months ago",
      duration: "46:29",
    },
  ];

  return (
    <div className="video-list">
      <h3 className="video-list-title">Recommended Videos</h3>
      <div className="video-list-container">
        {recommendedVideos.map((video) => (
          <div key={video.id} className="recommended-video">
            <div className="recommended-thumbnail">
              <img src={video.thumbnail} alt={video.title} />
              <span className="duration">{video.duration}</span>
            </div>
            <div className="recommended-info">
              <h4 className="recommended-title">{video.title}</h4>
              <div style={{ paddingBottom: "0.3rem" }}>
                <p className="recommended-channel">{video.channel}</p>
                <p className="recommended-stats">
                  {video.views} views • {video.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
