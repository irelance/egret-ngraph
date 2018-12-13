declare module ngraph {
    class graph {
        addLink(from, to, data?);
        getLink(from, to);
        removeLink(link);

        addNode(name, option?);
        getLinks(name);
        removeNode(name);

        clear();
    }
}

declare module ngraph.path {
    class aStar {
        constructor(graph, option?);

        find(from, to);
    }

    class aGreedy {
        constructor(graph, option?);

        find(from, to);
    }

    class nba {
        constructor(graph, option?);

        find(from, to);
    }
}
