// Les fonctionnalités attendues sont les suivantes : 
// Lister les films dans des cartes avec: le titre en gras, la catégorie et une jauge type Youtube indiquant le ratio likes/dislikes (voir étape 5). 
// Les cartes doivent être côtes à côtes et responsive. C'est à dire que lorsque la fenêtre se réduit, les cartes sautent à la ligne suivante.
// Version simple: récupérer les données sans utiliser l'asynchrone (voir dans le fichier movie.js)

import movies from "./movies.js";
import React from "react";

class MovieCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { movies: movies }
    }

    render() {
        return (
            <>
                {this.state.movies.map((elem, index) => {
                    return (
                        <div>
                            <h1>{elem.title}</h1>
                            <p>{elem.category}</p>
                            <p>{elem.likes}</p>
                            <p>{elem.dislikes}</p>
                        </div>)
                }) 
                }
            </>
        )
    }
}
export default MovieCard;



