import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faAccusoft, faAribnb } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const NavBar = ({ authenticate, setAthenticate }) => {
  const menuList = [
    'New Releases',
    'Men',
    'Women',
    'Kids',
    'Sale',
    'SNKRS',
    '나이키 앱',
  ];
  const navigate = useNavigate();

  const search = (event) => {
    if(event.key === "Enter") {
      let keyword = event.target.value;
      console.log('keyword', keyword)
      navigate(`/?q=${keyword}`);
    }
  }
  return (
    <div className='nav-bar'>
      <div className='nav-top'>
        <span>매장찾기</span>
        <span> | </span>
        <span>고객센터</span>
        <span> | </span>
        <span>가입하기</span>
        <span> | </span>
        {authenticate ? (
          <div onClick={() => setAthenticate(false)}>
            <span style={{cursor: "pointer"}}>로그아웃</span>
          </div>
        ) : (
          <div onClick={() => navigate('/login')}>
            <span style={{cursor: "pointer"}}>로그인</span>
          </div>
        )}
      </div>
      <div className='nav-bottom'>
        <div className='nav-logo'>
          <img 
            width={100}
            src='https://i.namu.wiki/i/7odiKOobwcRn3h5h_Qj63poBcBpLas3nOiDi1T2MpFPACvELiPckUz1sand2gAyOx9hQMn3IQ9HgH_cAtFsokg.svg'
          />
        </div>
        <div className='nav-menu-area'>
          <ul className='menu'>
            {menuList.map((menu, index) => (
              <li>
                <a href='#' key={index}>
                  {menu}
                </a>
              </li>
          ))}
          </ul>
        </div>
        <div className='search-box'>
            <FontAwesomeIcon icon={faSearch} />
            <input type='text' placeholder='검색' onKeyPress={search} />
        </div>
      </div>
    </div>
  )
}

export default NavBar;
