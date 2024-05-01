import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGithub, FaGoogle,FaFacebook,FaTwitter,FaInstagram,FaWhatsapp } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import { AuthContext } from '../Contexts/UserContext';
import { GoogleAuthProvider } from 'firebase/auth';



const Rightsidenav = () => {
    const {ProviderLogin} = useContext(AuthContext)

    const googleProvider = new GoogleAuthProvider ()
    const handleGoogleSignIn = () =>{
        ProviderLogin(googleProvider)

        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))

    }

    return (
        <div>
                 <ButtonGroup vertical>
      <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Log in With Google</Button>
      <Button variant="outline-dark"><FaGithub></FaGithub> Log in With Github</Button>

  
     </ButtonGroup>

     <h5>
            Find us on
        </h5>
        <ListGroup>
      <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook>Facebook</ListGroup.Item>
      <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter>Twitter</ListGroup.Item>
      <ListGroup.Item className='mb-2'><FaInstagram></FaInstagram>Instagram</ListGroup.Item>
      <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp>Whatsapp</ListGroup.Item>

    </ListGroup>


        </div>
    );
};

export default Rightsidenav;