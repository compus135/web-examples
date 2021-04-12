import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Tabs } from "antd";
import "./index.css";

/**
  1. 列表页有文章和项目两项内容，路径分别为list/articles, list/projects
 */
const Test = () => {
  return (
    <Router>
      <Route path="/" exact component={App}></Route>
      <Route path="/list" component={List}></Route>
    </Router>
  );
};

const App = () => {
  return (
    <div>
      <Link to="/list/projects">文章列表 </Link>
    </div>
  );
};

const { TabPane } = Tabs;
const List = (props) => {
  const { location, match, history } = props;
  const activeKey = location.pathname.replace(`${match.url}/`, "");
  const handleChange = (activeKey) =>
    history.push({
      pathname:
        activeKey === "articles"
          ? `${match.url}/articles`
          : `${match.url}/projects`,
    });
  return (
    <div>
      <Tabs
        activeKey={activeKey}
        onChange={(activeKey) => handleChange(activeKey)}
      >
        <TabPane tab="文章" key="articles" />
        <TabPane tab="项目" key="projects" />
      </Tabs>
      <Route path={`${match.url}/articles`} component={Articles}></Route>
      <Route path={`${match.url}/projects`} component={Projects}></Route>
    </div>
  );
};

const Articles = () => {
  return <div>this is page Articles...</div>;
};

const Projects = () => {
  return <div>this is page Projects...</div>;
};
export default Test;
