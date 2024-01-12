import React,{useState} from 'react';
import { questions } from './api';
import './FAQs.css';
import Myfaqs from './Myfaqs';

const FAQs = () => {
  const [data,setData] = useState(questions);
  return (

    <div id="main-body">
      <span id="faqs"></span>
    <section className='main-div'>
      <h1>FAQs (Frequently Asked Questions & Answers)</h1>
      {
        data.map((curElem)=>{
          const{id}=curElem;
          return <Myfaqs  key={id} {...curElem} />
        })
      }
      </section>
    </div>
  )
}

export default FAQs
