import { useEffect, useState } from "react";

const useApiCall = (props) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const { url } = props;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const rowList = await fetch(url);
        if (!rowList.ok) {
          throw new Error("failed to fetch data");
        }
        const list = await rowList.json();
        //console.log(list);
        await list.products.forEach((product, index) => {
          // let details = getData(product.productId);
          // details.then((res) => {
          //   console.log("listttt ", res);
          //   list.products[index].details = { ...res };
          // });
        });

        //You need to convert response of each fetch call to json
        //to get the expected output
        Promise.all(
          list.products.map((ele) => {
            return fetch(
              `https://fakestoreapi.com/products/${ele.productId}`
            ).then((res) => res.json());
          })
        ).then((res) => {
          console.log("resss", res);
          list.products.forEach((ele, index) => {
            ele.details = res[index];
          });
          setData(list.products);
        });

        console.log("datttttta");
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return { data, error, loading };
};

export const getData = async (id) => {
  //console.log(id);
  let data = await fetch(`https://fakestoreapi.com/products/${id}`);
  let details = await data.json();
  //console.log("details", details);
  return details;
};

export default useApiCall;
