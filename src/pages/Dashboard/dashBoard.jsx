import React from 'react'
import './dashBoard.css'

const DashBoard = () => {
  return (
    <div classname="container">
    <div classname="navigation ">
      <ul>
        <li>
          <a href="/">
            <span classname="icon"><i classname="fa fa-modx"></i></span>
            <sapn classname="title"><h2>Brand Name</h2></sapn>
          </a>
        </li>
        <li><a href="/">
          <span classname="icon"><i classname="fa fa-home"></i></span>
          <span classname="title">Dashboard</span>
        </a>
        </li>
        <li><a href="/">
          <span classname="icon"><i classname="fa fa-users"></i></span> 
          <span classname="title">Customers</span>
        </a>
        </li>
        <li><a href="/">
          <span classname="icon"><i classname="fa fa-comment"></i></span>
          <span classname="title">Message</span>
        </a>
        </li>
        <li><a href="/">
          <span classname="icon"><i classname="fa fa-question-circle"></i></span>
          <span classname="title">Help</span>
        </a>
        </li>
        <li><a href="/">
          <span classname="icon"><i classname="fa fa-cog"></i></span>
          <span classname="title">Settings</span>
        </a> 
        </li>
        <li>
          <a href="/">
          <span classname="icon"><i classname="fa fa-lock"></i></span>
          <span classname="title">Password</span>
        </a>
        </li>
        <li><a href="/">
          <span classname="icon"><i classname="fa fa-sign-out"></i></span>
          <span classname="title">Sign Out</span>
        </a>
        </li>
      </ul>
    </div>
    <main classname="">
      {/* <!-- topbar --> */}
      <div classname="topbar">
        <div classname="toggle"></div>
          <div classname="search">
            <label for="">
              <input type="text" placeholder="Search Here" />
              <i classname="fa fa-search"></i>
            </label>            
          </div>
          <div classname="user">
            <img src="https://fakeimg.pl/150/" alt="" />
          </div>          
      </div>
      {/* <!-- topbar --> */}
      {/* <!-- cardWrap --> */}
      <div classname="cardWrap">
        <div classname="card">
          <div>
            <div classname="toatal">1,024</div>
            <div classname="title">Daily Views</div>
          </div>
          <div classname="iconWrap">
            <i classname="fa fa-eye"></i>
          </div>
        </div>

        <div classname="card">
          <div>
            <div classname="toatal">8,024</div>
            <div classname="title">Comments</div>
          </div>
          <div classname="iconWrap">
            <i classname="fa fa-comments-o"></i>
          </div>
        </div>

        <div classname="card">
          <div>
            <div classname="toatal">666</div>
            <div classname="title">Sales</div>
          </div>
          <div classname="iconWrap">
            <i classname="fa fa-shopping-cart"></i>
          </div>
        </div>

        <div classname="card">
          <div>
            <div classname="toatal">$89,024</div>
            <div classname="title">Earning</div>
          </div>
          <div classname="iconWrap">
         <i classname="fa fa-usd"></i>
          </div>
        </div>
      </div>
      {/* <!-- cardWrap --> */}
      {/* <!-- detaials --> */}
      <div classname="details">
        <div classname="recentOrders">
          <div classname="cardHeader">
            <h2>Recent Orders</h2>
            <a classname="btn" href="/">View All</a>              
          </div>
          <table>
            <thead>
              <td>Name</td>
              <td>Price</td>
              <td>Payment</td>
              <td>status</td>
            </thead>
            <tbody>
              <tr>
                <td>Star Refrigerator</td>
                <td>$1350</td>
                <td>Paid</td>
                <td> <span classname="status delivered">Deliver</span> </td>
              </tr>
              <tr>
                <td>windows Coolers</td>
                <td>$150</td>
                <td>Due</td>
                <td> <span classname="status return">Return</span></td>
              </tr>
              <tr>
                <td>Speakers</td>
                <td>$770</td>
                <td>Paid</td>
                <td> <span classname="status pending">Pending</span> </td>
              </tr>
              <tr>
                <td>HP Laptop</td>
                <td>$8350</td>
                <td>Due</td>
                <td> <span classname="status delivered"> In progress</span></td>
              </tr>
              <tr>
                <td>Speakers</td>
                <td>$770</td>
                <td>Paid</td>
                <td> <span classname="status inprogress">Pending</span> </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div classname="recentCustomers">
          <div classname="cardHeader">
            <h2>Recent Customers</h2>
          </div>
          <table>
            <tbody>
              <tr>
                <td width="60px">
                  <div classname="imgBx">
                    <img src="https://fakeimg.pl/150x150/" alt="" srcset="" />
                  </div>
                </td>
                <td>
                  <h4>David        
                    <br />
                    <span>Italy</span>             
                  </h4>                    
                </td>
              </tr>

              <tr>
                <td width="60px">
                  <div classname="imgBx">
                    <img src="https://fakeimg.pl/250x100/" alt="" srcset="" />
                  </div>
                </td>
                <td>
                  <h4>David
                    <br/>
                    <span>France</span>
                  </h4>
                </td>
              </tr>

              <tr>
                <td width="60px">
                  <div classname="imgBx">
                    <img src="https://fakeimg.pl/250x100/" alt="" srcset="" />
                  </div>
                </td>
                <td>
                  <h4>David
                    <br/>
                    <span>Japan</span>
                  </h4>
                </td>
              </tr>

              <tr>
                <td width="60px">
                  <div classname="imgBx">
                    <img src="https://fakeimg.pl/250x100/" alt="" srcset="" />
                  </div>
                </td>
                <td>
                  <h4>David
                    <br/>
                    <span>UAS</span>
                  </h4>
                </td>
              </tr>

              <tr>
                <td width="60px">
                  <div classname="imgBx">
                    <img src="https://fakeimg.pl/250x100/" alt="" srcset="" />
                  </div>
                </td>
                <td>
                  <h4>David
                    <br/>
                    <span>India</span>
                  </h4>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
      
      {/* <!-- detaials End --> */}
    </main>
  </div>
  )
}

export default DashBoard