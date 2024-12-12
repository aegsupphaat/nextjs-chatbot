import { useState } from "react";
import { FiChevronDown, FiChevronUp, FiImage, FiLock, FiShoppingCart, FiHeadphones, FiHome } from "react-icons/fi";
import { BiSolidFile, BiExpandHorizontal, BiDetail } from "react-icons/bi";
import { TfiLock, TfiLayoutSlider } from "react-icons/tfi";
import { RiDraftLine, RiUserFollowLine, RiLock2Line, RiHomeOfficeLine, RiHandCoinLine } from "react-icons/ri";

export default function Accordion() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <div style={styles.accordion}>
      {/* <h2 style={styles.title}>Identity Docs</h2> */}

      {/* TrueID CiAM Section */}
      <div>
        <div style={styles.header} onClick={() => toggleSection("ciam")}>
          <RiUserFollowLine style={styles.icon} />
          <span>TrueID CIAM Feature</span>
          {openSection === "ciam" ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {openSection === "ciam" && (
          <ul style={styles.content}>
            <li style={styles.item}>User Authentication</li>
            <li style={styles.item}>Account Management</li>
            <li style={styles.item}>Authorization Management</li>
            <li style={styles.item}>Consent Management</li>
            <li style={styles.item}>Device Management</li>
            <li style={styles.item}>Profile Management</li>
          </ul>
        )}
      </div>

      {/* APIs Specification Section */}
      <div>
        <div style={styles.header} onClick={() => toggleSection("api")}>
          <RiDraftLine style={styles.icon} />
          <span>APIs Specification</span>
          {openSection === "api" ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {openSection === "api" && (
          <ul style={styles.content}>
            <li style={styles.item}>Accounts</li>
            <li style={styles.item}>Consents</li>
            <li style={styles.item}>Devices</li>
            <li style={styles.item}>Token</li>
          </ul>
        )}
      </div>

      {/* Auth Section */}
      <div>
        <div style={styles.header} onClick={() => toggleSection("auth")}>
          <RiLock2Line style={styles.icon} />
          <span>Auth</span>
          {openSection === "auth" ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {openSection === "auth" && <ul style={styles.content}><li style={styles.item}>Auth Content</li></ul>}
      </div>

      {/* Architecture Section */}
      <div>
        <div style={styles.header} onClick={() => toggleSection("architect")}>
          <RiHomeOfficeLine style={styles.icon} />
          <span>Architecture</span>
          {openSection === "architect" ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {openSection === "architect" && <ul style={styles.content}><li style={styles.item}>Architecture</li></ul>}
      </div>

      {/* Partner Section */}
      <div>
        <div style={styles.header} onClick={() => toggleSection("partner")}>
          <RiHandCoinLine style={styles.icon} />
          <span>Partners</span>
          {openSection === "partner" ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {openSection === "partner" && <ul style={styles.content}><li style={styles.item}>Partner Content</li></ul>}
      </div>
    </div>
  );
}

const styles = {
  accordion: {
    width: "280px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    padding: "10px",
    backgroundColor: "#F5F5F5",
    position: "absolute", // Set the position
    left: "0", // Align it to the left of the screen
    top: "10px", // Optional: Add some spacing from the top of the screen
    marginTop: "80px"
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "15px",
    justifyContent: "center"
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    cursor: "pointer",
    borderBottom: "1px solid #ddd",
  },
  content: {
    listStyle: "none",
    paddingLeft: "20px",
    marginTop: "10px",
    marginBottom: "10px",
  },
  item: {
    padding: "5px 0",
    fontSize: "14px",
    color: "#555",
  },
  icon: {
    marginRight: "10px",
  },
};
