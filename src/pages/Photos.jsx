import foto1 from '../assets/foto1.jpg'
import foto2 from '../assets/foto2.jpg'

const Photos = () => {
    return (
        <div className="general">
        <aside>
            <h4>OLIMPO</h4>
            <h4>AMICITIA</h4>
            <h4>OLIMPO</h4>
            <h4>AMICITIA</h4>
            <h4>OLIMPO</h4>
            <h4>AMICITIA</h4>
            <h4>OLIMPO</h4>
            <h4>AMICITIA</h4>
            <h4>OLIMPO</h4>
            <h4>AMICITIA</h4>

            </aside>
        <div className="cuerpo-photo">
            
            <div><img src={foto1} alt="imagen del fondo" style={{width: '100%', height: '100%', objectFit: 'cover'}} /></div>
            <div><img src={foto2} alt="imagen del fondo" style={{width: '100%', height: '100%', objectFit: 'cover'}} /></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            
        </div>
        </div>
    )
}
export default Photos;