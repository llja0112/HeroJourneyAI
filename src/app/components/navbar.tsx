import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 max-w-lg mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            HeroJourney
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><Link href="/learn">Learn</Link></li>
            <li><Link href="/plan">Plan</Link></li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl text-teal-800">HeroJourney</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/learn">Learn</Link></li>
          <li><Link href="/plan">Plan</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Anthony</a>
      </div>
    </div>
  )
}
