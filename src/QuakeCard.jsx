// react basic 4: props. the parent pass data in, we pull it out with { }
function QuakeCard({ mag, place, depth, time, link }) {
  return (
    <article className="bg-fog text-charcoal rounded-lg p-4 border-l-8 border-turq">
      <h3 className="text-xl font-bold m-0">Magnitude {Number(mag).toFixed(1)}</h3>
      <p className="my-1">{place}</p>
      <p className="my-1 text-sm">Depth: {depth} km</p>
      <p className="my-1 text-sm">{new Date(time).toLocaleString()}</p>
      <a href={link} target="_blank" rel="noreferrer" className="text-sm underline text-charcoal">
        more info
      </a>
    </article>
  );
}

export default QuakeCard;
