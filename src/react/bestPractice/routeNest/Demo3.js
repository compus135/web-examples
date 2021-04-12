import React from "react";
import { Tabs } from "antd";
import { BrowserRouter, Link, Route, Redirect } from "react-router-dom";
const { TabPane } = Tabs;
class Test extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={Home}></Route>
        <Route path="/projectInfo" component={ProjectInfo}></Route>
      </BrowserRouter>
    );
  }
}

const Home = () => {
  return (
    <div>
      <div>
        <Link to="/projectInfo/comments/subComments1">
          comments/subComments1
        </Link>
      </div>
      <div>
        <Link to="/projectInfo/articles/subArticles2">
          articles/subArticles2
        </Link>
      </div>
    </div>
  );
};

const ProjectInfo = (props) => {
  const { location, match } = props;
  const activeKey = location.pathname.includes(`/comments`)
    ? "comments"
    : "articles";

  return (
    <div>
      <Tabs activeKey={activeKey}>
        <TabPane tab="articles" key="articles"></TabPane>
        <TabPane tab="comments" key="comments"></TabPane>
      </Tabs>

      <Route path={`${match.url}/articles`} component={Articles}></Route>
      <Route path={`${match.url}/comments`} component={Comments}></Route>
    </div>
  );
};

const Articles = (props) => {
  const { location, match, history } = props;
  const activeKey = location.pathname.replace(`${match.url}/`, "");
  const handleChange = (activeKey) => {
    history.push({ pathname: `${match.url}/${activeKey}` });
  };
  return (
    <div>
      <Tabs
        activeKey={activeKey}
        onChange={(activeKey) => handleChange(activeKey)}
      >
        <TabPane tab="subArticles1" key="subArticles1"></TabPane>
        <TabPane tab="subArticles2" key="subArticles2"></TabPane>
      </Tabs>
      <Redirect path={match.url} to={`${match.url}/subArticles1`} exact />
      <Route
        path={`${match.url}/subArticles1`}
        component={SubArticles1}
      ></Route>
      <Route
        path={`${match.url}/subArticles2`}
        component={SubArticles2}
      ></Route>
    </div>
  );
};

const Comments = (props) => {
  const { location, match, history } = props;
  const activeKey = location.pathname.replace(`${match.url}/`, "");
  const handleChange = (activeKey) => {
    history.push({ pathname: `${match.url}/${activeKey}` });
  };
  return (
    <div>
      <Tabs
        activeKey={activeKey}
        onChange={(activeKey) => handleChange(activeKey)}
      >
        <TabPane tab="subComments1" key="subComments1"></TabPane>
        <TabPane tab="subComments2" key="subComments2"></TabPane>
      </Tabs>
      <Redirect path={match.url} to={`${match.url}/subComments1`} exact />

      <Route
        path={`${match.url}/subComments1`}
        component={SubComments1}
      ></Route>
      <Route
        path={`${match.url}/subComments2`}
        component={SubComments2}
      ></Route>
    </div>
  );
};
const SubArticles1 = () => {
  return <div>this is page SubArticles1...</div>;
};
const SubArticles2 = () => {
  return <div>this is page SubArticles2...</div>;
};
const SubComments1 = () => {
  return <div>this is page SubComments1...</div>;
};
const SubComments2 = () => {
  return <div>this is page SubComments2...</div>;
};
export default Test;
