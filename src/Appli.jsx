import './Appli.scss';
import Entete from './Entete.jsx';
import ListeBoissons from './ListeBoissons';

export default function Appli() {
  return (
    <div className="Appli">
      <Entete/>
      <section className="contenuPrincipal">
        <ListeBoissons/>
      </section>
    </div>
  );
}
