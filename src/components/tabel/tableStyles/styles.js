import { tableColors } from "./color";

// tabel styles
export const tabelStyles = {
  container: {
    padding: "8px",
    background: tableColors.backGroundColor,
  },
  box: {
    overflowX: "auto",
    width: "100%",
    height: "465px",
    boxSizing: "border-box",
  },
  tabel: {
    borderCollapse: "separate",
    borderSpacing: "2px 6px",
    minWidth: "100%",
    width: "max-content",
  },
  thead: {
    head: {},
    tr: {
      cursor: "pointer",
      position: "sticky",
      top: "0",
      zIndex: "1",
      border: "1px solid #ddd",
    },
    th: {
      padding: "6px",
      fontSize: "14px",
      fontWeight: "700",
      textAlign: "left",
      whiteSpace: "nowrap",
      background: tableColors.headRowColor,
    },
    sortingBox: {
      box: {
        display: "flex",
        alignItems: "center",
      },
      icon: {
        color: "#575757ea",
        marginLeft: "10px",
        fontSize: "20px",
      },
      heading: {},
    },
  },
  tbody: {
    tr: {
      border: "2px solid #ddd",
      boxShadow: "0 4px 6px -4px rgba(141, 141, 141, 0.2)",
    },
    td: {
      padding: "4px",
      textAlign: "left",
      fontSize: "13px",
      fontWeight: "400",
      whiteSpace: "nowrap",
      borderInline: "none",
      background: tableColors.bodyRowColor,
    },
  },
  heading: {
    fontSize: "20px",
    fontWeight: "600",
    color: tableColors.secondarColor,
  },
};

// tabel pagination styles

export const tabelPaginationStyles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px",
    background: "#f9f9f9",
    // borderTop: "1px solid #ddd",
    boxShadow: "0px -2px 6px rgba(80, 80, 80, 0.05)",
  },
  info: {
    fontSize: "14px",
    color: "#333",
    fontWeight: "500",
  },
  controls: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  arrowIcon: {
    fontSize: "26px",
    color: "#555",
    cursor: "pointer",
    transition: "transform 0.2s ease",
  },
  arrowDisabled: {
    opacity: 0.4,
    cursor: "not-allowed",
  },
  pageButtonsContainer: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    margin: "0 10px",
  },
  pageButton: {
    minWidth: "30px",
    height: "30px",
    borderRadius: "50%",
    background: "linear-gradient(145deg, #e0e0e0, #ffffff)",
    border: "none",
    color: "#333",
    fontWeight: "600",
    fontSize: "12px",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
  pageButtonHover: {
    background: "#e4f0ff",
    borderColor: "#90caf9",
  },
  pageButtonActive: {
    background: tableColors.primaryColor,
    color: "#fff",
    // border: "1px solid #1976d2",
  },
  dots: {
    color: "#888",
    fontWeight: "600",
  },
};

// search box styles

export const tableToolStyles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icons: {
    box: {
      background: "white",
      borderRadius: "5px",
      boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)", // ✅ subtle shadow
      margin: "0px 5px",
    },
    icon: {
      fontSize: "22px",
      fontWeight: "600",
    },
  },
  search: {
    box: {
      position: "relative",
      display: "inline-block",
    },
    input: {
      width: "250px",
      height: "35px",
      borderRadius: "5px",
      border: `solid 1px #a1a1a1ff`,
      padding: "0px 10px",
      fontSize: "14px",
      outline: "0",
    },
    icon: {
      position: "absolute",
      right: "8px",
      bottom: "8px",
      color: "#a1a1a1ff",
    },
  },
  moreMenus: {
    menus: {},
  },
};

export const tableDateStyles = {
  container: {
    display: "flex",
    alignItems: "center",
    marginRight: "20px",
  },
  box: {
    margin: "0px 5px",
  },
  label: {
    display: "block",
    fontSize: "12px",
    color: "#a1a1a1ff",
  },
  input: {
    display: "block",
    height: "35px",
    borderRadius: "5px",
    border: `solid 1px #a1a1a1ff`,
    padding: "0px 10px",
    fontSize: "14px",
    outline: "0",
  },
};

export const tableActionStyles = {
  container: {
    display: "flex",

    alignItems: "center",
  },
  icon: {
    marginRight: "10px",
    color: "grey",
    fontSize: "20px",
    cursor: "pointer",
  },
};

export const tableStatusCard = {
  box: {
    padding: "2px 10px",
    display: "inline-block",
    borderRadius: "5px",
    fontWeight: "600",
    fontSize: "12px",
  },
};
