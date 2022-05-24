import React from "react";
import './news.components.css';
import Header from "../../сomponents/header/header.component";
import Footer from "../../сomponents/footer/footer.component";

const NewsPage = () => {
   return (
      <div className="news">
         <Header />
         <div className="text">Тут можно будут новости</div>
         <Footer />
      </div>
   )
}


export default NewsPage
