import { useState } from 'react';
import Link from 'next/link';

const Sidebar = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div style={styles.sidebar}>
      <h2 style={styles.title}>Custom Response</h2>
      <ul style={styles.menu}>
        <li>
          <Link href="/" style={styles.link}>
              <span style={styles.icon}>🏠</span> Intro
          </Link>
        </li>
        <li>
          <button style={styles.button} onClick={() => toggleSection('test')}>
            <span style={styles.icon}>📄</span> Test
          </button>
          {openSections['test'] && (
            <ul style={styles.submenu}>
              <li>
                <Link href="/limiting-resources">
                  <a style={styles.link}>Limiting Resources</a>
                </Link>
              </li>
              <li>
                <Link href="/delay-responses">
                  <a style={styles.link}>Delay Responses</a>
                </Link>
              </li>
              <li>
                <Link href="/resources-auth-user">
                  <a style={styles.link}>Resources as Auth User</a>
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <button style={styles.button} onClick={() => toggleSection('dynamicImage')}>
            <span style={styles.icon}>🖼️</span> Dynamic Image
          </button>
          {openSections['dynamicImage'] && <ul style={styles.submenu}></ul>}
        </li>
        <li>
          <button style={styles.button} onClick={() => toggleSection('auth')}>
            <span style={styles.icon}>🔒</span> Auth
          </button>
        </li>
        <li>
          <button style={styles.button} onClick={() => toggleSection('products')}>
            <span style={styles.icon}>🎧</span> Products
          </button>
        </li>
        <li>
          <button style={styles.button} onClick={() => toggleSection('carts')}>
            <span style={styles.icon}>🛒</span> Carts
          </button>
        </li>
      </ul>
    </div>
  );
};

const styles = {
  sidebar: {
    width: '250px',
    background: '#f9f9f9',
    padding: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    height: '100vh',
    overflowY: 'auto',
  },
  title: {
    fontSize: '18px',
    margin: '10px 0',
    color: '#333',
  },
  menu: {
    listStyle: 'none',
    padding: 0,
  },
  link: {
    textDecoration: 'none',
    color: '#555',
    display: 'flex',
    alignItems: 'center',
    padding: '8px 10px',
  },
  icon: {
    marginRight: '10px',
  },
  button: {
    background: 'none',
    border: 'none',
    padding: '8px 10px',
    width: '100%',
    textAlign: 'left',
    cursor: 'pointer',
    color: '#555',
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center',
  },
  submenu: {
    paddingLeft: '20px',
  },
};

export default Sidebar;
