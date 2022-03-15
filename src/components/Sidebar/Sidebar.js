import React, { useContext, useRef, useState } from "react";
import {
  SDivider,
  SLink,
  SLinkContainer,
  SLinkIcon,
  SLinkLabel,
  SLinkNotification,
  SLogo,
  SSearch,
  SSearchIcon,
  SSidebar,
  SSidebarButton,
  STheme,
  SThemeLabel,
  SThemeToggler,
  SToggleThumb,
  Container,
} from "./styles";

import Tooltip from "../Tooltip"

import {
  AiOutlineApartment,
  AiOutlineHome,
  AiOutlineLeft,
  AiOutlineSearch,
  AiOutlineSetting,
} from "react-icons/ai";
import { MdLogout, MdOutlineAnalytics } from "react-icons/md";
import { BsPeople } from "react-icons/bs";

import { ThemeContext } from "./../../App";

const Sidebar = () => {
  const searchRef = useRef(null);
  const { setTheme, theme } = useContext(ThemeContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const searchClickHandler = () => {
    if (!sidebarOpen) {
      setSidebarOpen(true);
      searchRef.current.focus();
    } else {
      // search functionality
    }
  };

  return (
    <Container>
      <SSidebar isOpen={sidebarOpen}>

        <SSidebarButton
          isOpen={sidebarOpen}
          onClick={() => setSidebarOpen((p) => !p)}
        >
          <AiOutlineLeft />
        </SSidebarButton>

        {/* short circuit: sidebaropen is closed display KB, otherwise display KanBan */}
        {(!sidebarOpen && <SLogo to="/">T</SLogo>) || (
          <SLogo to="/">Test</SLogo>
        )}
        <SSearch
          onClick={searchClickHandler}
          style={!sidebarOpen ? { width: `fit-content` } : {}}
        >
          <SSearchIcon>
            <AiOutlineSearch />
          </SSearchIcon>
          <input
            ref={searchRef}
            placeholder="Search"
            style={!sidebarOpen ? { width: 0, padding: 0 } : {}}
          />
        </SSearch>
        <SDivider />
        {linksArray.map(({ icon, label, notification, to }) => (
          <SLinkContainer key={label}>
            <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
              
            {sidebarOpen || (
                <Tooltip text={label} position="right" background="222831">
                  <SLinkIcon>{icon}</SLinkIcon>
                </Tooltip>
              )}

              {sidebarOpen && (
                <>
                  <SLinkIcon>{icon}</SLinkIcon>
                  <SLinkLabel>{label}</SLinkLabel>
                  {/* if notifications are at 0 or null, do not display */}
                  {!!notification && (
                    <SLinkNotification>{notification}</SLinkNotification>
                  )}
                </>
              )}
            </SLink>
          </SLinkContainer>
        ))}
        <SDivider />
        {secondaryLinksArray.map(({ icon, label, to }) => (
          <SLinkContainer key={label}>
            <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
              <SLinkIcon>{icon}</SLinkIcon>
              {sidebarOpen && <SLinkLabel>{label}</SLinkLabel>}
            </SLink>
          </SLinkContainer>
        ))}
        <SDivider />
        <STheme>
          {sidebarOpen && <SThemeLabel>Dark Mode</SThemeLabel>}
          <SThemeToggler
            isActive={theme === "dark"}
            onClick={() => setTheme((p) => (p === "light" ? "dark" : "light"))}
          >
            <SToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
          </SThemeToggler>
        </STheme>
      </SSidebar>
    </Container>
  );
};

const linksArray = [
  {
    label: "Home",
    icon: <AiOutlineHome />,
    to: "/",
    notification: 0,
  },
  {
    label: "Statistics",
    icon: <MdOutlineAnalytics />,
    to: "/statistics",
    notification: 3,
  },
  {
    label: "Customers",
    icon: <BsPeople />,
    to: "/customers",
    notification: 0,
  },
  {
    label: "Diagrams",
    icon: <AiOutlineApartment />,
    to: "/diagrams",
    notification: 1,
  },
];

const secondaryLinksArray = [
  {
    label: "Settings",
    to: "/settings",
    icon: <AiOutlineSetting />,
  },
  {
    label: "Logout",
    to: "/logout",
    icon: <MdLogout />,
  },
];

export default Sidebar;
