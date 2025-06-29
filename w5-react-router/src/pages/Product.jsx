import React, { useState } from "react";

function Product() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);

  const itemCategories = [
    { id: "all", name: "ทั้งหมด", icon: "🎯" },
    { id: "damage", name: "ดาเมจ", icon: "⚔️" },
    { id: "tank", name: "ป้องกัน", icon: "🛡️" },
    { id: "support", name: "สนับสนุน", icon: "💫" },
  ];

  const items = [
    {
      id: 1,
      name: "B.F. Sword",
      category: "damage",
      type: "Basic",
      stats: "+10 Attack Damage",
      description:
        "ไอเท็มพื้นฐานที่เพิ่มพลังโจมตี เป็นส่วนประกอบสำคัญของไอเท็มดาเมจหลายชิ้น",
      image: "⚔️",
      recipes: ["Infinity Edge", "Deathblade", "Giant Slayer"],
      price: "พื้นฐาน",
      rarity: "basic",
    },
    {
      id: 2,
      name: "Chain Vest",
      category: "tank",
      type: "Basic",
      stats: "+20 Armor",
      description: "เกราะพื้นฐานที่ลดดาเมจกายภาพ ใช้สร้างไอเท็มป้องกันต่างๆ",
      image: "🛡️",
      recipes: ["Gargoyle Stoneplate", "Bramble Vest", "Sunfire Cape"],
      price: "พื้นฐาน",
      rarity: "basic",
    },
    {
      id: 3,
      name: "Needlessly Large Rod",
      category: "damage",
      type: "Basic",
      stats: "+10 Ability Power",
      description: "ไอเท็มพื้นฐานสำหรับเพิ่มพลังเวท เหมาะกับตัวละครที่ใช้สกิล",
      image: "🔮",
      recipes: ["Rabadon's Deathcap", "Archangel's Staff", "Morellonomicon"],
      price: "พื้นฐาน",
      rarity: "basic",
    },
    {
      id: 4,
      name: "Infinity Edge",
      category: "damage",
      type: "Combined",
      stats: "+75 Attack Damage, +10% Crit Chance",
      description: "เมื่อ Critical Hit จะสร้างดาเมจเพิ่มขึ้น 225% แทน 150%",
      image: "💎",
      recipes: ["B.F. Sword + B.F. Sword"],
      price: "รวม",
      rarity: "legendary",
      effect: "Critical Strike เพิ่มดาเมจ",
    },
    {
      id: 5,
      name: "Gargoyle Stoneplate",
      category: "tank",
      type: "Combined",
      stats: "+40 Armor, +40 Magic Resist",
      description:
        "เมื่อต่อสู้เริ่มต้น ได้รับโล่ที่ดูดซับดาเมจตามจำนวนศัตรูรอบตัว",
      image: "🗿",
      recipes: ["Chain Vest + Negatron Cloak"],
      price: "รวม",
      rarity: "legendary",
      effect: "โล่ป้องกันตามจำนวนศัตรู",
    },
    {
      id: 6,
      name: "Spear of Shojin",
      category: "support",
      type: "Combined",
      stats: "+15 Attack Damage, +15 Ability Power",
      description: "หลังจากใช้สกิล จะได้รับ 20 Mana เพิ่ม",
      image: "🔱",
      recipes: ["B.F. Sword + Tear of the Goddess"],
      price: "รวม",
      rarity: "epic",
      effect: "รีเซ็ต Mana หลังใช้สกิล",
    },
    {
      id: 7,
      name: "Bramble Vest",
      category: "tank",
      type: "Combined",
      stats: "+35 Armor",
      description:
        "เมื่อถูกโจมตี จะสะท้อนดาเมจกลับไปยังผู้โจมตี และลด Attack Speed ของศัตรู",
      image: "🌿",
      recipes: ["Chain Vest + Chain Vest"],
      price: "รวม",
      rarity: "epic",
      effect: "สะท้อนดาเมจและลด Attack Speed",
    },
    {
      id: 8,
      name: "Archangel's Staff",
      category: "support",
      type: "Combined",
      stats: "+20 Ability Power, +20 Mana",
      description:
        "ทุกครั้งที่ใช้สกิล จะได้รับ 20 Mana เพิ่ม และเพิ่ม Ability Power ถาวร",
      image: "👼",
      recipes: ["Needlessly Large Rod + Tear of the Goddess"],
      price: "รวม",
      rarity: "epic",
      effect: "สะสม Ability Power",
    },
    {
      id: 9,
      name: "Morellonomicon",
      category: "damage",
      type: "Combined",
      stats: "+20 Ability Power, +150 Health",
      description:
        "สกิลจะสร้าง Burn Effect ที่ทำดาเมจต่อเนื่อง และลดการรักษาของศัตรู",
      image: "📖",
      recipes: ["Needlessly Large Rod + Giant's Belt"],
      price: "รวม",
      rarity: "epic",
      effect: "Burn และ Grievous Wounds",
    },
    {
      id: 10,
      name: "Quicksilver Sash",
      category: "support",
      type: "Combined",
      stats: "+20 Magic Resist",
      description:
        "ป้องกัน CC Effect แรกที่เข้ามา และได้รับ Attack Speed เพิ่ม 30% เป็นเวลา 8 วินาที",
      image: "🌟",
      recipes: ["Negatron Cloak + Gloves"],
      price: "รวม",
      rarity: "epic",
      effect: "ป้องกัน CC",
    },
    {
      id: 11,
      name: "Rabadon's Deathcap",
      category: "damage",
      type: "Combined",
      stats: "+40 Ability Power",
      description: "เพิ่ม Ability Power ทั้งหมดอีก 50%",
      image: "🎩",
      recipes: ["Needlessly Large Rod + Needlessly Large Rod"],
      price: "รวม",
      rarity: "legendary",
      effect: "เพิ่ม AP 50%",
    },
    {
      id: 12,
      name: "Thieves' Gloves",
      category: "support",
      type: "Combined",
      stats: "Random Items",
      description:
        "ทุกรอบจะได้รับไอเท็มสุ่ม 2 ชิ้น ความแรงขึ้นอยู่กับเลเวลของตัวละคร",
      image: "🧤",
      recipes: ["Gloves + Gloves"],
      price: "รวม",
      rarity: "unique",
      effect: "ไอเท็มสุ่มทุกรอบ",
    },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case "basic":
        return "#9ca3af";
      case "epic":
        return "#a855f7";
      case "legendary":
        return "#f59e0b";
      case "unique":
        return "#ef4444";
      default:
        return "#6b7280";
    }
  };

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');

        .tft-container {
          max-width: 1200px;
          margin: 2rem auto;
          padding: 2rem;
          background: linear-gradient(135deg, #0a0a0a, #1a0a0a);
          border-radius: 25px;
          box-shadow: 0 0 40px 8pxrgba(0, 99, 228, 0.82);
          font-family: 'Orbitron', sans-serif;
          color: #fff;
          position: relative;
          overflow: hidden;
        }

        .tft-container::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle at center,rgba(19, 92, 230, 0.27), transparent 70%);
          filter: blur(60px);
          opacity: 0.3;
          pointer-events: none;
          z-index: 0;
        }

        .tft-title {
          text-align: center;
          font-size: 3.5rem;
          margin-bottom: 1rem;
          color:rgb(70, 131, 201);
          text-shadow: 0 0 25pxrgb(53, 148, 211);
          letter-spacing: 5px;
          font-weight: 900;
          user-select: none;
          position: relative;
          z-index: 2;
        }

        .tft-subtitle {
          text-align: center;
          font-size: 1.3rem;
          margin-bottom: 3rem;
          color:rgb(35, 106, 240);
          font-style: italic;
          user-select: none;
          position: relative;
          z-index: 2;
        }

        .category-filters {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
          position: relative;
          z-index: 2;
        }

        .category-button {
          background: linear-gradient(135deg, #2a1a0a, #4a3a1a);
          border: 2px solid #c49b61;
          color: #e6d7b7;
          padding: 0.8rem 1.5rem;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Orbitron', sans-serif;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          user-select: none;
        }

        .category-button:hover,
        .category-button.active {
          background: linear-gradient(135deg, #c49b61, #d4af37);
          color: #1a1a1a;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px 3px #c49b6133;
        }

        .items-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
          position: relative;
          z-index: 2;
        }

        .item-card {
          background: linear-gradient(135deg, #2a1a0a, #4a2a1a);
          border-radius: 18px;
          padding: 1.8rem;
          box-shadow:
            inset 0 0 12px 3px #c49b61cc,
            0 6px 20px 4px #c49b6111;
          transition: all 0.4s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          border: 2px solid transparent;
        }

        .item-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow:
            inset 0 0 18px 6px #d4af37dd,
            0 12px 30px 8px #c49b6133;
          border-color: #c49b61;
        }

        .item-card::before {
          content: "";
          position: absolute;
          top: -20%;
          left: -30%;
          width: 160%;
          height: 160%;
          background: radial-gradient(circle at center, #c49b61bb, transparent 70%);
          filter: blur(40px);
          opacity: 0.1;
          pointer-events: none;
          transition: opacity 0.5s ease;
          z-index: 0;
        }

        .item-card:hover::before {
          opacity: 0.3;
        }

        .item-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
          position: relative;
          z-index: 2;
        }

        .item-icon {
          font-size: 2.5rem;
          user-select: none;
        }

        .item-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #d4af37;
          text-shadow: 0 0 8px #c49b61;
          user-select: none;
        }

        .item-type {
          margin-left: auto;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          user-select: none;
        }

        .item-stats {
          color: #c49b61;
          font-weight: 600;
          margin-bottom: 1rem;
          font-size: 1rem;
          position: relative;
          z-index: 2;
        }

        .item-description {
          color: #e6d7b7;
          line-height: 1.5;
          margin-bottom: 1rem;
          font-size: 0.95rem;
          position: relative;
          z-index: 2;
        }

        .item-recipes {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          position: relative;
          z-index: 2;
        }

        .recipe-tag {
          background: #c49b6133;
          color: #d4af37;
          padding: 0.3rem 0.7rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .item-effect {
          background: linear-gradient(135deg, #4a3a1a, #6a4a2a);
          padding: 0.8rem;
          border-radius: 10px;
          margin-top: 1rem;
          border-left: 4px solid #c49b61;
          position: relative;
          z-index: 2;
        }

        .effect-label {
          color: #c49b61;
          font-weight: 600;
          font-size: 0.9rem;
        }

        /* Modal styles */
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .modal-content {
          background: linear-gradient(135deg, #1a1a1a, #2a1a0a);
          padding: 2.5rem;
          border-radius: 25px;
          max-width: 600px;
          width: 90%;
          box-shadow: 0 0 40px 15px #c49b61cc;
          color: #fff;
          font-family: 'Orbitron', sans-serif;
          position: relative;
          border: 3px solid #c49b61;
        }

        .modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: transparent;
          border: none;
          font-size: 2rem;
          color: #c49b61;
          cursor: pointer;
          font-weight: 900;
        }

        .modal-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .modal-icon {
          font-size: 4rem;
        }

        .modal-title {
          font-size: 2.5rem;
          color: #d4af37;
          text-shadow: 0 0 15px #c49b61;
          font-weight: 900;
        }

        .modal-stats {
          font-size: 1.3rem;
          color: #c49b61;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .modal-description {
          font-size: 1.2rem;
          color: #e6d7b7;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .modal-recipes {
          background: linear-gradient(135deg, #4a3a1a, #6a4a2a);
          padding: 1.5rem;
          border-radius: 15px;
          margin-bottom: 1.5rem;
        }

        .modal-recipes h4 {
          color: #c49b61;
          margin-bottom: 1rem;
          font-size: 1.2rem;
        }

        .modal-recipe-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
        }

        .modal-recipe-tag {
          background: #c49b6144;
          color: #d4af37;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-weight: 600;
          border: 1px solid #c49b61;
        }

        @media (max-width: 768px) {
          .tft-title {
            font-size: 2.5rem;
          }
          
          .items-grid {
            grid-template-columns: 1fr;
          }
          
          .category-filters {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>

      <div className="tft-container">
        <h1 className="tft-title">TFT Items Guide</h1>
        <p className="tft-subtitle">คู่มือไอเท็มใน Teamfight Tactics</p>

        <div className="category-filters">
          {itemCategories.map((category) => (
            <button
              key={category.id}
              className={`category-button ${
                selectedCategory === category.id ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <span>{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        <div className="items-grid">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="item-card"
              onClick={() => openModal(item)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  openModal(item);
                }
              }}
            >
              <div className="item-header">
                <span className="item-icon">{item.image}</span>
                <div>
                  <h3 className="item-title">{item.name}</h3>
                  <div
                    className="item-type"
                    style={{
                      background: getRarityColor(item.rarity) + "33",
                      color: getRarityColor(item.rarity),
                      border: `1px solid ${getRarityColor(item.rarity)}`,
                    }}
                  >
                    {item.type}
                  </div>
                </div>
              </div>

              <div className="item-stats">{item.stats}</div>
              <p className="item-description">{item.description}</p>

              {item.effect && (
                <div className="item-effect">
                  <div className="effect-label">เอฟเฟกต์: {item.effect}</div>
                </div>
              )}

              <div className="item-recipes">
                {item.recipes.slice(0, 2).map((recipe, index) => (
                  <span key={index} className="recipe-tag">
                    {recipe}
                  </span>
                ))}
                {item.recipes.length > 2 && (
                  <span className="recipe-tag">
                    +{item.recipes.length - 2} เพิ่มเติม
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedItem && (
        <div
          className="modal-overlay"
          onClick={closeModal}
          onKeyDown={(e) => {
            if (e.key === "Escape") closeModal();
          }}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>

            <div className="modal-header">
              <span className="modal-icon">{selectedItem.image}</span>
              <div>
                <h2 className="modal-title">{selectedItem.name}</h2>
                <div
                  className="item-type"
                  style={{
                    background: getRarityColor(selectedItem.rarity) + "33",
                    color: getRarityColor(selectedItem.rarity),
                    border: `1px solid ${getRarityColor(selectedItem.rarity)}`,
                  }}
                >
                  {selectedItem.type}
                </div>
              </div>
            </div>

            <div className="modal-stats">{selectedItem.stats}</div>
            <p className="modal-description">{selectedItem.description}</p>

            {selectedItem.effect && (
              <div className="item-effect">
                <div className="effect-label">
                  เอฟเฟกต์พิเศษ: {selectedItem.effect}
                </div>
              </div>
            )}

            <div className="modal-recipes">
              <h4>สูตรการรวม / ใช้ในการสร้าง:</h4>
              <div className="modal-recipe-list">
                {selectedItem.recipes.map((recipe, index) => (
                  <span key={index} className="modal-recipe-tag">
                    {recipe}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Product;
