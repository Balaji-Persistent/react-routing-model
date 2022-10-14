import { Link } from 'react-router-dom';
import { Page } from "./Layout/Page";
import { ActiveRoutePathTitleCallbackParams } from './Routing/ActiveRoutePathTitleCallback';
import { RoutePathDefinition } from "./Routing/RoutePathDefinition";

export const routes: RoutePathDefinition[] = [
  { title: "Home", path: "/", element: <Page title="home" />, nav: true },
  {
    title: "Sub",
    path: "/sub",
    element: <Page title="sub" withOutlet />,
    nav: true,
    children: [
      {
        title: "Sub-Zero",
        path: "zero",
        element: <Page title="sub-zero" withOutlet />,
        nav: true,
        children: [
          { title: "Sub-Zero-Oh", path: "oh", element: <Page title={"sub-zero-oh"} />, 
          children: [
            { title: "Sub2-Zero", path: "zero", element: <Page title="sub2-zero" /> },
            { title: "Sub2-One", path: "one", element: <Page title="sub2-one" /> },
            {
              title: "With Sub Route",
              path: "empty",
              element: <Page title="Empty Sub Route" />,
              nav: true,
              children: [
                { title: "Empty Sub route", path: "", element: <Page title="EMPTY" />, nav: true },
                { title: "Sub route", path: "sub", element: <Page title="Sub2-Param-One" />, nav: true },
              ]
            },
          ]},
          ],
      },
      { title: "Sub-One", path: "one", element: <Page title="sub-one" /> },

    ],
  },
  {
    title: "Sub2",
    path: "/sub2",
    element: <Page title="sub2" withOutlet ><Link to='/sub2/param/12345667/one'>To parameterized route</Link></Page>,
    nav: true,
    children: [
      
    ],
  },
  
  {
    title: "Catch All - 404",
    path: "*",
    element: <Page title="404" />,
  },
];
