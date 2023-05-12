import Footer from '../Footer/footer';
import Header from '../Header/header';
import './degree.css';
import IconFlower from '../../data/pictures/icons8-flower-64.png';

function Degree() {
    return (
        <>
            <Header />
                <main className="container__degree">
                    <h1 className="title__degree">Voici mes diplômes et qualifications</h1>
                    <article className="degrees">

                        <section className="degree"> 
                            <img className="icon__flower" src={IconFlower} alt="Icon d'une fleur"></img>
                            <p className="detail__degree">Certificat de Thaï Foot Reflexology<br /><span className="school">Institut A-Zen-Day, Paris</span></p>
                        </section>

                        <section className="degree">
                            <img className="icon__flower" src={IconFlower} alt="Icon d'une fleur"></img>
                            <p className="detail__degree">Diplôme de Thérapeute en Nuad Bo-Rarn Thaï Massage<br /><span className="school">ITM (International Training Massage school), Thaïlande</span></p>
                        </section>

                        <section className="degree">
                            <img className="icon__flower" src={IconFlower} alt="Icon d'une fleur"></img>
                            <p className="detail__degree">Diplômes Hot Stone Healing Massage et Aroma Herba Oil Massage<br /><span className="school">ITM-Spa Mantra, Thaïlande</span></p>
                        </section>

                        <section className="degree">
                            <img className="icon__flower" src={IconFlower} alt="Icon d'une fleur"></img>
                            <p className="detail__degree">Certificats de Reïki et d'Indian Head Massage<br /><span className="school">Centre Musha Matombo à Harare, Zimbabwe</span></p>
                        </section>

                        <section className="degree">
                            <img className="icon__flower" src={IconFlower} alt="Icon d'une fleur"></img>
                            <p className="detail__degree">Certificat de Shiatsu sur chaise "Amma Assi"<br /><span className="school">Shiatsu Thema à Versaille, France</span></p>
                        </section>

                        <section className="degree">
                            <img className="icon__flower" src={IconFlower} alt="Icon d'une fleur"></img>
                            <p className="detail__degree">Certificat de Shiatsu Esthétique "du visage"<br /><span className="school">Shiatsu Thema à Versaille, France</span></p>
                        </section>

                        <section className="degree">
                            <img className="icon__flower" src={IconFlower} alt="Icon d'une fleur"></img>
                            <p className="detail__degree">Certificat de Reïki 2 puis 3 niveau maitre<br /><span className="school">Centre MundoReïki Hendaye Paris, France</span></p>
                        </section>
                        
                    </article>
                </main>
            <Footer />
        </>
    );
}

export default Degree;