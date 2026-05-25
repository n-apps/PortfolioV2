export function TopNav() {
  return (
    <header className='w-full border-b border-transparent'>
      <div className='mx-auto flex h-14 max-w-[1024px] items-center px-6 md:px-8'>
        <a href='#top' aria-label='Missing Tracks Watchlist — home'>
          <span
            className='text-xl text-mt-text'
            style={{ fontFamily: "'Madimi One', sans-serif" }}>
            missing from Spotify <span className='text-mt-green'>(((</span>
          </span>
        </a>
      </div>
    </header>
  );
}
