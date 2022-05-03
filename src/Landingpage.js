import React from 'react'
import './Landingpage.css';
import { BsFillCaretDownFill, BsPerson, BsCart2 } from "react-icons/bs";
import { AiOutlineSearch, AiOutlineMinus, AiFillStar, AiOutlineStar, AiOutlineHeart ,AiOutlineTwitter} from "react-icons/ai";
import {ImFacebook} from "react-icons/im";

import icon from './Photos/icon.PNG';
import Purse from './Photos/Purse.jpg';
import shoesimg from './Photos/shoesimg.jpg';
import shoesimg1 from './Photos/shoesimg1.jpg';
import Ellipse from './Photos/Ellipse.png';
import Product from './Photos/Product.png';
import Product1 from './Photos/Product1.png';
import overlay from './Photos/overlay.png';
import White from './Photos/White.png';
import Rectangle from './Photos/Rectangle.png';
import Product2 from './Photos/Product2.png';
import Vector from './Photos/Vector.png';
import Picture1 from './Photos/Picture1.png';
import Picture2 from './Photos/Picture2.png';
import Picture from './Photos/Picture.png';
import sideshoe from './Photos/sideshoe.png';
import shipping from './Photos/shipping.png';
import Path from './Photos/Path.png';
import Path1 from './Photos/Path1.png';
import Path2 from './Photos/Path2.png';
import path3 from './Photos/path3.png';
import logo from './Photos/logo.png';
import logo1 from './Photos/logo1.png';
import logo2 from './Photos/logo2.png';
import three from './Photos/three.png';
import Capture from './Photos/Capture.PNG';
import icon1 from './Photos/icon1.PNG';
function Landingpage() {
    return (
        <div>
            <div className='top1'>  EN</div>
            <div className='top2'>  <BsFillCaretDownFill size='10' /> </div>
            <div className='top3'>USD</div>
            <div className='top4'>  <BsFillCaretDownFill size='10' /></div>
            <div className='top5'> <BsPerson size="20" /> My Profile  </div>

            <div className='top7'><BsCart2 size="20" /></div>
            <div className='top8'> Items</div>
            <div className='top9 text-secondary'>%0.00 </div>
            <div className='top10'> <AiOutlineSearch size="20" /></div>
            <div className='ellipse'> <img src={Ellipse} width="30" height="30" ></img></div>
            <div className='ell '>2</div>
            <div className='icon1'>
                <img src={icon} width="40" height="40" ></img>
            </div>

            <div className=' comm fw-bold'> E-COMM</div>
            <div className='A1 fw-bold  fs-4 '> HOME</div>
            <div className='A2 fw-bold fs-4'>BAG</div>
            <div className='A3 fw-bold fs-4'>SNEAKERS</div>
            <div className='A4 fw-bold fs-4'>BELT</div>
            <div className='A5 fw-bold fs-4'>CONTACT</div>

            <div className='shoes'></div>
            <div className='shoes1 fs-1 fw-bold '>  Super Flash Sale<br /> 50% off</div>

            <div className='purse'>
                <img src={Purse} width="350" height="300" ></img>
            </div>
            <div className='shoesimg'>
                <img src={shoesimg} width="400" height="300" ></img>
            </div>
            <div className='shoesimg1'>
                <img src={shoesimg1} width="400" height="300" ></img>
            </div>
            <div className='addcard '>
                <h5>FS-QUILTED MAXI<br />CROSS BAG</h5> </div>

            <div className='discount'> $534,33 </div>
            <div className='off fw-bold '> 24%off</div>

            <div className='number'> $299,43</div>

            <div className='addcard1'> <h5>FS - Nike  Air <br /> Max 270 React...</h5>
            </div>

            <div className='number1'> $299,43 </div>


            <div className='discount1'>$534.33 </div>
            <div className='off1 fw-bold '>24 % off</div>
            <div className='addcard2'>
                <h5> Fs-ike Air <br /> Max 270 React...</h5>
            </div>
            <div className='discount2'>$534.33 </div>
            <div className='off2 fw-bold '>24 % off</div>
            <div className='number2'> $299,43 </div>

            <div className='best'> <h1>BEST SELLER</h1></div>

            <div className='tag '> ALL</div>
            <div className='line'> <AiOutlineMinus size="70" /></div>
            <div className='tag1'>Bags</div>
            <div className='tag2'> Sneakers</div>
            <div className='tag3'> Belt</div>
            <div className='tag4'> Sunglasses</div>

            <div className='image'>
                <img src={Product2} width="250" height="300" ></img>
                <div className='rectangle'> <img src={Rectangle} width="50" height="30" ></img></div>
                <div className='red'> HOT</div>
                <div className='content'>
                    Nike Air Max 270 React
                </div>
                <div className='star'>
                    <AiFillStar size="25" />
                    <AiFillStar size="25" />
                    <AiFillStar size="25" />
                    <AiFillStar size="25" />
                </div>
                <div className='Estar'>
                    <AiOutlineStar size="25" />
                </div>
                <div className='num1 fw-bold'>
                    $299,43 </div>
                <div className='dis'>
                    $ 534,33
                </div>
                <div className='off3'>24% off</div>
            </div>
            <div className='image1'>
                <img src={Product1}  width='250' height='300'></img>
<div className='border'></div>

                <div className='content1'>
                    Nike Air Max 270 React
                </div>
                <div className='star1'>
                    <AiFillStar size="25" />
                    <AiFillStar size="25" />
                    <AiFillStar size="25" />
                    <AiFillStar size="25" />
                </div>
                <div className='Estar1'>
                    <AiOutlineStar size="25" />
                </div>
                <div className='num2 fw-bold'>
                    $299,43 </div>
                <div className='dis1'>
                    $ 534,33
                </div>
                <div className='off4'>24% off</div>
            </div>
            <div className='over'>
                <img src={overlay} width="250" height="300" ></img>
                <div className='white'>
                    <img src={White} width="228" height="250" ></img>
                    <div className='z'></div>
                    <div className='z1'>
                    Nike Air Max 270 React
                    
                    <div className='z2'>
                    <AiFillStar size="25" />
                    <AiFillStar size="25" />
                    <AiFillStar size="25" />
                    <AiFillStar size="25" />
                    </div>
                    <div className='z3'>
                    <AiOutlineStar size="25" /></div>
                    </div>
                    <div className='z4 fw-bold'>
                    $299,43 </div>
                <div className='z5'>
                    $ 534,33
                </div>
                <div className='z6'>24% off</div>

                </div>
                <div className='heart'> <AiOutlineHeart size="25" /> </div>
                <div className='vector'>  <img src={Vector} width="60" height="40" ></img></div>
                <div className='vector1'>  <img src={Vector} width="60" height="40" ></img></div>
                <div className='cart'> <BsCart2 size="20" /> </div>
            </div>

            <div className='image2'>  <img src={Product} width="270" height="300" ></img>
                <div className='content2'>
                    Nike Air Max 270 React
                </div>
                <div className='star2'>
                    <AiFillStar size="25" />
                    <AiFillStar size="25" />
                    <AiFillStar size="25" />
                    <AiFillStar size="25" />
                </div>
                <div className='Estar2'>
                    <AiOutlineStar size="25" />
                </div>
                <div className='num3 fw-bold'>
                    $299,43 </div>
                <div className='dis2'>
                    $ 534,33
                </div>
                <div className='off5'>24% off</div>

            </div>
            <div className='pic'>
                <img src={Picture1} width="250" height="300" ></img>
                <div className='star3'>
                    <AiFillStar size="25" />
                    <AiFillStar size="25" />
                    <AiFillStar size="25" />
                    <AiFillStar size="25" />
                </div>
                <div className='Estar3'>
                    <AiOutlineStar size="25" />
                </div>
                <div className='word'>
                    Nike Air Max 270 React
                </div>
                <div className='dollar fw-bold'>
                    $299,43 </div>
                <div className='count'>
                    $ 534,33
                </div>
                <div className='per fw-bold'>24% off</div>
            </div>
            <div className='pic1'>
                <img src={Picture2} width="250" height="300" ></img>
                <div className='word1'>
                    Nike Air Max 270 React
                </div>
                <div className='star4'>
                    <AiFillStar size="25" />
                    <AiFillStar size="25" />
                    <AiFillStar size="25" />
                    <AiFillStar size="25" />
                </div>
                <div className='Estar4'>
                    <AiOutlineStar size="25" />
                </div>

                <div className='dollar1 fw-bold'>
                    $299,43 </div>
                <div className='count1'>
                    $ 534,33
                </div>
                <div className='per1 fw-bold'>24% off</div>
            </div>
           <div className='pic2'>
           <img src={Picture} width="250" height="300" ></img>
           
           <div className='word2'>
                    Nike Air Max 270 React
                </div>
                <div className='star5'>
                    <AiFillStar size="25" />
                    <AiFillStar size="25" />
                    <AiFillStar size="25" />
                    <AiFillStar size="25" />
                </div>
                <div className='Estar5'>
                    <AiOutlineStar size="25" />
                </div>

                <div className='dollar2 fw-bold'>
                    $299,43 </div>
                <div className='count2'>
                    $ 534,33
                </div>
                <div className='per2 fw-bold'>24% off</div>
                </div>
                <div className='pic3'>
           <img src={Product} width="250" height="300" ></img>
           <div className='word3'>
                    Nike Air Max 270 React
                </div>
                <div className='star6'>
                    <AiFillStar size="25" />
                    <AiFillStar size="25" />
                    <AiFillStar size="25" />
                    <AiFillStar size="25" />
                </div>
                <div className='Estar6'>
                    <AiOutlineStar size="25" />
                </div>

                <div className='dollar3 fw-bold'>
                    $299,43 </div>
                <div className='count3'>
                    $ 534,33
                </div>
                <div className='per3 fw-bold'>24% off</div>
</div>
<div className='load  fs-4' > Load More </div>
<div className='line1'> _________________</div>
<div className='blue'>
<div className='adidas fs-1'> Adidas Men Running <br/> Sneakers</div>
</div>
<div className='design fs-5'> Performance and design. Taken right to the edge.</div>
<div className='show fs-5'> Show More</div>
<div className='line2'> __________</div>
<div className='side'>
<img src={sideshoe} width="650" height="400" ></img>
</div>
<div className='ship'>
<img src={shipping} width="80" height="50" ></img>
</div>
<div className='free  fw-bold fs-4'>
   FREE SHIPPING
</div>
<div className='note'>
Lorem Ipsum is simply <br/>dummy text of the <br/>printing and typesetting <br/>industry.
</div>
 <div className='path'>
 <img src={Path} width="80" height="50" ></img>
 </div>
<div className='Path1'>
<img src={Path1} width="20" height="20" ></img>
</div>
<div className='free1  fw-bold fs-4'>
   100 % REFUND
</div>
<div className='note1'>
Lorem Ipsum is simply <br/> dummy text of the  <br/>printing and typesetting <br/>industry.
</div>
<div className='path2'>
<img src={Path2} width="40" height="40" ></img></div>
<div className='Path3'>
<img src={path3} width="40" height="40" ></img></div>
<div className='free2  fw-bold fs-4'>
   SUPPORT 24/7
</div>
<div className='note2'>
Lorem Ipsum is simply <br/> dummy text of the  <br/>printing and typesetting <br/>industry.  
</div>
<div className='news fw-bold fs-4'>
      LATEST NEWS
</div>
<div className='logo'>
<img src={logo} width="100" height="50" ></img></div>
<div className='jan'>
    01 Jan,2015
</div> 
<div className='Text fw-bold fs-4'>
Fashion Industry
</div>
<div  className='Lorem'>
Lorem Ipsum is simply<br/> dummy text of the <br/> printing and typesetting <br/>industry.
</div>
<div className='logo1'>
<img src={logo1} width="100" height="70" ></img></div>
<div className='jan1'>
    01 Jan,2015
</div> 
<div className='Text1 fw-bold fs-4'>
Best Design Tools
</div>
<div  className='Lorem1'>
Lorem Ipsum is simply<br/> dummy text of the <br/> printing and typesetting <br/>industry.
</div>

<div className='logo2'>
<img src={logo2} width="100" height="70" ></img></div>
<div className='jan2'>
    01 Jan,2015
</div> 
<div className='Text2 fw-bold fs-4'>
HR Community
</div>
<div  className='Lorem2'>
Lorem Ipsum is simply<br/> dummy text of the <br/> printing and typesetting <br/>industry.
</div>
<div className='pro fw-bold fs-4'>
    FEATURED PRODUCTS
</div>
<div className='three'>
<img src={three} width="120" height="120" ></img></div>

<div className='nike fs-5'>
Blue Swade Nike <br/> Sneakers
</div>
<div className='star7'>
                    <AiFillStar size="25" />
                    <AiFillStar size="25" />
                    <AiFillStar size="25" />
                    <AiFillStar size="25" />
                </div>
                <div className='Estar7'>
                    <AiOutlineStar size="25" />
                </div>
                <div className='four'>
                  $499
                </div>
                <div className='five'>
                   $599
                </div>
                <div className='three1'>
<img src={three} width="120" height="120" ></img></div>
<div className='nike1 fs-5'>
Blue Swade Nike <br/> Sneakers
</div>
<div className='star8'>
                    <AiFillStar size="25" />
                    <AiFillStar size="25" />
                    <AiFillStar size="25" />
                    <AiFillStar size="25" />
                </div>
                <div className='Estar8'>
                    <AiOutlineStar size="25" />
                </div>
                <div className='four1'>
                  $499
                </div>
                <div className='five1'>
                   $599
                </div>

                <div className='three2'>
<img src={three} width="120" height="120" ></img></div>
<div className='nike2 fs-5'>
Blue Swade Nike <br/> Sneakers
</div>
<div className='star9'>
                    <AiFillStar size="25" />
                    <AiFillStar size="25" />
                    <AiFillStar size="25" />
                    <AiFillStar size="25" />
                </div>
                <div className='Estar9'>
                    <AiOutlineStar size="25" />
                </div>
                <div className='four2'>
                  $499
                </div>
                <div className='five2'>
                   $599
                </div>
                <div className='email'>
                <input type="text" className='formcontrol w-100 p-1' placeholder='Search Query...'></input><button className=" search btn btn-primary ">Search</button>
 </div>
<div className='background'>
<div className='icon2'>
                <img src={icon1} width="40" height="40" ></img>
            </div>
            <div className=' comm1 fw-bold'> E-COMM</div>
</div>
<div className='para'>
Lorem Ipsum is simply dummy text<br/> of the printing and typesetting industry. Lorem <br/>Ipsum has been the industry's standard <br/>dummy text ever.Since the 1500s, when <br/>an unknown printer.
<div className=' comm2 fw-bold'> FOLLOW US</div>
<div className='para1'>
Since the 1500s, when an unknown <br/>printer took a galley of type and <br/>scrambled.
</div>
<div className='facebook'>< ImFacebook size="25" /></div>
<div className='twitter'><AiOutlineTwitter size ="25"/></div>
<div className='comm3 fw-bold'> CONTACT US</div>
<div className='para2'>E-Comm , 4578 <br/> Marmora Road,<br/> Glasgow D04 89GR</div>
<div className='info  fs-4'>Information</div>
<div className='info1'>
    About us <br/>
    Information <br/>
    Privacy Policy<br/>
    Terms & Condition
</div>

<div className=' Service fs-4'>Service</div>
<div className='Service1'>
    About us <br/>
    Information <br/>
    Privacy Policy<br/>
    Terms & Condition
</div>

<div className=' account fs-4'>My Account</div>
<div className='account1'>
    About us <br/>
    Information <br/>
    Privacy Policy<br/>
    Terms & Condition
</div>

<div className=' offer fs-4'>Our Offer</div>
<div className='offer1'>
    About us <br/>
    Information <br/>
    Privacy Policy<br/>
    Terms & Condition
</div>
<div className='bigline'>
<hr></hr>
</div>
<div className='Capture'>
<img src={Capture} width="240" height="40" ></img></div>
</div>
<div className='com'>
© 2018 Ecommerce theme by www.bisenbaev.com
</div>
</div>
    )
}
export default Landingpage;







