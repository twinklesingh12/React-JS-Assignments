import ProfileCard from './ProfileCard.jsx';

export default function App() {
  return (
    <main className="page">
      <div className="heading">
        <span>GET TO KNOW ME</span>
        <p>A little card, a little personality.</p>
      </div>

      <ProfileCard
        name="Twinkle Singh"
        imageUrl="/profile-avatar.svg"
        description="MCA student who enjoys building useful, friendly web experiences and learning something new every day."
      />

      <p className="footer-note">Made with React & a sprinkle of creativity ✦</p>
    </main>
  );
}
