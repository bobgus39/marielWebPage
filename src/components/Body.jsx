import Mapa from "./Mapa";
import Modal from "./Modal";
import "./Body.css";
import { NavLink } from "react-router-dom";
import WhatsappButton from "./WhatsappButton";

function Body() {
  return (
    <main>
      <div className="body">
        <div className="portada">
          <div className="textOver">
            <h2 className="fornMariu">FORN MARIU</h2>
            <NavLink to="/marielWebPage/panes">
              <button className="btnCart">Ver panes</button>
            </NavLink>
          </div>
          <img
            src="/bobgus39/marielWebPage/blob/main/img/portada.png"
            alt="panetone"
          ></img>
        </div>
        <div className="contact">
          <p>Ponte en contanto</p>
          <WhatsappButton
            phoneNumber="1234567890"
            message="Hola, estoy interesado en tu producto."
          ></WhatsappButton>
        </div>

        <div className="location">
          <p>Donde encontrarnos?</p>
          <Mapa />
        </div>
        <div className="text">
          <h1>Forners desde 1943</h1>
          <p>
            Forners de 4ª generació. Coneix un nou concepte de panadería. Pa
            natural sense additius i fermentacions llargues amb masa mare de
            cultiu. Vine a conèixer-nos a Ibi, Alacant, i gaudeix de pa i dolços
            tradicionals elaborats artesanalment.
          </p>
          <NavLink to="/marielWebPage/panes">
            <button className="btnCart">Ver panes</button>
          </NavLink>
        </div>
        <div className="modals">
          <Modal
            tittle={"¿Qué nos diferencia?"}
            value={
              "Panaderos de 4ª generación. Conoce un nuevo concepto de panadería. Pan natural sin aditivos y fermentaciones largas con masa madre de cultivo."
            }
            img={
              "https://scontent.fvlc6-1.fna.fbcdn.net/v/t39.30808-6/279969722_151101234109555_1728276028996544313_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=c83dfd&_nc_ohc=AN6qwmWZFjgAX9MDRmJ&_nc_ht=scontent.fvlc6-1.fna&oh=00_AfAkQYQvoOFebl2sjH47EQ_WnQNgB_Zdiyd4wbKogWWOfg&oe=65AA9F2B"
            }
          ></Modal>

          <Modal
            tittle={"Conócenos"}
            value={
              "Conócenos en Ibi, Alicante, y disfruta de pan y dulces tradicionales elaborados artesanalmente."
            }
            img={
              "https://scontent.fvlc6-1.fna.fbcdn.net/v/t39.30808-6/311125434_184850664068222_5591172718944745341_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=3635dc&_nc_ohc=v8Q7WDvin-gAX-9Kgnt&_nc_ht=scontent.fvlc6-1.fna&oh=00_AfCphsfcZN_kEq-vQkTqUDDsU-P9VNs7PjP0PPG4EsW_Og&oe=65AB11B5"
            }
          ></Modal>
        </div>

        <div className="dates">
          <div className=" imgContact">
            <h3>Teléfono</h3>
            <h2>722 848 892</h2>
            <a href="https://m.facebook.com/FornMariu/?fref=tag&__nodl&refsrc=deprecated&ref=external%3Awww.google.com&_rdr/%22">
              <img
                src="data:image/png;base64,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"
                alt="facebook"
              />
            </a>
            <a href="https://instagram.com/fornmariu?igshid=YmMyMTA2M2Y=%22">
              <img
                src="data:image/jpeg;base64,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"
                alt="instagram"
              />
            </a>
          </div>

          <div>
            <h3>HORARIO</h3>
            <p>De M a S de 8:00 a 14:30</p>
            <p>fornmariu@gmail.com</p>
          </div>

          <div>
            <h3>DONDE ESTAMOS</h3>
            <p>Carrer Riu de les Caixes, 61</p>
            <p>03440 · IBI · Alicante</p>
          </div>
        </div>
      </div>
      <div className="whatsappContainer">
        <WhatsappButton />
      </div>
    </main>
  );
}

export default Body;
