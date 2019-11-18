import React, { useEffect, useState } from "react";
import citiesJson from "./cities.json";

export const List = () => {
  const [filter, setFilter] = useState("All");
  const [cities, setCities] = useState([]);

  useEffect(() => {
    setCities(
      citiesJson.filter(city => filter === "All" || city.continent === filter)
    );
  }, [filter]);

  return (
    <div className="example">
      <h3>City list</h3>
      <div className="button-list">
        {["America", "Europa", "Asia", "Africa", "Oceania", "All"].map(
          continent => (
            <button
              key={continent}
              style={{
                backgroundColor: filter === continent ? "lightgrey" : "white"
              }}
              onClick={() => setFilter(continent)}
            >
              {continent.toUpperCase()}
            </button>
          )
        )}
      </div>
      {cities.map(city => (
        <p key={city.name}>
          <strong>{city.name}</strong> - <small>{city.country}</small>
        </p>
      ))}
    </div>
  );
};

// export const List = () => {
//   const [filter, setFilter] = React.useState("All");
//   const [cities, setCities] = React.useState(citiesJson);

//   React.useEffect(() => {
//     const matchFilters = city => {
//       return filter === "All" || city.continent === filter;
//     };
//     const filteredCities = citiesJson.filter(matchFilters);
//     setCities(filteredCities);
//   }, [filter]);

//   return (
//     <div className="example">
//       <h3>City list</h3>
//       <div className="button-list">
//         {["America", "Europa", "Asia", "Africa", "Oceania", "All"].map(
//           continent => (
//             <button
//               key={continent}
//               style={{
//                 backgroundColor: filter === continent ? "lightgrey" : "white"
//               }}
//               onClick={() => setFilter(continent)}
//             >
//               {continent.toUpperCase()}
//             </button>
//           )
//         )}
//       </div>
//       {cities.map(city => (
//         <p key={city.name}>
//           <strong>{city.name}</strong> - <small>{city.country}</small>
//         </p>
//       ))}
//     </div>
//   );
// };
