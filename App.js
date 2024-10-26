// const heading = React.createElement("h1", { id: "heading" }, "STAY HARD !! DO WHAT YOU DON'T WANT TO DO");

const parent = React.createElement("div", { id: "parent" }, [React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "first eadin"), React.createElement("h2", {}, "STAY HARD!!")]), React.createElement("div", { id: "child2" }, [React.createElement("h1", {}, "first eadin")])]);

console.log(parent, "parent");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);