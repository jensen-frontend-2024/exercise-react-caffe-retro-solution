/* eslint-disable react/prop-types */

/*
interface ILinkProps {
  link: ILink
}
*/

export function Link({ link }) {
  return (
    <a href={link.href} className="link">
      {link.text}
    </a>
  );
}
