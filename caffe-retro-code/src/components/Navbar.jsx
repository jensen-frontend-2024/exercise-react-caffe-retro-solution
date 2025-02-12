/* eslint-disable react/prop-types */
import { Link } from './Link';

/*
interface INavbarProps {
  links: ILink[]
}
*/

export function Navbar({ links }) {
  return (
    <nav className="navbar">
      {links.map((link) => (
        <Link key={link.id} link={link} />
      ))}
    </nav>
  );
}
