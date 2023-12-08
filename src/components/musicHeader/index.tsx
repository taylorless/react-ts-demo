import { useState } from "react";
import { SmileTwoTone, SearchOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { headerLinks } from "../../common/localData";
import "./index.css";

// interface menuList {
//   id: number;
//   title: string;
//   router: string;
//   children?: [];
// }

function MusicHeader() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    console.log(1);
    setIsActive((current) => !current);
  };

  return (
    <div className="musicHeader">
      <div className="title">
        <SmileTwoTone />
        <h1>网易云音乐</h1>
      </div>
      <div className="menu">
        <ul>
          {headerLinks.map((item) => {
            return (
              <li
                onClick={handleClick}
                key={item.title}
                style={{
                  backgroundColor: isActive ? "white" : "#242424",
                }}
              >
                {item.title}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="search">
        <Input
          addonBefore={<SearchOutlined />}
          placeholder="音乐/电台/视频/用户"
        />
      </div>
      <div className="btns">
        <Button shape="round">创作者中心</Button>
        <span>登录</span>
      </div>
    </div>
  );
}

export default MusicHeader;
