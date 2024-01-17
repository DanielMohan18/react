const main=React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child"},
[React.createElement("h1",{},"hii this h1 tag"),
React.createElement("h2",{},"hii this h2 tag")]),

React.createElement("div",{id:"child2"},
[React.createElement("h1",{},"hii this h1 tag"),
React.createElement("h2",{},"hii this h2 tag")])]
);

const root=ReactDOM.createRoot(document.getElementById("hell"));
root.render(main);