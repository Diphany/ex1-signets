import './Entete.scss';

function Entete() {
    let image = "";
    return (
        <header className="Entete">
            <div className="titre">Signets</div>
            <div>
                <div className="nomUtilisateur">Diphany Chea <img className="photoProfil" src="photos/pfp.png" alt=""/></div>
            </div>
            
        </header>
    )
}

export default Entete;