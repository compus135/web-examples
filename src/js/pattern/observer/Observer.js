// 观察者
class Observer {
  constructor(name) {
    this.name = name;
  }
  update(state) {
    console.log(this.name + "观察到小宝宝当前状态：" + state);
  }
}
// 被观察者
class Subject {
  constructor() {
    this.observers = [];
    this.state = "开心";
  }
  attach(observer) {
    this.observers.push(observer);
  }

  setState(newState) {
    this.state = newState;
    this.observers.forEach((o) => o.update(newState));
  }
}

const dad = new Observer("爸爸");
const mom = new Observer("妈妈");
const baby = new Subject();
baby.attach(dad);
baby.attach(mom);
baby.setState("不开心");
