import { useEffect, useState, useCallback } from "react";
import Loading from "./components/Loading";
import styled from "styled-components";
import ListItem from "./components/ListItem";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff8f0;
`;

const fakeFetch = (delay = 1000) =>
  new Promise((res) => setTimeout(res, delay));

function App() {
  const [data, setData] = useState(5); //dataList
  const [target, setTarget] = useState(null); //target
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    try {
      await fakeFetch();
      setIsLoading(false);
      setData((data) => data + 5);
    } catch (error) {
      console.log(error);
    }
  };

  const onIntersect = useCallback(async ([entry], observer) => {
    //교차했다면,
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      await getData();
      observer.observe(entry.target); // target 다시 지정됨
    }
  }, []);

  //observer 등록
  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 1,
      });
      observer.observe(target); //target element 지정
    }
    return () => observer && observer.disconnect();
  }, [target]);

  return (
    <Wrapper>
      {isLoading && <Loading />}
      {[...Array(data)].map((_, idx) => (
        <ListItem key={idx} text={idx} />
      ))}
      <div ref={setTarget}></div>
    </Wrapper>
  );
}

export default App;
