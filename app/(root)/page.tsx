
import HeaderBox from "@/components/ui/HeaderBox"
import React from "react"
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";

const Home=()=>{
    const loggedIn={firstName:'Pritam',lastName:' Sen', email:'senpritam261@gmail.com'};
    return(
        <section className="home ">
         <div className="home-content">
         <header className="home-header">
           <HeaderBox
           type="greeting"
           title="Welcome"
           user={loggedIn?.firstName || 'Guest'}
           subtext="Access and manage your account and transaction."
           />

           <TotalBalanceBox
           accounts={[]}
           totalBanks={1}
           totalCurrentBalance={1250.35}
           
           />
         </header>
          RECENT TRANSACTION

         </div>

         <RightSidebar
           user={loggedIn}
           transactions={[]}
           banks={[{currentBalance:123.50},{

           currentBalance:500.50}]}

         
         />

        </section>
        
    )
}
export default Home