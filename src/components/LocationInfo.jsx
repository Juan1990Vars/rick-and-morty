const LocationInfo = ( { location } ) => {
  return (
    <div className="location">
      <article className="location__gral">
        <h2 className="location__name">{location?.name}</h2>
        <br />
        <ul className="location__list">
            <li className="location__t"><span>Type:</span><br /><span className="location__ty">{location?.type}</span></li>
            <li className="location__d"><span>Dimension:</span><br /><span className="location__di">{location?.dimension || 'Unknown'}</span></li>
            <li className="location__p"><span>Population:</span><br /><span className="location__po">{location?.residents.length}</span></li>
        </ul>
    </article>
    </div>
  )
}

export default LocationInfo