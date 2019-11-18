import React, { Component } from "react";
import citiesJson from "./cities.json";

export class List extends Component {
  state = {
    filter: "All",
    cities: citiesJson
  };

  filterByContinent = filter => {
    this.setState({ filter });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.filter !== prevState.filter) {
      this.setState({ cities: citiesJson.filter(this.matchFilters) });
    }
  }

  matchFilters = city => {
    return this.state.filter === "All" || city.continent === this.state.filter;
  };

  render() {
    return (
      <div className="example">
        <h3>City list</h3>
        <div className="button-list">
          {["America", "Europa", "Asia", "Africa", "Oceania", "All"].map(
            continent => (
              <button
                key={continent}
                style={{
                  backgroundColor:
                    this.state.filter === continent ? "lightgrey" : "white"
                }}
                onClick={this.filterByContinent.bind(null, continent)}
              >
                {continent.toUpperCase()}
              </button>
            )
          )}
        </div>
        {this.state.cities.map(city => (
          <p key={city.name}>
            <strong>{city.name}</strong> - <small>{city.country}</small>
          </p>
        ))}
      </div>
    );
  }
}

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
