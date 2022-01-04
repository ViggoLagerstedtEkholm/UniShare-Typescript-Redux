import {MoonLoader} from "react-spinners";
import React from "react";

export const Loading: React.FC = () =>{
    return(
      <div className="loading">
          <MoonLoader color={"#00ccfc"} loading={true} size={100}/>
      </div>
    );
}