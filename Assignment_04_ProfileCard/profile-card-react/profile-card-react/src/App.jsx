import ProfileCard from './ProfileCard.jsx';

export default function App() {
  return (
    <>
      <header className="studio-header">
        <nav className="studio-nav">
          <a className="studio-brand" href="../">
            <span aria-hidden="true">✳</span> Assignment Studio
          </a>

          <a className="studio-back" href="../">
            ← All assignments
          </a>
        </nav>
      </header>

      <main className="page">
        <div className="heading">
          <span>GET TO KNOW ME</span>
          <p>A little card, a little personality.</p>
        </div>

        <ProfileCard
          name="Twinkle Singh"
          imageUrl={`${import.meta.env.BASE_URL}profile-avatar.svg`}
          description="MCA student who enjoys building useful, friendly web experiences and learning something new every day."
        />

        <p className="footer-note">
          Made with React &amp; a sprinkle of creativity ✦
        </p>
      </main>
    </>
  );
}