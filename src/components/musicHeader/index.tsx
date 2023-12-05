import "./index.css";
import { SmileTwoTone, SearchOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";

interface menuList {
  id: number;
  title: string;
  router: string;
  children?: any;
}

//主页菜单数据
const menuList: menuList[] = [
  {
    id: 1,
    title: "发现音乐",
    router: "",
    children: [
      {
        title: "推荐",
        router: "",
      },
      {
        title: "排行榜",
        router: "",
      },
      {
        title: "歌单",
        router: "",
      },
      {
        title: "主播电台",
        router: "",
      },
      {
        title: "歌手",
        router: "",
      },
      {
        title: "新碟上架",
        router: "",
      },
    ],
  },
  {
    id: 2,
    title: "我的音乐",
    router: "",
  },
  {
    id: 3,
    title: "关注",
    router: "",
  },
  {
    id: 4,
    title: "商城",
    router: "",
  },
  {
    id: 5,
    title: "音乐人",
    router: "",
  },
  {
    id: 6,
    title: "云推歌",
    router: "",
  },
  {
    id: 7,
    title: "下载客户端",
    router: "",
  },
];

const liList = menuList.map((item: menuList) => {
  return <li key={item.id}>{item.title}</li>;
});

function MusicHeader() {
  return (
    <div className="musicHeader">
      <div className="title">
        <SmileTwoTone />
        <h1>网易云音乐</h1>
      </div>
      <div className="menu">
        <ul>{liList}</ul>
      </div>
      <div className="search">
        <Input addonBefore={<SearchOutlined />} placeholder="large size" />
      </div>
      <div className="btns">
        <Button>创作者中心</Button>
        <Button>登录</Button>
      </div>
    </div>
  );
}

export default MusicHeader;
