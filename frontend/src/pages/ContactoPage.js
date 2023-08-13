import '../styles/components/pages/ContactoPage.css';

const ContactoPage = (props) => {
    return(
        <main className="holder contacto">
        <div>
            <h2>Contacto Rápido</h2>
            <form action="" method="" className="formulario">
                <p>
                    <label for="nombre">Nombre</label>
                    <input type="text" name="" id=""/>
                </p>
                <p>
                    <label for="email">Email</label>
                    <input type="email" name="" id=""/>
                </p>
                <p>
                    <label for="telefono">Telefono</label>
                    <input type="text" name="" id=""/>
                </p>
                <p>
                    <label for="mensaje">Mensaje</label>
                    <textarea name=""></textarea>
                </p>
                <p>
                    <input type="submit" value="Enviar"/>
                    <input type="reset" value="Borrar"/>
                </p>
            </form>
        </div>
        <div className="datos">
            <h2>Otras vías de comunicación</h2>
            <p>También puede comunicarse con nosotros usando los siguientes medios</p>
            <ul>
                <li>Teléfono: 43242388</li>
                <li>Email: contacto@futureaviation.com.ar</li>
                <li>Ubicación: </li><a href=""><i className="fa-solid fa-location-dot"></i></a> 
            </ul>
        </div>
    </main>
    );
}

export default ContactoPage;