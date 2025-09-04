import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <h1>クレスキューブ ポータル</h1>
      <nav>
        <ul>
          <li><Link to="/">ホーム</Link></li>
          <li><Link to="/news">お知らせ</Link></li>
          <li><Link to="/services">サービス</Link></li>
          <li><Link to="/contact">お問い合わせ</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
