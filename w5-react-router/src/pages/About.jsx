import React from "react";

function About() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0a0e27 0%, #16213e 30%, #1a2332 60%, #2c5364 100%)",
        fontFamily: "'Orbitron', sans-serif",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorative elements */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          right: "10%",
          width: "150px",
          height: "150px",
          background: "radial-gradient(circle, rgba(200, 162, 80, 0.2) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "float 8s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          width: "120px",
          height: "120px",
          background: "radial-gradient(circle, rgba(110, 181, 255, 0.3) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "float 6s ease-in-out infinite reverse",
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
      `}</style>

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "4rem 2rem",
        }}
      >
        {/* Header Section */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "4rem",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "0.5rem 2rem",
              background: "linear-gradient(45deg, #463714, #c8a250)",
              borderRadius: "30px",
              marginBottom: "2rem",
              fontSize: "0.9rem",
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            🎮 About TFT Universe
          </div>

          <h1
            style={{
              fontSize: "3.5rem",
              marginBottom: "1.5rem",
              background: "linear-gradient(45deg, #c8a250, #f0d570, #c8a250)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontWeight: "bold",
              textShadow: "0 0 20px rgba(200, 162, 80, 0.5)",
            }}
          >
            เกี่ยวกับเรา
          </h1>
        </div>

        {/* Main Content Card */}
        <div
          style={{
            background: "linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(200, 162, 80, 0.1) 100%)",
            borderRadius: "20px",
            padding: "3rem",
            marginBottom: "3rem",
            border: "2px solid rgba(200, 162, 80, 0.3)",
            backdropFilter: "blur(10px)",
          }}
        >
          <h2
            style={{
              color: "#c8a250",
              marginBottom: "2rem",
              fontSize: "2rem",
              textAlign: "center",
              textShadow: "0 0 15px rgba(200, 162, 80, 0.5)",
            }}
          >
            🏆 ยินดีต้อนรับสู่ TFT Universe
          </h2>
          
          <p style={{ fontSize: "1.3rem", lineHeight: "1.8", marginBottom: "2rem", textAlign: "center" }}>
            สวัสดีครับ! ผมคือ <strong style={{color: "#f0d570"}}>TFT Master</strong>{" "}
            นักวิเคราะห์และผู้เชี่ยวชาญด้าน Teamfight Tactics ที่มีประสบการณ์การเล่นมากกว่า 3 ปี
            <br />
            <span style={{color: "#6eb5ff", fontWeight: "bold"}}>
              พร้อมแบ่งปันความรู้และกลยุทธ์ระดับโปรให้กับทุกคน
            </span>
          </p>
        </div>

        {/* Experience Section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
            gap: "2rem",
            marginBottom: "3rem",
          }}
        >
          <div
            style={{
              background: "linear-gradient(135deg, rgba(200, 162, 80, 0.1) 0%, rgba(70, 55, 20, 0.2) 100%)",
              border: "2px solid rgba(200, 162, 80, 0.3)",
              borderRadius: "15px",
              padding: "2.5rem",
              backdropFilter: "blur(10px)",
            }}
          >
            <h3 style={{ color: "#c8a250", fontSize: "1.8rem", marginBottom: "1.5rem" }}>
              🎯 ความเชี่ยวชาญของเรา
            </h3>
            <ul style={{ fontSize: "1.2rem", lineHeight: "1.8", listStyle: "none", padding: 0 }}>
              <li style={{marginBottom: "1rem"}}>
                <span style={{color: "#f0d570"}}>⚡</span> การวิเคราะห์เมตาและเทรนด์ล่าสุด
              </li>
              <li style={{marginBottom: "1rem"}}>
                <span style={{color: "#f0d570"}}>🧠</span> กลยุทธ์การจัดทีมระดับแกรนด์มาสเตอร์
              </li>
              <li style={{marginBottom: "1rem"}}>
                <span style={{color: "#f0d570"}}>💎</span> เทคนิคการจัดการเศรษฐกิจขั้นสูง
              </li>
              <li style={{marginBottom: "1rem"}}>
                <span style={{color: "#f0d570"}}>🎪</span> การวางตำแหน่งและ Positioning
              </li>
              <li>
                <span style={{color: "#f0d570"}}>📊</span> การอ่านสถิติและข้อมูลเชิงลึก
              </li>
            </ul>
          </div>

          <div
            style={{
              background: "linear-gradient(135deg, rgba(44, 83, 100, 0.2) 0%, rgba(16, 33, 62, 0.3) 100%)",
              border: "2px solid rgba(44, 83, 100, 0.4)",
              borderRadius: "15px",
              padding: "2.5rem",
              backdropFilter: "blur(10px)",
            }}
          >
            <h3 style={{ color: "#6eb5ff", fontSize: "1.8rem", marginBottom: "1.5rem" }}>
              🏅 ผลงานและประสบการณ์
            </h3>
            <div style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
              <div style={{marginBottom: "1.5rem"}}>
                <strong style={{color: "#c8a250"}}>🎖️ Grandmaster Rank</strong>
                <br />
                <span style={{color: "#d0d0d0"}}>ติดอันดับ Top 500 ในเซิร์ฟเวอร์ SEA</span>
              </div>
              <div style={{marginBottom: "1.5rem"}}>
                <strong style={{color: "#c8a250"}}>📈 3+ Years Experience</strong>
                <br />
                <span style={{color: "#d0d0d0"}}>เล่นตั้งแต่ Set 1 จนถึงปัจจุบัน</span>
              </div>
              <div>
                <strong style={{color: "#c8a250"}}>🏆 Tournament Winner</strong>
                <br />
                <span style={{color: "#d0d0d0"}}>ชนะการแข่งขันระดับชาติหลายครั้ง</span>
              </div>
            </div>
          </div>
        </div>

        {/* Website Purpose Section */}
        <div
          style={{
            background: "linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(44, 83, 100, 0.2) 100%)",
            borderRadius: "20px",
            padding: "3rem",
            marginBottom: "3rem",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <h3
            style={{
              color: "#6eb5ff",
              fontSize: "2.2rem",
              marginBottom: "2rem",
              textAlign: "center",
              textShadow: "0 0 15px rgba(110, 181, 255, 0.5)",
            }}
          >
            🌟 เกี่ยวกับเว็บไซต์ TFT Universe
          </h3>
          
          <p style={{ fontSize: "1.3rem", lineHeight: "1.8", marginBottom: "2rem", textAlign: "center" }}>
            เว็บไซต์นี้ถูกสร้างขึ้นเพื่อเป็นศูนย์รวมความรู้ทั้งหมดเกี่ยวกับ{" "}
            <strong style={{color: "#c8a250"}}>Teamfight Tactics</strong> 
            <br />
            ตั้งแต่ผู้เริ่มต้นจนถึงผู้เล่นระดับโปร
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
              marginTop: "2rem",
            }}
          >
            <div style={{textAlign: "center"}}>
              <div style={{fontSize: "2.5rem", marginBottom: "1rem"}}>📚</div>
              <h4 style={{color: "#f0d570", fontSize: "1.3rem", marginBottom: "1rem"}}>
                คู่มือครบครัน
              </h4>
              <p style={{color: "#d0d0d0", lineHeight: "1.6"}}>
                การจัดทีม ไอเท็ม และเทคนิคต่าง ๆ อย่างละเอียด
              </p>
            </div>
            
            <div style={{textAlign: "center"}}>
              <div style={{fontSize: "2.5rem", marginBottom: "1rem"}}>⚡</div>
              <h4 style={{color: "#f0d570", fontSize: "1.3rem", marginBottom: "1rem"}}>
                อัพเดตเรียลไทม์
              </h4>
              <p style={{color: "#d0d0d0", lineHeight: "1.6"}}>
                ข้อมูลเมตาและแพทช์ใหม่ล่าสุดทันที
              </p>
            </div>
            
            <div style={{textAlign: "center"}}>
              <div style={{fontSize: "2.5rem", marginBottom: "1rem"}}>🎯</div>
              <h4 style={{color: "#f0d570", fontSize: "1.3rem", marginBottom: "1rem"}}>
                เทคนิคโปร
              </h4>
              <p style={{color: "#d0d0d0", lineHeight: "1.6"}}>
                กลยุทธ์และเคล็ดลับจากผู้เล่นระดับสูง
              </p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div
          style={{
            background: "linear-gradient(45deg, rgba(200, 162, 80, 0.1), rgba(110, 181, 255, 0.1))",
            borderRadius: "20px",
            padding: "3rem",
            textAlign: "center",
            border: "2px solid rgba(200, 162, 80, 0.3)",
          }}
        >
          <h3
            style={{
              fontSize: "2rem",
              marginBottom: "1.5rem",
              background: "linear-gradient(45deg, #c8a250, #6eb5ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            🎖️ พันธกิจของเรา
          </h3>
          
          <p
            style={{
              fontSize: "1.4rem",
              lineHeight: "1.8",
              maxWidth: "700px",
              margin: "0 auto 2rem",
              color: "#e0e0e0",
            }}
          >
            เราตั้งใจจะทำให้ TFT เป็นเกมที่เข้าถึงได้ง่ายสำหรับทุกคน 
            และช่วยให้ผู้เล่นทุกระดับสามารถพัฒนาทักษะได้อย่างต่อเนื่อง
          </p>

          <p
            style={{
              fontSize: "1.2rem",
              fontStyle: "italic",
              color: "#c8a250",
              fontWeight: "bold",
            }}
          >
            "ทุกคนสามารถเป็น TFT Master ได้ หากมีความรู้และกลยุทธ์ที่ถูกต้อง"
          </p>
        </div>

        {/* Contact/Thanks Section */}
        <div
          style={{
            textAlign: "center",
            marginTop: "4rem",
            padding: "2rem",
          }}
        >
          <p
            style={{
              fontSize: "1.3rem",
              color: "#f0d570",
              fontWeight: "bold",
            }}
          >
            🙏 ขอบคุณที่เข้ามาเยี่ยมชม TFT Universe!
          </p>
          <p
            style={{
              fontSize: "1.1rem",
              color: "#d0d0d0",
              marginTop: "1rem",
            }}
          >
            หวังว่าข้อมูลของเราจะช่วยให้คุณก้าวไปสู่ระดับ TFT Master ได้สำเร็จ
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;