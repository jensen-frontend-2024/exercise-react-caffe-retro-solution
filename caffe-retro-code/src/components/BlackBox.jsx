/* eslint-disable react/prop-types */

export function BlackBox({ dataArr }) {
  return (
    <article className="black-box">
      {dataArr.map((row) => (
        <div className="row" key={row.left}>
          <span className="left">{row.left}</span>
          <span className="right">{row.right}</span>
        </div>
      ))}
    </article>
  );
}
