import { useState } from 'react';
import './ProductoDetalles2.css';

const COLORS = [
  {
    name: 'black',
    primary: '#000',
    secondary: '#212121',
    pic: 'https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto.png?raw=true',
  },
  {
    name: 'red',
    primary: '#7E021C',
    secondary: '#bd072d',
    pic: 'https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto_red_black.png?raw=true',
  },
  {
    name: 'orange',
    primary: '#CE5B39',
    secondary: '#F18557',
    pic: 'https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto_orange_black.png?raw=true',
  },
];

export default function ProductoDetalles2() {
  const [selected, setSelected] = useState(COLORS[0]);

  return (
    <div style={{ background: selected.primary, minHeight: '100vh' }}>
      <div className="container">
        <div className="imgBx" style={{ background: selected.secondary }}>
          <img src={selected.pic} alt="Jordan Proto-Lyte" />
        </div>

        <div className="details">
          <div className="content">
            <h2 style={{ color: selected.secondary }}>
              Jordan Proto-Lyte <br />
              <span>Running Collection</span>
            </h2>

            <p>
              Featuring soft foam cushioning and lightweight, woven fabric in the
              upper, the Jordan Proto-Lyte is made for all-day, bouncy comfort.
              {/* ...rest of the description */}
            </p>

            <p className="product-colors">
              Available Colors:
              {COLORS.map((c) => (
                <span
                  key={c.name}
                  className={`${c.name} ${c === selected ? 'active' : ''}`}
                  style={c === selected ? { borderColor: selected.secondary } : undefined}
                  onClick={() => setSelected(c)}
                />
              ))}
            </p>

            <h3 style={{ color: selected.secondary }}>Rs. 12,800</h3>
            <button style={{ background: selected.secondary }}>Buy Now</button>
          </div>
        </div>
      </div>

      <footer>
        <a href="https://stylustechnepal.com" target="_blank" rel="noreferrer">
          anuzbvbmaniac123@gmail.com
        </a>
      </footer>
    </div>
  );
}