import React, { useState, useEffect } from "react";
import "../shopNow.css";
import ipGold from "../assets/Iphone 14 pro 1 GOLD (1).png";
import ipSilver from "../assets/Iphone 14 pro 1 WHITE (2).png";
import ipPurple from "../assets/Iphone 14 pro 1.png";
import ip13 from "../assets/Iphone 13 pro 1 (1).png";
import ipBlack from "../assets/Iphone 14 pro BLACK 1 (1).png";
import ip11 from "../assets/Iphone 14 pro 1 (1).png";
import { useCart } from "../constants/CartContext"; 

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface FilterItem {
  name: string;
  count: number;
}

const iphoneModels: FilterItem[] = [
  { name: "iPhone 11", count: 2 },
  { name: "iPhone 13 mini", count: 1 },
  { name: "iPhone 14 Pro", count: 6 },
];

const batteryCapacities: FilterItem[] = [
  { name: "3000 - 4000 mAh", count: 42 },
  { name: "4000 - 5000 mAh", count: 95 },
  { name: "5000 mAh and above", count: 30 },
];

const screenTypes: FilterItem[] = [
  { name: "AMOLED", count: 112 },
  { name: "IPS", count: 45 },
  { name: "OLED", count: 80 },
];

const screenDiagonals: FilterItem[] = [
  { name: "6.1 inch", count: 50 },
  { name: "6.5 inch", count: 40 },
  { name: "6.7 inch", count: 65 },
];

const protectionClasses: FilterItem[] = [
  { name: "IP67", count: 25 },
  { name: "IP68", count: 140 },
];

const builtInMemories: FilterItem[] = [
  { name: "128GB", count: 70 },
  { name: "256GB", count: 65 },
  { name: "512GB", count: 40 },
  { name: "1TB", count: 15 },
];

const initialProducts: Product[] = [
  {
    id: 1,
    title: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
    price: 1437,
    image: ipGold,
  },
  {
    id: 2,
    title: "Apple iPhone 11 128GB White (MQ233)",
    price: 510,
    image: ip11,
  },
  {
    id: 3,
    title: "Apple iPhone 11 128GB White (MQ233)",
    price: 550,
    image: ip11,
  },
  {
    id: 4,
    title: "Apple iPhone 14 Pro 1TB Gold (MQ2V3)",
    price: 1499,
    image: ipGold,
  },
  {
    id: 5,
    title: "Apple iPhone 14 Pro 1TB Gold (MQ2V3)",
    price: 1399,
    image: ipGold,
  },
  {
    id: 6,
    title: "Apple iPhone 14 Pro 128GB Deep Purple (MQ0G3)",
    price: 1600,
    image: ipPurple,
  },
  {
    id: 7,
    title: "Apple iPhone 13 mini 128GB Pink (MLK23)",
    price: 850,
    image: ip13,
  },
  {
    id: 8,
    title: "Apple iPhone 14 Pro 256GB Space Black (MQ0T3)",
    price: 1399,
    image: ipBlack,
  },
  {
    id: 9,
    title: "Apple iPhone 14 Pro 256GB Silver (MQ103)",
    price: 1399,
    image: ipSilver,
  },
];

const ShopNowComponents: React.FC = () => {
  const { addToCart } = useCart();

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [isOpen, setIsOpen] = useState({
    model: true,
    battery: false,
    screenType: false,
    screenDiagonal: false,
    protection: false,
    memory: false,
  });

  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const [selectedMemories, setSelectedMemories] = useState<string[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 700));
        setProducts(initialProducts);
        setLoading(false);
      } catch (err) {
        setError("Məlumatlar yüklənərkən xəta baş verdi!");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const toggleSection = (section: keyof typeof isOpen) => {
    setIsOpen((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleModelChange = (modelName: string) => {
    setSelectedModels((prev) =>
      prev.includes(modelName)
        ? prev.filter((item) => item !== modelName)
        : [...prev, modelName],
    );
  };

  const handleMemoryChange = (memoryName: string) => {
    setSelectedMemories((prev) =>
      prev.includes(memoryName)
        ? prev.filter((item) => item !== memoryName)
        : [...prev, memoryName],
    );
  };

  const filteredProducts = products.filter((product) => {
    const matchesModel =
      selectedModels.length === 0 ||
      selectedModels.some((model) => product.title.includes(model));

    const matchesMemory =
      selectedMemories.length === 0 ||
      selectedMemories.some((memory) => product.title.includes(memory));

    return matchesModel && matchesMemory;
  });

  if (loading) {
    return <div style={{ textAlign: "center", padding: "60px", fontSize: "18px" , fontFamily: "sans-serif" }}> Loading... ⏳</div>;
  }

  if (error) {
    return <div style={{ textAlign: "center", padding: "60px", color: "red", fontSize: "18px" }}>{error}</div>;
  }

  return (
    <div className="container_8">
      <div className="sub_container_7">
        <aside className="sidebar">
          <div className="filter-section">
            <h3
              onClick={() => toggleSection("model")}
              style={{ cursor: "pointer" }}
            >
              iPhone Model <span>{isOpen.model ? "▲" : "▼"} </span>
            </h3>
            {isOpen.model && (
              <>
                <div className="search-box-wrapper">
                  <input
                    type="text"
                    placeholder="Search"
                    className="search-input"
                  />
                </div>
                <div className="filter-group">
                  {iphoneModels.map((item, index) => (
                    <label key={index} className="filter-label">
                      <input
                        type="checkbox"
                        checked={selectedModels.includes(item.name)}
                        onChange={() => handleModelChange(item.name)}
                      />
                      <span>{item.name}</span>
                      <span className="count">{item.count}</span>
                    </label>
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="filter-section">
            <h3
              onClick={() => toggleSection("battery")}
              style={{ cursor: "pointer" }}
            >
              Battery capacity <span>{isOpen.battery ? "▲" : "▼"}</span>
            </h3>
            {isOpen.battery && (
              <div className="filter-group">
                {batteryCapacities.map((item, index) => (
                  <label key={index} className="filter-label">
                    <input type="checkbox" />
                    <span>{item.name}</span>
                    <span className="count">{item.count}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          <div className="filter-section">
            <h3
              onClick={() => toggleSection("screenType")}
              style={{ cursor: "pointer" }}
            >
              Screen type <span>{isOpen.screenType ? "▲" : "▼"}</span>
            </h3>
            {isOpen.screenType && (
              <div className="filter-group">
                {screenTypes.map((item, index) => (
                  <label key={index} className="filter-label">
                    <input type="checkbox" />
                    <span>{item.name}</span>
                    <span className="count">{item.count}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          <div className="filter-section">
            <h3
              onClick={() => toggleSection("screenDiagonal")}
              style={{ cursor: "pointer" }}
            >
              Screen diagonal <span>{isOpen.screenDiagonal ? "▲" : "▼"}</span>
            </h3>
            {isOpen.screenDiagonal && (
              <div className="filter-group">
                {screenDiagonals.map((item, index) => (
                  <label key={index} className="filter-label">
                    <input type="checkbox" />
                    <span>{item.name}</span>
                    <span className="count">{item.count}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          <div className="filter-section">
            <h3
              onClick={() => toggleSection("protection")}
              style={{ cursor: "pointer" }}
            >
              Protection class <span>{isOpen.protection ? "▲" : "▼"}</span>
            </h3>
            {isOpen.protection && (
              <div className="filter-group">
                {protectionClasses.map((item, index) => (
                  <label key={index} className="filter-label">
                    <input type="checkbox" />
                    <span>{item.name}</span>
                    <span className="count">{item.count}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          <div className="filter-section">
            <h3
              onClick={() => toggleSection("memory")}
              style={{ cursor: "pointer" }}
            >
              Built-in memory <span>{isOpen.memory ? "▲" : "▼"}</span>
            </h3>
            {isOpen.memory && (
              <div className="filter-group">
                {builtInMemories.map((item, index) => (
                  <label key={index} className="filter-label">
                    <input
                      type="checkbox"
                      checked={selectedMemories.includes(item.name)}
                      onChange={() => handleMemoryChange(item.name)}
                    />
                    <span>{item.name}</span>
                    <span className="count">{item.count}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        </aside>

        <main className="main-content">
          <div className="top-bar">
            <span>
              Selected Products:{" "}
              <strong style={{ fontFamily: "sans-serif" }}>
                {filteredProducts.length}
              </strong>
            </span>
            <select className="sort-select">
              <option>By rating</option>
              <option>By price</option>
            </select>
          </div>

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <button className="wishlist-btn">♡</button>
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-img"
                />
                <h4 className="product-title">{product.title}</h4>
                <p className="product-price">${product.price}</p>
                <button 
                  className="buy-btn"
                  onClick={() => addToCart({ ...product, quantity: 1 })}
                >
                  Buy Now
                </button>
              </div>
            ))}
          </div>

          <div className="pagination">
            <button>&lt;</button>
            <button className="active">1</button>
            <button>2</button>
            <button>3</button>
            <span>...</span>
            <button>12</button>
            <button>&gt;</button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ShopNowComponents;