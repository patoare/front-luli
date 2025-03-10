import background from '../assets/luli-bckg.jpg';
import profilePic from '../assets/foto1.jpg';
import "../App.css"

const HomePage = () => {
  return (
    <div className='cuerpo'>
      <img src={background} alt='fondo' />
      <div className='about-container'>
      <div className='about-txt'>
      <h2>About me</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint aliquid asperiores accusamus veniam explicabo consequuntur necessitatibus aut molestiae? Animi, quod non? Tenetur, obcaecati asperiores! Voluptates at non ad exercitationem unde?</p>
      </div>
      </div>
    </div>
  );
};

export default HomePage;
