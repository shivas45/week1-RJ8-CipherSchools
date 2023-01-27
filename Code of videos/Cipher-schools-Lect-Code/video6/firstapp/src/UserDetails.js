//  import { render } from "express/lib/response";
import React, {Component} from "react";

 const UserDetails = ({user = {}}) => {
        return (
        <div>
            <h3>{user.name}</h3>
            <h5>Email: {user.email}
              <br />
              Phone Number: {user.phone}
            </h5>
        </div>
    );
 }

//  class UserDetails extends Component{
//     user = this.prop.user;

//     render(){
//         return(
//             <div>
//                          <h3>{this.user.name}</h3>
//                         <h5>Email: {this.user.email}
//                            <br />
//                            Phone Number: {this.user.phone}
//                         </h5>
//                     </div>
//         )
//     }
//  }

 export default UserDetails;
