import './Boisson.scss';

export default function Boissons(items) {
  return(
    <li className="Boisson">
    <img src={'photos/' + items.id + '.jpg'} alt=""/>
    <div className="info">
      <p className="titre">{items.titre}</p>
      {/* <p className="couleur">{items.couleur}</p> */}
      <p className="date">Modifié : {items.dateMod}</p>
    </div>
  </li>
  );
}