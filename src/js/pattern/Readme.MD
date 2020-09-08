观察者模式也叫做发布/订阅模式（Publish/Subscribe）。当被观察者状态改变时，通知所有观察者。

```
class Subject {
  observers = [];
  addObserver(observer) {
    this.observers.push(observer);
  }
  doSomething() {
    console.log("Subject: doing something...");
    for (const observer of this.observers) {
      observer.update("subject is doing something...");
    }
  }
}

class Observer {
  update(info) {
    console.log("observer:", info);
  }
}

const subject = new Subject();
const observer = new Observer();

subject.addObserver(observer);
subject.doSomething();
```
