import React from 'react';
// import { Card, Col, Row } from 'react-bootstrap';
import "./Card1.css"

const Card1 = () => {
    return (


<div className="flex items-center justify-center py-6">
  <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 px-4">
    <div className="group relative cursor-pointer items-center rounded-lg  justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
     
      <div className="h-96 w-72">
        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif text-3xl font-bold text-white pb-10">Beauty</h1>
        <p className="mb-3 text-lg italic text-white opacity-1 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
        <button className="rounded-full  py-2 px-3.5 font-com text-sm capitalize text-black shadow shadow-black/60">See More</button>
      </div>
    </div>
    
    
    
    <div className="group relative cursor-pointer items-center rounded-lg justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div className="h-96 w-72">
        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif text-3xl font-bold text-white pb-10">Beyond Builder</h1>
        <p className="mb-3 text-lg italic text-white opacity-1 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
        <button className="rounded-full bg-neutral-900 py-2 px-3.5  capitalize text-white shadow shadow-black/60">See More</button>
      </div>
    </div>
    
    
    
    <div className="group relative cursor-pointer items-center rounded-lg justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div className="h-96 w-72">
        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1502675135487-e971002a6adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[65%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif text-3xl font-bold text-white pb-16">Shooting Star</h1>
        <p className="mb-3 text-lg italic text-white opacity-1  duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
        <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
      </div>
    </div>

    <div className="group relative cursor-pointer items-center rounded-lg justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div className="h-96 w-72">
        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif text-3xl font-bold text-white pb-10">Beyond Builder</h1>
        <p className="mb-3 text-lg italic text-white opacity-1 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
        <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
      </div>
    </div>


    <div className="group relative cursor-pointer items-center rounded-lg justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div className="h-96 w-72">
        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif text-3xl font-bold text-white pb-10">Beyond Builder</h1>
        <p className="mb-3 text-lg italic text-white opacity-1 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
        <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
      </div>
    </div>


    <div className="group relative cursor-pointer items-center rounded-lg justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div className="h-96 w-72">
        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1519408469771-2586093c3f14?q=80&w=1302&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif text-3xl font-bold text-white pb-10">Beyond Builder</h1>
        <p className="mb-3 text-lg italic text-white opacity-1 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
        <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
      </div>
    </div>


    <div className="group relative cursor-pointer items-center rounded-lg justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div className="h-96 w-72">
        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif text-3xl font-bold text-white pb-10">Beyond Builder</h1>
        <p className="mb-3 text-lg italic text-white opacity-1 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
        <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
      </div>
    </div>

    <div className="group relative cursor-pointer items-center rounded-lg justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div className="h-96 w-72">
        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://media.istockphoto.com/id/1456259227/photo/concept-e-learning-education-man-using-laptop-with-online-education-icon-on-virtual-screen.jpg?s=1024x1024&w=is&k=20&c=GJGkngwPVM_DxVckdMlWlcEap6jyIN779_Dr9_TrMZQ=" alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif text-3xl font-bold text-white pb-10">Beyond Builder</h1>
        <p className="mb-3 text-lg italic text-white opacity-1 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
        <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
      </div>
    </div>


  </div>
  <div className="fixed bottom-16">
    {/* <p className="font-com text-2xl font-semibold text-white">All Images are from <a href="https://unsplash.com" class="text-blue-500">Unsplash.com</a></p> */}
  </div>
</div>






















    //     <Row xs={1} md={2} className="g-4">
    //   {Array.from({ length: 2 }).map((_, idx) => (
    //     <Col key={idx}>
    //       <Card className='cardcss'>
    //         <Card.Img variant="top" src="holder.js/100px160" />
    //         <Card.Body>
    //           <Card.Title>Card title</Card.Title>
    //           <Card.Text>
    //             This is a longer card with supporting text below as a natural
    //             lead-in to additional content. This content is a little bit
    //             longer.
    //           </Card.Text>
    //         </Card.Body>
    //       </Card>
    //     </Col>
    //   ))}
    // </Row>

    );
};

export default Card1;