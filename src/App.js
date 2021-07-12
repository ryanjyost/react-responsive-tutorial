import React, { useState, useEffect } from 'react';
import Content from "./components/Content";
import FooterMenu from "./components/FooterMenu";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";

function App() {
    const [windowState, setWindowState] = useState(
      {
        height: window.innerHeight,
        width: window.innerWidth
      }
    );
    const menuItems = [
      { icon: `😀`, text: "Item 1" },
      { icon: `😉`, text: "Item 2" },
      { icon: `😎`, text: "Item 3" },
      { icon: `🤔`, text: "Item 4" },
      { icon: `😛`, text: "Item 5" }
    ];
    const sidebarCollapsed = windowState.width < 1100;
    const styles = {
      white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      topBarHeight: 40,
      footerMenuHeight: 50,
      showFooterMenuText: windowState.width > 500,
      showSidebar: windowState.width > 768,
      sidebarCollapsed,
      sidebarWidth: sidebarCollapsed ? 50 : 150
    };

    useEffect(() => {
      function handleResize() {
        setWindowState(
          {
            height: window.innerHeight,
            width: window.innerWidth
          }
        )
      }
      window.addEventListener('resize', handleResize)
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    })

    if (styles.showSidebar) {
      menuItems.push({ icon: `😺️`, text: "Profile" });
      menuItems.push({ icon: `⚙`, text: "Settings" });
    }

    return (
      <div
        style={
          {
            backgroundColor: styles.black(0.05),
            minHeight: "100vh",
            position: "relative"
          }
        }
      >
        {
          styles.showSidebar ? (<Sidebar menuItems={menuItems} styles={styles} />) : 
                               (<TopBar styles={styles} />)
        }

        <Content styles={styles} />

        {!styles.showSidebar && (<FooterMenu menuItems={menuItems} styles={styles} />)}
      </div>
    );
}

export default App;
