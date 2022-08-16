import React, { useState, useEffect, Suspense } from "react";
import Slider from "../../components/Slider.jsx";
import RegisterFormEdit from "../../components/RegisterFormEdit.jsx";
import httpService from "../../services/httpService";
import "./styles.css";
import Loader from "../../components/Loader.jsx";
import { mergeSort } from "./functions/sort.js";
//const Novedades = React.lazy(() => import("./Novedades/index.jsx"));
 const Novedades = React.lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 300)).then(() =>
    import("./Novedades/index.jsx")
  );
});

const service = new httpService();

let userIsAdmin = false;
let homeContentDefault = {
  title: "Hola Bienvenidx",
  description: "Lorem ipsun dolor anmet",
};

function Home() {
  const [homeContent, setHomeContent] = useState(homeContentDefault);
  const [homeNews, setHomeNews] = useState();

  const [images, setImages] = useState({});

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      async function getData() {
        await service.get("organization/1/public").then((res) => {
          setHomeContent({ ...res[0] });
        });
        await service.get("news").then((res) => {
          let sortedNews = mergeSort(res, "createdAt").reverse().slice(0, 2);
          setHomeNews([...sortedNews]);
        });
      }
      getData();
    }
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      {userIsAdmin && (
        <RegisterFormEdit
          infoHome={homeContent}
          images={images}
          setInfoHome={setHomeContent}
          setImages={setImages}
        />
      )}
      <section className="position-relative" style={{ minHeight: "350px" }}>
        <Slider />
        <div
          className="module-overlay top-0 h-100 d-flex flex-column justify-content-end align-items-center p-4 mt-3 p-md-0 mt-md-0"
          style={{ left: "0", right: "0" }}
        >
          <div className="mt-xs-0" style={{ maxWidth: "650px" }}>
            <h2 className="module--title text-center fw-bolder my-2 mx-1">
              {homeContent.welcomeTitle}
            </h2>
            <p className="module--text fs-5 m-0">{homeContent.welcomeText}</p>
          </div>
        </div>
      </section>
      <div className="position-relative" style={{ minHeight: "380px" }}>
        <Suspense fallback={<Loader />}>{homeNews && <Novedades homeNews={homeNews} />}</Suspense>
      </div>
      <br />
      <br />
    </>
  );
}

export default Home;
