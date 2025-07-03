import React from "react";

function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0a0e27 0%, #16213e 30%, #1a2332 60%, #2c5364 100%)",
        fontFamily: "'Orbitron', sans-serif",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated background elements */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "15%",
          width: "200px",
          height: "200px",
          background:
            "radial-gradient(circle, rgba(200, 162, 80, 0.3) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "float 6s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "10%",
          width: "150px",
          height: "150px",
          background:
            "radial-gradient(circle, rgba(70, 55, 20, 0.4) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "float 8s ease-in-out infinite reverse",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "5%",
          width: "100px",
          height: "100px",
          background:
            "radial-gradient(circle, rgba(44, 83, 100, 0.5) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "float 7s ease-in-out infinite",
        }}
      />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(200, 162, 80, 0.3); }
          50% { box-shadow: 0 0 40px rgba(200, 162, 80, 0.6); }
        }
        @keyframes textGlow {
          0%, 100% { text-shadow: 0 0 20px rgba(200, 162, 80, 0.5); }
          50% { text-shadow: 0 0 30px rgba(200, 162, 80, 0.8); }
        }
      `}</style>

      {/* Hero Section */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "4rem 2rem 3rem",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "0.5rem 2rem",
            background: "linear-gradient(45deg, #463714, #c8a250, #463714)",
            borderRadius: "30px",
            marginBottom: "2rem",
            fontSize: "0.9rem",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "2px",
            animation: "glow 3s ease-in-out infinite",
          }}
        >
          🏆 Teamfight Tactics Masters 🏆
        </div>

        <h1
          style={{
            fontSize: "4rem",
            marginBottom: "1.5rem",
            background:
              "linear-gradient(45deg, #c8a250, #f0d570, #c8a250, #463714)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontWeight: "bold",
            animation: "textGlow 4s ease-in-out infinite",
            lineHeight: "1.2",
          }}
        >
          Welcome to TFT Universe
        </h1>

        <p
          style={{
            fontSize: "1.4rem",
            lineHeight: "1.8",
            maxWidth: "600px",
            margin: "0 auto 3rem",
            color: "#e0e0e0",
            textShadow: "0 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          จุดรวมของนักรบ TFT ผู้ต้องการความเป็นเลิศ
          <br />
          <span style={{ color: "#c8a250", fontWeight: "bold" }}>
            พร้อมพิชิตทุกแรงค์ด้วยกลยุทธ์ระดับโปร
          </span>
        </p>
      </div>

      {/* Features Grid */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 2rem 4rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "2rem",
        }}
      >
        {/* Feature Card 1 */}
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(200, 162, 80, 0.1) 0%, rgba(70, 55, 20, 0.2) 100%)",
            border: "2px solid rgba(200, 162, 80, 0.3)",
            borderRadius: "15px",
            padding: "2rem",
            backdropFilter: "blur(10px)",
            transition: "all 0.3s ease",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-10px)";
            e.currentTarget.style.borderColor = "#c8a250";
            e.currentTarget.style.boxShadow =
              "0 20px 40px rgba(200, 162, 80, 0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.borderColor = "rgba(200, 162, 80, 0.3)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎯</div>
          <h3
            style={{
              fontSize: "1.5rem",
              marginBottom: "1rem",
              color: "#c8a250",
            }}
          >
            Meta Compositions
          </h3>
          <p style={{ lineHeight: "1.6", color: "#d0d0d0" }}>
            การจัดทีมที่แข็งแกร่งที่สุดในเมตาปัจจุบัน พร้อมคำแนะนำการวางตำแหน่ง
            การเลือกไอเท็ม และการอัพเกรดแชมป์
            เพื่อให้คุณสามารถแข่งขันได้ในระดับสูง
          </p>
        </div>

        {/* Feature Card 2 */}
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(44, 83, 100, 0.2) 0%, rgba(16, 33, 62, 0.3) 100%)",
            border: "2px solid rgba(44, 83, 100, 0.4)",
            borderRadius: "15px",
            padding: "2rem",
            backdropFilter: "blur(10px)",
            transition: "all 0.3s ease",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-10px)";
            e.currentTarget.style.borderColor = "#2c5364";
            e.currentTarget.style.boxShadow =
              "0 20px 40px rgba(44, 83, 100, 0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.borderColor = "rgba(44, 83, 100, 0.4)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📊</div>
          <h3
            style={{
              fontSize: "1.5rem",
              marginBottom: "1rem",
              color: "#6eb5ff",
            }}
          >
            Advanced Analytics
          </h3>
          <p style={{ lineHeight: "1.6", color: "#d0d0d0" }}>
            วิเคราะห์สถิติเชิงลึก อัตราการชนะของแต่ละคอมโป การกระจายแรงค์
            และเทรนด์ที่เปลี่ยนแปลงไปตามเวลา เพื่อให้คุณเล่นได้อย่างมีข้อมูล
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div
        style={{
          background:
            "linear-gradient(90deg, rgba(200, 162, 80, 0.1) 0%, rgba(44, 83, 100, 0.1) 100%)",
          padding: "3rem 0",
          margin: "2rem 0",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            padding: "0 2rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem",
            textAlign: "center",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "3rem",
                fontWeight: "bold",
                color: "#c8a250",
                marginBottom: "0.5rem",
              }}
            >
              50+
            </div>
            <div style={{ fontSize: "1.2rem", color: "#e0e0e0" }}>
              Team Compositions
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: "3rem",
                fontWeight: "bold",
                color: "#6eb5ff",
                marginBottom: "0.5rem",
              }}
            >
              1000+
            </div>
            <div style={{ fontSize: "1.2rem", color: "#e0e0e0" }}>
              Pro Tips & Guides
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: "3rem",
                fontWeight: "bold",
                color: "#c8a250",
                marginBottom: "0.5rem",
              }}
            >
              24/7
            </div>
            <div style={{ fontSize: "1.2rem", color: "#e0e0e0" }}>
              Meta Updates
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: "3rem",
                fontWeight: "bold",
                color: "#6eb5ff",
                marginBottom: "0.5rem",
              }}
            >
              99%
            </div>
            <div style={{ fontSize: "1.2rem", color: "#e0e0e0" }}>
              Success Rate
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "0 2rem 4rem",
        }}
      >
        {/* Strategy Section */}
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(200, 162, 80, 0.1) 100%)",
            borderRadius: "20px",
            padding: "3rem",
            marginBottom: "3rem",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              marginBottom: "2rem",
              color: "#c8a250",
              textAlign: "center",
              textShadow: "0 0 15px rgba(200, 162, 80, 0.5)",
            }}
          >
            🧠 Master TFT Strategy
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
              marginBottom: "2rem",
            }}
          >
            <div>
              <h3
                style={{
                  color: "#f0d570",
                  fontSize: "1.3rem",
                  marginBottom: "1rem",
                }}
              >
                📈 Economy Management
              </h3>
              <p style={{ lineHeight: "1.7", color: "#d0d0d0" }}>
                การจัดการเศรษฐกิจที่เหมาะสม การเก็บดอกเบี้ย การ Roll
                ในช่วงเวลาที่ถูกต้อง
                และการรู้จักเมื่อไหร่ควรใช้จ่ายเพื่อเสริมแกร่งทีม
              </p>
            </div>
            <div>
              <h3
                style={{
                  color: "#f0d570",
                  fontSize: "1.3rem",
                  marginBottom: "1rem",
                }}
              >
                ⚔️ Combat Positioning
              </h3>
              <p style={{ lineHeight: "1.7", color: "#d0d0d0" }}>
                การวางตำแหน่งแชมป์ที่สมบูรณ์แบบ การป้องกัน Assassin
                การหลีกเลี่ยง AOE และการสร้างพื้นที่ปลอดภัยสำหรับ Carry ของคุณ
              </p>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(44, 83, 100, 0.2) 0%, rgba(0,0,0,0.3) 100%)",
            borderRadius: "20px",
            padding: "3rem",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              marginBottom: "2rem",
              color: "#6eb5ff",
              textAlign: "center",
              textShadow: "0 0 15px rgba(110, 181, 255, 0.5)",
            }}
          >
            💡 Pro Tips & Secrets
          </h2>

          <div
            style={{ fontSize: "1.2rem", lineHeight: "1.8", color: "#e0e0e0" }}
          >
            <p style={{ marginBottom: "1.5rem" }}>
              <strong style={{ color: "#c8a250" }}>🔥 Hot Tip:</strong>{" "}
              การเลือกไอเท็มในช่วงแรกของเกมมีความสำคัญมาก ควรเก็บ Component
              ที่ยืดหยุ่นและสามารถใช้ได้กับหลายคอมโป
            </p>
            <p style={{ marginBottom: "1.5rem" }}>
              <strong style={{ color: "#6eb5ff" }}>⚡ Advanced:</strong>{" "}
              การอ่านเกมและการปรับตัวตาม Lobby
              เป็นสิ่งที่แยกผู้เล่นระดับสูงออกจากผู้เล่นทั่วไป
            </p>
            <p>
              <strong style={{ color: "#c8a250" }}>🎖️ Master Level:</strong> การ
              Scout คู่ต่อสู้และการวางแผนล่วงหน้า
              จะช่วยให้คุณได้เปรียบในทุกการต่อสู้
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div
        style={{
          textAlign: "center",
          padding: "4rem 2rem",
          background:
            "linear-gradient(135deg, rgba(200, 162, 80, 0.1) 0%, rgba(44, 83, 100, 0.1) 100%)",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "1.5rem",
            background: "linear-gradient(45deg, #c8a250, #6eb5ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Ready to Dominate TFT?
        </h2>
        <p
          style={{
            fontSize: "1.3rem",
            marginBottom: "2rem",
            color: "#e0e0e0",
            maxWidth: "600px",
            margin: "0 auto 2rem",
          }}
        >
          เริ่มต้นการเดินทางสู่การเป็น TFT Master กับเราวันนี้
        </p>
        <div
          style={{
            display: "inline-block",
            padding: "1.2rem 3rem",
            background: "linear-gradient(45deg, #c8a250, #f0d570)",
            color: "#1a1a1a",
            borderRadius: "50px",
            fontSize: "1.2rem",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "all 0.3s ease",
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.05)";
            e.target.style.boxShadow = "0 10px 30px rgba(200, 162, 80, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "none";
          }}
        >
          🚀 Start Your Journey
        </div>
      </div>
    </div>
  );
}
a;
export default Home;
