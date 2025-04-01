import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=eff79c44"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=eff79c44"; const StrictMode = __vite__cjsImport1_react["StrictMode"];
import __vite__cjsImport2_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=eff79c44"; const createRoot = __vite__cjsImport2_reactDom_client["createRoot"];
import { createBrowserRouter, RouterProvider } from "/node_modules/.vite/deps/react-router-dom.js?v=eff79c44";
import "/src/index.css";
import App from "/src/App.jsx";
import TripPlanner from "/src/components/Inputs/TripPlanner.jsx";
import Trip from "/src/pages/Trip.jsx";
import MyTrips from "/src/pages/MyTrips.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: /* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
      fileName: "/home/swati/On_Quest/On_Quest/src/main.jsx",
      lineNumber: 13,
      columnNumber: 12
    }, this),
    errorElement: /* @__PURE__ */ jsxDEV("div", { children: "Not found" }, void 0, false, {
      fileName: "/home/swati/On_Quest/On_Quest/src/main.jsx",
      lineNumber: 14,
      columnNumber: 17
    }, this)
  },
  {
    path: "/TripPlanner",
    element: /* @__PURE__ */ jsxDEV(TripPlanner, {}, void 0, false, {
      fileName: "/home/swati/On_Quest/On_Quest/src/main.jsx",
      lineNumber: 18,
      columnNumber: 12
    }, this),
    errorElement: /* @__PURE__ */ jsxDEV("div", { children: "Not found" }, void 0, false, {
      fileName: "/home/swati/On_Quest/On_Quest/src/main.jsx",
      lineNumber: 19,
      columnNumber: 17
    }, this)
  },
  {
    path: "/trip/:tripId",
    element: /* @__PURE__ */ jsxDEV(Trip, {}, void 0, false, {
      fileName: "/home/swati/On_Quest/On_Quest/src/main.jsx",
      lineNumber: 23,
      columnNumber: 12
    }, this),
    errorElement: /* @__PURE__ */ jsxDEV("div", { children: "Not found" }, void 0, false, {
      fileName: "/home/swati/On_Quest/On_Quest/src/main.jsx",
      lineNumber: 24,
      columnNumber: 17
    }, this)
  },
  {
    path: "/my-trips",
    element: /* @__PURE__ */ jsxDEV(MyTrips, {}, void 0, false, {
      fileName: "/home/swati/On_Quest/On_Quest/src/main.jsx",
      lineNumber: 28,
      columnNumber: 12
    }, this),
    errorElement: /* @__PURE__ */ jsxDEV("div", { children: "Not found" }, void 0, false, {
      fileName: "/home/swati/On_Quest/On_Quest/src/main.jsx",
      lineNumber: 29,
      columnNumber: 17
    }, this)
  }
  // {
  //   path: '/',
  //   element: <App />,
  //   errorElement: <div>Not found</div>,
  // },
  // {
  //   path: '/',
  //   element: <App />,
  //   errorElement: <div>Not found</div>,
  // },
  // {
  //   path: '/',
  //   element: <App />,
  //   errorElement: <div>Not found</div>,
  // },
]);
createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxDEV(StrictMode, { children: [
    /* @__PURE__ */ jsxDEV(RouterProvider, { router }, void 0, false, {
      fileName: "/home/swati/On_Quest/On_Quest/src/main.jsx",
      lineNumber: 51,
      columnNumber: 6
    }, this),
    " "
  ] }, void 0, true, {
    fileName: "/home/swati/On_Quest/On_Quest/src/main.jsx",
    lineNumber: 50,
    columnNumber: 3
  }, this)
);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBWWE7QUFaYixTQUFTQSxrQkFBa0I7QUFDM0IsU0FBU0Msa0JBQWtCO0FBQzNCLFNBQVNDLHFCQUFvQkMsc0JBQXNCO0FBQ25ELE9BQU87QUFDUCxPQUFPQyxTQUFTO0FBQ2hCLE9BQU9DLGlCQUFpQjtBQUN4QixPQUFPQyxVQUFVO0FBQ2pCLE9BQU9DLGFBQWE7QUFFcEIsTUFBTUMsU0FBU04sb0JBQW9CO0FBQUEsRUFDakM7QUFBQSxJQUNFTyxNQUFNO0FBQUEsSUFDTkMsU0FBUyx1QkFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBSTtBQUFBLElBQ2JDLGNBQWMsdUJBQUMsU0FBSSx5QkFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWM7QUFBQSxFQUM5QjtBQUFBLEVBQ0E7QUFBQSxJQUNFRixNQUFNO0FBQUEsSUFDTkMsU0FBUyx1QkFBQyxpQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVk7QUFBQSxJQUNyQkMsY0FBYyx1QkFBQyxTQUFJLHlCQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBYztBQUFBLEVBQzlCO0FBQUEsRUFDQTtBQUFBLElBQ0VGLE1BQU07QUFBQSxJQUNOQyxTQUFTLHVCQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFLO0FBQUEsSUFDZEMsY0FBYyx1QkFBQyxTQUFJLHlCQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBYztBQUFBLEVBQzlCO0FBQUEsRUFDQTtBQUFBLElBQ0VGLE1BQU07QUFBQSxJQUNOQyxTQUFTLHVCQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFRO0FBQUEsSUFDakJDLGNBQWMsdUJBQUMsU0FBSSx5QkFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWM7QUFBQSxFQUM5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWdCQSxDQUNEO0FBRURWLFdBQVdXLFNBQVNDLGVBQWUsTUFBTSxDQUFDLEVBQUVDO0FBQUFBLEVBQzFDLHVCQUFDLGNBQ0U7QUFBQSwyQkFBQyxrQkFBZSxVQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQStCO0FBQUEsSUFBRTtBQUFBLE9BRHBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FFQTtBQUNGIiwibmFtZXMiOlsiU3RyaWN0TW9kZSIsImNyZWF0ZVJvb3QiLCJjcmVhdGVCcm93c2VyUm91dGVyIiwiUm91dGVyUHJvdmlkZXIiLCJBcHAiLCJUcmlwUGxhbm5lciIsIlRyaXAiLCJNeVRyaXBzIiwicm91dGVyIiwicGF0aCIsImVsZW1lbnQiLCJlcnJvckVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIm1haW4uanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cmljdE1vZGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tICdyZWFjdC1kb20vY2xpZW50J1xuaW1wb3J0IHsgY3JlYXRlQnJvd3NlclJvdXRlcixSb3V0ZXJQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgJy4vaW5kZXguY3NzJ1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC5qc3gnXG5pbXBvcnQgVHJpcFBsYW5uZXIgZnJvbSAnLi9jb21wb25lbnRzL0lucHV0cy9UcmlwUGxhbm5lci5qc3gnXG5pbXBvcnQgVHJpcCBmcm9tICcuL3BhZ2VzL1RyaXAuanN4J1xuaW1wb3J0IE15VHJpcHMgZnJvbSAnLi9wYWdlcy9NeVRyaXBzLmpzeCdcblxuY29uc3Qgcm91dGVyID0gY3JlYXRlQnJvd3NlclJvdXRlcihbXG4gIHtcbiAgICBwYXRoOiAnLycsXG4gICAgZWxlbWVudDogPEFwcCAvPixcbiAgICBlcnJvckVsZW1lbnQ6IDxkaXY+Tm90IGZvdW5kPC9kaXY+LFxuICB9LFxuICB7XG4gICAgcGF0aDogJy9UcmlwUGxhbm5lcicsXG4gICAgZWxlbWVudDogPFRyaXBQbGFubmVyIC8+LFxuICAgIGVycm9yRWxlbWVudDogPGRpdj5Ob3QgZm91bmQ8L2Rpdj4sXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnL3RyaXAvOnRyaXBJZCcsXG4gICAgZWxlbWVudDogPFRyaXAgLz4sXG4gICAgZXJyb3JFbGVtZW50OiA8ZGl2Pk5vdCBmb3VuZDwvZGl2PixcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvbXktdHJpcHMnLFxuICAgIGVsZW1lbnQ6IDxNeVRyaXBzIC8+LFxuICAgIGVycm9yRWxlbWVudDogPGRpdj5Ob3QgZm91bmQ8L2Rpdj4sXG4gIH0sXG5cbiAgLy8ge1xuICAvLyAgIHBhdGg6ICcvJyxcbiAgLy8gICBlbGVtZW50OiA8QXBwIC8+LFxuICAvLyAgIGVycm9yRWxlbWVudDogPGRpdj5Ob3QgZm91bmQ8L2Rpdj4sXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICBwYXRoOiAnLycsXG4gIC8vICAgZWxlbWVudDogPEFwcCAvPixcbiAgLy8gICBlcnJvckVsZW1lbnQ6IDxkaXY+Tm90IGZvdW5kPC9kaXY+LFxuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgcGF0aDogJy8nLFxuICAvLyAgIGVsZW1lbnQ6IDxBcHAgLz4sXG4gIC8vICAgZXJyb3JFbGVtZW50OiA8ZGl2Pk5vdCBmb3VuZDwvZGl2PixcbiAgLy8gfSxcbl0pO1xuXG5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpLnJlbmRlcihcbiAgPFN0cmljdE1vZGU+XG4gICAgIDxSb3V0ZXJQcm92aWRlciByb3V0ZXI9e3JvdXRlcn0vPiB7Lyp3ZSByZWZlcnJlZWQgdGhlIGVudHJ5IHBvaW50cyB0byByZWFjdFJvdXRlciAqL31cbiAgPC9TdHJpY3RNb2RlPixcbilcbiJdLCJmaWxlIjoiL2hvbWUvc3dhdGkvT25fUXVlc3QvT25fUXVlc3Qvc3JjL21haW4uanN4In0=