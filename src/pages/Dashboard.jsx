export default function Dashboard() {

  return (

    <div style={styles.container}>

      {/* SIDEBAR */}
      <div style={styles.sidebar}>

        <h2 style={styles.logo}>🍰 Choco Heaven</h2>

        <button style={styles.menuBtn}>📊 Dashboard</button>
        <button style={styles.menuBtn}>🎂 Cakes</button>
        <button style={styles.menuBtn}>🛒 Orders</button>
        <button style={styles.menuBtn}>👥 Customers</button>
        <button style={styles.menuBtn}>📈 Reports</button>

        <button style={styles.logoutBtn}>
          🚪 Logout
        </button>

      </div>

      {/* MAIN */}
      <div style={styles.main}>

        <h1 style={styles.heading}>Dashboard Overview 📊</h1>
        <p style={styles.subText}>Welcome back Admin 👋</p>

        {/* CARDS */}
        <div style={styles.cardContainer}>

          <div style={styles.card}>
            <h3>Total Orders</h3>
            <p style={styles.number}>145</p>
          </div>

          <div style={styles.card}>
            <h3>Revenue</h3>
            <p style={styles.number}>Rs. 245K</p>
          </div>

          <div style={styles.card}>
            <h3>Pending Orders</h3>
            <p style={styles.number}>12</p>
          </div>

          <div style={styles.card}>
            <h3>Customers</h3>
            <p style={styles.number}>84</p>
          </div>

        </div>

        {/* ANALYTICS + CHART */}
        <div style={styles.analyticsSection}>

          <div style={styles.analyticsHeader}>
            <h2>📈 Sales Analytics</h2>
            <p>Monthly performance overview of Choco Heaven</p>
          </div>

          <div style={styles.analyticsGrid}>

            {/* LEFT BOX */}
            <div style={styles.analysisBox}>

              <h3>Quick Insight 🔍</h3>

              <ul style={styles.analysisList}>
                <li>📊 Highest sales: December</li>
                <li>📉 Lowest sales: January</li>
                <li>📈 Growth is increasing monthly</li>
                <li>🎉 Festival orders boosting revenue</li>
              </ul>

              <div style={styles.summaryCard}>
                <h4>Total Growth</h4>
                <p>+28% 📈</p>
              </div>

            </div>

            {/* RIGHT CHART */}
            <div style={styles.chartBox}>

              <h3>Monthly Sales</h3>

              <div style={styles.chartBars}>

                <div style={styles.barGroup}><div style={{ ...styles.bar, height: "120px" }}></div><span>Jan</span></div>
                <div style={styles.barGroup}><div style={{ ...styles.bar, height: "160px" }}></div><span>Feb</span></div>
                <div style={styles.barGroup}><div style={{ ...styles.bar, height: "190px" }}></div><span>Mar</span></div>
                <div style={styles.barGroup}><div style={{ ...styles.bar, height: "140px" }}></div><span>Apr</span></div>
                <div style={styles.barGroup}><div style={{ ...styles.bar, height: "230px" }}></div><span>May</span></div>
                <div style={styles.barGroup}><div style={{ ...styles.bar, height: "260px" }}></div><span>Jun</span></div>
                <div style={styles.barGroup}><div style={{ ...styles.bar, height: "320px" }}></div><span>Dec</span></div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

/* ================= STYLES ================= */
const styles = {

  container: {
    display: "flex",
    minHeight: "100vh",
    background: "#f4f7fe",
    fontFamily: "Arial"
  },

  sidebar: {
    width: "260px",
    background: "#111827",
    color: "white",
    padding: "25px",
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },

  logo: {
    marginBottom: "20px"
  },

  menuBtn: {
    padding: "12px",
    border: "none",
    borderRadius: "10px",
    background: "#1f2937",
    color: "white",
    cursor: "pointer",
    textAlign: "left"
  },

  logoutBtn: {
    marginTop: "20px",
    padding: "12px",
    border: "none",
    borderRadius: "10px",
    background: "crimson",
    color: "white",
    cursor: "pointer"
  },

  main: {
    flex: 1,
    padding: "30px"
  },

  heading: {
    fontSize: "32px",
    marginBottom: "5px"
  },

  subText: {
    color: "#666",
    marginBottom: "20px"
  },

  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
    gap: "15px"
  },

  card: {
    background: "white",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)"
  },

  number: {
    fontSize: "26px",
    fontWeight: "bold",
    color: "#8B0000"
  },

  analyticsSection: {
    marginTop: "40px"
  },

  analyticsHeader: {
    marginBottom: "15px"
  },

  analyticsGrid: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap"
  },

  analysisBox: {
    flex: 1,
    minWidth: "250px",
    background: "white",
    padding: "20px",
    borderRadius: "15px"
  },

  analysisList: {
    listStyle: "none",
    padding: 0,
    lineHeight: "2"
  },

  summaryCard: {
    marginTop: "15px",
    background: "#8B0000",
    color: "white",
    padding: "15px",
    borderRadius: "10px",
    textAlign: "center"
  },

  chartBox: {
    flex: 2,
    minWidth: "300px",
    background: "white",
    padding: "20px",
    borderRadius: "15px"
  },

  chartBars: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    height: "300px",
    gap: "10px",
    marginTop: "20px"
  },

  barGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px"
  },

  bar: {
    width: "35px",
    background: "linear-gradient(to top, #8B0000, #ff4d6d)",
    borderRadius: "8px 8px 0 0"
  }

};