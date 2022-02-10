import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    // welcome: "hello hi ",
    // imageURL: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
    // tags: [],
  };

  // *****if we use an arrow function for handleIncrement, constructor() is not necessary
  // // cannot call constructor in child class, so we call super() f=to get to parent class??
  // constructor() {
  //   super();
  //   // value of 'this' will return a new instance of the handle increment option onClick
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // binding event handlers
  handleIncrement = (product) => {
    // console.log("Increment Clicked", this);

    // updating the state

    // this.setState() method tells React that we are updating the state. then it figures out
    // which state is being changed then updates real DOM with virtual DOM
    this.setState({ count: this.state.count + 1 });
  };

  // put this in onClick() for better efficincy and dynamically code
  // product instead of hard-coding id: 1
  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: 1 });
  // };

  render() {
    // rendering classes dynamically

    // React.createElement("h1");
    return (
      // embedding expressions -- this.formatCount()
      //setting attributes -- className="..."
      // rendering lists ... {this.state.tags.map(tag => <li>{ tag } </li>)}
      // 'map' executes callback functions and iterates through the OLD array and returns a NEW array
      // map(tag) arrow function returns new list
      // key={...} is called a 'key prop' and allows virtual DOM to alter components without having to refresh the real DOM entire page
      // REACT updates virtual DOM and then it will update real DOM with ONLY the change in virtual DOM
      // handling events..... onClick={}

      <div>
        <img src={this.state.imageURL} alt=""></img>
        <span style={{ fontSize: 30 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag} </li>
          ))}
        </ul> */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  //method
  formatCount() {
    const { count } = this.state; // this is the same exact thing as this.state.count
    return count === 0 ? "Zero" : count;
  }

  // conditional rendering

  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p>There are no tags</p>;
  //     return (
  //       <ul>
  //         {this.state.tags.map((tag) => (
  //           <li key={tag}>{tag} </li>
  //         ))}
  //       </ul>
  //     );
  //   }

  //   render() {
  //     return (
  //       <div>
  //         {this.state.tags.length === 0 && "Please create a new tag"}
  //         {this.renderTags()}
  //       </div>
  //     );
  //   }
  // }
}

export default Counter;
