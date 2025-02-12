/* eslint-disable react/prop-types */
import { RedBox } from './RedBox';
import { BlackBox } from './BlackBox';

/*
  interfacer ISectionProps {
    data: IData
  }
*/

export function Section({ data }) {
  return (
    <section className="section" id={data.header} style={{ backgroundImage: `url(${data.image})` }}>
      <h1>{data.header}</h1>

      {data.redBoxes.map((redStr) => (
        <RedBox key={redStr}>{redStr}</RedBox>
      ))}

      <BlackBox dataArr={data.blackBox} />
    </section>
  );
}
