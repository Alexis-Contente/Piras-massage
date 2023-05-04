import './home.css';
import ImgHome from '../../data/pictures/massage2.jpg'

function Home() {
    return (
        <body>
            
            <h1 className="titre">Cabinet de massage et de soin énergétique à Paris</h1>
            
            <p className="intro">Les massages et les soins énergétiques ne sont pas une pratique nouvelle, puisqu'ils sont utilisés depuis des milliers d'années. Ces séances aident à renforcer le système immunitaire, soulager le stress et l'anxiété ou retrouver énergie et vitalité. Entre le travail, la maison, les enfants, l’école, les activités extrascolaires, le shopping... Le rythme de vie actuel et les journées de travail marathon nous font vivre des épisodes de nervosité, d'insomnie, de stress et d'anxiété. Avec ces niveaux de stress et d'anxiété, il n'est pas surprenant que la plupart d'entre nous souffrent de contractures, non seulement physiques mais aussi psychologiques, qui causent des blocages énergétiques. Un massage professionnel est en mesure de vous libérer de ces maux.
            
            

            Pour réserver vos séances avec un thérapeute bien-être à Paris, contactez Piras massage. Du lundi au dimanche, de 10h à 20h, je vous propose des soins de qualité au 47 rue Henri Barbus pour vous détendre et vous revigorer.</p>

            <img src={ImgHome} alt="Espace détente avec pierre et fleures"></img>

        </body>
    );
}

export default Home;