import React from "react";
import { card1,card2,card3,card4,card5,card6,card7,card8,card9,card10 } from "../index";



function Box() {
    const cardData = [
        {
            id: 1,
            img:<img src={ card1 }/> ,
            detailProduct : 'Rent a Car Lahor Suzuki Mehran Alto Cultus',
            Rate : 'RS 5,000,000',
            Address : 'Wapda Town Phase 1 Lahor ; 4 mint ago'
        },
        {
            id: 2,
            img:<img src={ card2 }/> ,
            detailProduct : 'Ideally Located Residential Plot For sale In Naya Nazimabad - Block M',
            Rate : 'RS 5,000,000',
            Address : 'Naya Nazimabad - Block M, Karachi : 3 Days Ago'
        },
        {
            id: 3,
            img:<img src={ card3 }/> ,
            detailProduct : 'Rent a Car Lahor Suzuki Mehran Alto Cultus',
            Rate : 'RS 5,000,000',
            Address : 'Wapda Town Phase 1 Lahor ; 4 mint ago'
        },
        {
            id: 4,
            img:<img src={ card4 }/> ,
            detailProduct : 'Rent a Car Lahor Suzuki Mehran Alto Cultus',
            Rate : 'RS 5,000,000',
            Address : 'Wapda Town Phase 1 Lahor ; 4 mint ago'
        },
        {
            id: 5,
            img:<img src={ card5 }/> ,
            detailProduct : 'Rent a Car Lahor Suzuki Mehran Alto Cultus',
            Rate : 'RS 5,000,000',
            Address : 'Wapda Town Phase 1 Lahor ; 4 mint ago'
        },  {
            id: 6,
            img:<img src={ card6 }/> ,
            detailProduct : 'Rent a Car Lahor Suzuki Mehran Alto Cultus',
            Rate : 'RS 5,000,000',
            Address : 'Wapda Town Phase 1 Lahor ; 4 mint ago'
        },
        {
            id: 7,
            img:<img src={ card7 }/> ,
            detailProduct : 'Rent a Car Lahor Suzuki Mehran Alto Cultus',
            Rate : 'RS 5,000,000',
            Address : 'Wapda Town Phase 1 Lahor ; 4 mint ago'
        },
        {
            id: 8,
            img:<img src={ card8 }/> ,
            detailProduct : 'Rent a Car Lahor Suzuki Mehran Alto Cultus',
            Rate : 'RS 5,000,000',
            Address : 'Wapda Town Phase 1 Lahor ; 4 mint ago'
        },
        {
            id: 9,
            img:<img src={ card9 }/> ,
            detailProduct : 'Rent a Car Lahor Suzuki Mehran Alto Cultus',
            Rate : 'RS 5,000,000',
            Address : 'Wapda Town Phase 1 Lahor ; 4 mint ago'
        },
        {
            id: 10,
            img:<img src={ card10 }/> ,
            detailProduct : 'Rent a Car Lahor Suzuki Mehran Alto Cultus',
            Rate : 'RS 5,000,000',
            Address : 'Wapda Town Phase 1 Lahor ; 4 mint ago'
        },
        {
            id: 11,
            img:<img src={ card1 }/> ,
            detailProduct : 'Rent a Car Lahor Suzuki Mehran Alto Cultus',
            Rate : 'RS 5,000,000',
            Address : 'Wapda Town Phase 1 Lahor ; 4 mint ago'
        },
        {
            id: 12,
            img:<img src={ card1 }/> ,
            detailProduct : 'Rent a Car Lahor Suzuki Mehran Alto Cultus',
            Rate : 'RS 5,000,000',
            Address : 'Wapda Town Phase 1 Lahor ; 4 mint ago'
        },
        {
            id: 13,
            img:<img src={ card1 }/> ,
            detailProduct : 'Rent a Car Lahor Suzuki Mehran Alto Cultus',
            Rate : 'RS 5,000,000',
            Address : 'Wapda Town Phase 1 Lahor ; 4 mint ago'
        },
        {
            id: 14,
            img:<img src={ card1 }/> ,
            detailProduct : 'Rent a Car Lahor Suzuki Mehran Alto Cultus',
            Rate : 'RS 5,000,000',
            Address : 'Wapda Town Phase 1 Lahor ; 4 mint ago'
        },
        {
            id: 15,
            img:<img src={ card1 }/> ,
            detailProduct : 'Rent a Car Lahor Suzuki Mehran Alto Cultus',
            Rate : 'RS 5,000,000',
            Address : 'Wapda Town Phase 1 Lahor ; 4 mint ago'
        },
        {
            id: 16,
            img:<img src={ card1 }/> ,
            detailProduct : 'Rent a Car Lahor Suzuki Mehran Alto Cultus',
            Rate : 'RS 5,000,000',
            Address : 'Wapda Town Phase 1 Lahor ; 4 mint ago'
        }
    ]

    return <>
        <div className="Cards">
            {cardData.map((items, id) => {
                return (
                    <div key={id}>
                        {/* <div className="Card-flip">
                            <div className="flip-card-inner">
                                <div className="front-card">{items.img}</div>
                                <div className="back-card"> */}
                        <div className="Cards-box">
                            <div className="Card-child">
                                <div className="Features"><p>Features</p></div>
                                <div className="picture">{items.img}</div>
                            </div>
                            <div className="Card-Texts">
                                <div className="First-Row">
                                <div className="detail">{items.detailProduct}</div>
                                <div className="heart">🤍</div>
                                </div>
                                <div className="Price">{items.Rate}</div>
                            <div className="Adress">
                                <div className="adress-child">{items.Address}</div>
                            </div>
                            </div>
                        </div>
                        {/* </div>
                        </div>
                    </div> */}
                    </div>
                )
            })
            }


        </div>

    </>
}

export default Box;