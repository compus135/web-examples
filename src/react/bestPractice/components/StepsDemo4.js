import React, { useState, useEffect } from "react";
import { Tabs } from "antd";

const { TabPane } = Tabs;
const Test = () => {
  const [activeTabKey, setActiveTabKey] = useState("1");
  const [step1Values, setStep1Values] = useState();
  const handleClickNext = (values) => {
    setStep1Values(values);
    setActiveTabKey("2");
  };
  const handleClickPre = () => {
    setActiveTabKey("1");
  };
  const handleSubmit = (values) => {
    console.log(step1Values, values);
  };
  return (
    <div>
      <Tabs activeKey={activeTabKey}>
        <TabPane key="1">
          <Step1 onClickNext={handleClickNext}></Step1>
        </TabPane>
        <TabPane key="2">
          {step1Values && step1Values.age < 10 ? (
            <Step2Child onClickPre={handleClickPre} onSubmit={handleSubmit} />
          ) : (
            <Step2Adault onClickPre={handleClickPre} onSubmit={handleSubmit} />
          )}
        </TabPane>
      </Tabs>
    </div>
  );
};
const Step1 = ({ onClickNext }) => {
  const [name, setName] = useState("");
  const [sex, setSex] = useState("");
  const [age, setAge] = useState("");
  return (
    <div>
      <h1> step 111</h1>
      姓名 <input value={name} onChange={(e) => setName(e.target.value)} />
      性别 <input value={sex} onChange={(e) => setSex(e.target.value)} />
      年龄 <input value={age} onChange={(e) => setAge(e.target.value)} />
      <div>
        <button onClick={() => onClickNext({ name, sex, age })}>下一步</button>
      </div>
    </div>
  );
};

const Step2Adault = ({ onClickPre, onSubmit }) => {
  const [school, setSchool] = useState("");
  const [hobby, setHobby] = useState("");
  useEffect(() => {
    console.log("mount");
  }, []);
  return (
    <div>
      <h1> step 222</h1>
      毕业院校
      <input value={school} onChange={(e) => setSchool(e.target.value)} />
      兴趣爱好
      <input value={hobby} onChange={(e) => setHobby(e.target.value)} />
      <div>
        <button onClick={onClickPre}>上一步</button>
        <button onClick={() => onSubmit({ school, hobby })}>完成</button>
      </div>
    </div>
  );
};

const Step2Child = ({ onClickPre, onSubmit }) => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  useEffect(() => {
    console.log("mount");
  }, []);
  return (
    <div>
      <h1> step 222</h1>
      身高
      <input value={height} onChange={(e) => setHeight(e.target.value)} />
      体重
      <input value={weight} onChange={(e) => setWeight(e.target.value)} />
      <div>
        <button onClick={onClickPre}>上一步</button>
        <button onClick={onSubmit}>完成</button>
      </div>
    </div>
  );
};
export default Test;
