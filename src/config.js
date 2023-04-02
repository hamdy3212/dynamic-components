export const config = {
  component: "div",
  id: "cardWrapper",
  className: "col-span-1 flex shadow-sm rounded-md",
   children: [
    {
      component: "div",
      id: "initialWrapper",
      styles: [
        {
          name: "backgroundColor",
          value: "#6366F1",
        },
      ],
      children: "HB",
    },
    {
      component: "div",
      id: "infoWrapper",
      children: [
        {
          component: "div",
          id: "info",
          children: [
            {
              component: "p",
              id: "title",
              children: "GraphQL",
            },
            {
              component: "p",
              id: "readTime",
              children: "10 min read",
            },
          ],
        },
        {
          component: "div",
          id: "buttonWrapper",
          children: [
            {
              component: "button",
              id: "optionButton",
              children: [
                {
                  component: "span",
                  id: "optionButtonSr",
                  children: "Open Options",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
