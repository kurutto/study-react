import { useState, useCallback } from "react";

export const useInputArray = () => {
  const [text, setText] = useState('');
  const [array, setArray] = useState([] as string[]);
  const handleChange = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.value.length > 5){
      alert('5文字以内にしてください');
      return;
    }
    setText(e.target.value.trim());
  },[]);

  const handleAdd = useCallback(() => {
    // if(array.some((item) => item === text)){
    //   alert('同じ要素が既に存在します。');
    //   return;
    // }
    // setArray(prevArray => {
    //   return [...prevArray,text]
    // });
    setArray(prevArray => {
      if(prevArray.includes(text)){
        alert('同じ要素が既に存在します。');
        return prevArray;
      }
      return [...prevArray,text];
    });
  },[text,array]);

  return {text, array, handleChange, handleAdd}
}