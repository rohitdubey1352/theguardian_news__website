import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import HeadlineTag from './HeadlineTag'
import CardRecipe from './CardRecipe';

const FoodsCard = () => {
    const [data, setData] = useState(null);
    const API = 'https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?nutrition-type=cooking&category%5B0%5D=generic-foods&health%5B0%5D=alcohol-free';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'bf99a2a22amshfcd7cae92ce7c1ep1a23dbjsne5afb00a2ff2',
            'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
        }
    };
    const fetchData = async (url) => {
        try {
            const res = await fetch(url, options);
            const result = await res.json();
            setData(result);
        } catch (error) {
            console.log(error);
        }
    };
    
    useEffect(() => {
        const fetchDataFromAPI = async () => {
            await fetchData(API);
        };
    
        fetchDataFromAPI();
    }, []);

  return (
    <>
    <Food>
        
        <HeadlineTag title="Foods & Energy"/>
            <div className="grid"> 
              <CardRecipe image={data?.hints?.[0]?.food?.image ?? "Loading"}
                          title={data?.hints?.[0]?.food?.label ?? "Loading"}
                          para={data?.hints?.[0]?.food?.category ?? "loading..."}
                          e={data?.hints?.[0]?.food?.nutrients?.ENERC_KCAL ?? "Loading"}
                          p={data?.hints?.[0]?.food?.nutrients?.PROCNT ?? "Loading"}
                          f={data?.hints?.[0]?.food?.nutrients?.FAT ?? "Loading"}
                          c={data?.hints?.[0]?.food?.nutrients?.CHOCDF ?? "Loading"}
                          fi={data?.hints?.[0]?.food?.nutrients?.FIBTG ?? "Loading"}
              />
              <CardRecipe image={data?.hints?.[18]?.food?.image ?? "Loading"}
                          title={data?.hints?.[18]?.food?.label ?? "Loading"}
                          para={data?.hints?.[18]?.food?.category ?? "loading..."}
                          e={data?.hints?.[18]?.food?.nutrients?.ENERC_KCAL ?? "Loading"}
                          p={data?.hints?.[18]?.food?.nutrients?.PROCNT ?? "Loading"}
                          f={data?.hints?.[18]?.food?.nutrients?.FAT ?? "Loading"}
                          c={data?.hints?.[18]?.food?.nutrients?.CHOCDF ?? "Loading"}
                          fi={data?.hints?.[18]?.food?.nutrients?.FIBTG ?? "Loading"}
              />
              <CardRecipe image={data?.hints?.[10]?.food?.image ?? "Loading"}
                          title={data?.hints?.[10]?.food?.label ?? "Loading"}
                          para={data?.hints?.[10]?.food?.category ?? "loading..."}
                          e={data?.hints?.[10]?.food?.nutrients?.ENERC_KCAL ?? "Loading"}
                          p={data?.hints?.[10]?.food?.nutrients?.PROCNT ?? "Loading"}
                          f={data?.hints?.[10]?.food?.nutrients?.FAT ?? "Loading"}
                          c={data?.hints?.[10]?.food?.nutrients?.CHOCDF ?? "Loading"}
                          fi={data?.hints?.[10]?.food?.nutrients?.FIBTG ?? "Loading"}
              />
              <CardRecipe image={data?.hints?.[16]?.food?.image ?? "Loading"}
                          title={data?.hints?.[16]?.food?.label ?? "Loading"}
                          para={data?.hints?.[16]?.food?.category ?? "loading..."}
                          e={data?.hints?.[16]?.food?.nutrients?.ENERC_KCAL ?? "Loading"}
                          p={data?.hints?.[16]?.food?.nutrients?.PROCNT ?? "Loading"}
                          f={data?.hints?.[16]?.food?.nutrients?.FAT ?? "Loading"}
                          c={data?.hints?.[16]?.food?.nutrients?.CHOCDF ?? "Loading"}
                          fi={data?.hints?.[16]?.food?.nutrients?.FIBTG ?? "Loading"}
              />
              <CardRecipe image={data?.hints?.[17]?.food?.image ?? "Loading"}
                          title={data?.hints?.[17]?.food?.label ?? "Loading"}
                          para={data?.hints?.[17]?.food?.category ?? "loading..."}
                          e={data?.hints?.[17]?.food?.nutrients?.ENERC_KCAL ?? "Loading"}
                          p={data?.hints?.[17]?.food?.nutrients?.PROCNT ?? "Loading"}
                          f={data?.hints?.[17]?.food?.nutrients?.FAT ?? "Loading"}
                          c={data?.hints?.[17]?.food?.nutrients?.CHOCDF ?? "Loading"}
                          fi={data?.hints?.[17]?.food?.nutrients?.FIBTG ?? "Loading"}
              />
              <CardRecipe image={data?.hints?.[4]?.food?.image ?? "Loading"}
                          title={data?.hints?.[4]?.food?.label ?? "Loading"}
                          para={data?.hints?.[4]?.food?.category ?? "loading..."}
                          e={data?.hints?.[4]?.food?.nutrients?.ENERC_KCAL ?? "Loading"}
                          p={data?.hints?.[4]?.food?.nutrients?.PROCNT ?? "Loading"}
                          f={data?.hints?.[4]?.food?.nutrients?.FAT ?? "Loading"}
                          c={data?.hints?.[4]?.food?.nutrients?.CHOCDF ?? "Loading"}
                          fi={data?.hints?.[4]?.food?.nutrients?.FIBTG ?? "Loading"}
              />
            </div>
    </Food>
    </>
  )
}

export default FoodsCard
const Food = styled.main`
position: relative;

`