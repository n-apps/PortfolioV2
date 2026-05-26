import { Link, NavLink } from 'react-router';
import { cn } from '../lib/cn';

const HOME_PATH = '/missing-tracks-project';
const ABOUT_PATH = '/missing-tracks-project/about';

const navLink = ({ isActive }: { isActive: boolean }) =>
  cn(
    'text-sm font-semibold transition-colors duration-150 md:text-base',
    isActive ? 'text-mt-text' : 'text-mt-text-secondary hover:text-mt-text',
  );

export function TopNav() {
  return (
    <header className='w-full'>
      <div className='mx-auto flex h-14 max-w-[1024px] items-center justify-between gap-4 px-6 md:px-8'>
        <Link
          to={HOME_PATH}
          aria-label='missing from Spotify — home'
          className='shrink-0'
          data-goatcounter-click='missing-tracks-nav-wordmark'>
          <span
            className='text-lg text-mt-text md:text-xl'
            style={{ fontFamily: "'Madimi One', sans-serif" }}>
            missing from Spotify <span className='text-mt-green'>(((</span>
          </span>
        </Link>

        <nav
          aria-label='Primary'
          className='flex shrink-0 items-center gap-5 md:gap-8'>
          <NavLink
            to={HOME_PATH}
            end
            className={navLink}
            data-goatcounter-click='missing-tracks-nav-home'>
            Home
          </NavLink>
          <NavLink
            to={ABOUT_PATH}
            className={navLink}
            data-goatcounter-click='missing-tracks-nav-about'>
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
