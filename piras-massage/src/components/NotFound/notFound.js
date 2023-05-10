import './notFound.css';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <>
            <main className="Not__Found">
                <div className="text">
                    <h1 className="number">404</h1>
                    <p className="sorry">Oops, sorry ! Page not found</p>
                </div>

                <Link to={`/`}>
                    <button className="button">Retour à l'accueil</button>
                </Link>
            </main>
        </>
    );
}

export default NotFound;