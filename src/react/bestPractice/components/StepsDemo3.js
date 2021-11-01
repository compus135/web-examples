import React, { useState, useEffect } from "react";
// 首次访问到Step时，初始挂载
// Step维护自身state
const Test = () => {
  // const [visitedCount, setVisitedCount] = useState(1);
  const [step, setStep] = useState(0);
  const [step1Value, setStep1Value] = useState("");
  const [step2Value, setStep2Value] = useState("");

  const handleClickNext = (value) => {
    setStep(1);
    setStep1Value(value);
    // setVisitedCount(2);
  };
  const handleClickPrev = () => {
    setStep(0);
  };

  const handleSubmit = (value) => {
    setStep2Value(value);
    console.log(step1Value, value);
  };

  return (
    <div>
      <Steps current={step}>
        <Steps.Step>
          <Step1 onClickNext={handleClickNext} />
        </Steps.Step>
        <Steps.Step>
          {step1Value.age < 10 ? (
            <Step2Child onClickPre={handleClickPrev} onSubmit={handleSubmit} />
          ) : (
            <Step2Adault onClickPre={handleClickPrev} onSubmit={handleSubmit} />
          )}
        </Steps.Step>
      </Steps>
    </div>
  );
};

// 未访问过的Step不渲染
// 保证 props.children 都是Step
const Steps = (props) => {
  const { current } = props;
  const [visitedMaxStep, setVisitedMaxStep] = useState(current);
  useEffect(() => {
    setVisitedMaxStep(Math.max(current, visitedMaxStep));
  }, [current, visitedMaxStep]);
  if (props.children.length > 0) {
    const eStep = [];
    for (let index = 0; index <= visitedMaxStep; index++) {
      const _step = (
        <div
          style={
            props.current === index ? { display: "block" } : { display: "none" }
          }
        >
          {props.children[index]}
        </div>
      );
      eStep.push(_step);
    }
    return eStep;
  } else {
    return null;
  }
};

Steps.Step = (props) => {
  return props.children;
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
