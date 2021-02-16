import './ListeBoissons.scss';
import Boissons from "./Boisson";
import tabBoissons from './data/boissons.json';

export default function ListeBoissons() {
    return(
        <div className="liste">
            <ul>
                {tabBoissons.map(prd => 
                <Boissons id={prd.id} titre={prd.titre} couleur={prd.couleur} dateMod={prd.dateMod}  key={prd.id} />
                )}
            </ul>
        </div>
    )
}