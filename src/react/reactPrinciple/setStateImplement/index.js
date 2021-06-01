import Component from "./ReactBaseClasses.js";
import { HostRoot, ClassComponent } from "./ReactWorkTags.js";
import { batchedUpdates } from "./ReactFiberWorkLoop.js";
class Counter extends Component {
  state = { count: 0 };
  handleIncrease = () => {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
    // setTimeout(() => {
    //   this.setState({ count: this.state.count + 1 });
    //   console.log(this.state.count);
    //   this.setState({ count: this.state.count + 1 });
    //   console.log(this.state.count);
    // });
  };
  render() {
    console.log(this.state.count);
    return this.state.count;
  }
}

const counter = new Counter();
const counterFiber = { updateQueue: [], tag: ClassComponent };
counter._reactInternals = counterFiber;
counterFiber.stateNode = counter;
const rootFiber = { updateQueue: [], tag: HostRoot };

rootFiber.child = counterFiber;
counterFiber.return = rootFiber;

document.addEventListener("click", () => {
  batchedUpdates(counter.handleIncrease);
  // counter.handleIncrease();
});
